<?php
require substr(dirname(__FILE__),0,-6).'/init.inc.php';
require ROOT_PATH.'/model/Manage.class.php';
global $_tpl;

new Manage($_tpl);

?>