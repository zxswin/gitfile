<?php
/**
 * _runtime()是用来获取执行耗时的
 * @access public 表示函数对外公开
 * @return float 表示返回出的是一个浮点型数字。
*/

function _runtime(){
	$_mtime=explode(" ", microtime());
	return $_mtime[1]+$_mtime[0];
};
/**
 * _alert_back()表示JS弹窗
 * @access public
 * @param $_info;
 * @return void 弹窗
*/
function _alert_back($_info){
	echo "<script type='text/javascript'>alert('".$_info."');history.back();</script>";
	exit();
};
//弹出后会自动关闭自己
function _alert_close($_info){
	echo "<script type='text/javascript'>alert('".$_info."');window.close();</script>";
	exit();
};


function _location($_info,$_url){
	if(!empty($_info)){
		echo "<script type='text/javascript'>alert('".$_info."');location.href='".$_url."'</script>";
		exit();
	}else{
		header('Location:'.$_url);
	};
	
};



function _page($_sql,$_size){
	//将里面所有的变量取出来，外部可以访问。
    global $_page,$_pagesize,$_pagenum,$_pageabsolute,$_num;
	if(isset($_GET['page'])){
		$_page=$_GET['page'];
		if(empty($_page)||$_page<0||!is_numeric($_page)){
			$_page=1;
		}else{
			$_page=intval($_page);
		};
	}else{
		$_page=1;
	};
	$_pagesize=$_size;
	$_num=_num_rows(_query($_sql));
	if($_num==0){
		$_pageabsolute=1;
	}else{
		$_pageabsolute=ceil($_num/$_pagesize);
	};
	if($_page>$_pageabsolute){
		$_page=$_pageabsolute;
	};
	
	$_pagenum=($_page-1)*$_pagesize;
};



function _paging($_type){
	global $_page,$_num,$_pageabsolute,$_pagenum;
	if($_type==1){
		
		echo '<div id="page_num">';
		echo '<ul>';
		for($i=0;$i<$_pageabsolute;$i++){
			if($_page==($i+1)){
				echo '<li><a href="'.SCRIPT.'.php?page='.($i+1).'" class="selected">'.($i+1).'</a></li>';
			}else{
				echo '<li><a href="'.SCRIPT.'.php?page='.($i+1).'">'.($i+1).'</a></li>';
			};
		           }
		    echo '</ul>';
		    echo '</div>';
		
	}elseif($_type==2){
		echo '<div id="page_text">';
		echo '<ul>';
		echo '<li>'.$_page.'/'.$_pageabsolute.'页|</li>';
		         echo '<li>共有<strong>'.$_num.'</strong>条数据|</li>';
		       
		           if($_page==1){
		           	 echo '<li>首页</li>';
		           	 echo '<li>上一页</li>';
		           }else{
		           	 echo '<li><a href="'.SCRIPT.'.php">首页</a></li>';
		           	 echo '<li><a href="'.SCRIPT.'.php?page='.($_page-1).'">上一页</a></li>';
		           };
		           if($_page==$_pageabsolute){
		           	 echo '<li>下一页</li>';
		           	 echo '<li>尾页</li>';
		           }else{
		           	  echo '<li><a href="'.SCRIPT.'.php?page='.($_page+1).'">下一页</a></li>';
		           	  echo '<li><a href="'.SCRIPT.'.php?page='.$_pageabsolute.'">尾页</a></li>';
		           };
		          
		      echo  '</ul>';
		    echo '</div>';
		
	};
};





//判断是否处于登录状态
function _login_state(){
	if(isset($_COOKIE['username'])){
		_alert_back('登录状态无法进行本操作');
	};
};

//唯一标识符验证
function _uniqid($_mysql_uniqid,$_cookie_uniqid){
	if($_mysql_uniqid!=$_cookie_uniqid){
		_alert_back('唯一标识符异常');
	};
};


//写入xml
function _set_xml($_xmlfile,$_clean){
	$_fp=@fopen('new.xml', 'w');
	if(!$_fp){
		exit('系统错误，文件不存在！');
	};
	flock($_fp,LOCK_EX);
	$_string="<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n";
	fwrite($_fp,$_string,strlen($_string));
	$_string="<vip>\r\n";
	fwrite($_fp,$_string,strlen($_string));
	$_string="\t<id>{$_clean['id']}</id>\r\n";
	fwrite($_fp,$_string,strlen($_string));
	$_string="\t<username>{$_clean['username']}</username>\r\n";
	fwrite($_fp,$_string,strlen($_string));
	$_string="\t<sex>{$_clean['sex']}</sex>\r\n";
	fwrite($_fp,$_string,strlen($_string));
	$_string="\t<face>{$_clean['face']}</face>\r\n";
	fwrite($_fp,$_string,strlen($_string));
	$_string="\t<email>{$_clean['email']}</email>\r\n";
	fwrite($_fp,$_string,strlen($_string));
	$_string="\t<url>{$_clean['url']}</url>\r\n";
	fwrite($_fp,$_string,strlen($_string));
	$_string="</vip>";
	fwrite($_fp,$_string,strlen($_string));
	
	flock($_fp, LOCK_UN);
	fclose($_fp);
	
	
};



//读取xml文件
function _get_xml($_xmlfile){
	$_html=array();
	if(file_exists($_xmlfile)){
		$_xml=file_get_contents($_xmlfile);
		preg_match_all('/<vip>(.*)<\/vip>/s',$_xml,$_dom);
	
		foreach ($_dom[1] as $_value){
			preg_match_all('/<id>(.*)<\/id>/s',$_value,$_id);
			preg_match_all('/<username>(.*)<\/username>/s',$_value,$_username);
			preg_match_all('/<sex>(.*)<\/sex>/s',$_value,$_sex);
			preg_match_all('/<face>(.*)<\/face>/s',$_value,$_face);
			preg_match_all('/<email>(.*)<\/email>/s',$_value,$_email);
			preg_match_all('/<url>(.*)<\/url>/s',$_value,$_url);
			$_html['id']=$_id[1][0];
			$_html['username']=$_username[1][0];
			$_html['sex']=$_sex[1][0];
			$_html['face']=$_face[1][0];
			$_html['email']=$_email[1][0];
			$_html['url']=$_url[1][0];
	
	
	
		};
	}else{
		echo '文件不存在！';
	};
	return $_html;
};




//字符串截取
function _title($_string){
	if(mb_strlen($_string,'utf-8')>14){
		$_string=mb_substr($_string, 0,14,'utf-8').'...';
	};
	return $_string;
};

//过滤html
function _html($_string){
	if(is_array($_string)){
		foreach ($_string as $_key=>$_value){
			
			//$_string[$_key]=htmlspecialchars($_value);
			//可以使用递归的思路
			$_string[$_key]=_html($_value);
		};
	}else {
		$_string=htmlspecialchars($_string);
	};
	return $_string;
};

//清空session
function _session_destroy(){
	session_destroy();
};

//清空cookied
function _unsetcookies(){
	setcookie('username','',time()-1);
	setcookie('uniqid','',time()-1);
	_session_destroy();
	_location(null, 'index.php');
};


function _mysql_string($_string,$_con){
	//get_magic_quotes_gpc()如果开启状态，那么就不需转义
	if(!GPC){
		return mysqli_real_escape_string($_con, $_string);
	}else{
		return  $_string;
	};
};
function _sha1_uniqid(){
	$con = mysqli_connect("localhost", "root", "root");
	return _mysql_string(sha1(uniqid(rand(),true)),$con);
	mysqli_close($con);
};

function _check_code($_first_code,$_end_code){
	if($_first_code!=$_end_code){
		_alert_back("验证码不正确");
	};
};
/**
 * _code()是验证码函数
 * @access public
 * @param int $_width表示验证码的高度
 * @param int $_rnd_code表示验证码的位数
 * @param bool $_flag 表示验证码是否需要边框
 * @return_void这个函数执行后产生的一个验证码
 */

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
































































