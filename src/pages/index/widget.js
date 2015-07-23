module.exports = require('marko-widgets').defineWidget({
    init: function() {
        addEventListener('click', function() {
            this.addText('You clicked it!');
        }.bind(this));
    },

    addText: function(text) {
        this.el.appendChild(document.createTextNode(text));
    }
});