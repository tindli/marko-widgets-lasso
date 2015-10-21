


module.exports = require('marko-widgets').defineComponent({
 
    template: require('./template.marko'),

    getInitialState: function(input) {
        
        return {
            pseudo: 0,
            malicious: [] // this tricks the component into re-renders!
        }
    },
    getTemplateData: function(state, input) {
        
        return {
            timestamp: Date.now()
        };
    },

    onRender: function() {
        console.log("on render app-rerender 2");
    }
});