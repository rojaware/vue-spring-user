package com.rojaware.spring4rest.model;

import java.util.List;

public class User {
	private String name;
	private String fullName;
	private String role;
	private String costCentre;
	private List<String> policyIds;
	
	
	/**
	 * @param name
	 * @param fullName
	 * @param role
	 * @param costCentre
	 */
	public User(String name, String fullName, String role, String costCentre) {
		super();
		this.name = name;
		this.fullName = fullName;
		this.role = role;
		this.costCentre = costCentre;
	}
	
	/**
	 * @param name
	 * @param fullName
	 * @param role
	 * @param costCentre
	 * @param policyIds
	 */
	public User(String name, String fullName, String role, String costCentre,
			List<String> policyIds) {
		super();
		this.name = name;
		this.fullName = fullName;
		this.role = role;
		this.costCentre = costCentre;
		this.policyIds = policyIds;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}
	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}
	/**
	 * @return the fullName
	 */
	public String getFullName() {
		return fullName;
	}
	/**
	 * @param fullName the fullName to set
	 */
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	/**
	 * @return the role
	 */
	public String getRole() {
		return role;
	}
	/**
	 * @param role the role to set
	 */
	public void setRole(String role) {
		this.role = role;
	}
	/**
	 * @return the costCentre
	 */
	public String getCostCentre() {
		return costCentre;
	}
	/**
	 * @param costCentre the costCentre to set
	 */
	public void setCostCentre(String costCentre) {
		this.costCentre = costCentre;
	}
	/**
	 * @return the policyIds
	 */
	public List<String> getPolicyIds() {
		return policyIds;
	}
	/**
	 * @param policyIds the policyIds to set
	 */
	public void setPolicyIds(List<String> policyIds) {
		this.policyIds = policyIds;
	}
	
	public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        User other = (User) obj;
        if (name != other.name)
            return false;
        return true;
    }
	
}
