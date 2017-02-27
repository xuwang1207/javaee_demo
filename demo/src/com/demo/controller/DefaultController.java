package com.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * 设置默认首页
 * DefaultController
 * @author steven
 * @date 2017年2月27日
 */

@Controller
@RequestMapping("/")
public class DefaultController {
	
	@RequestMapping(method = RequestMethod.GET)
	public ModelAndView index(){
		return new ModelAndView("/web/index/index");
	}
}
