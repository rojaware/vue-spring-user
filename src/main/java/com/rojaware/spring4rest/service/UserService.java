package com.rojaware.spring4rest.service;

import java.util.List;

import com.rojaware.spring4rest.model.User;

public interface UserService {
	
    
    User findByName(String name);
     
    void saveUser(User user);
     
    void updateUser(User user);
     
    void deleteUserByName(String name);
 
    List<User> findAllUsers(); 
     
    void deleteAllUsers();
     
    public boolean isUserExist(User user);
}
