package com.example.demo;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebRestController implements ErrorController{
	 
	private static final String PATH="/error";
//	@RequestMapping("/api/hi")  
//	    public String hi(){  
//	        return"Hello Guru from rest API!";  
//	    }
	
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
