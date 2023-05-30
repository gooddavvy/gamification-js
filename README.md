# What is GamificationJS?

This is a 3D Node.js package that makes your web apps get gamified, looking like animation--and it was inspired by GoLang Fiber and Express.js; but remember it is still in progress.

# Docs

## Installation

In order to use this package, you'll need to install it. Here are the installation steps.

1. **Add a line of code to `package.json`.** Add this line of code to the `devDependencies` of your `package.json` file: `"gamification-js": "github:gooddavvy/gamification-js"`.
2. **Install.** Next, run this command in your terminal so that the changes from your `package.json` file takes effect: `npm install`.

## Simple Gamification Server

Now write this in your Node.js file:

```js
var Gamification = require("gamification-js");

var app = new Gamification.Server();

app.get("/", (ctx) => {
  ctx.res.send(`
        <h1>Hello, GamificationJS!</h1>
        <p>This is the home page.</p>
    `);
});

app.listen(":8080", () => console.log("server started"));
```

In this code, `:8080` represents that the port for the server is 8080. You can change this port to the port you want for your app, or leave it like that.

To run this code, you run this command in the terminal: `npx nodemon server.js`. Don't forget to replace `server.js` with the actual name of your Node.js file. Now you can visit `https://localhost:8080` and it should render some HTML as expected.

Happy Hacking with Gamification!
