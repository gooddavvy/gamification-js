var Gamification = require("../");
var app = new Gamification.Server();

app.variables.port = process.env["PORT"] || ":2010";
app.get("/", ctx => {
    ctx.res.send(`
          ${ctx.title("My First GamificationJS App!")}
          <h1>Hello, GamificationJS!</h1>
          <p>This is the home page.</p>
    `);
});
app.get("/draw", ctx => {
    ctx.res.send(`
        ${ctx.title("Drawing with GamificationJS")}
        ${ctx.setTheme("dark")}
        ${ctx.setFontFamily("Arial")}
        <h1>This is a cube!</h1>
        ${ctx.draw({ objectShape: "cube", fontColor: "gray", labels: { front: "My Frontie Front!!!" } })}
        <br />
        <h1>And this is a rectangle!</h1>
        ${ctx.draw({ objectShape: "rectangle", fontColor: "gray" })}

        ${ctx.button("Click me", () => console.log("Hello, you!"))}
        ${ctx.button("Click us", () => console.log("Hello, world!"))}
    `);
})
app.run(app.variables.port, () => console.log("server started"));
