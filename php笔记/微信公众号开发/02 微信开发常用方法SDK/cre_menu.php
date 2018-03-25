<?php
	//自定义菜单
    function definedItem(){
    	//创建微信菜单
    	//目前微信接口的调用方式都是通过curl post/get
    	$access_token=getWxAccessToken();
    	$url="https://api.weixin.qq.com/cgi-bin/menu/create?access_token=".$access_token;
    	$jsonmenu = '{
			"button":[
			{    
				 "type":"click",
				 "name":"儿童11",
				 "key":"V1001_TODAY_MUSIC"
			 },
			 {
				  "name":"网站建设",
				  "sub_button":[
				  {    
					  "type":"view",
					  "name":"微信开发",
					  "url":"http://www.szdhan.com/"
				   },
				   {
					  "type":"view",
					  "name":"搜索",
					  "url":"http://www.szdhan.com/"
				   },
				   {
					  "type":"click",
					  "name":"为我们点赞",
					  "key":"V1001_GOOD"
				   }]
			  }]
		}';
    	$result =http_url($url,"post","json",$jsonmenu);
        var_dump($result);
    };
?>