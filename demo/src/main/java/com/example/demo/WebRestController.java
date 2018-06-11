package com.example.demo;

import java.util.Map;
import java.util.stream.Collectors;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.dataobject.Customer;
import com.example.dataobject.User;

@RestController
public class WebRestController implements ErrorController{
	
	private Map<Integer, Customer> customers = new HashMap<Integer, Customer>(){
		 
		{
	        put(1, new Customer(1, "Mary", "Taylor", 24));
	        put(2, new Customer(2, "Peter", "Smith", 18));
	        put(3, new Customer(3, "Lauren", "Taylor", 31));
	    }
	};
	 
	@GetMapping(value="/customer",  produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Customer> getAll(){
		List<Customer> results = customers.entrySet().stream()
									.map(entry ->entry.getValue())
									.collect(Collectors.toList());
		return results;
	}
	
	private static final String PATH="/error";
	@RequestMapping("/api/hi")  
	    public String hi(){  
	        return"Hello Guru from rest API!";  
	    }
	
	@RequestMapping(value = PATH)  
    public String defaultErrorMessage(){  
        return "Requested resource not found";  
    }


	@Override
	public String getErrorPath() {
		// TODO Auto-generated method stub
		return PATH;
	}
}
