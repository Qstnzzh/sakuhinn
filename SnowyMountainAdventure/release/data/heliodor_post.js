window.Module.canvas = (function() {
		return window.g_MainCanvas;
	})();

window.Module.addlog = function(text) {
		var log = document.getElementById('log');
		if (!log) return;

		log.innerHTML += text;
	};

window.Module.showGUIdebugTab = function(text) {
	var GUIdebugTab = document.getElementById('GUIdebugTab');
	if (!GUIdebugTab) return;

	GUIdebugTab.innerHTML = text;
};

var GUIdebugText = '';

window.Module.startGUIdebug = function(text) {
	var GUIdebug = document.getElementById('GUIdebug');
	if (!GUIdebug) return;

	GUIdebugText = text;
};

window.Module.addGUIdebug = function(text) {
	var GUIdebug = document.getElementById('GUIdebug');
	if (!GUIdebug) return;

	GUIdebugText += text;
};

window.Module.endGUIdebug = function() {
	var GUIdebug = document.getElementById('GUIdebug');
	if (!GUIdebug) return;

	GUIdebug.innerHTML = GUIdebugText;
	GUIdebugText = '';
};

if (window.XRButtonCheck !== undefined && window.XRButtonCheck !== null) {
	window.XRButtonCheck();
}
