/// function gives html draw info
function draw(objectProps) {
  var { objectShape, width, height, backgroundColor, fontColor, labels } = objectProps;

  switch (objectShape) {
    case "cube":
      return {
        "styles": `  
                      .cube {
                        width: ${width || "200px"};
                        height: ${height || "200px"};
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
                        color: ${fontColor || "white"} !important;
                        font-size: 24px;
                        /* background-color: rgba(0, 0, 0, 0.5) */
                        ${backgroundColor ? `background-color: ${backgroundColor};` : "background-color: darkred;"}
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
            width: ${width || "300px"};
            height: ${height || "200px"};
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
            color: ${fontColor || "white"} !important;
            font-size: 24px;
            /* background-color: rgba(0, 0, 0, 0.5); */
            ${backgroundColor ? `background-color: ${backgroundColor} !important;` : "background-color: darkred !important;"}
            transition: transform 0.5s;
          }

        .rectangle.front {
          transform: translateZ(100px);
        }
          
        .rectangle.back {
          transform: translateZ(-100px);
        }
          
          .rectangle.right {
          transform: rotateY(90deg) translateX(150px);
        }
          
          .rectangle.left {
        transform: rotateY(-90deg) translateX(-150px);
      }
          
          .rectangle.top {
        transform: rotateX(90deg) translateY(-100px);
      }
          
          .rectangle.bottom {
        transform: rotateX(-90deg) translateY(100px);
      }
          
          .rectangle: hover.rectangle.side {
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
        < script >
        console.log("Object shape ${objectShape} invalid or currently unsupported. Sorry if unsupported!")
            </script >
        `
      }
  }
}

module.exports = { draw };