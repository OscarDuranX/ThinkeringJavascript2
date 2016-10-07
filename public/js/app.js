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

eval("/**\n * this no semrpe és el mateix depèn del context, es diferent al PHP\n *\n * this semrpe fa una referencia a un objecte\n * this\n\n class Person{\n    $this\n}\n\n ex:\n console.log(this);\n\n Apareix el objecte window que es el per defecte. this es el objecte on invoca la funcio on s'esta utilitzan.\n\n ex 2:\n\n \"use strict\";\n\n console.log(this);\n\n\n\n https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Function/bind\n\n **/\n\n// \"use strict\";\n//\n// console.log(this);\n//\n// var showFullName =  function (sn2) {\n//     console.log(this.firstName + ' ' + this.sn1 + \" \" + arguments[0])\n// }\n//\n// var name = \"oscar\";\n//\n// var person = {\n//\n//     firstName : name,\n//     sn1  : \"Tur\",\n//     fullname: showFullName\n// };\n//\n// person.fullname();\n//\n// showFullName();\n//\n// var copiaShowFullName = showFullName.bind(person);\n//\n// copiaShowFullName();\n//\n// showFullName.call(person,'Badenaass');\n// showFullName.apply(person,['Badenaass']);\n\n\nvar Persona = function (name) {\n    this.name = name;\n    console.log(\"Creant un objecte\");\n}\n\nvar personeta = new Persona();\n\nconsole.log(personeta.name);\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcz84YjY3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogdGhpcyBubyBzZW1ycGUgw6lzIGVsIG1hdGVpeCBkZXDDqG4gZGVsIGNvbnRleHQsIGVzIGRpZmVyZW50IGFsIFBIUFxuICpcbiAqIHRoaXMgc2VtcnBlIGZhIHVuYSByZWZlcmVuY2lhIGEgdW4gb2JqZWN0ZVxuICogdGhpc1xuXG4gY2xhc3MgUGVyc29ue1xuICAgICR0aGlzXG59XG5cbiBleDpcbiBjb25zb2xlLmxvZyh0aGlzKTtcblxuIEFwYXJlaXggZWwgb2JqZWN0ZSB3aW5kb3cgcXVlIGVzIGVsIHBlciBkZWZlY3RlLiB0aGlzIGVzIGVsIG9iamVjdGUgb24gaW52b2NhIGxhIGZ1bmNpbyBvbiBzJ2VzdGEgdXRpbGl0emFuLlxuXG4gZXggMjpcblxuIFwidXNlIHN0cmljdFwiO1xuXG4gY29uc29sZS5sb2codGhpcyk7XG5cblxuXG4gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZXMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2lhL09iamV0b3NfZ2xvYmFsZXMvRnVuY3Rpb24vYmluZFxuXG4gKiovXG5cbi8vIFwidXNlIHN0cmljdFwiO1xuLy9cbi8vIGNvbnNvbGUubG9nKHRoaXMpO1xuLy9cbi8vIHZhciBzaG93RnVsbE5hbWUgPSAgZnVuY3Rpb24gKHNuMikge1xuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuZmlyc3ROYW1lICsgJyAnICsgdGhpcy5zbjEgKyBcIiBcIiArIGFyZ3VtZW50c1swXSlcbi8vIH1cbi8vXG4vLyB2YXIgbmFtZSA9IFwib3NjYXJcIjtcbi8vXG4vLyB2YXIgcGVyc29uID0ge1xuLy9cbi8vICAgICBmaXJzdE5hbWUgOiBuYW1lLFxuLy8gICAgIHNuMSAgOiBcIlR1clwiLFxuLy8gICAgIGZ1bGxuYW1lOiBzaG93RnVsbE5hbWVcbi8vIH07XG4vL1xuLy8gcGVyc29uLmZ1bGxuYW1lKCk7XG4vL1xuLy8gc2hvd0Z1bGxOYW1lKCk7XG4vL1xuLy8gdmFyIGNvcGlhU2hvd0Z1bGxOYW1lID0gc2hvd0Z1bGxOYW1lLmJpbmQocGVyc29uKTtcbi8vXG4vLyBjb3BpYVNob3dGdWxsTmFtZSgpO1xuLy9cbi8vIHNob3dGdWxsTmFtZS5jYWxsKHBlcnNvbiwnQmFkZW5hYXNzJyk7XG4vLyBzaG93RnVsbE5hbWUuYXBwbHkocGVyc29uLFsnQmFkZW5hYXNzJ10pO1xuXG5cbnZhciBQZXJzb25hID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIGNvbnNvbGUubG9nKFwiQ3JlYW50IHVuIG9iamVjdGVcIik7XG59XG5cbnZhciBwZXJzb25ldGEgPSBuZXcgUGVyc29uYSgpO1xuXG5jb25zb2xlLmxvZyhwZXJzb25ldGEubmFtZSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);