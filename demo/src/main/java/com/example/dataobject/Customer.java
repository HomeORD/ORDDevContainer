package com.example.dataobject;

public class Customer {

	private int id;
	private String firstname;
	private String lastname;
	private int age;
	
	public Customer(int id, String firstname, String lastname, int age){
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.age = age;
	}
	
	// id
	public void setId(int id){
		this.id = id;
	}
	
	public int getId(){
		return this.id;
	}
	
	// firstname
	public void setFirstname(String firstname){
		this.firstname = firstname;
	}
	
	public String getFirstname(){
		return this.firstname;
	}
	
	// lastname
	public void setLastname(String lastname){
		this.lastname = lastname;
	}
	
	public String getLastname(){
		return this.lastname;
	}
	
	// age
	public void setAge(int age){
		this.age = age;
	}
	
	public int getAge(){
		return this.age;
	}
	
}
