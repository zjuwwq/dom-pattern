var util = (function(util) {
	util.addEvent = function(element, type, handler) {
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else {
			element.attachEvent('on' + type, handler);
		}
	};
	util.removeEvent = function(element, type, handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		} else {
			element.detachEvent('on' + type, handler);
		}
	};
	util.removeNode = function(node) {
		var pnode;
		if (pnode = node.parentNode) {
			pnode.removeChild(node);
		}
	};
	util.emptyNode = function(node) {
		var fnode;
		while (fnode = node.firstChild) {
			util.removeNode(fnode);
		}
	};
	util.parseNode = (function() {
		var div = document.createElement('div');
		return function(html) {
			var nodes;
			div.innerHTML = html;
			nodes = div.children || div.childNodes;
			return nodes.length === 1 ? nodes[0] : nodes;
		};
	})();
	util.event = function(event){
		return event || window.event;
	};
	util.eventTarget = function(event){
		event = util.event(event);
		return event.target || event.srcElement;
	};
	return util;
})(util || {});

if (!Date.now) {
	Date.now = function() {
		return new Date().getTime();
	};
}

if (!String.prototype.trim) {
	String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, '');
	};
}

function $(id) {
	return document.getElementById(id);
}