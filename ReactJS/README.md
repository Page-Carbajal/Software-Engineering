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



####1. Create test-reactjs project

Kickstart this project by running the command 

**npm init** on a folder named **test-reactjs**, or any other name you like.

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

1. Install **babel** running the command **npm install babel -g**
2. Install **webpack** globally by running the command **npm install webpack -g**. 
3. Add **webpack** to your project with the command **npm install webpack --save-dev**

Your **package.json** file should look like this now.
```javascript

  "devDependencies": {
    "webpack": "^1.12.2"
  }

````

####3. Install react and react-dom

Now Lets go ahead and tell our new project that we want to use **ReactJS** 

1. Run the command **npm install react --save-dev babel-loader**
2. Then run the command **npm intall react-dom --save** to install **react-dom**.

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

