var express = require("express");

var app = express();

class Server {
  constructor() {
    this.variables = {};
  }

  /// this function gives html draw info
  draw(objectProps) {
    var { objectShape, width, height, backgroundColor, labels } = objectProps;

    switch (objectShape) {
      case "cube":
        return {
          "styles": `  
                      .cube {
                        width: ${width?.toString() || "200px"};
                        height: ${width?.toString() || "200px"};
                        /* position: relative; */
                        transform-style: preserve-3d;
                        animation: rotate 5s infinite linear;
                      }
                      
                      .cube .face {
                        position: absolute;
                        width: 200px;
                        height: 200px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: white;
                        font-size: 24px;
                        /* background-color: rgba(0, 0, 0, 0.5) */
                        ${backgroundColor ? `background-color: ${backgroundColor};` : "background-color: rgba(0, 0, 0, 0.5);"}
                      }
                      
                      .cube .front {
                        transform: translateZ(100px);
                      }
                      
                      .cube .back {
                        transform: rotateY(180deg) translateZ(100px);
                      }
                      
                      .cube .right {
                        transform: rotateY(90deg) translateZ(100px);
                      }
                      
                      .cube .left {
                        transform: rotateY(-90deg) translateZ(100px);
                      }
                      
                      .cube .top {
                        transform: rotateX(90deg) translateZ(100px);
                      }
                      
                      .cube .bottom {
                        transform: rotateX(-90deg) translateZ(100px);
                      }
                      
                      @keyframes rotate {
                        from {
                          transform: rotateY(0deg);
                        }
                        to {
                          transform: rotateY(360deg);
                        }
                      }
                      `,
          "HTML": `
            <div class="cube">
                <div class="face front">${labels?.front || "Front"}</div>
                <div class="face back">${labels?.back || "Back"}</div>
                <div class="face right">${labels?.right || "Right"}</div>
                <div class="face left">${labels?.left || "Left"}</div>
                <div class="face top">${labels?.top || "Top"}</div>
                <div class="face bottom">${labels?.bottom || "Bottom"}</div>
            </div>
                    `,
        };
      case "rectangle":
        return {
          "styles": `
          .rectangle {
            width: ${width?.toString() || "300px"};
            height: ${height?.toString() || "200px"};
            position: relative;
            perspective: 1000px;
          }
          
          .rectangle .side {
            position: absolute;
            width: 300px;
            height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 24px;
            /* background-color: rgba(0, 0, 0, 0.5); */
            ${backgroundColor ? `background-color: ${backgroundColor};` : "background-color: rgba(0, 0, 0, 0.5);"}
            transition: transform 0.5s;
          }
          
          .rectangle .front {
            transform: translateZ(100px);
          }
          
          .rectangle .back {
            transform: translateZ(-100px);
          }
          
          .rectangle .right {
            transform: rotateY(90deg) translateX(150px);
          }
          
          .rectangle .left {
            transform: rotateY(-90deg) translateX(-150px);
          }
          
          .rectangle .top {
            transform: rotateX(90deg) translateY(-100px);
          }
          
          .rectangle .bottom {
            transform: rotateX(-90deg) translateY(100px);
          }
          
          .rectangle:hover .rectangle .side {
            transform: rotateX(0deg) rotateY(0deg);
          }          
          `,
          "HTML": `
            <div class="rectangle">
              <div class="side front">${labels?.front || "Front"}</div>
              <div class="side back">${labels?.back || "Back"}</div>
              <div class="side right">${labels?.right || "Right"}</div>
              <div class="side left">${labels?.left || "Left"}</div>
              <div class="side top">${labels?.top || "Top"}</div>
              <div class="side bottom">${labels?.bottom || "Bottom"}</div>
            </div>
          `,
        };
      default:
        return {
          "styles": ``,
          "HTML": `
            <script>
              console.log("Object shape ${objectShape} invalid or currently unsupported. Sorry if unsupported!")
            </script>
          `
        }
    }
  }

  /// to get a route
  get(routePath, routeHandler) {
    app.get(routePath, (req, res) => {
      var context = {
        req,
        res,
        title: pageTitle => {
          return `<title>${pageTitle}</title>`;
        },
        setTheme: theme => {
          if (theme === "dark") {
            return `
              <style>
                body {
                  background-color: black;
                  color: white;
                }
              </style>
            `;
          } else if (theme === "light") {
            return `
              <style>
                body {
                  background-color: white;
                  color: black;
                }
              </style>
            `;
          }

          return `
            <style>
              body {
                background-color: white;
                color: black;
              }
            </style>
          `;
        },
        setFontFamily: fontFamily => {
          return `<style>body { font-family: ${fontFamily}; }</style>`
        },
        draw: objectProps => {
          var drawing = this.draw(objectProps);
          return `<style>${drawing.styles}</style>${drawing.HTML}`;
        },
      }
      routeHandler(context);
    })
  }

  /// to run the server
  run(port, callback) {
    let e = null;

    try {
      app.listen(parseInt(port.replace(":", "")), () => {
        callback();
      });
    }
    catch (err) {
      e = err;
    }

    return e;
  }
}

module.exports = { Server };