<?php
if(!defined('IN_TG')){
	exit('非法调用！');
};
_close();

?>
<div id="footer">
    <p>本程序执行耗时为：<?php echo round((_runtime()-START_TIME),4)?></p>
    <p>版权所有 翻版必究</p>
    <p>本程序由<span>飘城Web俱乐部</span>提供 源代码可以任意修改或发布(c)yc60.com</p>
</div>