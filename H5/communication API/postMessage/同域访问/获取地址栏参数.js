function GetQueryString(name)
            {
                var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");   
                //以goodsId开头或者&goodsId开头+=参数值（规定参数值）（&|$）结尾.  
                var r = window.location.search.substr(1).match(reg);
                  console.log(r);
                //substr截取字符串。  
               //输出一个数组
//              console.log(window.location.search);//输出？后面的参数
                //拿到goodsId 
              
                if(r!=null){
                    return  unescape(r[2])//对escape（）这个函数反解码。直接返回值。
                }else{
                    return ""
                };
//                return null;
            }