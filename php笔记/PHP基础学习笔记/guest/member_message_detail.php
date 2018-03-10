
<?php
session_start();
//定义一个常量，用来授权调用includes里面的文件
define('IN_TG', true);
//定义个常量，用来指定本页的内容
define('SCRIPT', 'member_message_detail');
//引入公共文件，转换成硬路径，速度更快
require dirname(__FILE__).'/includes/common.inc.php';
//判断是否登录了
if(!isset($_COOKIE['username'])){
	_alert_back("请先登录！");
};
//删除短信模块
if(@$_GET['action']=='delete'&&isset($_GET['id'])){
	//这是验证短信是否合法
	if(!!$_rows=_fetch_array("SELECT tg_id FROM tg_message WHERE tg_id='{$_GET['id']}' LIMIT 1")){
		//当你进行危险操作的时候，要对唯一标识符进行验证（略）
		//删除单条短信
		_query("DELETE FROM tg_message WHERE tg_id='{$_GET['id']}' LIMIT 1");
		echo '删除成功';
		
		if(_affected_rows()==1){
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
		
		
		
	}else{
		_alert_back('此短信不存在！');
	};
};
if(isset($_GET['id'])){
	//获取数据
	$_rows=_fetch_array("SELECT tg_id,tg_state, tg_fromuser,tg_content,tg_date FROM tg_message WHERE tg_id='{$_GET['id']}' LIMIT 1");
	if($_rows){
		//将它state状态设置为1即可
		if(empty($_rows['tg_state'])){
			_query("UPDATE tg_message SET tg_state=1 WHERE tg_id='{$_GET['id']}' LIMIT 1");
		    if(!_affected_rows()){
		    	_alert_back('异常！');
		    };
		};
		$_html=array();
		$_html['id']=$_rows['tg_id'];
		$_html['fromuser']=$_rows['tg_fromuser'];
		$_html['content']=$_rows['tg_content'];
		$_html['date']=$_rows['tg_date'];
	}else{
		_alert_back('此短信不存在');
	};
}else{
	_alert_back('非法登录');
};

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>多用户留言系统--短信详情中心</title>
<?php 
  require ROOT_PATH.'includes/title.inc.php';
?>
<script type="text/javascript" src="js/member_message_detail.js"></script>
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
      <h2>短信详情中心</h2>
      <dl>
        <dd>收信人：<?php echo $_html['fromuser']?></dd>
        <dd>内容：<strong><?php echo $_html['content']?></strong></dd>
        <dd>发信时间：<?php echo $_html['date']?></dd>
        <dd class="botton">
        <input type="button" id="return" value="返回列表" onclick="javascript:history.back();" />
        <input type="button" id="delete" name="<?php echo $_html['id']?>" value="删除短信" />
        </dd>
      </dl>
     
      
   </div>
 </div>


<?php 
   require ROOT_PATH.'includes/footer.icn.php';
?>

</body>
</html>





























































