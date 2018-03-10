
<?php
session_start();
//定义一个常量，用来授权调用includes里面的文件
define('IN_TG', true);
//定义个常量，用来指定本页的内容
define('SCRIPT', 'member_message');
//引入公共文件，转换成硬路径，速度更快
require dirname(__FILE__).'/includes/common.inc.php';
//判断是否登录了
if(!isset($_COOKIE['username'])){
	_alert_back("请先登录！");
}
//批量删除短信
if(@$_GET['action']=='delete'&&isset($_POST['ids'])){
	$_clean=array();
	$_clean['ids']=implode(',', $_POST['ids']);
	_query("DELETE FROM tg_message WHERE tg_id IN({$_clean['ids']})");
	
	if(_affected_rows()){
		//关闭
		_close();
		_session_destroy();
		//跳转
		_location('短信删除成功','member_message.php');
	}else{
		//关闭
		_close();
		_session_destroy();
		//跳转
		_alert_back('短信删除失败');
	};
	
	exit();
};
//分页模板
global $_pagesize,$_pagenum;
_page("SELECT tg_id FROM tg_message WHERE tg_touser='{$_COOKIE['username']}'",10);//第一个参数获取总条数，第二个参数，指定每页多少条。
$_result=_query("SELECT tg_id,tg_state,tg_fromuser,tg_content,tg_date FROM tg_message WHERE tg_touser='{$_COOKIE['username']}' ORDER BY tg_date DESC LIMIT $_pagenum,$_pagesize");
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>多用户留言系统--短信管理中心</title>
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
      <h2>短信管理中心</h2>
      <form method="post" action="?action=delete">
      <table cellspacing="1">
         <tr><th>发信人</th><th>短信内容</th><th>时间</th><th>状态</th><th>操作</th></tr>
         <?php 
            while (!!$_rows=_fetch_array_list($_result)){
               $_html=array();
               $_html['id']=$_rows['tg_id'];
               $_html['fromuser']=$_rows['tg_fromuser'];
               $_html['content']=$_rows['tg_content'];
               $_html['date']=$_rows['tg_date'];
               if(empty($_rows['tg_state'])){
               	  $_html['state']='未读';
               	  $_html['content_html']='<strong>'._title($_html['content']).'<strong>';
               }else{
               	  $_html['state']='已读';
               	  $_html['content_html']=_title($_html['content']);
               };
              
               
         ?>         
         <tr><td><?php echo $_html['fromuser']?></td><td><a href="member_message_detail.php?id=<?php echo $_html['id']?>" title="<?php echo _title($_html['content']) ?>"><?php echo $_html['content_html'] ?></a></td><td><?php echo $_html['date']?></td><td><?php echo $_html['state']?></td><td><input name="ids[]" value="<?php echo $_html['id']?>" type="checkbox" /></td></tr>
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





























































