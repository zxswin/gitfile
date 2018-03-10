<?php
//设置字符集编码
header('Content-Type:text/html;charset=utf-8');
//防止恶意调用
if(!defined('IN_TG')){
	exit('非法调用！');
};
//转换硬路径常量
define('ROOT_PATH', substr(dirname(__FILE__),0,-8));
//拒绝PHP低版本
if(PHP_VERSION<'4.1.0'){
	exit('PHP版本太低');
}; 

define('GPC', get_magic_quotes_gpc());

//引入核心函数库
require ROOT_PATH.'includes/global.func.php';
require ROOT_PATH.'includes/mysql.func.php';

//执行耗时
//$_start_time=_runtime();
define('START_TIME',_runtime());

//使用超级全局变量
//$GLOBALS['start_time']=_runtime();

//数据连接
define('DB_HOST','localhost');
define('DB_USER', 'root');
define('DB_PWD', 'root');
define('DB_NAME','testguest');
//初始化数据库
_connect();//链接MYSQL数据库
_select_db();//选择指定的数据库
_set_names();//设置字符集


// //创建数据库连接
// $_conn=@mysql_connect(DB_HOST,DB_USER,DB_PWD) or die('数据库链接失败');
// //选择一款数据库
// mysql_select_db(DB_NAME) or die('指定的数据库不存在');
// //选择字符集
// mysql_query('SET NAMES UTF8') or die('字符集错误');


//短信提醒COUNT(tg_id)是取得字段的总和
$_message=_fetch_array("SELECT COUNT(tg_id) AS count FROM tg_message WHERE tg_state=0");

if(empty($_message['count'])){
	$_message_html='<strong><a href="member_message.php">'.(0).'</a></strong>';
}else{
	$_message_html='<strong><a href="member_message.php">('.$_message['count'].')</a></strong>';
};
?>










































































