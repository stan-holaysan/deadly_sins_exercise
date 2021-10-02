$(document).ready(function(){

    $('form').on('submit', function(){
        let username = $('#username');
        let password = $('#password');

        let info = {username: username.val(), password: password.val()}
  
        $.ajax({
          type: 'POST',
          url: '/register',
          data: info,
          success: function(data){
            //do something with the data via front-end framework
            if (data==true){
              window.location.href = "/dashboard";
            }
            else{
              // location.reload();
              window.location.href = "/dashboard";
            }
          }
        });
  
        return false;
    })
})