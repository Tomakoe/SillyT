var __webpack_modules__ = {
  "./src/103sys/脚本/立即事件/index.ts"(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    eval("{__webpack_require__.r(__webpack_exports__);\n$(async () => {\n    injectPrompts([\n        {\n            id: '冲动啊，请平息吧',\n            position: 'none',\n            depth: 0,\n            role: 'system',\n            content: '【【冲动啊，请平息吧】】',\n            filter: () => _.get(getAllVariables(), 'stat_data.白娅.依存度') === 0,\n            should_scan: true,\n        },\n        {\n            id: '理智啊，请不要冻结',\n            position: 'none',\n            depth: 0,\n            role: 'system',\n            content: '【【理智啊，请不要冻结】】',\n            filter: () => _.get(getAllVariables(), 'stat_data.白娅.依存度') === 100,\n            should_scan: true,\n        },\n    ]);\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvMTAzc3lzL+iEmuacrC/nq4vljbPkuovku7YvaW5kZXgudHMiLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQ1MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXZlcm5faGVscGVyX3RlbXBsYXRlL3NyYy8xMDNzeXMv6ISa5pysL+eri+WNs+S6i+S7ti9pbmRleC50cz8xNWE4Il0sInNvdXJjZXNDb250ZW50IjpbIiQoYXN5bmMgKCkgPT4ge1xuICAgIGluamVjdFByb21wdHMoW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ+WGsuWKqOWViu+8jOivt+W5s+aBr+WQpycsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ25vbmUnLFxuICAgICAgICAgICAgZGVwdGg6IDAsXG4gICAgICAgICAgICByb2xlOiAnc3lzdGVtJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfjgJDjgJDlhrLliqjllYrvvIzor7flubPmga/lkKfjgJHjgJEnLFxuICAgICAgICAgICAgZmlsdGVyOiAoKSA9PiBfLmdldChnZXRBbGxWYXJpYWJsZXMoKSwgJ3N0YXRfZGF0YS7nmb3lqIUu5L6d5a2Y5bqmJykgPT09IDAsXG4gICAgICAgICAgICBzaG91bGRfc2NhbjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICfnkIbmmbrllYrvvIzor7fkuI3opoHlhrvnu5MnLFxuICAgICAgICAgICAgcG9zaXRpb246ICdub25lJyxcbiAgICAgICAgICAgIGRlcHRoOiAwLFxuICAgICAgICAgICAgcm9sZTogJ3N5c3RlbScsXG4gICAgICAgICAgICBjb250ZW50OiAn44CQ44CQ55CG5pm65ZWK77yM6K+35LiN6KaB5Ya757uT44CR44CRJyxcbiAgICAgICAgICAgIGZpbHRlcjogKCkgPT4gXy5nZXQoZ2V0QWxsVmFyaWFibGVzKCksICdzdGF0X2RhdGEu55m95aiFLuS+neWtmOW6picpID09PSAxMDAsXG4gICAgICAgICAgICBzaG91bGRfc2NhbjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICBdKTtcbn0pO1xuZXhwb3J0IHt9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/103sys/脚本/立即事件/index.ts\n\n}");
  }
};

var __webpack_require__ = {};

(() => {
  __webpack_require__.r = exports => {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  };
})();

var __webpack_exports__ = {};

__webpack_modules__["./src/103sys/脚本/立即事件/index.ts"](0, __webpack_exports__, __webpack_require__);