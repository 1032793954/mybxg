<?php
$dir='main';/*默认目录名称*/
$filename='index';/*默认文件名称*/
// index.php的作用就是根据url的不同返回不同的页面。
if(array_key_exists('PATH_INFO',$_SERVER)){
	// 获取url中的路径main/index
	$path=$_SERVER['PATH_INFO'];
	/*去掉路径中的第一个斜杠*/
	$str=substr($path,1);
	/*分割路径和文件名称*/
	$arr=explode('/',$str);
	if(count($arr)==2){
		$dir=$arr[0];/*覆盖的目录名称*/
		$filename=$arr[1];/*覆盖文件名称*/
	}else{
		/*如果不是两层路径就跳到登陆页面*/
		$filename='login';
	}
}
/*当前页面嵌入一个子页面*/
include('./views/'.$dir.'/'.$filename.'.html');
?>
