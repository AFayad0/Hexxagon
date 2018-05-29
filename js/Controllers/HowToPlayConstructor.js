'use strict';


var HowToPlayConstructor = function(view, model, pageConstructor) {
    GameController.call(this, view, model, pageConstructor);
};

HowToPlayConstructor.prototype = new GameController();
HowToPlayConstructor.prototype.constructor = HowToPlayConstructor;

HowToPlayConstructor.prototype.process = function() {
    var page = this.pageConstructor.createHowToPlay();
    this.insertPage(page);
    
        
    Object.getPrototypeOf(HowToPlayConstructor.prototype).process.call(this);
};