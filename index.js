var express = require("express");
var { draw } = require("./draw");
var sendJSON = (req, res, next) => {
  res.sendJSON = data => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(data));
  };
  next();
}

class Server {
  constructor() {
    this.variables = {
      port: ":8501"
    }

    this.expressApp = express();
    this.draw = draw;

    this.expressApp.use(sendJSON);
  }

  /// to get a route
  get(routePath, routeHandler) {
    this.expressApp.get(routePath, (req, res) => {
      var context = {
        req,
        res,
        title: pageTitle => {
          return `<title>${pageTitle}</title>`;
        },
        button: (label, onClick, styles) => {
          this.expressApp.get(`/gamification_/btn-handlers/${label.replace(" ", "-")}`, (_, response) => {
            onClick();
            response.sendJSON({ message: "Finished executing button handler" });
          });
          return `
            <button
              type="button"
              onclick="document.gamification_fetchDataFromAPI('/gamification_/btn-handlers/${label.replace(" ", "-")}')"
              style="margin-top: ${styles?.marginTop || "30px"}; height: ${styles?.height || "50px"}; width: ${styles?.width || "145px"}; border-radius: ${styles?.borderRadius || "12px"}; border-color: ${styles?.borderColor || "darkred"}; background-color: ${styles?.bgColor || "var(--theme-bg)"}; color: ${styles?.fontColor || "var(--theme-fc)"}; font-weight: ${styles?.fontWeight || "bold"};"
            >${label}</button>
            <script>
                document.gamification_fetchDataFromAPI = async function (url) {
                  try {
                      const response = await fetch(url);
                      
                      if (!response.ok) {
                          console.warn("Network response was not ok");
                      }
              
                      const data = await response.json();
                      return data;
                  } catch (error) {
                      console.error("Error fetching data:", error);
                      return null;
                  }
                }
            </script>
          `;
        },
        setTheme: theme => {
          if (theme === "dark") {
            return `
              <style>
                body {
                  background-color: black;
                  color: white;
                }
                :root {
                  --theme-bg: black;
                  --theme-fc: white;
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
                :root {
                  --theme-bg: white;
                  --theme-fc: black;
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
              :root {
                --theme-bg: white;
                --them-fc: black;
              }
            </style>
          `;
        },
        setFontFamily: fontFamily => {
          return `<style>body { font-family: ${fontFamily}; }</style>`
        },
        getExpressServer: () => {
          return this.expressApp;
        },
        draw: objectProps => {
          var drawing = this.draw(objectProps);
          return `<style>${drawing.styles}</style>${drawing.HTML}`;
        },
      }
      routeHandler(context);
    });
  }

  /// to run the server
  run(port, callback) {
    let e = null;

    try {
      this.expressApp.listen(parseInt(port.replace(":", "")), () => {
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