'use strict';

var scope = scope || {};

(function(currentScope) {
    function Item(content) {
        this._content = content;
        this._status = false;

        return this;
    }

    Item.prototype.addToDOM = function(container) {
        var node = document.createElement("INPUT");
        node.setAttribute("type", "checkbox");
        node.setAttribute("id", this._content);
        container.appendChild(node);

        var textnode = document.createTextNode(this._content);
        var labelContainer = document.createElement("P");
        labelContainer.setAttribute("class", "inline");
        labelContainer.appendChild(textnode);

        var label = document.createElement("LABEL");
        label.setAttribute("for", this._content);
        label.appendChild(labelContainer);
        container.appendChild(label);
        
        var newLine = document.createElement("BR");
        container.appendChild(newLine);

        return container;
    }
    
    Item.prototype.Checked = function() {
        this._status = true;
    }
    
    currentScope.Item = Item;
}(scope));

var itemExample = new scope.Item("Item 1");
var itemExample2 = new scope.Item("Item 2");
var itemExample3 = new scope.Item("Item 3");

scope.itemExample = itemExample;
scope.itemExample2 = itemExample2;
scope.itemExample3 = itemExample3;
