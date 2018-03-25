<?php
    //接收事件推送并回复
    function reponseMsg(){
        //1.获取到微信推送过来的post数据(xml格式)
        //$postArr=$GLOBALS['HTTP_RAW_POST_DATA'];
        $postArr=file_get_contents('php://input');
        //2.处理消息类型,并设置回复类型和内容
        $postObj=simplexml_load_string($postArr);
        //3.判断该数据包是否是订阅的事件推送
        if(strtolower($postObj->MsgType)=='event'){
            //菜单点击事件
            if(strtolower($postObj->Event)=='click'){
                //如果是自定义菜单中的event ->click
                if(strtolower($postObj->EventKey)=='click'){
                    $content="这是点击事件推送";
                    $template="<xml>
                        <ToUserName><![CDATA[%s]]></ToUserName>
                        <FromUserName><![CDATA[%s]]></FromUserName>
                        <CreateTime>%s</CreateTime>
                        <MsgType><![CDATA[%s]]></MsgType>
                        <Content><![CDATA[%s]]></Content>
                        </xml>";
                    $fromUser=$postObj->ToUserName;
                    $toUser=$postObj->FromUserName;
                    $time=time();
                    $msgtype='text';
                    $info=sprintf($template,$toUser,$fromUser,$time,$msgtype,$content);
                    echo $info;
                }
            }
            //扫码推事件
            if(strtolower($postObj->Event)=='scancode_push'){
                //如果是自定义菜单中的event ->click
                if(strtolower($postObj->EventKey)=='push'){
                    $content="这是扫描推送事件完成";
                    $template="<xml>
                        <ToUserName><![CDATA[%s]]></ToUserName>
                        <FromUserName><![CDATA[%s]]></FromUserName>
                        <CreateTime>%s</CreateTime>
                        <MsgType><![CDATA[%s]]></MsgType>
                        <Content><![CDATA[%s]]></Content>
                        </xml>";
                    $fromUser=$postObj->ToUserName;
                    $toUser=$postObj->FromUserName;
                    $time=time();
                    $msgtype='text';
                    $info=sprintf($template,$toUser,$fromUser,$time,$msgtype,$content);
                    echo $info;
                }
            }
            //扫码推事件带提示
            if(strtolower($postObj->Event)=='scancode_waitmsg'){
                //如果是自定义菜单中的event ->click
                if(strtolower($postObj->EventKey)=='waitmsg'){
                    $content="这是扫描推送事件带提示完成";
                    $template="<xml>
                        <ToUserName><![CDATA[%s]]></ToUserName>
                        <FromUserName><![CDATA[%s]]></FromUserName>
                        <CreateTime>%s</CreateTime>
                        <MsgType><![CDATA[%s]]></MsgType>
                        <Content><![CDATA[%s]]></Content>
                        </xml>";
                    $fromUser=$postObj->ToUserName;
                    $toUser=$postObj->FromUserName;
                    $time=time();
                    $msgtype='text';
                    $info=sprintf($template,$toUser,$fromUser,$time,$msgtype,$content);
                    echo $info;
                }
            }
            //弹出系统拍照发图的事件推送
            if(strtolower($postObj->Event)=='pic_sysphoto'){
                //如果是自定义菜单中的event ->click
                if(strtolower($postObj->EventKey)=='sysphoto'){
                    $content="弹出系统拍照发图的事件推送";
                    $template="<xml>
                        <ToUserName><![CDATA[%s]]></ToUserName>
                        <FromUserName><![CDATA[%s]]></FromUserName>
                        <CreateTime>%s</CreateTime>
                        <MsgType><![CDATA[%s]]></MsgType>
                        <Content><![CDATA[%s]]></Content>
                        </xml>";
                    $fromUser=$postObj->ToUserName;
                    $toUser=$postObj->FromUserName;
                    $time=time();
                    $msgtype='text';
                    $info=sprintf($template,$toUser,$fromUser,$time,$msgtype,$content);
                    echo $info;
                }
            }

            //如果是关注subscribe事件
            if(strtolower($postObj->Event=='subscribe')){
                $toUser=$postObj->FromUserName;
                $fromUser=$postObj->ToUserName;
                $arr=array(
                        array(
                                'title'=>'多汗日记：从这张手足多汗症手术票据说起',
                                'description'=>'多汗日记：从这张手足多汗症手术票据说起',
                                'picUrl'=>'http://www.szdhan.com/zxswx/img/wx-himg01.jpg',
                                'url'=>'http://www.szdhan.com/m/a/diary/szdh150.html',
                        ),
                        array(
                                'title'=>'科比做客艾伦秀爆多汗症是真的还是整蛊医生',
                                'description'=>'科比做客艾伦秀爆多汗症 是真的还是整蛊医生',
                                'picUrl'=>'http://www.szdhan.com/zxswx/img/wx-himg02.jpg',
                                'url'=>'http://www.szdhan.com/m/a/video/szdh39.html',
                        ),
                        array(
                                'title'=>'国外多汗症视频多汗症发病原因手术全分析',
                                'description'=>'手足多汗症视频 多汗症发病原因手术全分析',
                                'picUrl'=>'http://www.szdhan.com/zxswx/img/wx-himg03.jpg',
                                'url'=>'http://www.szdhan.com/m/a/video/szdh38.html',
                        ),
                        array(
                                'title'=>'多汗日记：多汗症手术后的一些切身感受',
                                'description'=>'多汗日记：多汗症手术后的一些切身感受',
                                'picUrl'=>'http://www.szdhan.com/zxswx/img/wx-himg04.jpg',
                                'url'=>'http://www.szdhan.com/m/a/diary/szdh55.html',
                        ),
                        array(
                                'title'=>'多汗症健身锻炼黄金时间那个时间段锻炼效果最好',
                                'description'=>'多汗症健身锻炼黄金时间那个时间段锻炼效果最好',
                                'picUrl'=>'http://www.szdhan.com/zxswx/img/wx-himg05.jpg',
                                'url'=>'http://www.szdhan.com/m/a/bodybuilding/szdh92.html',
                        ),
                );
                $template="<xml>
                        <ToUserName><![CDATA[%s]]></ToUserName>
                        <FromUserName><![CDATA[%s]]></FromUserName>
                        <CreateTime>%s</CreateTime>
                        <MsgType><![CDATA[%s]]></MsgType>
                        <ArticleCount>".count($arr)."</ArticleCount>
                        <Articles>";
                foreach($arr as $k=>$v){
                    $template.="<item>
                            <Title><![CDATA[".$v['title']."]]></Title>
                            <Description><![CDATA[".$v['description']."]]></Description>
                            <PicUrl><![CDATA[".$v['picUrl']."]]></PicUrl>
                            <Url><![CDATA[".$v['url']."]]></Url>
                            </item>";
                };
                $template.="</Articles>
                            </xml>";
                echo sprintf($template,$toUser,$fromUser,time(),'news');
            };
        }

        //用户发送关键字的时候,回复图文信息,进行多图文发送时,子图文个数不能超过10个
        if(strtolower($postObj->MsgType)=='text'){
            if(trim($postObj->Content)=='手汗'){
                $toUser=$postObj->FromUserName;
                $fromUser=$postObj->ToUserName;
                $arr=array(
                        array(
                                'title'=>'多汗日记：从这张手足多汗症手术票据说起',
                                'description'=>'多汗日记：从这张手足多汗症手术票据说起',
                                'picUrl'=>'http://www.szdhan.com/zxswx/img/wx-himg01.jpg',
                                'url'=>'http://www.szdhan.com/m/a/diary/szdh150.html',
                        ),
                        array(
                                'title'=>'科比做客艾伦秀爆多汗症是真的还是整蛊医生',
                                'description'=>'科比做客艾伦秀爆多汗症 是真的还是整蛊医生',
                                'picUrl'=>'http://www.szdhan.com/zxswx/img/wx-himg02.jpg',
                                'url'=>'http://www.szdhan.com/m/a/video/szdh39.html',
                        ),
                        array(
                                'title'=>'国外多汗症视频多汗症发病原因手术全分析',
                                'description'=>'手足多汗症视频 多汗症发病原因手术全分析',
                                'picUrl'=>'http://www.szdhan.com/zxswx/img/wx-himg03.jpg',
                                'url'=>'http://www.szdhan.com/m/a/video/szdh38.html',
                        ),
                        array(
                                'title'=>'多汗日记：多汗症手术后的一些切身感受',
                                'description'=>'多汗日记：多汗症手术后的一些切身感受',
                                'picUrl'=>'http://www.szdhan.com/zxswx/img/wx-himg04.jpg',
                                'url'=>'http://www.szdhan.com/m/a/diary/szdh55.html',
                        ),
                        array(
                                'title'=>'多汗症健身锻炼黄金时间那个时间段锻炼效果最好',
                                'description'=>'多汗症健身锻炼黄金时间那个时间段锻炼效果最好',
                                'picUrl'=>'http://www.szdhan.com/zxswx/img/wx-himg05.jpg',
                                'url'=>'http://www.szdhan.com/m/a/bodybuilding/szdh92.html',
                        ),
                );
                $template="<xml>
                        <ToUserName><![CDATA[%s]]></ToUserName>
                        <FromUserName><![CDATA[%s]]></FromUserName>
                        <CreateTime>%s</CreateTime>
                        <MsgType><![CDATA[%s]]></MsgType>
                        <ArticleCount>".count($arr)."</ArticleCount>
                        <Articles>";
                foreach($arr as $k=>$v){
                    $template.="<item>
                            <Title><![CDATA[".$v['title']."]]></Title>
                            <Description><![CDATA[".$v['description']."]]></Description>
                            <PicUrl><![CDATA[".$v['picUrl']."]]></PicUrl>
                            <Url><![CDATA[".$v['url']."]]></Url>
                            </item>";
                };
                $template.="</Articles>
                            </xml>";
                echo sprintf($template,$toUser,$fromUser,time(),'news');
            }else{
                //回复信息
                switch (trim($postObj->Content)){
                    case 0:
                        $content='http://www.szdhan.com/';
                        break;
                    case 1:
                        $content='您输入的数字是1';
                        break;
                };
                $template="<xml>
                            <ToUserName><![CDATA[%s]]></ToUserName>
                            <FromUserName><![CDATA[%s]]></FromUserName>
                            <CreateTime>%s</CreateTime>
                            <MsgType><![CDATA[%s]]></MsgType>
                            <Content><![CDATA[%s]]></Content>
                            </xml>";
                $fromUser=$postObj->ToUserName;
                $toUser=$postObj->FromUserName;
                $time=time();
                $msgtype='text';
                $info=sprintf($template,$toUser,$fromUser,$time,$msgtype,$content);
                echo $info;
            }
        }
        
    };

?>