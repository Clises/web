$.post、$.get是一些简单的方法，如果要处理复杂的逻辑，还是需要用到jQuery.ajax()  
   
一、$.ajax的一般格式  
$.ajax({  
     type: 'POST',  
     url: url ,  
     data: data ,
　　  dataType:dataType ,  
     success: success , 
     error: error   
});  
   
二、$.ajax的参数描述  
参数 描述  
url 必需。规定把请求发送到哪个 URL。  
data    可选。映射或字符串值。规定连同请求发送到服务器的数据。  
success(data, textStatus, jqXHR)    可选。请求成功时执行的回调函数。  
dataType      
可选。规定预期的服务器响应的数据类型。  
默认执行智能判断（xml、json、script 或 html）。  
   
三、$.ajax需要注意的一些地方：  
  1.data主要方式有三种，html拼接的，json数组，form表单经serialize()序列化的；通过dataType指定，不指定智能判断。  
  2.$.ajax只提交form以文本方式，如果异步提交包含<file>上传是传过不过去,需要使用jquery.form.js的$.ajaxSubmit  
  
四、$.ajax我的实际应用例子  
Js代码  收藏代码  
//1.$.ajax带json数据的异步请求    
var aj = $.ajax( {      
    url:'productManager_reverseUpdate',// 跳转到 action      
    data:{      
             selRollBack : selRollBack,      
             selOperatorsCode : selOperatorsCode,      
             PROVINCECODE : PROVINCECODE,      
             pass2 : pass2      
    },      
    type:'post',      
    cache:false,      
    dataType:'json',      
    success:function(data) {      
        if(data.msg =="true" ){      
            // view("修改成功！");      
            alert("修改成功！");      
            window.location.reload();      
        }else{      
            view(data.msg);      
        }      
     },      
     error : function() {      
          // view("异常！");      
          alert("异常！");      
     }      
});    
    
    
//2.$.ajax序列化表格内容为字符串的异步请求    
function noTips(){      
    var formParam = $("#form1").serialize();//序列化表格内容为字符串      
    $.ajax({      
        type:'post',          
        url:'Notice_noTipsNotice',      
        data:formParam,      
        cache:false,      
        dataType:'json',      
        success:function(data){      
        }      
    });      
}      
    
    
//3.$.ajax拼接url的异步请求    
var yz=$.ajax({      
     type:'post',      
     url:'validatePwd2_checkPwd2?password2='+password2,      
     data:{},      
     cache:false,      
     dataType:'json',      
     success:function(data){      
          if( data.msg =="false" ) //服务器返回false，就将validatePassword2的值改为pwd2Error，这是异步，需要考虑返回时间      
          {      
               textPassword2.html("<font color='red'>业务密码不正确！</font>");      
               $("#validatePassword2").val("pwd2Error");      
               checkPassword2 = false;      
               return;      
           }      
      },      
      error:function(){}      
});     
    
    
//4.$.ajax拼接data的异步请求    
$.ajax({       
    url:'<%=request.getContextPath()%>/kc/kc_checkMerNameUnique.action',       
    type:'post',       
    data:'merName='+values,       
    async : false, //默认为true 异步       
    error:function(){       
       alert('error');       
    },       
    success:function(data){       
       $("#"+divs).html(data);       
    }    
});





https://juejin.im/entry/583a9e02ac502e006c214b81 
文章参考
