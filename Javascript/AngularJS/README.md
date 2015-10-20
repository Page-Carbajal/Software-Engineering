#Learning Angular JS Review

The content of this course is a review of the course [Learning Angular JS](https://www.safaribooksonline.com/library/view/learning-angular-js/9781771372138/) by Matt Frisbie.

***This work is intended to be a cheat-sheet for the course.***

Originally conceived as a MVC Framework for Javascript. Angular has gone a long way from that.
Angular is not your every day web framework. You have to widen your perspective about how things get done.

##The Code

All the code from this gist can be found on [JSFiddle](http://jsfiddle.net/pagecarbajal/3krth2Ld/25/)


##Features

1. Modular Framework 
	- Dependencies are not included when they are not necesarry
2. DataBinding 
    - The data in the view is synched with the data in the view
3. Plain JS
    - Allows to be used with other libraries
4. Deep Linking
5. Form Validation
6. Server Comms
7. Directives and Reusable HTML
8. Dependency Injection ($scope)
9. Testable
10. Is jQuery Agnostic



##Best Practices

- Concern Separation
- DRY
- Write good code
  - Reusable
  - Performance
- Test
- Refactor
- Read The Source Code


##Starting an Angular APP

An angular App is executed within a container. 

You can choose any HTML Element for the container of your app. Using the attribute ng-app.

In this case we have decided to use body as our container. 

https://gist.github.com/Page-Carbajal/feabbad7c2825021645e

{{}} is used for **interpolations**. 

You can use them to evaluate expressions or render variables.

{{5+3}} will render 8

###Controllers

There are 3 different ways o declare controllers. 

Assing a Controller to a Variable, which is not recommended. 

You can abstract the **app** module and delcare the controllers with the controller method

```javascript

app.controller('ContentController', function($scope){
    $scope.counter = 1;
    
    $scope.addOne = function(){
        $scope.counter ++;
    };
    
});


```

But as the best preactices suggest, you should always consider DRY and reusability. 

To accomplish such a goal. It is recommended to make Angular modules. And require those modules within your app.

```javascript

var app = angular.module('app', ['controllers']);

angular.module('controllers',[]).controller('SidebarController', function($scope){
    $scope.customMessage = 'Hi you doing?';
});


```

##Angular Directives

They are quite easy to learn so we are just going to mention those as we go along. 

Directives are a superset of html attributes related to properties or functions of the scope they're in. This means the directives can access properties and execute functions of **$scope** of the controller for instance:


###ng-click

This directive executes a function of the current scope

**HTML**
```html

<div ng-controller='ContentController'>
	<p>{{counter}}</p>
	<p>
		<input type="button" ng-click="addOne()" />
	</p>
</div>


```

**Javascript**
```javascript

var app = angular.module('app', ['controllers']);

app.controller('ContentController', function($scope){
    $scope.counter = 1;
    
    $scope.addOne = function(){
        $scope.counter ++;
        $scope.even = ($scope.counter%2 == 0);
    };
    
});

```

###ng-repeat

**ng-repeat** is a quite easy to use Iterator. Angular, assigns every element of the enumerator/collection to our dummy node **element**

####The HTML

```html

<div ng-repeat="element in myNumbers">
	{{ element }}
</div>


```

####The Script

```javascript

$scope.myNumbers = [1,2,3,4,5];

```

***Remeber***: Angular repeats all the HTML associated with ng-repeat directive. 
This code will render 5 divs. 


###ng-model and Angular Data Binding

Angular manages data binding with the ng-directive. 

This means that if you want an object to be **binded** to a data model. You have to tell Angular by using **ng-model**

**HTML**
```html

<p ng-model="myModel">
	This is content is binded to: <strong>{{myModel}}</strong>
</p>
<p ng-model="myModel">
	<input type="text" name="demo" ng-model="myModel" value="{{myModel}}">
</p>


```

Without a line of code. Angula will bind both elements to every single change of the model.


Angular creates instances of every single model based on the scope on change. 

You can start by having two nested controllers, and asigning to each of them the same model.

####Multiple instances for the model

Sometimes you may need to share values across nested controlles but keep the ability to have independent instances on each one. 

This can be achieved by referencing the model with a property instead of a single variable. 

**HTML**
```html

<h3>Single Instance</h3>
<p ng-model="myModel.text">
	This is content is binded to: <strong>{{myModel.text}}</strong>
</p>
<p ng-model="myModel.text">
	<input type="text" name="demo" ng-model="myModel.text" value="{{myModel.text}}">
</p>
<h3>Automatic Model Instances</h3>
<h4>Main Controller</h4>
<p ng-model="myModelTwo">
	<input type="text" name="demo02" ng-model="myModelTwo" value="{{myModelTwo}}">
</p>
<div ng-controller="SubController">
	<h4>Sub Controller</h4>
	<p ng-model="myModelTwo">
		<input type="text" name="demo03" ng-model="myModelTwo" value="{{myModelTwo}}">
	</p>
</div>

```

```javascript

$scope.myModelTwo = 'This is not here!';
$scope.myModel = {text: '1234'};

```


###Scope Watchers

Watchers allow us to inpect changes to the model and execute a validation, or process based on that change. 

Think of it like an **onChange** event, altough it is much more than that.

**HTML

```html
<h3>Watcher Sample</h3>
<div ng-controller="WatcherController">
	<p><label for="userName">Username:</label></p>
	<p><input id="userName" type="text" ng-model="user.name" value="{{user.name}}" /></p>
</div>


```

**Javascript**

```javascript

app.controller('WatcherController',function($scope){
	
	$scope.user = {name: 'Bruce Wayne'};

	$scope.$watch('user.name', function(){
		console.log('I am Batman');
	});

});

```

**Remember**: If abused. Watchers may compromise the performance of your application.

####Destroying watchers

TBD


**Note**: We will run the same React examples!