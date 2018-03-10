<?php
session_start();
//定义一个常量，用来授权调用includes里面的文件
define('IN_TG', true);

//运行验证码函数
_code();

function _code($_width=75,$_height=25,$_rnd_code=4,$_flag=false){
	$_nmsg='';
	//定义随机码个数
	//创建随机码
	for($i=0;$i<$_rnd_code;$i++){
		$_nmsg.=dechex(mt_rand(0, 15));
	};
	//保存在session里面
	$_SESSION['code']=$_nmsg;
	//长和高
	
	//创建一张图像
	$_img=imagecreatetruecolor($_width, $_height);

	//白色
	$_white=imagecolorallocate($_img, 255, 255, 255);
	//填充
	imagefill($_img, 0,0, $_white);
	if($_flag){
		//黑色边框
		$_black=imagecolorallocate($_img, 0, 0, 0);
		imagerectangle($_img, 0, 0, $_width-1, $_height-1, $_black);
	};


	//随机画出6个线条
	for($i=0;$i<6;$i++){
		$_rnd_color=imagecolorallocate($_img, mt_rand(0, 255), mt_rand(0, 255),mt_rand(0, 255));
		imageline($_img, mt_rand(0,$_width), mt_rand(0,$_height), mt_rand(0, $_width), mt_rand(0, $_height), $_rnd_color);
	};
	//随机雪花
	for($i=0;$i<100;$i++){
		$_rnd_color=imagecolorallocate($_img, mt_rand(200, 255), mt_rand(200, 255),mt_rand(200, 255));
		imagestring($_img, 1, mt_rand(1, $_width), mt_rand(1, $_height), '*', $_rnd_color);
	};
	//输出验证码
	for($i=0;$i<strlen($_SESSION['code']);$i++){
		$_rnd_color=imagecolorallocate($_img, mt_rand(0, 100), mt_rand(0, 150),mt_rand(0, 200));
		imagestring($_img, 5, $i*$_width/$_rnd_code+mt_rand(1, 10), mt_rand(1, $_height/2), $_SESSION['code'][$i], $_rnd_color);
	};


	//输出图像
	header('Content-Type:image/png');
	imagepng($_img);
	//销毁
	imagedestroy($_img);

};
  
?>


































































