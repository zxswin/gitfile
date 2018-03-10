<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php echo $this->_config['webname'];?></title>
</head>
<body>

<?php include 'test.php';?>

<!--我是静态注释-->
系统设置了分页数位：<?php echo $this->_config['pagesize'];?>
<?php /*我是PHP中的注释,在静态中是看不到的,只是在PHP源代码才可以看到*/ ?>
<?php echo $this->_vars['name'];?>
<?php echo $this->_vars['concent'];?>...
<br/>
<?php if($this->_vars['a']){?>
   <div>我是1号界面...</div>
<?php }else{?>
   <div>我是2号界面...</div>
<?php }?>


<br/>
<?php foreach($this->_vars['array'] as $key=>$value){?>
    <?php echo $key?>...<?php echo $value?><br/>
<?php }?>















</body>
</html>