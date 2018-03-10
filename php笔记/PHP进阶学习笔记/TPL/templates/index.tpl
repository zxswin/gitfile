<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><!--{webname}--></title>
</head>
<body>

{include file="test.php"}

<!--我是静态注释-->
系统设置了分页数位：<!--{pagesize}-->
{#}我是PHP中的注释,在静态中是看不到的,只是在PHP源代码才可以看到{#}
{$name}
{$concent}...
<br/>
{if $a}
   <div>我是1号界面...</div>
{else}
   <div>我是2号界面...</div>
{/if}


<br/>
{foreach $array(key,value)}
    {@key}...{@value}<br/>
{/foreach}















</body>
</html>