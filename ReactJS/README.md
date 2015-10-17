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

##I'm Your Father - Our first ReactJS example

Lets create 2 new files. 

Index.html with this basic code
```html

<!DOCTYPE html>
<html>
<head>
    <title>ReactJS Demo</title>
</head>
<body>
    <div id="example"></div>
    <script type="text/javascript" src="dist/bundle.js"></script>
</body>
</html>

```

That's it for HTML right now. Time to run some JSX magic.

But before we do that. We are going to make sure to tell **webpack** it should babelify all **.js** files with this code
```javascript

        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]

```

Replace your empty **loaders** variable in your **webpack.config.js** for the one above. 
 
This line is telling webpack to run **babel-loader** for every **.js** file before adding it to the bundle. This way you can simply **require** all of your **JSX** components.


Now copy and paste this code into your a file names **index.js**

```javascript

var React = require('react');
var reactDOM = require('react-dom');

reactDOM.render(

    <h1>Luk, I am your father!</h1>,

    document.getElementById('example')

);

```

This JSX component. Receives 2 parameters. (1) The HTML to be rendered and (2) the **target** element. To append the HTML to.

Least but not last. Run the `$ webpack ` command from withing your project. The new bundle.js file will be created and you will see its size is around 600kb. Do not worry about that now. Just open the **index.html** file on your browser of choice. 

Voila, you are now officially using react.  **Good Job!**

###EcmaScript 6 - A taste

EcmaScript is the future of Javascript. The new release of javascript dramatically improves the language by adding killer features. Link to the [New Features in EcmaScript6](https://github.com/lukehoban/es6features).
 
Since this work is all about learning new things. Lets dump the requires in our **index.js** file and instead let us try **import**
```javascript

//var React = require('react');
//var ReactDOM = require('react-dom');
import * as React from 'react';
import ReactDOM from 'react-dom';

// The rest of the code...

```

What did we do here? 

Well one of those new features in JS6 is **import**. Both instructions are telling Javascript to ***import*** the modules into a variable. You can skip the variable part and import only a subset of functions directly into your class using {function1, function2}.

Moving forward. Lets close this introduction to react by creating a couple of JSX components we can use with **ReactDOM.render**

**index.js**
```javascript

//var React = require('react');
//var ReactDOM = require('react-dom');
import * as React from 'react';
import ReactDOM from 'react-dom';

class CustomYourFather extends React.Component
{
    render()
    {
        return React.DOM.h1(null, this.props.name + ', I am your father!' )
    }
}

ReactDOM.render(

    <YourFather />,

    document.getElementById('example')

);

```

Classes ahhh, that is pretty. What our YourFather Class does is very simple. We are creating a JSX component by extending **React.Component** and then implementing the function **render()**. Once the component is created we call it from ReactDOM like the example above. 

The **React.DOM()** function gets 3 parameters. (1) Element type, (2) Properties and (3) The content of the element. While the **React.DOM.h1()** function gets onlye the last 2 parameters. 
 
Lets build another component
```javascript

//var React = require('react');
//var ReactDOM = require('react-dom');
import * as React from 'react';
import ReactDOM from 'react-dom';

class CustomYourFather extends React.Component
{
    render()
    {
        //return React.DOM.h1(null, this.props.name + ', I am your father!' ) //Curlys are better!
        return <h1>{this.props.name}, Im your father!</h1>
    }
}

class YourFather extends React.Component
{
    render()
    {
        return React.createElement('h1', null, 'Luk, I am your father!' )
    }
}

ReactDOM.render(

    <CustomYourFather name="John Connor" />,

    document.getElementById('example')

);

```

The **CustomYourFather** component uses the property **name** to render the message "John Connor, I am your father!". Pretty straight forward.


##VirtualDOM and Data Binding

What is VirtualDOM? Making changes to the DOM is quite expensive. Before doing so, react evaluates the VirtualDOM to make sure only the changes needed are applied. 

###The Binded I'm your father message

We are going to bind our component to the state, so that when the state changes, the components are re-rendered. 

if you are coding along. Replace your current **index.js** with this code
```javascript

import * as React from 'react';
import ReactDOM from 'react-dom';

class CustomYourFather extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {name: 'John Connor'}
    }

    render()
    {
        //return React.DOM.h1(null, this.props.name + ', I am your father!' )
        return(
            <div>
                <h1>{this.state.name}, Im your father!</h1>
                <input type="text" ref='name' />
                <input type="button" value="Update state" onClick={this.updateMessage.bind(this)} />
            </div>
        );
    }

    updateMessage()
    {
        this.setState({ name: this.refs.name.value });
    }

    componentWillMount()
    {
        console.log('Before mounting!');
    }

    componentDidMount()
    {
        console.log('After mounting!');
    }
    
    shouldComponentMount(nextProps, nextState)
    {
        var reRndr = nextState.name != this.state.name;
        console.log('Should Re-render: ', reRndr);
        return reRndr;
    }

}

class YourFather extends React.Component
{
    render()
    {
        return React.createElement('h1', null, 'Luk, I am your father!' )
    }
}

ReactDOM.render( <CustomYourFather name="John Connor" />, document.getElementById('example') );

```

###Changes introduced 

0. The constructor
1. componentWillMount()
2. componentDidMount()
3. shouldComponentUpdate()
4. Data binding wit ref and onClick

This functions are defined by the **React.Component** class and extended by our own components to add interaction with the state. 

Before we explain what the code does. Just run the `$ webpack` command from within your root directory and test it out in index.html

This code introduces you to the concept of **state**. React manages a state so it can update all the components on change. Those 4 functions we have introduced to the code you can understand simply by their names what they do. 
 
####The constructor
Well that works in the same way as you would expect. 

####componentWillMount and componentDidMount
This two function are in place to add interactivity to the components.

###shouldComponentUpdate
This function returns a bool. If ***true*** it re-renders the component.
 
In this case we are comparing the nextState to the current state of the property name. If it doesn't change, we donnot render. 

####ref and onClick

**ref** is a react property. It indicates which **property** is binded to **which** control.

In Angular we experienced auto data binding. When the textbox changed, so did the spans. 
Here the textbox is not fully data binded. We use the button to set the state of the property to the new value in the textbox, and trigger the component rendering process

So. Is React re rendering the whole element or what?

Look at this HTML
```html
<div data-reactid=".0">
    <h1 data-reactid=".0.0"><span data-reactid=".0.0.0">Hello </span><span data-reactid=".0.0.1">Luk</span></h1>
    <h2 data-reactid=".0.1"><span data-reactid=".0.1.0">Luk</span><span data-reactid=".0.1.1">, I'm your father!</span></h2>
    <input type="text" data-reactid=".0.2"><input type="button" value="Update state" data-reactid=".0.3">
</div>
```

React is trying to affect the DOM as little as possible. So, no. It changes only the properties that need to be updated. 

##Where's My Money? - A web app to track your expenses

So far so good. To this point all the code created for our first demo app is available in the [YourFatherTest](https://github.com/Page-Carbajal/Software-Engineering/tree/master/ReactJS/YourFatherTest) directory within this repository. 

Now lets build a small application to keep track of where our money goes.

The purpose of this app is quite simple: **Register categorized expenses by date**.

I want to be able to know exactly how much money I am spending, when, where and why. 

I have created the empty directory MyMoney and ran the `$ npm init` command to configure the package and ran the whole [set up the environment](https://github.com/Page-Carbajal/Software-Engineering/tree/master/ReactJS#setting-up-an-environment) process. 

Now let us create a small subset of components and files. 

Instead of having all of our components in a single file as we did in the introduction. We will make use of the directory structure. 

Replace the contents of your **index.html** file with this code.
```html

<!DOCTYPE html>
<html>
<head>
    <title>Where is My Money?</title>
</head>
<body>

<div class="documentWrapper" id="documentWrapper">

</div>

<script type="text/javascript" src="dist/bundle.js"></script>
</body>
</html>

```

Create a new **root/lib/app.js** file with this code. 
```javascript

import React from 'react';

class App extends React.Component
{
    render()
    {
        return <h1>Where's My Money?</h1>;
    }
}

export default App;

```

Copy and paste this code into your **main.js** file
```javascript

import React from 'react';
import ReactDOM from 'react-dom';
import App from './lib/app.js';

ReactDOM.render(
    <App />,
    React.getElementById('documentWrapper')
);

```

Run the webpack command to generate the bundle file. Open the index on your browser. 

Now you know how to use import with other files. 

###The Design of the app

TBD


##Retriving Data from the Server
