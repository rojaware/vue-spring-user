# vue-spring-user
- Integrated Spring Java CRUD
- VueJS frontend has been integrated with User Management Server side code done by Spring 4 REST CRUD.

# Previous milestone application

- Frontend only : VueJS frontend ( [vue.js-v2-crud-application](https://github.com/rojaware/vue.js-v2-crud-application) )
- Backend only : Server Side Java Application  [Spring4RestCrud](https://github.com/rojaware/Spring4RestCrud)

# Who needs this application
 To replace the legacy Javascript frontend with VueJS comsuming existing Java based server application

# Environment
JDK1.8, Eclipse Oxyzon, Vue.js v2.0

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

- Add JDBC connection
- Add Report
- Add Navigation Bar

### Setup development environment
 - clone or download zip of this repo
 - `cd` to the upacked folder
 - run `npm install`
 - run 'npm install axios' (If you want CDN access, <script src="https://unpkg.com/axios/dist/axios.min.js"></script> in your index.html. you can skip)

### Test on Tomcat
 - Deploy vue-spring-user.war to your tomcat server (ex, Eclipse with Tomcat)
 - Start your tomcat server
 - From browser, enter [http://localhost:8080/vue-spring-user/static](http://localhost:8080/vue-spring-user/static) 

### Run on Local Directory

- Deploy vue-spring-user.war to your tomcat server (ex, Eclipse with Tomcat)
- Start your tomcat server
- Open Window Explorer and click 'index.html' under vue-spring-user webapp/static directory



### Run on Simple HTTP Server

To test build files locally, install a small http server globally:

npm install -g http-server

// then run in your projects directoy
http-server .
That allows you to test your build files locally.


### Merge from master to origin

* git fetch 
* git rebase origin/master

### Adding an existing project to GitHub using the command line

[Adding an existing project to GitHub using the command line](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/)