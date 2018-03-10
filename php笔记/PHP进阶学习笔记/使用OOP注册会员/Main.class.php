<?php
   //主类,控制界面载入,处理数据
   class Main{
   	 private $_index;
   	 private $_send;
   	 //构造方法,用来初始化数据
   	 public function __construct($_index=''){
   	 	$this->_index=$_index;
   	 	if(isset($_POST['send'])){
   	 		$this->_send=$_POST['send'];
   	 	};
   	 }
   	 
   	 //总管
   	 public function _run(){
   	 	//处理数据
   	 	$this->_send();
   	 	//载入界面
   	 	include $this->_ui();
   	 }
   	 
   	 
   	 //创建一个载入界面的方法
   	 //这个方法，我想到login.inc.php这个字符串
   	 private  function _ui(){
   	    if(empty($this->_index)||!file_exists($this->_index.'.inc.php')){
   	    	$this->_index='start';
   	    };	
   	    return $this->_index.'.inc.php';
   	 }
   	 //创建一个方法类接受登录和注册发送的操作
   	 private function _send(){
   	 	switch ($this->_send){
   	 		case '注册':
   	 			$this->_exec(new Reg($_POST['username'],$_POST['password'],$_POST['notpassword'],$_POST['email']));
   	 			break;
   	 		case '登录':
   	 			$this->_exec(new Login($_POST['username'],$_POST['password']));
   	 	};
   	 }
   	 
   	 //创建一个执行的方法,里面传一个参数,是Reg或者Login类的对象引用
   	 private function _exec($_class){
   	 	if($_class->_check()){
   	 		$_class->_query();
   	 	}else{
   	 		Tool::_alertBack('字段不能为空!');
   	 	}
   	   
   	 }
   };

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   

?>