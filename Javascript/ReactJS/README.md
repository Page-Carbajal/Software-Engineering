# ReactJS an Introduction

What is ReactJS?

Is a next generation Javascript library for building user interfaces.

React introduces **JSX** so we can write reusable HTML components. This **JSX** is compiled into plain Javascript so you can use it in your app. 

## Setting up an Environment

In this chapter we will learn how to create a **ReactJS environment** using **npm**, [Webpack](http://webpack.github.io) and [Babel](https://babeljs.io).
 
We'll talk about **webpack** and **babel** in the future. For now, lets just know we use **Webpack** to build our **bundle.js** file with all of our dependecies. Babel is our transpiler, it transforms **Ecma-Script 6** to Javascript, also compiles JSX to plain Javascript. 
     
Before you start you'll need to install **npm** if you don't have it already.

### Our tasks

1. Create a test-reactjs project
2. Install babel and webpack
3. Install react and react-dom
4. Review our folder structure
5. Setting up webpack.config.js
6. Build bundle.js

#### 1. Create test-reactjs project

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

#### 2. Install babel and webpack

1. Install **babel** running the command `$ npm install babel -g`
2. Install **webpack** globally by running the command `$ npm install webpack -g` 
3. Add **webpack** to your project with the command `$ npm install webpack --save-dev`

Your **package.json** file should look like this now.

```javascript

  "devDependencies": {
    "webpack": "^1.12.2"
  }

````

#### 3. Install react and react-dom

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

#### 4. Review our folder structure

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

#### 5. Setting up webpack.config.js

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

#### 6. Build bundle.js

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

## I'm Your Father - Our first ReactJS example

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

###E cmaScript 6 - A taste

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


## VirtualDOM and Data Binding

What is VirtualDOM? Making changes to the DOM is quite expensive. Before doing so, react evaluates the VirtualDOM to make sure only the changes needed are applied. 

### The Binded I'm your father message

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

### Changes introduced 

0. The constructor
1. componentWillMount()
2. componentDidMount()
3. shouldComponentUpdate()
4. Data binding wit ref and onClick

This functions are defined by the **React.Component** class and extended by our own components to add interaction with the state. 

Before we explain what the code does. Just run the `$ webpack` command from within your root directory and test it out in index.html

This code introduces you to the concept of **state**. React manages a state so it can update all the components on change. Those 4 functions we have introduced to the code you can understand simply by their names what they do. 
 
#### The constructor
Well that works in the same way as you would expect. 

#### componentWillMount and componentDidMount
This two function are in place to add interactivity to the components.

### shouldComponentUpdate
This function returns a bool. If ***true*** it re-renders the component.
 
In this case we are comparing the nextState to the current state of the property name. If it doesn't change, we donnot render. 

#### ref and onClick

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

## Where's My Money? - A web app to track your expenses

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
        return <h1>Where is My Money?</h1>;
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

### The Design of the app


This is a Single Page Application that should look like this when finished. 

![alt text](https://raw.githubusercontent.com/Page-Carbajal/Software-Engineering/master/ReactJS/MyMoney/screenshot.png "My Money App Screenshot")

We are going to be using a Bootstrap for the overall look and feel. There's a nifty website called [Layoutit](http://layouitit.com). Its a Drag-And-Drop Bootstrap-Layout generator. This layout was partially generated there.

Our application will be segmented as follows

1. Navigation
    - Title
    - Menu
2. Content
    - Add Expense Section
    - Last Expenses Section
    - Expenses Categories Section

I do not know about you but I have to register every single expense as it happens. Other wise I end up asking my self **where in hell is my money?**.

Replace the contents of you **index.html** file with the following code. 

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Where's My Money?</title>
    <meta name="generator" content="http://layoutit.com">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

<div id="appWrapper" class="container-fluid"></div>

<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<!-- TODO: Require this dependencies with a vendors webpack config -->
<script type="text/javascript" src="dist/bundle.js"></script>
</body>
</html>

```

As we previously stated this app uses **bootstrap**, you can see 3 external files being requested from CDNs: jQuery, Bootstrap.css and Bootstrap.js.

We could of course package those files with **webpack** but that is not the purpose of this chapter. For now don't let it bug you too much!

**Why o why is the HTML so skinny?**

Simple answer. All HTML will be generated with the app components.

#### Section 1 - Navigation

We need a component that can provide the following HTML

```html

<div className="row">
    <div className="col-md-12">
        <nav className="navbar navbar-default" role="navigation" id="mainNavigation">
            <div className="navbar-header">
                <h3>Where is My Money?</h3>
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
                </button>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="#">View All Expenses</a>
                    </li>
                    <li>
                        <a href="#">Montly Expense Overview</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</div>

```

At first sight seems straight forward HTML code. However, you have to notice the use of the property **className** instead of the word **class** which is reserved in JSX. 

Lets build our MainNavigation component. Create a new **root/lib/components/MainNavigation.js** with the following code.

```javascript

import React from 'react';

class MainNavigation extends React.Component
{
    render()
    {
        return(
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-default" role="navigation" id="mainNavigation">
                        <div className="navbar-header">
                            <h3>Where is My Money?</h3>
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
                            </button>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a href="#">View All Expenses</a>
                                </li>
                                <li>
                                    <a href="#">Montly Expense Overview</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default MainNavigation;

```

The previous code imports React and then creates the **MainNavigation** component, which, as previously explained, is extending **React.Component** to render some HTML.

***From hereon:*** In the following components I will present you the finalized JSX file and explain what it does. 

**Cool!** You have a new navigation component. Time to integrate it on our application. 

Edit your **app.js** file to make it look like this

```javascript

import React from 'react';
import MainNavigation from './components/MainNavigation.js'

class App extends React.Component
{
    render()
    {
        return (
            <section className="reactApp">
                <MainNavigation />
                <h1>Where is my money?</h1>
            </section>
        );
    }
}

export default App;

```
 
And your **main.js** file to look like this

```javascript

import React from 'react';
import ReactDOM from 'react-dom';
import App from './lib/app.js';

ReactDOM.render(
    <App />,
    document.getElementById('appWrapper')
);

```

The tag **<MainNavigation />** executed within the **App** component will instantiate and render our **MainNavigation** component.

The **app** JSX component build the whole app from the ground up. The single responsibility of our **main.js** is to render it.  

Navigation does nothing right now. But for now I'm ok with that. Lets take care of more relevant stuff.
  
#### Section 2 - Content

For the content section we will create 3 components

1. AddExpense.js
2. ExpenseLists.js
    - ExpenseCategories.js
    - LatestExpenses.js
    - A child component called EnumeratedList.js


**AddExpense.js**

```javascript

import React from 'react'

class AddExpense extends React.Component
{
    render()
    {
        return(
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <h3>New Expense</h3>
                    <form role="form">
                        <div className="form-group">
                            <label for="name">Expense</label>
                            <input type="text" className="form-control" id="name" name="name" ref="name" />
                        </div>
                        <div className="form-group">
                            <label for="date">Date</label>
                            <input type="text" className="form-control" id="date" name="date" ref="date" />
                        </div>
                        <div className="form-group">
                            <label for="name">Category</label>
                            <select id="category" name="category" ref="category" className="form-control">
                                <option>Transportation</option>
                                <option>Food</option>
                                <option>Entertainment</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div> );
    }
}

export default AddExpense;

```

The **AddExpense** component executes the following tasks. 

1. Validate the date and name
2. Invoke a promise to register the expense
    - Modify the state 
    - If on return the expense was not registered update the state
3. Display notifications to the user

But before we do the significant code, we are going to lay the foundations for the other components.

**EnumeratedList**

```javascript

import React from 'react';

class EnumeratedList extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div className="list-group">
                <div className="list-group-item active">
                    <h4 className="list-group-item-heading">
                        {this.props.listTitle}
                    </h4>
                </div>
                <div className="list-group-item">
                    <span className="badge">14</span>Category Name
                </div>
            </div>
        );
    }

}

export default EnumeratedList;

```

And **ExpenseLists.js**

```javascript

import React from 'react';
import EnumeratedList from './EnumeratedList.js';

class ExpenseLists extends React.Component
{
    render()
    {
        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-2">
                    <EnumeratedList listTitle="Latest Expenses" />
                </div>
                <div className="col-md-4">
                    <EnumeratedList listTitle="Expense Categories" />
                </div>
            </div>
        );
    }
}

export default ExpenseLists;

```

**JSON is our friend**

So far we have a set of components that do pretty much nothing but render HTML. Lets hook up some data and rock your world shall we.

Add this code to the **index.html** file, just before the bundle.js request. 

```html

<script type="text/javascript">

    var categories = [
        {name: "Transportation", count: 5, amount: 100},
        {name: "Food", count: 20, amount: 150},
        {name: "Entertainment", count: 2, amount: 80}
    ];

    var latest = [
        {name: "Subway", count: 1, amount: 10},
        {name: "Movies", count: 1, amount: 14},
        {name: "Pizza", count: 1, amount: 7 }
    ];

</script>

```

Yes, we are going to use these variables as data source for our lists. The form will append data to this model and the lists will consume it. 

Next, modify your **EnumeratedList.js** file so it looks something like this

```javascript

import React from 'react';

class EnumeratedList extends React.Component
{
    render()
    {
        return(
            <div className="list-group">
                <div className="list-group-item active">
                    <h4 className="list-group-item-heading">
                        {this.props.listTitle}
                    </h4>
                </div>
                {this.props.source.map( function(item){
                    return(
                        <div className="list-group-item">
                            <span className="badge">{item.count}</span>{item.name}
                        </div>
                    );
                })}
            </div>
        );
    }

}

export default EnumeratedList;

```

Run the webpack command and open the index.html file to test it. 

You can see the data displayed on the lists. But how?. The modification we made to the component uses the **map** function to dynamically generate the list items.

### Finishing Touches

So far we have done some nice stuff of our little expenses app, but nothing significant yet. We have been using **props** to pass values to the controls and render on change. **ReactJS** says `render()` methods are written declaratively as functions of `this.props` and `this.state` -word for word-. This means every time you change the state or props of a control it wil **re-render**.

To finish our **Where's My Money** example we will be working with the state and propos of some of our components. 

We have an **App** component that renders both **AddExpense** form and the **ExpenseLists** boxes. We are going to create two new methods in our App component. upateDataSource and registerExpense. We are also going to set the state for our project on the **App** component constructor.

Once the App state has been initialized we will use it as the source for our **ExpenseLists** component. So every time we update the App state, the controls wil re render. 

#### The code for ***EnumeratedList.js*** file

```javascript

    render()
    {
        return(
            <div className="list-group">
                <div className="list-group-item active">
                    <h4 className="list-group-item-heading">
                        {this.props.listTitle}
                    </h4>
                </div>
                {this.state.source.map( function(item, key){
                    if(this.props.enumProperty == null || this.props.enumProperty != 'count'){
                        return(
                            <div className="list-group-item" key={key}>
                                <span className="badge">{item.amount}</span>{item.name}
                            </div>
                        );
                    } else {
                        return(
                            <div className="list-group-item" key={key}>
                                <span className="badge">{item.count}</span>{item.name}
                            </div>
                        );
                    }
                }.bind(this))}
            </div>
        );
    }
    
```
What we did here is add a little decision to make sure we are rendering amount on one list and the total cont on the other. **enumProperty**, **listTitle** and **source** are all properties of our component declared on the ExpenseLists.js file. 


#### Moving on. The code for ***ExpenseList.js*** file

```javascript

import React from 'react';
import EnumeratedList from './EnumeratedList.js'; //Includes the List component

class ExpenseLists extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {categories: this.props.source.categories, latest: this.props.source.latest};
    }

    render()
    {
        return(
            <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center">
                    <h3 className="expenseListsHeading">Lastets Expenses and Categories</h3>
                </div>
                <div className="col-md-4 col-md-offset-2">
                    <EnumeratedList id="lastExpenses" listTitle="Latest Expenses" source={this.state.latest} />
                </div>
                <div className="col-md-4">
                    <EnumeratedList id="topCategories" listTitle="Expense Categories" source={this.state.categories} enumProperty="count" />
                </div>
            </div>
        );
    }
}

export default ExpenseLists;

```

This component starts with a **constructor** to set both the **props** and the **state**. The state is later used as the source of both lists, **categories** and **latest expenses**. Since we are inheriting the state from a property, we can set the property **source** from the app itself. 


#### And now, the code for ***AddExpense.js***

```javascript

import React from 'react';

class AddExpense extends React.Component
{
    addExpenseClick(e)
    {
        e.preventDefault();

        var name = this.refs.name.value.trim();
        var amount = this.refs.amount.value.trim();
        var date = this.refs.date.value.trim();
        var category = this.refs.category.value.trim();

        // Call App Event
        this.props.onExpenseSubmit(name, amount, date, category);

        // Clean the form
        this.refs.name.value = '';
        this.refs.amount.value = '';
        this.refs.date.value = '';
    }

    render()
    {
        return(
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <h3>New Expense</h3>
                    <form role="form" onSubmit={this.addExpenseClick.bind(this)}>
                        <div className="form-group">
                            <label for="name">Expense</label>
                            <input type="text" className="form-control" id="name" name="name" ref="name" />
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-sm-6">
                                    <label for="amount">Amount</label>
                                    <input type="text" className="form-control" id="amount" name="amount" ref="amount" />
                                </div>
                                <div className="col-sm-6">
                                    <label for="date">Date</label>
                                    <input type="text" className="form-control" id="date" name="date" ref="date" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="name">Category</label>
                            <select id="category" name="category" ref="category" className="form-control">
                                <option value="Transportation">Transportation</option>
                                <option value="Food">Food</option>
                                <option value="Entertainment">Entertainment</option>
                            </select>
                        </div>
                        <p className="form-group">
                            <input type="submit" value="Add Expense" />
                        </p>
                    </form>
                </div>
            </div> );
    }
}

export default AddExpense;

```

This file adds a new function called **addExpenseClick**. The function is called whe the form is submitted to the server, it will prevent it's default behavior and call an **app.js** method declared as a property of this component. It also cleans the form. 

#### Finally the code for the ***app.js*** file

```javascript

import React from 'react';
import MainNavigation from './components/MainNavigation.js';
import AddExpense from './components/AddExpense.js';
import ExpenseLists from './components/ExpenseLists.js';
import _ from 'lodash';

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {source: {categories: categories, latest: latest}};
    }

    registerExpense(name, amount, date, category)
    {
        // TODO: Validate
        if( name.toString().trim() == '' || date.toString().trim() == '' || category.toString().trim() == '' ){
            console.log('Invalid Data');
            return false;
        }

        var latestExpense = {name: name, amount: parseFloat(amount), count: 1};
        var latestCategory = {name: category, amount: parseFloat(amount), count: 1};

        // TODO: Post data to server

        console.log('Latest Expense: ', latestExpense, '. Latest Category: ', latestCategory);

        var valueAdded = false;
        categories = _.each(categories, function(c){
            if( c.name == latestCategory.name ){
                c.amount = parseFloat(c.amount) + parseFloat(latestCategory.amount);
                c.count = parseFloat(c.count) + 1;
                valueAdded = true;
            }
        });

        if(!valueAdded){
            categories.push(latestCategory);
        }

        console.log('Updated Categories: ', categories);
        latest.push(latestExpense);
        console.log('Updated expenses: ', latest);
        this.setState({source: {categories: categories, latest: latest}});
    }

    updateDataSource()
    {
        // TODO: Actually get data from server
        this.setState( {source: {categories: categories, latest: latest} });

        // This function will run every 2 seconds
        setTimeout(function(){
            this.updateDataSource();
        }.bind(this), 2000);

    }

    componentDidMount()
    {
        setTimeout(function(){
            this.updateDataSource();
        }.bind(this), 2000);
    }

    render()
    {
        return (
            <section className="reactApp">
                <MainNavigation />
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1>Where is my money?</h1>
                        <hr />
                    </div>
                </div>
                <AddExpense onExpenseSubmit={this.registerExpense.bind(this)} />
                <ExpenseLists source={this.state.source} />
            </section>
        );
    }
}

export default App;

```

I went ahead and added support for [lodash](https://lodash.com) on this application. Just run the command `$ npm install lodash --save` and you are set.

Lets start simple. The constructor. In this function we are setting the initial values for our component properties and state. The **registerExpense** method is passed to the **AddExpense** component as the property **onExpenseSubmit** Do you see the **.bind(this)** after the function name. That instruction alone is binding the object App to the property **onExpenseSubmit** so it can be used within it. 

Now, when you click on the submit button of the form. The **AddExpense** component can call a parent function using the **onExpenseSubmit** property.

The function **registerExpense** kind of validates the values are not empty, then creates a couple of objects. latestExpense and latestCategory. Once the objects are created, the function uses **lodash** to iterate across the categories to **add** the **count** and **amount** values accordingly. If there's no record of a corresponding group, the new category is pushed to the **categories** array. The function also pushes the lastExpense to the **latest** array so they can be reflected on the state.
  
Once both arrays are updated, it *re-sets* the state. This event **triggers** a chain reaction that updates both lists.
 
#### One more thing

On componentDidMount we create a **setTimeout** event to fire **updateDataSource** this function is supposed to actually connect to the server using something like **jQuery.get** to get the data. This function will be calling itself every 2 seconds or so. If you want to test it just copy and past this code into your browser console
```javascript
latest.push( {name: 'Cab home', amount: 20, count: 1} );
```
 
It pushes an update to the **latest** array and you should see it after the **updateDataSource** function executes. 
 
#### Congratulations

You are now using **ReactJS** 

## Where to From here?

You now have a good understanding of how ReactJS works. Maybe, you are ready to try [Two-way binding](https://facebook.github.io/react/docs/two-way-binding-helpers.html). May be if you are felling sassy you can even buy the video [Mastering React JS](https://www.packtpub.com/web-development/mastering-reactjs-video). You can go to the official [React Documentation](https://facebook.github.io/react/docs/getting-started.html) 

Also do not forget to visit the sites of our resources to learn more about them. 

1. [Babel](http://babeljs.io)
2. [Webpack](webpack.github.io)
3. [Lodash](http://lodash.com)

Thank you for reading. [Tweet me](https://twitter.com/iaaxpage) if you'll like to follow up on something