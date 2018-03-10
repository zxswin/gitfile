<?php
if(!defined('IN_TG')){
	exit('非法调用！');
};
if(!function_exists('_alert_back')){
	exit('_alert_back()函数不存在，请检查！');
	
};
if(!function_exists('_mysql_string')){
	exit('_mysql_string()函数不存在，请检查！');

};

function _check_uniqid($_first_uniqid,$_end_uniqid){
	if((strlen($_first_uniqid)!=40)||($_first_uniqid!=$_end_uniqid)){
		_alert_back('唯一标识符异常！');
	};
	$con = mysqli_connect("localhost", "root", "root");
	return _mysql_string($_first_uniqid,$con);
	mysqli_close($con);
	
};

/**
 * _check_username表示检测并过滤用户名
 * @param string $_string受污染的用户名
 * @access public
 * @param int $_min_num最小位数
 * @param int $_max_num最大位数
 * return string 过滤后的用户名
*/
function _check_username($_string,$_min_num,$_max_num){
	//去掉两边的空格
	$_string=trim($_string);
	//长度小于两位或者大于20位
	if(mb_strlen($_string,'utf-8')<$_min_num||mb_strlen($_string,'utf-8')>$_max_num){
		_alert_back('用户名长度小于'.$_min_num.'位或者大于'.$_max_num.'位');
	}
	//限制敏感字符
	$_char_pattern='/[<>\'\"\ ]/';
	if(preg_match($_char_pattern, $_string)){
		_alert_back('用户名不得包含敏感字符');
	}
	//限制敏感用户名
	$_mg[0]='李彦宏';
	$_mg[1]='胡西平';
	$_mg[2]='武器';
	$_mg_string='';
	foreach ($_mg as $value){
		$_mg_string.=$value.'\n';
	};
	if(in_array($_string, $_mg)){
		_alert_back($_mg_string.'以上敏感用户名不得注册');
	};
	//return $_string;
	//将用户名转义输入
	$con = mysqli_connect("localhost", "root", "root");
	return _mysql_string($_string,$con);
	mysqli_close($con);
	//return mysql_real_escape_string($_string);
};
  
/**
 * _check_password验证密码
 * @access public
 * @param string $_first_pass;
 * @param string $_end_pass;
 * @param int $_min_num
 * @return string  $_first_pass返回一个加密后的密码
 */

function _check_password($_first_pass,$_end_pass,$_min_num){
	//判断密码
	if(strlen($_first_pass)<$_min_num){
		_alert_back('密码不得小于'.$_min_num.'位！');
	};
	//密码和密码确认必须一致
	if($_first_pass!=$_end_pass){
		_alert_back('密码和确认密码不一致！');
	};
	
	//将密码返回
	$con = mysqli_connect("localhost", "root", "root");
	return _mysql_string(sha1($_first_pass),$con);
	mysqli_close($con);
	//return sha1($_first_pass);
};


//修改密码验证
function _check_modify_password($_string,$_min_num){
	//判断密码
	if(!empty($_string)){
		if(strlen($_string)<$_min_num){
			_alert_back('密码不得小于'.$_min_num.'位！');
		};
	}else{
		return null;
	};
	
	return sha1($_string);
};

//短信验证
function  _check_content($_string){
	if(mb_strlen($_string,'utf-8')<10||mb_strlen($_string,'utf-8')>200){
		_alert_close('短信内容不得小于10位或者大于200位');
	};
	return $_string;
};

/*
 * _check_question 返回密码提示
 * @access public
 * @param string $_string
 * @param int $_min_num
 * @param int $_max_num
 * @return string $_string 返回密码提示
 */


function _check_question($_string,$_min_num,$_max_num){
	$_string=trim($_string);
//长度小于4位或者大于20位
	if(mb_strlen($_string,'utf-8')<$_min_num||mb_strlen($_string,'utf-8')>$_max_num){
		_alert_back('密码提示不得小于'.$_min_num.'位或者大于'.$_max_num.'位');
	};
	//返回密码提示(有问题)

	$con = mysqli_connect("localhost", "root", "root");
	return _mysql_string($_string,$con);
	mysqli_close($con);
	
	
	//return $_string;
};
function _check_answer($_ques,$_answ,$_min_num,$_max_num){
	$_answ=trim($_answ);
	//长度小于4位或者大于20位
	if(mb_strlen($_answ,'utf-8')<$_min_num||mb_strlen($_answ,'utf-8')>$_max_num){
		_alert_back('密码回答不得小于'.$_min_num.'位或者大于'.$_max_num.'位');
	};
	//密码提示与回答不能一致
	if($_ques==$_answ){
		_alert_back('密码提示与回答不得一致');
	};
	//加密返回
	$con = mysqli_connect("localhost", "root", "root");
	return _mysql_string(sha1($_answ),$con);
	mysqli_close($con);
	//return sha1($_answ);
};

function _check_sex($_string){
	$con = mysqli_connect("localhost", "root", "root");
	return _mysql_string($_string,$con);
	mysqli_close($con);
};

function _check_face($_string){
	$con = mysqli_connect("localhost", "root", "root");
	return _mysql_string($_string,$con);
	mysqli_close($con);
};

function _check_email($_string,$_min_num,$_max_num){
	//参考bnbbs@163.com
	//[a-z][A-Z][0-9_]=>\w
	//[\w\-\.]16.3;
	//\.[\w+].com.com .com.nte.cn
	//正则听起来比较麻烦，但你理解了就很简单了
	//如果听起来比较麻烦，就直接套用。
	//if(empty($_string)){
		//return null;
	//}else{
		//if(!preg_match('/^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/', $tring)){
			//_alert_back('邮件格式不正确！');
		//};
		if(strlen($_string)<$_min_num||strlen($_string)>$_max_num){
			_alert_back('邮件长度不合法');
		};
	//};
	
	$con = mysqli_connect("localhost", "root", "root");
	return _mysql_string($_string,$con);
	mysqli_close($con);
};

function _check_qq($_string){
	if(empty($_string)){
		return null;
	}else{
		if(!preg_match('/^[1-9]{1}[0-9]{4,9}$/', $_string)){
			_alert_back('QQ号码不正确！');
		};
	};
	$con = mysqli_connect("localhost", "root", "root");
	return _mysql_string($_string,$con);
	mysqli_close($con);
	//return $_string;
};

function _check_url($_string,$_max_num){
	if(empty($_string)||($_string=='http://')){
		return null;
	}else{
	  //http://www.yc60.com
	  //?表示0次或者一次
	  if(!preg_match('/^https?:\/\/(\w+\.)?[\w\-\.]+(\.\w+)+$/', $_string)){
	  	_alert_back('网址不正确');
	  };
	  if(strlen($_string)>$_max_num){
	  	_alert_back('网址太长');
	  };
	};
	$con = mysqli_connect("localhost", "root", "root");
	return _mysql_string($_string,$con);
	mysqli_close($con);
	//return $_string;
};
?>











































