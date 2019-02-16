/*:
 * @plugindesc Changes Magic Reflection: Magic is always reflected onto an opponent.
 * @author LadyBaskerville
 *
 * @help
 * Version 1.0.1
 *
 * With this plugin enabled, all skill with Hit Type: Magical Attack 
 * will be reflected onto an opponent when Magic Reflection occurs.
 * If the attacker is an opponent, the magic will be reflected onto
 * the attacker (same as default reflection). If the attacker is
 * an ally, the magic will be reflected onto a random member of the
 * opponents' unit.
 *
 * You can let skills of other Hit Types use Magic Reflection
 * by placing the Notetag <EnableMRF> in the skill's notebox.
 *
 * Free for use in both non-commercial and commercial games.
 * No credit required.
 * Edits and reposts allowed.
 */

_BattleManager_invokeMagicReflection = BattleManager.invokeMagicReflection;
BattleManager.invokeMagicReflection = function(subject, target) {
	if (subject.opponentsUnit().members().contains(target)) {
		_BattleManager_invokeMagicReflection.call(this, subject, target);
	} else {
		var randOpp = subject.opponentsUnit().randomTarget();
		if (randOpp) {
			var tempSubj = this._subject;
			subject = randOpp;
			this._subject = subject;
			_BattleManager_invokeMagicReflection.call(this, subject, target);
			this._subject = tempSubj;
		}
	}
};


Game_Action.prototype.itemMrf = function(target) {
    if (this.isMagical() || $dataSkills[this._item._itemId].meta.EnableMRF) {
        return target.mrf;
    } else {
        return 0;
    }
};