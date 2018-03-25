<?php
	//微信群发接口
    function sendMsgAll(){
    	//1.获取全局access_token
    	$access_token=getWxAccessToken();
    	$url="https://api.weixin.qq.com/cgi-bin/message/mass/preview?access_token=".$access_token;
    	//2.组装群发接口数据array
        // $array=array(
        // 	'touser'=>'op0I60lkNnL-ZX95U161IL_4Fd_I',//微信用户的openId
        //     'text'=>array('content'=>'www.szdhan.com'),//文本内容
        //     'msgtype'=>'text'//消息类型
        // );
        //3.将array->json字符串
		//$postJson=urldecode(json_encode($array));

		$postJson = '{
    		"touser":"op0I60lkNnL-ZX95U161IL_4Fd_I",
    		"text":{
    		"content":"www.szdhan.com 手足多汗网"
    		},
    		"msgtype":"text"
    	}';
        //4.调用curl
        $res=http_url($url,'post','json',$postJson);
        var_dump($res);
    };
?>