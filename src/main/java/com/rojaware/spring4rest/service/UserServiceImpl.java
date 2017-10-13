package com.rojaware.spring4rest.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rojaware.spring4rest.model.User;

@Service("userService")
@Transactional
public class UserServiceImpl implements UserService{
    
	private static List<User> userList;
     
    static{
        userList= populateDummyUsers();
    }
 
    public List<User> findAllUsers() {
        return userList;
    }
     
   
     
    public User findByName(String name) {
        for(User user : userList){
            if(user.getName().equalsIgnoreCase(name)){
                return user;
            }
        }
        return null;
    }
     
    public void saveUser(User user) {
        
        userList.add(user);
    }
 
    public void updateUser(User user) {
        int index = userList.indexOf(user);
        userList.set(index, user);
    }
 
    public void deleteUserByName(String name) {
         
        for (Iterator<User> iterator = userList.iterator(); iterator.hasNext(); ) {
            User user = iterator.next();
            if (user.getName().equalsIgnoreCase(name)) {
                iterator.remove();
            }
        }
    }
 
    public boolean isUserExist(User user) {
        return findByName(user.getName())!=null;
    }
 
    private static List<User> populateDummyUsers(){
        List<User> users = new ArrayList<User>();

        List<String> policyIds = Arrays.asList(new String[]{"CA", "US", "UK"});
        users.add(new User("Sam","Sam Holden", "gcm-user", "3311", policyIds));
        users.add(new User("john","John Doe", "gcm-admin", "3311", policyIds));
        users.add(new User("jane","Jane Ponda", "gcm-manager", "3311", policyIds));
        return users;
    }
 
    public void deleteAllUsers() {
        userList.clear();
    }
 
}