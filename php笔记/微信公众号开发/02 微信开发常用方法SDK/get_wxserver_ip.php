<?php
    //获取微信服务器ip地址
    function getWxServerIp(){ 
        $access_token=getWxAccessToken();
        $url = "https://api.weixin.qq.com/cgi-bin/getcallbackip?access_token=".$access_token;
        $result =http_url($url,"get","");
        var_dump($result);
    }
?>