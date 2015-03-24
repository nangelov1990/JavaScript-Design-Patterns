'use strict';

var scope = scope || {};

(function(currentScope) {
    function Section(title) {
        this._title = title;
        this.addToDOM();

        return this;
    }
    
    Section.prototype.addItem = function (itemName) {
        validateItem(itemName);
        this._items += itemName;
        
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
        
        var mainDiv = document.getElementById("sectionContainer");
        mainDiv.appendChild(title);

        var itemList = document.createElement("UL").setAttribute("class", "itemList");
        for (var i = 0; i < this._items.length; i++) {
            var node = document.createElement("LI");
            //var textnode = document.createTextNode(this._items[i].getContent());

            //node.appendChild(textnode);
            itemList.appendChild(node);  
        }

        var itemContainer = document.createElement("DIV");
        itemContainer.appendChild(itemList);
    }
    
    function validateItem(item) {
        var validItem = item === currentScope.Item;
        
        if (validItem) {
            throw new Error("Invalid item input!");
        }
    }

    currentScope.Section = Section;
}(scope));

var sectionExample = scope.Section("Example");
