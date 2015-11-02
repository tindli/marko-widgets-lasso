


module.exports = require('marko-widgets').defineComponent({
 
    template: require('./template.marko'),

    getInitialState: function(input) {
        
        return {
            myProp: input.myProp
        }
    },
    getTemplateData: function(state, input) {
        
        return {
            myProp: state.myProp
        };
    },
    
    onRender: function() {
        console.log("on render app-rerender 3");
    }
});