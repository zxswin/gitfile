window.onload=function(){
	code();
	//表单验证
    var fm=document.getElementsByTagName('form')[0];
    fm.onsubmit=function(){
    	//密码验证
    	if(fm.password.value!=''){
    		if(fm.password.value.length<6){
		    alert('密码不得小于6位');
		    fm.password.value='';//清空
		    fm.password.focus();//将焦点移动至表单字段
		    return false;
	       };
    	};
	    return true;
    	
    };
};