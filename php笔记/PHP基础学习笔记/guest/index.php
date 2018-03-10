<?php 
//定义一个常量，用来授权调用includes里面的文件
define('IN_TG', true);
//定义一个产量，用来指定本页的内容
define('SCRIPT', 'index');

//引入公共文件，转换成硬路径，速度更快
require dirname(__FILE__).'/includes/common.inc.php';
//读取XML文件
$_html=_get_xml('new.xml');
print_r($_html);

?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>多用户留言系统--首页</title>
<?php 
   require ROOT_PATH.'includes/title.inc.php';
?>
<script type="text/javascript" src="js/blog.js"></script>
</head>
<body>
<?php 
   require ROOT_PATH.'includes/header.inc.php';
?>

<div id="list">
   <h2>帖子列表</h2>
</div>

<div id="user">
    <h2>新进会员</h2>
    <dl>
       <dd class="user"><?php echo $_html['username']?>(<?php echo $_html['sex']?>)</dd>
       <dt><img src="<?php echo $_html['face']?>" alt="<?php echo $_html['face']?>"/></dt>
       <dd class="message"><a href="javascript:;" name="message" title="<?php echo $_html['id']?>">发消息</a></dd>
       <dd class="friend"><a href="javascript:;" name="friend" title="<?php echo $_html['id']?>">加为好友</a></dd>
       <dd class="guest">写留言</dd>
       <dd class="flower"><a href="javascript:;" name="flower" title="<?php echo $_html['id']?>">给他送花</a></dd>
       <dd class="email">邮件：<?php echo $_html['email']?></dd>
       <dd class="url">网址：<?php echo $_html['url']?></dd>
     </dl>
</div>

<div id="pics">
   <h2>最新图片</h2>
</div>

<?php 
   require ROOT_PATH.'includes/footer.icn.php';
?>

</body>
</html>