<?php
//登录类
 class Login extends User{
 	
 	//写一个构造方法来接收表单的值
 	public function __construct($_userName,$_passWord){
 		$this->_username=$_userName;
 		$this->_password=$_passWord;
 	}
 	
 	//从xml里读出信息
 	public function _query(){
 		//载入xml文件
 		$_sxe=simplexml_load_file('user.xml');
 		if($this->_username==$_sxe->username&&$this->_password==$_sxe->password){
 			//生成一个cookies
 			setcookie('user',$this->_username);
 			Tool::_alertLocation($this->_username.',欢迎您回来！', '?index=member');
 		}else{
 			Tool::_alertBack('登录失败！');
 		};
 	}
 	//给登录做验证
 	public function _check(){
 		if(empty($this->_username)||
 		empty($this->_password)
 		){
 			return false;
 		}
 		return true;
 	}
 };
?>








































