var template = require("../templates/example.ejs");

var SampleView = Backbone.View.extend({
    initialize: function () {
        _.bindAll(this, 'render');
    },
    render: function () {
        $(this.el).append(template({message: "hello"}));
    }
});

module.exports = SampleView;