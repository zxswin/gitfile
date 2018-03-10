<?php
//设置utf-8编码
header('Content-Type:text/html;charset=utf-8');
//网站根目录
define('ROOT_PATH', dirname(__FILE__));
//引入配置信息
require ROOT_PATH.'/config/profile.inc.php';
//引用模板类
require ROOT_PATH.'/includes/Templates.class.php';
//实例化模板类
$_tpl=new Templates();

//是否开启缓冲区
define('IS_CACHE', true);
//判断是否开启缓冲区
IS_CACHE?ob_start():null;

?>


























