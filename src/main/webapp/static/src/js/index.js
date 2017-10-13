// import Multiselect from 'vue-multiselect'

var users = [
            {  name: "John", fullName: "John Doe", role: "gcm-user" , costCentre: "3311", policyIds: ["CA"] },
            {  name: "Jane", fullName: "Jane Hello", role: "gcm-admin" , costCentre: "3311", policyIds: ["CA"] },
            {  name: "Susan", fullName: "Susan Kim", role: "gcm-fo" , costCentre: "3311", policyIds: ["CA"] },
            {  name: "Chris", fullName: "Chris Cho", role: "petr-it-admin" , costCentre: "3311", policyIds: ["CA"] },
            {  name: "Dan", fullName: "Dan Paddock", role: "petr-it-security" , costCentre: "3311", policyIds: ["CA"] }
        ];
const roles = ['Choose', 'gcm-user', 'gcm-admin', 'petr-it-security', 'petr-it-admin', 'gcm-fo'];
const costCentres = ["Choose","3311", "1234", "1122"];  
const globalPolicyIds = ["N/A", "CA", "US","UK","SG", "IE","JP","HK"];  
const baseUrl = "https://http://localhost:8080/vue-spring-user/static/";
const ApiKey = "your_api_key";

var message = 'You loaded this page on ' + new Date().toLocaleString() ;

function findUser (name) {
  var thisUser = users[findUserKey(name)];
  return thisUser;
};

function findUserKey (name) {
  for (var key = 0; key < users.length; key++) {
    if (users[key].name == name) {
      return key;
    }
  }
};

var List = Vue.extend({
  template: '#user-list',
  data: function () {
	  axios.get( baseUrl + '/' )
	  .then(function(response){
		  users = response.data.users;
		  searchKey = '';
		  message = message;
	    console.log(response.data); // ex.: { user: 'Your User'}
	    console.log(response.status); // ex.: 200
	  }); 
	  return;
//    return {users: users, searchKey: '', message: message};
  },
  computed : {
    filteredUsers: function () {
    var self = this;
    console.log()

    return self.users.filter(user => {
       if (user.role !== 'gcm-fo') {
          user.policyIds = ["N/A"] 
       } else {
          var i = user.policyIds.indexOf("N/A");
          if (i != -1) {
            user.policyIds.splice(i,1);  
          }
          
       }
       
       return user.name.toLowerCase().indexOf(self.searchKey.toLowerCase()) > -1
    })
  }
}
});

var User = Vue.extend({
  template: '#user',
  data: function () {
    return {user: findUser(this.$route.params.user_name)};
  }
});

var UserEdit = Vue.extend({
  template: '#user-edit',
  data: function () {
    return {user: findUser(this.$route.params.user_name) , roles: roles,  costCentres: costCentres, globalPolicyIds: globalPolicyIds };
  },
  methods: {
    updateUser: function () {
      var user = this.user;

      users[findUserKey(user.name)] = {
        // id: user.id,
        name: user.name,
        fullName: user.fullName,
        role: user.role,
        costCentre: user.costCentre,
        policyIds: user.policyIds,
      };
      router.push('/');
      message = user.name + '('+ user.fullName +') has been mapped to ' + user.role + ' on ' + new Date().toLocaleString() ;
    }
  }

});

var UserDelete = Vue.extend({
  template: '#user-delete',
  data: function () {
    return {user: findUser(this.$route.params.user_name)};
  },
  methods: {
    deleteUser: function () {
      users.splice(findUserKey(this.$route.params.user_name), 1);
      router.push('/');
      message = user.name + '('+ user.fullName +') has been deleted on ' + new Date().toLocaleString() ;
    }
  }
});

var AddUser = Vue.extend({
  template: '#add-user',
  data: function () {
    return {user: {name: '', fullName: '', role: 'Choose', costCentre: 'Choose', policyIds: [] }, roles: roles, costCentres: costCentres, globalPolicyIds: globalPolicyIds }
  },
  methods: {
    createUser: function() {
      var user = this.user;
      users.push({
        // id: Math.random().toString().split('.')[1],
        name: user.name,
        fullName: user.fullName,
        role: user.role, 
        costCentre: user.costCentre,
        policyIds: user.policyIds,
      });
      router.push('/');
      message = user.name + '('+ user.fullName +') has been mapped to ' + user.role + ' on ' + new Date().toLocaleString() ;
    }
  }
});

var router = new VueRouter({
  routes: [{path: '*' , component: List}, 
    {path: '/user/:user_name', component: User, name: 'user'},
    {path: '/add-user', component: AddUser},
    {path: '/user/:user_name/edit', component: UserEdit, name: 'user-edit'},
    {path: '/user/:user_name/delete', component: UserDelete, name: 'user-delete'}
]});

new Vue({
  el: '#app',
  router: router,
  template: '<router-view></router-view>', 
  
});
