# ToDoManage

Something more then just another toDo app

## Description

The idea was that we can make the project of the application and then write it using the language or framework of choice. Like our buisiness logic is language and framework agnostic.

So, I decided to write the front-end application from the scratch starting with the project.

## Installation and Run

Firstly, you need NodeJs to be installed on your computer.

try type `node --version` in your console.

[Get NodeJS](https://nodejs.org/en/)

To run project you need TypeScript installed globally

```
npm install -g typescript@next
```

To build project run

```
./application/build.sh
```

Open application with your browser

```
./application/dist/index.html
```

## Separation of concerns

Lets assume our app is a set of conserns. (Like in separation of concerns principle).

So, lets name them:
* store data,
* represent data
* store data between sessions
...

Our conserns made of API and implementation.
So, we define ancestors to make an API manifest.

We have one *major* consern. It is *Buisiness Logic*.
It is the only place we have different concerns in one place.

Our buisiness logic consists of 

1. *Use Cases* and *Controllers* - the logic part.
2. *View Pool* and *ViewControllers* - the map to view-model part.

So we have two places where different concerns can meet.

In fact there is no difference what framework or library you use, your buisiness logic's API stay the same.

## Version history

v 1.0.0 - we have functioning ToDoApplication

## Feature Pool

* style the application
* store data between sessions
* request confirmation when leave the toDo details with unsaved data
* do not render toDoDetails when no toDo selected
* click outside unselects toDo

## Extention with 3rd party libraries.

So, the idea was that there's no difference what libraries you use, the buisiness logic stay the same.

### React ecosystem

* React (replaces View)
* redux (replaces Model)
* react-redux (replaces viewControllers and ViewPool)
* redux-saga (replaces UseCases)

### Angular 2+ ecosystem

* rewrite the application using the Angular 8+