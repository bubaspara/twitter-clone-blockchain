"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ri */ \"./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/cg */ \"./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/vsc */ \"./node_modules/react-icons/vsc/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SidebarOption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidebarOption */ \"./components/SidebarOption.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar style = {\n    wrapper: \"flex-[0.7] px-8 flex flex-col\",\n    twitterIconContainer: \"text-3xl m-4\",\n    tweetButton: \"bg-[#1d9bf0] hover:bg-[#1b8cd8] flex items-center justify-center font-bold rounded-3xl h-[50px] mt-[20px] cursor-pointer\",\n    navContainer: \"flex-1\",\n    profileButton: \"flex items-center mb-6 cursor-pointer hover:bg-[#333c45] rounded-[100px] p-2\",\n    profileLeft: \"flex item-center justify-center mr-4\",\n    profileImage: \"height-12 w-12 rounded-full\",\n    profileRight: \"flex-1 flex\",\n    details: \"flex-1\",\n    name: \"text-lg\",\n    handle: \"text-[#8899a6]\",\n    moreContainer: \"flex items-center mr-2\"\n};\nvar Sidebar = function(param) {\n    var _initialSelectedIcon = param.initialSelectedIcon, initialSelectedIcon = _initialSelectedIcon === void 0 ? \"Home\" : _initialSelectedIcon;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialSelectedIcon), selected = ref[0], setSelected = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: style.wrapper,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.twitterIconContainer,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_vsc__WEBPACK_IMPORTED_MODULE_3__.VscTwitter, {}, void 0, false, {\n                    fileName: \"/Users/mirko/Documents/Tutorials/twitter-clone-blockchain/client/components/Sidebar.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/mirko/Documents/Tutorials/twitter-clone-blockchain/client/components/Sidebar.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.navContainer,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarOption__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        Icon: selected === \"Home\" ? react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiHome7Fill : react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiHome7Line,\n                        text: \"Home\",\n                        isActive: Boolean(selected === \"Home\"),\n                        setSelected: setSelected,\n                        redirect: \"/\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mirko/Documents/Tutorials/twitter-clone-blockchain/client/components/Sidebar.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarOption__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        Icon: selected === \"Explore\" ? react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaHashtag : react_icons_bi__WEBPACK_IMPORTED_MODULE_6__.BiHash,\n                        text: \"Explore\",\n                        isActive: Boolean(selected === \"Explore\"),\n                        setSelected: setSelected\n                    }, void 0, false, {\n                        fileName: \"/Users/mirko/Documents/Tutorials/twitter-clone-blockchain/client/components/Sidebar.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarOption__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        Icon: selected === \"Notifications\" ? react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaBell : react_icons_fi__WEBPACK_IMPORTED_MODULE_7__.FiBell,\n                        text: \"Notifications\",\n                        isActive: Boolean(selected === \"Notifications\"),\n                        setSelected: setSelected\n                    }, void 0, false, {\n                        fileName: \"/Users/mirko/Documents/Tutorials/twitter-clone-blockchain/client/components/Sidebar.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarOption__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        Icon: selected === \"Messages\" ? react_icons_hi__WEBPACK_IMPORTED_MODULE_8__.HiMail : react_icons_hi__WEBPACK_IMPORTED_MODULE_8__.HiOutlineMail,\n                        text: \"Messages\",\n                        isActive: Boolean(selected === \"Messages\"),\n                        setSelected: setSelected\n                    }, void 0, false, {\n                        fileName: \"/Users/mirko/Documents/Tutorials/twitter-clone-blockchain/client/components/Sidebar.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarOption__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        Icon: selected === \"Bookmarks\" ? react_icons_bs__WEBPACK_IMPORTED_MODULE_9__.BsBookmarkFill : react_icons_bs__WEBPACK_IMPORTED_MODULE_9__.BsBookmark,\n                        text: \"Bookmarks\",\n                        isActive: Boolean(selected === \"Bookmarks\"),\n                        setSelected: setSelected\n                    }, void 0, false, {\n                        fileName: \"/Users/mirko/Documents/Tutorials/twitter-clone-blockchain/client/components/Sidebar.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarOption__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        Icon: selected === \"Lists\" ? react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiFileList2Fill : react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaRegListAlt,\n                        text: \"Lists\",\n                        isActive: Boolean(selected === \"Lists\"),\n                        setSelected: setSelected\n                    }, void 0, false, {\n                        fileName: \"/Users/mirko/Documents/Tutorials/twitter-clone-blockchain/client/components/Sidebar.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarOption__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        Icon: selected === \"Profile\" ? react_icons_bs__WEBPACK_IMPORTED_MODULE_9__.BsPersonFill : react_icons_bs__WEBPACK_IMPORTED_MODULE_9__.BsPerson,\n                        text: \"Profile\",\n                        isActive: Boolean(selected === \"Profile\"),\n                        setSelected: setSelected,\n                        redirect: \"/profile\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mirko/Documents/Tutorials/twitter-clone-blockchain/client/components/Sidebar.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SidebarOption__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        Icon: react_icons_cg__WEBPACK_IMPORTED_MODULE_10__.CgMoreO,\n                        text: \"More\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mirko/Documents/Tutorials/twitter-clone-blockchain/client/components/Sidebar.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.tweetButton,\n                        children: \"Mint\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mirko/Documents/Tutorials/twitter-clone-blockchain/client/components/Sidebar.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mirko/Documents/Tutorials/twitter-clone-blockchain/client/components/Sidebar.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.profileButton,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.profileLeft\n                    }, void 0, false, {\n                        fileName: \"/Users/mirko/Documents/Tutorials/twitter-clone-blockchain/client/components/Sidebar.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.profileRight,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.details,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: style.name,\n                                        children: \"Name\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mirko/Documents/Tutorials/twitter-clone-blockchain/client/components/Sidebar.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: style.handle,\n                                        children: \"Handle\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mirko/Documents/Tutorials/twitter-clone-blockchain/client/components/Sidebar.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mirko/Documents/Tutorials/twitter-clone-blockchain/client/components/Sidebar.js\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: style.moreContainer,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__.FiMoreHorizontal, {}, void 0, false, {\n                                    fileName: \"/Users/mirko/Documents/Tutorials/twitter-clone-blockchain/client/components/Sidebar.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mirko/Documents/Tutorials/twitter-clone-blockchain/client/components/Sidebar.js\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mirko/Documents/Tutorials/twitter-clone-blockchain/client/components/Sidebar.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mirko/Documents/Tutorials/twitter-clone-blockchain/client/components/Sidebar.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mirko/Documents/Tutorials/twitter-clone-blockchain/client/components/Sidebar.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_s(Sidebar, \"ic9hPIGawFwZffAgX4EiLgU+HAY=\");\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RWxCLEtBQUssQ0FBQ1csTUFBTTtrREFBRSxRQUFNOzs7Ozs2Q0FBTTs7Ozs7O3FDQUN0QzswQ0FDTiw4REFBQ00sS0FBRztnQ0FBQ0MsU0FBUyxFQUFFbEIsS0FBSyxDQUFDWSxhQUFhOzBDQUNqQyw0RUFBQzFCLDREQUFnQjs7Ozt5Q0FBRzs7Ozs7cUNBQ2hCOzs7Ozs7NkJBQ0Y7Ozs7OztxQkFDRjs7Ozs7O2FBQ0YsQ0FDUDtDQUNGO0dBckVLMkIsT0FBTztBQUFQQSxLQUFBQSxPQUFPO0FBdUViLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lkZWJhci5qcz8zZGFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJpSG9tZTdMaW5lLCBSaUhvbWU3RmlsbCwgUmlGaWxlTGlzdDJGaWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvcmknXG5pbXBvcnQgeyBCaUhhc2ggfSBmcm9tICdyZWFjdC1pY29ucy9iaSdcbmltcG9ydCB7IEZpQmVsbCwgRmlNb3JlSG9yaXpvbnRhbCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJ1xuaW1wb3J0IHsgSGlPdXRsaW5lTWFpbCwgSGlNYWlsIH0gZnJvbSAncmVhY3QtaWNvbnMvaGknXG5pbXBvcnQgeyBGYVJlZ0xpc3RBbHQsIEZhSGFzaHRhZywgRmFCZWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXG5pbXBvcnQgeyBDZ01vcmVPIH0gZnJvbSAncmVhY3QtaWNvbnMvY2cnXG5pbXBvcnQgeyBWc2NUd2l0dGVyIH0gZnJvbSAncmVhY3QtaWNvbnMvdnNjJ1xuaW1wb3J0IHtcbiAgQnNCb29rbWFya0ZpbGwsXG4gIEJzQm9va21hcmssXG4gIEJzUGVyc29uLFxuICBCc1BlcnNvbkZpbGwsXG59IGZyb20gJ3JlYWN0LWljb25zL2JzJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTaWRlYmFyT3B0aW9uIGZyb20gJy4vU2lkZWJhck9wdGlvbidcblxuY29uc3Qgc3R5bGUgPSB7XG4gIHdyYXBwZXI6IGBmbGV4LVswLjddIHB4LTggZmxleCBmbGV4LWNvbGAsXG4gIHR3aXR0ZXJJY29uQ29udGFpbmVyOiBgdGV4dC0zeGwgbS00YCxcbiAgdHdlZXRCdXR0b246IGBiZy1bIzFkOWJmMF0gaG92ZXI6YmctWyMxYjhjZDhdIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvbnQtYm9sZCByb3VuZGVkLTN4bCBoLVs1MHB4XSBtdC1bMjBweF0gY3Vyc29yLXBvaW50ZXJgLFxuICBuYXZDb250YWluZXI6IGBmbGV4LTFgLFxuICBwcm9maWxlQnV0dG9uOiBgZmxleCBpdGVtcy1jZW50ZXIgbWItNiBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1bIzMzM2M0NV0gcm91bmRlZC1bMTAwcHhdIHAtMmAsXG4gIHByb2ZpbGVMZWZ0OiBgZmxleCBpdGVtLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtci00YCxcbiAgcHJvZmlsZUltYWdlOiBgaGVpZ2h0LTEyIHctMTIgcm91bmRlZC1mdWxsYCxcbiAgcHJvZmlsZVJpZ2h0OiBgZmxleC0xIGZsZXhgLFxuICBkZXRhaWxzOiBgZmxleC0xYCxcbiAgbmFtZTogYHRleHQtbGdgLFxuICBoYW5kbGU6IGB0ZXh0LVsjODg5OWE2XWAsXG4gIG1vcmVDb250YWluZXI6IGBmbGV4IGl0ZW1zLWNlbnRlciBtci0yYCxcbn1cblxuY29uc3QgU2lkZWJhciA9ICh7IGluaXRpYWxTZWxlY3RlZEljb24gPSAnSG9tZScgfSkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKGluaXRpYWxTZWxlY3RlZEljb24pXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLndyYXBwZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnR3aXR0ZXJJY29uQ29udGFpbmVyfT5cbiAgICAgICAgPFZzY1R3aXR0ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm5hdkNvbnRhaW5lcn0+XG4gICAgICAgIDxTaWRlYmFyT3B0aW9uXG4gICAgICAgICAgSWNvbj17c2VsZWN0ZWQgPT09ICdIb21lJyA/IFJpSG9tZTdGaWxsIDogUmlIb21lN0xpbmV9XG4gICAgICAgICAgdGV4dD1cIkhvbWVcIlxuICAgICAgICAgIGlzQWN0aXZlPXtCb29sZWFuKHNlbGVjdGVkID09PSAnSG9tZScpfVxuICAgICAgICAgIHNldFNlbGVjdGVkPXtzZXRTZWxlY3RlZH1cbiAgICAgICAgICByZWRpcmVjdD17Jy8nfVxuICAgICAgICAvPlxuICAgICAgICA8U2lkZWJhck9wdGlvblxuICAgICAgICAgIEljb249e3NlbGVjdGVkID09PSAnRXhwbG9yZScgPyBGYUhhc2h0YWcgOiBCaUhhc2h9XG4gICAgICAgICAgdGV4dD1cIkV4cGxvcmVcIlxuICAgICAgICAgIGlzQWN0aXZlPXtCb29sZWFuKHNlbGVjdGVkID09PSAnRXhwbG9yZScpfVxuICAgICAgICAgIHNldFNlbGVjdGVkPXtzZXRTZWxlY3RlZH1cbiAgICAgICAgLz5cbiAgICAgICAgPFNpZGViYXJPcHRpb25cbiAgICAgICAgICBJY29uPXtzZWxlY3RlZCA9PT0gJ05vdGlmaWNhdGlvbnMnID8gRmFCZWxsIDogRmlCZWxsfVxuICAgICAgICAgIHRleHQ9XCJOb3RpZmljYXRpb25zXCJcbiAgICAgICAgICBpc0FjdGl2ZT17Qm9vbGVhbihzZWxlY3RlZCA9PT0gJ05vdGlmaWNhdGlvbnMnKX1cbiAgICAgICAgICBzZXRTZWxlY3RlZD17c2V0U2VsZWN0ZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxTaWRlYmFyT3B0aW9uXG4gICAgICAgICAgSWNvbj17c2VsZWN0ZWQgPT09ICdNZXNzYWdlcycgPyBIaU1haWwgOiBIaU91dGxpbmVNYWlsfVxuICAgICAgICAgIHRleHQ9XCJNZXNzYWdlc1wiXG4gICAgICAgICAgaXNBY3RpdmU9e0Jvb2xlYW4oc2VsZWN0ZWQgPT09ICdNZXNzYWdlcycpfVxuICAgICAgICAgIHNldFNlbGVjdGVkPXtzZXRTZWxlY3RlZH1cbiAgICAgICAgLz5cbiAgICAgICAgPFNpZGViYXJPcHRpb25cbiAgICAgICAgICBJY29uPXtzZWxlY3RlZCA9PT0gJ0Jvb2ttYXJrcycgPyBCc0Jvb2ttYXJrRmlsbCA6IEJzQm9va21hcmt9XG4gICAgICAgICAgdGV4dD1cIkJvb2ttYXJrc1wiXG4gICAgICAgICAgaXNBY3RpdmU9e0Jvb2xlYW4oc2VsZWN0ZWQgPT09ICdCb29rbWFya3MnKX1cbiAgICAgICAgICBzZXRTZWxlY3RlZD17c2V0U2VsZWN0ZWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxTaWRlYmFyT3B0aW9uXG4gICAgICAgICAgSWNvbj17c2VsZWN0ZWQgPT09ICdMaXN0cycgPyBSaUZpbGVMaXN0MkZpbGwgOiBGYVJlZ0xpc3RBbHR9XG4gICAgICAgICAgdGV4dD1cIkxpc3RzXCJcbiAgICAgICAgICBpc0FjdGl2ZT17Qm9vbGVhbihzZWxlY3RlZCA9PT0gJ0xpc3RzJyl9XG4gICAgICAgICAgc2V0U2VsZWN0ZWQ9e3NldFNlbGVjdGVkfVxuICAgICAgICAvPlxuICAgICAgICA8U2lkZWJhck9wdGlvblxuICAgICAgICAgIEljb249e3NlbGVjdGVkID09PSAnUHJvZmlsZScgPyBCc1BlcnNvbkZpbGwgOiBCc1BlcnNvbn1cbiAgICAgICAgICB0ZXh0PVwiUHJvZmlsZVwiXG4gICAgICAgICAgaXNBY3RpdmU9e0Jvb2xlYW4oc2VsZWN0ZWQgPT09ICdQcm9maWxlJyl9XG4gICAgICAgICAgc2V0U2VsZWN0ZWQ9e3NldFNlbGVjdGVkfVxuICAgICAgICAgIHJlZGlyZWN0PXsnL3Byb2ZpbGUnfVxuICAgICAgICAvPlxuICAgICAgICA8U2lkZWJhck9wdGlvbiBJY29uPXtDZ01vcmVPfSB0ZXh0PVwiTW9yZVwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS50d2VldEJ1dHRvbn0+TWludDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucHJvZmlsZUJ1dHRvbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9maWxlTGVmdH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5wcm9maWxlUmlnaHR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5kZXRhaWxzfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5uYW1lfT5OYW1lPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaGFuZGxlfT5IYW5kbGU8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubW9yZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8RmlNb3JlSG9yaXpvbnRhbCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJcbiJdLCJuYW1lcyI6WyJSaUhvbWU3TGluZSIsIlJpSG9tZTdGaWxsIiwiUmlGaWxlTGlzdDJGaWxsIiwiQmlIYXNoIiwiRmlCZWxsIiwiRmlNb3JlSG9yaXpvbnRhbCIsIkhpT3V0bGluZU1haWwiLCJIaU1haWwiLCJGYVJlZ0xpc3RBbHQiLCJGYUhhc2h0YWciLCJGYUJlbGwiLCJDZ01vcmVPIiwiVnNjVHdpdHRlciIsIkJzQm9va21hcmtGaWxsIiwiQnNCb29rbWFyayIsIkJzUGVyc29uIiwiQnNQZXJzb25GaWxsIiwidXNlU3RhdGUiLCJTaWRlYmFyT3B0aW9uIiwic3R5bGUiLCJ3cmFwcGVyIiwidHdpdHRlckljb25Db250YWluZXIiLCJ0d2VldEJ1dHRvbiIsIm5hdkNvbnRhaW5lciIsInByb2ZpbGVCdXR0b24iLCJwcm9maWxlTGVmdCIsInByb2ZpbGVJbWFnZSIsInByb2ZpbGVSaWdodCIsImRldGFpbHMiLCJuYW1lIiwiaGFuZGxlIiwibW9yZUNvbnRhaW5lciIsIlNpZGViYXIiLCJpbml0aWFsU2VsZWN0ZWRJY29uIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImRpdiIsImNsYXNzTmFtZSIsIkljb24iLCJ0ZXh0IiwiaXNBY3RpdmUiLCJCb29sZWFuIiwicmVkaXJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sidebar.js\n");

/***/ })

});