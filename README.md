# What is GamificationJS?

This is a 3D Node.js package that makes your web apps get gamified, looking like animation--and it was inspired by GoLang Fiber and Express.js; but remember it is still in progress. It is built on top of Express and saves a developer's time by writing most of the CSS and letting the developer worry only about the logic. This package is very fun and easy to use, and I recommend you try it out!

# Docs

**Installation:**

In order to use this package, you'll need to install it. It's fairly simple to install, just run this in your terminal:

```
npm install --save-dev gooddavvy/gamification-js
```

## Simple Gamification Server

Now write this in your Node.js file:

```js
var Gamification = require("gamification-js");
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

## Buttons

As of **May 20, 2024**, you can finally, and efficiently, work with buttons. Here's an example:

```javascript
var Gamification = require("gamification-js");
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
          fontColor: "gray",
          labels: { front: "My Frontie Front!!!" },
        })}
        <br />
        <h1>And this is a rectangle!</h1>
        ${ctx.draw({ objectShape: "rectangle", fontColor: "gray" })}

        ${ctx.button("Click me", () => console.log("Hello, you!"))}
        ${ctx.button("Click us", () => console.log("Hello, world!"))}
    `);
});
app.run(app.variables.port, () => console.log("server started"));
```

If you click "Click me", it will log in the _terminal_ (**not** browser console), `Hello, you!`, and with that information, you should be able to tell what happens when you click "Click us".

As you can see, with GamificationJS, you can let HTML buttons do things locally for you, which can be very useful in certain web development situations. **Important Note**: To avoid conflicts and/or errors, _all GamificationJS button names/labels (whichever way you call it)_ **must** be unique.

**How cool!**
Stay tuned!
