


module.exports = require('marko-widgets').defineComponent({
 
    template: require('./template.marko'),

    getInitialState: function(input) {
        
        return {
            pseudo: 0
        }
    },
    getTemplateData: function(state, input) {
        
        return {
            timestamp: Date.now()
        };
    },
    
    onRender: function() {
        console.log("on render app-rerender 1");
    }
});