
<?php
session_start();
//定义一个常量，用来授权调用includes里面的文件
define('IN_TG', true);
//定义个常量，用来指定本页的内容
define('SCRIPT', 'register');
//引入公共文件，转换成硬路径，速度更快
require dirname(__FILE__).'/includes/common.inc.php';
//测试新增，看看能否成功
//mysql_query("INSERT INTO tg_user(tg_username) VALUES('炎日')")or die('SQL执行失败'.mysql_error());
_login_state();




//判断是否提交了数据
if(@$_GET['action']=="register"){
	//防止恶意注册，跨站攻击
	_check_code($_POST['code'], $_SESSION['code']);
	//可以通过唯一标识符来防止恶意注册，伪装表单跨站攻击等。
	
	//引入验证文件
	include ROOT_PATH.'includes/register.func.php';
	//创建一个空数组，用来存放提交过来的合法数据
	$_clean=array();
	//可以通过唯一标识符来防止恶意注册，伪装表单跨站攻击等
	//这个存放在数据库的唯一标识符还有第二个用处，就是登陆cookies验证。
	$_clean['uniqid']=_check_uniqid($_POST['uniqid'],$_SESSION['uniqid']);
	//active也是一个唯一标识符，用来刚注册的用户进行激活处理，方可登陆
	$_clean['active']=_sha1_uniqid();
	$_clean['username']=_check_username($_POST['username'],2, 20);
	//$_clean['password']=$_POST['password'];
	$_clean['password']=_check_password($_POST['password'],$_POST['notpassword'],6);
	
	$_clean['question']=_check_question($_POST['question'], 2, 20);
	
	$_clean['email']=_check_email($_POST['email'], 2, 20);
	
	$_clean['sex']=_check_sex($_POST['sex']);
	$_clean['face']=_check_face($_POST['face']);
	
	$_clean['anwser']=_check_answer($_POST['question'], $_POST['answer'], 2, 20);
	$_clean['qq']=_check_qq($_POST['qq']);
	$_clean['url']=_check_url($_POST['url'],40);
	//print_r($_clean);
	//新增之前，要判断用户名是否重复
	//$query=mysql_query("SELECT tg_username FROM tg_user WHERE tg_username='{$_clean['username']}'")or die('SQL错误！'.mysql_error());
	//$query=_query("SELECT tg_username FROM tg_user WHERE tg_username='{$_clean['username']}'");
	//if(mysql_fetch_array($query,MYSQL_ASSOC)){
		//_alert_back('对不起，此用户已被注册');
	//};
// 	if(_fetch_array("SELECT tg_username FROM tg_user WHERE tg_username='{$_clean['username']}'")){
// 		_alert_back('对不起，此用户已被注册');
// 	};
	_is_repeat(
	"SELECT tg_username FROM tg_user WHERE tg_username='{$_clean['username']}' LIMIT 1",
	'对不起，此用户已被注册'
	);
	//在双引号里，直接放变量是可以的，比如$_username,但如果是数组，就必须加上{},比如{$_clean['username']};
	@_query("INSERT INTO tg_user(
			                            tg_uniqid,
										tg_active,
										tg_username,
										tg_password,
										tg_question,	
										tg_answer,
										tg_email,
										tg_qq,
										tg_url,	
										tg_sex,	
										tg_face,
										tg_reg_time,
										tg_last_time,
			                            tg_last_ip	
									
			
	                                   ) VALUES(
			                                    '{$_clean['uniqid']}',
                                                '{$_clean['active']}',
												'{$_clean['username']}',
												'{$_clean['password']}',
												'{$_clean['question']}',
												'{$_clean['anwser']}',
												'{$_clean['email']}',
												'{$_clean['qq']}',
												'{$_clean['url']}',
												'{$_clean['sex']}',
												'{$_clean['face']}',
												NOW(),
												NOW(),
												'{$_SERVER["REMOTE_ADDR"]}'
												
												
	                                            )")or die('SQL执行失败'.mysql_error());
	
	
	
	if(_affected_rows()==1){
		//获取刚刚新增的ID
		$_clean['id']=_insert_id();
		//关闭
		_close();
		_session_destroy();
		//跳转
		//生成XML
		_set_xml('new.xml',$_clean);
		_location('恭喜你，注册成功！','active.php?active='.$_clean['active']);
	}else{
		//关闭
		_close();
		_session_destroy();
		//跳转
		_location('很遗憾，注册失败！','register.php');
	};
	
	
}else{
	//产生一个唯一标识符，每台电脑都不一样。
	//echo sha1(uniqid(rand(),true));
	$_uniqid='';
	$_SESSION['uniqid']=$_uniqid=_sha1_uniqid();
};

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>多用户留言系统--注册页面</title>
<?php 
  require ROOT_PATH.'includes/title.inc.php';
?>
<script type="text/javascript" src="js/code.js"></script>
<script type="text/javascript" src="js/face.js"></script>
</head>
<body>
<?php 
   require ROOT_PATH.'includes/header.inc.php';
?>
<div id='register'>
   <h2>会员注册</h2>
   <form method="post" action="register.php?action=register" name="register">
   <!--设置隐藏字段POST提交 -->
   <!--<input type="hidden" name="action" value="register"/> -->
   <!-- 产生一个唯一标识符，每台电脑都不一样。 -->
   <input type="hidden" name="uniqid" value="<?php echo @$_uniqid?>"/>
      <dl>
         <dt>请认真填写一下内容</dt>
         <dd>用  户    &nbsp; 名：<input type="text" name="username" class="text"/>(*必填，至少两位)</dd>
         <dd>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  码 ：<input type="password" name="password" class="text"/>(*必填，至少六位)</dd>
         <dd>确认密码：<input type="password" name="notpassword" class="text"/>(*必填，同上)</dd>
         <dd>密码提示：<input type="text" name="question" class="text"/>(*必填，至少两位)</dd>
         <dd>密码回答：<input type="text" name="answer" class="text"/>(*必填，至少两位)</dd>
         <dd>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：<input type="radio" name="sex" value="男" checked="checked"/>男
                      <input type="radio" name="sex" value="女"/>女
         </dd>
         <dd class="face"><input type="hidden" value="" name="face"/><img src="face/m01.gif" alt="头像选择" id="faceimg"/></dd>
         <dd>电子邮箱：<input type="text" name="email" class="text"/>(*必填，激活用户)</dd>
         <dd>Q&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Q：<input type="text" name="qq" class="text"/></dd>
         <dd>主页地址：<input type="text" name="url" class="text" value="http://"/></dd>
         <dd>验 证 码 &nbsp;&nbsp;：<input type="text" name="code" class="text yzm"/><img src="code.php" id="code"/></dd>
         <dd><input type="submit" class="submit" value="注册"/></dd>
         
      
      </dl>
   
   </form>
</div>
<?php 
   require ROOT_PATH.'includes/footer.icn.php';
?>

</body>
</html>





























































