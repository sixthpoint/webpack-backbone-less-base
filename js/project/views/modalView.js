var ModalView = Backbone.View.extend({
    tagName: 'p',
    template: 'this is modal content',
    render: function () {
        this.$el.html(this.template);
        console.log('modal rendered');
        return this;
    }
});

module.exports = ModalView;