var prop1 = "parent";
var prop2 = "child";


module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),

    getInitialState: function(input) {

        return {
            counter: 0,
            myProp1: prop1,
            myProp2: prop2
        };
    },
    getTemplateData: function(state, input) {
       
        return {
            counter: state.counter,
            myProp1: state.myProp1,
            myProp2: state.myProp2
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