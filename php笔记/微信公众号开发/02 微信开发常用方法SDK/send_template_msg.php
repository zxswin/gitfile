<?php
    //消息模板接口
    function sendTemplateMsg(){
        //1.获取到access_token
        $access_token=getWxAccessToken();
        $url="https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=".$access_token;
        //2.组装数组
    //     	{
    //     		"touser":"OPENID",
    //     		"template_id":"ngqIpbwh8bUfcSsECmogfXcV14J0tQlEpBO27izEYtY",
    //     		"url":"http://www.szdhan.com/",
    //     		"data":{
    //     		"first": {
    //     		"value":"恭喜你购买成功！",
    //     		"color":"#173177"
    //     		}
    //     		}
    //     	}
        $array=array(
                'touser'=>'op0I60lkNnL-ZX95U161IL_4Fd_I',
                'template_id'=>'-hEv8cE85w5U4n6LVSUmj6VFKOHdRL5_0Tl2yyyKSjg',
                'url'=>'http://www.szdhan.com/',
                'data'=>array(
                        'name'=>array('value'=>'hello','color'=>'#173177'),
                        'money'=>array('value'=>100,'color'=>'#172177'),
                        'date'=>array('value'=>date('Y-m-d H:i:s'),'color'=>"#173177")
            ),
        );
        //3.将数组->json
        $postJson=json_encode($array);
        //4.调用curl函数
        $res=http_url($url,'post','json',$postJson);
        var_dump($res);
    };
?>