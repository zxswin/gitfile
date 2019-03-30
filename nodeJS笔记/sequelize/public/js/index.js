$(function() {
  console.log("项目启动", $);
  console.log("document.cookie", document.cookie);

  /** 设置网站cookie  */
  let arr1 = document.cookie.split("; ");
  arr1 = arr1.map(item => {
    let arr2 = item.split("="); //['uid', 1]
    return {
      [arr2[0]]: arr2[1]
    };
  });
  let cookie = Object.assign({}, ...arr1);
  console.log(cookie);

  /** 判断是否加载数据  */
  let root = "http://" + window.document.location.host + "/";
  if (window.document.location.href === root) {
    console.log("当前是网站根目录" , cookie.username);
    if (cookie.username) {
      $("#welcome").text(`欢迎你：${cookie.username}`);
    } else {
      window.location.href = '/api/loginout';
    }
    getContents();
  }

  /** 调试测试接口  */
  $("#api-content").on("click", function() {
    getContents();
  });

  /** 强制创建所有模型表  */
  $("#api-sync").on("click", function() {
    console.log("强制创建表");
    $.ajax({
      url: `/api/sync`,
      dataType: "json",
      method: "GET",
      success: function(data) {
        console.log("成功创建表", data);
      },
      error: function(xhr) {
        console.log("创建表失败了", xhr);
      }
    });
  });

  /** login 登录页面逻辑  */

  $("#i-login").on("click", function() {
    let username = $.trim($("#username").val());
    let password = $.trim($("#password").val());

    if (!username) {
      alert("用户名不得为空");
      return;
    }

    if (!password) {
      alert("密码不得为空");
      return;
    }

    $.ajax({
      url: `/api/login`,
      dataType: "json",
      data: {
        username: username,
        password: password
      },
      method: "POST",
      success: function(data) {
        if (data.code === 0) {
          window.location.href = "/";
        }
        if (data.code === 1) {
          alert(data.data);
        }
      },
      error: function(xhr) {}
    });
  });

  /** 用户注册  */

  $("#i-register").on("click", function() {
    let username = $.trim($("#username").val());
    let password = $.trim($("#password").val());
    let repassword = $.trim($("#repassword").val());

    if (!username) {
      alert("用户名不得为空");
      return;
    }

    if (!password) {
      alert("密码不得为空");
      return;
    }

    if (password !== repassword) {
      alert("两次输入的密码不一致");
      return;
    }

    $.ajax({
      url: `/api/register`,
      dataType: "json",
      data: {
        username: username,
        password: password,
        repassword: repassword
      },
      method: "POST",
      success: function(data) {
        if (data.code === 0) {
          window.location.href = "/api/loginout";
        } else {
          alert(data.data);
        }
      },
      error: function(xhr) {}
    });
  });

  /** 跳转到用户登录  */

  $('#out-login').on("click", function() {
    console.log('退出成功1');
    $.ajax({
      url: `/api/loginout`,
      method: "GET",
      success: function(data) {
        console.log('退出成功');
        cookie.username = '';
        $("#welcome").text(`欢迎你：***`);
      },
      error: function(xhr) {
      }
    });
  });

  $("#i-gologin").on("click", function() {
    window.location.href = "/api/loginout";
  });

  /** 跳转到用户注册  */
  $("#user-register,#i-goregister").on("click", function() {
    window.location.href = "/api/toregister";
  });

});

/** 点赞相关逻辑  */
function likes() {
  let $likeBtns = $('.i-like');
  $likeBtns.each(function(i,e){
    $(this).on('click',function(){
      let dataId = $(this).attr('data-id');
      console.log('dataId' , dataId);
      $.ajax({
        url: `/api/like`,
        dataType: "json",
        data: {
          content_id: dataId,
        },
        method: "POST",
        success: function(data) {
          if (data.code === 0) {
            getContents();
          } else {
            alert(data.data);
          }
        },
        error: function(xhr) {}
      });
    });
  });
  
}

/** 评论相关逻辑  */
function commons() {
   /** 提交评论  */ 
   let $comentBtn = $('.c-button');
   $comentBtn.each(function(i,e){
     $(this).on('click',function(){
       console.log('点击了评论按钮');
       let commentVal =  $.trim($(this).siblings('.c-comval').val());
       let dataId = $(this).siblings('.c-comval').attr('data-id');
       if(!commentVal) {
         alert('评论内容不得为空！');
         return;
       }
       $.ajax({
        url: `/api/comments`,
        dataType: "json",
        data: {
          content_id: dataId,
          content: commentVal
        },
        method: "POST",
        success: function(data) {
          if (data.code === 0) {
            getContents();
          } else {
            alert(data.data);
          }
        },
        error: function(xhr) {}
      });

       
     });
   });
}

/** 调用 contents 接口渲染数据  */

function getContents() {
  $.ajax({
    url: `/api/contents`,
    dataType: "json",
    method: "GET",
    success: function(data) {
      console.log("测试接口请求成功", data);
      rendering(data);
    },
    error: function(xhr) {
      console.log("测试接口请求失败", xhr);
      let html = `加载失败`;
      $contents.append(html);
    }
  });
}

/** 渲染内容  */
function rendering(data) {
  let $contents = $(".contents");
  $contents.html("");
  let html = ``;
  data.forEach(v => {
    html += `
          <div class="i-content">
          <div class="img">
          </div>
          <div class="text">
            <p>${v.content}</p>
          </div>
          <div class="i-operation">
            <button class="i-like" data-id="${v.id}">点赞</button>
            <span>${v.like_count}</span>
          </div>
        </div>
        <ul>
      `;

    v.Comments.forEach(val => {
      let liHtml = `
            <li>
            <div class="comment-item">
              <div class="user-head">
                <div class="i-head"></div>
                <div class="i-name">${val.User.username}</div>
              </div>
              <div class="user-comment">
                <div class="i-comment">
                  <p>${val.content}</p>
                </div>
              </div>
            </div>
          </li>
        `;

      html += liHtml;
    });

    let inputHtml = `
    <div class="c-input">
      <input type="text" class="c-comval" data-id="${v.id}" placeholder="请输入评论内容" value="" />
      <button class="c-button">提交评论</button>
    </div>
    
    `;
    html += inputHtml;
    html += ` </ul>`;
  });

  $contents.append(html);

  commons();
  likes();
}


