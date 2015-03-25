'use strict';

var scope = scope || {};

var listName = null;

function getListName() {
    listName = window.prompt("Please enter a name for your TODO List.");
}

while (listName == null || listName == "") {
    getListName();
}

scope.listName = listName;