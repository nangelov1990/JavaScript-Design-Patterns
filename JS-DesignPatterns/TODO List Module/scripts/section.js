'use strict';

var scope = scope || {};

(function(currentScope) {
    function Section(title) {
        this._title = title;
        this._items = [];

        return this;
    }
    
    Section.prototype.addItem = function (itemName) {
        validateItem(itemName);
        this._items.push(itemName);
        
        return this;
    }
    
    Section.prototype.getItem = function (itemId) {
        var idNegative = itemId < 0,
            idBiggerThanItemCount = itemId >= this._items.length;
        
        if (idNegative || idBiggerThanItemCount) {
            throw new Error("Item Id not correct!");
        }
        
        var currentItem = this._items[itemId];
        
        return currentItem;
    }
    
    Section.prototype.addToDOM = function () {
        var titleText = document.createTextNode(this._title);
        var title = document.createElement("H3");
        title.appendChild(titleText);

        var mainDiv = document.createElement("DIV");
        mainDiv.setAttribute("id", "sectionContainer - " + this._title);
        mainDiv.appendChild(title);

        var itemList = document.createElement("FORM");
        itemList.setAttribute("class", "itemList");
        for (var i = 0; i < this._items.length; i++) {
            var item = this._items[i].addToDOM(itemList);
            itemList = item;
        }

        var itemContainer = document.createElement("DIV");
        itemContainer.setAttribute("class", "itemContainer");
        itemContainer.appendChild(itemList);
        mainDiv.appendChild(itemContainer);

        return mainDiv;
    }
    
    function validateItem(item) {
        var validItem = item === currentScope.Item;
        
        if (validItem) {
            throw new Error("Invalid item input!");
        }
    }

    currentScope.Section = Section;
}(scope));

var sectionExample = new scope.Section("Example");
sectionExample.addItem(scope.itemExample);
sectionExample.addItem(scope.itemExample2);

var sectionExample2 = new scope.Section("Example2");
sectionExample2.addItem(scope.itemExample3);

scope.sectionExample = sectionExample;
scope.sectionExample2 = sectionExample2;
