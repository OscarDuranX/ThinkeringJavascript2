/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

eval("/**\n * this no semrpe és el mateix depèn del context, es diferent al PHP\n *\n * this semrpe fa una referencia a un objecte\n * this\n\n class Person{\n    $this\n}\n\n ex:\n console.log(this);\n\n Apareix el objecte window que es el per defecte. this es el objecte on invoca la funcio on s'esta utilitzan.\n\n ex 2:\n\n \"use strict\";\n\n console.log(this);\n\n\n\n **/\n\n// \"use strict\";\n//\n// console.log(this);\n\n    var showFullName =  function () {\n    console.log(this.firstName + ' ' + this.sn1)\n}\n\nvar person = {\n\n    firstName : \"Penelope\",\n    sn1  : \"Tur\",\n    fullname: showFullName\n};\n\nperson.fullname();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcz84YjY3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogdGhpcyBubyBzZW1ycGUgw6lzIGVsIG1hdGVpeCBkZXDDqG4gZGVsIGNvbnRleHQsIGVzIGRpZmVyZW50IGFsIFBIUFxuICpcbiAqIHRoaXMgc2VtcnBlIGZhIHVuYSByZWZlcmVuY2lhIGEgdW4gb2JqZWN0ZVxuICogdGhpc1xuXG4gY2xhc3MgUGVyc29ue1xuICAgICR0aGlzXG59XG5cbiBleDpcbiBjb25zb2xlLmxvZyh0aGlzKTtcblxuIEFwYXJlaXggZWwgb2JqZWN0ZSB3aW5kb3cgcXVlIGVzIGVsIHBlciBkZWZlY3RlLiB0aGlzIGVzIGVsIG9iamVjdGUgb24gaW52b2NhIGxhIGZ1bmNpbyBvbiBzJ2VzdGEgdXRpbGl0emFuLlxuXG4gZXggMjpcblxuIFwidXNlIHN0cmljdFwiO1xuXG4gY29uc29sZS5sb2codGhpcyk7XG5cblxuXG4gKiovXG5cbi8vIFwidXNlIHN0cmljdFwiO1xuLy9cbi8vIGNvbnNvbGUubG9nKHRoaXMpO1xuXG4gICAgdmFyIHNob3dGdWxsTmFtZSA9ICBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5maXJzdE5hbWUgKyAnICcgKyB0aGlzLnNuMSlcbn1cblxudmFyIHBlcnNvbiA9IHtcblxuICAgIGZpcnN0TmFtZSA6IFwiUGVuZWxvcGVcIixcbiAgICBzbjEgIDogXCJUdXJcIixcbiAgICBmdWxsbmFtZTogc2hvd0Z1bGxOYW1lXG59O1xuXG5wZXJzb24uZnVsbG5hbWUoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);