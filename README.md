Marko Widgets with Lasso.js
===========================

This sample app demonstrates how to build a UI component using [Marko Widgets](https://github.com/marko-js/marko-widgets) that uses [Lasso.js](https://github.com/lasso-js/lasso) to bundle up the required JavaScript and CSS code.

# Installation

```
git clone https://github.com/marko-js-samples/widget-bind.git
cd widget-bind
npm install
```

# Running

You can choose to either run this application as a Express-based server or to simply build the static HTML, JS and CSS files.

## Option 1) Starting a Server

```
node server.js
```

Then visit: http://localhost:8080/

To start in production mode (minification, bundling, fingerprinting, etc.) simply use the following command:

```
NODE_ENV=production node server.js
```

## Option 2) Build files only

```
node build.js
```

The generated HTML, JS and CSS files will be placed in the `build` directory in the root of the project.

To build static files in production mode (minification, bundling, fingerprinting, etc.) simply use the following command:

```
NODE_ENV=production node build.js
```