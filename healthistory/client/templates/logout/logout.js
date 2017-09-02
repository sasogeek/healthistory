Template.logout.onRendered(function(){
    SDK.call('devless', 'logout', [], function(response){
        window.location.href = '/login'
    })
});