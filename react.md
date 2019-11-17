# React ecosystem

## Intro

We replace the application concerns (model, view, buisiness_logic) one by one with react ecosystem modules.

## Step-by-step plan

1. Build
2. Branch for each React ecosystem component
3. TargetBranch

## Map application concerns to React ecosystem modules.

So, the 3rd party libraries will replace what we initially implemented.

react - view - **V**

react - redux - viewController

redux - model - **V**

redux-saga - buisiness_logic - **V**

## Version history

v1.0.0-React

* buld implemented
* react views implemented

v2.0.0-React

* implemented redux store

v2.0.1-React

* some critical fixes to work with new model correctly

v3.0.0-React

* buisiness logic implemented using redux-saga
