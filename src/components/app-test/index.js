

module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),

    getInitialState: function(input) {

        return {
            counter: input.counter,
            myProp1: input.prop1,
            myProp2: input.prop2,
            list: input.list || [
                {idxCount: 0, ts: 0}, 
                {idxCount: 1, ts: 0}, 
                {idxCount: 2, ts: 0}
            ]
        };
    },
    getTemplateData: function(state, input) {
       
        return {
            counter: state.counter,
            myProp1: state.myProp1,
            myProp2: state.myProp2,
            list: state.list
        };
    },
    
    init: function() {
        this.data = {};
        this.data.counter = 2;    
    },
    
    handleClick: function() {
        // Change the internal state (triggers a rerender)
        this.setState('counter', this.state.counter + 1);
    },
    onRender: function() {
        console.log("onRender of parent called!");
    },
    handleListUnshift: function() {
        
        var newCounter = ++this.data.counter;
        
        var elem = {
            idxCount: newCounter,
            ts: Date.now()
        }
        
        this.state.list.unshift(elem);
        this.setStateDirty("list");
    },
    
    handleListPush: function() {
        
        var newCounter = ++this.data.counter;
        
        var elem = {
            idxCount: newCounter,
            ts: Date.now()
        }
        
        this.state.list.push(elem);
        this.setStateDirty("list");
    }
});