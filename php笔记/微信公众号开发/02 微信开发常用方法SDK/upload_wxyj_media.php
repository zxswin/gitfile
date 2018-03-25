<?php
    function uploadContentMedia($mediaFile){ //上传图文消息内的图片获取URL(永久素材新增)
        //获取本地路径
        $mediaFile = realpath($mediaFile);
        //判断本地文件是否存在
        if(!file_exists($mediaFile)){
            echo '本地文件不存在';
        }
        $fi = new finfo(FILEINFO_MIME_TYPE); 
        $miniType = $fi->file($mediaFile); 
        
        //1.获取到access_token
        $access_token=getWxAccessToken();
        $url = 'https://api.weixin.qq.com/cgi-bin/media/uploadimg?access_token='.$access_token;
        
        //新版本php 使用 CurlFile 对象上传文件
        if (class_exists('CURLFile')) {  
            $media = new CurlFile($mediaFile);
            $media->setMimeType($miniType);
            $data = array('media' => $media);  
        } else {  
            $data = array('media' => '@' . realpath($mediaFile));  
        }  
        
        $res = http_url($url,"post",'json',$data);
        return $res['url'];
    }
?>