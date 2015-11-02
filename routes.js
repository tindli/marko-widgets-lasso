
var data = {
    counter: 0,
    prop1: "parent",
    prop2: "child"
}

module.exports = [
    {
        path: '/',
        handler: require('./src/pages/index'),
        templateData: data
    }
];