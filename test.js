var Gamification = require("./");

var app = new Gamification.Server();

app.variables.port = "2010";
app.get("/", ctx => {
    ctx.draw({ objectType: "cube" })
})

app.listen(":" + app.variables.port, () => console.log("server started"))