/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutLoad: () => (/* binding */ aboutLoad)\n/* harmony export */ });\n/* harmony import */ var _map_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.png */ \"./src/map.png\");\n\n\nfunction aboutLoad() {\n    const content = document.getElementById(\"content\");\n    const divAbt = document.createElement(\"div\");\n    const divHours = document.createElement(\"div\");\n    const divContact = document.createElement(\"div\");\n    const image = document.createElement(\"img\");\n    const desc = document.createElement('p');\n    const hoursTitle = document.createElement('h3');\n    const contactTitle = document.createElement('h3');\n\n    const mtTimes = document.createElement('p');\n    const fsTimes = document.createElement('p');\n    const sTimes = document.createElement('p');\n\n    const address = document.createElement('p');\n    const number = document.createElement('p');\n    const email = document.createElement('p');\n\n    content.innerHTML = \"\";\n    image.src = _map_png__WEBPACK_IMPORTED_MODULE_0__;\n    image.alt = 'A map of Asia';\n    image.className = 'map';\n    desc.textContent = `At Demi's Eats, we bring you the best of Asian Fusion cuisine. Our menu features an exquisite blend of flavors from South, Southeast, and East Asia, all crafted with the freshest ingredients and traditional recipes. Come and experience the vibrant, delicious dishes that make Demi's Eats a culinary destination.`;\n    divAbt.appendChild(image);\n    divAbt.appendChild(desc);\n    divAbt.className = 'abt';\n\n    hoursTitle.textContent = 'Restaurant Hours';\n    mtTimes.textContent = 'Monday - Thursday: 11AM - 9PM';\n    fsTimes.textContent = 'Friday - Saturday: 11AM - 11PM';\n    sTimes.textContent = 'Sunday: CLOSED';\n    divHours.appendChild(hoursTitle);\n    divHours.appendChild(mtTimes);\n    divHours.appendChild(fsTimes);\n    divHours.appendChild(sTimes);\n    divHours.className = 'hours';\n\n    contactTitle.textContent = 'Contact';\n    address.textContent = '2002 Alphabet Way, Santa Clara, CA 95051';\n    number.textContent = '(408) 222 - 1293';\n    email.textContent = 'demi.eats@gmail.com';\n\n    divContact.appendChild(contactTitle);\n    divContact.appendChild(address);\n    divContact.appendChild(number);\n    divContact.appendChild(email);\n    divContact.className = 'contact';\n\n    content.appendChild(divAbt);\n    content.appendChild(divHours);\n    content.appendChild(divContact); \n}\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoad: () => (/* binding */ pageLoad)\n/* harmony export */ });\nfunction pageLoad() {\n  const content = document.querySelector('#content');\n  const heading = document.createElement('h2');\n\n  content.innerHTML = \"\";\n  heading.textContent = \"The best of Asian Fusion cuisine.\";\n  heading.className = 'heading';\n\n  content.appendChild(heading); // Append heading first\n}\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const home = document.getElementById('home');\n  const menu = document.getElementById('menu');\n  const about = document.getElementById('about');\n\n  // Initial load\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\n\n  // Attach event listeners\n  home.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_0__.pageLoad);\n  menu.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_2__.menuLoad);\n  about.addEventListener('click', _about__WEBPACK_IMPORTED_MODULE_1__.aboutLoad);\n});\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuLoad: () => (/* binding */ menuLoad)\n/* harmony export */ });\nfunction menuLoad() {\n    const content = document.querySelector('#content');\n    const appDiv = document.createElement('div');\n    const mainDiv = document.createElement('div');\n    const dessDiv = document.createElement('div');\n    \n    content.innerHTML = \"\";\n\n    const apps = document.createElement('h2');\n    const aItem1 = document.createElement('p');\n    const aDesc1 = document.createElement('p');\n    const aItem2 = document.createElement('p');\n    const aDesc2 = document.createElement('p');\n    const aItem3 = document.createElement('p');\n    const aDesc3 = document.createElement('p');\n\n    apps.textContent = 'Appetizers';\n    aItem1.textContent = 'Scallion Pancakes';\n    aDesc1.textContent = 'Unleavened flatbread folded with oil and minced scallions.';\n    aItem2.textContent = 'Spring Rolls';\n    aDesc2.textContent = 'Ricepaper rolls filled with rice noodles, crunchy vegetables, and protein.';\n    aItem3.textContent = 'Potato Samosas';\n    aDesc3.textContent = 'Fried pastry filled with savory potatos and peas.';\n\n\n    appDiv.appendChild(apps);\n    appDiv.appendChild(aItem1);\n    appDiv.appendChild(aDesc1);\n    appDiv.appendChild(aItem2);\n    appDiv.appendChild(aDesc2);\n    appDiv.appendChild(aItem3);\n    appDiv.appendChild(aDesc3);\n\n\n    const main = document.createElement('h2');\n    const mItem1 = document.createElement('p');\n    const mDesc1 = document.createElement('p');\n    const mItem2 = document.createElement('p');\n    const mDesc2 = document.createElement('p');\n    const mItem3 = document.createElement('p');\n    const mDesc3 = document.createElement('p');\n\n    main.textContent = 'Main Entrees'\n    mItem1.textContent = 'Pav Bhaji';\n    mDesc1.textContent = 'Thick spicy vegetable curry served with a soft buttered bread roll.';\n    mItem2.textContent = 'Chicken Katsu';\n    mDesc2.textContent = 'Japanese style fried chicken cutlet coated in panko and served with hot rice and tonkatsu sauce.';\n    mItem3.textContent = 'Pad Kee Mao';\n    mDesc3.textContent = 'Thai stir-fried noodles with basil, chilies, and choice of protein.';\n\n    mainDiv.appendChild(main);\n    mainDiv.appendChild(mItem1);\n    mainDiv.appendChild(mDesc1);\n    mainDiv.appendChild(mItem2);\n    mainDiv.appendChild(mDesc2);\n    mainDiv.appendChild(mItem3);\n    mainDiv.appendChild(mDesc3);\n    \n    const dessert = document.createElement('h2');\n    const dItem1 = document.createElement('p');\n    const dDesc1 = document.createElement('p');\n    const dItem2 = document.createElement('p');\n    const dDesc2 = document.createElement('p');\n    const dItem3 = document.createElement('p');\n    const dDesc3 = document.createElement('p');\n\n    dessert.textContent = \"Desserts\"\n    dItem1.textContent = 'Mango Sago';\n    dDesc1.textContent = 'Creamy, rich mango sago topped with fresh mango chunks.';\n    dItem2.textContent = 'Falooda';\n    dDesc2.textContent = 'Milky, rose flavored dessert with rose syrup, jelly, vermicellu, and chia seeds.';\n    dItem3.textContent = 'Banh Deo';\n    dDesc3.textContent = 'Vietnamese mochi mooncakes with black tahini and chocolate cream filling.';\n\n    dessDiv.appendChild(dessert);\n    dessDiv.appendChild(dItem1);\n    dessDiv.appendChild(dDesc1);\n    dessDiv.appendChild(dItem2);\n    dessDiv.appendChild(dDesc2);\n    dessDiv.appendChild(dItem3);\n    dessDiv.appendChild(dDesc3);\n  \n    aItem1.className = 'item';\n    aItem2.className = 'item';\n    aItem3.className = 'item';\n    mItem1.className = 'item';\n    mItem2.className = 'item';\n    mItem3.className = 'item';\n    dItem1.className = 'item';\n    dItem2.className = 'item';\n    dItem3.className = 'item';\n\n    aDesc1.className = 'description';\n    aDesc2.className = 'description';\n    aDesc3.className = 'description';\n    mDesc1.className = 'description';\n    mDesc2.className = 'description';\n    mDesc3.className = 'description';\n    dDesc1.className = 'description';\n    dDesc2.className = 'description';\n    dDesc3.className = 'description';\n    \n  \n    content.appendChild(appDiv);\n    content.appendChild(mainDiv);\n    content.appendChild(dessDiv);\n  }\n  \n  \n  \n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/map.png":
/*!*********************!*\
  !*** ./src/map.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d2add80ef61512a984ce.png\";\n\n//# sourceURL=webpack://restaurant/./src/map.png?");

/***/ })

/******/ 	});
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;