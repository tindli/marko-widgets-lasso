


module.exports = require('marko-widgets').defineComponent({
 
    template: require('./template.marko'),

    getInitialState: function(input) {
        
        return {
            pseudo: false, // purely internally managed state
            malicious: [] // this tricks the component into re-renders!
        }
    },
    getTemplateData: function(state, input) {
        
        return {
            timestamp: Date.now(),
            pseudo: state.pseudo
        };
    },

    onRender: function() {
        console.log("on render app-rerender 2");
    },
    
    handleClick: function() {
        this.setState("pseudo", true);
    }
});