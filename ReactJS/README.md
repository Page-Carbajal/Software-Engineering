#ReactJS an Introduction

What is ReactJS?

Is a next generation Javascript library for building user interfaces.

React introduces JSX so we can write reusable HTML components. This JSX is compiled into plain JS to be used by your app as needed 

##Features

- Virtual DOM


##Setting up an Environment

In this chapter we will lear how to create a ReactJS environment using **npm**.
 
We will install [Webpack](http://webpack.github.io) and [Babel](https://babeljs.io). We'll talk about these in the future. For now, lets just say that we use **Webpack** to manage our dependencies and build our **bundle.js**. Babel is our transpiler, it transforms Ecma-Script 6 to Javascript 5.1, also compiles JSX to plain Javascript. 
     
Before you start you'll need to install **npm** if you don't have it already.

###Our tasks

1. Create a test-reactjs project
2. Install babel and webpack
3. Install react and react-dom
4. Review our folder structure
5. Setting up webpack.config.js
6. Build bundle.js
7. First ReactJS sample


####1. Create test-reactjs project

Kickstart this project by running the command `$ npm init` on a folder named **test-reactjs**, or any other name you like.

Complete the process to create the project. **NPM** will then build an empty **package.json** file on the folder just like this.

```javascript

{
  "name": "test-reactjs",
  "version": "1.0.0",
  "description": "Testing ReactJS for the first time! Yeeeeei!",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Page Carbajal (http://pagecarbajal.com)",
  "license": "GPL-3.0"
}

```

####2. Install babel and webpack

1. Install **babel** running the command `$ npm install babel -g`
2. Install **webpack** globally by running the command `$ npm install webpack -g` 
3. Add **webpack** to your project with the command `$ npm install webpack --save-dev`

Your **package.json** file should look like this now.
```javascript

  "devDependencies": {
    "webpack": "^1.12.2"
  }

````

####3. Install react and react-dom

Now Lets go ahead and tell our new project that we want to use **ReactJS** 

1. Run the command `$ npm install react --save-dev babel-loader`
2. Then run the command `$ npm install react-dom --save` to install **react-dom**.

After this process your **package.json** file should look like this.
```javascript

{
  "name": "test-reactjs",
  "version": "1.0.0",
  "description": "Testing ReactJS for the first time! Yeeeeei!",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Page Carbajal (http://pagecarbajal.com)",
  "license": "GPL-3.0",
  "dependencies": {
    "react": "^0.14.0",
    "react-dom": "^0.14.0"
  },
  "devDependencies": {
    "babel-core": "^5.8.25",
    "babel-loader": "^5.3.2",
    "react": "^0.14.0",
    "webpack": "^1.12.2"
  }
}

```

####4. Review our folder structure

So far we have added a bunch of code to the project, and yet we have nothing to show for. Hang in there. This process is about setting up the environment for doing that. 

**File structure**

- <root>/**entry**.js
- <root>/package.json
- <root>/webpack.config.js
- <root>/README.md
- <root>/lib
    - <root>/lib/source.js
- <root>/dist
    - <root>/dist/bundle.js
- <root>/node_modules

The **lib** directory is where we store our source code. In this folder you will find all of our JSX and other javascript files.

The **dist** directory is where our source is compiled and then packaged to good old **Javascript**

The **entry.js** file is the file specified in our package.json file. In this case, index.js.

Lets run this command on the terminal `$ echo "console.log('Luk. I\'m your father');" > index.js`. This should create an index.js file that logs "Luk, I'm your father!" to console. 

Don't believe me just watch. Run the command `$ node index.js` from the terminal.    

####5. Setting up webpack.config.js

The file webpack.config.js will be used to indicate webpack with modules need compiling and packaging. 

Create a new **webpackconfig.js** file on the root of your project and type the following
 
```javascript

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: []
    }
};

```

####6. Build bundle.js

In a traditional web environment you would traditionally try to include the a number of **.js** files. 

This is not what we are doing here. We are building a bundle. A bundle will package all of your javascript in a single file. In our case is called **bundle.js**

Run the command `$ webpack ` from the terminal. A new file called **bundle.js** is created on the **dist** folder. 

It should look something like this. 

```javascript

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	console.log('Luk. I\'m your father');


/***/ }
/******/ ]);

```

Test it out again. Run the command `$ node ./dist/bundle.js`. 

####7. First ReactJS sample
