Template.login.events({
    'submit .login': function(e){
        e.preventDefault();
        let tel, pass;
        tel = $('#tel').val();
        pass = $('#pass').val();
        SDK.call('devless', 'login', ['', '', tel, pass], function(response){
            SDK.setToken(response.payload.result.token);
            if (!response.payload.result) {
                swal({
                    title: "Login Failed",
                    text: "Check your details again",
                    type: "error"}, function () {

                });
            } else {
                console.log(response.payload.result.profile.username);
                Session.set('user', response.payload.result);
                window.location.href = '/dashboard/'+response.payload.result.profile.username.toString();
            }
        });


        //
    }
});