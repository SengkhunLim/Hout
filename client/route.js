FlowRouter.route('/', {
    action: function(params, queryParams) {
      BlazeLayout.render('main_layout', { hello: 'home' });
    }
});

FlowRouter.route('/contact', {
    action: function(params, queryParams) {
      BlazeLayout.render('main_layout', { hello: 'contact' });
    }
});
