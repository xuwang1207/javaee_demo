package com.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/admin/index")
public class AdminIndexController {
	
	@RequestMapping(method = RequestMethod.GET)
	public ModelAndView index(){
		return new ModelAndView("/admin/index/index");
	}
}
