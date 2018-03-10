<?php
//注册类
class Reg extends User{
	
	//写一个构造方法来接收表单的值
	public function __construct($_userName,$_passWord,$_notPassWord,$_eMail){
		$this->_username=$_userName;
		$this->_password=$_passWord;
		$this->_notpassword=$_notPassWord;
		$this->_email=$_eMail;
	}
	//将信息注册到xml里面
	public function _query(){
		//xml字符串
		$_xml=<<<_xml
<?xml version="1.0" encoding="utf-8"?>
<user>
	<username>$this->_username</username>
	<password>$this->_password</password>
	<email>$this->_email</email>
</user>
		
_xml;
		//创建simplexml类
		$_sxe=new SimpleXMLElement($_xml);
		//生成xml
		$_sxe->asXML('user.xml');
	}
	//给注册做验证
	public function _check(){
	   if(empty($this->_username)||
	      empty($this->_password)||
	      empty($this->_notpassword)||
	      empty($this->_email)
        ){
	      return false;
	   }
	   return true;
	}
};
?>





















