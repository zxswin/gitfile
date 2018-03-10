
<?php
session_start();
//定义一个常量，用来授权调用includes里面的文件
define('IN_TG', true);
//定义个常量，用来指定本页的内容
define('SCRIPT', 'member_friend');
//引入公共文件，转换成硬路径，速度更快
require dirname(__FILE__).'/includes/common.inc.php';
//判断是否登录了

if(!isset($_COOKIE['username'])){
	_alert_back("请先登录！");
};

//验证好友
if(@$_GET['action']=='check'&&isset($_GET['id'])){
	//修改表中的state,从而通过验证
	_query("UPDATE tg_friend SET tg_state=1 WHERE tg_id='{$_GET['id']}'");
	
	if(_affected_rows()==1){
		//关闭
		_close();
		_session_destroy();
		//跳转
		_location('好友验证成功','member_friend.php');
	}else{
		//关闭
		_close();
		_session_destroy();
		//跳转
		_alert_back('好友验证失败');
	};
};

//批量删除好友
if(@$_GET['action']=='delete'&&isset($_POST['ids'])){
	$_clean=array();
	$_clean['ids']=implode(',', $_POST['ids']);
	_query("DELETE FROM tg_friend WHERE tg_id IN({$_clean['ids']})");

	if(_affected_rows()){
		//关闭
		_close();
		_session_destroy();
		//跳转
		_location('好友删除成功','member_message.php');
	}else{
		//关闭
		_close();
		_session_destroy();
		//跳转
		_alert_back('好友删除失败');
	};

	exit();
};

//分页模板
global $_pagesize,$_pagenum;
_page("SELECT tg_id FROM tg_friend WHERE tg_touser='{$_COOKIE['username']}' OR tg_fromuser='{$_COOKIE['username']}'",10);//第一个参数获取总条数，第二个参数，指定每页多少条。
$_result=_query("SELECT tg_id,tg_state,tg_touser,tg_fromuser,tg_content,tg_date FROM tg_friend WHERE tg_touser='{$_COOKIE['username']}' OR tg_fromuser='{$_COOKIE['username']}' ORDER BY tg_date DESC LIMIT $_pagenum,$_pagesize");
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>多用户留言系统--好友列表</title>
<?php 
  require ROOT_PATH.'includes/title.inc.php';
?>
<script type="text/javascript" src="js/member_member.js"></script>
</head>
<body>
<?php 
   require ROOT_PATH.'includes/header.inc.php';
?>

 <div id="member">
   <?php 
     require ROOT_PATH.'includes/member.inc.php';
   ?>
   <div id="member_main">
      <h2>好友设置中心</h2>
      <form method="post" action="?action=delete">
      <table cellspacing="1">
         <tr><th>好友</th><th>请求内容</th><th>时间</th><th>状态</th><th>操作</th></tr>
         <?php 
            while (!!$_rows=_fetch_array_list($_result)){
               $_html=array();
               $_html['id']=$_rows['tg_id'];
               $_html['fromuser']=$_rows['tg_fromuser'];
               $_html['touser']=$_rows['tg_touser'];
               $_html['content']=$_rows['tg_content'];
               $_html['date']=$_rows['tg_date'];
               $_html['state']=$_rows['tg_state'];
              
               
               if($_html['touser']==$_COOKIE['username']){
               	$_html['friend']=$_html['fromuser'];
               	if(empty($_html['state'])){
               		$_html['state_html']='<a href="?action=check&id='.$_html['id'].'" style="color:red;">你未验证</a>';
               	}else{
               		$_html['state_html']='<span style="color:green;">通过</span>';
               	};
               }elseif ($_html['fromuser']==$_COOKIE['username']){
               	$_html['friend']=$_html['touser'];
               	if(empty($_html['state'])){
               		$_html['state_html']='<span style="color:blue;">对方未验证</span>';
               	}else{
               		$_html['state_html']='<span style="color:green;">通过</span>';
               	};
               };
              
               
         ?>         
         <tr><td><?php echo $_html['friend']?></td><td title="<?php echo $_html['content']?>"><?php echo _title($_html['content']) ?></td><td><?php echo $_html['date']?></td><td><?php echo $_html['state_html']?></td><td><input name="ids[]" value="<?php echo $_html['id']?>" type="checkbox" /></td></tr>
        <?php 
          }
          _free_result($_result);
        ?>
        <tr><td colspan="5"><label for="all">全选<input type="checkbox" name="chkall" id="all" /></label><input type="submit" value="批删除"/></td></tr>
      </table>
      </form>
       <?php 
        _paging(1);
        _paging(2);
        ?>
      
   </div>
 </div>


<?php 
   require ROOT_PATH.'includes/footer.icn.php';
?>

</body>
</html>





























































