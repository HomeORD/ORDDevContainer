package com.example.demo;
import org.springframework.web.bind.annotation.RequestMapping;  
import org.springframework.web.bind.annotation.RestController;  

@RestController  
public class HomeController {
	 @RequestMapping("/hello")  
	    public String hello(){  
	        return"Hello Guru!";  
	    }  
	 
	 @RequestMapping("/search")  
	    public String search(){  
	        return"Searching for Guru!";  
	    }  
}
