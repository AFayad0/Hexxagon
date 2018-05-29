'use strict';
/*
    IndexConstructor - controller, parent - GameController
    This controller manages game index construction
 */

var IndexConstructor = function(view, model, pageConstructor) {
    GameController.call(this, view, model, pageConstructor);
};

IndexConstructor.prototype = new GameController();
IndexConstructor.prototype.constructor = IndexConstructor;

IndexConstructor.prototype.process = function() {
    var page = this.pageConstructor.createPageIndexConstructor();
    this.insertPage(page);


    this.model.initHexagons();
    this.view.showHexagons(this.model.hexagons);
    
    this.model.initPearls()
    this.view.showPearls(this.model.pearls);
    

    Object.getPrototypeOf(IndexConstructor.prototype).process.call(this);
};

/*
IndexConstructor.prototype.handlerHexagonClicked = function(hexagon) {
    hexagon.active = !hexagon.active;
    this.view.showHexagons(this.model.hexagons);
};

*/


