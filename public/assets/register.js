$(document).ready(function(){

    $('#registerBtn').click(function(){
        let username = $('#username').val();
        let password = $('#password').val();
        let confPassword = $('#confPassword').val();

        if (password == confPassword){
            let info = {username: username, password: password}
    
            $.ajax({
            type: 'POST',
            url: '/register',
            data: info,
            success: function(data){
                alert("Success!")
            }
            });
        }

        else{
            alert("Passwords do not match")
        }
  
        return false;
    })
})