<?php
require dirname(__FILE__).'/template.inc.php';
global $_tpl;

//声明一个变量
$_name='李炎恢';
$concent='是一个老师！';
$_array=array(1,2,3,4,5,6,7);
//注入一个变量
$_tpl->assign('name', $_name);
$_tpl->assign('concent', $concent);
$_tpl->assign('a', 5<4);
$_tpl->assign('array', $_array);
$_tpl->display('index.tpl');
?>































