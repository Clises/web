;/*!/static/js文件基于rem移动端自适应方案/index.js文件基于rem移动端自适应方案*/
requirejs.config({
	// baseUrl 为包含 RequireJS 的那个 HTML 页面的所属目录
	baseUrl: "../js文件基于rem移动端自适应方案",
	paths: {
		jquery: "http://fun1.yystatic.com/platform/js文件基于rem移动端自适应方案/jquery-1.8.0.min",
		duowan:"http://www.duowan.com/duowan.js文件基于rem移动端自适应方案?nocdn=true",
		hiido:"http://fun1.yystatic.com/platform/js文件基于rem移动端自适应方案/commons/_hiido"
	},
	shim: {
		hiido:{
			deps:['duowan']
		},
	}
})


require(
	[
	// 精彩预告 -- taskBar
	'index/mod-taskBar'
	],
	function(taskBar) {
		taskBar.init();

});


;/*!/static/js文件基于rem移动端自适应方案/index/mod-taskBar.js文件基于rem移动端自适应方案*/
define('index/mod-taskBar', ['jquery'],function($){

	return{
		init:function(){
			console.log($);

		}
	}
})

