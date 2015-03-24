'use strict';

var scope = scope || {};

(function (currentScope) {
    function Item(content) {
        this._content = content;
    }
    
    currentScope.Item = Item;
}(scope))