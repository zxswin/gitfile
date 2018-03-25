<?php
    function getUploadMedia(){ //获取微信上传的临时素材并保存
		//1.获取到media_id
		$media_id = '0oIMgEWjjaIDFeYtuMt6qGwcyQNoDDo_gYjJJRAuXMvcRnBrrjpH_nBlM1Ze3wbb';
		echo '$media_id88   '.$media_id.'<br/>';
		//2.获取到access_token
		$access_token=getWxAccessToken();
		$url='https://api.weixin.qq.com/cgi-bin/media/get?access_token='.$access_token.'&media_id='.$media_id;
		echo '$url '.$url.'<br/>';
		$res = http_url($url,'file','file');
		echo '执行到下载素材8888<br/>';
		saveFile("newSmallelife.jpg",$res);  
	}

	//保存文件到本地  
	function saveFile($filename, $filecontent){  
		$local_file = fopen($filename, 'w');  
		if (false !== $local_file){//不恒等于（恒等于=== 就是false只能等于false，而不等于0）  
			if (false !== fwrite($local_file, $filecontent)) {  
				fclose($local_file);  
				echo '写入文件成功';
			}  
		}  
	}  
?>