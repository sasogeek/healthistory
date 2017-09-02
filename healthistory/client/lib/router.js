Router.route('/', {
    name: 'signup',
    template: 'signup'
});

Router.route('/login', {
    name: 'login',
    template: 'login'
});

Router.route('/dashboard/:id', {
    name: 'dashboard',
    template: 'dashboard'
});

Router.route('/logout', {
    name: 'logout',
    template: 'logout'
});