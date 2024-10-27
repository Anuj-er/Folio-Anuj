"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/just-debounce-it";
exports.ids = ["vendor-chunks/just-debounce-it"];
exports.modules = {

/***/ "(ssr)/./node_modules/just-debounce-it/index.mjs":
/*!*************************************************!*\
  !*** ./node_modules/just-debounce-it/index.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ functionDebounce)\n/* harmony export */ });\nvar functionDebounce = debounce;\n\nfunction debounce(fn, wait, callFirst) {\n  var timeout = null;\n  var debouncedFn = null;\n\n  var clear = function() {\n    if (timeout) {\n      clearTimeout(timeout);\n\n      debouncedFn = null;\n      timeout = null;\n    }\n  };\n\n  var flush = function() {\n    var call = debouncedFn;\n    clear();\n\n    if (call) {\n      call();\n    }\n  };\n\n  var debounceWrapper = function() {\n    if (!wait) {\n      return fn.apply(this, arguments);\n    }\n\n    var context = this;\n    var args = arguments;\n    var callNow = callFirst && !timeout;\n    clear();\n\n    debouncedFn = function() {\n      fn.apply(context, args);\n    };\n\n    timeout = setTimeout(function() {\n      timeout = null;\n\n      if (!callNow) {\n        var call = debouncedFn;\n        debouncedFn = null;\n\n        return call();\n      }\n    }, wait);\n\n    if (callNow) {\n      return debouncedFn();\n    }\n  };\n\n  debounceWrapper.cancel = clear;\n  debounceWrapper.flush = flush;\n\n  return debounceWrapper;\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvanVzdC1kZWJvdW5jZS1pdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRXFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm9haC1uZXcvLi9ub2RlX21vZHVsZXMvanVzdC1kZWJvdW5jZS1pdC9pbmRleC5tanM/NmY1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZnVuY3Rpb25EZWJvdW5jZSA9IGRlYm91bmNlO1xuXG5mdW5jdGlvbiBkZWJvdW5jZShmbiwgd2FpdCwgY2FsbEZpcnN0KSB7XG4gIHZhciB0aW1lb3V0ID0gbnVsbDtcbiAgdmFyIGRlYm91bmNlZEZuID0gbnVsbDtcblxuICB2YXIgY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXG4gICAgICBkZWJvdW5jZWRGbiA9IG51bGw7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNhbGwgPSBkZWJvdW5jZWRGbjtcbiAgICBjbGVhcigpO1xuXG4gICAgaWYgKGNhbGwpIHtcbiAgICAgIGNhbGwoKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGRlYm91bmNlV3JhcHBlciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghd2FpdCkge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgIHZhciBjYWxsTm93ID0gY2FsbEZpcnN0ICYmICF0aW1lb3V0O1xuICAgIGNsZWFyKCk7XG5cbiAgICBkZWJvdW5jZWRGbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfTtcblxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgdGltZW91dCA9IG51bGw7XG5cbiAgICAgIGlmICghY2FsbE5vdykge1xuICAgICAgICB2YXIgY2FsbCA9IGRlYm91bmNlZEZuO1xuICAgICAgICBkZWJvdW5jZWRGbiA9IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIGNhbGwoKTtcbiAgICAgIH1cbiAgICB9LCB3YWl0KTtcblxuICAgIGlmIChjYWxsTm93KSB7XG4gICAgICByZXR1cm4gZGVib3VuY2VkRm4oKTtcbiAgICB9XG4gIH07XG5cbiAgZGVib3VuY2VXcmFwcGVyLmNhbmNlbCA9IGNsZWFyO1xuICBkZWJvdW5jZVdyYXBwZXIuZmx1c2ggPSBmbHVzaDtcblxuICByZXR1cm4gZGVib3VuY2VXcmFwcGVyO1xufVxuXG5leHBvcnQge2Z1bmN0aW9uRGVib3VuY2UgYXMgZGVmYXVsdH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/just-debounce-it/index.mjs\n");

/***/ })

};
;