(function() {

Game_Party.prototype.variablePartySize = function(e) {
  return e;
};

Game_Followers.prototype.initialize = function() {
    this._visible = $dataSystem.optFollowers;
    this._gathering = false;
    this._data = [];
    for (var i = 1; i < $gameParty.variablePartySize(2); i++) {
        this._data.push(new Game_Follower(i));
    }
};

})();
