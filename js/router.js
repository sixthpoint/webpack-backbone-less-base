var SampleView = require("./project/views/sampleView.js");

var AppRouter = Backbone.Router.extend({
    routes: {
        '*actions': 'home'
    }
});

var Router = function () {
    var appRouter = new AppRouter;

    appRouter.on('route:home', function () {
        var sampleView = new SampleView({el: $("#content")});
        sampleView.render();
    });

    Backbone.history.start();
};

module.exports = Router;