


module.exports = require('marko-widgets').defineComponent({
 
    template: require('./template.marko'),

    getInitialState: function(input) {
        
        return {
            idxCount: input.idxCount,
            ts: input.ts
        }
    },
    getTemplateData: function(state, input) {
        
        return {
            idxCount: state.idxCount,
            ts: state.ts
        };
    }
});