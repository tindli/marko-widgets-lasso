
module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),

    getInitialState: function(input) {

        return {
            counter: 0
        };
    },
    getTemplateData: function(state, input) {
       
        return {
            counter: state.counter
        };
    },
    handleClick: function() {
        // Change the internal state (triggers a rerender)
        this.setState('counter', this.state.counter + 1);
    },
    onRender: function() {
        console.log("onRender of parent called!");
    }
});