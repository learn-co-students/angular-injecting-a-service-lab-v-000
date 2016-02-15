# Injecting a Service

## Objectives

- Create a $timeout that updates the View

## Instructions

Let's inject one of Angular's built in services into our controller. 

For this lab, we're going to make use of `$timeout`. `$timeout` allows us to create timeouts (similar to `setTimeout`) in our applications whilst ensuring that any changes to our model done inside a timeout gets reflected in the view.

`$timeout` accepts the same parameters as `setTimeout` - a function and an integer for how many milliseconds delay.

```js
$timeout(function () {
	// this would be fired after 2 seconds!
}, 2000);
```

First, lets setup our directory structure:
 
- js/
 - app/
   - controllers/
     - ContactController.js
   - app.js
 - angular.js
- index.html

You can find `app.js`, `angular.js` and `index.html` in this repo.

Let's create our controller inside `ContactController.js`, this should have two parameters - `$scope` and `$timeout` (it doesn't matter what order you put them in, if you don't believe me - try it!).

Attach the controller to our `app` module.

Now, inside our controller, set `$scope.name` to your name. We previously touched on using controllerAs, but as we need to use two simple services for this lab, we will be using `$scope`.

Below that, set a $timeout for 5 seconds. Inside the function, set `$scope.name` to something else.

Open up `index.html` and wait 5 seconds - you'll see the view get updated with our new name!
