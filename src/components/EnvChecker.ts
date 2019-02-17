declare const module: any;

function EnvChecker(global: Window|any, factory: any):void {
	if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = factory();
	} else {
		global.GhostKeyboard = factory();
	}
}

export default EnvChecker;
