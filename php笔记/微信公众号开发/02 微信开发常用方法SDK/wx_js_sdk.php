<?php

    //js-sdk获取有效的jsapi_ticket
    function getJsApiTicket(){
        //如果session中保存有效的jsapi_ticket
        if($_SESSION['jsapi_ticket_expire_time']>time()&&$_SESSION['jsapi_ticket']){
            $jsapi_ticket=$_SESSION['jsapi_ticket'];
        }else{
            $access_token=getWxAccessToken();
            $url="https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=".$access_token."&type=jsapi";
            $res=http_url($url);
            $jsapi_ticket=$res['ticket'];
            $_SESSION['jsapi_ticket']=$jsapi_ticket;
            $_SESSION['jsapi_ticket_expire_time']=time()+7000;
        };
        return $jsapi_ticket;
    };

    //返回access_token
    function getWxAccessToken(){
        //将access_token存在session/cookie中
        if($_SESSION['access_token'] && $_SESSION['expire_time']>time()){
            //如果access_token在session中并没有过期
            return $_SESSION['access_token'];
        }else{
            //如果access_token不存在或者已经过期,重新获取access_token;
            echo '$access_token<br/>';
            $appid='wx8641d68a7946bfbe';
            $appsecret='f971ce4b35b0cb09d4170b6bb9fa3aa0';
            $url="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=$appid&secret=$appsecret";
            $res=http_url($url,'get','json');
            $access_token=$res['access_token'];
            //将重新获取到的access_token存到session
            $_SESSION['access_token']=$access_token;
            $_SESSION['expire_time']=time()+7000;
            return $access_token;
        };
    };
?>