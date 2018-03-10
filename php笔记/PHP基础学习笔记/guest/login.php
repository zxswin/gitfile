
<?php
session_start();
//定义一个常量，用来授权调用includes里面的文件
define('IN_TG', true);
//定义个常量，用来指定本页的内容
define('SCRIPT', 'login');
//引入公共文件，转换成硬路径，速度更快
require dirname(__FILE__).'/includes/common.inc.php';
_login_state();
//开启处理登录状态
if(@$_GET['action']=='login'){
	//防止恶意注册，跨站攻击
	_check_code($_POST['code'], $_SESSION['code']);
	//引入验证文件
	include ROOT_PATH.'includes/login.func.php';
	//接受数据
	$_clean=array();
	$_clean['username']=_check_username($_POST['username'], 2, 20);
	$_clean['password']=_check_password($_POST['password'], 6);
	$_clean['time']=_check_time($_POST['time']);
    //print_r($_clean);
    //到数据库去验证
    if(!!$_rows=_fetch_array("SELECT tg_username,tg_uniqid FROM tg_user WHERE tg_username='{$_clean['username']}' AND tg_password='{$_clean['password']}'")){
//     	echo('登录成功');
//     	echo $_rows['tg_username'];
//     	echo $_rows['tg_uniqid'];
        //登录成功后，记录登录信息
        _query("UPDATE tg_user SET
        		                tg_last_time=NOW(),
        		                tg_last_ip='{$_SERVER["REMOTE_ADDR"]}',
        		                tg_login_count=tg_login_count+1
        		            WHERE
        		                tg_username='{$_rows['tg_username']}'
        		                ");
    	_close();
    	_session_destroy();
    	//cookie验证
    	_setcookies($_rows['tg_username'],$_rows['t_uniqid'],$_clean['time']);
    	_location('','member.php');
    }else{
    	_close();
    	_session_destroy();
    	_location('用户名密码不正确或者该账号未被激活!','login.php');
    };
    
};
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>多用户留言系统--登录页面</title>
<?php 
  require ROOT_PATH.'includes/title.inc.php';
?>
<script type="text/javascript" src="js/code.js"></script>
<script type="text/javascript" src="js/login.js"></script>
</head>
<body>
<?php 
   require ROOT_PATH.'includes/header.inc.php';
?>

<div id="login">
   <h2>用户登录</h2>
    <form method="post" action="login.php?action=login" name="login">
      <dl>
         <dt> </dt>
         <dd>用  户    &nbsp; 名：<input type="text" name="username" class="text"/>(*必填，至少两位)</dd>
         <dd>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  码 ：<input type="password" name="password" class="text"/>(*必填，至少六位)</dd>
         <dd>保&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  留 ：
         <input type="radio" name="time" value="0" checked="checked" />不保留
         <input type="radio" name="time" value="1" />保留一天
         <input type="radio" name="time" value="2" />保留一周
         <input type="radio" name="time" value="3" />保留一个月
         </dd>
         <dd>验 证 码 &nbsp;&nbsp;：<input type="text" name="code" class="text yzm"/><img src="code.php" id="code"/></dd>
         <dd>
            <input type="submit" value="登录" class="button" />
            <input type="button" value="注册" id="location" class="button location" />
         </dd>
     </dl>
     </form>
</div>


<?php 
   require ROOT_PATH.'includes/footer.icn.php';
?>

</body>
</html>





























































