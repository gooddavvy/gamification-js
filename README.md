# What is GamificationJS?

This is a 3D Node.js package that makes your web apps get gamified, looking like animation--and it was inspired by GoLang Fiber and Express.js; but remember it is still in progress. It saves a developers time by writing most of the CSS and letting the developer worry only about the logic. This package is very fun and easy to use, and I recommend you try it out!

# Docs

**Installation:**

In order to use this package, you'll need to install it. Here are the installation steps.

1. **Add a line of code to `package.json`.** Add this line of code to the `devDependencies` of your `package.json` file: `"gamification-js": "github:gooddavvy/gamification-js"`.
2. **Install.** Next, run this command in your terminal so that the changes from your `package.json` file takes effect: `npm install`.

## Simple Gamification Server

Now write this in your Node.js file:

```js
var Gamification = require("./");
var app = new Gamification.Server();

app.variables.port = ":8080";
app.get("/", (ctx) => {
  ctx.res.send(`
          ${ctx.title("My First GamificationJS App!")}
          <h1>Hello, GamificationJS!</h1>
          <p>This is the home page.</p>
    `);
});
app.get("/draw", (ctx) => {
  ctx.res.send(`
        ${ctx.title("Drawing with GamificationJS")}
        ${ctx.setTheme("dark")}
        ${ctx.setFontFamily("Arial")}
        <h1>This is a cube!</h1>
        ${ctx.draw({
          objectShape: "cube",
          backgroundColor: "gray",
          labels: { front: "My Frontie Front!!!" },
        })}
        <br />
        <h1>And this is a rectangle!</h1>
        ${ctx.draw({ objectShape: "rectangle", backgroundColor: "gray" })}
    `);
});
app.run(app.variables.port, () => console.log("server started"));
```

In this code, `:8080` represents that the port for the server is 8080. You can change this port to the port you want for your app, or leave it like that.

To run this code, you run this command in the terminal: `npx nodemon server.js` (`nodemon` is already installed by default when you install `gamification-js`). Don't forget to replace `server.js` with the actual name of your Node.js file. Now you can visit `http://localhost:8080` and `http://localhost:8080/draw` and it should render some HTML and drawings as expected.

Happy Gamifying with Gamification!
