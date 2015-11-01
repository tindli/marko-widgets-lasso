


module.exports = require('marko-widgets').defineComponent({
 
    template: require('./template.marko'),

    getInitialState: function(input) {
        
        return {
            aProp: input.aProp
        }
    },
    getTemplateData: function(state, input) {
        
        return {
            aProp: state.aProp
        };
    },
    
    onRender: function() {
        console.log("on render app-rerender 3");
    }
});