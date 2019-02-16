//========================================================
// PacheSkillTerminator.js
//========================================================

/*:
 * @plugindesc Terminates skill enhance on Patchouli.
 * @author Flame-kun
 * 
 * @help this plugin does not provide plugin commands.
 * 
 * Hi. Flame-kun here.
 * Ahaa, sampai ngintip-ngintip kesini, berarti waktu luangmu banyak ya?
 * Main GBF juga tidak?
 * Gw numpang naro lagunya disini
 * https://www.youtube.com/watch?v=TpVxreT7NPU
 * 
 * Lagu lawan Sandalphon versi HD kapan rilis, ya.
 * Waktu gw nulis ini masih belum ada lho.
 */
 
(function(){

//Sudahkah kalian menonton Youjo Senki?
//Kalau belum, tontonlah~

var _SceneBattle_Terminate = Scene_Battle.prototype.terminate;

Scene_Battle.prototype.terminate = function() {
    Scene_Base.prototype.terminate.call(this);
    $gameParty.onBattleEnd();
    $gameTroop.onBattleEnd();
    AudioManager.stopMe();
	$gameTemp.reserveCommonEvent(3);
};


})();