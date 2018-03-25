<?php
    //接口调用函数封装
    /*
     * $url 接口url string
     * $type 请求类型 string
     * $res 返回数据类型 string
     * $arr post 请求参数 string
     * */
    function http_url($url,$type="get",$res="json",$arr=""){
    	//1.初始化curl
    	$ch=curl_init();
    	//2.设置curl的参数
    	curl_setopt($ch, CURLOPT_URL,$url);
    	curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
    	if($type=="post"){
    		curl_setopt($ch,CURLOPT_POST,1);
    	    curl_setopt($ch,CURLOPT_POSTFIELDS,$arr);
    	};
    	//3.采集
    	$output=curl_exec($ch);
    	//4.关闭
    	curl_close($ch);
    	if($res=="json"){
    		if(curl_errno($ch)){
    			return curl_error($ch);
    		}else{
    			return json_decode($output,true);
    		}
        };
        return $output;
    };
?>