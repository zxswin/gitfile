<?php
    //获取临时二维码接口
    function getTimeQrCode(){
        //1.获取ticket票据
        //全局票据access_token 网页授权access_token 微信js-SDK jsa
        $access_token=getWxAccessToken();
        $url="https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=".$access_token;
        //{"expire_seconds": 604800, "action_name": "QR_SCENE", "action_info": {"scene": {"scene_id": 123}}}
        $postArr=array(
            'expire_seconds'=>'604800',//24*60*60*7
            'action_name'=>'QR_SCENE',
            'action_info'=>array(
                'scene'=>array('scene_id'=>2000),
            ),
        );
        $postJson=json_encode($postArr);
        $res=http_url($url,'post','json',$postJson);
        $ticket=$res['ticket'];
        //2.使用ticket获取二维码图片
        $url="https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=".urlencode($ticket);
        //$res=http_url($url);
        echo "临时二维码";
        //直接展示
        echo "<img src='".$url."'/>";
    };
    //获取永久二维码接口
    function getQrCode(){
        //1.获取ticket票据
        //全局票据access_token 网页授权access_token 微信js-SDK jsa
        $access_token=getWxAccessToken();
        $url="https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=".$access_token;
        //{"action_name": "QR_LIMIT_SCENE", "action_info": {"scene": {"scene_id": 123}}}
        $postArr=array(
                'action_name'=>'QR_SCENE',
                'action_info'=>array(
                        'scene'=>array('scene_id'=>3000),
                ),
        );
        $postJson=json_encode($postArr);
        $res=http_url($url,'post','json',$postJson);
        $ticket=$res['ticket'];
        //2.使用ticket获取二维码图片
        $url="https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=".urlencode($ticket);
        //$res=http_url($url);
        echo "永久二维码";
        //直接展示
        echo "<img src='".$url."'/>";
    };
?>