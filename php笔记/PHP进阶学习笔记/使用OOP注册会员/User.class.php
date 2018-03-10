<?php
//这个用户类，规范字类的字段和方法
 abstract class User{
 	//成员字段
 	protected $_username;
 	protected $_password;
 	protected $_notpassword;
 	protected $_email;
 	//一个方法,登录和注册
 	//如果你点了登录,就执行这个方法登录
 	//如果你点了注册，就执行这个方法注册
 	abstract function _query();
 	abstract function _check();
 };
?>






























