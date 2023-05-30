var express = require("express");

var app = express();

class Server {
    constructor() {
        this.variables = {};
    }

    /// this function is no longer being used because it does nothing
    draw(objectProps) {

    }

    /// to get a route
    get(routePath, routeHandler) {
        app.get(routePath, (req, res) => {
            var context = {
                req, res, draw(objectProps) {
                    var { objectType } = objectProps;
                    if (objectType === "cube") {
                        return "<p>this is a text cube</p>";
                    }
                }
            };
            routeHandler(context);
        })
    }

    /// to listen to the server
    listen(port, callback) {
        app.listen(parseInt(port.replace(":", "")), callback);
    }
}

module.exports = { Server };