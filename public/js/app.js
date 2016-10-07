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

eval("/**\n * this no semrpe és el mateix depèn del context, es diferent al PHP\n *\n * this semrpe fa una referencia a un objecte\n * this\n\n class Person{\n    $this\n}\n\n ex:\n console.log(this);\n\n Apareix el objecte window que es el per defecte. this es el objecte on invoca la funcio on s'esta utilitzan.\n\n ex 2:\n\n \"use strict\";\n\n console.log(this);\n\n\n\n https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Function/bind\n\n **/\n\n// \"use strict\";\n//\n// console.log(this);\n//\n// var showFullName =  function (sn2) {\n//     console.log(this.firstName + ' ' + this.sn1 + \" \" + arguments[0])\n// }\n//\n// var name = \"oscar\";\n//\n// var person = {\n//\n//     firstName : name,\n//     sn1  : \"Tur\",\n//     fullname: showFullName\n// };\n//\n// person.fullname();\n//\n// showFullName();\n//\n// var copiaShowFullName = showFullName.bind(person);\n//\n// copiaShowFullName();\n//\n// showFullName.call(person,'Badenaass');\n// showFullName.apply(person,['Badenaass']);\n//\n//\n// var Persona = function (name) {\n//     this.name = name;\n//     console.log(\"Creant un objecte\");\n// }\n//\n// Persona.prototype.sayHello = function () {\n//     console.log('Hello ' + this.name);\n// }\n//\n// console.log(Persona);\n//\n// var personeta1 = new Persona('Oscar');\n// var personeta2 = new Persona('Loren');\n// var personeta3 = new Persona('Mipsum');\n//\n// console.log(personeta1.name);\n// console.log(personeta1.sayHello());\n// console.log(personeta2.name);\n// console.log(personeta2.sayHello());\n// console.log(personeta3.name);\n// console.log(personeta3.sayHello());\n\nvar calculateArea = new function () {\n    console.log('Aqui es calcula el area pero es top secret');\n};\n\nvar Figure = function () {\n    // this.area = calculateArea;\n};\n\nFigure.prototype.area = calculateArea;\n\nvar figura = new Figure();\n\nconsole.log(figura.area() );//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcz84YjY3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogdGhpcyBubyBzZW1ycGUgw6lzIGVsIG1hdGVpeCBkZXDDqG4gZGVsIGNvbnRleHQsIGVzIGRpZmVyZW50IGFsIFBIUFxuICpcbiAqIHRoaXMgc2VtcnBlIGZhIHVuYSByZWZlcmVuY2lhIGEgdW4gb2JqZWN0ZVxuICogdGhpc1xuXG4gY2xhc3MgUGVyc29ue1xuICAgICR0aGlzXG59XG5cbiBleDpcbiBjb25zb2xlLmxvZyh0aGlzKTtcblxuIEFwYXJlaXggZWwgb2JqZWN0ZSB3aW5kb3cgcXVlIGVzIGVsIHBlciBkZWZlY3RlLiB0aGlzIGVzIGVsIG9iamVjdGUgb24gaW52b2NhIGxhIGZ1bmNpbyBvbiBzJ2VzdGEgdXRpbGl0emFuLlxuXG4gZXggMjpcblxuIFwidXNlIHN0cmljdFwiO1xuXG4gY29uc29sZS5sb2codGhpcyk7XG5cblxuXG4gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZXMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2lhL09iamV0b3NfZ2xvYmFsZXMvRnVuY3Rpb24vYmluZFxuXG4gKiovXG5cbi8vIFwidXNlIHN0cmljdFwiO1xuLy9cbi8vIGNvbnNvbGUubG9nKHRoaXMpO1xuLy9cbi8vIHZhciBzaG93RnVsbE5hbWUgPSAgZnVuY3Rpb24gKHNuMikge1xuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuZmlyc3ROYW1lICsgJyAnICsgdGhpcy5zbjEgKyBcIiBcIiArIGFyZ3VtZW50c1swXSlcbi8vIH1cbi8vXG4vLyB2YXIgbmFtZSA9IFwib3NjYXJcIjtcbi8vXG4vLyB2YXIgcGVyc29uID0ge1xuLy9cbi8vICAgICBmaXJzdE5hbWUgOiBuYW1lLFxuLy8gICAgIHNuMSAgOiBcIlR1clwiLFxuLy8gICAgIGZ1bGxuYW1lOiBzaG93RnVsbE5hbWVcbi8vIH07XG4vL1xuLy8gcGVyc29uLmZ1bGxuYW1lKCk7XG4vL1xuLy8gc2hvd0Z1bGxOYW1lKCk7XG4vL1xuLy8gdmFyIGNvcGlhU2hvd0Z1bGxOYW1lID0gc2hvd0Z1bGxOYW1lLmJpbmQocGVyc29uKTtcbi8vXG4vLyBjb3BpYVNob3dGdWxsTmFtZSgpO1xuLy9cbi8vIHNob3dGdWxsTmFtZS5jYWxsKHBlcnNvbiwnQmFkZW5hYXNzJyk7XG4vLyBzaG93RnVsbE5hbWUuYXBwbHkocGVyc29uLFsnQmFkZW5hYXNzJ10pO1xuLy9cbi8vXG4vLyB2YXIgUGVyc29uYSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4vLyAgICAgdGhpcy5uYW1lID0gbmFtZTtcbi8vICAgICBjb25zb2xlLmxvZyhcIkNyZWFudCB1biBvYmplY3RlXCIpO1xuLy8gfVxuLy9cbi8vIFBlcnNvbmEucHJvdG90eXBlLnNheUhlbGxvID0gZnVuY3Rpb24gKCkge1xuLy8gICAgIGNvbnNvbGUubG9nKCdIZWxsbyAnICsgdGhpcy5uYW1lKTtcbi8vIH1cbi8vXG4vLyBjb25zb2xlLmxvZyhQZXJzb25hKTtcbi8vXG4vLyB2YXIgcGVyc29uZXRhMSA9IG5ldyBQZXJzb25hKCdPc2NhcicpO1xuLy8gdmFyIHBlcnNvbmV0YTIgPSBuZXcgUGVyc29uYSgnTG9yZW4nKTtcbi8vIHZhciBwZXJzb25ldGEzID0gbmV3IFBlcnNvbmEoJ01pcHN1bScpO1xuLy9cbi8vIGNvbnNvbGUubG9nKHBlcnNvbmV0YTEubmFtZSk7XG4vLyBjb25zb2xlLmxvZyhwZXJzb25ldGExLnNheUhlbGxvKCkpO1xuLy8gY29uc29sZS5sb2cocGVyc29uZXRhMi5uYW1lKTtcbi8vIGNvbnNvbGUubG9nKHBlcnNvbmV0YTIuc2F5SGVsbG8oKSk7XG4vLyBjb25zb2xlLmxvZyhwZXJzb25ldGEzLm5hbWUpO1xuLy8gY29uc29sZS5sb2cocGVyc29uZXRhMy5zYXlIZWxsbygpKTtcblxudmFyIGNhbGN1bGF0ZUFyZWEgPSBuZXcgZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCdBcXVpIGVzIGNhbGN1bGEgZWwgYXJlYSBwZXJvIGVzIHRvcCBzZWNyZXQnKTtcbn07XG5cbnZhciBGaWd1cmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gdGhpcy5hcmVhID0gY2FsY3VsYXRlQXJlYTtcbn07XG5cbkZpZ3VyZS5wcm90b3R5cGUuYXJlYSA9IGNhbGN1bGF0ZUFyZWE7XG5cbnZhciBmaWd1cmEgPSBuZXcgRmlndXJlKCk7XG5cbmNvbnNvbGUubG9nKGZpZ3VyYS5hcmVhKCkgKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);