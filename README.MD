# Spring4RestCrud
User Management Server side code done by Spring 4 REST CRUD.
# Who needs this application
VueJS frontend ( [vue.js-v2-crud-application](https://github.com/rojaware/vue.js-v2-crud-application) ) will consume this web services
# Environment
JDK1.8, Eclipse Oxyzon
# Fix


## Vue.js v2 CRUD User Management Admin Application

Uses vue.js v2.0 and vue-router v2.0

First VueJS application for User management admin page. My first concern is to build front end component with VueJS in order to integrated with Server Side Java application

![vue2usermgt.gif](https://s20.postimg.org/aa4dgpykd/vue2usermgt.gif)](https://postimg.org/image/8ibeltf7d/)

As existing web application is running on tomcat, I need to find a way to use VueJS to replace existing JQuery and AngularJS codes.

Currently, this application provides:

- CRUD function for user
- Search filter by text input

### TODO
- Server Side Java Application is ready on [Spring4RestCrud](https://github.com/rojaware/Spring4RestCrud)
- Integrated Spring Java CRUD
- Add Report
- Add Navigation Bar

### Setup development environment
 - clone or download zip of this repo
 - `cd` to the upacked folder
 - run `npm install`
 - run 'npm install axios' (If you want CDN access, <script src="https://unpkg.com/axios/dist/axios.min.js"></script> in your index.html. you can skip)

### Test 
 - run http server of your choice (eg [whs](https://github.com/gstack/watch-http-server) or [SimpleHTTPServer](https://docs.python.org/2/library/simplehttpserver.html))

### Run on Local Directory

* Clone the repo into your local directory
* Open Window Explorer and click 'index.html'

So simple...

### Run on Simple HTTP Server

To test build files locally, install a small http server globally:

npm install -g http-server

// then run in your projects directoy
http-server .
That allows you to test your build files locally.

### Multi Select
One of input is multiple selection. You can install it from npm 
npm install vue-multiselect --save
Or
include CDN
<script src="https://unpkg.com/vue-multiselect@2.0.0"></script>
<link rel="stylesheet" href="https://unpkg.com/vue-multiselect@2.0.0/dist/vue-multiselect.min.css">

### Merge from master to origin

* git fetch 
* git rebase origin/master

