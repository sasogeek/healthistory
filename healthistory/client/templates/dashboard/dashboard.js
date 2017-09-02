Template.dashboard.helpers({
    'pid': function () {
        let user;
        SDK.call('devless', 'profile', [], function(response){
            Session.set('user', response.payload.result);
        });
        user = Session.get('user');
        return user.username;
    },

    'username': function(){
        let user;
        user = Session.get('user');
        // console.log(user)
        return user.first_name
    },

    'report': function () {
        let user, reports;
        user = Session.get('user');
        params={
            orderBy:"id",
            greaterThan: ["id,0"],
            where:["for,"+user.username]
        };

        SDK.queryData("reports", "report", params, function(response){
            console.log(response.payload);
          Session.set('reports', response.payload.results.reverse())
        });

        return Session.get('reports');
    }
});