<?php
    //获取网页高级授权
    function getUserDetail(){
        //echo '准备好跳转了';
        //1.获取到code
        $appid="wx8641d68a7946bfbe";
        $redirect_uri=urlencode("http://www.szdhan.com/wxtest/oauto.php");
        $url="https://open.weixin.qq.com/connect/oauth2/authorize?appid=".$appid."&redirect_uri=".$redirect_uri."&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect ";
        //header('Location:'.$url);
        return $url;
    };
    function getUserInfo(){
        //2.获取到网页授权的access_token
        $appid="wx8641d68a7946bfbe";
        $appsecret="f971ce4b35b0cb09d4170b6bb9fa3aa0";
        $code=$_GET['code'];
        $url="https://api.weixin.qq.com/sns/oauth2/access_token?appid=".$appid."&secret=".$appsecret."&code=".$code."&grant_type=authorization_code";
        //3.拉取用户的openid
        $res=http_url($url);
        var_dump($res);
        $access_token=$res['access_token'];
        $openid=$res['openid'];
        //4.拉取用户的详细信息
        $url="https://api.weixin.qq.com/sns/userinfo?access_token=".$access_token."&openid=".$openid."&lang=zh_CN";
        $res=http_url($url);
        var_dump($res);
    };
?>