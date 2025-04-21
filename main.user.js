// ==UserScript==
// @name         南华早报查看更多
// @namespace    https://github.com/gui-ying233/MoreFreeSCMP
// @version      1.0.0
// @description  去除南华早报的订阅提示并显示更多内容（不一定能完全显示）
// @author       鬼影233
// @license      MIT
// @match        https://www.scmp.com/*
// @icon         https://assets-v2.i-scmp.com/production/favicon.ico
// @supportURL   https://github.com/gui-ying233/MoreFreeSCMP/issues
// @run-at       document-start
// ==/UserScript==

(() => {
	"use strict";
	const originalRemoveChild = Element.prototype.removeChild;
	Element.prototype.removeChild = function (...args) {
		if (args[0].attributes.datatype?.value === "p") return args[0];
		return originalRemoveChild.apply(this, args);
	};
	document.head.appendChild(
		Object.assign(document.createElement("style"), {
			textContent:
				'div[data-qa="Component-provider-handleRenderContentBody-InlinePaywallOverlayer"],div[data-qa="GenericArticle-PaywallContainer"]{display:none!important}',
		})
	);
})();
