/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.ts");

window.addEventListener("load", async () => {
    await (0,_util__WEBPACK_IMPORTED_MODULE_0__.sleep)(1000);
    let container = document.querySelector(".html5-video-player");
    let video = container.querySelector("video");
    const ysContainer = document.createElement("div");
    ysContainer.setAttribute("class", "ys-container");
    let height = container.getBoundingClientRect().height;
    ysContainer.style.setProperty("--ys-video-scale", Math.floor(height / 100) + "px");
    container.appendChild(ysContainer);
    function setSpeed(speed) {
        video.playbackRate = speed;
        speedIndicator.textContent = parseFloat(speed.toFixed(1)) + "x";
        animation.currentTime = 0;
        animation.play();
    }
    const speedIndicator = document.createElement("div");
    speedIndicator.setAttribute("class", "ys-speed-indicator");
    ysContainer.appendChild(speedIndicator);
    const speedbar = document.createElement("div");
    speedbar.setAttribute("class", "ys-speed-bar");
    ysContainer.appendChild(speedbar);
    for (let i = 0; i < 11; i += 1) {
        const speed = 1 + i / 10;
        const speedItem = document.createElement("div");
        speedItem.setAttribute("class", "ys-speed-item");
        speedItem.setAttribute("data-speed", (1 + i / 10).toFixed(1));
        speedItem.textContent = `${speed}x`;
        speedbar.appendChild(speedItem);
        speedItem.addEventListener("click", () => {
            setSpeed(speed);
        });
    }
    const animation = new Animation(new KeyframeEffect(speedIndicator, [
        {
            opacity: 1,
            transform: "scale(1)",
        },
        {
            opacity: 1,
            transform: "scale(1)",
            offset: 0.3,
        },
        {
            opacity: 0,
            transform: "scale(1.6)",
        },
    ], {
        duration: 800,
        fill: "forwards",
        easing: "ease-in",
    }));
    const setVideoScale = (0,_util__WEBPACK_IMPORTED_MODULE_0__.debounce)((height) => {
        console.log("Setting video scale to", height);
        ysContainer.style.setProperty("--ys-video-scale", Math.floor(height / 100) + "px");
    }, 300);
    new window.ResizeObserver((entries) => {
        for (const target of entries) {
            setVideoScale(target.contentRect.height);
        }
    }).observe(container);
});


/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! namespace exports */
/*! export LOG [provided] [no usage info] [missing usage info prevents renaming] */
/*! export debounce [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sleep [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sleep": () => /* binding */ sleep,
/* harmony export */   "LOG": () => /* binding */ LOG,
/* harmony export */   "debounce": () => /* binding */ debounce
/* harmony export */ });
/**
 * Sleep for provided number of milliseconds
 */
function sleep(time) {
    return new Promise((resolve) => {
        window.setTimeout(() => {
            resolve(null);
        }, time);
    });
}
/**
 * Debug mode logs
 */
function LOG(...args) {
    console.log("NEW:", ...args);
}
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        window.clearTimeout(timeout);
        timeout = window.setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
    };
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi8uL3NyYy91dGlsLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDekM7QUFDQSxVQUFVLDRDQUFLO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxNQUFNO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCwwQkFBMEIsK0NBQVE7QUFDbEM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdERDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDaENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2xlZXAsIGRlYm91bmNlIH0gZnJvbSBcIi4vdXRpbFwiO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBzbGVlcCgxMDAwKTtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odG1sNS12aWRlby1wbGF5ZXJcIik7XG4gICAgbGV0IHZpZGVvID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJ2aWRlb1wiKTtcbiAgICBjb25zdCB5c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgeXNDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ5cy1jb250YWluZXJcIik7XG4gICAgbGV0IGhlaWdodCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgeXNDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLXlzLXZpZGVvLXNjYWxlXCIsIE1hdGguZmxvb3IoaGVpZ2h0IC8gMTAwKSArIFwicHhcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHlzQ29udGFpbmVyKTtcbiAgICBmdW5jdGlvbiBzZXRTcGVlZChzcGVlZCkge1xuICAgICAgICB2aWRlby5wbGF5YmFja1JhdGUgPSBzcGVlZDtcbiAgICAgICAgc3BlZWRJbmRpY2F0b3IudGV4dENvbnRlbnQgPSBwYXJzZUZsb2F0KHNwZWVkLnRvRml4ZWQoMSkpICsgXCJ4XCI7XG4gICAgICAgIGFuaW1hdGlvbi5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIGFuaW1hdGlvbi5wbGF5KCk7XG4gICAgfVxuICAgIGNvbnN0IHNwZWVkSW5kaWNhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzcGVlZEluZGljYXRvci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInlzLXNwZWVkLWluZGljYXRvclwiKTtcbiAgICB5c0NvbnRhaW5lci5hcHBlbmRDaGlsZChzcGVlZEluZGljYXRvcik7XG4gICAgY29uc3Qgc3BlZWRiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNwZWVkYmFyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwieXMtc3BlZWQtYmFyXCIpO1xuICAgIHlzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwZWVkYmFyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDExOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSAxICsgaSAvIDEwO1xuICAgICAgICBjb25zdCBzcGVlZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzcGVlZEl0ZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ5cy1zcGVlZC1pdGVtXCIpO1xuICAgICAgICBzcGVlZEl0ZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1zcGVlZFwiLCAoMSArIGkgLyAxMCkudG9GaXhlZCgxKSk7XG4gICAgICAgIHNwZWVkSXRlbS50ZXh0Q29udGVudCA9IGAke3NwZWVkfXhgO1xuICAgICAgICBzcGVlZGJhci5hcHBlbmRDaGlsZChzcGVlZEl0ZW0pO1xuICAgICAgICBzcGVlZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHNldFNwZWVkKHNwZWVkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IGFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb24obmV3IEtleWZyYW1lRWZmZWN0KHNwZWVkSW5kaWNhdG9yLCBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMSlcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgxKVwiLFxuICAgICAgICAgICAgb2Zmc2V0OiAwLjMsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMS42KVwiLFxuICAgICAgICB9LFxuICAgIF0sIHtcbiAgICAgICAgZHVyYXRpb246IDgwMCxcbiAgICAgICAgZmlsbDogXCJmb3J3YXJkc1wiLFxuICAgICAgICBlYXNpbmc6IFwiZWFzZS1pblwiLFxuICAgIH0pKTtcbiAgICBjb25zdCBzZXRWaWRlb1NjYWxlID0gZGVib3VuY2UoKGhlaWdodCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNldHRpbmcgdmlkZW8gc2NhbGUgdG9cIiwgaGVpZ2h0KTtcbiAgICAgICAgeXNDb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoXCItLXlzLXZpZGVvLXNjYWxlXCIsIE1hdGguZmxvb3IoaGVpZ2h0IC8gMTAwKSArIFwicHhcIik7XG4gICAgfSwgMzAwKTtcbiAgICBuZXcgd2luZG93LlJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgdGFyZ2V0IG9mIGVudHJpZXMpIHtcbiAgICAgICAgICAgIHNldFZpZGVvU2NhbGUodGFyZ2V0LmNvbnRlbnRSZWN0LmhlaWdodCk7XG4gICAgICAgIH1cbiAgICB9KS5vYnNlcnZlKGNvbnRhaW5lcik7XG59KTtcbiIsIi8qKlxuICogU2xlZXAgZm9yIHByb3ZpZGVkIG51bWJlciBvZiBtaWxsaXNlY29uZHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNsZWVwKHRpbWUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgfSwgdGltZSk7XG4gICAgfSk7XG59XG4vKipcbiAqIERlYnVnIG1vZGUgbG9nc1xuICovXG5leHBvcnQgZnVuY3Rpb24gTE9HKC4uLmFyZ3MpIHtcbiAgICBjb25zb2xlLmxvZyhcIk5FVzpcIiwgLi4uYXJncyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gICAgbGV0IHRpbWVvdXQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGV4ZWN1dGVkRnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgICAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICBjb25zdCBsYXRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKCFpbW1lZGlhdGUpXG4gICAgICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgICAgaWYgKGNhbGxOb3cpXG4gICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tYWluLnRzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==