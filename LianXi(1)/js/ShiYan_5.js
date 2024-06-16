$(document).ready(function() {  
    $("#registrationForm").validate({  
        rules: {  
            username: {  
                required: true,  
                minlength: 4,  
                maxlength: 20  
            },  
            email: {  
                required: true,  
                email: true  
            },  
            password: {  
                required: true,  
                minlength: 8  
            },  
            "confirm-password": {  
                required: true,  
                equalTo: "#password"  
            }  
        },  
        messages: {  
            username: {  
                required: "请输入用户名",  
                minlength: "用户名至少4个字符",  
                maxlength: "用户名不能超过20个字符"  
            },  
            email: {  
                required: "请输入邮箱地址",  
                email: "请输入有效的邮箱地址"  
            },  
            password: {  
                required: "请输入密码",  
                minlength: "密码至少8个字符"  
            },  
            "confirm-password": {  
                required: "请确认密码",  
                equalTo: "两次输入的密码不一致"  
            }  
        },  
        submitHandler: function(form) {  
            // 这里可以添加表单提交到服务器的代码  
            alert("注册成功，表单将提交到服务器！");  
            return false; // 阻止表单默认提交  
        }  
    });  
});
//在js中初始化Tooltip 
$(function() {  
    $(document).tooltip();  
});