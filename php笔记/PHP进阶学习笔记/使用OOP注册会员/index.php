<?php 
//缓冲处理
ob_start();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>会员系统</title>
<link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
<?php 
//    if(isset($_GET['index'])){
//    	include $_GET['index'].'.inc.php';
//    }else{
//    	include 'start.inc.php';
//    };



   function __autoload($_className){
   	  require $_className.'.class.php';
   };
   //实例化主类
   if(isset($_GET['index'])){
   	 $_main=new Main($_GET['index']);
   }else{
   	 $_main=new Main();
   };
   //载入界面
   $_main->_run();
?>


</body>
</html>