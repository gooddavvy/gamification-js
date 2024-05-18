var Gamification = require("./");

var app = new Gamification.Server();

app.variables.port = "2010";
app.get("/", (ctx) => {
    ctx.res.send(`
          <title>My First GamificationJS App!</title>
          <h1>Hello, GamificationJS!</h1>
          <p>This is the home page.</p>
      `);

});
app.get("/draw", ctx => {
    ctx.res.send(`
        <title>Drawing with GamificationJS</title>
        <h1>This is a cube!</h1>
        ${ctx.draw({ objectType: "cube" })}
    `);
})

app.listen(":" + app.variables.port, () => console.log("server started"))