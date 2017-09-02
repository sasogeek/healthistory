Template.signup.events({
    'submit .register': function(e){
        e.preventDefault();
        let name, tel, email, pass, pid;
        name = $('#name').val();
        tel = $('#tel').val();
        email = $('#email').val();
        pass = $('#pass').val();
        console.log(name, tel, email, pass);
        pid = Math.random().toString(10).substring(2, 9);
        console.log(pid);
        SDK.call('devless', 'signUp', [email, pass, pid, tel, name, '', ''],function(resp){

            setTimeout(function(){
                if (!resp.payload.result) {
                    swal({
                        title: "Registration Failed",
                        text: "Check your details again",
                        type: "error"}, function () {

                    });
                }
                SDK.setToken(
                    resp.payload.result.token
                )
            },500);
            if (resp.payload.result) {
                swal({
                    title: "Registration Successful",
                    text: "Proceed to login.",
                    type: "success"}, function () {}
                );
                $('#name').val('');
                $('#tel').val('');
                $('#email').val('');
                $('#pass').val('');
            } else {
            }
            console.log(resp.payload.result)
        });


        //
    }
});