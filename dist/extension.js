/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deactivate = exports.activate = void 0;
const vscode = __webpack_require__(1);
function activate(context) {
    let provider1 = vscode.languages.registerCompletionItemProvider("oberon", {
        provideCompletionItems(document, position) {
            const lineText = document.lineAt(position.line).text;
            const prefix = lineText.slice(0, position.character);
            const suggestions = [
                "BEGIN",
                "END",
                "IF",
                "FOR",
                "REPEAT",
                "ELSIF",
                "UNTIL",
                "WHILE",
                "DO",
                "ELSE",
                "THEN",
                "CASE",
                "BY",
                "RETURN",
                "TO",
            ];
            const filteredSuggestions = suggestions.filter((suggestion) => suggestion.toLowerCase().startsWith(prefix));
            const completionItems = filteredSuggestions.map((suggestion) => {
                const completionItem = new vscode.CompletionItem(suggestion);
                return completionItem;
            });
            return completionItems;
        },
    });
    context.subscriptions.push(provider1);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map