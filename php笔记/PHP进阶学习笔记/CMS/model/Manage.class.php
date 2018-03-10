<?php
  //管理员实体类
  class Manage{
  	
  	private $_tpl;
  	private $admin_user;
  	private $admin_pass;
  	private $level;
  	//构造方法,初始化
  	public function __construct(&$_tpl){
  		$this->_tpl=$_tpl;
  		$this->Action();
  	}
  	//业务流程控制器
  	private function Action(){
  		$this->_tpl->assign('list', false);
  		$this->_tpl->assign('add', false);
  		$this->_tpl->assign('update', false);
  		$this->_tpl->assign('delete', false);
  		//业务流程控制器
  		switch($_GET['action']){
  			case 'list':
  				$this->_tpl->assign('list', true);
  				$this->_tpl->assign('title', '管理员列表');
  				$this->_tpl->assign('AllManage',$this->getManage());
  				break;
  			case 'add':
  				if(isset($_POST['send'])){
  					$this->admin_user=$_POST['admin_user'];
  					$this->admin_pass=sha1($_POST['admin_pass']);
  					$this->level=$_POST['level'];
  		
  					if($this->addManage()){
  						Tool::alertLocation('恭喜你,新增管理员成功!', 'manage.php?action=list');
  					}else{
  						Tool::alertBack('很遗憾,新增管理员失败！');
  					}
  				};
  				$this->_tpl->assign('add', true);
  				$this->_tpl->assign('title', '新增管理员');
  				break;
  			case 'update':
  				$this->_tpl->assign('update', true);
  				$this->_tpl->assign('title', '修改管理员');
  				break;
  			case 'delete':
  				$this->_tpl->assign('delete', true);
  				$this->_tpl->assign('title', '删除管理员');
  				break;
  			default:
  				echo '非法操作!';
  		};
  		

  		$this->_tpl->display('manage.tpl');
  		
  		
  		
  	}
  	
  	 //查询所有管理员
  	 public function getManage(){
  	 	$_db=DB::getDB();
  	 	$_sql="SELECT 
  	 			m.id,
  	 			m.admin_user,
  	 			m.login_count,
  	 			m.last_ip,
  	 			m.last_time,
  	 			l.level_name
  	 		FROM 
  	 			cms_manage m,
  	 			cms_level l
  	 			WHERE
  	 			l.level=m.level
  	 			ORDER BY
  	 			m.id ASC
  	 			LIMIT
  	 			0,25";
  	 	$_result=$_db->query($_sql);
  	 	$_html=array();
  	 	while (!!$_objects=$_result->fetch_object()){
  	 		$_html[]=$_objects;
  	 	};
  	 	DB::unDB($_result, $_db);
  	 	return $_html;
  	 }
  	 //新增加管理员
  	 public function addManage(){
  	 	$_db=DB::getDB();
  	 	$sql="INSERT INTO 
  	 			      cms_manage 
  	 			              (
  	 			                  admin_user, 
  	 			                  admin_pass, 
  	 			                  level, 
  	 			                  login_count, 
  	 			                  last_ip, 
  	 			                  last_time, 
  	 			                  reg_time
  	 	                      ) 
  	 			              VALUES 
  	 			                    (
  	 			                     
  	 			                     '$this->admin_user', 
  	 			                     '$this->admin_pass', 
  	 			                     '$this->level', 
  	 			                      '0', 
  	 			                      '000.000.000.000',
  	 			                      '2017-04-15 00:00:00', 
  	 			                      NOW());";
  	 	$_result=$_db->query($sql);
  	 	$_affected_rows=$_db->affected_rows;
  	 	DB::unDB($_result, $_db);
  	 	return $_affected_rows;
  	 	
  	 }
  	 
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  








