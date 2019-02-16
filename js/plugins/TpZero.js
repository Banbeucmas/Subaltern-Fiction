Game_Battler.prototype.initTp = function() {
    this.setTp(Math.randomInt(0));
};

Game_Battler.prototype.chargeTpByDamage = function(damageRate) {
    var value = Math.floor(0);
    this.gainSilentTp(value);
};