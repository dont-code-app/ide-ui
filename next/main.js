(self["webpackChunkide_ui"] = self["webpackChunkide_ui"] || []).push([["main"],{

/***/ 9520:
/*!**********************************************!*\
  !*** ./apps/ide-ui/src/app/app.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @dontcode/plugin-common */ 213);
/* harmony import */ var _dontcode_sandbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @dontcode/sandbox */ 5282);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ 7581);
/* harmony import */ var _shared_change_services_change_update_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/change/services/change-update.service */ 8722);
/* harmony import */ var _shared_project_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/project/services/project.service */ 4232);
/* harmony import */ var _shared_text_services_text_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/text/services/text.service */ 786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @dontcode/plugin-common */ 3760);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8451);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var _routes_editor_main_editor_main_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/editor/main-editor/main-editor.component */ 5252);
/* harmony import */ var _layout_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/main/main.component */ 8392);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 5592);



















function AppComponent_ide_ui_main_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ide-ui-main");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ide-ui-main-editor");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function AppComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
class AppComponent extends _dontcode_sandbox__WEBPACK_IMPORTED_MODULE_8__.LightAppComponent {
  constructor(configService, service, updateService, projectService, httpClient, injector, ref, dontCodeCore) {
    super(configService, httpClient, injector, ref, dontCodeCore);
    this.service = service;
    this.updateService = updateService;
    this.projectService = projectService;
    this.title = 'ide-ui';
    this.defaultRepositoryUrl = 'assets/repositories/stable.json';
    // Manages the different cases of loading the repository of plugins
    this.runtimeConfig = window.dontCodeConfig;
    if (this.runtimeConfig != null && this.runtimeConfig?.repositoryUrl == null) {
      this.runtimeConfig.repositoryUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.repositoryUrl;
    }
  }
  mainTab() {
    return window.location.hash.indexOf('/newTabDev') == -1;
  }
  /**
   * Initializa all services after all plugins and config are being loaded.
   * @param config
   * @param repoUrl
   */
  afterInitialization(config, repoUrl) {
    this.service.resetSchema();
    this.service.readSchema(_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.dtcde.getSchemaManager().getSchema());
    //    this.service.readSchemaFormUrl('assets/core/'+DontCode.dtcde.getSchemaUri());
    return this.updateService.pushChange(new _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.Change(_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.ChangeType.RESET, _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.ROOT, null)).then(() => {
      this.projectService.newCurrentProject();
    }, reason => {
      console.error('Error while resetting model after a loadSchema', reason);
      this.projectService.newCurrentProject();
    });
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_9__.CommonConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_text_services_text_service__WEBPACK_IMPORTED_MODULE_4__.TextService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_change_services_change_update_service__WEBPACK_IMPORTED_MODULE_2__.ChangeUpdateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_project_services_project_service__WEBPACK_IMPORTED_MODULE_3__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_11__.DONT_CODE_CORE));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["ide-ui-root"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
    decls: 2,
    vars: 2,
    consts: [[4, "ngIf"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, AppComponent_ide_ui_main_0_Template, 2, 0, "ide-ui-main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.mainTab());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.mainTab());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _routes_editor_main_editor_main_editor_component__WEBPACK_IMPORTED_MODULE_5__.MainEditorComponent, _layout_main_main_component__WEBPACK_IMPORTED_MODULE_6__.MainComponent, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterOutlet],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaWRlLXVpL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4288:
/*!*******************************************!*\
  !*** ./apps/ide-ui/src/app/app.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 6776);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 9520);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5571);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/layout.module */ 1209);
/* harmony import */ var _routes_editor_editor_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/editor/editor.module */ 7772);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 5592);
/* harmony import */ var _routes_editor_main_editor_main_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/editor/main-editor/main-editor.component */ 5252);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8451);
/* harmony import */ var _routes_dev_list_changes_list_changes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/dev/list-changes/list-changes.component */ 1387);
/* harmony import */ var _routes_dev_dev_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes/dev/dev.module */ 9920);
/* harmony import */ var _routes_welcome_welcome_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/welcome/welcome.module */ 6541);
/* harmony import */ var _routes_welcome_main_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/welcome/main/welcome.component */ 4763);
/* harmony import */ var _dontcode_plugin_std__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @dontcode/plugin-std */ 6852);
/* harmony import */ var _dontcode_plugin_std__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @dontcode/plugin-std */ 7126);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 9305);
/* harmony import */ var _dontcode_plugin_rest__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @dontcode/plugin-rest */ 6060);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @dontcode/plugin-common */ 4264);
/* harmony import */ var _dontcode_plugin_report__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @dontcode/plugin-report */ 6936);
/* harmony import */ var _dontcode_plugin_commerce__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @dontcode/plugin-commerce */ 5741);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 8988);





















const appRoutes = [{
  path: '',
  component: _routes_welcome_main_welcome_component__WEBPACK_IMPORTED_MODULE_7__.WelcomeComponent
}, {
  path: 'editor',
  component: _routes_editor_main_editor_main_editor_component__WEBPACK_IMPORTED_MODULE_3__.MainEditorComponent
}, {
  path: 'welcome',
  component: _routes_welcome_main_welcome_component__WEBPACK_IMPORTED_MODULE_7__.WelcomeComponent
}, {
  path: 'dev',
  component: _routes_dev_list_changes_list_changes_component__WEBPACK_IMPORTED_MODULE_4__.ListChangesComponent
}, {
  path: 'newTabDev',
  component: _routes_dev_list_changes_list_changes_component__WEBPACK_IMPORTED_MODULE_4__.ListChangesComponent
}, {
  path: 'project',
  loadChildren: () => __webpack_require__.e(/*! import() */ "apps_ide-ui_src_app_routes_project_project_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./routes/project/project.module */ 2717)).then(m => m.ProjectModule)
}];
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    providers: [primeng_api__WEBPACK_IMPORTED_MODULE_9__.ConfirmationService],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _routes_editor_editor_module__WEBPACK_IMPORTED_MODULE_2__.EditorModule, _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__.LayoutModule, _routes_dev_dev_module__WEBPACK_IMPORTED_MODULE_5__.DevModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forRoot(appRoutes, {
      enableTracing: false,
      useHash: true
    } // <-- debugging purposes only
    ), _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _routes_welcome_welcome_module__WEBPACK_IMPORTED_MODULE_6__.WelcomeModule, _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_14__.PluginCommonModule.forRoot(), _dontcode_plugin_std__WEBPACK_IMPORTED_MODULE_15__.BasicModule, _dontcode_plugin_std__WEBPACK_IMPORTED_MODULE_16__.FieldsModule, _dontcode_plugin_rest__WEBPACK_IMPORTED_MODULE_17__.RestModule, _dontcode_plugin_report__WEBPACK_IMPORTED_MODULE_18__.ReportModule, _dontcode_plugin_commerce__WEBPACK_IMPORTED_MODULE_19__.CommerceModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _routes_editor_editor_module__WEBPACK_IMPORTED_MODULE_2__.EditorModule, _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__.LayoutModule, _routes_dev_dev_module__WEBPACK_IMPORTED_MODULE_5__.DevModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _routes_welcome_welcome_module__WEBPACK_IMPORTED_MODULE_6__.WelcomeModule, _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_14__.PluginCommonModule, _dontcode_plugin_std__WEBPACK_IMPORTED_MODULE_15__.BasicModule, _dontcode_plugin_std__WEBPACK_IMPORTED_MODULE_16__.FieldsModule, _dontcode_plugin_rest__WEBPACK_IMPORTED_MODULE_17__.RestModule, _dontcode_plugin_report__WEBPACK_IMPORTED_MODULE_18__.ReportModule, _dontcode_plugin_commerce__WEBPACK_IMPORTED_MODULE_19__.CommerceModule]
  });
})();

/***/ }),

/***/ 1209:
/*!*****************************************************!*\
  !*** ./apps/ide-ui/src/app/layout/layout.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/main.component */ 8392);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5592);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/menu */ 4539);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 4001);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/toolbar */ 2945);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/sidebar */ 7178);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.component */ 9699);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tooltip */ 3797);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/overlaypanel */ 4441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8988);











class LayoutModule {
  static #_ = this.ɵfac = function LayoutModule_Factory(t) {
    return new (t || LayoutModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: LayoutModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_5__.SidebarModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__.ToolbarModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_menu__WEBPACK_IMPORTED_MODULE_8__.MenuModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_10__.OverlayPanelModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LayoutModule, {
    declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent, _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, primeng_sidebar__WEBPACK_IMPORTED_MODULE_5__.SidebarModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_6__.ToolbarModule, primeng_button__WEBPACK_IMPORTED_MODULE_7__.ButtonModule, primeng_menu__WEBPACK_IMPORTED_MODULE_8__.MenuModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.TooltipModule, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_10__.OverlayPanelModule],
    exports: [_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent]
  });
})();

/***/ }),

/***/ 8392:
/*!***********************************************************!*\
  !*** ./apps/ide-ui/src/app/layout/main/main.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2320);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 4233);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 224);
/* harmony import */ var _shared_text_services_text_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/text/services/text.service */ 786);
/* harmony import */ var _shared_change_services_change_update_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/change/services/change-update.service */ 8722);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ 7581);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _shared_project_services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/project/services/project.service */ 4232);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @dontcode/plugin-common */ 3760);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 5592);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/sidebar */ 7178);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/api */ 9305);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toolbar */ 2945);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ 4001);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/tooltip */ 3797);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/overlaypanel */ 4441);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu/menu.component */ 9699);























function MainComponent_div_0_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Server:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Session:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.serverUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.sessionId);
  }
}
const _c0 = function () {
  return {
    width: "500px"
  };
};
const _c1 = function () {
  return {
    width: "15em"
  };
};
function MainComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "p-toolbar", 1)(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MainComponent_div_0_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.sidePanelVisible = !ctx_r5.sidePanelVisible);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Dont-code Builder");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MainComponent_div_0_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.loadSchema());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MainComponent_div_0_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.openDevUrl());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MainComponent_div_0_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.openPreview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseenter", function MainComponent_div_0_Template_button_mouseenter_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](13);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r2.show($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p-overlayPanel", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, MainComponent_div_0_ng_template_14_Template, 9, 2, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 13)(16, "p-sidebar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("visibleChange", function MainComponent_div_0_Template_p_sidebar_visibleChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.sidePanelVisible = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "img", 3)(18, "ide-ui-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 15)(20, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "ide-ui-menu", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r0.connectedClass(ctx_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r0.connectedClass(ctx_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showCloseIcon", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](12, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("visible", ctx_r0.sidePanelVisible)("modal", false)("closeOnEscape", true)("showCloseIcon", true);
  }
}
class MainComponent {
  constructor(service, updateService, projectService, configService, ref) {
    this.service = service;
    this.updateService = updateService;
    this.projectService = projectService;
    this.configService = configService;
    this.ref = ref;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
    this.context$ = null;
    this.sidePanelVisible = true;
    this.serverUrl = '';
    this.subscriptions.add(configService.getUpdates().subscribe({
      next: newConfig => {
        const changed = newConfig.ideWebSocketUrl != this.serverUrl;
        if (changed) {
          this.serverUrl = newConfig.ideWebSocketUrl ?? '';
          this.ref.markForCheck();
          this.ref.detectChanges();
        }
      }
    }));
  }
  ngOnInit() {
    this.sidePanelVisible = true;
    this.context$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.updateService.getConnectionStatus(), this.updateService.getSessionId()]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(status => {
      this.sessionId = status[1];
      return {
        status: status[0],
        sessionId: status[1]
      };
    }));
    //    this.loadSchema();
  }
  logoClicked() {
    this.sidePanelVisible = true;
  }
  sidePanelVisibleChanged($event) {
    //console.log($event);
    this.sidePanelVisible = $event.target.visible;
  }
  /**
   * User wants to re-start from scratch
   */
  loadSchema() {
    this.service.resetSchema();
    this.service.readSchema(_dontcode_core__WEBPACK_IMPORTED_MODULE_3__.dtcde.getSchemaManager().getSchema());
    this.updateService.pushChange(new _dontcode_core__WEBPACK_IMPORTED_MODULE_3__.Change(_dontcode_core__WEBPACK_IMPORTED_MODULE_3__.ChangeType.RESET, _dontcode_core__WEBPACK_IMPORTED_MODULE_3__.DontCodeModel.ROOT, null)).then(() => {
      this.projectService.newCurrentProject();
      this.ref.detectChanges();
    }, reason => {
      console.error('Error while resetting model after a loadSchema', reason);
      this.projectService.newCurrentProject();
      this.ref.detectChanges();
    });
  }
  openDevUrl() {
    window.open('#/newTabDev', '_blank');
  }
  openPreview() {
    if (this.sessionId == null) {
      window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.previewUrl, '_blank');
    } else {
      window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.previewUrl + '?sessionId=' + this.sessionId, '_blank');
    }
  }
  connectedClass(ctx) {
    if (ctx.status !== "connected") {
      return "p-button-danger";
    }
    return '';
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static #_ = this.ɵfac = function MainComponent_Factory(t) {
    return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_text_services_text_service__WEBPACK_IMPORTED_MODULE_0__.TextService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_change_services_change_update_service__WEBPACK_IMPORTED_MODULE_1__.ChangeUpdateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_project_services_project_service__WEBPACK_IMPORTED_MODULE_4__.ProjectService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_10__.CommonConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: MainComponent,
    selectors: [["ide-ui-main"]],
    decls: 2,
    vars: 3,
    consts: [[4, "ngIf"], ["id", "mainToolbar"], [1, "p-toolbar-group-left"], ["src", "./assets/images/logo.png", "width", "119", "height", "66"], ["pButton", "", "type", "button", "icon", "pi pi-bars", 1, "md:hidden", "p-button-rounded", "p-button-outlined", 3, "click"], [1, "p-toolbar-group-right"], ["pButton", "", "type", "button", "icon", "pi pi-cloud-download", "pTooltip", "New Application", 1, "p-button-rounded", "p-button-outlined", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-book", "pTooltip", "Open Debugging Window", 1, "p-button-rounded", "p-button-outlined", 3, "click"], ["pButton", "", "type", "button", "icon", "pi pi-external-link", "pTooltip", "Open Previewer", 1, "p-button-rounded", "p-button-outlined", 3, "ngClass", "click"], ["pButton", "", "type", "button", "icon", "pi pi-sort", 1, "p-button-rounded", "p-button-outlined", 3, "ngClass", "mouseenter"], [3, "showCloseIcon"], ["op", ""], ["pTemplate", ""], [1, "md:hidden"], ["id", "mainSidePanel", 3, "visible", "modal", "closeOnEscape", "showCloseIcon", "visibleChange"], [1, "grid"], [1, "col", "hidden", "md:block", "md:col-2"], ["id", "mainMenu"], [1, "col", "md:col-10"], [1, "col-2"], [1, "col-10"]],
    template: function MainComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, MainComponent_div_0_Template, 24, 13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, ctx.context$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet, primeng_sidebar__WEBPACK_IMPORTED_MODULE_13__.Sidebar, primeng_api__WEBPACK_IMPORTED_MODULE_14__.PrimeTemplate, primeng_toolbar__WEBPACK_IMPORTED_MODULE_15__.Toolbar, primeng_button__WEBPACK_IMPORTED_MODULE_16__.ButtonDirective, primeng_tooltip__WEBPACK_IMPORTED_MODULE_17__.Tooltip, primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_18__.OverlayPanel, _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__.MenuComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
    styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtBQUNaIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNpZGVuYXYge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5zaWRlbmF2IC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG59XG5cbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaWRlLXVpL3NyYy9hcHAvbGF5b3V0L21haW4vbWFpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVO0FBQ1o7O0FBRUEsZ29CQUFnb0IiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9699:
/*!***********************************************************!*\
  !*** ./apps/ide-ui/src/app/layout/menu/menu.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/menu */ 4539);


class MenuComponent {
  constructor() {
    this.menuItems = new Array({
      label: 'Main Menu',
      items: [{
        label: 'Welcome',
        icon: 'pi pi-home',
        routerLink: ['/welcome']
      }, {
        label: 'Projects',
        icon: 'pi pi-home',
        routerLink: ['/project']
      }, {
        label: 'Editor',
        icon: 'pi pi-pencil',
        routerLink: ['/editor']
      }]
    }, {
      label: 'Debug Menu',
      items: [{
        label: 'Dev',
        icon: 'pi pi-book',
        routerLink: ['/dev']
      }]
    });
  }
  static #_ = this.ɵfac = function MenuComponent_Factory(t) {
    return new (t || MenuComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MenuComponent,
    selectors: [["ide-ui-menu"]],
    decls: 1,
    vars: 1,
    consts: [[3, "model"]],
    template: function MenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-menu", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx.menuItems);
      }
    },
    dependencies: [primeng_menu__WEBPACK_IMPORTED_MODULE_1__.Menu],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaWRlLXVpL3NyYy9hcHAvbGF5b3V0L21lbnUvbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 9920:
/*!******************************************************!*\
  !*** ./apps/ide-ui/src/app/routes/dev/dev.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevModule": () => (/* binding */ DevModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var _list_changes_list_changes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-changes/list-changes.component */ 1387);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/table */ 5980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8988);




class DevModule {
  static #_ = this.ɵfac = function DevModule_Factory(t) {
    return new (t || DevModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: DevModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_table__WEBPACK_IMPORTED_MODULE_3__.TableModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DevModule, {
    declarations: [_list_changes_list_changes_component__WEBPACK_IMPORTED_MODULE_0__.ListChangesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_table__WEBPACK_IMPORTED_MODULE_3__.TableModule]
  });
})();

/***/ }),

/***/ 1387:
/*!*******************************************************************************!*\
  !*** ./apps/ide-ui/src/app/routes/dev/list-changes/list-changes.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListChangesComponent": () => (/* binding */ ListChangesComponent)
/* harmony export */ });
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _shared_change_services_change_listen_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/change/services/change-listen.service */ 3040);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/table */ 5980);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 9305);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 7651);








function ListChangesComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ListChangesComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const change_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](change_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](change_r2.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 3, change_r2.value));
  }
}
class ListChangesComponent {
  constructor(changeService, ref) {
    this.changeService = changeService;
    this.ref = ref;
    // context$: Observable<any>;
    this.title = 'List of Changes';
    this.listOfChanges = new Array();
  }
  ngOnInit() {
    this.listOfChanges = this.changeService.getListOfChanges();
    this.changeService.getChangeEvents().subscribe(value => {
      //      console.log("newVal", value);
      if (value.type === _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.ChangeType.RESET) {
        this.listOfChanges = this.changeService.getListOfChanges();
      }
      //We have to force refresh when displayed in another tab
      this.ref.detectChanges();
    });
  }
  static #_ = this.ɵfac = function ListChangesComponent_Factory(t) {
    return new (t || ListChangesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_change_services_change_listen_service__WEBPACK_IMPORTED_MODULE_1__.ChangeListenService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ListChangesComponent,
    selectors: [["ide-ui-list-changes"]],
    inputs: {
      title: "title"
    },
    decls: 5,
    vars: 3,
    consts: [["styleClass", "p-datatable-gridlines", 3, "value", "resizableColumns"], ["pTemplate", "header"], ["pTemplate", "body"], ["pResizableColumn", ""]],
    template: function ListChangesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ListChangesComponent_ng_template_3_Template, 7, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ListChangesComponent_ng_template_4_Template, 8, 5, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.listOfChanges)("resizableColumns", true);
      }
    },
    dependencies: [primeng_table__WEBPACK_IMPORTED_MODULE_3__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_3__.ResizableColumn, _angular_common__WEBPACK_IMPORTED_MODULE_5__.JsonPipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWNoYW5nZXMuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaWRlLXVpL3NyYy9hcHAvcm91dGVzL2Rldi9saXN0LWNoYW5nZXMvbGlzdC1jaGFuZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 9241:
/*!*************************************************************!*\
  !*** ./apps/ide-ui/src/app/routes/editor/editor-element.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorElement": () => (/* binding */ EditorElement),
/* harmony export */   "EditorElementType": () => (/* binding */ EditorElementType)
/* harmony export */ });
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);

class EditorElement {
  constructor(id, schemaItem, position, schemaPosition, type) {
    /**
     * The list of possible values (for a select box)
     */
    this.values = null;
    this.childrenToDisplay = new Array();
    this.allChildren = new Map();
    this.forceRead = true;
    this.parent = null;
    /** An array of item carry the same schemamodel than the item itself, we use this to distinguish between the 2 modes
     *
     * @protected
     */
    this.asArray = false;
    this.id = id;
    this.schemaModel = schemaItem;
    this.position = position;
    this.schemaPosition = schemaPosition;
    /**
     * The id may not contains / as it is forbidden by html
     */
    if (this.id) this.id = this.id.split('/').join('-');
    this.type = type;
  }
  static createNew(position, schemaPosition, type, schemaItem, listValues, initialValue, asArray) {
    const ret = new EditorElement(position, schemaItem, position, schemaPosition, type);
    if (listValues) {
      ret.values = listValues;
    }
    if (initialValue) {
      // Dont call setEditedValue as it would try to recalculate children
      ret.editedValue = initialValue;
    }
    if (asArray) ret.asArray = asArray;
    return ret;
  }
  getParent() {
    return this.parent;
  }
  setParent(newParent) {
    this.parent = newParent;
  }
  isAsArray() {
    return this.asArray;
  }
  isHidden() {
    return _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModelManager.isHidden(this.editedValue);
  }
  isReadonly() {
    return _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModelManager.isReadonly(this.editedValue);
  }
  /**
   * Returns the item id of the DontCodeSchemaItem managed by this editor element if it's part of an array
   */
  getItemIdIfExists() {
    if (this.parent && this.parent.type === EditorElementType.array) {
      return this.position.substring(this.position.lastIndexOf('/') + 1);
    }
    return null;
  }
  getChildrenToDisplay() {
    if (this.forceRead) {
      this.childrenToDisplay.length = 0;
      /*      let added=false;
            if (this.type===EditorElementType.array) {
              if (this.editedValue) {
                for (const item in this.editedValue) {
                  if (this.editedValue.hasOwnProperty(item)) {
                    this.readSubSchema(this.position, this.schemaPosition, this.schemaModel, item, this.editedValue[item]);
                    added=true;
                  }
                }
              }
            }
            if(!added) {*/
      this.readSubSchema(this.position, this.schemaPosition, this.schemaModel, undefined, this.editedValue);
      if (this.schemaModel.isObject() || this.schemaModel.isArray())
        // Object's value are stored in the children hierarchy, so we remove it from parent
        this.editedValue = undefined;
      //      }
      this.forceRead = false;
    }
    return this.childrenToDisplay;
  }
  /**
   * Reads a DontCodeSchemaItem schema. Either is merges with current EditorElement
   * @param position
   * @param schemaPosition
   * @param model
   */
  readSubSchema(position, schemaPosition, model, mergeStartPosition, values) {
    const ret = this.childrenToDisplay;
    let mergePosition = mergeStartPosition ? mergeStartPosition : 0;
    const cache = this.allChildren;
    const parent = model;
    const children = new Array();
    let initialValue = values;
    if (this.asArray) {
      // Makes sure subItems are created from the initialValues sent, if any
      for (const itemKey in initialValue) {
        if (initialValue.hasOwnProperty(itemKey)) {
          children.push([itemKey, parent]);
        }
      }
      if (children.length === 0) {
        // No initial items, so create a new empty one
        children.push([this.getNextId(), parent]);
      }
    } else {
      // Make sure all subproperties are considered
      for (const childModel of parent.getChildren()) {
        const propKey = childModel[0];
        children.push([propKey, childModel[1]]);
      }
    }
    // resolve schemareference of all children
    children.forEach(value => {
      if (value[1] instanceof _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeSchemaRef) {
        if (!value[1].isArray() || parent === value[1])
          // Only resolve ref if we are not creating the array element
          value[1] = this.resolveRefs(value[1]);
      }
    });
    for (const [propName, child] of children) {
      let childPosition = position;
      let schemaChildPosition = schemaPosition;
      initialValue = values;
      // Are we reading a subProperty ?
      if (propName && propName.length > 0) {
        childPosition = childPosition + '/' + propName;
        if (!this.asArray) schemaChildPosition = schemaChildPosition + '/' + propName;
        if (initialValue) initialValue = initialValue[propName];
      }
      let newElement = cache.get(propName);
      if (!newElement) {
        if (child.isArray() && child !== parent) {
          // A model can be an array and an object or value at the same time.
          newElement = EditorElement.createNew(childPosition, schemaChildPosition, EditorElementType.array, child, undefined, initialValue, true);
        } else if (child.isValue()) {
          newElement = EditorElement.createNew(childPosition, schemaChildPosition, EditorElementType.input, child, undefined, initialValue);
        } else if (child.isEnum()) {
          const asEnum = child;
          newElement = EditorElement.createNew(childPosition, schemaChildPosition, EditorElementType.list, child, asEnum.getValues(), initialValue);
        } else if (child.isObject()) {
          newElement = EditorElement.createNew(childPosition, schemaChildPosition, EditorElementType.object, child, undefined, initialValue, false);
        } /*else if (child.isReference()) {
          this.readSubSchema(childPosition, schemaChildPosition, child, true, mergePosition, initialValue);
          }*/else {
          console.error('Unknown item read from schema at position ' + position + ':', child);
        }
      } else if (initialValue !== undefined) {
        newElement.setEditedValue(initialValue);
      }
      if (newElement) {
        newElement.parent = this;
        mergePosition = this.mergeElement(newElement, child, propName, mergePosition);
        if (newElement.hasActiveProperties()) {
          const toAddProps = newElement.getActiveProperties();
          if (toAddProps) {
            // We have to add a dynamic property, so let's create it with a possible value
            let propValue = toAddProps.getRelativeId();
            if (values != null && propValue != null) {
              propValue = values[propValue];
            } else propValue = undefined;
            this.readSubSchema(position, schemaPosition, toAddProps, mergePosition, values);
            // if the active properties are replacing the remaining elements, then remove the remaining elements and  just stop the loop here
            if (newElement.isReplacementActive()) {
              break;
            }
          }
        }
      }
    }
    return ret;
  }
  resolveRefs(entity) {
    let ret = entity;
    if (entity.isReference()) {
      const toFind = entity.getReference();
      const found = _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.AbstractSchemaItem.goto(this.calculateRootSchema(), toFind);
      if (found) ret = found;
    }
    return ret;
  }
  calculateRootSchema() {
    let ret = this.schemaModel;
    while (ret.getParent()) {
      const parent = ret.getParent();
      if (parent) ret = parent;
    }
    return ret;
  }
  getNextId() {
    const childrenKeys = new Set(this.allChildren.keys());
    return _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModelManager.generateNextKey(childrenKeys);
  }
  /**
   * Creates a new sub element of an array. Usually called when the user clicks Add
   * @param element
   */
  addSubElement() {
    /**
     * Creates the new element and adds it to the list
     */
    this.readSubSchema(this.position, this.schemaPosition, this.schemaModel);
  }
  removeElement(item, index) {
    const parentList = this.getChildrenToDisplay();
    if (!index) {
      index = parentList.indexOf(item);
    }
    const ret = parentList.splice(index, 1)[0];
    return ret;
  }
  /**
   * Moves the item up one place and returns the immediate following item.
   * or returns null if nothing have been moved
   * @param item
   * @param index
   */
  upElement(item, index) {
    const parentList = this.getChildrenToDisplay();
    if (!index) {
      index = parentList.indexOf(item);
    }
    if (index > 0) {
      parentList.splice(index, 1);
      parentList.splice(index - 1, 0, item);
    } else {
      return null;
    }
    return parentList[index];
  }
  /**
   * Moves the item down and returns the next item if possible.
   * Returns null if the item was already the last element (no move possible)
   * or undefined if the moved item becomes the last element
   * @param item
   * @param index
   */
  downElement(item, index) {
    const parentList = this.getChildrenToDisplay();
    if (!index) {
      index = parentList.indexOf(item);
    }
    if (index < parentList.length - 1) {
      parentList.splice(index, 1);
      parentList.splice(index + 1, 0, item);
    } else {
      return null;
    }
    if (index + 1 === parentList.length - 1) {
      // Item becomes the last element, so no-one is after him
      return undefined;
    } else return parentList[index + 2];
  }
  getEditedValue() {
    return this.editedValue;
  }
  setEditedValue(newVal) {
    const oldValue = this.editedValue;
    this.editedValue = newVal;
    const props = this.schemaModel.getProperties(this.editedValue);
    if (props || oldValue && this.schemaModel.getProperties(oldValue)) {
      // The children properties have changed
      //this.parent.mergeDisplayChildren(this, props);
      if (this.parent) this.parent.forceRead = true;
      return true;
    } else if (this.schemaModel.isArray() || this.schemaModel.isObject()) {
      // Remove all array items that are no more in values
      for (const oldProp of this.allChildren.keys()) {
        if (!this.editedValue || this.editedValue[oldProp] === undefined) {
          this.allChildren.delete(oldProp);
        }
      }
      this.forceRead = true;
    }
    return false;
  }
  hasActiveProperties() {
    const props = this.schemaModel.getProperties(this.editedValue);
    if (props) return true;else return false;
  }
  getActiveProperties() {
    return this.schemaModel.getProperties(this.editedValue);
  }
  isReplacementActive() {
    const props = this.schemaModel.getProperties(this.editedValue);
    if (props && props.isReplace()) return true;else return false;
  }
  mergeElement(newElement, after, propName, mergeStartPosition) {
    const list = this.childrenToDisplay;
    const cache = this.allChildren;
    const key = propName ?? newElement.schemaModel.getRelativeId();
    // If the element was already present, do nothing
    if (cache.get(key) === newElement) {
      // Returns its position
      for (let i = 0; i < list.length; i++) {
        if (list[i] === newElement) return i;
      }
    } else if (cache.get(key) != null) {
      console.error('Setting 2 differents elements with the same property name: ' + key + ' for the element ' + this.position);
      throw new Error('Setting 2 differents elements with the same property name: ' + key + ' for the element ' + this.position);
    }
    cache.set(key, newElement);
    if (mergeStartPosition >= list.length) {
      list.push(newElement);
      return ++mergeStartPosition;
    }
    let foundAt = -1;
    let alreadyThere = false;
    for (let i = mergeStartPosition; i < list.length; i++) {
      if (list[i].schemaModel === after) {
        foundAt = i;
      } else {
        if (foundAt !== -1) {
          // We found the insertion point, should we delete older elements or is the element already present in the list ?
          if (list[i] === newElement) {
            // It was already in the list !
            alreadyThere = true;
          }
          break;
        }
      }
    }
    if (foundAt !== -1) mergeStartPosition = foundAt + 1;
    if (!alreadyThere) list.splice(mergeStartPosition, 0, newElement);
    return mergeStartPosition;
  }
  getChild(propName) {
    if (this.forceRead) this.getChildrenToDisplay();
    return this.allChildren.get(propName);
  }
  /**
   * Retrieve the child in the hierarchy at the specified subposition.
   * For example getChildInHierarchy ('sub/item/name') will return the name of the item who is child of sub child of the element
   * getChildInHierarchy ('sub/table/ab/type') will return the type of the element ab of the array named table of sub child
   * @param beforeAName
   */
  getChildInHierarchy(beforeAName) {
    const propNames = beforeAName.split('/');
    let current = this;
    //let nextIsArray= false;
    //let arrayProp:string=null;
    for (const propName of propNames) {
      if (propName !== "") {
        /*if( nextIsArray) {
          current = this.getChildrenToDisplay().find(value => {
            if (value.position.endsWith(arrayProp+'/'+propName))
              return true;
          });
          arrayProp=null;
          nextIsArray=false;
        } else if( this.schemaModel.getChild(propName)?.isArray()) {
          nextIsArray=true;
          arrayProp = propName;
        } else {*/
        current = current.getChild(propName);
        //     }
        if (!current) {
          return null;
        }
      }
    }
    return current;
  }
}
var EditorElementType;
(function (EditorElementType) {
  EditorElementType["array"] = "array";
  EditorElementType["object"] = "object";
  EditorElementType["newLine"] = "newLine";
  EditorElementType["input"] = "input";
  EditorElementType["list"] = "list";
  EditorElementType["label"] = "label";
})(EditorElementType || (EditorElementType = {}));
var ArrayAction;
(function (ArrayAction) {
  ArrayAction[ArrayAction["DEFAULT"] = 0] = "DEFAULT";
  ArrayAction[ArrayAction["NEW_ITEM"] = 1] = "NEW_ITEM";
  ArrayAction[ArrayAction["ONLY_ITEM"] = 2] = "ONLY_ITEM";
})(ArrayAction || (ArrayAction = {}));

/***/ }),

/***/ 7772:
/*!************************************************************!*\
  !*** ./apps/ide-ui/src/app/routes/editor/editor.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorModule": () => (/* binding */ EditorModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var _main_editor_main_editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-editor/main-editor.component */ 5252);
/* harmony import */ var _text_handler_text_handler_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text-handler/text-handler.component */ 2513);
/* harmony import */ var _text_element_text_element_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-element/text-element.component */ 6907);
/* harmony import */ var _select_element_select_element_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select-element/select-element.component */ 8453);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ 2418);
/* harmony import */ var _input_element_input_element_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-element/input-element.component */ 8333);
/* harmony import */ var _sub_text_element_sub_text_element_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sub-text-element/sub-text-element.component */ 9526);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/accordion */ 2630);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 4001);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ 9963);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 1996);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 4848);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/autocomplete */ 8039);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/api */ 9305);
/* harmony import */ var _shared_pipes_locale_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/pipes/locale.pipe */ 4363);
/* harmony import */ var _shared_pipes_locale_desc_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/pipes/locale-desc.pipe */ 7773);





















class EditorModule {
  static #_ = this.ɵfac = function EditorModule_Factory(t) {
    return new (t || EditorModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: EditorModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_11__.AccordionModule, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.DropdownModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputTextModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_16__.AutoCompleteModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](EditorModule, {
    declarations: [_main_editor_main_editor_component__WEBPACK_IMPORTED_MODULE_0__.MainEditorComponent, _text_handler_text_handler_component__WEBPACK_IMPORTED_MODULE_1__.TextHandlerComponent, _text_element_text_element_component__WEBPACK_IMPORTED_MODULE_2__.TextElementComponent, _select_element_select_element_component__WEBPACK_IMPORTED_MODULE_3__.SelectElementComponent, _input_element_input_element_component__WEBPACK_IMPORTED_MODULE_5__.InputElementComponent, _sub_text_element_sub_text_element_component__WEBPACK_IMPORTED_MODULE_6__.SubTextElementComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, primeng_accordion__WEBPACK_IMPORTED_MODULE_11__.AccordionModule, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.DropdownModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputTextModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_16__.AutoCompleteModule],
    exports: [_main_editor_main_editor_component__WEBPACK_IMPORTED_MODULE_0__.MainEditorComponent]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetComponentScope"](_sub_text_element_sub_text_element_component__WEBPACK_IMPORTED_MODULE_6__.SubTextElementComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, primeng_accordion__WEBPACK_IMPORTED_MODULE_11__.Accordion, primeng_accordion__WEBPACK_IMPORTED_MODULE_11__.AccordionTab, primeng_api__WEBPACK_IMPORTED_MODULE_17__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_12__.ButtonDirective, _text_handler_text_handler_component__WEBPACK_IMPORTED_MODULE_1__.TextHandlerComponent], [_shared_pipes_locale_pipe__WEBPACK_IMPORTED_MODULE_7__.LocalePipe, _shared_pipes_locale_desc_pipe__WEBPACK_IMPORTED_MODULE_8__.LocaleDescPipe]);

/***/ }),

/***/ 8333:
/*!************************************************************************************!*\
  !*** ./apps/ide-ui/src/app/routes/editor/input-element/input-element.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputElementComponent": () => (/* binding */ InputElementComponent)
/* harmony export */ });
/* harmony import */ var _editor_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor-element */ 9241);
/* harmony import */ var _shared_change_services_change_update_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/change/services/change-update.service */ 8722);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4848);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtext */ 1996);
/* harmony import */ var _shared_pipes_locale_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pipes/locale.pipe */ 4363);










class InputElementComponent {
  constructor(changeService) {
    this.changeService = changeService;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl({
      value: '',
      disabled: false
    }, {
      updateOn: 'blur'
    });
  }
  ngOnInit() {
    this.updateView();
    this.subscriptions.add(this.control.valueChanges.subscribe({
      next: value => this.onChange(value)
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  updateView() {
    if (this.element?.getEditedValue() == null) {
      this.control.setValue('', {
        emitModelToViewChange: true,
        emitEvent: false
      });
    } else {
      this.control.setValue(this.element.getEditedValue(), {
        emitModelToViewChange: true,
        emitEvent: false
      });
    }
    /*if ((this.element!=null) && (this.element.isReadonly()==true))
        this.control.disable({emitEvent:false});
      else
        this.control.enable({emitEvent:false});
      */
  }
  onChange(newValue) {
    if (this.element != null) {
      this.element.setEditedValue(newValue);
      this.changeService.pushChange(new _dontcode_core__WEBPACK_IMPORTED_MODULE_2__.Change(_dontcode_core__WEBPACK_IMPORTED_MODULE_2__.ChangeType.UPDATE, this.element.position, newValue));
    }
  }
  static #_ = this.ɵfac = function InputElementComponent_Factory(t) {
    return new (t || InputElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_change_services_change_update_service__WEBPACK_IMPORTED_MODULE_1__.ChangeUpdateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: InputElementComponent,
    selectors: [["ide-ui-input-element"]],
    inputs: {
      element: "element"
    },
    decls: 4,
    vars: 6,
    consts: [[1, "displayable"], ["pInputText", "", 3, "id", "name", "formControl"]],
    template: function InputElementComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "locale");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 4, ctx.element.schemaPosition));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", ctx.element.id)("name", ctx.element.id)("formControl", ctx.control);
      }
    },
    dependencies: [primeng_inputtext__WEBPACK_IMPORTED_MODULE_7__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _shared_pipes_locale_pipe__WEBPACK_IMPORTED_MODULE_3__.LocalePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnB1dC1lbGVtZW50LmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaWRlLXVpL3NyYy9hcHAvcm91dGVzL2VkaXRvci9pbnB1dC1lbGVtZW50L2lucHV0LWVsZW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5252:
/*!********************************************************************************!*\
  !*** ./apps/ide-ui/src/app/routes/editor/main-editor/main-editor.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainEditorComponent": () => (/* binding */ MainEditorComponent)
/* harmony export */ });
/* harmony import */ var _shared_change_services_change_listen_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/change/services/change-listen.service */ 3040);
/* harmony import */ var _shared_text_services_text_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/text/services/text.service */ 786);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2320);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var _text_handler_text_handler_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../text-handler/text-handler.component */ 2513);










function MainEditorComponent_ide_ui_text_handler_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ide-ui-text-handler", 1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("element", ctx_r0.rootElement);
  }
}
class MainEditorComponent {
  constructor(ref, changeListener, textService) {
    // Make sure the dev change listener is already started and listening
    this.ref = ref;
    this.changeListener = changeListener;
    this.textService = textService;
    this.rootElement = null;
    this.unsubscriber = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
  }
  ngOnInit() {
    try {
      this.rootElement = this.textService.getRootElement();
      console.debug('Got initial rootElement', this.rootElement.getChild('name')?.getEditedValue());
    } catch (err) {
      console.error('Error getting initial root element.', err);
    }
    this.unsubscriber.add(this.changeListener.getChangeEvents().subscribe(change => {
      //console.debug('Change receive for rootElement', this.rootElement?.getChild('name')?.getEditedValue());
      if (change.type === _dontcode_core__WEBPACK_IMPORTED_MODULE_2__.ChangeType.RESET) {
        if (change.position === _dontcode_core__WEBPACK_IMPORTED_MODULE_2__.DontCodeModel.ROOT || change.position === "") {
          try {
            this.rootElement = this.textService.getRootElement();
            this.rootElement.setEditedValue(change.value?.creation);
            console.debug('Reset received, new root element', this.rootElement.getChild('name')?.getEditedValue());
            this.ref.markForCheck();
            this.ref.detectChanges();
          } catch (err) {
            console.error('Error getting the edited root element.', err);
          }
        }
      }
    }));
  }
  ngOnDestroy() {
    console.debug('Closing with rootElement', this.rootElement?.getChild('name')?.getEditedValue());
    // unsubscribe to all observables
    this.unsubscriber.unsubscribe();
  }
  static #_ = this.ɵfac = function MainEditorComponent_Factory(t) {
    return new (t || MainEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_change_services_change_listen_service__WEBPACK_IMPORTED_MODULE_0__.ChangeListenService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_text_services_text_service__WEBPACK_IMPORTED_MODULE_1__.TextService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: MainEditorComponent,
    selectors: [["ide-ui-main-editor"]],
    decls: 1,
    vars: 1,
    consts: [[3, "element", 4, "ngIf"], [3, "element"]],
    template: function MainEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MainEditorComponent_ide_ui_text_handler_0_Template, 1, 1, "ide-ui-text-handler", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.rootElement);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _text_handler_text_handler_component__WEBPACK_IMPORTED_MODULE_3__.TextHandlerComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLWVkaXRvci5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaWRlLXVpL3NyYy9hcHAvcm91dGVzL2VkaXRvci9tYWluLWVkaXRvci9tYWluLWVkaXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 8453:
/*!**************************************************************************************!*\
  !*** ./apps/ide-ui/src/app/routes/editor/select-element/select-element.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectElementComponent": () => (/* binding */ SelectElementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _editor_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor-element */ 9241);
/* harmony import */ var _shared_change_services_change_update_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/change/services/change-update.service */ 8722);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 9305);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4848);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/autocomplete */ 8039);
/* harmony import */ var _shared_pipes_locale_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pipes/locale.pipe */ 4363);










function SelectElementComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](group_r2.label);
  }
}
function SelectElementComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "locale");
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, option_r3), " ");
  }
}
class SelectElementComponent {
  constructor(changeService) {
    this.changeService = changeService;
    this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.filteredElements = new Array();
  }
  ngOnInit() {}
  calculateOptionValue(option) {
    return option;
  }
  editedValue() {
    if (this.element.getEditedValue()) return this.element.getEditedValue();else return '';
  }
  onChange(change) {
    //console.log('Selection change', change);
    let value = change;
    if (typeof change !== 'string') {
      value = change.target.value;
    }
    const changed = this.element.setEditedValue(value);
    this.changeService.pushChange(new _dontcode_core__WEBPACK_IMPORTED_MODULE_2__.Change(_dontcode_core__WEBPACK_IMPORTED_MODULE_2__.ChangeType.UPDATE, this.element.position, value));
    if (changed) {
      this.refresh.emit('refresh');
    }
  }
  filterGroupedElements(event) {
    const filteredGroups = [];
    const defaultGroup = {
      label: 'Standard',
      items: null
    };
    // If there is only one selection left, then selects it
    let selectItem = null;
    let selectedCount = 0;
    event.query = event.query?.toLowerCase();
    for (const optgroup of this.element.values) {
      if (!optgroup.getChildren() || optgroup.getChildren().length === 0) {
        if (optgroup.getLabel().toLowerCase().indexOf(event.query) >= 0) {
          if (defaultGroup.items === null) {
            defaultGroup.items = new Array();
            filteredGroups.push(defaultGroup);
          }
          defaultGroup.items.push(optgroup.getLabel());
          if (event.query?.length === optgroup.getLabel().length) {
            selectedCount++;
            selectItem = optgroup;
          }
        }
      } else {
        const items = optgroup.getChildren().filter(value => value.getLabel().toLowerCase().indexOf(event.query) >= 0);
        if (items.length > 0) {
          selectedCount += items.length;
          selectItem = items[0];
          filteredGroups.push({
            label: optgroup.getLabel(),
            value: optgroup.getValue(),
            items: items.map(value => value.getLabel())
          });
        }
      }
    }
    this.filteredElements = filteredGroups;
    if (selectedCount === 1 && selectItem) {
      if (selectItem.getLabel().length === event.query?.length) {
        this.onChange({
          target: {
            value: selectItem.getLabel()
          }
        });
      }
    }
  }
  static #_ = this.ɵfac = function SelectElementComponent_Factory(t) {
    return new (t || SelectElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_change_services_change_update_service__WEBPACK_IMPORTED_MODULE_1__.ChangeUpdateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SelectElementComponent,
    selectors: [["ide-ui-select-element"]],
    inputs: {
      element: "element"
    },
    outputs: {
      refresh: "refresh"
    },
    decls: 6,
    vars: 9,
    consts: [[1, "displayable"], [1, "displayable", 3, "ngModel", "group", "id", "suggestions", "dropdown", "readonly", "completeMethod", "onSelect"], ["pTemplate", "group"], ["pTemplate", "item"], [1, "p-d-flex", "p-ai-center"]],
    template: function SelectElementComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "locale");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p-autoComplete", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("completeMethod", function SelectElementComponent_Template_p_autoComplete_completeMethod_3_listener($event) {
          return ctx.filterGroupedElements($event);
        })("onSelect", function SelectElementComponent_Template_p_autoComplete_onSelect_3_listener($event) {
          return ctx.onChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SelectElementComponent_ng_template_4_Template, 3, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SelectElementComponent_ng_template_5_Template, 2, 3, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 7, ctx.element.schemaPosition));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.editedValue())("group", true)("id", ctx.element.id)("suggestions", ctx.filteredElements)("dropdown", true)("readonly", ctx.element.isReadonly());
      }
    },
    dependencies: [primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, primeng_autocomplete__WEBPACK_IMPORTED_MODULE_7__.AutoComplete, _shared_pipes_locale_pipe__WEBPACK_IMPORTED_MODULE_3__.LocalePipe],
    styles: ["p-dropdown[_ngcontent-%COMP%]   p-component[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1lbGVtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic2VsZWN0LWVsZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAtZHJvcGRvd24gcC1jb21wb25lbnQge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaWRlLXVpL3NyYy9hcHAvcm91dGVzL2VkaXRvci9zZWxlY3QtZWxlbWVudC9zZWxlY3QtZWxlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBLHdWQUF3ViIsInNvdXJjZXNDb250ZW50IjpbInAtZHJvcGRvd24gcC1jb21wb25lbnQge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9526:
/*!******************************************************************************************!*\
  !*** ./apps/ide-ui/src/app/routes/editor/sub-text-element/sub-text-element.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubTextElementComponent": () => (/* binding */ SubTextElementComponent)
/* harmony export */ });
/* harmony import */ var _editor_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor-element */ 9241);
/* harmony import */ var _shared_change_services_change_update_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/change/services/change-update.service */ 8722);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 8988);






function SubTextElementComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "localeDesc");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r0.element.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx_r0.element.schemaPosition));
  }
}
function SubTextElementComponent_ng_template_6_ng_container_1_ng_container_1_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubTextElementComponent_ng_template_6_ng_container_1_ng_container_1_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      const item_r4 = ctx_r10.$implicit;
      const i_r5 = ctx_r10.index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.upElement(item_r4, i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", item_r4.id + "-up-button");
  }
}
function SubTextElementComponent_ng_template_6_ng_container_1_ng_container_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubTextElementComponent_ng_template_6_ng_container_1_ng_container_1_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      const item_r4 = ctx_r14.$implicit;
      const i_r5 = ctx_r14.index;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.downElement(item_r4, i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", item_r4.id + "-down-button");
  }
}
function SubTextElementComponent_ng_template_6_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ide-ui-text-handler", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubTextElementComponent_ng_template_6_ng_container_1_ng_container_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.addElement());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubTextElementComponent_ng_template_6_ng_container_1_ng_container_1_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const item_r4 = ctx_r20.$implicit;
      const i_r5 = ctx_r20.index;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.removeElement(item_r4, i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SubTextElementComponent_ng_template_6_ng_container_1_ng_container_1_button_5_Template, 1, 1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SubTextElementComponent_ng_template_6_ng_container_1_ng_container_1_button_6_Template, 1, 1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]()();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const item_r4 = ctx_r21.$implicit;
    const i_r5 = ctx_r21.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("element", item_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", item_r4.id + "-add-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", item_r4.id + "-remove-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r5 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r5 < ctx_r6.items.length - 1);
  }
}
function SubTextElementComponent_ng_template_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SubTextElementComponent_ng_template_6_ng_container_1_ng_container_1_Template, 8, 5, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r4.isHidden());
  }
}
function SubTextElementComponent_ng_template_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SubTextElementComponent_ng_template_6_ng_container_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r22.addElement());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r3.element.id + "-new-button");
  }
}
function SubTextElementComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SubTextElementComponent_ng_template_6_ng_container_1_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SubTextElementComponent_ng_template_6_ng_container_2_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.items.length == 0);
  }
}
class SubTextElementComponent {
  constructor(changeService) {
    this.changeService = changeService;
    this.items = new Array();
  }
  ngOnInit() {}
  addElement() {
    this.element.addSubElement();
  }
  removeElement(item, index) {
    const removed = this.element.removeElement(item, index);
    this.changeService.pushChange(new _dontcode_core__WEBPACK_IMPORTED_MODULE_2__.Change(_dontcode_core__WEBPACK_IMPORTED_MODULE_2__.ChangeType.DELETE, removed.position, null));
  }
  /**
   * Moves the item up one place and returns the immediately following item, if there is one.
   * or returns null if nothing have been moved
   * @param item
   * @param index
   */
  upElement(item, index) {
    const oldPos = item.position; // The old position is the same as the new one in this case (only the beforeId changes)
    const nextElement = this.element.upElement(item, index);
    if (nextElement !== null) {
      const nextKey = nextElement.getItemIdIfExists();
      this.changeService.pushChange(new _dontcode_core__WEBPACK_IMPORTED_MODULE_2__.Change(_dontcode_core__WEBPACK_IMPORTED_MODULE_2__.ChangeType.MOVE, item.position, item.getEditedValue(), undefined, nextKey ? nextKey : undefined, oldPos));
    }
  }
  downElement(item, index) {
    const oldPos = item.position; // The old position is the same as the new one in this case (only the beforeId changes)
    const nextElement = this.element.downElement(item, index);
    if (nextElement !== null) {
      let nextKey;
      if (nextElement === undefined) {
        // It is the last element
        nextKey = undefined;
      } else {
        nextKey = nextElement.getItemIdIfExists();
      }
      this.changeService.pushChange(new _dontcode_core__WEBPACK_IMPORTED_MODULE_2__.Change(_dontcode_core__WEBPACK_IMPORTED_MODULE_2__.ChangeType.MOVE, item.position, item.getEditedValue(), undefined, nextKey ? nextKey : undefined, oldPos));
    }
  }
  ngOnChanges(changes) {
    this.items = this.element.getChildrenToDisplay();
  }
  static #_ = this.ɵfac = function SubTextElementComponent_Factory(t) {
    return new (t || SubTextElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_change_services_change_update_service__WEBPACK_IMPORTED_MODULE_1__.ChangeUpdateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SubTextElementComponent,
    selectors: [["ide-ui-sub-text-element"]],
    inputs: {
      element: "element"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
    decls: 7,
    vars: 4,
    consts: [[1, "displayable"], [3, "selected"], ["pTemplate", "header"], ["pTemplate", "content"], [1, "displayable", 3, "id"], [2, "padding-left", "10px"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "element"], ["pButton", "", "type", "button", "icon", "pi pi-plus", "aria-label", "Add item", 1, "p-button-secondary", "p-button-rounded", "p-button-outlined", 3, "id", "click"], ["pButton", "", "type", "button", "icon", "pi pi-minus", "aria-label", "Remove item", 1, "p-button-danger", "p-button-rounded", "p-button-outlined", 3, "id", "click"], ["pButton", "", "type", "button", "class", "p-button-secondary p-button-rounded p-button-outlined", "icon", "pi pi-caret-up", "aria-label", "Up", 3, "id", "click", 4, "ngIf"], ["pButton", "", "type", "button", "class", "p-button-secondary p-button-rounded p-button-outlined", "icon", "pi pi-caret-down", "aria-label", "Down", 3, "id", "click", 4, "ngIf"], ["pButton", "", "type", "button", "icon", "pi pi-caret-up", "aria-label", "Up", 1, "p-button-secondary", "p-button-rounded", "p-button-outlined", 3, "id", "click"], ["pButton", "", "type", "button", "icon", "pi pi-caret-down", "aria-label", "Down", 1, "p-button-secondary", "p-button-rounded", "p-button-outlined", 3, "id", "click"]],
    template: function SubTextElementComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "locale");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p-accordion")(4, "p-accordionTab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SubTextElementComponent_ng_template_5_Template, 3, 4, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SubTextElementComponent_ng_template_6_Template, 3, 2, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx.element.schemaPosition));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("selected", true);
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWItdGV4dC1lbGVtZW50LmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaWRlLXVpL3NyYy9hcHAvcm91dGVzL2VkaXRvci9zdWItdGV4dC1lbGVtZW50L3N1Yi10ZXh0LWVsZW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0xBQWdMIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6907:
/*!**********************************************************************************!*\
  !*** ./apps/ide-ui/src/app/routes/editor/text-element/text-element.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextElementComponent": () => (/* binding */ TextElementComponent)
/* harmony export */ });
/* harmony import */ var _editor_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor-element */ 9241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _shared_pipes_locale_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/pipes/locale.pipe */ 4363);



class TextElementComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function TextElementComponent_Factory(t) {
    return new (t || TextElementComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: TextElementComponent,
    selectors: [["ide-ui-text-element"]],
    inputs: {
      element: "element"
    },
    decls: 3,
    vars: 4,
    consts: [[1, "displayable", 3, "id"]],
    template: function TextElementComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "locale");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.element.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, ctx.element.schemaPosition));
      }
    },
    dependencies: [_shared_pipes_locale_pipe__WEBPACK_IMPORTED_MODULE_1__.LocalePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXh0LWVsZW1lbnQuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaWRlLXVpL3NyYy9hcHAvcm91dGVzL2VkaXRvci90ZXh0LWVsZW1lbnQvdGV4dC1lbGVtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2513:
/*!**********************************************************************************!*\
  !*** ./apps/ide-ui/src/app/routes/editor/text-handler/text-handler.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextHandlerComponent": () => (/* binding */ TextHandlerComponent)
/* harmony export */ });
/* harmony import */ var _shared_text_services_text_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/text/services/text.service */ 786);
/* harmony import */ var _editor_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editor-element */ 9241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var _text_element_text_element_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../text-element/text-element.component */ 6907);
/* harmony import */ var _select_element_select_element_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../select-element/select-element.component */ 8453);
/* harmony import */ var _input_element_input_element_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../input-element/input-element.component */ 8333);
/* harmony import */ var _sub_text_element_sub_text_element_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sub-text-element/sub-text-element.component */ 9526);
/* harmony import */ var _shared_pipes_locale_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/pipes/locale.pipe */ 4363);











function TextHandlerComponent_ng_container_1_ng_container_1_br_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "br");
  }
}
function TextHandlerComponent_ng_container_1_ng_container_1_ide_ui_text_element_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ide-ui-text-element", 6);
  }
  if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("element", element_r1);
  }
}
function TextHandlerComponent_ng_container_1_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div")(2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "locale");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "ide-ui-text-handler", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 2, element_r1.schemaPosition));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("element", element_r1);
  }
}
function TextHandlerComponent_ng_container_1_ng_container_1_ide_ui_sub_text_element_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ide-ui-sub-text-element", 6);
  }
  if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("element", element_r1);
  }
}
function TextHandlerComponent_ng_container_1_ng_container_1_ide_ui_select_element_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ide-ui-select-element", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("refresh", function TextHandlerComponent_ng_container_1_ng_container_1_ide_ui_select_element_6_Template_ide_ui_select_element_refresh_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.refresh());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("element", element_r1);
  }
}
function TextHandlerComponent_ng_container_1_ng_container_1_ide_ui_input_element_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "ide-ui-input-element", 6);
  }
  if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("element", element_r1);
  }
}
function TextHandlerComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0)(1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TextHandlerComponent_ng_container_1_ng_container_1_br_2_Template, 1, 0, "br", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, TextHandlerComponent_ng_container_1_ng_container_1_ide_ui_text_element_3_Template, 1, 1, "ide-ui-text-element", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, TextHandlerComponent_ng_container_1_ng_container_1_ng_container_4_Template, 7, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, TextHandlerComponent_ng_container_1_ng_container_1_ide_ui_sub_text_element_5_Template, 1, 1, "ide-ui-sub-text-element", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, TextHandlerComponent_ng_container_1_ng_container_1_ide_ui_select_element_6_Template, 1, 1, "ide-ui-select-element", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, TextHandlerComponent_ng_container_1_ng_container_1_ide_ui_input_element_7_Template, 1, 1, "ide-ui-input-element", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]()();
  }
  if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitch", element_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "newLine");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "object");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "array");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "list");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngSwitchCase", "input");
  }
}
function TextHandlerComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TextHandlerComponent_ng_container_1_ng_container_1_Template, 8, 7, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !element_r1.isHidden());
  }
}
class TextHandlerComponent {
  constructor(model, ref) {
    this.model = model;
    this.ref = ref;
    this.listOfElements = [];
  }
  ngOnInit() {
    this.listOfElements = this.element.getChildrenToDisplay();
  }
  ngOnChanges(changes) {
    //    console.log("text Changed");
    this.listOfElements = this.element.getChildrenToDisplay();
  }
  refresh() {
    this.listOfElements = this.element.getChildrenToDisplay();
    this.ref.detectChanges();
  }
  static #_ = this.ɵfac = function TextHandlerComponent_Factory(t) {
    return new (t || TextHandlerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_text_services_text_service__WEBPACK_IMPORTED_MODULE_0__.TextService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: TextHandlerComponent,
    selectors: [["ide-ui-text-handler"]],
    inputs: {
      element: "element"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
    decls: 2,
    vars: 1,
    consts: [[4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "element", 4, "ngSwitchCase"], [3, "element", "refresh", 4, "ngSwitchCase"], [3, "element"], [1, "displayable"], [3, "element", "refresh"]],
    template: function TextHandlerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, TextHandlerComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.listOfElements);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitchCase, TextHandlerComponent, _text_element_text_element_component__WEBPACK_IMPORTED_MODULE_2__.TextElementComponent, _select_element_select_element_component__WEBPACK_IMPORTED_MODULE_3__.SelectElementComponent, _input_element_input_element_component__WEBPACK_IMPORTED_MODULE_4__.InputElementComponent, _sub_text_element_sub_text_element_component__WEBPACK_IMPORTED_MODULE_5__.SubTextElementComponent, _shared_pipes_locale_pipe__WEBPACK_IMPORTED_MODULE_6__.LocalePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXh0LWhhbmRsZXIuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaWRlLXVpL3NyYy9hcHAvcm91dGVzL2VkaXRvci90ZXh0LWhhbmRsZXIvdGV4dC1oYW5kbGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4763:
/*!**********************************************************************!*\
  !*** ./apps/ide-ui/src/app/routes/welcome/main/welcome.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeComponent": () => (/* binding */ WelcomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/button */ 4001);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ 167);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/badge */ 9157);




class WelcomeComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function WelcomeComponent_Factory(t) {
    return new (t || WelcomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: WelcomeComponent,
    selectors: [["ide-ui-welcome"]],
    decls: 69,
    vars: 0,
    consts: [[1, "grid", "align-items-stretch"], [1, "welcome-question", "col-12"], [1, "col-12", "md:col-6"], ["header", "Show me a demo", "subheader", "The fastest way to see the Dont-code platform in action is to load an existing project."], [1, "welcome-item"], ["value", "1"], ["pButton", "", "type", "button", "icon", "pi pi-external-link", 1, "p-button-rounded", "p-button-outlined"], ["value", "2"], [1, "pi", "pi-home", 2, "font-size", "1.1rem"], ["value", "3"], ["icon", "pi pi-play", "label", "Play"], ["value", "4"], [1, "pi", "pi-pencil", 2, "font-size", "1.1rem"], ["value", "5"], ["src", "assets/images/preview-ui-tab.png"], ["header", "Start from scratch", "subheader", "Gets more insights by working from a blank project"], [1, "pi", "pi-download", 2, "font-size", "1.1rem"], ["value", "6"], ["icon", "pi pi-save", "label", "Save"]],
    template: function WelcomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome to Dont-code !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You are running the Builder application of the Dont-code platform.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Use this tool to create new applications or load and edit their behaviors.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0)(7, "div", 1)(8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tutorials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2)(11, "p-card", 3)(12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "p-badge", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Open the Previewer by clicking on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " on the top bar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "p-badge", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Then select the menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u00A0Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " on the side bar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "p-badge", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Load the Task Manager project ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "p-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "p-badge", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Edit some elements in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u00A0Editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "p-badge", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " And watch the Previewer acting accordingly ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2)(37, "p-card", 15)(38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "p-badge", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Open the Previewer by clicking on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " on the top bar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "p-badge", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Then Create a new application by clicking on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u00A0New Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " icon.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "p-badge", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Edit some elements in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u00A0Editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "p-badge", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " And watch the Previewer acting accordingly ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "p-badge", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " You can save your work by selecting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u00A0Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " on the side bar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "p-badge", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " And select ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "p-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " button.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_1__.ButtonDirective, primeng_button__WEBPACK_IMPORTED_MODULE_1__.Button, primeng_card__WEBPACK_IMPORTED_MODULE_2__.Card, primeng_badge__WEBPACK_IMPORTED_MODULE_3__.Badge],
    styles: ["p-card[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 100%;\n  width: 100%;\n}\n\n.welcome-question[_ngcontent-%COMP%]  {\n  text-align: center;\n}\n\n.welcome-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.welcome-item[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6IndlbGNvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAtY2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndlbGNvbWUtcXVlc3Rpb24gIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud2VsY29tZS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ud2VsY29tZS1pdGVtID4gKiB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvaWRlLXVpL3NyYy9hcHAvcm91dGVzL3dlbGNvbWUvbWFpbi93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQSw0ekJBQTR6QiIsInNvdXJjZXNDb250ZW50IjpbInAtY2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndlbGNvbWUtcXVlc3Rpb24gIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud2VsY29tZS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ud2VsY29tZS1pdGVtID4gKiB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6541:
/*!**************************************************************!*\
  !*** ./apps/ide-ui/src/app/routes/welcome/welcome.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeModule": () => (/* binding */ WelcomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var _main_welcome_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/welcome.component */ 4763);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 4001);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/card */ 167);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/badge */ 9157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8988);






class WelcomeModule {
  static #_ = this.ɵfac = function WelcomeModule_Factory(t) {
    return new (t || WelcomeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: WelcomeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonModule, primeng_card__WEBPACK_IMPORTED_MODULE_4__.CardModule, primeng_badge__WEBPACK_IMPORTED_MODULE_5__.BadgeModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WelcomeModule, {
    declarations: [_main_welcome_component__WEBPACK_IMPORTED_MODULE_0__.WelcomeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonModule, primeng_card__WEBPACK_IMPORTED_MODULE_4__.CardModule, primeng_badge__WEBPACK_IMPORTED_MODULE_5__.BadgeModule]
  });
})();

/***/ }),

/***/ 4780:
/*!************************************************************!*\
  !*** ./apps/ide-ui/src/app/shared/change/change.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeModule": () => (/* binding */ ChangeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8988);


class ChangeModule {
  static #_ = this.ɵfac = function ChangeModule_Factory(t) {
    return new (t || ChangeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: ChangeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChangeModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
})();

/***/ }),

/***/ 3040:
/*!*****************************************************************************!*\
  !*** ./apps/ide-ui/src/app/shared/change/services/change-listen.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeListenService": () => (/* binding */ ChangeListenService)
/* harmony export */ });
/* harmony import */ var _change_update_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-update.service */ 8722);
/* harmony import */ var broadcast_channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! broadcast-channel */ 8406);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8837);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 8988);






/**
 * List to all the changes on the edited elements from the BroadCastChannel and updates
 * a list of changes from it.
 */
class ChangeListenService {
  constructor(changeMgr) {
    this.changeMgr = changeMgr;
    this.listOfChanges = [];
    this.changeEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.channel = new broadcast_channel__WEBPACK_IMPORTED_MODULE_1__.BroadcastChannel(_change_update_service__WEBPACK_IMPORTED_MODULE_0__.ChangeUpdateService.CHANNEL_CHANGE_NAME);
    console.log('Channel receiver created');
    this.channel.onmessage = msg => {
      if (msg.type === _dontcode_core__WEBPACK_IMPORTED_MODULE_2__.ChangeType.RESET) {
        this.listOfChanges.length = 0;
      } else {
        this.listOfChanges.push(msg);
      }
      this.changeEmitter.next(msg);
      if (msg.type === _dontcode_core__WEBPACK_IMPORTED_MODULE_2__.ChangeType.RESET) this.resetEmitter();
    };
    this.changeEmitter.subscribe({
      next: change => {
        this.changeMgr.pushChange(change);
      }
    });
  }
  resetEmitter() {
    /*    const newReplay = new ReplaySubject<Change>();
        newReplay.observers=this.changeEmitter.observers;
        this.changeEmitter=newReplay;*/
  }
  getListOfChanges() {
    return this.listOfChanges;
  }
  getChangeEvents() {
    return this.changeEmitter;
  }
  static #_ = this.ɵfac = function ChangeListenService_Factory(t) {
    return new (t || ChangeListenService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_dontcode_core__WEBPACK_IMPORTED_MODULE_2__.DontCodeChangeManager));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ChangeListenService,
    factory: ChangeListenService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8722:
/*!*****************************************************************************!*\
  !*** ./apps/ide-ui/src/app/shared/change/services/change-update.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeUpdateService": () => (/* binding */ ChangeUpdateService)
/* harmony export */ });
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var broadcast_channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! broadcast-channel */ 8406);
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/webSocket */ 5482);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dontcode/plugin-common */ 3760);







/**
 * Updates all changes to the edited elements (what the user entered in the IDE)
 * to a broadcastchannel (for dev tab) and the websocket to the services.
 */
class ChangeUpdateService {
  static #_ = this.CHANNEL_CHANGE_NAME = 'ide-ui-changes';
  constructor(configService) {
    this.configService = configService;
    this.listOfChanges = [];
    this.ideServicesWebSocket = null;
    this.connectionStatus = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
    /**
     * The Id of the session as returned by the services. This is used to tell the previewer to listen only to this session
     * @protected
     */
    this.sessionIdSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
    this.currentSocketUrl = null;
    console.debug('Creating channel');
    this.channel = new broadcast_channel__WEBPACK_IMPORTED_MODULE_1__.BroadcastChannel(ChangeUpdateService.CHANNEL_CHANGE_NAME);
    this.configService.getUpdates().subscribe(newConfig => {
      const socketChanged = newConfig.ideWebSocketUrl != this.currentSocketUrl;
      if (socketChanged) {
        this.currentSocketUrl = newConfig.ideWebSocketUrl ?? null;
        // Close the current socket, it will be opened when needed
        if (this.ideServicesWebSocket) {
          if (!this.ideServicesWebSocket.closed) {
            this.ideServicesWebSocket?.complete();
          }
        }
        if (this.currentSocketUrl != null) this.pushChange(new _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.Change(_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.ChangeType.RESET, _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.ROOT, null));
      }
    });
    this.connectionStatus.next("closed");
    this.sessionIdSubject.next(undefined);
  }
  openWebSocket() {
    // Check if there is one already opened
    if (this.ideServicesWebSocket) {
      if (!this.ideServicesWebSocket.closed) {
        return Promise.resolve(this.ideServicesWebSocket);
      }
    }
    // If not, then check if we can open one
    const socketUrl = this.currentSocketUrl;
    if (socketUrl == null) {
      return Promise.reject("No Websocket Url to connect to");
    } else {
      const ret = new Promise((resolve, reject) => {
        const config = {
          url: socketUrl,
          closeObserver: {
            next: value => {
              console.debug("Close", value);
            }
          },
          openObserver: {
            next: value => {
              if (this.ideServicesWebSocket) resolve(this.ideServicesWebSocket);else reject('No WebSocket');
            },
            error: err => {
              console.error("error connecting socket", err);
              reject(err);
            }
          }
        };
        this.ideServicesWebSocket = (0,rxjs_webSocket__WEBPACK_IMPORTED_MODULE_3__.webSocket)(config);
        this.connectionStatus.next("connected");
        this.sessionIdSubject.next(undefined);
        this.ideServicesWebSocket.asObservable().subscribe({
          next: msg => {
            //console.log('message received: ' , msg);
            const newId = msg?.sessionId;
            if (newId && newId !== this.sessionId) {
              console.debug('Received SessionId ', newId);
              this.sessionId = newId;
              this.sessionIdSubject.next(newId);
            }
          },
          // Called whenever there is a message from the server
          error: err => {
            console.error(err);
            this.ideServicesWebSocket?.unsubscribe();
            this.ideServicesWebSocket = null;
            this.connectionStatus.next("ERROR:" + err);
            this.sessionIdSubject.next(undefined);
          },
          // Called if WebSocket API signals some kind of error
          complete: () => {
            console.debug('complete');
            this.ideServicesWebSocket?.unsubscribe();
            this.ideServicesWebSocket = null;
            this.connectionStatus.next("closed");
            this.sessionIdSubject.next(undefined);
          }
          // Called when connection is closed (for whatever reason)
        });
      });
      return ret;
    }
  }
  pushChange(newChange) {
    //console.log('Change pushed');
    if (newChange.type === _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.ChangeType.RESET) {
      this.listOfChanges.length = 0;
    } else {
      this.listOfChanges.push(newChange);
    }
    return Promise.all([this.channel.postMessage(newChange), this.updateSocket(new _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.Message(_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.MessageType.CHANGE, this.sessionId, newChange))]).then();
  }
  updateSocket(newChange) {
    return this.openWebSocket().then(socket => socket.next(newChange));
  }
  getListOfChanges() {
    return this.listOfChanges;
  }
  getConnectionStatus() {
    return this.connectionStatus;
  }
  getSessionId() {
    return this.sessionIdSubject;
  }
  static #_2 = this.ɵfac = function ChangeUpdateService_Factory(t) {
    return new (t || ChangeUpdateService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_5__.CommonConfigService));
  };
  static #_3 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ChangeUpdateService,
    factory: ChangeUpdateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7773:
/*!**************************************************************!*\
  !*** ./apps/ide-ui/src/app/shared/pipes/locale-desc.pipe.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocaleDescPipe": () => (/* binding */ LocaleDescPipe)
/* harmony export */ });
/* harmony import */ var _text_services_locale_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../text/services/locale.service */ 422);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8988);



class LocaleDescPipe {
  constructor(locale) {
    this.locale = locale;
  }
  transform(value, ...args) {
    return this.locale.toText(value + '-desc');
  }
  static #_ = this.ɵfac = function LocaleDescPipe_Factory(t) {
    return new (t || LocaleDescPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_text_services_locale_service__WEBPACK_IMPORTED_MODULE_0__.LocaleService, 16));
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "localeDesc",
    type: LocaleDescPipe,
    pure: true
  });
}

/***/ }),

/***/ 4363:
/*!*********************************************************!*\
  !*** ./apps/ide-ui/src/app/shared/pipes/locale.pipe.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalePipe": () => (/* binding */ LocalePipe)
/* harmony export */ });
/* harmony import */ var _text_services_locale_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../text/services/locale.service */ 422);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8988);



class LocalePipe {
  constructor(locale) {
    this.locale = locale;
  }
  transform(value, ...args) {
    return this.locale.toText(value);
  }
  static #_ = this.ɵfac = function LocalePipe_Factory(t) {
    return new (t || LocalePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_text_services_locale_service__WEBPACK_IMPORTED_MODULE_0__.LocaleService, 16));
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "locale",
    type: LocalePipe,
    pure: true
  });
}

/***/ }),

/***/ 3916:
/*!**********************************************************!*\
  !*** ./apps/ide-ui/src/app/shared/pipes/type-of.pipe.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeOfPipe": () => (/* binding */ TypeOfPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8988);

class TypeOfPipe {
  transform(value, ...args) {
    if (Array.isArray(value)) return 'array';else return typeof value;
  }
  static #_ = this.ɵfac = function TypeOfPipe_Factory(t) {
    return new (t || TypeOfPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "typeOf",
    type: TypeOfPipe,
    pure: true
  });
}

/***/ }),

/***/ 334:
/*!**********************************************************!*\
  !*** ./apps/ide-ui/src/app/shared/project/IdeProject.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdeProject": () => (/* binding */ IdeProject)
/* harmony export */ });
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);

class IdeProject extends _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeProject {}

/***/ }),

/***/ 4232:
/*!************************************************************************!*\
  !*** ./apps/ide-ui/src/app/shared/project/services/project.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectService": () => (/* binding */ ProjectService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2320);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1382);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1211);
/* harmony import */ var _IdeProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../IdeProject */ 334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 224);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8451);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @dontcode/plugin-common */ 3760);









class ProjectService {
  constructor(http, configService) {
    this.http = http;
    this.configService = configService;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
    this.projects = [];
    this.projectApiUrl = null;
    this.currentProject = new _IdeProject__WEBPACK_IMPORTED_MODULE_0__.IdeProject();
    this.currentProject.template = false;
    this.currentProject.current = true;
    // Receive any updates of the project urls
    this.subscriptions.add(this.configService.getUpdates().subscribe({
      next: newConfig => {
        this.projectApiUrl = newConfig.projectApiUrl ?? null;
      }
    }));
  }
  loadListOfProjects() {
    if (this.projectApiUrl != null) {
      return this.http.get(this.projectApiUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(newProjects => {
        this.projects = this.placeCurrentProject(newProjects);
        return this.projects;
      }));
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error("No API provided to load projects"));
    }
  }
  placeCurrentProject(projects) {
    // Keep the currentProject at first place in the list
    const found = projects.findIndex(value => {
      return value._id === this.currentProject._id;
    });
    if (found === -1) {
      projects = [this.currentProject, ...projects];
    } else {
      projects.splice(found, 1);
      projects = [this.currentProject, ...projects];
    }
    return projects;
  }
  saveCurrentProject() {
    if (this.projectApiUrl != null) {
      const toSave = {
        ...this.currentProject
      };
      delete toSave.current; // We don't want to save the fact it's the current project
      const model = _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.dtcde.getModelManager().getContent();
      toSave.content = model;
      if (toSave._id) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(this.http.put(this.projectApiUrl + '/' + this.currentProject.name, toSave, {
          responseType: "json"
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(value => {
          delete value.content;
          return value;
        })));
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(this.http.post(this.projectApiUrl, toSave, {
          responseType: "json"
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(value => {
          this.currentProject._id = value._id;
          return this.currentProject;
        })));
      }
    } else {
      return Promise.reject(new Error("No API provided to save project."));
    }
  }
  loadProject(prj) {
    if (prj.name) {
      if (this.projectApiUrl != null) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(this.http.get(this.projectApiUrl + '/' + prj.name, {
          responseType: 'json'
        }));
      } else {
        return Promise.reject(new Error("No API provided to load project."));
      }
    } else {
      return Promise.resolve(prj);
    }
  }
  /**
   * Creates a new empty project and sets it as current project
   */
  newCurrentProject() {
    this.setCurrentProject(new _IdeProject__WEBPACK_IMPORTED_MODULE_0__.IdeProject());
    return this.currentProject;
  }
  setCurrentProject(prj) {
    if (this.currentProject?.current) {
      delete this.currentProject.current;
    }
    this.currentProject = prj;
    this.currentProject.current = true;
    this.projects = this.placeCurrentProject(this.projects);
  }
  loadAndSetCurrentProject(prj, updateService) {
    // console.log("Loading Project");
    return this.loadProject(prj).then(value => {
      // console.log("Setting current Project");
      this.setCurrentProject(value);
      // console.log("Pushing update");
      updateService.pushChange(new _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.Change(_dontcode_core__WEBPACK_IMPORTED_MODULE_1__.ChangeType.RESET, '', value.content));
      // console.log("Loading Project done");
      return value;
    });
  }
  getCurrentProject() {
    return this.currentProject;
  }
  isCurrentProject(prj) {
    if (prj.current) return prj.current;else return false;
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static #_ = this.ɵfac = function ProjectService_Factory(t) {
    return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_8__.CommonConfigService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: ProjectService,
    factory: ProjectService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2418:
/*!*****************************************************!*\
  !*** ./apps/ide-ui/src/app/shared/shared.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var _pipes_type_of_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pipes/type-of.pipe */ 3916);
/* harmony import */ var _text_text_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text/text.module */ 7541);
/* harmony import */ var _pipes_locale_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipes/locale.pipe */ 4363);
/* harmony import */ var _pipes_locale_desc_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/locale-desc.pipe */ 7773);
/* harmony import */ var _change_change_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change/change.module */ 4780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 8988);







class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _text_text_module__WEBPACK_IMPORTED_MODULE_1__.TextModule, _change_change_module__WEBPACK_IMPORTED_MODULE_4__.ChangeModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_pipes_type_of_pipe__WEBPACK_IMPORTED_MODULE_0__.TypeOfPipe, _pipes_locale_pipe__WEBPACK_IMPORTED_MODULE_2__.LocalePipe, _pipes_locale_desc_pipe__WEBPACK_IMPORTED_MODULE_3__.LocaleDescPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _text_text_module__WEBPACK_IMPORTED_MODULE_1__.TextModule, _change_change_module__WEBPACK_IMPORTED_MODULE_4__.ChangeModule],
    exports: [_pipes_type_of_pipe__WEBPACK_IMPORTED_MODULE_0__.TypeOfPipe, _pipes_locale_pipe__WEBPACK_IMPORTED_MODULE_2__.LocalePipe, _pipes_locale_desc_pipe__WEBPACK_IMPORTED_MODULE_3__.LocaleDescPipe]
  });
})();

/***/ }),

/***/ 422:
/*!********************************************************************!*\
  !*** ./apps/ide-ui/src/app/shared/text/services/locale.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocaleService": () => (/* binding */ LocaleService)
/* harmony export */ });
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8988);


class LocaleService {
  constructor() {
    this.texts = new Map([[_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.ROOT, 'I want to create'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_TYPE, 'I want to create a'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_NAME, 'with the name'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_NAME + '-desc', 'Enter the name'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_ENTITIES, 'handing the following items:'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_ENTITIES + '-desc', 'List of managed items'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_ENTITIES_FROM, 'An item from'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_ENTITIES_FROM + '-desc', 'Predefined items'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_ENTITIES_NAME, 'with the name'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_ENTITIES_NAME + '-desc', 'Name of item'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS, 'containing the following fields:'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS + '-desc', 'List of fields'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS_NAME, 'A field named'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS_NAME + '-desc', 'Name of field'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS_TYPE, 'with the type'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS_TYPE + '-desc', 'Type of field'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS, 'It will display reports:'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS + '-desc', 'Design the reports you want to use'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_TITLE, 'One named'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_TITLE + '-desc', 'The title of the report'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_FOR, 'for the item'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_FOR + '-desc', 'Name of the item to generate the report for'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP, 'Values must be grouped'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP + '-desc', 'Select if and how a grouping of values will be done'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_OF, 'on'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_OF + '-desc', 'The field or the type of field to use for grouping'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_SHOW, 'show'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_SHOW + '-desc', 'if grouping on a type of field, which one to show ?'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_LABEL, 'with the label'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_LABEL + '-desc', 'The title of the group to display'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_AGGREGATE, 'and the group must display'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_AGGREGATE + '-desc', 'What result to be displayed for each group ?'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_OPERATION, 'the'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_OPERATION + '-desc', 'Operation to display on the elements'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_OF, 'of'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_OF + '-desc', 'What field will be displayed ?'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_LABEL, 'labelled as'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_LABEL + '-desc', 'The label of the field aggregation'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_SORT, 'Please sort the values'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_SORT + '-desc', 'Specify how the values will be sorted'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_SORT_BY, 'according to'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_SORT_BY + '-desc', 'The field you want to sort'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_SORT_DIRECTION, 'order'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_SORT_DIRECTION + '-desc', 'Highest ranking or Lowest ranking first ?'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_DISPLAY, 'The report displays'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_DISPLAY + '-desc', 'what must be displayed'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_DISPLAY_TYPE, 'a'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_DISPLAY_TYPE + '-desc', 'the graph or table you want displayed'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_DISPLAY_OF, 'of'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_DISPLAY_OF + '-desc', 'the field to display. Empty for all'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_DISPLAY_BY, 'by'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_DISPLAY_BY + '-desc', 'the field to display. Empty for all'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_DISPLAY_TITLE, 'with the title'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_DISPLAY_TITLE + '-desc', 'Enter the title of the graph or table displayed'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SHARING, 'Information will be shared '], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SHARING + '-desc', 'List of screens'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SHARING_WITH, 'with'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SHARING_WITH + '-desc', 'Persons to information will be visible to.'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SOURCES, 'Data will come from:'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SOURCES + '-desc', 'Source of data'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SOURCES_NAME, 'A source named'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SOURCES_NAME + '-desc', 'Sets a name for the data source'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SOURCES_TYPE, 'of type'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SOURCES_TYPE + '-desc', 'How to connect to the source'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SOURCES_URL, 'with the url'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SOURCES_URL + '-desc', 'The url to call the service'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SCREENS, 'Showing the screens'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SCREENS + '-desc', 'List of screens'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SCREENS_NAME, 'A screen with the name'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SCREENS_NAME + '-desc', 'Name of screen'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SCREENS_LAYOUT, 'and the layout'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SCREENS_LAYOUT + '-desc', 'layout of the screen'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_COMPONENTS, 'displaying parts:'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_COMPONENTS + '-desc', 'List of parts'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_COMPONENTS_TYPE, 'A part with the type'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_COMPONENTS_TYPE + '-desc', 'Type of part'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_COMPONENTS_ENTITY, 'handling the entity'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_COMPONENTS_ENTITY + '-desc', 'Entity\'s name'],
    // Find a way for plugins to dynamically inserts label texts
    [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SCREENS + '/type', 'of type'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SCREENS + '/type-desc', 'Type of screen'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SCREENS + '/entity', 'handling the entity'], [_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SCREENS + '/entity-desc', 'Entity\'s name']]);
    //
  }
  toText(context, element) {
    let ret;
    if (element) {
      ret = this.texts.get(context + '/' + element);
      if (!ret) {
        ret = context + '/' + element;
      }
    } else {
      ret = this.texts.get(context);
      if (!ret) ret = context;
    }
    return ret;
  }
  static #_ = this.ɵfac = function LocaleService_Factory(t) {
    return new (t || LocaleService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: LocaleService,
    factory: LocaleService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 786:
/*!******************************************************************!*\
  !*** ./apps/ide-ui/src/app/shared/text/services/text.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextService": () => (/* binding */ TextService)
/* harmony export */ });
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _routes_editor_editor_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../routes/editor/editor-element */ 9241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8451);





/**
  Manages the model to be edited and as well the list of elements that informs the UI about what to display.
 */
class TextService {
  /**
   * Stores the SchemaItem corresponding to a position in the schema
   * For example:
   *  'creation/entities' => The SchemaItem describing an entity
   *  'creation/entities/fields/' => The SchemaItem describing a field in an entity
   *  'creation/screens[type=list]/columns' => The SchemaItem describing a column of a screen when the screen type is list
   */
  //mapOfJson = new Map<string, DontCodeSchemaItem>();
  constructor(http) {
    //    console.debug('TextElement: Constructor');
    this.http = http;
    this.jsonSchema = null;
    this.rootElement = null;
  }
  resetSchema() {
    //    console.debug('TextElement: Resetting rootElement');
    this.rootElement = null;
  }
  /**
   * Read the schema to integrate it in the list
   * @param schemaAsJson
   */
  readSchema(schemaAsJson) {
    this.jsonSchema = schemaAsJson;
    const rootSchema = _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.AbstractSchemaItem.goto(schemaAsJson, _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.ROOT);
    if (rootSchema) {
      this.rootElement = _routes_editor_editor_element__WEBPACK_IMPORTED_MODULE_1__.EditorElement.createNew(_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.ROOT, _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.ROOT, _routes_editor_editor_element__WEBPACK_IMPORTED_MODULE_1__.EditorElementType.label, rootSchema);
      //      console.debug('TextElement: New rootElement set');
    }
  }
  getRootElement() {
    if (!this.rootElement) throw new Error('No root elements to return');
    //  console.debug('TextElement: returning rootElement');
    return this.rootElement;
  }
  static #_ = this.ɵfac = function TextService_Factory(t) {
    return new (t || TextService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: TextService,
    factory: TextService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7541:
/*!********************************************************!*\
  !*** ./apps/ide-ui/src/app/shared/text/text.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextModule": () => (/* binding */ TextModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8988);


class TextModule {
  static #_ = this.ɵfac = function TextModule_Factory(t) {
    return new (t || TextModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: TextModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TextModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
})();

/***/ }),

/***/ 7581:
/*!*****************************************************!*\
  !*** ./apps/ide-ui/src/environments/environment.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  previewUrl: 'https://run.dont-code.net/preview-ui/next',
  //repositoryUrl: 'assets/repositories/next.json'
  repositoryUrl: 'https://test.dont-code.net/demo/repository-next.json'
};

/***/ }),

/***/ 2531:
/*!*********************************!*\
  !*** ./apps/ide-ui/src/main.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6776);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4288);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 7581);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 6816:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 8612:
/*!***************************************************!*\
  !*** ../../libs/core/dist/packages/core/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractActionHandler": () => (/* binding */ AbstractActionHandler),
/* harmony export */   "AbstractDontCodeStoreProvider": () => (/* binding */ AbstractDontCodeStoreProvider),
/* harmony export */   "AbstractSchemaItem": () => (/* binding */ AbstractSchemaItem),
/* harmony export */   "Action": () => (/* binding */ Action),
/* harmony export */   "ActionContextType": () => (/* binding */ ActionContextType),
/* harmony export */   "ActionType": () => (/* binding */ ActionType),
/* harmony export */   "Change": () => (/* binding */ Change),
/* harmony export */   "ChangeType": () => (/* binding */ ChangeType),
/* harmony export */   "DataTransformationInfo": () => (/* binding */ DataTransformationInfo),
/* harmony export */   "DontCodeChangeManager": () => (/* binding */ DontCodeChangeManager),
/* harmony export */   "DontCodeCore": () => (/* binding */ DontCodeCore),
/* harmony export */   "DontCodeGroupOperationType": () => (/* binding */ DontCodeGroupOperationType),
/* harmony export */   "DontCodeModel": () => (/* binding */ DontCodeModel),
/* harmony export */   "DontCodeModelManager": () => (/* binding */ DontCodeModelManager),
/* harmony export */   "DontCodeModelPointer": () => (/* binding */ DontCodeModelPointer),
/* harmony export */   "DontCodePluginManager": () => (/* binding */ DontCodePluginManager),
/* harmony export */   "DontCodePreviewManager": () => (/* binding */ DontCodePreviewManager),
/* harmony export */   "DontCodeProject": () => (/* binding */ DontCodeProject),
/* harmony export */   "DontCodeReportGroupShowType": () => (/* binding */ DontCodeReportGroupShowType),
/* harmony export */   "DontCodeSchema": () => (/* binding */ DontCodeSchema),
/* harmony export */   "DontCodeSchemaEnum": () => (/* binding */ DontCodeSchemaEnum),
/* harmony export */   "DontCodeSchemaEnumValue": () => (/* binding */ DontCodeSchemaEnumValue),
/* harmony export */   "DontCodeSchemaManager": () => (/* binding */ DontCodeSchemaManager),
/* harmony export */   "DontCodeSchemaObject": () => (/* binding */ DontCodeSchemaObject),
/* harmony export */   "DontCodeSchemaProperty": () => (/* binding */ DontCodeSchemaProperty),
/* harmony export */   "DontCodeSchemaRef": () => (/* binding */ DontCodeSchemaRef),
/* harmony export */   "DontCodeSchemaRoot": () => (/* binding */ DontCodeSchemaRoot),
/* harmony export */   "DontCodeSchemaValue": () => (/* binding */ DontCodeSchemaValue),
/* harmony export */   "DontCodeSortDirectionType": () => (/* binding */ DontCodeSortDirectionType),
/* harmony export */   "DontCodeStoreAggregate": () => (/* binding */ DontCodeStoreAggregate),
/* harmony export */   "DontCodeStoreCriteria": () => (/* binding */ DontCodeStoreCriteria),
/* harmony export */   "DontCodeStoreCriteriaOperator": () => (/* binding */ DontCodeStoreCriteriaOperator),
/* harmony export */   "DontCodeStoreGroupby": () => (/* binding */ DontCodeStoreGroupby),
/* harmony export */   "DontCodeStoreGroupedByEntities": () => (/* binding */ DontCodeStoreGroupedByEntities),
/* harmony export */   "DontCodeStoreGroupedByValues": () => (/* binding */ DontCodeStoreGroupedByValues),
/* harmony export */   "DontCodeStoreManager": () => (/* binding */ DontCodeStoreManager),
/* harmony export */   "DontCodeStorePreparedEntities": () => (/* binding */ DontCodeStorePreparedEntities),
/* harmony export */   "DontCodeStoreSort": () => (/* binding */ DontCodeStoreSort),
/* harmony export */   "DontCodeTestManager": () => (/* binding */ DontCodeTestManager),
/* harmony export */   "Message": () => (/* binding */ Message),
/* harmony export */   "MessageType": () => (/* binding */ MessageType),
/* harmony export */   "ModelQuerySingleResult": () => (/* binding */ ModelQuerySingleResult),
/* harmony export */   "MoneyAmount": () => (/* binding */ MoneyAmount),
/* harmony export */   "SpecialFields": () => (/* binding */ SpecialFields),
/* harmony export */   "StoreProviderHelper": () => (/* binding */ StoreProviderHelper),
/* harmony export */   "TestProviderInterface": () => (/* binding */ TestProviderInterface),
/* harmony export */   "concatIterable": () => (/* binding */ concatIterable),
/* harmony export */   "dtcde": () => (/* binding */ dtcde)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ 9615);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ 297);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ 1527);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ 3373);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ 690);
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.ends-with.js */ 6890);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 5527);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 8837);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 1382);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 224);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 1211);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 1579);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 7679);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 787);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 2954);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 8271);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ 9803);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ 6594);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ 2879);
/* harmony import */ var jsonpath_plus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jsonpath-plus */ 5178);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.promise.js */ 7618);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ 170);













class AbstractSchemaItem {
  constructor(parent, relativeId) {
    this.array = false;
    this.readOnly = false;
    this.hidden = false;
    this.parent = parent;
    this.relativeId = relativeId;
  }
  isArray() {
    return this.array;
  }
  setArray(val) {
    this.array = val;
  }
  isEnum() {
    return false;
  }
  isObject() {
    return false;
  }
  isReference() {
    return false;
  }
  isValue() {
    return false;
  }
  isRoot() {
    return false;
  }
  isHidden() {
    return this.hidden;
  }
  setHidden(val) {
    this.hidden = val;
  }
  isReadonly() {
    return this.readOnly;
  }
  setReadonly(val) {
    this.readOnly = val;
  }
  static generateItem(json, itemId, parent) {
    let isArray = Array.isArray(json);
    if (isArray) {
      console.error('arrays are not supported', json);
      return json;
    }
    let ret;
    isArray = false;
    if (json['type']) {
      const type = json['type'];
      switch (type) {
        case 'object':
          ret = new DontCodeSchemaObject(json, itemId, parent);
          break;
        case 'array':
          ret = this.generateItem(json['items'], itemId, parent);
          isArray = true;
          break;
        default:
          ret = new DontCodeSchemaValue(json, itemId, parent);
      }
    } else if (json['enum']) {
      ret = new DontCodeSchemaEnum(json, itemId, parent);
    } else if (json['$ref']) {
      ret = new DontCodeSchemaRef(json, itemId, parent);
    } else {
      return json;
    }
    if (json['readOnly'] === true) ret.setReadonly(true);
    if (json['writeOnly'] === true) ret.setHidden(true);
    ret.setArray(isArray);
    return ret;
  }
  static isObject(item) {
    return typeof item === 'object' && !Array.isArray(item) && item !== null;
  }
  static goto(entity, to) {
    let ret = entity;
    to.split('/').forEach(value => {
      if (value !== '#' && value != '') {
        ret = ret === null || ret === void 0 ? void 0 : ret.getChild(value);
      }
      if (!ret) {
        console.error('Cannot find ' + value + ' of ' + to + ' in the following item ', entity);
      }
    });
    return ret;
  }
  upsertWith(change) {
    return false;
  }
  getParent() {
    return this.parent;
  }
  getChild(id) {
    return;
  }
  getChildren() {
    return new Map().entries();
  }
  updateWith(update) {
    //
  }
  allProperties() {
    return [].values();
  }
  getProperties(code) {
    return undefined;
  }
  hasProperties(code) {
    return false;
  }
  getRelativeId() {
    return this.relativeId;
  }
  setRelativeId(relativeId) {
    this.relativeId = relativeId;
  }
  getTargetPath() {
    return this.targetPath;
  }
  setTargetPath(newPath) {
    this.targetPath = newPath;
  }
  isPossibleDynamicProperty(code) {
    const children = this.getChildren();
    for (const child of children) {
      const childProps = child[1].allProperties();
      for (const childProp of childProps) {
        if (childProp[1].getChild(code)) {
          return childProp[1];
        }
      }
    }
    return undefined;
  }
  /**
   * Returns all properties that can be used by this SchemaItem depending on the values entered
   */
  getAllPossibleDynamicProperties() {
    const children = this.getChildren();
    const ret = new Map();
    for (const child of children) {
      const childProps = child[1].allProperties();
      for (const childProp of childProps) {
        for (const childChildProp of childProp[1].getChildren()) {
          if (ret.has(childChildProp[0])) {
            console.warn("Dynamic Property " + childChildProp[0] + " is being defined by multiple children.");
          }
          ret.set(childChildProp[0], childChildProp[1]);
        }
      }
    }
    return ret.entries();
  }
  /**
   * Returns the list of children and all possible dynamic properties that can be created depending on the values entered
   */
  getChildrenAndPossibleProperties() {
    return concatIterable(this.getChildren(), this.getAllPossibleDynamicProperties());
  }
}
/**
 * Generator function to combine multiple iterators into one
 * @param iterators
 */
function* concatIterable(...iterators) {
  for (let i of iterators) {
    i = i[Symbol.iterator]();
    let f;
    while (true) {
      f = i.next();
      if (f.done) {
        break;
      }
      yield f.value;
    }
  }
}
/**
 * Handles an item defined as an object consisting of a name and a set of named children
 */
class DontCodeSchemaObject extends AbstractSchemaItem {
  constructor(json, relativeId, parent) {
    super(parent, relativeId);
    this.children = new Map();
    if (json) this.readJson(json);
  }
  readJson(json) {
    const props = json['properties'];
    if (props) {
      for (const key in props) {
        this.children.set(key, AbstractSchemaItem.generateItem(props[key], key, this));
      }
    }
    /*const definitions =json['$defs'];
    if( definitions) {
      const defsItem=AbstractSchemaItem.generateItem(definitions, '$defs', this);
      this.children.set('$defs', defsItem);
    }*/
  }
  isEnum() {
    return false;
  }
  isObject() {
    return true;
  }
  isReference() {
    return false;
  }
  isValue() {
    return false;
  }
  isRoot() {
    return false;
  }
  upsertWith(change) {
    const existsOrNot = this.getChild(change.location.id);
    if (!existsOrNot) {
      if (change.location.id != null) {
        const exists = AbstractSchemaItem.generateItem(change.update, change.location.id, this);
        if (change.location.after) {
          const newMap = new Map();
          this.children.forEach((value, key) => {
            newMap.set(key, value);
            if (key === change.location.after && change.location.id != null) {
              newMap.set(change.location.id, exists);
            }
          });
          this.children = newMap;
        } else {
          this.children.set(change.location.id, exists);
        }
        exists.updateWith(change);
      }
    } else {
      // Make sure to load the sub-properties
      existsOrNot.updateWith(change);
    }
    return true;
  }
  updateWith(update) {
    super.updateWith(update);
  }
  getChild(id) {
    if (id) return this.children.get(id);else return;
  }
  getChildren() {
    return this.children.entries();
  }
}
/**
 * The root item of the model is a specialized object
 */
class DontCodeSchemaRoot extends DontCodeSchemaObject {
  constructor(json) {
    super(json, undefined);
  }
  readJson(json) {
    super.readJson(json);
    // Let the base class believe it's a property and do all the work !
    const $defs = json['$defs'];
    if ($defs) {
      this.children.set('$defs', new DontCodeSchemaObject({
        properties: $defs
      }, '$defs', this));
    }
  }
  isEnum() {
    return false;
  }
  isObject() {
    return true;
  }
  isReference() {
    return false;
  }
  isValue() {
    return false;
  }
  isRoot() {
    return true;
  }
}
/**
 * Supports selection of a value amongst a list (or a hierarchical tree)
 */
class DontCodeSchemaEnum extends AbstractSchemaItem {
  constructor(json, relativeId, parent) {
    super(parent, relativeId);
    this.values = new Array();
    this.properties = new Map();
    this.updateValues(json['enum'], this.values);
    this.targetPath = json['format'];
  }
  isEnum() {
    return true;
  }
  isObject() {
    return false;
  }
  isReference() {
    return false;
  }
  isValue() {
    return false;
  }
  isRoot() {
    return false;
  }
  getValues() {
    return this.values;
  }
  updateWith(update) {
    super.updateWith(update);
    this.updateValues(update.update['enum'], this.values, update);
  }
  updateValues(values, destination, from) {
    values.forEach(value => {
      if (typeof value === 'string') {
        if (!destination.find(dest => {
          return dest.getValue() === value;
        })) {
          destination.push(new DontCodeSchemaEnumValue(value));
        }
        if (from === null || from === void 0 ? void 0 : from.props) {
          const props = new DontCodeSchemaProperty(from, this.relativeId + '=' + value, this);
          if (!props.isEmpty()) this.properties.set(value, props);
        }
      } else {
        for (const subKey in value) {
          if (value.hasOwnProperty(subKey)) {
            let enumValue = destination.find(dest => {
              return dest.getValue() === value;
            });
            if (!enumValue) {
              enumValue = new DontCodeSchemaEnumValue(subKey);
              destination.push(enumValue);
            }
            if (!enumValue.getChildren()) enumValue.setChildren([]);
            this.updateValues(value[subKey].enum, enumValue.getChildren(), from);
          }
        }
      }
    });
  }
  allProperties() {
    return this.properties.entries();
  }
  getProperties(code) {
    return this.properties.get(code);
  }
  hasProperties(code) {
    return this.properties.has(code);
  }
}
/**
 * A Simple class to store possible hierarchies of values, and separate label from the model value
 */
class DontCodeSchemaEnumValue {
  constructor(value, label) {
    this._children = new Array();
    this._value = value;
    if (label) {
      this._label = label;
    } else {
      this._label = value;
    }
  }
  getLabel() {
    if (this._label) return this._label;else return this._value;
  }
  setLabel(value) {
    this._label = value;
  }
  getValue() {
    return this._value;
  }
  setValue(value) {
    this._value = value;
  }
  getChildren() {
    return this._children;
  }
  setChildren(value) {
    this._children = value;
  }
}
/**
 * The model item is just a value that the user can change
 */
class DontCodeSchemaValue extends AbstractSchemaItem {
  constructor(json, relativeId, parent) {
    super(parent, relativeId);
    this.type = json['type'];
    this.targetPath = json['format'];
  }
  isValue() {
    return true;
  }
  getType() {
    return this.type;
  }
}
/**
 * This item is a reference (in json-schema term) to a definition elsewhere in the schema.
 */
class DontCodeSchemaRef extends AbstractSchemaItem {
  constructor(json, relativeId, parent) {
    super(parent, relativeId);
    this.resolvedRef = new Map();
    this.ref = json['$ref'];
  }
  isReference() {
    return true;
  }
  getReference() {
    return this.ref;
  }
  resolveReference(resolved) {
    this.resolvedRef.set('', resolved);
  }
  getChildren() {
    return this.resolvedRef.entries();
  }
}
/**
 * An Object Item in the schema can define alternative subproperties that are used depending on some values.
 */
class DontCodeSchemaProperty extends DontCodeSchemaObject {
  constructor(json, relativeId, parent) {
    super({
      type: 'object',
      properties: json.props
    }, relativeId, parent);
    if (json.replace) {
      this.replace = json.replace;
    } else {
      this.replace = false;
    }
    this.posAfter = json.location.after;
  }
  isEmpty() {
    return this.children.size == 0;
  }
  isReplace() {
    return this.replace;
  }
  getPosAfter() {
    return this.posAfter;
  }
}
class DontCodeModel {}
DontCodeModel.ROOT = 'creation';
DontCodeModel.APP_NAME_NODE = 'name';
DontCodeModel.APP_TYPE_NODE = 'type';
DontCodeModel.APP_TYPE = DontCodeModel.ROOT + '/' + DontCodeModel.APP_TYPE_NODE;
DontCodeModel.APP_NAME = DontCodeModel.ROOT + '/' + DontCodeModel.APP_NAME_NODE;
DontCodeModel.APP_ENTITIES_NODE = 'entities';
DontCodeModel.APP_ENTITIES = DontCodeModel.ROOT + '/' + DontCodeModel.APP_ENTITIES_NODE;
DontCodeModel.APP_ENTITIES_FROM_NODE = 'from';
DontCodeModel.APP_ENTITIES_FROM = DontCodeModel.APP_ENTITIES + '/' + DontCodeModel.APP_ENTITIES_FROM_NODE;
DontCodeModel.APP_ENTITIES_NAME_NODE = 'name';
DontCodeModel.APP_ENTITIES_NAME = DontCodeModel.APP_ENTITIES + '/' + DontCodeModel.APP_ENTITIES_NAME_NODE;
DontCodeModel.APP_FIELDS_NODE = 'fields';
DontCodeModel.APP_FIELDS = DontCodeModel.APP_ENTITIES + '/' + DontCodeModel.APP_FIELDS_NODE;
DontCodeModel.APP_FIELDS_NAME_NODE = 'name';
DontCodeModel.APP_FIELDS_NAME = DontCodeModel.APP_FIELDS + '/' + DontCodeModel.APP_FIELDS_NAME_NODE;
DontCodeModel.APP_FIELDS_TYPE_NODE = 'type';
DontCodeModel.APP_FIELDS_TYPE = DontCodeModel.APP_FIELDS + '/' + DontCodeModel.APP_FIELDS_TYPE_NODE;
DontCodeModel.APP_SHARING_NODE = 'sharing';
DontCodeModel.APP_SHARING = DontCodeModel.ROOT + '/' + DontCodeModel.APP_SHARING_NODE;
DontCodeModel.APP_SHARING_WITH_NODE = 'with';
DontCodeModel.APP_SHARING_WITH = DontCodeModel.APP_SHARING + '/' + DontCodeModel.APP_SHARING_WITH_NODE;
DontCodeModel.APP_REPORTS_NODE = 'reports';
DontCodeModel.APP_REPORTS = DontCodeModel.ROOT + '/' + DontCodeModel.APP_REPORTS_NODE;
DontCodeModel.APP_REPORTS_TITLE_NODE = 'title';
DontCodeModel.APP_REPORTS_TITLE = DontCodeModel.APP_REPORTS + '/' + DontCodeModel.APP_REPORTS_TITLE_NODE;
DontCodeModel.APP_REPORTS_FOR_NODE = 'for';
DontCodeModel.APP_REPORTS_FOR = DontCodeModel.APP_REPORTS + '/' + DontCodeModel.APP_REPORTS_FOR_NODE;
DontCodeModel.APP_REPORTS_GROUP_NODE = 'groupedBy';
DontCodeModel.APP_REPORTS_GROUP = DontCodeModel.APP_REPORTS + '/' + DontCodeModel.APP_REPORTS_GROUP_NODE;
DontCodeModel.APP_REPORTS_SORT_NODE = 'sortedBy';
DontCodeModel.APP_REPORTS_SORT = DontCodeModel.APP_REPORTS + '/' + DontCodeModel.APP_REPORTS_SORT_NODE;
DontCodeModel.APP_REPORTS_DISPLAY_NODE = 'as';
DontCodeModel.APP_REPORTS_DISPLAY = DontCodeModel.APP_REPORTS + '/' + DontCodeModel.APP_REPORTS_DISPLAY_NODE;
DontCodeModel.APP_REPORTS_GROUP_LABEL_NODE = 'label';
DontCodeModel.APP_REPORTS_GROUP_LABEL = DontCodeModel.APP_REPORTS_GROUP + '/' + DontCodeModel.APP_REPORTS_GROUP_LABEL_NODE;
DontCodeModel.APP_REPORTS_GROUP_OF_NODE = 'of';
DontCodeModel.APP_REPORTS_GROUP_OF = DontCodeModel.APP_REPORTS_GROUP + '/' + DontCodeModel.APP_REPORTS_GROUP_OF_NODE;
DontCodeModel.APP_REPORTS_GROUP_SHOW_NODE = 'show';
DontCodeModel.APP_REPORTS_GROUP_SHOW = DontCodeModel.APP_REPORTS_GROUP + '/' + DontCodeModel.APP_REPORTS_GROUP_SHOW_NODE;
DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_NODE = 'display';
DontCodeModel.APP_REPORTS_GROUP_AGGREGATE = DontCodeModel.APP_REPORTS_GROUP + '/' + DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_NODE;
DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_LABEL_NODE = 'label';
DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_LABEL = DontCodeModel.APP_REPORTS_GROUP_AGGREGATE + '/' + DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_LABEL_NODE;
DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_OPERATION_NODE = 'operation';
DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_OPERATION = DontCodeModel.APP_REPORTS_GROUP_AGGREGATE + '/' + DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_OPERATION_NODE;
DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_OF_NODE = 'of';
DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_OF = DontCodeModel.APP_REPORTS_GROUP_AGGREGATE + '/' + DontCodeModel.APP_REPORTS_GROUP_AGGREGATE_OF_NODE;
DontCodeModel.APP_REPORTS_SORT_BY_NODE = 'by';
DontCodeModel.APP_REPORTS_SORT_BY = DontCodeModel.APP_REPORTS_SORT + '/' + DontCodeModel.APP_REPORTS_SORT_BY_NODE;
DontCodeModel.APP_REPORTS_SORT_DIRECTION_NODE = 'direction';
DontCodeModel.APP_REPORTS_SORT_DIRECTION = DontCodeModel.APP_REPORTS_SORT + '/' + DontCodeModel.APP_REPORTS_SORT_DIRECTION_NODE;
DontCodeModel.APP_REPORTS_DISPLAY_TITLE_NODE = 'title';
DontCodeModel.APP_REPORTS_DISPLAY_TITLE = DontCodeModel.APP_REPORTS_DISPLAY + '/' + DontCodeModel.APP_REPORTS_DISPLAY_TITLE_NODE;
DontCodeModel.APP_REPORTS_DISPLAY_TYPE_NODE = 'type';
DontCodeModel.APP_REPORTS_DISPLAY_TYPE = DontCodeModel.APP_REPORTS_DISPLAY + '/' + DontCodeModel.APP_REPORTS_DISPLAY_TYPE_NODE;
DontCodeModel.APP_REPORTS_DISPLAY_OF_NODE = 'of';
DontCodeModel.APP_REPORTS_DISPLAY_OF = DontCodeModel.APP_REPORTS_DISPLAY + '/' + DontCodeModel.APP_REPORTS_DISPLAY_OF_NODE;
DontCodeModel.APP_REPORTS_DISPLAY_BY_NODE = 'by';
DontCodeModel.APP_REPORTS_DISPLAY_BY = DontCodeModel.APP_REPORTS_DISPLAY + '/' + DontCodeModel.APP_REPORTS_DISPLAY_BY_NODE;
DontCodeModel.APP_SOURCES_NODE = 'sources';
DontCodeModel.APP_SOURCES = DontCodeModel.ROOT + '/' + DontCodeModel.APP_SOURCES_NODE;
DontCodeModel.APP_SOURCES_NAME_NODE = 'name';
DontCodeModel.APP_SOURCES_NAME = DontCodeModel.ROOT + '/' + DontCodeModel.APP_SOURCES_NODE + '/' + DontCodeModel.APP_SOURCES_NAME_NODE;
DontCodeModel.APP_SOURCES_TYPE_NODE = 'type';
DontCodeModel.APP_SOURCES_TYPE = DontCodeModel.ROOT + '/' + DontCodeModel.APP_SOURCES_NODE + '/' + DontCodeModel.APP_SOURCES_TYPE_NODE;
DontCodeModel.APP_SOURCES_URL_NODE = 'url';
DontCodeModel.APP_SOURCES_URL = DontCodeModel.ROOT + '/' + DontCodeModel.APP_SOURCES_NODE + '/' + DontCodeModel.APP_SOURCES_URL_NODE;
DontCodeModel.APP_SCREENS_NODE = 'screens';
DontCodeModel.APP_SCREENS = DontCodeModel.ROOT + '/' + DontCodeModel.APP_SCREENS_NODE;
DontCodeModel.APP_SCREENS_NAME_NODE = 'name';
DontCodeModel.APP_SCREENS_NAME = DontCodeModel.APP_SCREENS + '/' + DontCodeModel.APP_SCREENS_NAME_NODE;
DontCodeModel.APP_SCREENS_LAYOUT_NODE = 'layout';
DontCodeModel.APP_SCREENS_LAYOUT = DontCodeModel.APP_SCREENS + '/' + DontCodeModel.APP_SCREENS_LAYOUT_NODE;
DontCodeModel.APP_COMPONENTS_NODE = 'components';
DontCodeModel.APP_COMPONENTS = DontCodeModel.APP_SCREENS + '/' + DontCodeModel.APP_COMPONENTS_NODE;
DontCodeModel.APP_COMPONENTS_TYPE_NODE = 'type';
DontCodeModel.APP_COMPONENTS_TYPE = DontCodeModel.APP_COMPONENTS + '/' + DontCodeModel.APP_COMPONENTS_TYPE_NODE;
DontCodeModel.APP_COMPONENTS_ENTITY_NODE = 'entity';
DontCodeModel.APP_COMPONENTS_ENTITY = DontCodeModel.APP_COMPONENTS + '/' + DontCodeModel.APP_COMPONENTS_ENTITY_NODE;
class DontCodeSchema {}
DontCodeSchema.ROOT = '/properties/' + DontCodeModel.ROOT;
/**
 * This is a copy of dont-code-schema.json, please don't forget to update
 */
DontCodeSchema.defaultv1 = {
  "$id": "https://dont-code.net/v1/dont-code-schema.json",
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "description": "JSON Schema v1 for dont-code",
  "type": "object",
  "required": ["creation"],
  "properties": {
    "creation": {
      "type": "object",
      "properties": {
        "type": {
          "enum": ["Application"]
        },
        "name": {
          "type": "string"
        },
        "entities": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/entity"
          }
        },
        "sharing": {
          "$ref": "#/$defs/sharing"
        },
        "reports": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/report"
          }
        },
        "sources": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/source"
          }
        },
        "screens": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/screen"
          }
        }
      },
      "additionalProperties": false
    }
  },
  "$defs": {
    "entity": {
      "type": "object",
      "properties": {
        "from": {
          "type": "string",
          "format": "$.creation.sources.name"
        },
        "name": {
          "type": "string"
        },
        "fields": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/field"
          }
        }
      },
      "additionalProperties": false
    },
    "field": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "type": {
          "enum": ["Text", "Number", "Boolean", {
            "Time": {
              "enum": ["Date", "Date & Time", "Time"]
            }
          }, {
            "Money": {
              "enum": ["Dollar", "Euro", "Other currency"]
            },
            "Web": {
              "enum": ["Website (url)", "Image"]
            }
          }, {
            "Special": {
              "enum": ["Reference"]
            }
          }]
        }
      },
      "additionalProperties": false
    },
    "sharing": {
      "type": "object",
      "properties": {
        "with": {
          "enum": ["No-one"]
        }
      },
      "additionalProperties": false
    },
    "source": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "type": {
          "enum": ["Unknown"]
        }
      }
    },
    "report": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "for": {
          "type": "string",
          "format": "$.creation.entities.name"
        },
        "groupedBy": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/report-group"
          }
        },
        "sortedBy": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/report-sort"
          }
        },
        "as": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/report-display"
          }
        }
      },
      "additionalProperties": false
    },
    "report-group": {
      "type": "object",
      "properties": {
        "of": {
          "type": "string",
          "format": ".fields.name"
        },
        "label": {
          "type": "string"
        },
        "show": {
          "enum": ["OnlyLowest", "OnlyHighest"]
        },
        "display": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/report-group-aggregate"
          }
        }
      },
      "additionalProperties": false
    },
    "report-group-aggregate": {
      "type": "object",
      "properties": {
        "operation": {
          "enum": ["Count", "Sum", "Average", "Minimum", "Maximum"]
        },
        "of": {
          "type": "string",
          "format": ".@parent.fields.name"
        },
        "label": {
          "type": "string"
        }
      },
      "additionalProperties": false
    },
    "report-sort": {
      "type": "object",
      "properties": {
        "by": {
          "type": "string",
          "format": ".fields.name"
        },
        "direction": {
          "enum": ["None", "Ascending", "Descending"]
        }
      },
      "additionalProperties": false
    },
    "report-display": {
      "type": "object",
      "properties": {
        "type": {
          "enum": ["Table", "Bar", "Line", "Pie"]
        },
        "of": {
          "type": "string",
          "format": ".@parent.fields.name"
        },
        "by": {
          "type": "string",
          "format": ".@parent.fields.name"
        },
        "title": {
          "type": "string"
        }
      },
      "additionalProperties": false
    },
    "screen": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "layout": {
          "enum": ["Flow", "Grid"]
        },
        "components": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/component"
          }
        }
      },
      "additionalProperties": false
    },
    "component": {
      "type": "object",
      "properties": {
        "type": {
          "enum": ["List", "Edit", "View"]
        },
        "entity": {
          "type": "string",
          "format": "$.creation.entities.name"
        }
      },
      "additionalProperties": false
    }
  }
};
/**
* Store all information needed to point to a single element in a model.
*/
class DontCodeModelPointer {
  constructor(position, schemaPosition, containerPosition, containerSchemaPosition, lastElement, isProperty) {
    this.position = position;
    this.positionInSchema = schemaPosition;
    this.containerPosition = containerPosition;
    this.containerPositionInSchema = containerSchemaPosition;
    if (lastElement) this.lastElement = lastElement;else this.lastElement = '';
    this.isProperty = isProperty;
    this.fillMissingElements();
  }
  fillMissingElements(optionalSchemaMgr) {
    var _a, _b, _c;
    if (this.position == null || this.positionInSchema == null) {
      throw new Error('Cannot fill Elements for an empty position');
    }
    if (this.containerPosition == null) {
      this.containerPosition = (_a = DontCodeModelPointer.parentPosition(this.position)) !== null && _a !== void 0 ? _a : undefined;
    }
    if (this.containerPositionInSchema == null) {
      this.containerPositionInSchema = (_b = DontCodeModelPointer.parentPosition(this.positionInSchema)) !== null && _b !== void 0 ? _b : undefined;
    }
    if (this.lastElement == null || this.lastElement.length == 0) {
      this.lastElement = (_c = DontCodeModelPointer.lastElementOf(this.position)) !== null && _c !== void 0 ? _c : this.position;
    }
    if (this.isProperty == null && optionalSchemaMgr) {
      if (this.containerPositionInSchema) this.isProperty = optionalSchemaMgr.locateItem(this.containerPositionInSchema, true).getChild(this.lastElement) != null;else this.isProperty = true; // We only have properties at root level
    }
  }
  /**
   * Finds the last element of this position
   * @param position
   */
  static lastElementOf(position) {
    if (position == null) return position;
    return position.substring(position.lastIndexOf('/') + 1);
  }
  /**
   * Finds the next item in the position and returns its value and position in the string
   * @param position
   * @param from
   */
  static nextItemAndPosition(position, from) {
    let posSlash = position.indexOf('/', from);
    if (posSlash === from) {
      from = from + 1;
      posSlash = position.indexOf('/', from);
    }
    if (posSlash !== -1) posSlash = posSlash - 1;else {
      if (posSlash === from) {
        posSlash = -1;
      } else {
        posSlash = position.length - 1;
      }
    }
    let value = null;
    if (posSlash !== -1) value = position.substring(from, posSlash + 1);
    return {
      pos: posSlash,
      value: value
    };
  }
  /**
   * Find the name of the last element pointed by this pointer
   * Usually it's the value of key (if it's a field) or the last container name (if it's an element in a container like entity/a/fields/a)
   * @deprecated
   */
  calculateKeyOrContainer() {
    var _a;
    if (this.isProperty === true) {
      return this.lastElement;
    } else {
      return (_a = DontCodeModelPointer.lastElementOf(this.containerPosition)) !== null && _a !== void 0 ? _a : '';
    }
  }
  /**
   * Find the ItemId or container key represented by the pointer
   * Usually it's the id of the item (if it's an element in a container like entity/a/fields/a) or the last container name
   * @Deprecated
   */
  calculateItemIdOrContainer() {
    var _a;
    if (this.isProperty === false) {
      return this.lastElement;
    } else {
      return (_a = DontCodeModelPointer.lastElementOf(this.containerPosition)) !== null && _a !== void 0 ? _a : '';
    }
  }
  /**
   * If this pointer is pointing to a direct property of the given pointer, then it returns the property's name, otherwise null
   * @param pointer
   * @return the property name or null
   */
  isSubItemOf(pointer) {
    if (pointer.position === this.containerPosition) {
      return this.lastElement;
    } else return null;
  }
  /**
   * Returns the direct property's name under which this pointer points to, even if it's pointing to sub properties of the direct property.
   * @param pointer
   * @return the property name or null
   */
  isUnderSubItemOf(pointer) {
    if (this.positionInSchema.startsWith(pointer.positionInSchema)) {
      const keyPos = this.positionInSchema.indexOf('/', pointer.positionInSchema.length + 1);
      if (keyPos == -1) return this.positionInSchema.substring(pointer.positionInSchema.length + 1);else return this.positionInSchema.substring(pointer.positionInSchema.length + 1, keyPos);
    } else return null;
  }
  /**
   * Returns a pointer pointing to a sub Item of the current pointer.
   * The current pointer must point to an array
   * @param subItem
   */
  subItemOrPropertyPointer(subElement, isItem) {
    if (isItem) return this.subPropertyPointer(subElement);else return this.subItemPointer(subElement);
  }
  /**
   * Returns a pointer pointing to a sub property of the current pointer
   * @param subProp
   */
  subPropertyPointer(subProp) {
    const newPointer = new DontCodeModelPointer(this.position === '' ? subProp : this.position + '/' + subProp, this.positionInSchema === '' ? subProp : this.positionInSchema + '/' + subProp, this.position, this.positionInSchema, subProp, true);
    return newPointer;
  }
  /**
   * Returns a pointer pointing to a sub Item of the current pointer.
   * The current pointer must point to an array
   * @param subItem
   */
  subItemPointer(subItem) {
    const newPointer = new DontCodeModelPointer(this.position === '' ? subItem : this.position + '/' + subItem, this.positionInSchema, this.position, this.containerPositionInSchema, subItem, false);
    return newPointer;
  }
  /**
   * Returns the parent pointer or an exception if it's the root
   * @param subItem
   */
  safeParentPointer(optionalSchemaMgr) {
    const ret = this.parentPointer(optionalSchemaMgr);
    if (ret === undefined) throw new Error("No parent position for pointer " + this.position);
    return ret;
  }
  /**
   * Returns the parent pointer or undefined if it's the root
   * @param subItem
   */
  parentPointer(optionalSchemaMgr) {
    if (this.containerPosition == null || this.containerPositionInSchema == null) return undefined;
    const newPointer = new DontCodeModelPointer(this.containerPosition, this.containerPositionInSchema);
    if (optionalSchemaMgr != null) {
      newPointer.fillMissingElements(optionalSchemaMgr);
    }
    return newPointer;
  }
  /**
   * Returns true if the pointer is the parent of the position.
   * @param position
   * @param directOnly: if true, only returns true if it's a direct parent
   */
  isParentOf(position, directOnly) {
    if (directOnly === true) {
      const parent = DontCodeModelPointer.parentPosition(position);
      if (parent == null) {
        return false;
      } else {
        return this.position == parent;
      }
    } else {
      return position.startsWith(this.position);
    }
  }
  /**
  * Safely returns the parent position
  * @param position
  */
  static parentPosition(position) {
    if (position == null || position.length === 0) return null;
    const lastSlash = position.lastIndexOf('/');
    if (lastSlash == -1) return '';else {
      return position.substring(0, lastSlash);
    }
  }
  /**
   * Safely splits between the parent position and last element
   * @param position
   */
  static splitPosition(position) {
    if (position == null || position.length === 0) return null;
    const lastSlash = position.lastIndexOf('/');
    if (lastSlash == -1) return {
      parent: '',
      element: position
    };else {
      return {
        parent: position.substring(0, lastSlash),
        element: position.substring(lastSlash + 1)
      };
    }
  }
}

/**
 * Manages the schema used to describe an application in Dont-code.
 * A schema is provided by default, but can be updated by plugins.
 * That means plugins can add or modify new fields or entities thus changing the way applications are edited and described.
 */
class DontCodeSchemaManager {
  constructor() {
    this.reset();
  }
  /**
   * Returns the current schema
   */
  getSchema() {
    return this.currentSchema;
  }
  convertSchemaToMap(readSchema) {
    return new DontCodeSchemaRoot(readSchema);
  }
  registerChanges(config) {
    config.plugin.id + '-v' + config.plugin.version;
    if (config['schema-updates']) {
      const updates = config['schema-updates'];
      for (const update of updates) {
        const changes = update.changes;
        for (const change of changes) {
          if (change.location.id) {
            const parent = this.locateItem(change.location.parent);
            if (parent) {
              parent.upsertWith(change);
            } else {
              throw 'Cannot find parent element: ' + change.location.parent;
            }
          }
        }
      }
    }
  }
  /**
   * Locate an item from it's position in the model
   * @param schemaPosition
   * @param resolveReference true to resolve the last reference instead of returning a @DontCodeSchemaRef
   */
  locateItem(schemaPosition, resolveReference) {
    const split = schemaPosition.split('/');
    let cur = this.currentSchema;
    for (const value of split) {
      if (!cur) {
        console.error('Could not find subItem ' + value + ' of ' + schemaPosition);
        throw new Error('Could not find subItem ' + value + ' of ' + schemaPosition);
      }
      if (value && value.length > 0 && value !== '#') {
        if (cur.isReference()) cur = this.resolveReference(cur);
        if (!cur) {
          console.error('Could not find reference ' + (cur === null || cur === void 0 ? void 0 : cur.getReference()) + ' of ' + schemaPosition);
          throw new Error('Could not find reference ' + (cur === null || cur === void 0 ? void 0 : cur.getReference()) + ' of ' + schemaPosition);
        }
        cur = cur.getChild(value);
      }
    }
    if (resolveReference && (cur === null || cur === void 0 ? void 0 : cur.isReference())) {
      cur = this.resolveReference(cur);
    }
    if (cur != null) return cur;else {
      throw new Error('Could not find item at schema position ' + schemaPosition);
    }
  }
  resolveReference(ref) {
    return this.locateItem(ref.getReference());
  }
  generateParentPointer(pointer) {
    if (pointer.containerPosition != null) return this.generateSchemaPointer(pointer.containerPosition);
    return;
  }
  /**
   * Generates a new and complete DontCodeModelPointer from the specified position
   * @param queriedPosition
   */
  generateSchemaPointer(queriedPosition) {
    var _a;
    let ret;
    const position = queriedPosition;
    const posElems = position.split('/');
    if (posElems.length === 0 || posElems[0].length === 0) {
      // Managing the special case of asking for root
      ret = new DontCodeModelPointer(queriedPosition, queriedPosition);
      return ret;
    } else {
      ret = new DontCodeModelPointer(queriedPosition, '');
    }
    let parentItem = this.currentSchema;
    let ignoreNext = false;
    for (const element of posElems) {
      if (!ignoreNext) {
        let nextItem = (_a = parentItem.getChild(element)) !== null && _a !== void 0 ? _a : parentItem.isPossibleDynamicProperty(element);
        if (nextItem) {
          ret.isProperty = true;
          ret.containerPositionInSchema = ret.positionInSchema;
          if (ret.positionInSchema !== null && ret.positionInSchema.length > 0) ret.positionInSchema = ret.positionInSchema + '/' + element;else ret.positionInSchema = element;
          if (nextItem.isArray()) {
            ignoreNext = true;
          } else {
            ignoreNext = false;
          }
          if (nextItem.isReference()) nextItem = this.resolveReference(nextItem);
          if (nextItem == null) {
            // Cannot find the next item in the schema: Error in the url
            throw new Error("Cannot parse '" + position + "' from the schema as " + nextItem + ' is reference an unknown element');
          }
          parentItem = nextItem;
        } else {
          // Cannot find the next item in the schema: Error in the url
          throw new Error("Cannot parse '" + position + "' from the schema as " + element + ' is not a child of ' + parentItem.getRelativeId());
        }
      } else {
        ret.isProperty = false;
        ignoreNext = false;
      }
    }
    ret.containerPositionInSchema = ret.positionInSchema.substring(0, ret.positionInSchema.lastIndexOf('/'));
    ret.containerPosition = ret.position.substring(0, ret.position.lastIndexOf('/'));
    ret.lastElement = posElems[posElems.length - 1];
    return ret;
  }
  /**
   * Returns the pointer to the subElement of the given pointer. It checked whether the given propOrItemName is a property or an item
   * by looking at the schema
   * @param panullrent
   * @param propOrItemName
   */
  generateSubSchemaPointer(parent, propOrItemName) {
    if (this.locateItem(parent.positionInSchema, true).getChild(propOrItemName)) {
      return parent.subPropertyPointer(propOrItemName);
    } else {
      return parent.subItemPointer(propOrItemName);
    }
  }
  reset() {
    this.readSchema = DontCodeSchema.defaultv1;
    this.currentSchema = this.convertSchemaToMap(this.readSchema);
  }
}
class DontCodePluginManager {
  constructor() {
    this.plugins = new Map();
  }
  registerPlugin(plugin, schemaManager, previewManager) {
    // Ensure registering plugins only once.
    const config = plugin.getConfiguration();
    const fullId = config.plugin.id + '-v' + config.plugin.version;
    if (this.plugins.get(fullId) == null) {
      //console.debug ("Setting up", fullId);
      schemaManager.registerChanges(config);
      previewManager.registerHandlers(config);
      this.plugins.set(fullId, new PluginInfo(plugin));
    }
  }
  initPlugins(core) {
    this.plugins.forEach(plugin => {
      var _a;
      if (plugin.initCalled === false) {
        try {
          // Initialize the change of model
          const defs = (_a = plugin.plugin.getConfiguration()) === null || _a === void 0 ? void 0 : _a["definition-updates"];
          core.getChangeManager().applyPluginConfigUpdates(defs);
          plugin.plugin.pluginInit(core);
          plugin.initCalled = true;
        } catch (error) {
          console.error("Error calling " + plugin.plugin + " init method:", error);
        }
      }
    });
  }
  reset() {
    this.plugins.clear();
  }
}
class PluginInfo {
  constructor(plugin, initCalled) {
    this.plugin = plugin;
    if (initCalled == null) this.initCalled = false;else this.initCalled = initCalled;
  }
}

/**
 * Manages handlers that provides UI, calculation or action for data associated with an element.
 * It decodes "preview-handlers", "global-handlers", "action-handlers" from plugin-config.
 */
class DontCodePreviewManager {
  constructor() {
    this.reset();
  }
  reset() {
    this.handlersPerLocations = new Map();
    this.globalHandlersPerLocations = new Map();
    this.actionHandlersPerLocation = new Map();
    this.globalHandlers = new rxjs__WEBPACK_IMPORTED_MODULE_12__.ReplaySubject();
  }
  registerHandlers(config) {
    if (config['preview-handlers']) {
      config['preview-handlers'].forEach(value => {
        let array = this.handlersPerLocations.get(value.location.parent);
        if (!array) {
          array = new Array();
          this.handlersPerLocations.set(value.location.parent, array);
        }
        array.push(value);
      });
    }
    if (config['global-handlers']) {
      config['global-handlers'].forEach(value => {
        let array = this.handlersPerLocations.get(value.location.parent);
        if (!array) {
          array = new Array();
          this.handlersPerLocations.set(value.location.parent, array);
        }
        array.push(value);
        // Update the global handlers as well
        array = this.globalHandlersPerLocations.get(value.location.parent);
        if (!array) {
          array = new Array();
          this.globalHandlersPerLocations.set(value.location.parent, array);
        }
        array.push(value);
        this.globalHandlers.next(value);
      });
    }
    if (config['action-handlers']) {
      for (const value of config['action-handlers']) {
        let array = this.actionHandlersPerLocation.get({
          position: value.location.parent,
          context: value["action-context"]
        });
        if (!array) {
          array = new Array();
          this.actionHandlersPerLocation.set({
            position: value.location.parent,
            context: value["action-context"]
          }, array);
        }
        array.push(value);
      }
    }
  }
  getGlobalHandlers() {
    return this.globalHandlersPerLocations;
  }
  receiveGlobalHandlers() {
    return this.globalHandlers;
  }
  retrieveHandlerConfig(position, modelContent) {
    const found = this.handlersPerLocations.get(position);
    let ret = null;
    let contentNeeded = false;
    if (found) {
      for (const configuration of found) {
        if (configuration.location.values) {
          if (modelContent) {
            let jsonValue = modelContent;
            if (configuration.location.id) jsonValue = modelContent[configuration.location.id];
            this.extractValuesAsArray(configuration.location.values).forEach(targetValue => {
              if (targetValue === jsonValue) {
                ret = configuration;
                return;
              }
            });
          } else {
            // We found one handler that needs the jsonContent
            contentNeeded = true;
          }
        } else {
          // We have found a default handler, we keep it but keep on looking for a better one
          if (ret === null) {
            ret = configuration;
          }
        }
      }
    } else {
      // Try to see if the parent position is handled
      if (typeof modelContent === 'string' && position.lastIndexOf('/') > 0) {
        if (position.endsWith('/')) position = position.substring(0, position.length - 1);
        const key = position.substring(position.lastIndexOf('/') + 1);
        const parentValue = {};
        parentValue[key] = modelContent;
        return this.retrieveHandlerConfig(position.substring(0, position.lastIndexOf('/')), parentValue);
      }
    }
    if (ret === null && contentNeeded) {
      // We had one potential handler but couldn't select it as the jsonContent is not provided
      throw new Error('Content must be provided in order to select an handler for position ' + position);
    }
    return ret;
  }
  /**
   * Returns all the action handlers for a given position in the model and for a given context.
   * @param position
   * @param context
   * @param modelContent
   */
  retrieveActionHandlers(position, context, modelContent) {
    const ret = this.actionHandlersPerLocation.get({
      position,
      context
    });
    if (ret == null) return [];else return ret;
  }
  extractValuesAsArray(values) {
    const ret = new Array();
    this.extractValuesToArray(values, ret);
    return ret;
  }
  extractValuesToArray(values, res) {
    if (Array.isArray(values)) {
      values.forEach(value => {
        if (typeof value === 'string') {
          res.push(value);
        } else {
          this.extractValuesToArray(value, res);
        }
      });
    } else {
      for (const key in values) {
        if (values.hasOwnProperty(key)) {
          this.extractValuesToArray(values[key], res);
        }
      }
    }
  }
}
var DontCodeReportGroupShowType;
(function (DontCodeReportGroupShowType) {
  DontCodeReportGroupShowType["OnlyLowest"] = "OnlyLowest";
  DontCodeReportGroupShowType["OnlyHighest"] = "OnlyHighest";
})(DontCodeReportGroupShowType || (DontCodeReportGroupShowType = {}));
var DontCodeGroupOperationType;
(function (DontCodeGroupOperationType) {
  DontCodeGroupOperationType["Count"] = "Count";
  DontCodeGroupOperationType["Sum"] = "Sum";
  DontCodeGroupOperationType["Average"] = "Average";
  DontCodeGroupOperationType["Minimum"] = "Minimum";
  DontCodeGroupOperationType["Maximum"] = "Maximum";
})(DontCodeGroupOperationType || (DontCodeGroupOperationType = {}));
var DontCodeSortDirectionType;
(function (DontCodeSortDirectionType) {
  DontCodeSortDirectionType["None"] = "None";
  DontCodeSortDirectionType["Ascending"] = "Ascending";
  DontCodeSortDirectionType["Descending"] = "Descending";
})(DontCodeSortDirectionType || (DontCodeSortDirectionType = {}));
var ActionContextType;
(function (ActionContextType) {
  ActionContextType["LIST"] = "list";
  ActionContextType["EDIT"] = "edit";
  ActionContextType["VIEW"] = "view";
})(ActionContextType || (ActionContextType = {}));
var ActionType;
(function (ActionType) {
  ActionType["EXTRACT"] = "extract";
  ActionType["UPDATE"] = "update";
  ActionType["CALCULATE"] = "calculate";
})(ActionType || (ActionType = {}));
class DontCodeStoreManager {
  constructor(modelMgr, provider) {
    this.modelMgr = modelMgr;
    this.providerByPosition = new Map();
    this.providerByType = new Map();
    this._default = provider;
    this.reset();
  }
  reset() {
    this.providerByPosition.clear();
    this.providerByType.clear();
  }
  getProvider(position) {
    var _a;
    if (position == null) {
      return this._default;
    } else {
      let ret = null;
      // Try to find if the entity is loaded from a defined source
      const srcDefinition = (_a = this.modelMgr.findTargetOfProperty(DontCodeModel.APP_ENTITIES_FROM_NODE, position)) === null || _a === void 0 ? void 0 : _a.value;
      if (srcDefinition) {
        ret = this.providerByType.get(srcDefinition.type);
      }
      if (!ret) {
        ret = this.providerByPosition.get(position);
      }
      return ret !== null && ret !== void 0 ? ret : this._default;
    }
  }
  getProviderSafe(position) {
    const ret = this.getProvider(position);
    if (ret == null) {
      throw new Error('Trying to get an undefined or null provider');
    } else {
      return ret;
    }
  }
  getDefaultProvider() {
    return this.getProvider();
  }
  getDefaultProviderSafe() {
    return this.getProviderSafe();
  }
  setProvider(value, position) {
    if (position == null) this._default = value;else {
      this.providerByPosition.set(position, value);
    }
  }
  setProviderForSourceType(value, srcType) {
    this.providerByType.set(srcType, value);
  }
  setDefaultProvider(value) {
    this.setProvider(value);
  }
  removeProvider(position) {
    if (position == null) this._default = undefined;else {
      this.providerByPosition.delete(position);
    }
  }
  removeProviderForSourceType(srcType) {
    this.providerByType.delete(srcType);
  }
  removeDefaultProvider() {
    this.removeProvider();
  }
  storeEntity(position, entity) {
    return this.getProviderSafe(position).storeEntity(position, entity);
  }
  loadEntity(position, key) {
    return this.getProviderSafe(position).loadEntity(position, key);
  }
  safeLoadEntity(position, key) {
    return this.getProviderSafe(position).safeLoadEntity(position, key);
  }
  deleteEntity(position, key) {
    return this.getProviderSafe(position).deleteEntity(position, key);
  }
  searchEntities(position, ...criteria) {
    return this.getProviderSafe(position).searchEntities(position, ...criteria);
  }
  searchAndPrepareEntities(position, sort, groupBy, dataTransformer, ...criteria) {
    return this.getProviderSafe(position).searchAndPrepareEntities(position, sort, groupBy, dataTransformer, ...criteria);
  }
  canStoreDocument(position) {
    var _a;
    const res = (_a = this.getProvider(position)) === null || _a === void 0 ? void 0 : _a.canStoreDocument(position);
    if (res) return res;else return false;
  }
  storeDocuments(toStore, position) {
    return this.getProviderSafe(position).storeDocuments(toStore, position);
  }
}
var DontCodeStoreCriteriaOperator;
(function (DontCodeStoreCriteriaOperator) {
  DontCodeStoreCriteriaOperator["EQUALS"] = "=";
  DontCodeStoreCriteriaOperator["LESS_THAN"] = "<";
  DontCodeStoreCriteriaOperator["LESS_THAN_EQUAL"] = "<=";
})(DontCodeStoreCriteriaOperator || (DontCodeStoreCriteriaOperator = {}));
class DontCodeStoreCriteria {
  constructor(name, value, operator) {
    this.name = name;
    this.value = value;
    if (!operator) this.operator = DontCodeStoreCriteriaOperator.EQUALS;else {
      this.operator = operator;
    }
  }
}
class DontCodeStoreSort {
  constructor(by, direction, subSort) {
    this.by = by;
    this.subSort = subSort;
    if (direction == null) this.direction = DontCodeSortDirectionType.None;else this.direction = direction;
  }
}
class DontCodeStoreGroupby {
  constructor(of, display, show) {
    this.of = of;
    this.show = show;
    if (display == null) this.display = {};else this.display = display;
  }
  atLeastOneGroupIsRequested() {
    if (this.display != null && Object.keys(this.display).length > 0) return true;
    return false;
  }
  getRequiredListOfFields() {
    const ret = new Set();
    if (this.display != null) {
      for (const aggregate of Object.values(this.display)) {
        ret.add(aggregate.of);
      }
    }
    return ret;
  }
}
class DontCodeStoreAggregate {
  constructor(of, operation) {
    this.of = of;
    this.operation = operation;
  }
}
class Change {
  constructor(type, position, value, pointer, beforeKey, oldPosition) {
    this.type = type;
    this.position = position;
    if (position === '/') throw new Error('Root position is defined by empty string and not slash anymore');
    this.value = value;
    this.pointer = pointer;
    this.beforeKey = beforeKey;
    this.oldPosition = oldPosition;
  }
  /**
   * Utility method to return the position parent of this change by selecting the right way to calculate it
   * if the change is for the root (thus with no parent), it throws an exception.
   * Use this method if you are sure the Change is not for root.
   */
  getSafeParentPosition() {
    const parent = this.getParentPosition();
    if (parent == null) throw new Error('No Parent position for root changes.');
    return parent;
  }
  /**
   * Utility method to return the position parent of this change by selecting the right way to calculate it
   * if the change is for the root (thus with no parent), it returns null.
   * */
  getParentPosition() {
    var _a;
    if (this.pointer != null) {
      return (_a = this.pointer.containerPosition) !== null && _a !== void 0 ? _a : null;
    } else {
      return DontCodeModelPointer.parentPosition(this.position);
    }
  }
}
var ChangeType;
(function (ChangeType) {
  ChangeType["ADD"] = "ADD";
  ChangeType["UPDATE"] = "UPDATE";
  ChangeType["DELETE"] = "DELETE";
  ChangeType["MOVE"] = "MOVE";
  ChangeType["RESET"] = "RESET";
  ChangeType["ACTION"] = "ACTION";
})(ChangeType || (ChangeType = {}));

/**
 * An action is a special type of change where we ask the handler to act on data.
 */
class Action extends Change {
  constructor(position, value, context, actionType, pointer, running, changeType) {
    super(changeType !== null && changeType !== void 0 ? changeType : ChangeType.ACTION, position, value, pointer);
    this.running = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
    this.context = context;
    this.actionType = actionType;
    if (running != null) this.running = running;
  }
}

/**
 * Stores and constantly updates the json (as an instance of the DontCodeSchema) as it is being edited / modified through Change events
 * It does not store the entity values but the description of entities, screens... as defined in the Editor
 */
class DontCodeModelManager {
  constructor(schemaMgr) {
    this.schemaMgr = schemaMgr;
    this.reset();
  }
  reset() {
    this.content = undefined;
  }
  /**
   * Returns the complete json stored
   */
  getContent() {
    return this.content;
  }
  /**
   * Resets the current json content to the one given in parameter
   * @param newContent
   */
  resetContent(newContent) {
    this.content = newContent;
  }
  /**
   * Checks if the element can be viewed in the Builder or not
   * @param content
   */
  static isHidden(content) {
    return (content === null || content === void 0 ? void 0 : content.$hidden) == true;
  }
  /**
   * Checks if the element can be edited in the Builder or not
   * @param content
   */
  static isReadonly(content) {
    return (content === null || content === void 0 ? void 0 : content.$readOnly) == true;
  }
  /**
   * Apply the change to the current model and split it into multiple atomic changes for each modified property
   * @param toApply
   */
  applyChange(toApply) {
    var _a, _b;
    let pointer = (_a = toApply.pointer) !== null && _a !== void 0 ? _a : this.schemaMgr.generateSchemaPointer(toApply.position);
    toApply.pointer = pointer;
    const parentPosition = pointer.containerPosition;
    const subElem = (_b = toApply.pointer) === null || _b === void 0 ? void 0 : _b.lastElement;
    if (parentPosition != null && subElem != null) pointer = this.schemaMgr.generateParentPointer(pointer);
    const atomicChanges = new AtomicChange();
    atomicChanges.isRoot = true;
    atomicChanges.name = pointer.position;
    let lastChange = atomicChanges;
    let content = this.findAtPosition(pointer.position);
    if (content == null) {
      // Are we trying to delete a non existing content ?
      if (toApply.type === ChangeType.DELETE) {
        return []; // Nothing has changed
      } else {
        // we are adding something, so create the parent
        content = this.findAtPosition(pointer.position, true, atomicChanges);
        let basePosition = pointer.position;
        while (lastChange.subChanges.length > 0) {
          basePosition = basePosition.substring(0, basePosition.lastIndexOf('/'));
          lastChange = lastChange.subChanges[0];
        }
        atomicChanges.name = basePosition;
      }
    }
    if (toApply.type === ChangeType.ACTION) {
      lastChange.type = ChangeType.ACTION;
    }
    const isAnUpdate = this.applyChangeRecursive(toApply, content, toApply.value, toApply.pointer, lastChange);
    return this.generateChanges(toApply, atomicChanges, isAnUpdate, this.schemaMgr.generateSchemaPointer(atomicChanges.name));
  }
  applyChangeRecursive(srcChange, oldContent, newContent, pointer, atomicChanges, oldPosition) {
    if (srcChange.pointer == null) throw new Error('Cannot apply a change without a pointer at position ' + srcChange.position);
    let isAnUpdate = true;
    if (oldPosition == null) oldPosition = srcChange.oldPosition;
    const subElem = pointer.lastElement;
    if (subElem || subElem.length === 0) {
      //const subPointer = pointer.subItemOrPropertyPointer(subElem, pointer?.key==null);
      const oldSubContent = subElem.length === 0 ? oldContent : oldContent[subElem];
      switch (srcChange.type) {
        case ChangeType.ACTION:
          {
            // An action doesn't modify the data but must be created for each subelement
            const curAtomicChange = atomicChanges.createSubChange(ChangeType.ACTION, subElem, atomicChanges.value);
            this.compareRecursiveIfNeeded(srcChange, oldSubContent, null, pointer, curAtomicChange);
            break;
          }
        case ChangeType.ADD:
        case ChangeType.UPDATE:
        case ChangeType.RESET:
          {
            let curAtomicChange;
            if (srcChange.type === ChangeType.RESET && srcChange.position === pointer.position) {
              // Create a RESET change for the root element reset only
              if (typeof newContent === 'object' && this.isTheSameForParent(oldSubContent, newContent)) {
                curAtomicChange = atomicChanges.createSubChange(undefined, subElem, null);
              } else if (typeof newContent === 'object' || oldSubContent !== newContent) {
                curAtomicChange = atomicChanges.createSubChange(ChangeType.RESET, subElem, newContent);
              }
            } else if (oldSubContent == null) {
              curAtomicChange = atomicChanges.createSubChange(ChangeType.ADD, subElem, newContent);
            } else if (typeof newContent === 'object' && this.isTheSameForParent(oldSubContent, newContent)) {
              curAtomicChange = atomicChanges.createSubChange(undefined, subElem, null);
            } else if (typeof newContent === 'object' || oldSubContent !== newContent) {
              if (typeof oldSubContent === 'object' && srcChange.type == ChangeType.ADD) {
                // Verify that when asked to add a subitem, it's really an add, that means, at least one subproperty doesn't exist.
                // Otherwise it's a UPDATE change
                isAnUpdate = false;
                for (const subProperty of Object.getOwnPropertyNames(newContent)) {
                  if (oldSubContent[subProperty] != undefined) {
                    // At least one element is already present
                    isAnUpdate = true;
                    break;
                  }
                }
              }
              curAtomicChange = atomicChanges.createSubChange(ChangeType.UPDATE,
              // Even if it's an ADD of a subElement, we consider it's an UPDATE for the parent
              subElem, newContent);
            }
            if (curAtomicChange) this.compareRecursiveIfNeeded(srcChange, oldSubContent, newContent, pointer, curAtomicChange);
            if (subElem.length > 0 && isAnUpdate)
              // Special case when changing the root element (subElem = '')
              this.insertProperty(oldContent, subElem, newContent, srcChange.beforeKey);
          }
          break;
        case ChangeType.DELETE:
          {
            if (oldContent[subElem]) {
              const curAtomicChange = atomicChanges.createSubChange(ChangeType.DELETE, subElem, null);
              this.compareRecursiveIfNeeded(srcChange, oldContent[subElem], newContent, pointer, curAtomicChange);
              delete oldContent[subElem];
            }
          }
          break;
        case ChangeType.MOVE:
          {
            // If it's the root of move, then find the value to move from the oldPosition
            if (srcChange.position === pointer.position) {
              if (oldPosition == null) throw new Error('Cannot process MOVE change without oldPosition' + srcChange.position);
              if (newContent == null) {
                newContent = this.findAtPosition(oldPosition);
              }
              if (newContent) {
                const curAtomicChange = atomicChanges.createSubChange(ChangeType.MOVE, subElem, newContent, oldPosition);
                if (srcChange.position !== oldPosition) {
                  // When we reorder elements of an array, it's a move to the same position: No changes
                  this.compareRecursiveIfNeeded(srcChange, null, newContent, pointer, curAtomicChange, oldPosition);
                  this.insertProperty(oldContent, subElem, newContent, srcChange.beforeKey);
                  // Really perform the change
                  const splittedPosition = DontCodeModelPointer.splitPosition(oldPosition);
                  const parentContent = this.findAtPosition(splittedPosition.parent);
                  delete parentContent[splittedPosition.element];
                } else {
                  // Just insert the same element at a different position in the object
                  this.compareRecursiveIfNeeded(srcChange, null, newContent, pointer, curAtomicChange, oldPosition);
                  this.insertProperty(oldContent, subElem, newContent, srcChange.beforeKey);
                }
              }
            } else {
              // The move has already been done, so just createSubChange and loop through subElements
              const curAtomicChange = atomicChanges.createSubChange(ChangeType.MOVE, subElem, null, oldPosition);
              this.compareRecursiveIfNeeded(srcChange, oldContent, newContent, pointer, curAtomicChange, oldPosition);
            }
          }
          break;
        default:
          throw new Error('No support for change of type ' + srcChange.type);
      }
    } else {
      this.compareRecursiveIfNeeded(srcChange, oldContent, newContent, pointer, atomicChanges, oldPosition);
    }
    return isAnUpdate;
  }
  /**
   * Check if the values are the same, or the objects property names are the same, so that we can define it impacts or not the parent
   * @param oldValue
   * @param newValue
   */
  isTheSameForParent(oldValue, newValue) {
    if (newValue === oldValue) {
      return true;
    } else if (newValue == null || oldValue == null) {
      return false;
    } else if (typeof oldValue === 'object' && typeof newValue === 'object') {
      const oldKeys = Object.keys(oldValue);
      const newKeys = Object.keys(newValue);
      return oldKeys.length === newKeys.length && oldKeys.every((value, index) => {
        return value === newKeys[index];
      });
    } else {
      return oldValue === newValue;
    }
  }
  /**
   * By checking the differences between old and new content, and depending on the src change type, generate a change for each sub element hierarchically
   * @param src
   * @param oldContent
   * @param newContent
   * @param atomicChanges
   */
  compareRecursiveIfNeeded(src, oldContent, newContent, pointer, atomicChanges, oldPosition) {
    if (oldContent == null || typeof oldContent !== 'object') oldContent = {};
    if (newContent == null || typeof newContent !== 'object') newContent = {};
    const alreadyChecked = new Set();
    // Check if existing elements have been deleted or updated
    for (const oldSubProperty in oldContent) {
      const subPointer = this.schemaMgr.generateSubSchemaPointer(pointer, oldSubProperty);
      const subPosition = subPointer.position;
      alreadyChecked.add(oldSubProperty);
      // eslint-disable-next-line no-prototype-builtins
      if (newContent.hasOwnProperty(oldSubProperty)) {
        this.applyChangeRecursive(src, oldContent, newContent[oldSubProperty], subPointer, atomicChanges, oldPosition);
      } else {
        // Action are just passed to all subElements
        if (src.type == ChangeType.ACTION) {
          const srcAction = src;
          this.applyChangeRecursive(new Action(subPosition, srcAction.value, srcAction.context, srcAction.actionType, subPointer, srcAction.running), oldContent, null, subPointer, atomicChanges);
        } else if (src.type != ChangeType.ADD) {
          // It doesn't exist in the new element, so if not explicitely added, then it's deleted
          this.applyChangeRecursive(new Change(ChangeType.DELETE, subPosition, null, subPointer), oldContent, null, subPointer, atomicChanges, oldPosition);
        }
      }
    }
    // Check if new elements have been added
    for (const newSubProperty in newContent) {
      if (src.type === ChangeType.MOVE) {
        const subPointer = this.schemaMgr.generateSubSchemaPointer(pointer, newSubProperty);
        subPointer.position;
        //src.oldPosition = subPosition;
        this.applyChangeRecursive(src, oldContent, newContent[newSubProperty], subPointer, atomicChanges, oldPosition + '/' + newSubProperty);
      } else if (!alreadyChecked.has(newSubProperty)) {
        const subPointer = this.schemaMgr.generateSubSchemaPointer(pointer, newSubProperty);
        const subPosition = subPointer.position;
        this.applyChangeRecursive(new Change(ChangeType.ADD, subPosition, newContent[newSubProperty], subPointer), oldContent, newContent[newSubProperty], subPointer, atomicChanges);
      }
    }
  }
  generateChanges(src, atomicChanges, isAnUpdate, pointer, result) {
    if (result == null) result = new Array();
    if (src.pointer == null) throw new Error('Cannot generate changes without the pointer');
    if (pointer == null) pointer = src.pointer;
    if (atomicChanges.type != null) {
      //pointer = this.schemaMgr.generateSubSchemaPointer(pointer, atomicChanges.name);
      if (atomicChanges.type === ChangeType.MOVE) {
        if (atomicChanges.oldPosition == null) throw new Error('A Move Change must have an oldPosition set ' + pointer.position);
        if (atomicChanges.oldPosition !== pointer.position && src.position === pointer.position) {
          // Generate an update of the old position only if it's different from the new position, as for the new position an update has already been generated
          result.push(new Change(ChangeType.UPDATE, DontCodeModelPointer.parentPosition(atomicChanges.oldPosition), atomicChanges.value));
        }
        result.push(new Change(ChangeType.MOVE, pointer.position, atomicChanges.value, pointer, undefined, atomicChanges.oldPosition));
      } else {
        if (atomicChanges.type === ChangeType.ACTION) {
          // Create an action for Change of action type
          const srcAction = src;
          result.push(new Action(pointer.position, srcAction.value, srcAction.context, srcAction.actionType, pointer, srcAction.running));
        } else {
          result.push(new Change(atomicChanges.type, pointer.position, atomicChanges.value, pointer));
        }
      }
    } else {
      // First check if we need to send an UPDATED change to this element because a subElement is added / removed
      for (let i = 0; i < atomicChanges.subChanges.length; i++) {
        const cur = atomicChanges.subChanges[i];
        if (cur.type != null && cur.type !== ChangeType.UPDATE && cur.name.length > 0) {
          if (isAnUpdate == true) {
            // Sometimes we receive ADD but they are UPDATE in fact
            result.push(new Change(ChangeType.UPDATE, pointer.position, this.findAtPosition(pointer.position), pointer));
          }
          break;
        }
        /*if( (cur.type === ChangeType.MOVE) && (cur.oldPosition != null)) {
          result.push(new Change (ChangeType.UPDATE, cur.oldPosition, null));
        }*/
      }
    }
    // Then recurse through all subelements, generating changes along the way
    for (let i = 0; i < atomicChanges.subChanges.length; i++) {
      const cur = atomicChanges.subChanges[i];
      this.generateChanges(src, cur, true,
      // It's never an incorrect update for subelements
      this.schemaMgr.generateSubSchemaPointer(pointer, cur.name), result);
    }
    return result;
  }
  /**
   * Calculates a key that can be inserted at the given position in the content
   * @param pos
   */
  generateNextKeyForPosition(pos, create = false) {
    const array = this.findAtPosition(pos, create);
    if (array == null) throw new Error("No element at position " + pos);
    return DontCodeModelManager.generateNextKey(array);
  }
  static generateNextKey(array) {
    let keys;
    if (array.size != null) {
      keys = array;
    } else {
      keys = new Set(Object.keys(array));
    }
    let tentative = keys.size;
    let found = false;
    const modulo = DontCodeModelManager.POSSIBLE_CHARS_FOR_ARRAY_KEYS_LENGTH;
    let key;
    do {
      // Calculate a tentative key
      key = '';
      do {
        const quotient = Math.trunc(tentative / modulo);
        const rest = tentative % modulo;
        key = DontCodeModelManager.POSSIBLE_CHARS_FOR_ARRAY_KEYS[rest].concat(key);
        tentative = quotient - 1; // -1 because we need to not take into account the first row of values as they don't have the same number of chars
      } while (tentative >= 0);
      // Check if the key is already present
      found = keys.has(key);
      tentative++;
    } while (found);
    return key;
  }
  /**
   * Provides the json extract at the given position.
   * For example, findAtPosition ('creation/entities/a') will returns the description (fields...) of the first entity created with the editor
   * @param position
   * @param create
   */
  findAtPosition(position, create, added) {
    const path = position.split('/');
    if (this.content == null) {
      if (create) {
        this.content = {};
      } else {
        return null;
      }
    }
    let current = this.content;
    let currentPath = '';
    path.forEach(element => {
      if (element === '' || current === null) return current;
      if (currentPath.length === 0) currentPath = element;else currentPath = currentPath + '/' + element;
      if (!current[element]) {
        if (create) {
          current[element] = {};
          if (added) {
            added = added.createSubChange(ChangeType.ADD, element, {});
          }
        } else {
          current = null;
          return null;
        }
      }
      current = current[element];
    });
    return current;
  }
  /**
   * Enable querying the model for any value, following jsonPath model
   * To use when potentially you expect multiple values
   * @param query: the query as a jsonPath
   * @param position: in case the jsonPath is relative
   */
  queryModelToArray(query, position) {
    let root = this.content;
    if (position) {
      root = this.findAtPosition(position, false);
    }
    const result = (0,jsonpath_plus__WEBPACK_IMPORTED_MODULE_9__.JSONPath)({
      path: query,
      json: root,
      resultType: 'value',
      wrap: false,
      flatten: true
    });
    return result;
  }
  /**
   * Enable querying the model for any value, following jsonPath model
   * To use when potentially you expect a single value.
   * @param query: the query as a  jsonPath
   * @param position: in case the jsonPath is relative
   */
  queryModelToSingle(query, position) {
    var _a;
    let root = this.content;
    if (position) {
      root = this.findAtPosition(position, false);
    }
    let result = (0,jsonpath_plus__WEBPACK_IMPORTED_MODULE_9__.JSONPath)({
      path: query,
      json: root,
      resultType: 'all',
      wrap: false
    });
    if (Array.isArray(result)) {
      if (result.length <= 1) result = result[0];else throw new Error('Multiple results returned by queryModelToSingle with path ' + query);
    }
    // In Dont-code, on the contrary of Json Pointer, you don't start a pointer by /
    if ((_a = result === null || result === void 0 ? void 0 : result.pointer) === null || _a === void 0 ? void 0 : _a.startsWith('/')) {
      result.pointer = result.pointer.substring(1);
    }
    if (result != null) {
      delete result.path;
      delete result.parent;
      delete result.parentProperty;
    }
    return result;
  }
  /**
   * Returns the list of values that are possible target of a given property path. With this the Builder User Interface can display to the user a combo-box will all targets
   * For example, with the following Dont-code model:
   * "from": {
   *           "type": "string",
   *           "format": "$.creation.sources.name"
   *         }
   *
   * findAllPossibleTargetsOrProperty ("from", ...) will returns all sources names.
   * @param property
   * @param position
   * @param schemaItem
   */
  findAllPossibleTargetsOfProperty(property, position, schemaItem) {
    if (schemaItem == null) {
      const ptr = this.schemaMgr.generateSchemaPointer(position);
      schemaItem = this.schemaMgr.locateItem(ptr.subPropertyPointer(property).positionInSchema, true);
    }
    const targetPath = schemaItem === null || schemaItem === void 0 ? void 0 : schemaItem.getTargetPath();
    if (schemaItem && targetPath) {
      const lastDotPos = targetPath.lastIndexOf('.');
      return this.queryModelToArray(targetPath.substring(0, lastDotPos) + '.*');
    } else {
      throw new Error('No Schema or no format definition for ' + position + '/' + property);
    }
  }
  /**
   * Returns the exact element that matches the target of a given property path.
   *
   * For example, with the following Dont-code model:
   * "from": {
   *           "type": "string",
   *           "format": "$.creation.sources.name"
   *         }
   *
   * and an instantiated model like this:
   * {
   *   "from": "EntityName"
   * }
   * findAllPossibleTargetsOrProperty ("from", ...) will return only the source named "EntityName".
   * @param property
   * @param position
   * @param schemaItem
   */
  findTargetOfProperty(property, position, schemaItem) {
    const src = this.findAtPosition(position, false);
    if (src && src[property]) {
      if (schemaItem == null) {
        const ptr = this.schemaMgr.generateSchemaPointer(position);
        schemaItem = this.schemaMgr.locateItem(ptr.subPropertyPointer(property).positionInSchema, true);
      }
      const targetPath = schemaItem === null || schemaItem === void 0 ? void 0 : schemaItem.getTargetPath();
      if (schemaItem && targetPath) {
        const lastDotPos = targetPath.lastIndexOf('.');
        //        const filteredQuery = targetPath.substring(0, lastDotPos)+'[?(@.'+targetPath.substring(lastDotPos+1)+'==="'+src[property]+'")]';
        const filteredQuery = targetPath.substring(0, lastDotPos) + "[?(@['" + targetPath.substring(lastDotPos + 1) + '\']==="' + src[property] + '")]';
        return this.queryModelToSingle(filteredQuery);
      } else {
        throw new Error('No Schema or no format definition for ' + position + '/' + property);
      }
    }
    return null;
  }
  /**
   * Insert a property at the end of an object or before the specified property
   * @param parent
   * @param propName
   * @param value
   * @param beforeProp
   */
  insertProperty(parent, propName, value, beforeProp) {
    if (beforeProp) {
      // Reinsert all properties of the object and inject the new one at the right order
      const keys = Object.keys(parent);
      for (const key of keys) {
        if (key !== propName) {
          const copy = parent[key];
          delete parent[key];
          if (key === beforeProp) {
            if (parent[propName] !== undefined) delete parent[propName];
            parent[propName] = value;
          }
          parent[key] = copy;
        }
      }
    } else {
      if (parent[propName] !== undefined) delete parent[propName];
      parent[propName] = value;
    }
  }
  /**
   * From a DefinitionUpdateConfig given by a repository configuration, generates a Change that can be applied to the model.
   * @param definition
   */
  convertToChange(definition) {
    let ptr = this.schemaMgr.generateSchemaPointer(definition.location.parent);
    const schemaItem = this.schemaMgr.locateItem(ptr.positionInSchema, false);
    if (schemaItem.isArray()) {
      if (definition.location.id == null || definition.location.id === '*') {
        // We must create a subelement
        ptr = ptr.subItemPointer(this.generateNextKeyForPosition(ptr.position, true));
      } else {
        ptr = ptr.subItemPointer(definition.location.id);
      }
    } else {
      if (definition.location.id != null) {
        ptr = ptr.subItemPointer(definition.location.id);
      }
    }
    return new Change(ChangeType.ADD, ptr.position, definition.update, ptr, definition.location.after);
  }
  /**
   * Try to guess which field is most likely to represent the name of an object (ususally a field with name "name", or "title")
   * @param position
   * @param modelAsJson
   */
  guessNamePropertyOfElement(position, modelAsJson) {
    if (modelAsJson == null) {
      if (position == null) throw new Error("Either position or model must be provided");
      modelAsJson = this.findAtPosition(position, false);
      if (modelAsJson == null) {
        throw new Error("Position " + position + " does not exist in model");
      }
    }
    if (modelAsJson.fields != null && Array.isArray(modelAsJson.fields)) modelAsJson = modelAsJson.fields;
    const curScore = {
      score: -1,
      field: null
    };
    for (const field in modelAsJson) {
      if (DontCodeModelManager.scoreFieldAsName(modelAsJson[field].name, modelAsJson[field].type, curScore)) break;
    }
    if (curScore.score > 0) {
      return curScore.field;
    } else return null;
  }
  static guessNamePropertyOfObject(obj) {
    const score = {
      score: -1,
      field: null
    };
    for (const prop in obj) {
      DontCodeModelManager.scoreFieldAsName(prop, 'Text', score);
    }
    if (score.score > 0) return score.field;else return null;
  }
  static guessNamePropertyFromList(...list) {
    const score = {
      score: -1,
      field: null
    };
    for (const prop of list) {
      DontCodeModelManager.scoreFieldAsName(prop, 'Text', score);
    }
    if (score.score > 0) return score.field;else return null;
  }
  /**
   * Checks the probability the name given (and type) is field name that represents the name of the element.
   * @param name
   * @param type
   * @param score
   * @protected
   */
  static scoreFieldAsName(name, type, score) {
    if (name == null) return false;
    const propName = name.toLowerCase();
    for (const [key, value] of this.NAME_PROPERTY_NAMES) {
      if (propName === key) {
        const foundScore = value !== null && value !== void 0 ? value : 0;
        if (score.score < foundScore) {
          score.score = foundScore;
          score.field = name;
          if (score.score == 100) return true;
        }
      } else if (propName.includes(key)) {
        const foundScore = (value !== null && value !== void 0 ? value : 0) / 2;
        if (score.score < foundScore) {
          score.score = foundScore;
          score.field = name;
        }
      }
    }
    if (type == "Text") {
      if (score.score < 20) {
        score.score = 20;
        score.field = name;
      }
    }
    if (score.score > 0) return true;else return false;
  }
  /**
   * Extract the value of any data in parameter. It can handle complex data and flattens it into something that you can calculate or act upon (number or string)
   * @param obj
   * @param metaData Will store information about how to extract the data for this item. Will accelerate greatly extraction for other similar data.
   * @param position
   * @param schemaItem
   * @protected
   */
  extractValue(obj, metaData, position, schemaItem) {
    if (obj == null) return obj;
    if (!metaData.parsed) {
      this.extractMetaData(obj, metaData, position, schemaItem);
    }
    // We already know what to do
    if (metaData.direct) {
      return obj;
    } else {
      if (metaData.array) {
        if (obj.length > 0) {
          obj = obj[0];
        } else return obj;
      }
      if (metaData.subValue != null) {
        return obj[metaData.subValue];
      } else if (metaData.subValues != null) {
        for (let i = 0; i < metaData.subValues.length; i++) {
          obj = obj[metaData.subValues[i]];
          if (obj == null) break;
        }
        return obj;
      } else {
        // If we couldn't determine the object's value, maybe it's because the value is not present
        return undefined;
      }
    }
  }
  /**
   * Apply the primitive value back in the object
   * @param obj
   * @param value
   * @param metaData Will store information about how to extract the data for this item. Will accelerate greatly extraction for other similar data.
   * @param valueObj if any, the object that contained the source. In case you want to apply other values of the source as well
   * @param position
   * @param schemaItem
   * @return The object with the primitive set or the value if the obj is indeed a primitive already
   */
  applyValue(obj, value, metaData, valueObj, position, schemaItem) {
    if (obj == null) return value;
    if (!metaData.parsed) {
      this.extractMetaData(obj, metaData, position, schemaItem);
    }
    // We already know what to do
    if (metaData.direct) {
      return value;
    } else {
      if (metaData.array) {
        // We extract the first element of the array
        if (obj.length > 0) {
          obj = obj[0];
        } else {
          if (value != undefined)
            // Only undefined are not pushed, null values can be pushed
            obj.push(value);
          return obj;
        }
      }
      if (metaData.subValue != null) {
        if (value === undefined) {
          delete obj[metaData.subValue];
        } else {
          obj[metaData.subValue] = value;
        }
      } else if (metaData.subValues != null) {
        let curObj = obj;
        if (value === undefined) {
          for (let i = 0; i < metaData.subValues.length - 1; i++) {
            curObj = curObj[metaData.subValues[i]];
            if (curObj == null) break;
          }
          // Delete the element only it there was one
          if (curObj != null && curObj[metaData.subValues[metaData.subValues.length - 1]] != undefined) {
            delete curObj[metaData.subValues[metaData.subValues.length - 1]];
          }
        } else {
          for (let i = 0; i < metaData.subValues.length - 1; i++) {
            if (curObj[metaData.subValues[i]] == undefined) {
              curObj[metaData.subValues[i]] = {};
            }
            curObj = curObj[metaData.subValues[i]];
          }
          if (curObj[metaData.subValues[metaData.subValues.length - 1]] == null && valueObj != null) {
            let curValueObj = valueObj;
            for (let i = 0; i < metaData.subValues.length - 1; i++) {
              if (curValueObj[metaData.subValues[i]] == null) {
                curValueObj = null;
                break;
              }
              curValueObj = curValueObj[metaData.subValues[i]];
            }
            if (curValueObj != null) {
              // The element to copy to was null, so let's copy all properties from the second element
              for (const valueProp in curValueObj) {
                if (curObj[valueProp] == null && curValueObj[valueProp] != null) {
                  curObj[valueProp] = structuredClone(curValueObj[valueProp]);
                }
              }
            }
          }
          // apply the value
          curObj[metaData.subValues[metaData.subValues.length - 1]] = value;
        }
      }
      return obj;
    }
  }
  /**
   * Sorts the values in place. If the value is a complex type, extract a comparable item before
   * @param values
   * @param field if any field must be used for the sort
   * @param sortOrder Optionally provides a sort order (positive or negative) to support multiple sorts
   * @param metaData
   */
  sortValues(values, sortOrder = 1, field, metaData, position, schemaItem) {
    const metaInfo = metaData !== null && metaData !== void 0 ? metaData : new DataTransformationInfo();
    if (!metaInfo.parsed) {
      for (const val of values) {
        this.extractMetaData(this.extractField(val, field), metaInfo, position, schemaItem);
        if (metaInfo.parsed) break;
      }
    }
    if (metaInfo.parsed) {
      values.sort((first, second) => {
        const firstValue = this.extractValue(this.extractField(first, field), metaInfo, position, schemaItem);
        const secondValue = this.extractValue(this.extractField(second, field), metaInfo, position, schemaItem);
        if (firstValue == null) {
          if (secondValue == null) return 0;else return -sortOrder;
        } else if (secondValue == null) return sortOrder;
        // firstValue and secondValue are now either string, number or Date
        if (typeof firstValue === 'string' && typeof secondValue === 'string') {
          return sortOrder * firstValue.localeCompare(secondValue);
        }
        return firstValue < secondValue ? -sortOrder : firstValue > secondValue ? sortOrder : 0;
      });
    } else {
      console.warn('Cannot sort array of unknown values');
      return;
    }
  }
  /**
   * Guess how values can be set or extracted from an unknown object
   * @param obj
   * @param metaData
   * @param position
   * @param schemaItem
   */
  extractMetaData(obj, metaData, position, schemaItem) {
    if (obj == null) return;
    metaData.parsed = true;
    metaData.subValue = null;
    metaData.subValues = null;
    if (typeof obj !== 'object') {
      if (obj != null) {
        metaData.direct = true;
      } else {
        metaData.parsed = false;
      }
    } else {
      if (Array.isArray(obj)) {
        metaData.array = true;
        // eslint-disable-next-line no-restricted-syntax
        console.debug("Getting an array as a value for metadata extraction", obj);
        if (obj.length > 0) {
          obj = obj[0];
        } else {
          metaData.parsed = false;
        }
      }
      if (obj instanceof Date) {
        metaData.direct = true;
      } else {
        // It's an unknown object
        if (obj.value !== undefined) {
          metaData.subValue = 'value';
        } else if (obj.amount !== undefined) {
          // It's an MoneyAmount
          metaData.subValue = 'amount';
        } else if (obj.cost !== undefined) {
          // It's a PriceModel
          metaData.subValues = ['cost', 'amount'];
        } else {
          let firstKey = null;
          for (const key in obj) {
            if (firstKey == null) firstKey = key;
            if (obj[key] != null && typeof obj[key] !== 'object') {
              metaData.subValue = key;
            }
          }
          if (metaData.subValue == null && metaData.subValues == null) {
            if (typeof obj !== 'object' || obj instanceof Date) {
              metaData.subValue = firstKey;
              console.warn("Guessed value key of " + metaData.subValue + ' for object:', obj);
            } else {
              console.warn("Cannot guess value for object: ", obj);
              metaData.parsed = false;
              metaData.subValue = null;
              metaData.subValues = null;
              metaData.direct = false;
              metaData.array = false;
            }
          }
        }
      }
    }
  }
  /**
   * Modify the first element with the value of the second element by applying the operator given in parameter
   * @param firstElement
   * @param secondElement
   * @param metaData Will store information about how to extract the data for this item. Will accelerate greatly extraction for other similar data.
   * @param operator
   * @param position
   * @param schemaItem
   * @protected
   */
  modifyValues(firstElement, secondElement, metaData, operator, position, schemaItem) {
    if (firstElement == null) {
      throw new Error("Cannot modify value of null object");
    }
    const firstValue = this.extractValue(firstElement, metaData, position, schemaItem);
    const secondValue = this.extractValue(secondElement, metaData, position, schemaItem);
    const calculatedValue = operator(firstValue, secondValue);
    return this.applyValue(firstElement, calculatedValue, metaData, secondElement, position, schemaItem);
  }
  extractField(val, field) {
    if (field != null && val != null) return val[field];else return val;
  }
}
DontCodeModelManager.POSSIBLE_CHARS_FOR_ARRAY_KEYS = "abcdefghijklmnopqrstuvxyz";
DontCodeModelManager.POSSIBLE_CHARS_FOR_ARRAY_KEYS_LENGTH = DontCodeModelManager.POSSIBLE_CHARS_FOR_ARRAY_KEYS.length;
DontCodeModelManager.NAME_PROPERTY_NAMES = new Map([['name', 100], ['nom', 100], ['title', 80], ['titre', 80], ['lastname', 80], ['label', 70], ['libellé', 70]]);
/**
 * Keep track of information about how to extract value of data
 */
class DataTransformationInfo {
  constructor() {
    this.parsed = false; // Has the element been parsed ?
    this.array = false; // Is it an array ?
    this.direct = false; // Is the element already a usable value (not an object)
    this.subValue = null; // What field will give the usable value ?
    this.subValues = null; // What list of fields needs to be following to extract the usable value ?
  }
}
class AtomicChange {
  constructor(type, name, value, oldPosition) {
    this.name = '';
    this.subChanges = new Array();
    this.isRoot = false;
    if (type) this.type = type;
    if (name) this.name = name;
    this.oldPosition = oldPosition;
    this.value = value;
  }
  createSubChange(type, elementName, value, oldPosition) {
    const newChange = new AtomicChange(type, elementName, value, oldPosition);
    this.subChanges.push(newChange);
    return newChange;
  }
}
class ModelQuerySingleResult {}

/**
 * Manages the impact of changes that modify the model.
 * Any element can listen to a change at any level of the model, and gets notified accordingly
 */
class DontCodeChangeManager {
  constructor(schemaManager, modelManager) {
    this.schemaManager = schemaManager;
    this.modelManager = modelManager;
    this.listeners = new Map();
    this.listenerCachePerPosition = new Map();
    this.reset();
  }
  reset() {
    if (this.receivedChanges != null) this.receivedChanges.complete();
    this.receivedChanges = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
    this.listeners.clear();
    this.listenerCachePerPosition.clear();
  }
  /**
   * Check if the change affects the given position
   * @param pos
   * @param change
   * @protected
   */
  isInterestedIn(position, property, change) {
    let onlyLevel = false;
    if (position[position.length - 1] === '?') {
      onlyLevel = true;
      position = position.substring(0, position.length - 1);
    }
    if (position[position.length - 1] === '/') {
      position = position.substring(0, position.length - 1);
    }
    //console.log("Setting Commands updates for ", position);
    //console.log("Filtering position for pos,item:", command.position, position, lastItem);
    if (change.position != null && change.position.startsWith(position)) {
      let nextPosition = DontCodeModelPointer.nextItemAndPosition(change.position, position.length + 1);
      const nextItem = nextPosition.value;
      if (property) {
        if (nextItem === property) {
          //console.log("Filtering ok");
          return true;
        } else {
          // Supports for listeners like "creation/entities", with "name" property that are in fact "creation/entities/xxanyEntityIDxx", with "name" property
          nextPosition = DontCodeModelPointer.nextItemAndPosition(change.position, nextPosition.pos + 1);
          if (nextPosition.value === property) {
            return true;
          }
        }
        //console.log("Filtering no");
        return false;
      } else if (onlyLevel) {
        //console.log("Filtering ok");
        if (nextItem != null) {
          // Check if its the last item
          nextPosition = DontCodeModelPointer.nextItemAndPosition(change.position, nextPosition.pos + 1);
          if (nextPosition.value === '') return true;
        }
        return false;
      } else {
        return true;
      }
    } else {
      //console.log("Filtering no");
      return false;
    }
  }
  createNewListener(position, property) {
    const key = {
      position,
      property
    };
    this.clearEmptyListeners();
    let item = this.listeners.get(key);
    if (item == null) {
      item = new rxjs__WEBPACK_IMPORTED_MODULE_12__.ReplaySubject(1);
      this.listeners.set(key, item);
      this.listenerCachePerPosition.clear();
    }
    // Someone was listening to the same element, so we need to send the initial Reset only to the new listener
    if (item.observed == true) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.throwError)(() => new Error("Several components listen to the same position {" + position + ', ' + property));
    }
    // In case the model already contains a value the listener is interested in, just call it already
    const cleanedPosition = this.cleanPosition(position);
    const existing = this.modelManager.findAtPosition(cleanedPosition, false);
    if (existing != null) {
      let chg = new Change(ChangeType.RESET, cleanedPosition, existing, this.schemaManager.generateSchemaPointer(cleanedPosition));
      if (this.isInterestedIn(position, property, chg)) {
        item.next(chg);
      } else {
        // Try to find if a sub element works (in case the listener wants all changes inside an array, for example "creation/entities" and "name" property)
        if (property != null) {
          for (const propKey in existing) {
            chg = new Change(ChangeType.RESET, cleanedPosition + '/' + propKey, existing[propKey], this.schemaManager.generateSchemaPointer(cleanedPosition + '/' + propKey));
            if (this.isInterestedIn(position, property, chg)) {
              item.next(chg);
            } else if (property != null && existing[propKey][property] != null) {
              chg = new Change(ChangeType.RESET, cleanedPosition + '/' + propKey + '/' + property, existing[propKey][property], this.schemaManager.generateSchemaPointer(cleanedPosition + '/' + propKey + '/' + property));
              if (this.isInterestedIn(position, property, chg)) {
                item.next(chg);
              }
            }
          }
        }
      }
    }
    return item;
  }
  addToListenerCache(position, who) {
    let interesteds = this.listenerCachePerPosition.get(position);
    if (!interesteds) {
      interesteds = new Array();
      this.listenerCachePerPosition.set(position, interesteds);
    }
    interesteds.push(who);
  }
  getJsonAt(position) {
    return this.modelManager.findAtPosition(position, false);
  }
  /**
   * Adds to the model the updates of configuration defined by the plugin or by the repository
   * @param defs
   */
  applyPluginConfigUpdates(defs) {
    if (defs != null) {
      for (const definition of defs) {
        this.pushChange(this.modelManager.convertToChange(definition));
      }
    }
  }
  /**
   * Updates the model by the change (by calling DontCodeModelManager.applyChange ()), and notifies all listeners of the modifications
   * @param change
   * @return true if at least one listener has been called
   */
  pushChange(change) {
    let ret = false;
    const subChanges = this.modelManager.applyChange(change);
    ret = this.manageChangeInternally(change);
    // Sends as well the subChanges induced by this change
    for (const subChange of subChanges) {
      if (subChange.type !== change.type || subChange.position !== change.position) {
        const otherRet = this.manageChangeInternally(subChange);
        ret = ret || otherRet;
      }
    }
    return ret;
  }
  manageChangeInternally(change) {
    if (!change.pointer) {
      change.pointer = this.calculatePointerFor(change.position);
    }
    this.receivedChanges.next(change);
    return this.findAndNotify(change, new Map());
  }
  /**
   * Finds a listener that is interested in this change and notifies it.
   * @param change
   * @param alreadyCalled
   */
  findAndNotify(change, alreadyCalled) {
    var _a;
    let ret = false;
    // First resolve the position and cache it
    if (!this.listenerCachePerPosition.get(change.position)) {
      this.listeners.forEach((value, key) => {
        if (this.isInterestedIn(key.position, key.property, change)) {
          this.addToListenerCache(change.position, value);
        }
      });
    }
    // Then call all listeners, but only once
    const affected = this.listenerCachePerPosition.get(change.position);
    if (affected != null) {
      for (const subject of affected) {
        let canCall = true;
        const positions = alreadyCalled.get(subject);
        if (positions) {
          // Don't call twice the same listener for the same or parent position
          for (const position of positions) {
            if (change.position.startsWith(position)) {
              canCall = false;
            }
          }
        } else {
          alreadyCalled.set(subject, new Array());
        }
        if (canCall) {
          ret = true;
          subject.next(change);
          (_a = alreadyCalled.get(subject)) === null || _a === void 0 ? void 0 : _a.push(change.position);
        }
      }
    }
    return ret;
  }
  /**
   * Be notified when something changes in the model at the following position
   * for example:
   * position: /creation/screens, property: name will be notified of all name changes for all screens
   * position: /creation/screens, property: null will be notified of any change in any screen and subscreens
   * position: /creation/screens/a, property: null will be notified on changes in screen a and below
   * position: /creation/screens/?, property: null will be notified on changes in screen items (move, delete), and not below
   * position: null, property: null will be notified on all changes
   * @param position
   * @param property
   */
  receiveCommands(position, property) {
    if (position) {
      return this.createNewListener(position, property);
    } else return this.receivedChanges;
  }
  getSchemaManager() {
    return this.schemaManager;
  }
  calculatePointerFor(position) {
    const ret = this.schemaManager.generateSchemaPointer(position);
    return ret;
  }
  close() {
    this.receivedChanges.complete();
  }
  /**
   * Removes ? or / from end of position
   * @param position
   * @private
   */
  cleanPosition(position) {
    position = position.endsWith('?') ? position.substring(0, position.length - 1) : position;
    position = position.endsWith('/') ? position.substring(0, position.length - 1) : position;
    return position;
  }
  clearEmptyListeners() {
    const toRemove = new Array();
    for (const listener of this.listeners) {
      if (!listener[1].observed) {
        toRemove.push(listener[0]);
      }
    }
    for (const remove of toRemove) {
      this.listeners.delete(remove);
    }
  }
}
class DontCodeCore {
  constructor() {
    console.debug("Init core");
    this.schemaManager = new DontCodeSchemaManager();
    this.pluginManager = new DontCodePluginManager();
    this.previewManager = new DontCodePreviewManager();
    this.modelManager = new DontCodeModelManager(this.schemaManager);
    this.changeManager = new DontCodeChangeManager(this.schemaManager, this.modelManager);
    this.storeManager = new DontCodeStoreManager(this.modelManager);
  }
  reset() {
    this.schemaManager.reset();
    this.pluginManager.reset();
    this.previewManager.reset();
    this.modelManager.reset();
    this.changeManager.reset();
    this.storeManager.reset();
    return this;
  }
  registerPlugin(plugin) {
    this.pluginManager.registerPlugin(plugin, this.schemaManager, this.previewManager);
  }
  initPlugins() {
    this.pluginManager.initPlugins(this);
  }
  getSchemaUri() {
    return 'schemas/v1/dont-code-schema.json';
  }
  /**
   * Returns the schema of dont-code augmented by plugins
   */
  getSchemaManager() {
    return this.schemaManager;
  }
  getPreviewManager() {
    return this.previewManager;
  }
  getStoreManager() {
    return this.storeManager;
  }
  getModelManager() {
    return this.modelManager;
  }
  getChangeManager() {
    return this.changeManager;
  }
}
if (!self.dontCodeCore) self.dontCodeCore = new DontCodeCore();
// eslint-disable-next-line no-var
var dtcde = self.dontCodeCore;

/**
 * Description of a message exchanged between the components (client, services)
 * It can be an INIT with the sessionId requested or given
 * Or a CHANGE with the sessionId and Change
 */
class Message {
  constructor(type, sessionId, change) {
    this.type = type;
    this.sessionId = sessionId;
    this.change = change;
  }
}
var MessageType;
(function (MessageType) {
  MessageType["INIT"] = "INIT";
  MessageType["CHANGE"] = "CHANGE";
})(MessageType || (MessageType = {}));

/**
 * Store a monetary amount together with the currency (value and currency).
 * To be used by all fields managing currencies ('Euro', 'Dollar', 'Other currency' by default) in order to facilitate exchange between plugins
 */
class MoneyAmount {}

/**
 * Helper in case you have synchronous action only and you don't want to manage promises
 */
class AbstractActionHandler {
  performAction(action) {
    return new Promise(() => {
      this.performSynchronousAction(action);
    });
  }
  performSynchronousAction(action) {
    // To be implemented
    throw new Error("Action " + action + " for " + action.context.valueOf() + " at " + action.position + " not implemented yet");
  }
}

/**
 * Helps handle metadata information about loaded items
 */
class StoreProviderHelper {
  /**
   * In case some entity definition has changed, clear the cache
   */
  static clearConfigCache() {
    this.specialFieldsCache.clear();
  }
  /**
   * In case the provider source doesn't support search criteria, they can be applied here
   * @param list
   * @param criteria
   */
  static applyFilters(list, ...criteria) {
    if (criteria == null || criteria.length == 0) return list;
    return list.filter(element => {
      for (const criterium of criteria) {
        const toTest = element[criterium.name];
        switch (criterium.operator) {
          case DontCodeStoreCriteriaOperator.EQUALS:
            return criterium.value == toTest;
          case DontCodeStoreCriteriaOperator.LESS_THAN:
            return toTest < criterium.value;
          case DontCodeStoreCriteriaOperator.LESS_THAN_EQUAL:
            return toTest <= criterium.value;
          default:
            throw new Error("Operator " + criterium.operator + " unknown");
        }
      }
      return true;
    });
  }
  /** Returns any field who is a date, in order to convert it from json. Keep the result in a cache map
   *
   * @param position
   * @param entity
   * @protected
   */
  static findSpecialFields(position, entity) {
    var _a, _b, _c;
    let specialFields = StoreProviderHelper.specialFieldsCache.get(position);
    if (specialFields != null) return specialFields;
    const curScore = {
      score: -1,
      field: null
    };
    specialFields = new SpecialFields();
    const fields = entity.fields;
    if (fields != null) {
      let prop;
      for (prop in fields) {
        // Finds the date fields that will need to be converted from json to javascript Date
        if (((_a = fields[prop]) === null || _a === void 0 ? void 0 : _a.type) === 'Date' || ((_b = fields[prop]) === null || _b === void 0 ? void 0 : _b.type) === 'Date & Time') {
          specialFields.addDateField((_c = fields[prop]) === null || _c === void 0 ? void 0 : _c.name);
        } else {
          StoreProviderHelper.scoreIdFieldFromEntityField(fields[prop], curScore);
        }
      }
    }
    if (curScore.score > 0) {
      specialFields.idField = curScore.field;
    }
    StoreProviderHelper.specialFieldsCache.set(position, specialFields);
    // eslint-disable-next-line no-restricted-syntax
    console.debug("Found special fields for entity at position " + position, specialFields);
    return specialFields;
  }
  static findSpecialFieldsFromData(data, existingFields) {
    if (existingFields.idField == null && (data === null || data === void 0 ? void 0 : data.length) > 0) {
      // We must guess the id field from data
      const first = data[0];
      const curScore = {
        score: -1,
        field: null
      };
      let prop;
      for (prop in first) {
        StoreProviderHelper.scoreIdFieldFromProperty(prop, curScore);
      }
      if (curScore.score > 0) {
        const test = data.length > 1 ? data[Math.floor((data.length + 1) / 2)] : null;
        if (test == null || test[curScore.field] != first[curScore.field])
          // Just check that another element doesn't have the same value as an id should be unique
          existingFields.idField = curScore.field;
      }
    }
  }
  static scoreIdFieldFromEntityField(prop, score) {
    return StoreProviderHelper.scoreIdFieldFromProperty(prop === null || prop === void 0 ? void 0 : prop.name, score);
  }
  static scoreIdFieldFromProperty(name, score) {
    if (name == null) return false;
    const propName = name.toLowerCase();
    // Finds if the element is the id field
    if (propName === "_id") {
      score.field = "_id"; // Don't need to process Id
      score.score = 100;
      return true;
    } else {
      if (propName == "id" || propName == "uniqueid" || propName == "identifier" || propName == 'key' || propName == 'primaryKey' || propName == 'uniqueKey') {
        if (score.score < 80) {
          score.score = 80;
          score.field = name;
        }
      } else if (propName.includes("unique") || propName.includes("primary")) {
        if (score.score < 50) {
          score.score = 50;
          score.field = name;
        }
      } else if (propName.includes("id") || propName.includes('key')) {
        if (score.score < 30) {
          score.score = 30;
          score.field = name;
        }
      }
      return false;
    }
  }
  /**
   * Ensure _id is removed if necessary before saving the element
   * @param listToConvert
   * @param specialFields
   * @protected
   */
  static cleanUpDataBeforeSaving(listToConvert, specialFields) {
    if ((specialFields === null || specialFields === void 0 ? void 0 : specialFields.idField) != null && (specialFields === null || specialFields === void 0 ? void 0 : specialFields.idField) != '_id') {
      listToConvert.forEach(value => {
        delete value._id;
      });
    }
  }
  /**
   * Converts dates and dateTimes properties of each element of the array to Typescript format
   * Ensure _id is set with the right id
   * @param listToConvert
   * @param specialFields
   * @protected
   */
  static cleanUpLoadedData(listToConvert, specialFields) {
    if (specialFields != null) {
      if (specialFields.idField == null) {
        StoreProviderHelper.findSpecialFieldsFromData(listToConvert, specialFields);
      }
      listToConvert.forEach(val => {
        var _a;
        if (specialFields.idField != null && specialFields.idField != "_id")
          // We need to copy the id to the standard _id field
          {
            val._id = val[specialFields.idField];
          }
        (_a = specialFields.dateFields) === null || _a === void 0 ? void 0 : _a.forEach(prop => {
          const toConvert = val[prop];
          if (toConvert != null) {
            let timeEpoch = Date.parse(toConvert);
            if (isNaN(timeEpoch)) {
              // Invalid date try to remove a possible TZ description in []
              const tzDescIndex = toConvert.lastIndexOf('[');
              if (tzDescIndex != -1) {
                timeEpoch = Date.parse(toConvert.substring(0, tzDescIndex));
              }
            }
            if (isNaN(timeEpoch)) {
              delete val[prop];
            } else {
              val[prop] = new Date(timeEpoch);
            }
          }
        });
      });
    }
  }
  /**
   * Sort the array using the defined sort declarations across all properties.
   *
   * @param toSort
   * @param sortOptions
   */
  static multiSortArray(toSort, sortOptions) {
    if (sortOptions == null) return toSort;
    return toSort;
  }
  /**
   * Calculates sum, avg, min or max values per group
   * @param values
   * @param groupBy
   * @param modelMgr
   * @param position
   * @param item
   */
  static calculateGroupedByValues(values, groupBy, modelMgr, position, item) {
    var _a, _b;
    // We are counting per different value of the groupedBy Item
    if (groupBy != null && groupBy.display != null) {
      let fieldToGroupBy = groupBy.of;
      if (groupBy.show != null) fieldToGroupBy = groupBy.show.valueOf();
      const counters = new Map();
      let lastGroupDelimiter;
      let oneGroupOfCounters = new Map();
      const fieldsRequired = groupBy.getRequiredListOfFields();
      for (const value of values) {
        if (value[fieldToGroupBy] != lastGroupDelimiter) {
          // We change the group
          lastGroupDelimiter = value[fieldToGroupBy];
          const storedGroupOfCounters = counters.get(lastGroupDelimiter);
          if (storedGroupOfCounters == null) {
            oneGroupOfCounters = new Map();
            counters.set(lastGroupDelimiter, oneGroupOfCounters);
          } else {
            oneGroupOfCounters = storedGroupOfCounters;
          }
        }
        for (const field of fieldsRequired) {
          let counter = oneGroupOfCounters === null || oneGroupOfCounters === void 0 ? void 0 : oneGroupOfCounters.get(field);
          if (counter == null) {
            counter = new Counters();
            oneGroupOfCounters.set(field, counter);
          }
          const valSrc = value[field];
          const val = valSrc;
          if (valSrc != null) {
            // If it's an object, we need to set the calculated values as the object itself
            if (typeof valSrc === 'object' && !(valSrc instanceof Date) && modelMgr != null) {
              if (counter.sum == null) counter.sum = structuredClone(valSrc);else {
                counter.sum = modelMgr.modifyValues(counter.sum, valSrc, counter.metaData, (first, second) => {
                  if (first != null && second != null) return first + second;else if (first == null) {
                    return second;
                  } else if (second == null) {
                    return first;
                  }
                }, position, item);
              }
              const _value = modelMgr.extractValue(valSrc, counter.metaData, position, item);
              if (counter.minimum == null) {
                counter.minimum = valSrc;
                counter.minAsValue = _value;
              } else {
                const minValue = counter.minAsValue;
                if (_value != null && (minValue == null || _value < minValue)) {
                  counter.minimum = valSrc;
                  counter.minAsValue = _value;
                }
              }
              if (counter.maximum == null) {
                counter.maximum = valSrc;
                counter.maxAsValue = _value;
              } else {
                const maxValue = counter.maxAsValue;
                if (_value != null && (maxValue == null || _value > maxValue)) {
                  counter.maximum = valSrc;
                  counter.maxAsValue = _value;
                }
              }
              if (_value != null) {
                counter.count++;
              }
            } else if (typeof val === 'number') {
              if (counter.sum == null) counter.sum = 0;
              counter.sum = counter.sum + val;
              if (counter.minimum == null || val < counter.minimum) {
                counter.minimum = valSrc;
                counter.minAsValue = valSrc;
              }
              if (counter.maximum == null || val > counter.maximum) {
                counter.maximum = valSrc;
                counter.maxAsValue = valSrc;
              }
              counter.count++;
            } else if (val instanceof Date && !isNaN(val.getTime())) {
              counter.sum = null;
              if (counter.minimum == null || val.valueOf() < counter.minimum.valueOf()) {
                counter.minimum = valSrc;
              }
              if (counter.maximum == null || val.valueOf() > counter.maximum.valueOf()) {
                counter.maximum = valSrc;
              }
              counter.count++;
            } else {
              // strings
              counter.count++;
            }
          }
        }
      }
      // Now that we have all the counters, let's generate the GroupedFields
      let ret;
      if (counters.size > 0) {
        ret = new DontCodeStoreGroupedByEntities(groupBy, new Map());
        for (const groupKey of counters.keys()) {
          const group = counters.get(groupKey);
          for (const aggregate of Object.values(groupBy.display)) {
            let value;
            const counter = group.get(aggregate.of);
            if (counter != null) {
              switch (aggregate.operation) {
                case DontCodeGroupOperationType.Count:
                  value = counter.count;
                  break;
                case DontCodeGroupOperationType.Sum:
                  value = counter.sum;
                  break;
                case DontCodeGroupOperationType.Average:
                  {
                    if (counter.sum == null || counter.count == 0) value = null;else if (typeof counter.sum === 'object' && !(counter.sum instanceof Date) && modelMgr != null) {
                      value = modelMgr.applyValue(structuredClone(counter.sum), modelMgr.extractValue(counter.sum, counter.metaData, position, item) / counter.count, counter.metaData, undefined, position, item);
                    } else value = counter.sum / counter.count;
                  }
                  break;
                case DontCodeGroupOperationType.Minimum:
                  value = counter.minimum;
                  break;
                case DontCodeGroupOperationType.Maximum:
                  value = counter.maximum;
                  break;
              }
              let listOfValues = (_a = ret.values) === null || _a === void 0 ? void 0 : _a.get(groupKey);
              if (listOfValues == null) {
                listOfValues = new Array();
                (_b = ret.values) === null || _b === void 0 ? void 0 : _b.set(groupKey, listOfValues);
              }
              listOfValues.push(new DontCodeStoreGroupedByValues(aggregate, value));
            }
          }
        }
        return ret.values.size > 0 ? ret : undefined;
      }
    }
    return undefined;
  }
}
StoreProviderHelper.specialFieldsCache = new Map();
class Counters {
  constructor() {
    this.count = 0;
    this.minAsValue = null;
    this.maxAsValue = null;
    this.metaData = new DataTransformationInfo();
  }
}
class SpecialFields {
  constructor() {
    this.dateFields = null;
    this.idField = null;
  }
  addDateField(name) {
    if (this.dateFields == null) {
      this.dateFields = new Array();
    }
    this.dateFields.push(name);
  }
}
class DontCodeStorePreparedEntities {
  constructor(sortedData, sortInfo, groupedByEntities) {
    this.sortedData = sortedData;
    this.sortInfo = sortInfo;
    this.groupedByEntities = groupedByEntities;
  }
}
class DontCodeStoreGroupedByEntities {
  constructor(groupInfo, values) {
    this.groupInfo = groupInfo;
    this.values = values;
    if (values == null) this.values = new Map();
  }
}
class DontCodeStoreGroupedByValues {
  constructor(forAggregate, value) {
    this.forAggregate = forAggregate;
    this.value = value;
  }
}
class AbstractDontCodeStoreProvider {
  constructor(modelMgr) {
    this.modelMgr = modelMgr;
  }
  safeLoadEntity(position, key) {
    return this.loadEntity(position, key).then(value => {
      if (value == null) return Promise.reject("Not found");else return value;
    });
  }
  /**
   * If the store supports queries with criteria, this function must be implemented, if not, listEntities must be implemented, and this function will apply filters
   * @param position
   * @param criteria
   */
  searchEntities(position, ...criteria) {
    return this.listEntities(position).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(value => {
      return StoreProviderHelper.applyFilters(value, ...criteria);
    }));
  }
  /**
   * Returns the list of entities at a given position in the model. Implements at least this function or searchEntities depending on the capability of the store
   * @param position
   * @protected
   */
  listEntities(position) {
    return this.searchEntities(position);
  }
  searchAndPrepareEntities(position, sort, groupBy, transformer, ...criteria) {
    return this.searchEntities(position, ...criteria).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(value => {
      // Run the transformation if any
      if (transformer != null) return transformer.postLoadingTransformation(value);else return value;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(value => {
      let groupedByValues;
      if (sort != null || (groupBy === null || groupBy === void 0 ? void 0 : groupBy.atLeastOneGroupIsRequested()) === true) {
        value = StoreProviderHelper.multiSortArray(value, this.calculateSortHierarchy(sort, groupBy));
        if (groupBy != null) {
          groupedByValues = StoreProviderHelper.calculateGroupedByValues(value, groupBy, this.modelMgr);
        }
      }
      return new DontCodeStorePreparedEntities(value, sort, groupedByValues);
    }));
  }
  calculateSortHierarchy(sort, groupBy) {
    // We must first sort by the groupBy, and then by the sort
    let rootSort;
    if (groupBy != null) {
      rootSort = new DontCodeStoreSort(groupBy.of, undefined, sort);
    } else {
      rootSort = sort;
    }
    return rootSort;
  }
}

/**
 * Ease the unit tests by providing helper functions
 */
class DontCodeTestManager {
  static createDeleteChange(containerSchema, containerItemId, schema, itemId, property) {
    return DontCodeTestManager.createAnyChange(ChangeType.DELETE, containerSchema, containerItemId, schema, itemId, null, property);
  }
  static createMoveChange(oldPosition, beforeIdOrProperty, containerSchema, containerItemId, schema, itemId, property) {
    const ret = DontCodeTestManager.createAnyChange(ChangeType.MOVE, containerSchema, containerItemId, schema, itemId, null, property);
    ret.oldPosition = oldPosition;
    if (beforeIdOrProperty) ret.beforeKey = beforeIdOrProperty;
    return ret;
  }
  static createTestChange(containerSchema, containerItemId, schema, itemId, value, property) {
    return DontCodeTestManager.createAnyChange(ChangeType.ADD, containerSchema, containerItemId, schema, itemId, value, property);
  }
  /**
   * To help testing with pre-loaded data, you can add a storeprovider that will return the content of the file in the url
   * whenever called for the position;
   * @param position
   * @param toFetchAsset
   */
  /*  public static addDummyProviderFromAsset (position:string, toFetchAsset: string): Promise<void> {
      return fetch(toFetchAsset).then(response => response.json()).then (content => {
          DontCodeTestManager.addDummyProviderFromContent( position, content);
      });
    }
  */
  /**
   * To help testing with pre-loaded data, you can add a storeprovider that will return the content of the file in the url
   * whenever called for the position;
   * @param position
   * @param toFetchAsset
   */
  static addDummyProviderFromContent(position, toReturn, modelMgr) {
    dtcde.getStoreManager().setProvider(new DummyStoreProvider(toReturn, modelMgr), position);
  }
  /**
   * Wait until the tester function returns true. Ideal for ensuring tests wait an async result.
   * It will call done () if tester was true, or done("Timeout") if tester has always returned false
   * @param tester
   * @param done
   * @param interval
   * @param maxTry
   */
  static waitUntilTrue(tester, done, interval, maxTry) {
    DontCodeTestManager.waitUntilTrueAndEmit(tester, interval, maxTry).then(ok => {
      if (ok) {
        done();
      } else {
        done("Timeout waiting for an event");
      }
    }, err => {
      done(err);
    });
  }
  static waitUntilTrueAndEmit(tester, interval, maxTry) {
    interval = interval !== null && interval !== void 0 ? interval : 50;
    maxTry = maxTry !== null && maxTry !== void 0 ? maxTry : 50;
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.timer)(interval, interval).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.take)(maxTry), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.filter)(() => {
      return tester();
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.map)(() => {
      return true;
    })), {
      defaultValue: false
    });
  }
  static createAnyChange(type, containerSchema, containerItemId, schema, itemId, value, property) {
    var _a;
    const calcContainerItemId = containerItemId ? '/' + containerItemId : '';
    const calcItemId = itemId ? '/' + itemId : '';
    let calcSchema = schema ? '/' + schema : '';
    if (containerSchema.length == 0) calcSchema = schema ? schema : '';
    let calcProperty = property ? '/' + property : '';
    if (containerSchema.length == 0 && calcSchema.length == 0) calcProperty = property ? property : '';
    const calcPropertySchemaItem = property ? calcSchema + calcItemId : itemId ? calcSchema : '';
    const calcPropertySchema = property ? calcSchema : '';
    return new Change(type, containerSchema + calcContainerItemId + calcSchema + calcItemId + calcProperty, value, new DontCodeModelPointer(containerSchema + calcContainerItemId + calcSchema + calcItemId + calcProperty, containerSchema + calcSchema + calcProperty, containerSchema + calcContainerItemId + calcPropertySchemaItem, containerSchema + calcPropertySchema, (_a = property !== null && property !== void 0 ? property : itemId) !== null && _a !== void 0 ? _a : undefined, property != null));
  }
}
/**
 * Helper that emulates a StoreProvider with predefined values
 */
class DummyStoreProvider extends AbstractDontCodeStoreProvider {
  constructor(content, modelMgr) {
    super(modelMgr);
    this.content = content;
  }
  canStoreDocument(position) {
    return false;
  }
  deleteEntity(position, key) {
    return Promise.reject("Not implemented by Dummy tester");
  }
  loadEntity(position, key) {
    if (this.content[key] != null) return Promise.resolve(this.content[key]);
    return Promise.reject('Not found');
  }
  searchEntities(position, ...criteria) {
    if (Array.isArray(this.content)) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.from)([this.content]);
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.from)([[this.content]]);
    }
  }
  storeDocuments(toStore, position) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.throwError)(() => new Error("Not implemented by Dummy tester"));
  }
  storeEntity(position, entity) {
    return Promise.reject("Not implemented by Dummy tester");
  }
}
/**
 * A Class able to return a pre-defined json value. Can be used to inject to component
 */
class TestProviderInterface {
  constructor(toRet) {
    this.toRet = toRet;
  }
  getJsonAt(position) {
    return this.toRet;
  }
  receiveCommands(position, lastItem) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_21__.Observable();
  }
  calculatePointerFor(position) {
    return dtcde.getSchemaManager().generateSchemaPointer(position);
  }
  getSchemaManager() {
    return dtcde.getSchemaManager();
  }
  sendCommand(action) {
    return Promise.resolve(undefined);
  }
}

/**
 * Standard API for manipulating projects
 */
class DontCodeProject {
  constructor() {
    this.name = '';
    this.template = false;
    this.description = '';
  }
}


/***/ }),

/***/ 3760:
/*!*************************************************************************************************!*\
  !*** ../../libs/ng-common/dist/libs/common/esm2020/lib/common-config/common-config.service.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonConfigService": () => (/* binding */ CommonConfigService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5527);
/* harmony import */ var _common_global_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-global/globals */ 213);




/**
 * A service storing configuration information.
 * Configuration can be changed after loading
 */
class CommonConfigService {
  constructor(config) {
    this.updates = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject(1);
    this.config = config;
    if (this.config == null) this.config = {};
  }
  getConfig() {
    return this.config;
  }
  getUpdates() {
    return this.updates;
  }
  updateConfig(property, value) {
    this.config[property] = value;
    this.updates.next(this.config);
  }
  batchUpdateConfig(newValues) {
    this.config = Object.assign(this.config, newValues);
    this.updates.next(this.config);
  }
}
CommonConfigService.ɵfac = function CommonConfigService_Factory(t) {
  return new (t || CommonConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_common_global_globals__WEBPACK_IMPORTED_MODULE_2__.DONT_CODE_COMMON_CONFIG, 8));
};
CommonConfigService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: CommonConfigService,
  factory: CommonConfigService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CommonConfigService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_common_global_globals__WEBPACK_IMPORTED_MODULE_2__.DONT_CODE_COMMON_CONFIG]
      }]
    }];
  }, null);
})();

/***/ }),

/***/ 8364:
/*!*********************************************************************************************!*\
  !*** ../../libs/ng-common/dist/libs/common/esm2020/lib/common-config/common-lib-config.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CHANNEL_CHANGE_NAME": () => (/* binding */ CHANNEL_CHANGE_NAME),
/* harmony export */   "SANDBOX_MENUS": () => (/* binding */ SANDBOX_MENUS)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8988);

/*export const basicStoreApiUrlConfig = (config:CommonLibConfig) => {
  return config.storeUrl;
};

export const basicDocumentApiUrlConfig = (config:CommonLibConfig) => {
  return config.documentUrl;
};*/
const CHANNEL_CHANGE_NAME = 'preview-ui-changes';
const SANDBOX_MENUS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('Allows addition of menus');

/***/ }),

/***/ 2004:
/*!*****************************************************************************************************!*\
  !*** ../../libs/ng-common/dist/libs/common/esm2020/lib/common-dynamic/component-loader.service.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentLoaderService": () => (/* binding */ ComponentLoaderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _common_global_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common-global/globals */ 213);
/* harmony import */ var async_mutex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! async-mutex */ 7278);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dontcode/core */ 8612);





/**
 * Manages the dynamic loading of components able to display a data located at a specific pointer position
 * Depending on the plugins loaded, a different component can display the same value.
 *
 * It keeps in cache as well the component factory and module used for a pointer position
 */
class ComponentLoaderService {
  constructor(injector, dontCodeCore, previewMgr, provider) {
    this.injector = injector;
    this.dontCodeCore = dontCodeCore;
    this.previewMgr = previewMgr;
    this.provider = provider;
    this.moduleMap = new Map();
    this.mutex = new async_mutex__WEBPACK_IMPORTED_MODULE_0__.Mutex();
  }
  /**
   * Either creates or retrieves the module whose name is in parameter.
   * @param moduleName
   */
  getOrCreatePluginModuleRef(moduleSource) {
    return this.mutex.acquire().then(release => {
      try {
        let moduleRef = this.moduleMap.get(moduleSource);
        if (!moduleRef) {
          moduleRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.createNgModule)((0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.getNgModuleById)('dontcode-plugin/' + moduleSource), this.injector);
          if (moduleRef) {
            this.moduleMap.set(moduleSource, moduleRef);
          }
        }
        return moduleRef;
      } finally {
        release();
      }
    });
  }
  loadPluginModule(handlerConfig) {
    return this.getOrCreatePluginModuleRef(handlerConfig.class.source).then(moduleRef => {
      if (moduleRef != null) {
        // Now init the newly loaded module
        this.dontCodeCore.initPlugins();
      }
      return moduleRef;
    });
  }
  insertComponentForFieldType(type, insertPoint) {
    return this.insertComponent('creation/entities/fields/type', insertPoint, type);
  }
  insertComponent(schemaPosition, insertPoint, currentJson) {
    let schemaPos = schemaPosition.positionInSchema;
    let isPointer;
    if (schemaPos) {
      isPointer = true;
      if (!currentJson) {
        currentJson = this.provider?.getJsonAt(schemaPosition.position);
      }
    } else {
      isPointer = false;
      schemaPos = schemaPosition;
    }
    const handlerConfig = this.previewMgr.retrieveHandlerConfig(schemaPos, currentJson);
    if (handlerConfig) {
      //console.debug('Importing from ', handlerConfig.class.source);
      // First lets try if the plugin is imported during the compilation
      return this.loadPluginModule(handlerConfig).then(moduleRef => {
        const componentClass = moduleRef.instance.exposedPreviewHandlers().get(handlerConfig.class.name);
        return this.createComponent(componentClass, insertPoint, moduleRef, isPointer ? schemaPosition : null);
      }).catch(reason => {
        console.error("Cannot load module because of ", reason);
        return Promise.reject('Cannot load module for source ' + handlerConfig.class.source + ' because of ' + reason);
      });
      //console.log ("Applying component");
    } else {
      return Promise.resolve(null);
    }
  }
  createComponent(componentClass, insertPoint, moduleRef, position) {
    let injector = this.injector;
    const componentRef = insertPoint.createComponent(componentClass, {
      injector: injector,
      ngModuleRef: moduleRef
    });
    const component = componentRef.instance;
    if (component.initCommandFlow) {
      // It's a previewHandler
      if (!position) throw new Error('Component ' + component.constructor.name + ' is a PreviewHandler and parent position is missing.');
      if (!this.provider) throw new Error('Component ' + component.constructor.name + ' is a PreviewHandler and CommandProviderInterface is missing.');
      component.initCommandFlow(this.provider, position);
    }
    return component;
  }
  /**
   * For some reasons, during a Jest test, modules are not registered in Angular getNgModuleById(), so we let the possibility to do it by hand
   * @param module
   * @param source
   */
  registerModuleForTest(module, source) {
    if (module.instance == null)
      // It's not a NgModuleRef
      this.moduleMap.set(source, (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.createNgModule)(module, this.injector));else this.moduleMap.set(source, module);
  }
}
ComponentLoaderService.ɵfac = function ComponentLoaderService_Factory(t) {
  return new (t || ComponentLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_common_global_globals__WEBPACK_IMPORTED_MODULE_3__.DONT_CODE_CORE), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_dontcode_core__WEBPACK_IMPORTED_MODULE_1__.DontCodePreviewManager), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_common_global_globals__WEBPACK_IMPORTED_MODULE_3__.COMMAND_PROVIDER, 8));
};
ComponentLoaderService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ComponentLoaderService,
  factory: ComponentLoaderService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ComponentLoaderService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_common_global_globals__WEBPACK_IMPORTED_MODULE_3__.DONT_CODE_CORE]
      }]
    }, {
      type: _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.DontCodePreviewManager
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_common_global_globals__WEBPACK_IMPORTED_MODULE_3__.COMMAND_PROVIDER]
      }]
    }];
  }, null);
})();

/***/ }),

/***/ 213:
/*!***********************************************************************************!*\
  !*** ../../libs/ng-common/dist/libs/common/esm2020/lib/common-global/globals.mjs ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMMAND_PROVIDER": () => (/* binding */ COMMAND_PROVIDER),
/* harmony export */   "DONT_CODE_COMMON_CONFIG": () => (/* binding */ DONT_CODE_COMMON_CONFIG),
/* harmony export */   "DONT_CODE_CORE": () => (/* binding */ DONT_CODE_CORE)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8988);

let COMMAND_PROVIDER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('Inject the current command provider interface');
/**
 * Enable the Dont-code Core interface to be injected
 */
const DONT_CODE_CORE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("Dont-code core object");
/**
 * Enable the injection of static config parameters (internal use only)
 */
const DONT_CODE_COMMON_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('DontCodeCommonLibConfig');

/***/ }),

/***/ 6683:
/*!****************************************************************************************************!*\
  !*** ../../libs/ng-common/dist/libs/common/esm2020/lib/common-handler/abstract-plugin-handler.mjs ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractPluginHandler": () => (/* binding */ AbstractPluginHandler)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2320);
/* harmony import */ var _plugin_handler_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugin-handler-helper */ 7252);


/**
 * Helps develop a plugin handler that is not an Angular Component. For an Angular Component handling model changes, please use PluginBaseComponent
 */
class AbstractPluginHandler {
  constructor() {
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subscription();
    this.pluginHelper = new _plugin_handler_helper__WEBPACK_IMPORTED_MODULE_1__.PluginHandlerHelper();
    this.entityPointer = null;
    this.provider = null;
  }
  unsubscribe() {
    this.pluginHelper.unsubscribe();
    this.subscriptions.unsubscribe();
  }
  initCommandFlow(provider, pointer) {
    this.entityPointer = pointer;
    this.provider = provider;
    this.pluginHelper.initCommandFlow(provider, pointer, this);
  }
  initChangeListening() {
    this.pluginHelper.initChangeListening();
  }
  /**
   * When the component is created for display, it receives the initial data as complete Json.
   * If it wants, it can call this method who will call handleChange for each property.
   * This will avoid to duplicate code (first time when a complete json is sent, second when subelements are sent)
   * @protected
   */
  decomposeJsonToMultipleChanges(pointer, json) {
    this.pluginHelper.decomposeJsonToMultipleChanges(pointer, json);
  }
  /**
   * Updates the array of T elements by applying the changes received and calling the transform method
   * @param cols
   * @param colsMap
   * @param change
   * @param property
   * @param transform
   * @private
   */
  applyUpdatesToArray(target, targetMap, change, property, transform, applyProperty) {
    return this.applyUpdatesToArrayAsync(target, targetMap, change, property, (key, item) => {
      return Promise.resolve(transform(key, item));
    });
  }
  /**
   * Updates the array of T elements by applying the changes received and calling the transform method
   * @param target
   * @param targetMap
   * @param change
   * @param property
   * @param transform
   * @param parentPosition
   * @param applyProperty
   * @private
   */
  applyUpdatesToArrayAsync(target, targetMap, change, property, transform, parentPosition, applyProperty) {
    return this.pluginHelper.applyUpdatesToArrayAsync(target, targetMap, change, property, transform, parentPosition, applyProperty);
  }
  /**
   * Called whenever an action needs to be performed on the data
   * @param action
   */
  performAction(action) {
    return Promise.resolve(undefined);
  }
}

/***/ }),

/***/ 7252:
/*!**************************************************************************************************!*\
  !*** ../../libs/ng-common/dist/libs/common/esm2020/lib/common-handler/plugin-handler-helper.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginHandlerHelper": () => (/* binding */ PluginHandlerHelper)
/* harmony export */ });
/* harmony import */ var _home_runner_work_monorepo_monorepo_common_temp_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/temp/node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 8706);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 224);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 1787);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2320);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2954);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1211);
/* harmony import */ var async_mutex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! async-mutex */ 7278);





/**
 * This class does all the hard work of managing changes and actions, so that your plugin only has to implement handleChange and performAction
 * As there is no one to one mapping between the position of the change and the position the plugin is interested in, we need to generate subevent to ensure the plugin is receiving updates.
 */
class PluginHandlerHelper {
  constructor() {
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    this.entityPointer = null;
    this.provider = null;
    this.changeHandler = null;
    this.actionPerformer = null;
    this.mutex = new async_mutex__WEBPACK_IMPORTED_MODULE_2__.Mutex();
  }
  initCommandFlow(provider, pointer, changeHandler, actionPerformer) {
    this.entityPointer = pointer;
    this.provider = provider;
    this.changeHandler = changeHandler;
    if (actionPerformer != null) this.actionPerformer = actionPerformer;else if (changeHandler.performAction != null) {
      // The changehandler is as well an action performer
      this.actionPerformer = changeHandler;
    }
  }
  /**
   * When the component is created for display, it receives the initial data as complete Json.
   * If it wants, it can call this method who will call handleChange for each property.
   * This will avoid to duplicate code (first when a complete json is sent, then when subelements are sent)
   * @protected
   */
  decomposeJsonToMultipleChanges(pointer, json) {
    // Do nothing as now the events are already splitted per subItems
    if (typeof json === 'object' && this.provider) {
      let change;
      const schemaManager = this.provider.getSchemaManager();
      for (const prop in json) {
        if (json.hasOwnProperty(prop)) {
          const subPropertyPointer = schemaManager.generateSubSchemaPointer(pointer, prop);
          const propType = schemaManager.locateItem(subPropertyPointer.positionInSchema);
          if (propType?.isArray() && subPropertyPointer.isProperty) {
            this.decomposeJsonToMultipleChanges(subPropertyPointer, json[prop]);
          } else {
            change = new _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.Change(_dontcode_core__WEBPACK_IMPORTED_MODULE_1__.ChangeType.RESET, pointer.position + '/' + prop, json[prop], subPropertyPointer);
            if (!propType && change.pointer) {
              // This is not a sub property but a subItem of an array
              //change.pointer.itemId = change.pointer.key;
              change.pointer.isProperty = false;
            }
            if (this.changeHandler != null) this.changeHandler.handleChange(change);
          }
        }
      }
    }
  }
  /**
   * Calls handleChange each time a change event for any element below this (as per the model's position) is received
   * @protected
   */
  initChangeListening(subElement) {
    this.initOtherChangeListening(subElement, this.entityPointer);
  }
  /**
   * Calls handleChange each time a change event for any element of the model given in parameter
   * @protected
   */
  initOtherChangeListening(subElement, pointer) {
    if (this.provider && pointer) {
      let filter = pointer.position;
      if (subElement !== true) filter += '/?';
      this.subscriptions.add(this.provider.receiveCommands(filter).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(change => {
        if (change.actionType != null)
          // It's an action, not a change
          {
            if (this.actionPerformer) {
              const action = change;
              action.running?.next(this.actionPerformer.performAction(action));
            }
          } else if (this.changeHandler) {
          this.changeHandler.handleChange(change);
        }
      })).subscribe());
    } else {
      throw new Error('Cannot listen to change before initCommandFlow is called');
    }
  }
  /**
   * Updates the array of T elements by applying the changes received and calling the transform method
   * @param cols
   * @param colsMap
   * @param change
   * @param property
   * @param transform
   * @private
   */
  applyUpdatesToArray(target, targetMap, change, property, transform, applyProperty) {
    return this.applyUpdatesToArrayAsync(target, targetMap, change, property, (key, item) => {
      return Promise.resolve(transform(key, item));
    });
  }
  /**
   * Updates the array of T elements by applying the changes received and calling the transform method
   * @param target
   * @param targetMap
   * @param change
   * @param property
   * @param transform
   * @param parentPosition
   * @param applyProperty
   * @private
   */
  applyUpdatesToArrayAsync(target, targetMap, change, property, transform, parentPosition, applyProperty) {
    // We have the mutex to avoid multiple changes checking the map and target array at the same time...
    return this.mutex.runExclusive(() => {
      try {
        if (!this.provider) throw new Error('Cannot apply updates before initCommandFlow is called');
        if (!change.pointer) {
          change.pointer = this.provider.calculatePointerFor(change.position);
        }
        // If the change concerns the array, then calculates it's element (itemId)
        parentPosition = parentPosition ?? this.entityPointer?.position;
        if (property != null) parentPosition = parentPosition + '/' + property;
        const subItem = change.pointer.containerPosition === parentPosition;
        let itemId = subItem ? change.pointer.lastElement : _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.DontCodeModelPointer.lastElementOf(change.pointer.containerPosition) ?? null;
        let propertyId = change.pointer.isProperty ? change.pointer.lastElement : null;
        let futureTarget = null;
        let newTarget = null;
        let pos = -1;
        let targetPos = -1;
        if (itemId != null && targetMap.has(itemId)) {
          // Does the target item already exist ?
          pos = targetMap.get(itemId);
          newTarget = target[pos];
          futureTarget = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(newTarget);
        }
        if (change.beforeKey) {
          targetPos = targetMap.get(change.beforeKey);
        }
        switch (change.type) {
          case _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.ChangeType.ADD:
          case _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.ChangeType.UPDATE:
          case _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.ChangeType.RESET:
            if (propertyId != null) {
              // It's not a replacement of the item but a change in one of its property
              // Can we try to update directly the sub property?
              if (!newTarget || newTarget && (!applyProperty || !applyProperty(newTarget, propertyId, change.value))) {
                // It cannot be dynamically updated by the caller, so we do a full replacement
                const fullValue = this.provider.getJsonAt(change.pointer.containerPosition);
                //if (change.value!==fullValue[propertyId]) { Don't check as the new value as already been set in the json
                const parentPointer = this.provider.calculatePointerFor(change.pointer.containerPosition);
                if (parentPointer.isProperty) throw new Error('A parent of a property ' + change.pointer.position + ' must be an array');
                futureTarget = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(transform(parentPointer, fullValue));
                /*                      }else {
                        // We set the same value, so nothing changed
                        futureTarget = null;
                      }*/
              }
            } else {
              // The new value replace the old one
              futureTarget = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.from)(transform(change.pointer, change.value));
            }
            break;
          case _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.ChangeType.MOVE:
            if (pos !== -1 && subItem && itemId) {
              // We delete the element moved, it will be inserted at the right position later
              if (targetPos !== -1 && targetPos > pos) targetPos--;
              target.splice(pos, 1);
              // Recalculate all indexes in targetMap
              targetMap.forEach((value, key) => {
                if (value > pos) {
                  targetMap.set(key, value - 1);
                }
              });
              targetMap.delete(itemId);
              pos = -1;
            }
            break;
          case _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.ChangeType.DELETE:
            if (pos !== -1 && subItem && itemId) {
              target.splice(pos, 1);
              // Recalculate all indexes in targetMap
              targetMap.forEach((value, key) => {
                if (value > pos) {
                  targetMap.set(key, value - 1);
                }
              });
              targetMap.delete(itemId);
            }
            futureTarget = null;
            break;
        }
        if (futureTarget) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(futureTarget.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(result => {
            if (pos !== -1) {
              // We just need to replace the new value at the same position
              target[pos] = result;
            } else if (targetPos !== -1) {
              // Insert the element at the correct position
              target.splice(targetPos, 0, result);
              // Recalculate all indexes in targetMap
              targetMap.forEach((value, key) => {
                if (value >= targetPos) {
                  targetMap.set(key, value + 1);
                }
              });
              if (itemId != null) targetMap.set(itemId, targetPos);else throw new Error('Cannot set targetPos ' + targetPos + ' without knowing the itemId');
            } else {
              // Insert the element at the end
              target.push(result);
              if (itemId != null) targetMap.set(itemId, targetMap.size);else throw new Error('Cannot set targetPos ' + targetPos + ' without knowing the itemId');
            }
            return target;
          }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeLast)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(error => {
            return Promise.reject(error);
          })));
        } else {
          return Promise.resolve(target);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    });
  }
  unsubscribe() {
    this.subscriptions.unsubscribe();
  }
  /**
   * Sends the action to whatever component can perform it
   * @param action
   */
  performAction(action) {
    var _this = this;
    return (0,_home_runner_work_monorepo_monorepo_common_temp_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.provider != null) yield _this.provider.sendCommand(action);else return Promise.reject('No provider for the component at position ' + _this.entityPointer?.position);
    })();
  }
}

/***/ }),

/***/ 3824:
/*!*************************************************************************************************!*\
  !*** ../../libs/ng-common/dist/libs/common/esm2020/lib/common-storage/entity-store.service.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityListManager": () => (/* binding */ EntityListManager),
/* harmony export */   "EntityStoreService": () => (/* binding */ EntityStoreService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_monorepo_monorepo_common_temp_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/temp/node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 8706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 224);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1211);







class EntityStoreService {
  constructor(storeMgr, modelMgr) {
    this.storeMgr = storeMgr;
    this.modelMgr = modelMgr;
    this.listsByPosition = new Map();
  }
  retrieveListManager(pointer, description) {
    let newOne = this.listsByPosition.get(pointer.position);
    if (newOne == null) {
      newOne = new EntityListManager(pointer, description, this.storeMgr, this.modelMgr);
      this.listsByPosition.set(pointer.position, newOne);
    }
    return newOne;
  }
}
EntityStoreService.ɵfac = function EntityStoreService_Factory(t) {
  return new (t || EntityStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_dontcode_core__WEBPACK_IMPORTED_MODULE_1__.DontCodeStoreManager), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_dontcode_core__WEBPACK_IMPORTED_MODULE_1__.DontCodeModelManager));
};
EntityStoreService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: EntityStoreService,
  factory: EntityStoreService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EntityStoreService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.DontCodeStoreManager
    }, {
      type: _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.DontCodeModelManager
    }];
  }, null);
})();
/**
 * Manages a list of any object stored by the Dont-Code StoreManager in a way that Angular detects the changes
 */
class EntityListManager {
  constructor(pointer, description, storeMgr, modelMgr) {
    this.storeMgr = storeMgr;
    this.modelMgr = modelMgr;
    /**
     * The array of entities to use
     */
    this.entities = null;
    this.prepared = null;
    this.pointer = pointer;
    this.description = description;
  }
  push(element) {
    if (this.entities == null) this.entities = new Array(element);else this.entities = [...this.entities, element];
  }
  updateWithDetailedEntity(element) {
    const elementId = element._id;
    const updated = new Array();
    if (this.entities != null) {
      this.entities.forEach(value => {
        const valueId = value._id;
        if (valueId == elementId) {
          element = {
            ...element,
            ...value
          };
          updated.push(element);
        } else {
          updated.push(value);
        }
      });
      this.entities = [...updated];
    } else {
      this.entities = [element];
    }
    return element;
  }
  replace(element) {
    if (this.entities == null) return false;
    const elementId = element._id;
    let ret = false;
    const updated = new Array();
    this.entities.forEach(value => {
      const valueId = value._id;
      if (valueId == elementId) {
        updated.push(element);
        ret = true;
      } else {
        updated.push(value);
      }
    });
    this.entities = [...updated];
    return ret;
  }
  remove(element) {
    if (this.entities == null) return Promise.resolve(false);
    const elementId = element._id;
    if (elementId == null)
      // Not saved yet, so just remove it from the list
      {
        return new Promise(resolve => {
          if (this.entities != null) {
            this.entities = this.entities.filter(val => val !== element);
            this.prepared = null;
            resolve(true);
          } else resolve(false);
        });
      } else {
      return this.storeMgr.deleteEntity(this.pointer.position, elementId).then(deleted => {
        if (deleted) {
          if (this.entities != null) {
            this.entities = this.entities.filter(val => val !== element);
            this.prepared = null;
          }
        }
        return deleted;
      }).catch(reason => {
        console.error(reason.message);
        return false;
      });
    }
  }
  reset() {
    if (this.entities != null) this.entities.length = 0;
    this.prepared = null;
  }
  store(element) {
    this.prepared = null;
    return this.storeMgr.storeEntity(this.pointer.position, element);
  }
  /**
   * Saves permanently all elements that have been changed
   */
  storeAllChanged() {
    var _this = this;
    return (0,_home_runner_work_monorepo_monorepo_common_temp_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.entities == null) return;
      _this.prepared = null;
      for (const entity of _this.entities) {
        yield _this.storeMgr.storeEntity(_this.pointer.position, entity);
      }
    })();
  }
  loadAll() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(this.storeMgr.searchEntities(this.pointer.position).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(values => {
      this.prepared = null;
      this.entities = [...values];
      return;
    })), {
      defaultValue: undefined
    });
  }
  searchAndPrepareEntities(sort, groupBy, dataTransformer, ...criteria) {
    // It only supports one groupby and one sortby for now, so just find one if any
    let listOfValues = sort != null ? Object.values(sort) : [];
    const sortStore = listOfValues.length > 0 ? listOfValues[0] : undefined;
    listOfValues = groupBy != null ? Object.values(groupBy) : [];
    const groupByStore = listOfValues.length > 0 ? new _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.DontCodeStoreGroupby(listOfValues[0].of, listOfValues[0].display, listOfValues[0].show) : undefined;
    if (this.entities != null) {
      this.prepared = null;
      // Already loaded, just sort & group
      let sortedValues = this.entities;
      let groupedValues = undefined;
      if (criteria != null) sortedValues = _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.StoreProviderHelper.applyFilters(sortedValues, ...criteria);
      if (dataTransformer != null) {
        sortedValues = dataTransformer.postLoadingTransformation(sortedValues);
      }
      if (sortStore != null) {
        sortedValues = _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.StoreProviderHelper.multiSortArray(sortedValues, sortStore);
      }
      if (groupByStore != null) {
        groupedValues = _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.StoreProviderHelper.calculateGroupedByValues(sortedValues, groupByStore, this.modelMgr, this.pointer);
      }
      if (criteria != null || sort != null || groupBy != null) {
        this.prepared = new _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.DontCodeStorePreparedEntities(sortedValues, sortStore, groupedValues);
      }
      this.entities = sortedValues; // Updates the list with sorted and modified values
      return Promise.resolve();
    } else {
      // Not loaded already, just ask the store to do it
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(this.storeMgr.searchAndPrepareEntities(this.pointer.position, sortStore, groupByStore, dataTransformer, ...criteria).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(value => {
        this.prepared = value;
        this.entities = this.prepared.sortedData;
      })));
    }
  }
  /**
   * Loads the detail of an already loaded item. Makes sure it only add any additional fields without changing any values of the item in memory
   * @param toLoad
   */
  loadDetailFromKey(key) {
    if (key == null) return Promise.reject("Cannot load entity with null key");
    return this.storeMgr.loadEntity(this.pointer.position, key).then(loaded => {
      if (loaded != null) {
        return this.updateWithDetailedEntity(loaded);
      }
      return loaded;
    });
  }
  /**
  * Loads the detail of an already loaded item.
  * @param toLoad
  */
  loadDetailOf(toLoad) {
    return this.loadDetailFromKey(toLoad._id);
  }
}

/***/ }),

/***/ 561:
/*!**************************************************************************************************!*\
  !*** ../../libs/ng-common/dist/libs/common/esm2020/lib/common-ui/abstract-dynamic-component.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractDynamicComponent": () => (/* binding */ AbstractDynamicComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4848);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8988);




/**
 * A component that can be dynamically loaded by the dont-code framework.
 * It can integrate with a reactive form.
 * To dynamically load other Dont-code components for subFields, you should use AbstractDynamicLoaderComponent instead
 * To listen to model change, you have to derive from PluginBaseComponent instead.
 */
class AbstractDynamicComponent {
  constructor() {
    this.parentPosition = null;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subscription();
  }
  setName(name) {
    this.name = name;
  }
  getValue() {
    if (this.form != null) this.updateValueFromForm();
    return this.value;
  }
  setValue(val) {
    this.value = val;
    if (this.form != null) this.hydrateValueToForm();
  }
  setParentPosition(position) {
    this.parentPosition = position;
  }
  setForm(form) {
    this.form = form;
    if (this.form != null && this.name != null) {
      this.createAndRegisterFormControls();
    }
  }
  getForm() {
    return this.form;
  }
  /**
   * By default registers a single control with the name this.name
   * @protected
   */
  createAndRegisterFormControls() {
    const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(null, {
      updateOn: 'blur'
    });
    this.form.registerControl(this.name, control);
  }
  /**
   * This method allows components to generate a value manageable in FormControl from the original value (set by setValue ())
   * By default the same value is used
   * @param val
   */
  transformToFormGroupValue(val) {
    return val;
  }
  /**
   * From the values in FormControl to a value manageable by the Dont-code Framework. Will be called by getValue
   * By default the same value is used
   * @param val
   */
  transformFromFormGroupValue(val) {
    return val;
  }
  /**
   * Updates the form with the value
   */
  hydrateValueToForm() {
    if (this.name != null) {
      const control = this.form.get(this.name);
      if (control == null) {
        throw new Error("No form control for the name " + this.name);
      } else {
        const formValue = this.transformToFormGroupValue(this.value);
        control.setValue(formValue, {
          emitEvent: false
        });
      }
    }
  }
  /**
   * Retrieve value from the Angular form, and converts it to a value that can be stored
   * @return true if value have been updated
   */
  updateValueFromForm() {
    if (this.name == null) return false;
    const control = this.form.get(this.name);
    if (control == null) {
      throw new Error("No form control for the name " + this.name);
    } else {
      if (control.dirty) {
        this.value = this.transformFromFormGroupValue(control.value);
        control.markAsPristine({
          onlySelf: true
        });
        return true;
      }
    }
    return false;
  }
  /**
   * Returns a string that can best display the value or null if it's already a string
   * @param value
   */
  static toBeautifyString(value, maxLength) {
    if (value == null) return null;
    let ret = "";
    if (Array.isArray(value)) {
      value = value[0];
    }
    // Try to see if we have json or Date or something else
    switch (typeof value) {
      case "string":
        {
          ret = value;
          break;
        }
      case "object":
        {
          if (value instanceof Date) {
            ret = value.toLocaleDateString();
          } else {
            ret = JSON.stringify(value, null, 2);
          }
          break;
        }
      case "undefined":
        {
          break;
        }
      default:
        {
          ret = value.toLocaleString();
        }
    }
    if (maxLength != null) {
      if (ret.length > maxLength) {
        ret = ret.substring(0, maxLength - 3) + '...';
      }
    }
    return ret;
  }
  listEventSources() {
    return [];
  }
  selectEventSourceFor(type, name) {
    const sources = this.listEventSources();
    for (const src of sources) {
      if (src.type === type) {
        if (name == null) return src;else if (src.name == name) {
          return src;
        }
      }
    }
    return null;
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
AbstractDynamicComponent.ɵfac = function AbstractDynamicComponent_Factory(t) {
  return new (t || AbstractDynamicComponent)();
};
AbstractDynamicComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AbstractDynamicComponent,
  selectors: [["ng-component"]],
  decls: 0,
  vars: 0,
  template: function AbstractDynamicComponent_Template(rf, ctx) {},
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AbstractDynamicComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      template: ''
    }]
  }], null, null);
})();

/***/ }),

/***/ 6093:
/*!*********************************************************************************************************!*\
  !*** ../../libs/ng-common/dist/libs/common/esm2020/lib/common-ui/abstract-dynamic-loader-component.mjs ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractDynamicLoaderComponent": () => (/* binding */ AbstractDynamicLoaderComponent),
/* harmony export */   "DynamicInsertPoint": () => (/* binding */ DynamicInsertPoint),
/* harmony export */   "SubFieldInfo": () => (/* binding */ SubFieldInfo)
/* harmony export */ });
/* harmony import */ var _abstract_dynamic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-dynamic-component */ 561);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4848);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5527);
/* harmony import */ var _common_dynamic_component_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common-dynamic/component-loader.service */ 2004);






/** A component must be attached to a insertionpoint in the template **/
class DynamicInsertPoint {}
DynamicInsertPoint.ɵfac = function DynamicInsertPoint_Factory(t) {
  return new (t || DynamicInsertPoint)();
};
DynamicInsertPoint.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DynamicInsertPoint,
  selectors: [["dtcde-dynamic"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicInsertPoint, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'dtcde-dynamic'
    }]
  }], null, null);
})();
/**
 * A component that can be dynamically loaded by the dont-code framework, and can dynamically load subcomponents
 * It can integrate with the reactive form or not depending on calling setForm () or not.
 *
 * Components that dynamically loads other components must at least define an insertion point by using this <dtcde-dynamic></dtcde-dynamic>
 */
class AbstractDynamicLoaderComponent extends _abstract_dynamic_component__WEBPACK_IMPORTED_MODULE_1__.AbstractDynamicComponent {
  constructor(loader, injector, ref) {
    super();
    this.loader = loader;
    this.injector = injector;
    this.ref = ref;
    /**
     * Manages the components that are bound to the form
     */
    this.fields = new Array();
    /**
     * Stores the position of subField in fields depending on its name
     * @protected
     */
    this.fieldsMap = new Map();
    this.parentForm = null;
    /**
     * Any action that needs to happen after ngAfterViewInit can be added to this.
     * @protected
     */
    this.componentInited = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject();
  }
  /**
   * Define that a subvalue named propertyAndFormName will be managed by a subcomponent of type type
   * Example: defineSubFields ('currencyCode', 'Currency') will handle a plugin to manage the currency
   * @param formName
   * @param type
   */
  defineSubField(propertyAndFormName, type) {
    const newSubField = new SubFieldInfo(propertyAndFormName, type);
    this.addSubField(newSubField);
  }
  /**
   * Retrieve the information of the subfield at the given name.
   * @param propertyAndFormName
   * @protected
   */
  getSubField(propertyAndFormName) {
    const pos = this.fieldsMap.get(propertyAndFormName);
    if (pos != null) return this.fields[pos];else return;
  }
  addSubField(toAdd) {
    const pos = this.fields.push(toAdd);
    this.fieldsMap.set(toAdd.name, pos - 1);
    return pos;
  }
  getSubFields() {
    return this.fields;
  }
  /**
   * This component will load subfields, so unless it doesn't have a name, it creates a new FormGroup
   * @param form
   */
  setForm(form) {
    // Register a FormGroup for this component has it will have to manage values from subFields as well
    if (this.name) {
      const formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({}, {
        updateOn: 'blur'
      });
      form.registerControl(this.name, formGroup);
      super.setForm(formGroup);
      this.parentForm = form;
    } else {
      super.setForm(form);
      this.parentForm = null;
    }
    this.preloadSubFields();
  }
  hydrateValueToForm() {
    // Don't try to update the form as if it is a standard component
    // as most likely we have created a new FormGroup
    if (this.parentForm == null) super.hydrateValueToForm();else {
      let formValue = this.transformToFormGroupValue(this.value);
      // Sets the form value that are not managed directly by a field
      for (const key in this.form.controls) {
        if (this.fieldsMap.get(key) == null) {
          const control = this.form.get(key);
          control?.setValue(formValue ? formValue[key] : formValue, {
            emitEvent: false
          });
        }
      }
    }
  }
  updateValueFromForm() {
    if (this.parentForm == null) return super.updateValueFromForm();else {
      let isChanged = false;
      // Sets the form value that are not managed directly by a field
      for (const key in this.form.controls) {
        if (this.fieldsMap.get(key) == null) {
          const control = this.form.get(key);
          if (control != null) {
            if (control.dirty) {
              const value = this.transformFromFormGroupValue(control?.value);
              if (this.value == null) {
                this.value = {};
              }
              this.value[key] = value;
              isChanged = true;
              control.markAsPristine({
                onlySelf: true
              });
            }
          }
        }
      }
      return isChanged;
    }
  }
  setValue(val) {
    super.setValue(val);
    // Split the value into its subcomponents
    for (const element of this.fields) {
      if (val != null) this.setSubFieldValue(element, val[element.name]);else this.setSubFieldValue(element, undefined);
    }
  }
  getValue() {
    let val = super.getValue();
    // Adds subfield values into the main value
    for (const element of this.fields) {
      const subFieldValue = this.getSubFieldValue(element);
      if (subFieldValue != null && val == null) {
        this.value = {};
        val = this.value;
      }
      if (val[element.name] !== subFieldValue) val[element.name] = subFieldValue;
    }
    return val;
  }
  /**
   * Retrieve the fulledittemplate for a subfield
   * * @param formName
   */
  subFieldFullEditTemplate(subField) {
    const subInfo = typeof subField === 'string' ? this.getSubField(subField) : subField;
    const component = subInfo?.component;
    let ret = null;
    if (component != null) {
      ret = component.providesTemplates(subInfo?.type).forFullEdit;
    }
    if (subField == null) throw new Error("No template for subField " + subInfo?.name + " of component " + this.name);else return ret;
  }
  /**
   * Retrieve the fulledittemplate for a subfield
   * * @param formName
   */
  subFieldInlineViewTemplate(subField) {
    const subInfo = typeof subField === 'string' ? this.getSubField(subField) : subField;
    const component = subInfo?.component;
    let ret = null;
    if (component != null) {
      ret = component.providesTemplates(subInfo?.type).forInlineView;
    }
    if (subField == null) throw new Error("No template for subField " + subInfo?.name + " of component " + this.name);else return ret;
  }
  /**
   * Retrieve the fullviewtemplate for a subfield
   * * @param formName
   */
  subFieldFullViewTemplate(subField) {
    const subInfo = typeof subField === 'string' ? this.getSubField(subField) : subField;
    const component = subInfo?.component;
    let ret = null;
    if (component != null) {
      ret = component.providesTemplates(subInfo?.type).forFullView;
    }
    if (subField == null) throw new Error("No template for subField " + subInfo?.name + " of component " + this.name);else return ret;
  }
  /**
   * Dynamically loads the component to handle the subfield
   * @param formName
   * @param type
   * @param subValue
   */
  loadSubField(subField, type, subValue) {
    const subInfo = typeof subField === 'string' ? this.getSubField(subField) : subField;
    const component = subInfo?.component;
    if (component == null) {
      return this.loader.insertComponentForFieldType(type, this.dynamicInsertPoint).then(component => {
        if (component != null) {
          this.prepareComponent(component, type, subInfo != null ? subInfo.name : null, subValue);
          return component;
        } else {
          return null;
        }
      });
    } else {
      return Promise.resolve(component);
    }
  }
  /**
   * Retrieve the subField value from the component handling it
   * @param formName
   * @param type
   */
  getSubFieldValue(subField) {
    const subInfo = typeof subField === 'string' ? this.getSubField(subField) : subField;
    const component = subInfo?.component;
    if (component != null) {
      return component.getValue();
    } else {
      // No component is handling this subField so we have to do it ourselves
      if (this.form != null && subInfo != null) {
        return this.form.get(subInfo.name)?.value;
      } else {
        throw new Error('Cannot provide value for non existent subField ' + subField);
      }
    }
  }
  /**
   * Programmatically sets the value of the component handling the subfield
   * @param formName
   * @param type
   * @param val
   */
  setSubFieldValue(subField, val) {
    const subInfo = typeof subField === 'string' ? this.getSubField(subField) : subField;
    const component = subInfo?.component;
    // Sometimes no subcomponent is loaded, for example when displaying value only
    if (component != null) {
      component.setValue(val);
    } else {
      // No components will manage the value, so let's transform it to a displayable string
      if (this.form != null && subInfo != null) {
        const singleVal = {};
        let updatedValue = AbstractDynamicLoaderComponent.toBeautifyString(val);
        if (updatedValue == undefined)
          // You cannot set a value to undefined
          updatedValue = null;
        singleVal[subInfo.name] = updatedValue;
        this.form.patchValue(singleVal, {
          emitEvent: false
        });
      }
    }
  }
  /**
   * Loads the component that will handle the display and edit for the item at the specified position
   * @param position: Either the schemaPosition as string or as DontCodeModelPointer
   * @param currentJson
   */
  loadSubComponent(position, type, formName, currentJson) {
    // Make sure you wait until the component itself is init (and the dynamicInsertPoint is valid)
    return new Promise((resolve, reject) => this.componentInited.subscribe({
      complete: () => {
        resolve();
      },
      error: err => {
        reject(err);
      }
    })).then(() => {
      //console.debug("LoadSubComponent:"+position.position+' with type '+type+', dynamicInsertPoint is ', (this.dynamicInsertPoint!=null));
      if (this.dynamicInsertPoint == null) {
        return null;
      }
      return this.loader.insertComponent(position, this.dynamicInsertPoint, currentJson).then(component => {
        if (component != null) {
          return this.prepareComponent(component, type, formName, currentJson);
        } else {
          //console.warn('No ComponentFactory or missing <dtcde-dynamic></dtcde-dynamic> in template');
          return null;
        }
      });
    });
  }
  prepareComponent(component, type, formName, subValue) {
    // Manages dynamic forms if needed
    if (formName) {
      /*if (!this.form)
        throw new Error(
          'Cannot prepare a subField component without a FormGroup'
        );*/
      // Tells the component he's part of a form
      if (this.form != null) {
        component.setName(formName);
        component.setForm(this.form);
      }
      component.setValue(subValue);
    }
    return component;
  }
  applyComponentToSubField(component, type, formName) {
    let info = this.getSubField(formName);
    if (info == null) {
      info = new SubFieldInfo(formName, type, component);
      this.addSubField(info);
      return true;
    } else {
      info.component = component;
      return false;
    }
  }
  ngAfterViewInit() {
    //    console.debug ("DynamicInsertPoint for "+this.constructor.name, this.dynamicInsertPoint);
    this.componentInited.complete();
    this.preloadSubFields();
  }
  preloadSubFields() {
    if (this.dynamicInsertPoint != null) {
      let detectCheckDone = false;
      for (const element of this.fields) {
        if (element.component == null) {
          const valueSafe = this.value ? this.value[element.name] : undefined;
          this.loadSubField(element.name, element.type, valueSafe).then(component => {
            if (component != null) {
              this.applyComponentToSubField(component, element.type, element.name);
            }
            if (this.value != null && !detectCheckDone) {
              this.ref.detectChanges();
              detectCheckDone = true;
            }
          });
        }
      }
    }
  }
}
AbstractDynamicLoaderComponent.ɵfac = function AbstractDynamicLoaderComponent_Factory(t) {
  return new (t || AbstractDynamicLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_dynamic_component_loader_service__WEBPACK_IMPORTED_MODULE_4__.ComponentLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
AbstractDynamicLoaderComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AbstractDynamicLoaderComponent,
  selectors: [["ng-component"]],
  viewQuery: function AbstractDynamicLoaderComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](DynamicInsertPoint, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dynamicInsertPoint = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function AbstractDynamicLoaderComponent_Template(rf, ctx) {},
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbstractDynamicLoaderComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      template: ''
    }]
  }], function () {
    return [{
      type: _common_dynamic_component_loader_service__WEBPACK_IMPORTED_MODULE_4__.ComponentLoaderService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    dynamicInsertPoint: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [DynamicInsertPoint, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef,
        static: false
      }]
    }]
  });
})();
/**
 * Store information to configure a subfield
 */
class SubFieldInfo {
  constructor(name, type, comp) {
    this.name = name;
    this.type = type;
    this.component = comp;
  }
}

/***/ }),

/***/ 6864:
/*!****************************************************************************************************!*\
  !*** ../../libs/ng-common/dist/libs/common/esm2020/lib/common-ui/abstract-reference.component.mjs ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractReferenceComponent": () => (/* binding */ AbstractReferenceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _abstract_dynamic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract-dynamic-component */ 561);
/* harmony import */ var _template_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-list */ 1313);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1211);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 224);
/* harmony import */ var _dynamic_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamic-event */ 9519);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dropdown */ 9963);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 9305);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 4848);













/**
 * A Component that let the user select from a list of entities
 */
const _c0 = ["inlineView"];
const _c1 = ["fullEditView"];
function AbstractReferenceComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.value);
  }
}
function AbstractReferenceComponent_ng_template_2_ng_container_0_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.value, " ");
  }
}
function AbstractReferenceComponent_ng_template_2_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AbstractReferenceComponent_ng_template_2_ng_container_0_ng_template_2_div_0_Template, 2, 1, "div", 7);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.value);
  }
}
function AbstractReferenceComponent_ng_template_2_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const reference_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", reference_r8, " ");
  }
}
function AbstractReferenceComponent_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p-dropdown", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onChange", function AbstractReferenceComponent_ng_template_2_ng_container_0_Template_p_dropdown_onChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.valueChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AbstractReferenceComponent_ng_template_2_ng_container_0_ng_template_2_Template, 1, 1, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AbstractReferenceComponent_ng_template_2_ng_container_0_ng_template_3_Template, 1, 1, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r4.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r4.options)("formControlName", ctx_r4.name)("filter", true)("showClear", true)("lazy", true);
  }
}
function AbstractReferenceComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AbstractReferenceComponent_ng_template_2_ng_container_0_Template, 4, 6, "ng-container", 2);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.form);
  }
}
class AbstractReferenceComponent extends _abstract_dynamic_component__WEBPACK_IMPORTED_MODULE_2__.AbstractDynamicComponent {
  constructor(modelMgr, storeMgr) {
    super();
    this.modelMgr = modelMgr;
    this.storeMgr = storeMgr;
    this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * The json path to list the entities, ending with the property to use as a key and display (for example: $.creation.sources.name), to be provided by derived classes
     * @protected
     */
    this.targetEntitiesPos = null;
    this.targetEntitiesProperty = null;
    this.options = new Array();
    // When loaded by Federation, sometimes the dtcde components are not injected.
    if (modelMgr == null) this.modelMgr = _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.dtcde.getModelManager();
    if (storeMgr == null) this.storeMgr = _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.dtcde.getStoreManager();
  }
  canProvide(key) {
    return new _template_list__WEBPACK_IMPORTED_MODULE_3__.PossibleTemplateList(true, false, true);
  }
  providesTemplates(key) {
    return new _template_list__WEBPACK_IMPORTED_MODULE_3__.TemplateList(this.inlineView, null, this.fullEditView);
  }
  setTargetEntitiesWithName(entityName, propertyName) {
    // We must find the list of possible shops
    const queryResult = this.modelMgr.queryModelToSingle("$.creation.entities[?(@.name=='" + entityName + "')]");
    if (queryResult == null) {
      console.error("Cannot find an entity with name " + entityName + " in the model.");
      throw new Error("Cannot find an entity with name " + entityName + " in the model.");
    }
    this.targetEntitiesPos = queryResult.pointer;
    if (this.targetEntitiesPos == null) return Promise.resolve(false);else {
      this.targetEntitiesProperty = propertyName ?? null;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(this.possibleValues()).then(value => {
        this.options = value;
        return true;
      });
    }
  }
  possibleValues() {
    if (this.targetEntitiesPos == null) throw new Error('Missing query of target entity for class ' + this.constructor.name);
    const models = this.storeMgr.searchEntities(this.targetEntitiesPos);
    if (this.targetEntitiesProperty != null) {
      const property = this.targetEntitiesProperty;
      return models.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(loadedModels => {
        return loadedModels.map(model => model[property]);
      }));
    } else return models;
  }
  listEventSources() {
    const ret = super.listEventSources();
    ret.push(new _dynamic_event__WEBPACK_IMPORTED_MODULE_6__.BaseDynamicEventSource("Value", _dynamic_event__WEBPACK_IMPORTED_MODULE_6__.DynamicEventType.VALUE_CHANGE, this.valueChange.asObservable()));
    return ret;
  }
  valueChanged($event) {
    this.valueChange.emit(new _dynamic_event__WEBPACK_IMPORTED_MODULE_6__.BaseDynamicEvent("Value", _dynamic_event__WEBPACK_IMPORTED_MODULE_6__.DynamicEventType.VALUE_CHANGE, $event.value));
  }
  setValue(val) {
    if (val != null && this.options != null && this.options.findIndex(value => {
      return value == val;
    }) == -1) {
      if (this.options[0] !== 'Error') {
        // throw new Error ("erferf");
      }
      if (this.options[1] != null) {
        val = this.options[1].toString();
      } else {
        //throw new Error ("ERerferf");
      }
      /*     if( (typeof val ==='string')&&(val!=='Shop EP')&&(val!=='Shop GW')) {
             throw new Error ("Error of the death");
           } else if (typeof val !== 'string') {
             throw new Error ("Error of the death");
           }*/
      /*if( this.counter>=1) {
      }*/
    }
    super.setValue(val);
  }
}
AbstractReferenceComponent.ɵfac = function AbstractReferenceComponent_Factory(t) {
  return new (t || AbstractReferenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModelManager, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeStoreManager, 8));
};
AbstractReferenceComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AbstractReferenceComponent,
  selectors: [["dontcode-reference"]],
  viewQuery: function AbstractReferenceComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inlineView = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fullEditView = _t.first);
    }
  },
  outputs: {
    valueChange: "valueChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 0,
  consts: [["inlineView", ""], ["fullEditView", ""], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["placeholder", "Select a reference", 3, "options", "formControlName", "filter", "showClear", "lazy", "onChange"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], [4, "ngIf"]],
  template: function AbstractReferenceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AbstractReferenceComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AbstractReferenceComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__.Dropdown, primeng_api__WEBPACK_IMPORTED_MODULE_9__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName],
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AbstractReferenceComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'dontcode-reference',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      template: "<ng-template #inlineView>{{this.value}}</ng-template>\n<ng-template #fullEditView>\n  <ng-container *ngIf=\"form\" [formGroup]=\"form!\">\n    <p-dropdown [options]=\"options\" [formControlName]=\"name\" [filter]=\"true\" [showClear]=\"true\" placeholder=\"Select a reference\" (onChange)=\"valueChanged ($event)\" [lazy]=\"true\">\n      <ng-template pTemplate=\"selectedItem\">\n        <div *ngIf=\"this.value\">\n          {{this.value}}\n        </div>\n      </ng-template>\n      <ng-template let-reference pTemplate=\"item\">\n        {{reference}}\n      </ng-template>\n    </p-dropdown>\n  </ng-container>\n</ng-template>\n"
    }]
  }], function () {
    return [{
      type: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModelManager,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }, {
      type: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeStoreManager,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }];
  }, {
    inlineView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['inlineView', {
        static: true
      }]
    }],
    fullEditView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['fullEditView', {
        static: true
      }]
    }],
    valueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();

/***/ }),

/***/ 9519:
/*!*************************************************************************************!*\
  !*** ../../libs/ng-common/dist/libs/common/esm2020/lib/common-ui/dynamic-event.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseDynamicEvent": () => (/* binding */ BaseDynamicEvent),
/* harmony export */   "BaseDynamicEventSource": () => (/* binding */ BaseDynamicEventSource),
/* harmony export */   "DynamicEventType": () => (/* binding */ DynamicEventType)
/* harmony export */ });
class BaseDynamicEventSource {
  constructor(name, type, eventSource) {
    this.name = name;
    this.type = type;
    this.eventSource = eventSource;
  }
}
var DynamicEventType;
(function (DynamicEventType) {
  DynamicEventType["VALUE_CHANGE"] = "VALUE_CHANGE";
  DynamicEventType["SELECTION_CHANGE"] = "SELECTION_CHANGE";
})(DynamicEventType || (DynamicEventType = {}));
class BaseDynamicEvent {
  constructor(name, type, value) {
    this.name = name;
    this.type = type;
    this.value = value;
  }
}

/***/ }),

/***/ 9850:
/*!*********************************************************************************************!*\
  !*** ../../libs/ng-common/dist/libs/common/esm2020/lib/common-ui/pipes/beautifier.pipe.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeautifierPipe": () => (/* binding */ BeautifierPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _plugin_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../plugin-base.component */ 2577);



/**
 * Converts any object to a nice string to be displayed in html
 */
class BeautifierPipe {
  transform(value, ...args) {
    return _plugin_base_component__WEBPACK_IMPORTED_MODULE_0__.PluginBaseComponent.toBeautifyString(value, args[0]);
  }
}
BeautifierPipe.ɵfac = function BeautifierPipe_Factory(t) {
  return new (t || BeautifierPipe)();
};
BeautifierPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
  name: "beautifier",
  type: BeautifierPipe,
  pure: true
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BeautifierPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe,
    args: [{
      name: 'beautifier',
      pure: true
    }]
  }], null, null);
})();

/***/ }),

/***/ 2577:
/*!*********************************************************************************************!*\
  !*** ../../libs/ng-common/dist/libs/common/esm2020/lib/common-ui/plugin-base.component.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluginBaseComponent": () => (/* binding */ PluginBaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _abstract_dynamic_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-dynamic-loader-component */ 6093);
/* harmony import */ var _common_handler_plugin_handler_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-handler/plugin-handler-helper */ 7252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4848);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 224);
/* harmony import */ var _common_dynamic_component_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common-dynamic/component-loader.service */ 2004);








/**
 * A component that can be loaded by the framework, load subcomponents, listen to model changes, and so on...
 * It can as well dynamically manage a list of subcomponents and a form together with its mapping to a value.
 */
class PluginBaseComponent extends _abstract_dynamic_loader_component__WEBPACK_IMPORTED_MODULE_1__.AbstractDynamicLoaderComponent {
  constructor(loader, injector, ref) {
    super(loader, injector, ref);
    this.pluginHelper = new _common_handler_plugin_handler_helper__WEBPACK_IMPORTED_MODULE_2__.PluginHandlerHelper();
    this.entityPointer = null;
    this.provider = null;
  }
  ngOnDestroy() {
    this.pluginHelper.unsubscribe();
    super.ngOnDestroy();
  }
  /**
   * Listen to this.form updates and update this.value accordingly
   * @protected
   */
  updateValueOnFormChanges() {
    this.subscriptions.add(this.form.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(value => {
      //console.debug("Value changed", value);
      // Force the recalculation of the data from the form
      this.getValue();
      return value;
    })).subscribe());
  }
  initCommandFlow(provider, pointer) {
    this.entityPointer = pointer;
    this.provider = provider;
    this.pluginHelper.initCommandFlow(provider, pointer, this);
  }
  initChangeListening(subElement) {
    this.pluginHelper.initChangeListening(subElement);
  }
  /**
   * When the component is created for display, it receives the initial data as complete Json.
   * If it wants, it can call this method who will call handleChange for each property.
   * This will avoid to duplicate code (first time when a complete json is sent, second when subelements are sent)
   * @protected
   */
  decomposeJsonToMultipleChanges(pointer, json) {
    this.pluginHelper.decomposeJsonToMultipleChanges(pointer, json);
  }
  /**
   * Retrieve the value of the key property if the change concerns it
   * @param change
   * @param key
   */
  decodeStringField(change, key) {
    if (change.pointer?.lastElement === key) {
      return change.value;
    } else return undefined;
  }
  /**
   * Updates the array of T elements by applying the changes received and calling the transform method
   * @param target
   * @param targetMap
   * @param change
   * @param property
   * @param transform
   * @param parentPosition
   * @param applyProperty
   * @private
   */
  applyUpdatesToArray(target, targetMap, change, property, transform, parentPosition, applyProperty) {
    return this.applyUpdatesToArrayAsync(target, targetMap, change, property, (key, item) => {
      return Promise.resolve(transform(key, item));
    }, parentPosition);
  }
  /**
   * Updates the array of T elements by applying the changes received and calling the transform method
   * @param target
   * @param targetMap
   * @param change
   * @param property
   * @param transform
   * @param parentPosition
   * @param applyProperty
   * @private
   */
  applyUpdatesToArrayAsync(target, targetMap, change, property, transform, parentPosition, applyProperty) {
    return this.pluginHelper.applyUpdatesToArrayAsync(target, targetMap, change, property, transform, parentPosition, applyProperty);
  }
  /**
   * Dynamically manages the list of subFields (and sub components) based on the change.
   * @param change
   * @protected
   */
  updateSubFieldsWithChange(change, subProperty, parentPosition) {
    return this.applyUpdatesToArrayAsync(this.fields, this.fieldsMap, change, subProperty, (position, value) => {
      return this.loadSubComponent(position, value.type, value.name).then(component => {
        return new _abstract_dynamic_loader_component__WEBPACK_IMPORTED_MODULE_1__.SubFieldInfo(value.name, value.type, component ?? undefined);
      });
    }, parentPosition, (elt, key, newVal) => {
      switch (key) {
        case _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS_NAME_NODE:
          elt.name = newVal;
          break;
        default:
          return false;
      }
      return true;
    }).then(updatedFields => {
      this.fields = updatedFields;
      this.rebuildForm();
      return updatedFields;
    });
  }
  /**
   * Rebuild the Reactive form from the list of fields configured with the entity
   * @protected
   */
  rebuildForm() {
    if (this.form == null)
      // Ignore if the component doesn't have a form
      return;
    // Updates the formgroup with new fields and remove old fields if necessary
    const toRemove = new Set();
    // tslint:disable-next-line:forin
    for (const formKey in this.form.controls) {
      toRemove.add(formKey);
    }
    for (const field of this.fields) {
      let val = null;
      if (this.value && this.value[field.name]) {
        val = this.value[field.name];
      }
      toRemove.delete(field.name);
      // Check if the component manages the FormControl itself or if it relies on us
      if (field.component != null) {
        field.component?.setValue(val);
      } else {
        val = PluginBaseComponent.toBeautifyString(val);
        this.form.registerControl(field.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(val, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required));
      }
    }
    toRemove.forEach(key => {
      this.form.removeControl(key);
    });
  }
}
PluginBaseComponent.ɵfac = function PluginBaseComponent_Factory(t) {
  return new (t || PluginBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_common_dynamic_component_loader_service__WEBPACK_IMPORTED_MODULE_6__.ComponentLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef));
};
PluginBaseComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: PluginBaseComponent,
  selectors: [["ng-component"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function PluginBaseComponent_Template(rf, ctx) {},
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](PluginBaseComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component,
    args: [{
      template: ''
    }]
  }], function () {
    return [{
      type: _common_dynamic_component_loader_service__WEBPACK_IMPORTED_MODULE_6__.ComponentLoaderService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef
    }];
  }, null);
})();

/***/ }),

/***/ 1313:
/*!*************************************************************************************!*\
  !*** ../../libs/ng-common/dist/libs/common/esm2020/lib/common-ui/template-list.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PossibleTemplateList": () => (/* binding */ PossibleTemplateList),
/* harmony export */   "TemplateList": () => (/* binding */ TemplateList)
/* harmony export */ });
class TemplateList {
  constructor(forInlineView, forFullView, forFullEdit) {
    this.forInlineView = forInlineView;
    this.forFullView = forFullView;
    this.forFullEdit = forFullEdit;
  }
}
class PossibleTemplateList {
  constructor(forInlineView, forFullView, forFullEdit) {
    this.forInlineView = forInlineView;
    this.forFullView = forFullView;
    this.forFullEdit = forFullEdit;
  }
}

/***/ }),

/***/ 9744:
/*!*****************************************************************************************!*\
  !*** ../../libs/ng-common/dist/libs/common/esm2020/lib/common-values/value.service.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValueService": () => (/* binding */ ValueService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);



/**
 * Stores and constantly updates the json (as an instance of the DontCodeSchema) as it is being edited / modified through Change events
 * It's a wrapper around DontCodeModelManager
 * It does not store the entity values but the description of entities, screens... as defined in the Editor
 */
class ValueService {
  constructor(modelMgr) {
    this.modelMgr = modelMgr;
  }
  getContent() {
    return this.modelMgr.getContent();
  }
  /**
   * Resets the current json content to the one given in parameter
   * @param newContent
   */
  resetContent(newContent) {
    this.modelMgr.resetContent(newContent);
  }
  /**
   * Subscribes to the Subject in parameter to receive model updates through changes.
   * Changes are generated by the Editor as the user modifies the application.
   * It then modifies it's internal json to be up to date.
   * @param receivedCommands
   * @deprecated in favor of applyChange
   */
  /*  receiveUpdatesFrom(receivedCommands: Subject<Change>): void {
      this.model.receiveUpdatesFrom(receivedCommands);
    }
  */
  /**
   * Apply the change to the model and returns the list of subchanges implied by it
   * @param chg
   */
  /*  applyChange (chg: Change): Change[] {
      return this.modelMgr.applyChange(chg);
    }*/
  /**
   * Provides the json extract at the given position.
   * For example, findAtPosition ('creation/entities/a') will returns the description (fields...) of the first entity created with the editor
   * @param position
   * @param create
   */
  findAtPosition(position, create) {
    return this.modelMgr.findAtPosition(position, create);
  }
  /**
   * Enable querying the model for any value, following jsonPath model
   * To use when potentially you expect multiple values
   * @param query: the query as a jsonPath
   * @param position: in case the jsonPath is relative
   */
  queryModelToArray(query, position) {
    return this.modelMgr.queryModelToArray(query, position);
  }
  /**
   * Enable querying the model for any value, following jsonPath model
   * To use when potentially you expect a single value.
   * @param query: the query as a  jsonPath
   * @param position: in case the jsonPath is relative
   */
  queryModelToSingle(query, position) {
    return this.modelMgr.queryModelToSingle(query, position);
  }
  /**
   * Returns the list of values that are possible target of a given property path. With this the Builder User Interface can display to the user a combo-box will all targets
   * For example, with the following model:
   * "from": {
   *           "type": "string",
   *           "format": "$.creation.sources.name"
   *         }
   *
   * findAllPossibleTargetsOrProperty ("from", ...) will returns all sources names.
   * @param property
   * @param position
   * @param schemaItem
   */
  findAllPossibleTargetsOfProperty(property, position, schemaItem) {
    return this.modelMgr.findAllPossibleTargetsOfProperty(property, position, schemaItem);
  }
  /**
   * Returns the exact element that matches the target of a given property path.
   *
   * For example, with the following Dont-code model:
   * "from": {
   *           "type": "string",
   *           "format": "$.creation.sources.name"
   *         }
   *
   * and an instantiated model like this:
   * {
   *   "from": "EntityName"
   * }
   * findAllPossibleTargetsOrProperty ("from", ...) will return only the source named "EntityName".
   * @param property
   * @param position
   * @param schemaItem
   */
  findTargetOfProperty(property, position, schemaItem) {
    return this.modelMgr.findTargetOfProperty(property, position, schemaItem);
  }
}
ValueService.ɵfac = function ValueService_Factory(t) {
  return new (t || ValueService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModelManager));
};
ValueService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ValueService,
  factory: ValueService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ValueService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModelManager
    }];
  }, null);
})();

/***/ }),

/***/ 4264:
/*!**********************************************************************************!*\
  !*** ../../libs/ng-common/dist/libs/common/esm2020/lib/plugin-common.module.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractDynamicComponent": () => (/* reexport safe */ _common_ui_abstract_dynamic_component__WEBPACK_IMPORTED_MODULE_14__.AbstractDynamicComponent),
/* harmony export */   "AbstractDynamicLoaderComponent": () => (/* reexport safe */ _common_ui_abstract_dynamic_loader_component__WEBPACK_IMPORTED_MODULE_7__.AbstractDynamicLoaderComponent),
/* harmony export */   "AbstractPluginHandler": () => (/* reexport safe */ _common_handler_abstract_plugin_handler__WEBPACK_IMPORTED_MODULE_9__.AbstractPluginHandler),
/* harmony export */   "AbstractReferenceComponent": () => (/* reexport safe */ _common_ui_abstract_reference_component__WEBPACK_IMPORTED_MODULE_8__.AbstractReferenceComponent),
/* harmony export */   "BaseDynamicEvent": () => (/* reexport safe */ _common_ui_dynamic_event__WEBPACK_IMPORTED_MODULE_13__.BaseDynamicEvent),
/* harmony export */   "BaseDynamicEventSource": () => (/* reexport safe */ _common_ui_dynamic_event__WEBPACK_IMPORTED_MODULE_13__.BaseDynamicEventSource),
/* harmony export */   "BeautifierPipe": () => (/* reexport safe */ _common_ui_pipes_beautifier_pipe__WEBPACK_IMPORTED_MODULE_2__.BeautifierPipe),
/* harmony export */   "CHANNEL_CHANGE_NAME": () => (/* reexport safe */ _common_config_common_lib_config__WEBPACK_IMPORTED_MODULE_18__.CHANNEL_CHANGE_NAME),
/* harmony export */   "COMMAND_PROVIDER": () => (/* reexport safe */ _common_global_globals__WEBPACK_IMPORTED_MODULE_1__.COMMAND_PROVIDER),
/* harmony export */   "CommonConfigService": () => (/* reexport safe */ _common_config_common_config_service__WEBPACK_IMPORTED_MODULE_19__.CommonConfigService),
/* harmony export */   "ComponentLoaderService": () => (/* reexport safe */ _common_dynamic_component_loader_service__WEBPACK_IMPORTED_MODULE_16__.ComponentLoaderService),
/* harmony export */   "DONT_CODE_COMMON_CONFIG": () => (/* reexport safe */ _common_global_globals__WEBPACK_IMPORTED_MODULE_1__.DONT_CODE_COMMON_CONFIG),
/* harmony export */   "DONT_CODE_CORE": () => (/* reexport safe */ _common_global_globals__WEBPACK_IMPORTED_MODULE_1__.DONT_CODE_CORE),
/* harmony export */   "DynamicEventType": () => (/* reexport safe */ _common_ui_dynamic_event__WEBPACK_IMPORTED_MODULE_13__.DynamicEventType),
/* harmony export */   "DynamicInsertPoint": () => (/* reexport safe */ _common_ui_abstract_dynamic_loader_component__WEBPACK_IMPORTED_MODULE_7__.DynamicInsertPoint),
/* harmony export */   "EntityListManager": () => (/* reexport safe */ _common_storage_entity_store_service__WEBPACK_IMPORTED_MODULE_15__.EntityListManager),
/* harmony export */   "EntityStoreService": () => (/* reexport safe */ _common_storage_entity_store_service__WEBPACK_IMPORTED_MODULE_15__.EntityStoreService),
/* harmony export */   "PluginBaseComponent": () => (/* reexport safe */ _common_ui_plugin_base_component__WEBPACK_IMPORTED_MODULE_11__.PluginBaseComponent),
/* harmony export */   "PluginCommonModule": () => (/* binding */ PluginCommonModule),
/* harmony export */   "PluginHandlerHelper": () => (/* reexport safe */ _common_handler_plugin_handler_helper__WEBPACK_IMPORTED_MODULE_10__.PluginHandlerHelper),
/* harmony export */   "PossibleTemplateList": () => (/* reexport safe */ _common_ui_template_list__WEBPACK_IMPORTED_MODULE_12__.PossibleTemplateList),
/* harmony export */   "SANDBOX_MENUS": () => (/* reexport safe */ _common_config_common_lib_config__WEBPACK_IMPORTED_MODULE_18__.SANDBOX_MENUS),
/* harmony export */   "SubFieldInfo": () => (/* reexport safe */ _common_ui_abstract_dynamic_loader_component__WEBPACK_IMPORTED_MODULE_7__.SubFieldInfo),
/* harmony export */   "TemplateList": () => (/* reexport safe */ _common_ui_template_list__WEBPACK_IMPORTED_MODULE_12__.TemplateList),
/* harmony export */   "ValueService": () => (/* reexport safe */ _common_values_value_service__WEBPACK_IMPORTED_MODULE_17__.ValueService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _common_ui_abstract_dynamic_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common-ui/abstract-dynamic-loader-component */ 6093);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _common_global_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-global/globals */ 213);
/* harmony import */ var _common_ui_pipes_beautifier_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-ui/pipes/beautifier.pipe */ 9850);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dropdown */ 9963);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4848);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var _common_ui_abstract_reference_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common-ui/abstract-reference.component */ 6864);
/* harmony import */ var _common_handler_abstract_plugin_handler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common-handler/abstract-plugin-handler */ 6683);
/* harmony import */ var _common_handler_plugin_handler_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common-handler/plugin-handler-helper */ 7252);
/* harmony import */ var _common_ui_plugin_base_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common-ui/plugin-base.component */ 2577);
/* harmony import */ var _common_ui_template_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common-ui/template-list */ 1313);
/* harmony import */ var _common_ui_dynamic_event__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./common-ui/dynamic-event */ 9519);
/* harmony import */ var _common_ui_abstract_dynamic_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common-ui/abstract-dynamic-component */ 561);
/* harmony import */ var _common_storage_entity_store_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common-storage/entity-store.service */ 3824);
/* harmony import */ var _common_dynamic_component_loader_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./common-dynamic/component-loader.service */ 2004);
/* harmony import */ var _common_values_value_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./common-values/value.service */ 9744);
/* harmony import */ var _common_config_common_lib_config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./common-config/common-lib-config */ 8364);
/* harmony import */ var _common_config_common_config_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./common-config/common-config.service */ 3760);










class PluginCommonModule {
  /**
   * Injects the DontCode core components into Angular's Dependency injection
   * @param config
   */
  static forRoot() {
    return {
      ngModule: PluginCommonModule,
      providers: [{
        provide: _common_global_globals__WEBPACK_IMPORTED_MODULE_1__.DONT_CODE_CORE,
        useValue: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.dtcde
      }, {
        provide: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeSchemaManager,
        useValue: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.dtcde.getSchemaManager()
      }, {
        provide: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModelManager,
        useValue: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.dtcde.getModelManager()
      }, {
        provide: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodePreviewManager,
        useValue: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.dtcde.getPreviewManager()
      }, {
        provide: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeStoreManager,
        useValue: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.dtcde.getStoreManager()
      }, {
        provide: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeChangeManager,
        useValue: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.dtcde.getChangeManager()
      }, _common_ui_pipes_beautifier_pipe__WEBPACK_IMPORTED_MODULE_2__.BeautifierPipe]
    };
  }
}
PluginCommonModule.ɵfac = function PluginCommonModule_Factory(t) {
  return new (t || PluginCommonModule)();
};
PluginCommonModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: PluginCommonModule
});
PluginCommonModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__.DropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PluginCommonModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__.DropdownModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule],
      declarations: [_common_ui_abstract_dynamic_loader_component__WEBPACK_IMPORTED_MODULE_7__.DynamicInsertPoint, _common_ui_pipes_beautifier_pipe__WEBPACK_IMPORTED_MODULE_2__.BeautifierPipe, _common_ui_abstract_reference_component__WEBPACK_IMPORTED_MODULE_8__.AbstractReferenceComponent],
      exports: [_common_ui_abstract_dynamic_loader_component__WEBPACK_IMPORTED_MODULE_7__.DynamicInsertPoint, _common_ui_pipes_beautifier_pipe__WEBPACK_IMPORTED_MODULE_2__.BeautifierPipe, _common_ui_abstract_reference_component__WEBPACK_IMPORTED_MODULE_8__.AbstractReferenceComponent]
    }]
  }], null, null);
})();

















/***/ }),

/***/ 5282:
/*!********************************************************************************************!*\
  !*** ../../libs/ng-sandbox/dist/libs/sandbox/esm2020/lib/layout/app/LightAppComponent.mjs ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DontCodeRuntimeConfig": () => (/* binding */ DontCodeRuntimeConfig),
/* harmony export */   "LightAppComponent": () => (/* binding */ LightAppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2320);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1211);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dontcode/plugin-common */ 213);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dontcode/plugin-common */ 3760);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8451);






/**
 * An AppComponent that loads dynamically the repository configuration
 */
class LightAppComponent {
  constructor(configService, httpClient, injector, ref, dontCodeCore) {
    this.configService = configService;
    this.httpClient = httpClient;
    this.injector = injector;
    this.ref = ref;
    this.dontCodeCore = dontCodeCore;
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subscription();
    this.runtimeConfig = new DontCodeRuntimeConfig();
    this.defaultRepositoryUrl = 'assets/repositories/default.json';
  }
  /**
   * Reads configuration from the repository file
   */
  ngOnInit() {
    // First load the repository 
    const repoUrl = this.runtimeConfig.repositoryUrl || this.defaultRepositoryUrl;
    (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(this.httpClient.get(repoUrl, {
      observe: 'body',
      responseType: 'json'
    })).then(config => {
      const updates = {};
      if (config.documentApiUrl != null) updates.documentApiUrl = config.documentApiUrl;
      if (config.storeApiUrl != null) updates.storeApiUrl = config.storeApiUrl;
      if (config.webSocketUrl != null) updates.webSocketUrl = config.webSocketUrl;
      if (config.ideWebSocketUrl != null) updates.ideWebSocketUrl = config.ideWebSocketUrl;
      if (config.projectApiUrl != null) updates.projectApiUrl = config.projectApiUrl;
      this.configService.batchUpdateConfig(updates);
      // Once everything is finalized, let's give a chance to the caller to do something.
      return this.afterInitialization(config, repoUrl);
    }).then(() => {
      this.ref.markForCheck();
      this.ref.detectChanges();
    });
  }
  /**
   * This is called after all plugins are loaded and inited, and the store provider configured
   */
  afterInitialization(config, repoUrl) {
    return Promise.resolve();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
LightAppComponent.ɵfac = function LightAppComponent_Factory(t) {
  return new (t || LightAppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__.CommonConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_5__.DONT_CODE_CORE));
};
LightAppComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LightAppComponent,
  selectors: [["ng-component"]],
  decls: 0,
  vars: 0,
  template: function LightAppComponent_Template(rf, ctx) {},
  encapsulation: 2
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LightAppComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      template: ''
    }]
  }], function () {
    return [{
      type: _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__.CommonConfigService
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_5__.DONT_CODE_CORE]
      }]
    }];
  }, null);
})();
class DontCodeRuntimeConfig {
  constructor() {
    this.runtime = false;
    this.forceRepositoryLoading = false;
  }
}

/***/ }),

/***/ 5741:
/*!*********************************************************************************!*\
  !*** ../../plugins/commerce/dist/libs/commerce/esm2020/lib/commerce.module.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractOnlineShopScrapper": () => (/* reexport safe */ _shared_online_shop_scrapper__WEBPACK_IMPORTED_MODULE_23__.AbstractOnlineShopScrapper),
/* harmony export */   "CommerceModule": () => (/* binding */ CommerceModule),
/* harmony export */   "DynamicProxyScrapper": () => (/* reexport safe */ _shared_dynamic_proxy_scrapper__WEBPACK_IMPORTED_MODULE_24__.DynamicProxyScrapper),
/* harmony export */   "PriceCompareComponent": () => (/* reexport safe */ _preview_price_price_compare_component__WEBPACK_IMPORTED_MODULE_3__.PriceCompareComponent),
/* harmony export */   "PriceComponent": () => (/* reexport safe */ _preview_price_price_component__WEBPACK_IMPORTED_MODULE_2__.PriceComponent),
/* harmony export */   "PriceFinderService": () => (/* reexport safe */ _shared_services_price_finder_service__WEBPACK_IMPORTED_MODULE_22__.PriceFinderService),
/* harmony export */   "ProxyEngine": () => (/* reexport safe */ _shared_online_shop_scrapper__WEBPACK_IMPORTED_MODULE_23__.ProxyEngine),
/* harmony export */   "ScrappedProduct": () => (/* reexport safe */ _shared_online_shop_scrapper__WEBPACK_IMPORTED_MODULE_23__.ScrappedProduct),
/* harmony export */   "ShopHandlerComponent": () => (/* reexport safe */ _preview_shop_shop_handler_component__WEBPACK_IMPORTED_MODULE_4__.ShopHandlerComponent),
/* harmony export */   "ShopTypeHandlerComponent": () => (/* reexport safe */ _preview_shop_shop_type_handler_component__WEBPACK_IMPORTED_MODULE_5__.ShopTypeHandlerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var _preview_price_price_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preview/price/price.component */ 3608);
/* harmony import */ var _declaration_commerce_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./declaration/commerce-plugin */ 419);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @dontcode/plugin-common */ 4264);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 4848);
/* harmony import */ var _preview_price_price_compare_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preview/price/price-compare.component */ 7669);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ 1996);
/* harmony import */ var _dontcode_plugin_std__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @dontcode/plugin-std */ 7126);
/* harmony import */ var _preview_shop_shop_handler_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preview/shop/shop-handler.component */ 8210);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ 9963);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/ripple */ 467);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ 4001);
/* harmony import */ var _shared_ui_product_selection_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/ui/product-selection.component */ 7944);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dataview */ 211);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/card */ 167);
/* harmony import */ var _dontcode_plugin_std__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @dontcode/plugin-std */ 6852);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/tooltip */ 3797);
/* harmony import */ var _preview_shop_shop_type_handler_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preview/shop/shop-type-handler.component */ 1310);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/message */ 2569);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/messages */ 8242);
/* harmony import */ var _shared_services_price_finder_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/services/price-finder.service */ 1775);
/* harmony import */ var _shared_online_shop_scrapper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/online-shop-scrapper */ 2841);
/* harmony import */ var _shared_dynamic_proxy_scrapper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/dynamic-proxy-scrapper */ 9388);
























class CommerceModule {
  constructor() {
    console.log('Commerce Plugin registering'); // Look for this log to make sure your plugin has been loaded
    _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.dtcde.registerPlugin(new _declaration_commerce_plugin__WEBPACK_IMPORTED_MODULE_1__.CommercePlugin()); // When created a module must register to the platform.
  }
  // We declare the components referenced by the CommercePlugin configuration
  exposedPreviewHandlers() {
    return new Map([['PriceComponent', _preview_price_price_component__WEBPACK_IMPORTED_MODULE_2__.PriceComponent], ['PriceCompareComponent', _preview_price_price_compare_component__WEBPACK_IMPORTED_MODULE_3__.PriceCompareComponent], ['ShopHandlerComponent', _preview_shop_shop_handler_component__WEBPACK_IMPORTED_MODULE_4__.ShopHandlerComponent], ['ShopTypeHandlerComponent', _preview_shop_shop_type_handler_component__WEBPACK_IMPORTED_MODULE_5__.ShopTypeHandlerComponent]]);
  }
}
CommerceModule.ɵfac = function CommerceModule_Factory(t) {
  return new (t || CommerceModule)();
};
CommerceModule.ɵmod = function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵregisterNgModuleType"](CommerceModule, 'dontcode-plugin/commerce');
  return /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: CommerceModule,
    id: 'dontcode-plugin/commerce'
  });
}();
CommerceModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_8__.PluginCommonModule.forRoot(), _dontcode_plugin_std__WEBPACK_IMPORTED_MODULE_9__.BasicModule, _dontcode_plugin_std__WEBPACK_IMPORTED_MODULE_10__.FieldsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.DropdownModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_14__.RippleModule, primeng_button__WEBPACK_IMPORTED_MODULE_15__.ButtonModule, primeng_dataview__WEBPACK_IMPORTED_MODULE_16__.DataViewModule, primeng_card__WEBPACK_IMPORTED_MODULE_17__.CardModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__.TooltipModule, primeng_message__WEBPACK_IMPORTED_MODULE_19__.MessageModule, primeng_messages__WEBPACK_IMPORTED_MODULE_20__.MessagesModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](CommerceModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_8__.PluginCommonModule.forRoot(), _dontcode_plugin_std__WEBPACK_IMPORTED_MODULE_9__.BasicModule, _dontcode_plugin_std__WEBPACK_IMPORTED_MODULE_10__.FieldsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.DropdownModule, primeng_ripple__WEBPACK_IMPORTED_MODULE_14__.RippleModule, primeng_button__WEBPACK_IMPORTED_MODULE_15__.ButtonModule, primeng_dataview__WEBPACK_IMPORTED_MODULE_16__.DataViewModule, primeng_card__WEBPACK_IMPORTED_MODULE_17__.CardModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__.TooltipModule, primeng_message__WEBPACK_IMPORTED_MODULE_19__.MessageModule, primeng_messages__WEBPACK_IMPORTED_MODULE_20__.MessagesModule],
      declarations: [_preview_price_price_compare_component__WEBPACK_IMPORTED_MODULE_3__.PriceCompareComponent, _preview_price_price_component__WEBPACK_IMPORTED_MODULE_2__.PriceComponent, _preview_shop_shop_handler_component__WEBPACK_IMPORTED_MODULE_4__.ShopHandlerComponent, _preview_shop_shop_type_handler_component__WEBPACK_IMPORTED_MODULE_5__.ShopTypeHandlerComponent, _shared_ui_product_selection_component__WEBPACK_IMPORTED_MODULE_21__.ProductSelectionComponent],
      id: 'dontcode-plugin/commerce' // A module containing previewer components must have an id to be found by the dont-code platform.
    }]
  }], function () {
    return [];
  }, null);
})();









/***/ }),

/***/ 419:
/*!*********************************************************************************************!*\
  !*** ../../plugins/commerce/dist/libs/commerce/esm2020/lib/declaration/commerce-plugin.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommercePlugin": () => (/* binding */ CommercePlugin)
/* harmony export */ });
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);

/**
 * This plugin demonstrate 2 things:
 * - how to declare a new field type that can be selected in the Builder and how to manage the display and edition of this new type in the Previewer.
 * - As well it adds a new attribute 'seed' to any Entity and provides a viewer for the Previewer when its value is Yes or Maybe.
 */
class CommercePlugin {
  getConfiguration() {
    return {
      plugin: {
        id: 'CommercePlugin',
        'display-name': 'Commerce Plugin for anything related to products, prices, shops.',
        version: '1.0.0'
      },
      'schema-updates': [{
        id: 'price-field',
        description: 'A price of a product in a shop',
        changes: [{
          location: {
            parent: '#/$defs/field',
            id: 'type'
          },
          update: {
            enum: [{
              Commerce: {
                enum: ['Price', 'Shop', 'Shop type']
              }
            }]
          },
          replace: false
        }]
      }],
      'preview-handlers': [{
        location: {
          parent: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS,
          id: 'type',
          values: [{
            Commerce: {
              enum: ['Price']
            }
          }]
        },
        class: {
          name: 'PriceComponent',
          source: 'commerce'
        }
      }, {
        location: {
          parent: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS,
          id: 'type',
          values: [{
            Commerce: {
              enum: ['Shop']
            }
          }]
        },
        class: {
          name: 'ShopHandlerComponent',
          source: 'commerce'
        }
      }, {
        location: {
          parent: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS,
          id: 'type',
          values: [{
            Commerce: {
              enum: ['Shop type']
            }
          }]
        },
        class: {
          name: 'ShopTypeHandlerComponent',
          source: 'commerce'
        }
      }]
    };
  }
  pluginInit(dontCode) {
    // Nothing to do here
  }
}
CommercePlugin.SHOP_ENTITY_NAME = 'Online Shop';

/***/ }),

/***/ 7669:
/*!*******************************************************************************************************!*\
  !*** ../../plugins/commerce/dist/libs/commerce/esm2020/lib/preview/price/price-compare.component.mjs ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriceCompareComponent": () => (/* binding */ PriceCompareComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/plugin-common */ 2577);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dontcode/plugin-common */ 2004);




class PriceCompareComponent extends _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_0__.PluginBaseComponent {
  constructor(loader, injector, ref) {
    super(loader, injector, ref);
  }
  providesTemplates(key) {
    throw new Error('Method not implemented.');
  }
  canProvide(key) {
    throw new Error('Method not implemented.');
  }
  handleChange(change) {}
}
PriceCompareComponent.ɵfac = function PriceCompareComponent_Factory(t) {
  return new (t || PriceCompareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__.ComponentLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
};
PriceCompareComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PriceCompareComponent,
  selectors: [["dontcode-commerce-price-compare"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 0,
  template: function PriceCompareComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Hello from PriceCompareComponent !");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PriceCompareComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'dontcode-commerce-price-compare',
      template: "<h1>Hello from PriceCompareComponent !</h1>\n"
    }]
  }], function () {
    return [{
      type: _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__.ComponentLoaderService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }];
  }, null);
})();

/***/ }),

/***/ 3608:
/*!***********************************************************************************************!*\
  !*** ../../plugins/commerce/dist/libs/commerce/esm2020/lib/preview/price/price.component.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriceComponent": () => (/* binding */ PriceComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_monorepo_monorepo_common_temp_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/temp/node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 8706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dontcode/plugin-common */ 6093);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dontcode/plugin-common */ 1313);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @dontcode/plugin-common */ 9519);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4848);
/* harmony import */ var _shared_online_shop_scrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/online-shop-scrapper */ 2841);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @dontcode/plugin-common */ 2004);
/* harmony import */ var _shared_services_price_finder_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/price-finder.service */ 1775);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 1996);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 9305);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/ripple */ 467);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 4001);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tooltip */ 3797);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/messages */ 8242);
/* harmony import */ var _shared_ui_product_selection_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/ui/product-selection.component */ 7944);


















/**
 * Displays and refresh a price of a product in a shop.
 * When the price is new, it tries to fill the name with the shop and the product name
 */
const _c0 = ["inlineView"];
const _c1 = ["fullEditView"];
function PriceComponent_ng_template_1_ng_container_0_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function PriceComponent_ng_template_1_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PriceComponent_ng_template_1_ng_container_0_ng_container_2_ng_container_2_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r7.value.urlInShop, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r2);
  }
}
function PriceComponent_ng_template_1_ng_container_0_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function PriceComponent_ng_template_1_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PriceComponent_ng_template_1_ng_container_0_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r2);
  }
}
function PriceComponent_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PriceComponent_ng_template_1_ng_container_0_ng_container_2_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PriceComponent_ng_template_1_ng_container_0_ng_container_3_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("pTooltip", "Price Date: ", (tmp_0_0 = ctx_r6.value.priceDate) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "Unknown", "<br/>Shop:", (tmp_0_0 = ctx_r6.value.shop) !== null && tmp_0_0 !== undefined ? tmp_0_0 : "Unknown", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("escape", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.value == null ? null : ctx_r6.value.urlInShop);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(ctx_r6.value == null ? null : ctx_r6.value.urlInShop));
  }
}
function PriceComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PriceComponent_ng_template_1_ng_container_0_Template, 4, 5, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.value);
  }
}
function PriceComponent_ng_template_3_button_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "button", 8);
  }
}
function PriceComponent_ng_template_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function PriceComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PriceComponent_ng_template_3_button_0_Template, 1, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PriceComponent_ng_template_3_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\xA0\n");
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.value == null ? null : ctx_r3.value.inError);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.subFieldInlineViewTemplate("cost"));
  }
}
function PriceComponent_ng_template_5_ng_container_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function PriceComponent_ng_template_5_ng_container_0_button_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "button", 8);
  }
}
function PriceComponent_ng_template_5_ng_container_0_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function PriceComponent_ng_template_5_ng_container_0_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function PriceComponent_ng_template_5_ng_container_0_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function PriceComponent_ng_template_5_ng_container_0_ng_container_25_ng_template_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Try in the browser");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx_r22.parsingError == null ? null : ctx_r22.parsingError.url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function PriceComponent_ng_template_5_ng_container_0_ng_container_25_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PriceComponent_ng_template_5_ng_container_0_ng_container_25_ng_template_2_a_1_Template, 2, 1, "a", 22);
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Error : ", ctx_r21.errorMessage(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r21.parsingError == null ? null : ctx_r21.parsingError.url);
  }
}
function PriceComponent_ng_template_5_ng_container_0_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p-messages", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PriceComponent_ng_template_5_ng_container_0_ng_container_25_ng_template_2_Template, 2, 2, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function PriceComponent_ng_template_5_ng_container_0_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 23)(2, "dontcode-commerce-product-selection", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selected", function PriceComponent_ng_template_5_ng_container_0_ng_container_26_Template_dontcode_commerce_product_selection_selected_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r23.selectedProduct($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r20.name + "-select");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("listOfProducts", ctx_r20.listOfSelectableProducts);
  }
}
function PriceComponent_ng_template_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11)(2, "div", 12)(3, "span", 13)(4, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function PriceComponent_ng_template_5_ng_container_0_Template_input_input_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.productNameChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, PriceComponent_ng_template_5_ng_container_0_ng_container_8_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 12)(10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, PriceComponent_ng_template_5_ng_container_0_button_11_Template, 1, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PriceComponent_ng_template_5_ng_container_0_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r27.updatePrice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Price:\xA0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, PriceComponent_ng_template_5_ng_container_0_ng_container_15_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Date of Price:\xA0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, PriceComponent_ng_template_5_ng_container_0_ng_container_18_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Product Id: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Product url: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, PriceComponent_ng_template_5_ng_container_0_ng_container_24_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, PriceComponent_ng_template_5_ng_container_0_ng_container_25_Template, 3, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, PriceComponent_ng_template_5_ng_container_0_ng_container_26_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r13.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx_r13.name + "-name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", ctx_r13.name + "-name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r13.subFieldFullEditTemplate("shop"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.value == null ? null : ctx_r13.value.inError);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r13.updatePriceIcon)("disabled", ctx_r13.cannotUpdatePrice());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r13.subFieldFullEditTemplate("cost"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r13.subFieldFullEditTemplate("priceDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r13.subFieldFullEditTemplate("urlInShop"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.isInError());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.productSelectionMode);
  }
}
function PriceComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PriceComponent_ng_template_5_ng_container_0_Template, 27, 12, "ng-container", 9);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.form);
  }
}
class PriceComponent extends _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__.AbstractDynamicLoaderComponent {
  constructor(loader, priceFinder, injector, ref) {
    super(loader, injector, ref);
    this.priceFinder = priceFinder;
    this.updatePriceIcon = PriceComponent.baseUpdatePriceIcons;
    this.parsingError = null;
    this.productSelectionMode = false;
    this.productNameLinked = false;
    this.listOfSelectableProducts = new Array();
    this.defineSubField('cost', 'Other currency');
    this.defineSubField('priceDate', 'Date & Time');
    this.defineSubField('shop', 'Shop');
    this.defineSubField('urlInShop', 'Website (url)');
    this.value = {};
  }
  providesTemplates(key) {
    return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__.TemplateList(this.inlineView, null, this.fullEditView);
  }
  canProvide(key) {
    return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__.PossibleTemplateList(true, false, true);
  }
  setValue(val) {
    super.setValue(val);
    /*if( val!=null) {
      this.priceFinder.updatePriceIfPossible(val, this.parentPosition??'').then(() => {
        this.parsingError=null;
      }).catch(() => {
        val.inError=true;
      });
    }*/
    // Eventually set default product name
    this.enableProductNameLookup();
  }
  createAndRegisterFormControls() {
    let control = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, {
      updateOn: 'blur'
    });
    this.form.registerControl('nameInShop', control);
    control = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl({
      value: null,
      disabled: true
    }, {
      updateOn: 'blur'
    });
    this.form.registerControl('idInShop', control);
  }
  cannotUpdatePrice() {
    if (this.value != null && this.value.shop != null && this.value.nameInShop != null) {
      return false;
    }
    return true;
  }
  updatePrice() {
    var _this = this;
    return (0,_home_runner_work_monorepo_monorepo_common_temp_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.parsingError = null;
      if (_this.value == null) return;
      try {
        if (_this.value.idInShop == null) {
          _this.updatePriceIcon = PriceComponent.baseUpdatePriceIcons + ' pi-spin';
          /*      const testProduct = new ScrappedProduct();
                testProduct.productName="Test Product";
                testProduct.productId="TEST-PRODUCT";
                testProduct.currencyCode="EUR";
                testProduct.productPrice=12;
                this.selectedProduct(testProduct);*/
          if (_this.value.nameInShop != null && _this.value.shop != null) {
            // The user defined the product name, let's find the matching ones and let the user select only one of them
            yield _this.priceFinder.searchProducts(_this.value.nameInShop, _this.value.shop).then(value => {
              if (value != null) {
                _this.listOfSelectableProducts = value;
                _this.productSelectionMode = true;
                _this.ref.markForCheck();
                _this.ref.detectChanges();
              }
            }).catch(reason => {
              _this.parsingError = _this.translateToError(reason);
              _this.ref.markForCheck();
              _this.ref.detectChanges();
            });
          }
        } else if (_this.value.shop != null) {
          // We know the product id and the shop, let's update the price directly
          yield _this.priceFinder.findPrice(_this.value, _this.value.shop, _this.parentPosition ?? "").then(newPrice => {
            if (newPrice != null) {
              _this.value.inError = false;
              _this.setSubFieldValue('cost', newPrice.cost);
              _this.setSubFieldValue('priceDate', new Date());
            }
          }).catch(reason => {
            _this.value.inError = true;
            _this.parsingError = _this.translateToError(reason);
            _this.ref.markForCheck();
            _this.ref.detectChanges();
          });
        }
      } finally {
        _this.updatePriceIcon = PriceComponent.baseUpdatePriceIcons;
        _this.ref.markForCheck();
        _this.ref.detectChanges();
      }
    })();
  }
  /**
   * The user has selected one product amongst the list found with its keyword
   * @param product
   */
  selectedProduct(product) {
    this.productSelectionMode = false;
    if (product != null) {
      this.value.idInShop = product.productId;
      //      this.value.nameInShop=product.productName??undefined;
      this.hydrateValueToForm();
      this.setSubFieldValue("cost", _shared_online_shop_scrapper__WEBPACK_IMPORTED_MODULE_6__.AbstractOnlineShopScrapper.toMoneyAmount(product));
      this.setSubFieldValue('priceDate', new Date());
      this.setSubFieldValue('urlInShop', product.productUrl);
      this.value.cost = this.getSubFieldValue("cost");
      this.value.priceDate = this.getSubFieldValue('priceDate');
      this.value.urlInShop = this.getSubFieldValue('urlInShop');
    } else {
      this.clearProduct();
    }
    /*    this.ref.markForCheck();
        this.ref.detectChanges();*/
  }
  /**
   * Override this method to listen to shop name change
   * @param component
   * @param type
   * @param formName
   */
  applyComponentToSubField(component, type, formName) {
    const ret = super.applyComponentToSubField(component, type, formName);
    if (formName == 'shop') {
      const valueChange = component.selectEventSourceFor(_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_7__.DynamicEventType.VALUE_CHANGE);
      if (valueChange != null) {
        this.subscriptions.add(valueChange.eventSource.subscribe({
          next: event => {
            this.clearProduct();
          }
        }));
      }
    }
    return ret;
  }
  clearProduct() {
    this.productSelectionMode = false;
    this.parsingError = null;
    if (this.value) {
      delete this.value.inError;
      delete this.value.cost;
    }
    this.setSubFieldValue('cost', undefined);
    if (this.value) delete this.value.priceDate;
    this.setSubFieldValue('priceDate', undefined);
    if (this.value) delete this.value.urlInShop;
    this.setSubFieldValue('urlInShop', undefined);
    if (this.value) delete this.value.idInShop;
    this.form.get("idInShop")?.setValue(null, {
      emitEvent: false
    });
  }
  productNameChanged(event) {
    //    const inputEvent = event as InputEvent;
    this.clearProduct();
  }
  /**
   * In case the product name is not defined, just try to pick-it up from parent form
   * In this case listen to all changes of parent form
   */
  enableProductNameLookup() {
    // In case the name in shop is not defined, then try to pick-up a name from the parent form
    if (this.value?.nameInShop == null && this.parentForm != null) {
      if (!this.productNameLinked) {
        const parentNameControl = this.guessProductParentComponent();
        if (parentNameControl != null) {
          this.productNameLinked = true;
          this.subscriptions.add(parentNameControl.valueChanges.subscribe(newValue => {
            const nameInShopControl = this.form.get('nameInShop');
            if (nameInShopControl.value == null || nameInShopControl.value == '' || newValue.startsWith(nameInShopControl.value)) {
              if (this.value == null) this.value = {};
              this.value.nameInShop = newValue;
              nameInShopControl.setValue(newValue, {
                emitEvent: false,
                emitModelToViewChange: true
              });
            }
          }));
        }
      }
    }
  }
  guessProductParentComponent() {
    if (this.parentForm != null) {
      const nameProp = _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.DontCodeModelManager.guessNamePropertyOfObject(this.parentForm.controls);
      if (nameProp != null) return this.parentForm.controls[nameProp];
    }
    return null;
  }
  translateToError(reason) {
    const ret = {};
    if (typeof reason === 'string') {
      ret.message = reason;
      return ret;
    }
    if (reason.status != null) {
      ret.status = reason.status;
    }
    if (reason.statusText != null) {
      ret.message = reason.statusText;
    } else if (reason.message != null) {
      ret.message = reason.message;
    }
    if (reason.url != null) {
      ret.url = reason.url;
    }
    if (reason.error != null) {
      ret.content = reason.error;
    }
    if (ret.message == null) {
      // Nothing found
      ret.message = reason.toString();
    }
    return ret;
  }
  performAction(action) {
    var _this2 = this;
    return (0,_home_runner_work_monorepo_monorepo_common_temp_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (action.actionType == _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.ActionType.EXTRACT) {
        yield _this2.priceFinder.updatePriceIfPossible(_this2.value, _this2.parentPosition ?? '').then(newPrice => {
          if (newPrice != null) {
            _this2.value.inError = false;
            _this2.setSubFieldValue('cost', newPrice.cost);
            _this2.setSubFieldValue('priceDate', new Date());
          }
        }).catch(reason => {
          _this2.value.inError = true;
          _this2.parsingError = _this2.translateToError(reason);
          _this2.ref.markForCheck();
          _this2.ref.detectChanges();
        });
      }
    })();
  }
  isInError() {
    return this.parsingError != null;
  }
  errorMessage() {
    if (this.parsingError == null) return '';else {
      let ret = this.parsingError.status ? this.parsingError.status + ':' : '';
      ret = ret + this.parsingError.message;
      return ret;
    }
  }
}
PriceComponent.baseUpdatePriceIcons = 'pi pi-refresh';
PriceComponent.ɵfac = function PriceComponent_Factory(t) {
  return new (t || PriceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_8__.ComponentLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_price_finder_service__WEBPACK_IMPORTED_MODULE_9__.PriceFinderService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
};
PriceComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PriceComponent,
  selectors: [["dontcode-commerce-price"]],
  viewQuery: function PriceComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.inlineView = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.fullEditView = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 7,
  vars: 0,
  consts: [["inlineView", ""], ["priceView", ""], ["fullEditView", ""], [4, "ngIf"], [3, "pTooltip", "escape"], ["target", "_blank", 3, "href"], [4, "ngTemplateOutlet"], ["pButton", "", "type", "button", "class", "p-button-rounded p-button-outlined p-button-danger", "icon", "pi pi-exclamation-triangle", "pTooltip", "Error reading this product price", 4, "ngIf"], ["pButton", "", "type", "button", "icon", "pi pi-exclamation-triangle", "pTooltip", "Error reading this product price", 1, "p-button-rounded", "p-button-outlined", "p-button-danger"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "formgrid", "grid"], [1, "field", "col-12", "md:col-6"], [1, "p-float-label"], ["type", "text", "pInputText", "", "formControlName", "nameInShop", 1, "w-full", 3, "id", "input"], [3, "for"], [1, "flex", "align-items-center"], ["name", "FetchPrice", "pButton", "", "pRipple", "", "type", "button", 1, "flex", "flex-initial", "align-items-center", "p-button-rounded", "p-button-text", 3, "icon", "disabled", "click"], [1, "flex", "align-items-center", "flex-1", 2, "margin-top", "0.5rem"], ["type", "text", "pInputText", "", "formControlName", "idInShop", 1, "w-full"], ["severity", "error"], ["pTemplate", ""], ["target", "_blank", 3, "href", 4, "ngIf"], [1, "field", "col-12", 3, "id"], [3, "listOfProducts", "selected"]],
  template: function PriceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "dtcde-dynamic");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PriceComponent_ng_template_1_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PriceComponent_ng_template_3_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PriceComponent_ng_template_5_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet, _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__.DynamicInsertPoint, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, primeng_api__WEBPACK_IMPORTED_MODULE_12__.PrimeTemplate, primeng_ripple__WEBPACK_IMPORTED_MODULE_13__.Ripple, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonDirective, primeng_tooltip__WEBPACK_IMPORTED_MODULE_15__.Tooltip, primeng_messages__WEBPACK_IMPORTED_MODULE_16__.Messages, _shared_ui_product_selection_component__WEBPACK_IMPORTED_MODULE_17__.ProductSelectionComponent]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PriceComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'dontcode-commerce-price',
      template: "<dtcde-dynamic></dtcde-dynamic>\n<ng-template #inlineView><ng-container *ngIf=\"value\"><span pTooltip=\"Price Date: {{value.priceDate??'Unknown'}}<br/>Shop:{{value.shop??'Unknown'}}\" [escape]=\"false\">\n  <ng-container *ngIf=\"value?.urlInShop\">\n    <a href=\"{{value.urlInShop}}\" target=\"_blank\">\n      <ng-container *ngTemplateOutlet=\"priceView\" ></ng-container>\n    </a>\n  </ng-container>\n  <ng-container *ngIf=\"!value?.urlInShop\">\n    <ng-container *ngTemplateOutlet=\"priceView\" ></ng-container>\n  </ng-container>\n  </span>\n  </ng-container>\n</ng-template>\n\n<ng-template #priceView>\n  <button *ngIf=\"value?.inError\" pButton type=\"button\" class=\"p-button-rounded p-button-outlined p-button-danger\" icon=\"pi pi-exclamation-triangle\" pTooltip=\"Error reading this product price\"></button>\n  <ng-container *ngTemplateOutlet=\"subFieldInlineViewTemplate('cost')\"></ng-container>&nbsp;\n</ng-template>\n\n<ng-template #fullEditView>\n  <ng-container *ngIf=\"form\" [formGroup]=\"form\">\n    <div class=\"formgrid grid\">\n      <div class=\"field col-12 md:col-6\">\n        <span class=\"p-float-label\">\n          <input [id]=\"name+'-name'\" type=\"text\" pInputText formControlName=\"nameInShop\" class=\"w-full\" (input)=\"productNameChanged($event)\">\n          <label [for]=\"name+'-name'\">Product Name</label>\n        </span>\n      </div>\n      <div class=\"field col-12 md:col-6\">\n        <ng-container *ngTemplateOutlet=\"subFieldFullEditTemplate('shop')\"></ng-container>\n      </div>\n      <div class=\"field col-12 md:col-6\">\n        <div class=\"flex align-items-center\">\n          <button *ngIf=\"value?.inError\" pButton type=\"button\" class=\"p-button-rounded p-button-outlined p-button-danger\" icon=\"pi pi-exclamation-triangle\" pTooltip=\"Error reading this product price\"></button>\n          <button name=\"FetchPrice\" class=\"flex flex-initial align-items-center p-button-rounded p-button-text\" pButton pRipple type=\"button\" [icon]=\"updatePriceIcon\" [disabled]=\"cannotUpdatePrice ()\" (click)=\"updatePrice()\"></button>\n          <div class=\"flex align-items-center flex-1\" style=\"margin-top: 0.5rem\">Price:&nbsp;\n            <ng-container *ngTemplateOutlet=\"subFieldFullEditTemplate('cost')\"></ng-container>\n          </div>\n        </div>\n      </div>\n      <div class=\"field col-12 md:col-6\">Date of Price:&nbsp;\n        <ng-container *ngTemplateOutlet=\"subFieldFullEditTemplate('priceDate')\"></ng-container>\n      </div>\n      <div class=\"field col-12 md:col-6\">Product Id:\n          <input type=\"text\" pInputText formControlName=\"idInShop\" class=\"w-full\">\n      </div>\n      <div class=\"field col-12 md:col-6\">Product url:\n          <ng-container *ngTemplateOutlet=\"subFieldFullEditTemplate('urlInShop')\"></ng-container>\n      </div>\n      <ng-container *ngIf=\"isInError ()\">\n        <p-messages severity=\"error\">\n          <ng-template pTemplate>Error : {{errorMessage()}}\n            <a *ngIf=\"parsingError?.url\" [href]=\"parsingError?.url\" target=\"_blank\">Try in the browser</a>\n          </ng-template>\n        </p-messages>\n      </ng-container>\n      <ng-container *ngIf=\"productSelectionMode\">\n        <div [id]=\"name+'-select'\" class=\"field col-12\"><dontcode-commerce-product-selection [listOfProducts]=\"listOfSelectableProducts\" (selected)=\"selectedProduct ($event)\"></dontcode-commerce-product-selection>\n        </div>\n      </ng-container>\n    </div>\n  </ng-container>\n</ng-template>\n"
    }]
  }], function () {
    return [{
      type: _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_8__.ComponentLoaderService
    }, {
      type: _shared_services_price_finder_service__WEBPACK_IMPORTED_MODULE_9__.PriceFinderService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
    }];
  }, {
    inlineView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: ['inlineView', {
        static: true
      }]
    }],
    fullEditView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: ['fullEditView', {
        static: true
      }]
    }]
  });
})();

/***/ }),

/***/ 8210:
/*!*****************************************************************************************************!*\
  !*** ../../plugins/commerce/dist/libs/commerce/esm2020/lib/preview/shop/shop-handler.component.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopHandlerComponent": () => (/* binding */ ShopHandlerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dontcode/plugin-common */ 6864);
/* harmony import */ var _declaration_commerce_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../declaration/commerce-plugin */ 419);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4848);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dropdown */ 9963);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 9305);









/**
 * Display and enable selection of a shop.
 * Shops are found by listing all entities that are managed with the Entity definition 'Online Shop'
 */
function ShopHandlerComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.value);
  }
}
function ShopHandlerComponent_ng_template_2_ng_container_0_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.value, " ");
  }
}
function ShopHandlerComponent_ng_template_2_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ShopHandlerComponent_ng_template_2_ng_container_0_ng_template_2_div_0_Template, 2, 1, "div", 7);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.value);
  }
}
function ShopHandlerComponent_ng_template_2_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const reference_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", reference_r8, " ");
  }
}
function ShopHandlerComponent_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p-dropdown", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onChange", function ShopHandlerComponent_ng_template_2_ng_container_0_Template_p_dropdown_onChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.valueChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ShopHandlerComponent_ng_template_2_ng_container_0_ng_template_2_Template, 1, 1, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ShopHandlerComponent_ng_template_2_ng_container_0_ng_template_3_Template, 1, 1, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r4.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r4.options)("formControlName", ctx_r4.name)("filter", true)("showClear", true)("lazy", true);
  }
}
function ShopHandlerComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ShopHandlerComponent_ng_template_2_ng_container_0_Template, 4, 6, "ng-container", 2);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.form);
  }
}
class ShopHandlerComponent extends _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__.AbstractReferenceComponent {
  constructor(modelMgr, storeMgr, ref) {
    super(modelMgr, storeMgr);
    this.ref = ref;
  }
  ngOnInit() {
    // Manages the list of Shops
    this.setTargetEntitiesWithName(_declaration_commerce_plugin__WEBPACK_IMPORTED_MODULE_3__.CommercePlugin.SHOP_ENTITY_NAME, 'Shop').then(value => {
      if (value) {
        this.ref.markForCheck();
        this.ref.detectChanges();
      }
    }).catch(reason => {
      console.error("Cannot set list of shops", reason);
    });
  }
  setValue(val) {
    /*    const cyLogger=(window as any).Cypress.cy.log;
        console.log(cyLogger);
        if (typeof cyLogger === 'function') {
          try {
            cyLogger.call("erferfre");
          } catch (err) {
            //console.log("err");
          }
        }*/
    // (window as any).Cypress.cy.log("TestERFE");
    if (val == null) {
      // No value set, let's try to guess one
      const form = this.getForm();
      const parentForm = form?.parent;
      if (parentForm != null && !Array.isArray(parentForm.controls)) {
        // The parent is a FormGroup and not a FormArray
        for (const controlKey in parentForm.controls) {
          if (parentForm.controls[controlKey] === form) {
            // The name of the price is this one
            //            throw new Error ("Error");
            val = controlKey;
            break;
          }
        }
      }
    }
    super.setValue(val);
  }
}
ShopHandlerComponent.ɵfac = function ShopHandlerComponent_Factory(t) {
  return new (t || ShopHandlerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModelManager, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeStoreManager, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
};
ShopHandlerComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ShopHandlerComponent,
  selectors: [["dontcode-commerce-shop"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 0,
  consts: [["inlineView", ""], ["fullEditView", ""], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["placeholder", "Select a shop", 3, "options", "formControlName", "filter", "showClear", "lazy", "onChange"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], [4, "ngIf"]],
  template: function ShopHandlerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ShopHandlerComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ShopHandlerComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__.Dropdown, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShopHandlerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'dontcode-commerce-shop',
      template: "<ng-template #inlineView>{{this.value}}</ng-template>\n<ng-template #fullEditView>\n  <ng-container *ngIf=\"form\" [formGroup]=\"form!\">\n    <p-dropdown [options]=\"options\" [formControlName]=\"name\" [filter]=\"true\" [showClear]=\"true\" (onChange)=\"valueChanged ($event)\" placeholder=\"Select a shop\" [lazy]=\"true\">\n      <ng-template pTemplate=\"selectedItem\">\n        <div *ngIf=\"this.value\">\n          {{this.value}}\n        </div>\n      </ng-template>\n      <ng-template let-reference pTemplate=\"item\">\n        {{reference}}\n      </ng-template>\n    </p-dropdown>\n  </ng-container>\n</ng-template>\n"
    }]
  }], function () {
    return [{
      type: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModelManager,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }, {
      type: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeStoreManager,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }];
  }, null);
})();

/***/ }),

/***/ 1310:
/*!**********************************************************************************************************!*\
  !*** ../../plugins/commerce/dist/libs/commerce/esm2020/lib/preview/shop/shop-type-handler.component.mjs ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopTypeHandlerComponent": () => (/* binding */ ShopTypeHandlerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dontcode/plugin-common */ 561);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dontcode/plugin-common */ 1313);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dontcode/plugin-common */ 9519);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4848);
/* harmony import */ var _shared_services_price_finder_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/price-finder.service */ 1775);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dropdown */ 9963);








const _c0 = ["inlineView"];
const _c1 = ["fullEditView"];
function ShopTypeHandlerComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.displayableValue());
  }
}
function ShopTypeHandlerComponent_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4)(2, "p-dropdown", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function ShopTypeHandlerComponent_ng_template_2_ng_container_0_Template_p_dropdown_onChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.valueChanged($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r4.shopTypes)("formControlName", ctx_r4.name);
  }
}
function ShopTypeHandlerComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ShopTypeHandlerComponent_ng_template_2_ng_container_0_Template, 3, 3, "ng-container", 2);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.form);
  }
}
class ShopTypeHandlerComponent extends _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_1__.AbstractDynamicComponent {
  constructor(priceFinder) {
    super();
    this.priceFinder = priceFinder;
    this.shopTypes = new Array();
    this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.shopTypes = this.priceFinder.getListOfShopTypes();
  }
  createAndRegisterFormControls() {
    this.form.registerControl(this.name, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, {
      updateOn: "change"
    }));
  }
  providesTemplates(key) {
    return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__.TemplateList(this.inlineView, null, this.fullEditView);
  }
  canProvide(key) {
    return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__.PossibleTemplateList(true, false, true);
  }
  displayableValue() {
    const ret = _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_1__.AbstractDynamicComponent.toBeautifyString(this.value);
    if (ret == null) return "";else return ret;
  }
  listEventSources() {
    const ret = super.listEventSources();
    ret.push(new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__.BaseDynamicEventSource("Value", _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__.DynamicEventType.VALUE_CHANGE, this.valueChange.asObservable()));
    return ret;
  }
  valueChanged($event) {
    this.valueChange.emit(new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__.BaseDynamicEvent("Value", _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__.DynamicEventType.VALUE_CHANGE, $event.value));
  }
}
ShopTypeHandlerComponent.ɵfac = function ShopTypeHandlerComponent_Factory(t) {
  return new (t || ShopTypeHandlerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_price_finder_service__WEBPACK_IMPORTED_MODULE_5__.PriceFinderService));
};
ShopTypeHandlerComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ShopTypeHandlerComponent,
  selectors: [["dontcode-commerce-shop-type"]],
  viewQuery: function ShopTypeHandlerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inlineView = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fullEditView = _t.first);
    }
  },
  outputs: {
    valueChange: "valueChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 0,
  consts: [["inlineView", ""], ["fullEditView", ""], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "p-float-label"], ["name", "shop", "placeholder", "Please select a Shop", 1, "w-full", 3, "options", "formControlName", "onChange"]],
  template: function ShopTypeHandlerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ShopTypeHandlerComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShopTypeHandlerComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__.Dropdown]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopTypeHandlerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'dontcode-commerce-shop-type',
      template: "<ng-template #inlineView >{{displayableValue()}}</ng-template>\n<ng-template #fullEditView>\n  <ng-container *ngIf=\"form\" [formGroup]=\"form\">\n    <span class=\"p-float-label\">\n      <p-dropdown [options]=\"shopTypes\" name=\"shop\" [formControlName]=\"name\" placeholder=\"Please select a Shop\" class=\"w-full\" (onChange)=\"valueChanged ($event)\"></p-dropdown>\n    </span>\n  </ng-container>\n</ng-template>\n"
    }]
  }], function () {
    return [{
      type: _shared_services_price_finder_service__WEBPACK_IMPORTED_MODULE_5__.PriceFinderService
    }];
  }, {
    inlineView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['inlineView', {
        static: true
      }]
    }],
    fullEditView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['fullEditView', {
        static: true
      }]
    }],
    valueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

/***/ }),

/***/ 9388:
/*!***********************************************************************************************!*\
  !*** ../../plugins/commerce/dist/libs/commerce/esm2020/lib/shared/dynamic-proxy-scrapper.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicProxyScrapper": () => (/* binding */ DynamicProxyScrapper)
/* harmony export */ });
/* harmony import */ var _home_runner_work_monorepo_monorepo_common_temp_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/temp/node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 8706);
/* harmony import */ var _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./online-shop-scrapper */ 2841);


class DynamicProxyScrapper extends _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_1__.AbstractOnlineShopScrapper {
  constructor(http) {
    super(http);
  }
  searchProductsForNameOrId(nameOrId, isId) {
    return Promise.reject("Not implemented");
  }
  callUrlWithProxy(url, engine) {
    var _this = this;
    return (0,_home_runner_work_monorepo_monorepo_common_temp_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const proxyEngine = typeof engine === 'string' ? engine : engine;
      return yield _this.requestWithProxy("GET", url, proxyEngine, {
        observe: 'response',
        responseType: 'text'
      });
    })();
  }
}

/***/ }),

/***/ 2841:
/*!*********************************************************************************************!*\
  !*** ../../plugins/commerce/dist/libs/commerce/esm2020/lib/shared/online-shop-scrapper.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractOnlineShopScrapper": () => (/* binding */ AbstractOnlineShopScrapper),
/* harmony export */   "ProxyEngine": () => (/* binding */ ProxyEngine),
/* harmony export */   "ScrappedProduct": () => (/* binding */ ScrappedProduct)
/* harmony export */ });
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8451);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1211);



/**
 * The description of a product in an online shop
 */
class ScrappedProduct {
  constructor() {
    this.productName = null;
    this.outOfStock = false;
  }
}
class AbstractOnlineShopScrapper {
  /**
   * Helper method to convert a scrappedProduct to a MoneyAmount.
   * @param scrappedProduct
   */
  static toMoneyAmount(scrappedProduct) {
    const ret = new _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.MoneyAmount();
    ret.amount = scrappedProduct.productPrice;
    ret.currencyCode = scrappedProduct.currencyCode;
    return ret;
  }
  constructor(http) {
    this.http = http;
    //public static readonly CORS_DONTCODE_PROXY_URL='https://yolo.test/proxy/debug';
    this.onlineShopName = "Unknown";
  }
  getOnlineShopName() {
    return this.onlineShopName;
  }
  getShopTypeName() {
    return this.onlineShopName;
  }
  requestWithProxy(method, url, engine, options) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(this.http.request(method, this.encodeUrlForCors(url, engine), this.updateOptionsForCors(method, url, engine, options))).catch(reason => {
      return Promise.reject({
        url: url,
        engine: engine,
        error: reason
      });
    });
  }
  /**
   * Avoid Cors issue by running the url through a Cors manager proxy
   * @param url the non uri encoded url to reach. Urlencoding will be done by the function
   */
  encodeUrlForCors(url, engine) {
    let ret = url;
    switch (engine) {
      case ProxyEngine.CORSPROXY_IO:
        ret = AbstractOnlineShopScrapper.CORS_PROXY_URL + encodeURIComponent(url);
        break;
      case ProxyEngine.CORSPROXY_ORG:
        ret = AbstractOnlineShopScrapper.CORS_PROXY_ORG_URL + encodeURIComponent(url);
        break;
      case ProxyEngine.CHROME_ENGINE:
      case ProxyEngine.DONT_CODE:
        ret = AbstractOnlineShopScrapper.CORS_DONTCODE_PROXY_URL;
        break;
      case ProxyEngine.WEBSCRAPING_IA:
        ret = AbstractOnlineShopScrapper.WEBSCRAPING_PROXY_URL;
        break;
    }
    return ret;
  }
  /**
   * Adapts the http options for the proxy...
   * @param url
   * @param engine
   * @param httpOptions
   * @protected
   */
  updateOptionsForCors(method, url, engine, options) {
    switch (engine) {
      case ProxyEngine.CORSPROXY_IO:
        options.withCredentials = false;
        break;
      case ProxyEngine.CORSPROXY_ORG:
        options.withCredentials = false;
        break;
      case ProxyEngine.CHROME_ENGINE:
      case ProxyEngine.DONT_CODE:
        this.addToHttpParams(options, {
          url: encodeURIComponent(url)
        });
        if (engine === ProxyEngine.CHROME_ENGINE) {
          this.addToHttpParams(options, {
            engine: 'chrome'
          });
        }
        break;
      case ProxyEngine.WEBSCRAPING_IA:
        this.addToHttpParams(options, {
          proxy: 'datacenter',
          js: false,
          api_key: AbstractOnlineShopScrapper.WEBSCRAPING_PROXY_API_KEY,
          url: url
        });
        break;
    }
    return options;
  }
  /**
   * By default we do a search with the productId and returns the price
   * @param prod
   * @param useProductName
   */
  updatePrice(prod, useProductName) {
    let productToFind = prod.productId;
    if (useProductName == null) useProductName = false;
    if (useProductName || productToFind == null) {
      productToFind = prod.productName ?? undefined;
      useProductName = true;
    }
    if (productToFind == null) {
      return Promise.reject("You must define a product with a name or id ");
    } else {
      return this.searchProductsForNameOrId(productToFind, !useProductName).then(listOfAllElements => {
        for (const product of listOfAllElements) {
          if (product.productId == prod.productId) {
            return product;
          }
        }
        return null;
      }).then(value => {
        // Let's try a seach with the name if possible
        if (value == null && !useProductName && prod.productName != null) {
          return this.searchProductsForNameOrId(prod.productName, false).then(listOfAllElements => {
            for (const product of listOfAllElements) {
              if (product.productId == prod.productId) {
                return product;
              }
            }
            return Promise.reject("Product " + productToFind + " not found in shoptype " + this.onlineShopName);
          });
        }
        if (value != null) return value;else {
          return Promise.reject("Product " + productToFind + " not found in shoptype " + this.onlineShopName);
        }
      });
    }
  }
  /**
   * Generates standard headers as a browser would do
   * @protected
   */
  standardHeaders() {
    const ret = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      //'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
      /*'Accept-Encoding': 'gzip, deflate, br',
      'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'*/
    });
    return ret;
  }
  /**
   * Throws an exception if the product scrapped is incorrect
   * @param product
   */
  checkScrappedProduct(productSearch, product) {
    if (product.productId == null || product.productId.length == 0) {
      throw new Error("No Product Id scrapped by shop " + this.getOnlineShopName() + " for product search " + productSearch);
    }
    if (product.productName == null || product.productName.length == 0) {
      throw new Error("No Product Name scrapped by shop " + this.getOnlineShopName() + " for product search " + productSearch);
    }
    if ((product.productPrice == null || isNaN(product.productPrice)) && product.outOfStock != true) {
      throw new Error("Incorrect Product Price " + product.productPrice + " scrapped by shop " + this.getOnlineShopName() + " for product search " + productSearch);
    }
  }
  /**
   * Throw an exception if the itemPos is -1 (not found) or after the next product position
   * @param itemPos
   * @param nextStartPos
   * @private
   */
  checkStringPosition(itemPos, limitPos) {
    if (itemPos == -1 || limitPos != -1 && itemPos > limitPos) {
      throw new Error("Error decoding product for Scrapper " + this.getOnlineShopName());
    }
  }
  indexOf(htmlResult, toFind, startPos, limitPos, endIndex = true) {
    const result = htmlResult.indexOf(toFind, startPos);
    if (result == -1) return result;else if (limitPos != null && limitPos != -1 && result > limitPos) return -1;
    if (endIndex) return result + toFind.length;else return result;
  }
  safeIndexOf(htmlResult, toFind, startPos, limitPos, endIndex = true) {
    const result = htmlResult.indexOf(toFind, startPos);
    if (result == -1) throw new Error("Cannot find " + toFind + " for " + this.getOnlineShopName());else if (limitPos != null && limitPos != -1 && result > limitPos) throw new Error("The product content does not contains " + toFind + ' for ' + this.getOnlineShopName());
    if (endIndex) return result + toFind.length;else return result;
  }
  addToHttpParams(options, toAdd) {
    if (options.params == null) {
      options.params = toAdd;
    } else {
      if (options.params.appendAll != null) {
        options.params = options.params.appendAll(toAdd);
      } else {
        options.params = {
          ...options.params,
          ...toAdd
        };
      }
    }
  }
}
AbstractOnlineShopScrapper.CORS_PROXY_URL = 'https://corsproxy.io/?';
AbstractOnlineShopScrapper.CORS_PROXY_ORG_URL = 'https://corsproxy.org/?';
AbstractOnlineShopScrapper.WEBSCRAPING_PROXY_URL = 'https://api.webscraping.ai/html';
AbstractOnlineShopScrapper.WEBSCRAPING_PROXY_API_KEY = 'f4fe0d0b-bfa9-49bd-a3f7-404be7bcad85';
//public static readonly CORS_DONTCODE_PROXY_URL='http://localhost:3000/proxy/debug';
AbstractOnlineShopScrapper.CORS_DONTCODE_PROXY_URL = 'https://shared.collin.best/proxy/debug';
var ProxyEngine;
(function (ProxyEngine) {
  ProxyEngine["CORSPROXY_IO"] = "CORSPROXY.IO";
  ProxyEngine["CORSPROXY_ORG"] = "CORSPROXY.ORG";
  ProxyEngine["WEBSCRAPING_IA"] = "WEBSCRAPING.IA";
  ProxyEngine["DONT_CODE"] = "DONT-CODE.PROXY";
  ProxyEngine["CHROME_ENGINE"] = "DONT-CODE.CHROME";
})(ProxyEngine || (ProxyEngine = {}));

/***/ }),

/***/ 1353:
/*!**************************************************************************************************!*\
  !*** ../../plugins/commerce/dist/libs/commerce/esm2020/lib/shared/scrappers/amazon-scrapper.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmazonScrapper": () => (/* binding */ AmazonScrapper)
/* harmony export */ });
/* harmony import */ var _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../online-shop-scrapper */ 2841);

class AmazonScrapper extends _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.AbstractOnlineShopScrapper {
  constructor(http) {
    super(http);
    this.onlineShopName = "Amazon";
  }
  searchProductsForNameOrId(nameOrId, isId) {
    // remove accents
    const query = AmazonScrapper.SEARCH_ONLINE_URL.replace("QUERY_STRING", encodeURIComponent(nameOrId));
    return this.requestWithProxy("GET", query, _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ProxyEngine.DONT_CODE, {
      headers: {
        Accept: 'text/html'
      },
      responseType: "text",
      observe: "body"
    }).catch(reason => {
      console.error('Error getting amazon price with DontCode Proxy', reason);
      if (reason.status != null && reason.status >= 500) {
        return this.requestWithProxy("GET", query, _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ProxyEngine.CORSPROXY_IO, {
          headers: {
            Accept: 'text/html'
          },
          responseType: "text",
          observe: "body"
        });
      } else {
        return Promise.reject(reason);
      }
    }).catch(reason => {
      console.error('Error getting amazon price with CorsProxyIO', reason);
      if (reason.status != null && reason.status >= 500) {
        return this.requestWithProxy("GET", query, _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ProxyEngine.WEBSCRAPING_IA, {
          headers: {
            Accept: 'text/html'
          },
          responseType: "text",
          observe: "body"
        });
      } else {
        return Promise.reject(reason);
      }
    }).then(completeHtml => {
      const ret = new Array();
      let startPos = completeHtml.indexOf(AmazonScrapper.PRODUCT_START_STRING);
      while (startPos >= 0) {
        const endPos = completeHtml.indexOf(AmazonScrapper.PRODUCT_START_STRING, startPos + 1);
        // Just extract the product bits
        const htmlResult = completeHtml.substring(startPos, endPos);
        const newProduct = new _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ScrappedProduct();
        const middlePos = htmlResult.indexOf('data-component-type="s-product-image"');
        let itemPos = htmlResult.indexOf('data-asin="') + 11;
        if (htmlResult.charAt(itemPos) == '"' || middlePos == -1) {
          startPos = completeHtml.indexOf(AmazonScrapper.PRODUCT_START_STRING, startPos + 1);
          continue; // Ignore the non products
        }
        newProduct.productId = htmlResult.substring(itemPos, htmlResult.indexOf('"', itemPos + 1));
        itemPos = htmlResult.indexOf('href="', middlePos) + 6;
        let url = htmlResult.substring(itemPos, htmlResult.indexOf('"', itemPos + 1));
        if (url.startsWith('/sspa/click'))
          // It'href="/sspas a sponsored link
          {
            const urlPos = url.indexOf('url=') + 4;
            url = url.substring(urlPos);
            url = url.replace(/%2F/g, '/');
          }
        newProduct.productUrl = AmazonScrapper.BASE_URL + url;
        itemPos = htmlResult.indexOf('src="', middlePos + 1) + 5;
        newProduct.productImageUrl = htmlResult.substring(itemPos, htmlResult.indexOf('"', itemPos + 1));
        itemPos = htmlResult.indexOf('a-text-normal">', middlePos) + 15;
        newProduct.productDescription = htmlResult.substring(itemPos, htmlResult.indexOf('<', itemPos + 1));
        if (newProduct.productDescription != null && newProduct.productDescription?.length > 60) {
          newProduct.productName = newProduct.productDescription.substring(0, 60);
        } else {
          newProduct.productName = newProduct.productDescription || null;
        }
        itemPos = htmlResult.indexOf('data-asin="') + 11;
        newProduct.productId = htmlResult.substring(itemPos, htmlResult.indexOf('"', itemPos + 1));
        this.extractPrice(htmlResult, middlePos, newProduct);
        this.checkScrappedProduct(nameOrId, newProduct);
        ret.push(newProduct);
        startPos = htmlResult.indexOf(AmazonScrapper.PRODUCT_START_STRING, startPos + 1);
      }
      return ret;
    });
  }
  extractPrice(htmlResult, startPos, newProduct) {
    const itemPos = htmlResult.indexOf('<span class="a-price-whole">', startPos) + 28;
    let price = htmlResult.substring(itemPos, htmlResult.indexOf('</span>', itemPos + 1));
    price = price.replace(',', '.');
    newProduct.productPrice = Number.parseFloat(price);
    newProduct.currencyCode = "EUR";
  }
}
//static readonly SEARCH_ONLINE_URL="https://www.amazon.fr/s?__mk_fr_FR=C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1KL4W8UW3UJH4&i=aps&field-keywords=QUERY_STRING&ref=nb_sb_noss_2&url=search-alias=aps";
AmazonScrapper.SEARCH_ONLINE_URL = "https://www.amazon.fr/s?k=QUERY_STRING";
AmazonScrapper.PRODUCT_START_STRING = '<div data-asin="';
AmazonScrapper.BASE_URL = 'https://www.amazon.fr';

/***/ }),

/***/ 7611:
/*!*****************************************************************************************************!*\
  !*** ../../plugins/commerce/dist/libs/commerce/esm2020/lib/shared/scrappers/boulanger-scrapper.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoulangerScrapper": () => (/* binding */ BoulangerScrapper)
/* harmony export */ });
/* harmony import */ var _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../online-shop-scrapper */ 2841);

class BoulangerScrapper extends _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.AbstractOnlineShopScrapper {
  constructor(httpClient) {
    super(httpClient);
    this.onlineShopName = "Boulanger";
  }
  searchProductsForNameOrId(nameOrId, isId) {
    // remove accents
    nameOrId = nameOrId.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    const query = BoulangerScrapper.SEARCH_ONLINE_URL.replace("QUERY_STRING", nameOrId);
    // Let's first try with the free CorsProxy, and only if it doesn't work then we'll use the non-free Webscraping
    return this.requestWithProxy("GET", query, _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ProxyEngine.CORSPROXY_IO, {
      observe: 'body',
      responseType: 'text'
    }).then(htmlResult => {
      return this.analysePageResult(nameOrId, htmlResult);
    }).catch(reason => {
      if (reason.code == null || reason.statusText === 'Unknown Error')
        // Cors error due to a redirect
        {
          return this.requestWithProxy("GET", query, _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ProxyEngine.WEBSCRAPING_IA, {
            observe: 'body',
            responseType: 'text'
          }).then(htmlResult => {
            return this.analysePageResult(nameOrId, htmlResult);
          });
        } else {
        return reason;
      }
    });
  }
  analysePageResult(nameOrId, htmlResult) {
    const ret = new Array();
    let startPos = htmlResult.indexOf(BoulangerScrapper.PRODUCT_START_STRING);
    while (startPos >= 0) {
      const newProduct = new _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ScrappedProduct();
      let itemPos = htmlResult.indexOf('href="', startPos) + 6;
      newProduct.productUrl = BoulangerScrapper.BASE_URL + htmlResult.substring(itemPos, htmlResult.indexOf('"', itemPos + 1));
      itemPos = htmlResult.indexOf('data-product-label="', startPos) + 20;
      newProduct.productName = htmlResult.substring(itemPos, htmlResult.indexOf('"', itemPos + 1));
      newProduct.productDescription = undefined;
      itemPos = htmlResult.indexOf('<img src="', startPos + 1) + 10;
      newProduct.productImageUrl = htmlResult.substring(itemPos, htmlResult.indexOf('"', itemPos + 1));
      itemPos = htmlResult.indexOf('data-product-id="', startPos) + 17;
      newProduct.productId = htmlResult.substring(itemPos, htmlResult.indexOf('"', itemPos + 1));
      this.extractPrice(htmlResult, startPos, newProduct);
      this.checkScrappedProduct(nameOrId, newProduct);
      ret.push(newProduct);
      startPos = htmlResult.indexOf(BoulangerScrapper.PRODUCT_START_STRING, startPos + 1);
    }
    return ret;
  }
  extractPrice(htmlResult, startPos, newProduct) {
    const itemPos = htmlResult.indexOf('data-analytics_product_unitprice_ati="', startPos) + 38;
    const price = Number.parseFloat(htmlResult.substring(itemPos, htmlResult.indexOf('"', itemPos + 1)));
    newProduct.productPrice = price;
    newProduct.currencyCode = "EUR";
  }
}
BoulangerScrapper.SEARCH_ONLINE_URL = "https://www.boulanger.com/resultats?tr=QUERY_STRING";
BoulangerScrapper.PRODUCT_START_STRING = "<article";
BoulangerScrapper.BASE_URL = 'https://www.boulanger.com';

/***/ }),

/***/ 795:
/*!*****************************************************************************************************!*\
  !*** ../../plugins/commerce/dist/libs/commerce/esm2020/lib/shared/scrappers/cdiscount-scrapper.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CDiscountScrapper": () => (/* binding */ CDiscountScrapper)
/* harmony export */ });
/* harmony import */ var _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../online-shop-scrapper */ 2841);

class CDiscountScrapper extends _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.AbstractOnlineShopScrapper {
  constructor(httpClient) {
    super(httpClient);
    this.onlineShopName = "CDiscount";
  }
  searchProductsForNameOrId(nameOrId, isId) {
    // remove accents
    /*    const words=nameOrId.split(" ");
        let encodedName = "";
        for (const word of words) {
          encodedName+=encodeURIComponent(word)+"+";
        }
        if( words.length>=1) {
          // Remove the last +
          encodedName=encodedName.substring(0, encodedName.length-1);
        }*/
    const query = CDiscountScrapper.SEARCH_ONLINE_URL.replace("QUERY_STRING", encodeURIComponent(nameOrId));
    return this.requestWithProxy("GET", query, _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ProxyEngine.CORSPROXY_ORG, {
      headers: {
        Accept: 'text/html'
      },
      responseType: "text",
      observe: "body"
    }).then(htmlResult => {
      const ret = new Array();
      let startPos = htmlResult.indexOf(CDiscountScrapper.PRODUCT_START_STRING);
      // We ignore the first one as its the template
      startPos = htmlResult.indexOf(CDiscountScrapper.PRODUCT_START_STRING, startPos + 1);
      while (startPos >= 0) {
        const nextStartPos = htmlResult.indexOf(CDiscountScrapper.PRODUCT_START_STRING, startPos + 1);
        const newProduct = new _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ScrappedProduct();
        let itemPos = this.safeIndexOf(htmlResult, 'href="', startPos, nextStartPos);
        newProduct.productUrl = htmlResult.substring(itemPos, this.safeIndexOf(htmlResult, '"', itemPos + 1, nextStartPos, false));
        itemPos = this.indexOf(htmlResult, '<h2 class="prdtTit">', startPos, nextStartPos);
        if (itemPos == -1) {
          // style is different in product page
          itemPos = this.indexOf(htmlResult, '<h2 class="prdtBILTit">', startPos, nextStartPos);
        }
        newProduct.productName = htmlResult.substring(itemPos, this.safeIndexOf(htmlResult, '</h2>', itemPos + 1, nextStartPos, false));
        newProduct.productDescription = undefined;
        itemPos = this.safeIndexOf(htmlResult, 'src="', startPos + 1, nextStartPos);
        newProduct.productImageUrl = htmlResult.substring(itemPos, this.safeIndexOf(htmlResult, '"', itemPos + 1, nextStartPos, false));
        itemPos = this.safeIndexOf(htmlResult, 'data-productid="', startPos, nextStartPos);
        newProduct.productId = htmlResult.substring(itemPos, this.safeIndexOf(htmlResult, '"', itemPos + 1, nextStartPos, false));
        this.extractPrice(htmlResult, startPos, nextStartPos, newProduct);
        this.checkScrappedProduct(nameOrId, newProduct);
        ret.push(newProduct);
        startPos = htmlResult.indexOf(CDiscountScrapper.PRODUCT_START_STRING, startPos + 1);
      }
      return ret;
    });
  }
  extractPrice(htmlResult, startPos, nextStartPos, newProduct) {
    let itemPos = this.indexOf(htmlResult, '<span class="price priceColor hideFromPro">', startPos, nextStartPos);
    if (itemPos != -1) {
      const commaPos = this.safeIndexOf(htmlResult, ',', itemPos + 1, nextStartPos, false);
      const price = Number.parseInt(htmlResult.substring(itemPos, commaPos));
      const cents = Number.parseInt(htmlResult.substring(commaPos + 1, this.safeIndexOf(htmlResult, '&euro;', commaPos + 1, nextStartPos, false)));
      newProduct.productPrice = price + cents / 100;
    } else {
      itemPos = this.safeIndexOf(htmlResult, '<span class="hideFromPro priceColor price">', startPos, nextStartPos);
      const price = Number.parseInt(htmlResult.substring(itemPos, this.safeIndexOf(htmlResult, '<sup>', itemPos + 1, nextStartPos, false)));
      const cents = Number.parseInt(htmlResult.substring(this.safeIndexOf(htmlResult, '</sup>', itemPos + 1, nextStartPos, false) - 2, this.safeIndexOf(htmlResult, '</sup>', itemPos + 1, nextStartPos, false)));
      newProduct.productPrice = price + cents / 100;
    }
    newProduct.currencyCode = "EUR";
  }
}
CDiscountScrapper.SEARCH_ONLINE_URL = "https://www.cdiscount.com/search/10/QUERY_STRING.html";
CDiscountScrapper.PRODUCT_START_STRING = '<li data-sku="';
CDiscountScrapper.BASE_URL = 'https://www.cdiscount.com';

/***/ }),

/***/ 5394:
/*!*************************************************************************************************!*\
  !*** ../../plugins/commerce/dist/libs/commerce/esm2020/lib/shared/scrappers/darty-scrapper.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DartyScrapper": () => (/* binding */ DartyScrapper)
/* harmony export */ });
/* harmony import */ var _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../online-shop-scrapper */ 2841);

class DartyScrapper extends _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.AbstractOnlineShopScrapper {
  constructor(http) {
    super(http);
    this.onlineShopName = "Darty";
    this.httpHeaders = {
      "x-algolia-api-key": "740b60dee22b6ca679462288f6cd9c7b",
      "x-algolia-application-id": "Z0YPI1PLPQ"
    };
  }
  searchProductsForNameOrId(nameOrId, isId) {
    let postContent = JSON.stringify(DartyScrapper.JSON_QUERY);
    postContent = postContent.replace("QUERY_STRING", nameOrId);
    postContent = postContent.replace("QUERY_STRING", nameOrId); // QUERY_STRING appears twice
    postContent = JSON.parse(postContent);
    return this.requestWithProxy("POST", DartyScrapper.SEARCH_ONLINE_URL, _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ProxyEngine.CORSPROXY_IO, {
      body: postContent,
      headers: this.httpHeaders,
      responseType: "json",
      observe: "body"
    }).then(jsonResult => {
      if (typeof jsonResult == "string") jsonResult = JSON.parse(jsonResult);
      const ret = new Array();
      const result = jsonResult.results;
      if (result.length > 0) {
        const hits = result[0].hits;
        if (hits != null) {
          for (const aResult of hits) {
            const newProduct = new _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ScrappedProduct();
            newProduct.productPrice = this.extractPrice(aResult);
            newProduct.currencyCode = "EUR";
            newProduct.productName = aResult.reference;
            newProduct.productDescription = undefined;
            newProduct.productId = aResult.codic;
            newProduct.productUrl = DartyScrapper.BASE_URL + "/nav/codic/" + aResult.codic;
            //if( aResult.rewriteUrl==null) {
            if (aResult.pictures?.length > 0) newProduct.productImageUrl = DartyScrapper.BASE_IMAGE_URL.replace("IMAGE_URL", aResult.pictures[0].algoliaPict);
            //} else {
            //  newProduct.productImageUrl="https://image.darty.com/"+aResult.rewriteUrl+"_n"+aResult.pictures[0].name;
            //}
            this.checkScrappedProduct(nameOrId, newProduct);
            ret.push(newProduct);
          }
        }
      }
      return ret;
    });
  }
  /**  extractPrice (htmlResult:string, startPos:number, newProduct:ScrappedProduct): void {
        const itemPos = htmlResult.indexOf('data-automation-id="product_price">', startPos)+35;
        const priceAsString = htmlResult.substring(itemPos, htmlResult.indexOf('<', itemPos+1));
  
        let decodedPrice = "";
        for (let car of priceAsString) {
          if (car==='0' || car==='1' || car==='2' || car==='3' || car==='4' ||
          car==='5' || car==='6' || car==='7' || car==='8' || car==='9' || car===',' || car==='.') {
            if (car===',') car = '.';
            decodedPrice+=car;
          }
        }
  
        newProduct.productPrice=Number.parseFloat(decodedPrice);
        newProduct.currencyCode="EUR"
    }
  */
  /**
   * We have to go directly to the product page, otherwise there may be a redirect
   * @param product
   */
  updatePrice(product, useProductName) {
    return super.updatePrice(product, true); // If the product url is not found, let's try with the product name
  }
  extractPrice(response) {
    if (response.priceSort != null) return response.priceSort / 100;
    if (response.dartyExclusivePriceSort != null) return response.dartyExclusivePriceSort / 100;
    let ret = 0;
    for (const key in response.prices.stores) {
      if (key === '000000') {
        ret = response.prices.stores[key] / 100;
      } else if (key === 'dartyExclusive' && ret === 0) {
        ret = response.prices.stores[key] / 100;
      } else if (ret === 0) {
        ret = response.prices.stores[key] / 100;
      }
    }
    return ret;
  }
}
DartyScrapper.SEARCH_ONLINE_URL = "https://z0ypi1plpq-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia+for+JavaScript+%284.17.0%29%3B+Browser";
/**
static readonly SEARCH_ONLINE_URL="https://www.darty.com/nav/recherche/QUERY_STRING.html"
  protected static readonly PRODUCT_START_STRING="<div class=\"product_detail";
*/
DartyScrapper.JSON_QUERY = {
  "requests": [{
    "indexName": "darty_prod_es6",
    "query": "QUERY_STRING",
    "params": "hitsPerPage=4&tagFilters=%5B%22dcom%22%5D"
  }, {
    "indexName": "darty_prod_es6_query_suggestions",
    "query": "QUERY_STRING",
    "params": "hitsPerPage=5"
  }]
};
DartyScrapper.BASE_URL = 'https://www.darty.com';
DartyScrapper.BASE_IMAGE_URL = 'https://image.darty.com/darty?type=image&source=IMAGE_URL&width=120&heigth=180&quality=80';

/***/ }),

/***/ 3991:
/*!*****************************************************************************************************!*\
  !*** ../../plugins/commerce/dist/libs/commerce/esm2020/lib/shared/scrappers/easy-para-scrapper.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EasyParaScrapper": () => (/* binding */ EasyParaScrapper)
/* harmony export */ });
/* harmony import */ var _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../online-shop-scrapper */ 2841);

class EasyParaScrapper extends _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.AbstractOnlineShopScrapper {
  constructor(http) {
    super(http);
    this.onlineShopName = "EasyParapharmacie";
  }
  searchProductsForNameOrId(nameOrId, isId) {
    // We copy the content
    let postContent = JSON.stringify(EasyParaScrapper.JSON_QUERY);
    for (let i = 1; i < 4; i++) {
      postContent = postContent.replace("QUERY_STRING", encodeURIComponent(nameOrId));
    }
    postContent = JSON.parse(postContent);
    return this.requestWithProxy("POST", EasyParaScrapper.SEARCH_ONLINE_URL, _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ProxyEngine.DONT_CODE, {
      body: postContent,
      responseType: "json",
      observe: "body",
      headers: {
        "x-algolia-api-key": "YTYyYzkyNzgyZDliZTZlMDk1OGE1MDQwNjRkYWY1ZmY4ZTE5OWZhYmU4ZGUyNTM2NDFjNmU4YjllNWMwNmJmNXRhZ0ZpbHRlcnM9",
        "x-algolia-application-id": "JHU6ZVKSFY"
      }
    }).then(jsonResult => {
      if (typeof jsonResult == "string") jsonResult = JSON.parse(jsonResult);
      const ret = new Array();
      const result = jsonResult.results;
      if (result.length > 0) {
        const hits = result[1].hits;
        if (hits != null) {
          for (const aResult of hits) {
            const newProduct = new _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ScrappedProduct();
            newProduct.productPrice = aResult.price.EUR.default;
            newProduct.currencyCode = "EUR";
            newProduct.productName = aResult.name;
            newProduct.productDescription = aResult.short_description ?? aResult.description;
            newProduct.productId = aResult.ean_code?.toString();
            if (newProduct.productId == null || newProduct.productId.length == 0) {
              console.warn("Product " + newProduct.productName + " searched by " + nameOrId + " for Shop " + this.getOnlineShopName() + " has no ean_code, getting objectId instead");
              newProduct.productId = aResult.objectID;
            }
            newProduct.productUrl = aResult.url;
            newProduct.productImageUrl = aResult.image_url;
            newProduct.outOfStock = aResult.in_stock >= 1;
            this.checkScrappedProduct(nameOrId, newProduct);
            ret.push(newProduct);
          }
        }
      }
      return ret;
    });
  }
}
EasyParaScrapper.SEARCH_ONLINE_URL = "https://jhu6zvksfy-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia+for+JavaScript+%284.14.3%29%3B+Browser%3B+Magento2+integration+%283.13.0%29%3B+autocomplete-core+%281.7.1%29%3B+autocomplete-js+%281.7.1%29";
EasyParaScrapper.JSON_QUERY = {
  "requests": [{
    "indexName": "prod_magento2_fr_suggestions",
    "query": "QUERY_STRING",
    "params": "hitsPerPage=5&highlightPreTag=__aa-highlight__&highlightPostTag=__%2Faa-highlight__&clickAnalytics=true"
  }, {
    "query": "QUERY_STRING",
    "indexName": "prod_magento2_fr_products",
    "params": "hitsPerPage=6&highlightPreTag=__aa-highlight__&highlightPostTag=__%2Faa-highlight__&analyticsTags=autocomplete&clickAnalytics=true&distinct=true&facets=%5B%22categories.level0%22%5D&numericFilters=visibility_search%3D1&ruleContexts=%5B%22magento_filters%22%2C%22%22%5D"
  }, {
    "query": "QUERY_STRING",
    "indexName": "prod_magento2_fr_section_manufacturer",
    "params": "hitsPerPage=6&highlightPreTag=__aa-highlight__&highlightPostTag=__%2Faa-highlight__&analyticsTags=autocomplete&clickAnalytics=true&distinct=true"
  }, {
    "query": "QUERY_STRING",
    "indexName": "prod_magento2_fr_categories",
    "params": "hitsPerPage=4&highlightPreTag=__aa-highlight__&highlightPostTag=__%2Faa-highlight__&analyticsTags=autocomplete&clickAnalytics=true&distinct=true&numericFilters=include_in_menu%3D1"
  }]
};

/***/ }),

/***/ 7061:
/*!************************************************************************************************!*\
  !*** ../../plugins/commerce/dist/libs/commerce/esm2020/lib/shared/scrappers/fnac-scrapper.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FnacScrapper": () => (/* binding */ FnacScrapper)
/* harmony export */ });
/* harmony import */ var _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../online-shop-scrapper */ 2841);

class FnacScrapper extends _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.AbstractOnlineShopScrapper {
  constructor() {
    super(...arguments);
    this.onlineShopName = "Fnac";
  }
  /**
   * Avoid Cors issue by running the url through a Cors manager proxy
   * @param url
   */
  /*  encodeUrlForCors(url:string):string {
      return FnacScrapper.CORS_FNAC_PROXY_URL+(url.startsWith('/')?'':'/')+url;
    }*/
  searchProductsForNameOrId(nameOrId, isId) {
    // remove accents
    const words = nameOrId.split(" ");
    let encodedName = "";
    for (const word of words) {
      encodedName += encodeURIComponent(word) + "+";
    }
    if (words.length >= 1) {
      // Remove the last +
      encodedName = encodedName.substring(0, encodedName.length - 1);
    }
    const query = FnacScrapper.SEARCH_ONLINE_URL.replace("QUERY_STRING", encodedName);
    return this.requestWithProxy("GET", query, _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ProxyEngine.DONT_CODE, {
      headers: {
        Accept: 'text/html'
      },
      responseType: "text",
      observe: "body",
      withCredentials: true
    }).then(htmlResult => {
      const ret = new Array();
      let startPos = htmlResult.indexOf(FnacScrapper.PRODUCT_START_STRING);
      let nextStartPos = htmlResult.indexOf(FnacScrapper.PRODUCT_START_STRING, startPos + 1);
      while (startPos >= 0) {
        const newProduct = new _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ScrappedProduct();
        let itemPos = this.safeIndexOf(htmlResult, 'id="', startPos, nextStartPos);
        newProduct.productId = htmlResult.substring(itemPos, htmlResult.indexOf('"', itemPos + 1));
        let middlePos = this.safeIndexOf(htmlResult, '<img class="Article-itemVisualImg', startPos, nextStartPos);
        itemPos = this.indexOf(htmlResult, 'data-lazyimage="', middlePos);
        if (itemPos == -1) {
          itemPos = this.safeIndexOf(htmlResult, 'src="', middlePos, nextStartPos);
        }
        newProduct.productImageUrl = htmlResult.substring(itemPos, htmlResult.indexOf('"', itemPos + 1));
        itemPos = this.safeIndexOf(htmlResult, 'alt="', middlePos, nextStartPos);
        newProduct.productName = htmlResult.substring(itemPos, htmlResult.indexOf('"', itemPos + 1));
        newProduct.productDescription = undefined;
        middlePos = this.safeIndexOf(htmlResult, '<p class="Article-desc', startPos, nextStartPos);
        itemPos = this.safeIndexOf(htmlResult, 'href="', middlePos, nextStartPos);
        newProduct.productUrl = htmlResult.substring(itemPos, htmlResult.indexOf('"', itemPos + 1));
        itemPos = htmlResult.indexOf('vendeur partenaire', startPos);
        if (itemPos != -1 && (nextStartPos == -1 || itemPos < nextStartPos)) {
          newProduct.marketPlace = true;
        } else {
          newProduct.marketPlace = false;
        }
        itemPos = htmlResult.indexOf('En stock', startPos);
        if (itemPos != -1 && (nextStartPos == -1 || itemPos < nextStartPos)) {
          newProduct.outOfStock = false;
        } else {
          newProduct.outOfStock = true;
        }
        this.extractPrice(htmlResult, startPos, newProduct, nextStartPos);
        if (newProduct.productPrice == undefined) {
          newProduct.outOfStock = true;
        }
        this.checkScrappedProduct(nameOrId, newProduct);
        ret.push(newProduct);
        startPos = htmlResult.indexOf(FnacScrapper.PRODUCT_START_STRING, startPos + 1);
        nextStartPos = htmlResult.indexOf(FnacScrapper.PRODUCT_START_STRING, startPos + 1);
      }
      return ret;
    });
  }
  extractPrice(htmlResult, startPos, newProduct, nextStartPos) {
    const itemPos = this.indexOf(htmlResult, 'class="userPrice">', startPos, nextStartPos);
    if (itemPos == -1) {
      newProduct.productPrice = undefined;
      return;
    }
    const supIndex = this.indexOf(htmlResult, '<sup>', itemPos + 1, nextStartPos, false);
    let price = 0;
    if (supIndex == -1)
      // No cents
      {
        price = Number.parseInt(htmlResult.substring(itemPos, this.safeIndexOf(htmlResult, '&euro;', itemPos + 1, nextStartPos, false)));
        newProduct.productPrice = price;
      } else {
      price = Number.parseInt(htmlResult.substring(itemPos, supIndex));
      const cents = Number.parseInt(htmlResult.substring(this.safeIndexOf(htmlResult, '</sup>', itemPos + 1, nextStartPos, false) - 2, this.safeIndexOf(htmlResult, '</sup>', itemPos + 1, nextStartPos)));
      newProduct.productPrice = price + cents / 100;
    }
    newProduct.currencyCode = "EUR";
  }
  /**
   * We have to go directly to the product page, otherwise there may be a redirect
   * @param product
   */
  updatePrice(product, useProductName) {
    if (product.productUrl == null) {
      return super.updatePrice(product, true);
    }
    return this.requestWithProxy("GET", product.productUrl, _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ProxyEngine.DONT_CODE, {
      headers: {
        Accept: 'text/html'
      },
      responseType: "text",
      observe: "body"
    }).then(htmlResult => {
      const newProduct = {
        productId: product.productId,
        productName: product.productName
      };
      const middlePos = this.safeIndexOf(htmlResult, 'userPrice', 0);
      const itemPos = this.safeIndexOf(htmlResult, 'data-price="', middlePos);
      newProduct.productPrice = Number.parseFloat(htmlResult.substring(itemPos, this.safeIndexOf(htmlResult, '"', itemPos + 1)).replace(',', '.'));
      newProduct.currencyCode = 'EUR';
      this.checkScrappedProduct(product.productName ?? "", newProduct);
      product.productPrice = newProduct.productPrice;
      product.currencyCode = newProduct.currencyCode;
      return product;
    }).catch(error => {
      console.error("Error trying to access page for product " + product.productName, error);
      return super.updatePrice(product, true);
    });
  }
}
FnacScrapper.SEARCH_ONLINE_URL = "https://www.fnac.com/SearchResult/ResultList.aspx?SCat=0&Search=QUERY_STRING&sft=1&sa=0";
FnacScrapper.PRODUCT_START_STRING = '<div class="clearfix Article-item';
FnacScrapper.BASE_URL = 'https://www.fnac.com';

/***/ }),

/***/ 5574:
/*!*****************************************************************************************************!*\
  !*** ../../plugins/commerce/dist/libs/commerce/esm2020/lib/shared/scrappers/greenweez-scrapper.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GreenWeezScrapper": () => (/* binding */ GreenWeezScrapper)
/* harmony export */ });
/* harmony import */ var _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../online-shop-scrapper */ 2841);

class GreenWeezScrapper extends _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.AbstractOnlineShopScrapper {
  constructor(http) {
    super(http);
    this.onlineShopName = "GreenWeez";
  }
  searchProductsForNameOrId(nameOrId, isId) {
    // We copy the content
    let postContent = JSON.stringify(GreenWeezScrapper.JSON_QUERY);
    // 3 replacements to do
    postContent = postContent.replace("QUERY_STRING", encodeURIComponent(nameOrId));
    postContent = JSON.parse(postContent);
    return this.requestWithProxy("POST", GreenWeezScrapper.SEARCH_ONLINE_URL, _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ProxyEngine.DONT_CODE, {
      body: postContent,
      responseType: "json",
      observe: "body"
    }).then(jsonResult => {
      if (typeof jsonResult == "string") jsonResult = JSON.parse(jsonResult);
      const ret = new Array();
      const offers = jsonResult.data?.search?.offers;
      if (offers != null && offers.length > 0) {
        for (const aResult of offers) {
          const newProduct = new _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ScrappedProduct();
          newProduct.productPrice = aResult.pricing.priceIncludedVat / 100;
          newProduct.currencyCode = "EUR";
          newProduct.productName = aResult.name;
          newProduct.productDescription = undefined;
          newProduct.productId = aResult.variantCode;
          newProduct.productUrl = this.calculateProductUrl(aResult);
          newProduct.productImageUrl = this.findImageUrl(aResult.imageUrl);
          newProduct.marketPlace = aResult.isMarketPlace === true;
          newProduct.outOfStock = aResult.stock != null && aResult.stock <= 0;
          this.checkScrappedProduct(nameOrId, newProduct);
          ret.push(newProduct);
        }
      }
      return ret;
    });
  }
  calculateProductUrl(shopData) {
    return GreenWeezScrapper.BASE_URL + '/produit/' + shopData.productSlug + '/' + shopData.variantCode;
  }
  findImageUrl(imageUrl) {
    if (imageUrl != null) return GreenWeezScrapper.BASE_URL + "/_next/image?url=https%3A%2F%2Fcdn.greenweez.com%2Fproducts%2F" + imageUrl + "&w=480&q=75";
    return;
  }
}
GreenWeezScrapper.SEARCH_ONLINE_URL = "https://api.greenweez.com/graphql";
GreenWeezScrapper.BASE_URL = "https://greenweez.com";
GreenWeezScrapper.JSON_QUERY = {
  "query": "\n  query search($query: String!, $userId: String!) {\n    search(query: $query, userId: $userId) {\n      brands {\n        name\n        id\n        highlight\n      }\n      categories {\n        name\n        slug\n        highlight\n      }\n      offers {\n        ...indexOfferFragment\n      }\n      ads {\n        pageId\n        error\n        productAds {\n          adUnitId\n          index\n          adUnitSize\n          products {\n            id\n            type\n            adId\n            productId\n            offer {\n              ...indexOfferFragment\n            }\n          }\n        }\n      }\n      total\n    }\n  }\n  \n  fragment indexOfferFragment on IndexOffer {\n    analytics {\n      queryId\n      position\n    }\n    brand\n    brands {\n      name\n      images {\n        path\n        type\n      }\n    }\n    colorVariants\n    imageUrl\n    info {\n      amount\n      unit\n    }\n    isFresh\n    isMarketplace\n    isRefurbished\n    isSecondHand\n    legacyProductId\n    mainCategory\n    merchantName\n    name\n    objectID\n    offerId\n    pricing {\n      channelCode\n      price\n      originalPrice\n      minimumPrice\n      discount\n      priceIncludedVat\n      priceHasIncludedVat\n      taxAmount\n      taxPercent\n      originalTaxAmount\n      originalPriceIncludedVat\n      appliedPromotion {\n        id\n        name\n        startDate\n        endDate\n        discount_value\n        discountValue\n        discountType\n      }\n    }\n    pricingInfos {\n      isCommitted\n      discountPercent\n      original\n      current\n      hasShortExpiration\n    }\n    productFlagType\n    productId\n    productSlug\n    ratingAverage\n    shippingLabel\n    slug\n    stock\n    totalNbOfRating\n    variant\n    variantCode\n    variantId\n  }\n\n",
  "variables": {
    "query": "QUERY_STRING",
    "userId": "e212209f-2820-4be0-bc9c-022d6f3636a7"
  },
  "operationName": "search"
};

/***/ }),

/***/ 7906:
/*!******************************************************************************************************!*\
  !*** ../../plugins/commerce/dist/libs/commerce/esm2020/lib/shared/scrappers/maxicoffee-scrapper.mjs ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaxicoffeeScrapper": () => (/* binding */ MaxicoffeeScrapper)
/* harmony export */ });
/* harmony import */ var _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../online-shop-scrapper */ 2841);

class MaxicoffeeScrapper extends _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.AbstractOnlineShopScrapper {
  constructor(http) {
    super(http);
    this.onlineShopName = "Maxicoffee";
  }
  searchProductsForNameOrId(nameOrId, isId) {
    // We copy the content
    let postContent = JSON.stringify(MaxicoffeeScrapper.JSON_QUERY);
    postContent = postContent.replace("QUERY_STRING", nameOrId);
    postContent = JSON.parse(postContent);
    return this.requestWithProxy("POST", MaxicoffeeScrapper.SEARCH_ONLINE_URL, _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ProxyEngine.CORSPROXY_IO, {
      body: postContent,
      responseType: "json",
      observe: "body"
    }).then(jsonResult => {
      if (typeof jsonResult == "string") jsonResult = JSON.parse(jsonResult);
      const ret = new Array();
      const results = jsonResult.data.items.p;
      if (results.length > 0) {
        for (const aResult of results) {
          const newProduct = new _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ScrappedProduct();
          newProduct.productPrice = aResult.prcn;
          newProduct.currencyCode = "EUR";
          newProduct.productName = aResult.ttl;
          newProduct.productDescription = undefined;
          newProduct.productId = aResult.id;
          newProduct.productUrl = aResult.lnk;
          newProduct.productImageUrl = aResult.img;
          newProduct.outOfStock = aResult.avl === "in stock";
          this.checkScrappedProduct(nameOrId, newProduct);
          ret.push(newProduct);
        }
      }
      return ret;
    });
  }
}
MaxicoffeeScrapper.SEARCH_ONLINE_URL = "https://na.search.sensefuel.live/searchf/4147d2a1-7a21-4697-8a4c-0e25183f3ce9";
MaxicoffeeScrapper.JSON_QUERY = {
  "acp": {},
  "suggest": {},
  "key": "1678529428523-0-AskResult",
  "parentKey": null,
  "terms": {
    "expression": "QUERY_STRING",
    "inputSource": "keyboard",
    "intentDetection": {}
  },
  "trackFingerPrint": {
    "tracks": [],
    "environmentId": "333"
  },
  "items": {
    "from": 0,
    "size": 30,
    "bypassSpellcheck": false
  },
  "prefixQuery": {},
  "filters": {},
  "scopes": [],
  "spotlights": [],
  "sort": null,
  "needShortcuts": true,
  "userIds": {
    "id": null,
    "previousId": null,
    "custId": null,
    "isAuthenticated": false
  },
  "sellerId": "France métropolitaine",
  "kickerContents": {
    "size": 6
  },
  "contents": {
    "from": 0,
    "size": 30,
    "playOnIntent": ["nlu|content"]
  },
  "references": {
    "size": 32
  }
};

/***/ }),

/***/ 9907:
/*!******************************************************************************************************!*\
  !*** ../../plugins/commerce/dist/libs/commerce/esm2020/lib/shared/scrappers/new-pharma-scrapper.mjs ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPharmaScrapper": () => (/* binding */ NewPharmaScrapper)
/* harmony export */ });
/* harmony import */ var _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../online-shop-scrapper */ 2841);

class NewPharmaScrapper extends _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.AbstractOnlineShopScrapper {
  constructor(httpClient) {
    super(httpClient);
    this.onlineShopName = "NewPharma";
  }
  searchProductsForNameOrId(nameOrId, isId) {
    const query = NewPharmaScrapper.SEARCH_ONLINE_URL.replace("QUERY_STRING", encodeURIComponent(nameOrId));
    const headers = this.standardHeaders();
    return this.requestWithProxy("GET", query, _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ProxyEngine.CHROME_ENGINE, {
      headers,
      withCredentials: false,
      responseType: "text",
      observe: "body"
    }).then(htmlResult => {
      const ret = new Array();
      let startPos = htmlResult.indexOf(NewPharmaScrapper.PRODUCT_START_STRING);
      while (startPos >= 0) {
        const newProduct = new _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ScrappedProduct();
        let itemPos = htmlResult.indexOf('data-productid="', startPos) + 16;
        newProduct.productId = htmlResult.substring(itemPos, htmlResult.indexOf('"', itemPos + 1));
        itemPos = htmlResult.indexOf('<a class="details__title', startPos) + 24;
        itemPos = htmlResult.indexOf('title="', itemPos + 1) + 7;
        newProduct.productName = htmlResult.substring(itemPos, htmlResult.indexOf('"', itemPos + 1));
        newProduct.productDescription = undefined;
        itemPos = htmlResult.indexOf('href="', startPos) + 6;
        newProduct.productUrl = htmlResult.substring(itemPos, htmlResult.indexOf('"', itemPos + 1));
        itemPos = htmlResult.indexOf('<img src="', startPos + 1) + 10;
        newProduct.productImageUrl = htmlResult.substring(itemPos, htmlResult.indexOf('"', itemPos + 1));
        this.extractPrice(htmlResult, startPos, newProduct);
        this.checkScrappedProduct(nameOrId, newProduct);
        ret.push(newProduct);
        startPos = htmlResult.indexOf(NewPharmaScrapper.PRODUCT_START_STRING, startPos + 1);
      }
      return ret;
    });
  }
  extractPrice(htmlResult, startPos, newProduct) {
    let startPricePos = htmlResult.indexOf('data-content_ids="[' + newProduct.productId + ']"', startPos + 1);
    if (startPricePos == -1) {
      startPricePos = htmlResult.indexOf('data-content_ids="' + newProduct.productId + '"', startPos + 1);
    }
    if (startPricePos != -1) {
      // It may be unavailable
      let itemPos = htmlResult.indexOf('data-currency="', startPricePos) + 15;
      newProduct.currencyCode = htmlResult.substring(itemPos, htmlResult.indexOf('"', itemPos + 1));
      itemPos = htmlResult.indexOf('data-value="', startPricePos) + 12;
      newProduct.productPrice = parseFloat(htmlResult.substring(itemPos, htmlResult.indexOf('"', itemPos + 1)));
    }
  }
  /**
   * We have to go directly to the product page, otherwise there may be a redirect
   * @param product
   */
  updatePrice(product, useProductName) {
    if (product.productUrl == null) {
      return super.updatePrice(product, true);
    }
    return this.requestWithProxy("GET", product.productUrl, _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ProxyEngine.CHROME_ENGINE, {
      headers: {
        Accept: 'text/html'
      },
      withCredentials: false,
      responseType: "text",
      observe: "body"
    }).then(htmlResult => {
      const newProduct = {
        productId: product.productId,
        productName: product.productName
      };
      this.extractPrice(htmlResult, 0, newProduct);
      this.checkScrappedProduct(product.productName ?? "", newProduct);
      product.productPrice = newProduct.productPrice;
      product.currencyCode = newProduct.currencyCode;
      return product;
    }).catch(error => {
      console.error("Error trying to access page for product " + product.productName, error);
      return super.updatePrice(product, true);
    });
  }
}
NewPharmaScrapper.SEARCH_ONLINE_URL = "https://www.newpharma.fr/search-results/search.html?q=QUERY_STRING";
NewPharmaScrapper.PRODUCT_START_STRING = "<div class=\"product js-product-row product--desktop";

/***/ }),

/***/ 7401:
/*!***************************************************************************************************!*\
  !*** ../../plugins/commerce/dist/libs/commerce/esm2020/lib/shared/scrappers/onatera-scrapper.mjs ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OnateraScrapper": () => (/* binding */ OnateraScrapper)
/* harmony export */ });
/* harmony import */ var _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../online-shop-scrapper */ 2841);

class OnateraScrapper extends _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.AbstractOnlineShopScrapper {
  constructor(http) {
    super(http);
    this.onlineShopName = "Onatera";
  }
  searchProductsForNameOrId(nameOrId, isId) {
    // We copy the content
    let postContent = JSON.stringify(OnateraScrapper.JSON_QUERY);
    // And add the query
    postContent = postContent.replace(/QUERY_STRING/g, encodeURIComponent(nameOrId));
    postContent = JSON.parse(postContent);
    return this.requestWithProxy("POST", OnateraScrapper.SEARCH_ONLINE_URL, _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ProxyEngine.CORSPROXY_IO, {
      body: postContent,
      responseType: "json",
      observe: "body"
    }).then(jsonResult => {
      if (typeof jsonResult == "string") jsonResult = JSON.parse(jsonResult);
      const ret = new Array();
      const results = jsonResult.results;
      if (results.length > 0) {
        for (const result of results) {
          const hits = result.hits;
          if (hits != null) {
            for (const aResult of hits) {
              if (aResult.is_active == true) {
                const productName = aResult.name + ' ' + aResult.brand_name + ' ';
                if (aResult.variants != null) {
                  for (const variant of aResult.variants) {
                    const newProduct = new _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ScrappedProduct();
                    newProduct.productPrice = variant.price / 100;
                    newProduct.outOfStock = !variant.hasStock;
                    newProduct.currencyCode = "EUR";
                    newProduct.productName = productName + variant.name;
                    newProduct.productDescription = variant.shortDescription ?? variant.description;
                    newProduct.productId = variant.productVariantId.toString();
                    newProduct.productUrl = OnateraScrapper.BASE_URL + variant.url;
                    newProduct.productImageUrl = OnateraScrapper.IMAGE_BASE_URL + variant.picture_path;
                    this.checkScrappedProduct(nameOrId, newProduct);
                    ret.push(newProduct);
                  }
                }
              }
            }
          }
        }
      }
      return ret;
    });
  }
}
OnateraScrapper.SEARCH_ONLINE_URL = "https://f75bb6q2sy-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia+for+JavaScript+%284.11.0%29%3B+Browser+%28lite%29%3B+instantsearch.js+%284.41.0%29%3B+Vue+%282.6.14%29%3B+Vue+InstantSearch+%284.3.3%29%3B+JS+Helper+%283.8.2%29&x-algolia-api-key=f319f4e4b15d239ba0509b3c6c4a0ecd&x-algolia-application-id=F75BB6Q2SY";
OnateraScrapper.BASE_URL = "https://onatera.com";
OnateraScrapper.IMAGE_BASE_URL = 'https://media.onatera.com/cache/product_image_listing_DM/';
OnateraScrapper.JSON_QUERY = {
  "requests": [{
    "indexName": "intl.product.fr.fr",
    "params": "clickAnalytics=true&facets=%5B%5D&hitsPerPage=0&query=QUERY_STRING&tagFilters=&userToken=anonymous_09f81bae3a73d5bcb1582423816110b7"
  }, {
    "indexName": "intl.product.fr.fr",
    "params": "clickAnalytics=true&facets=%5B%5D&highlightPostTag=__%2Fais-highlight__&highlightPreTag=__ais-highlight__&hitsPerPage=6&query=QUERY_STRING&tagFilters=&userToken=anonymous_09f81bae3a73d5bcb1582423816110b7"
  }, {
    "indexName": "intl.category.fr.fr",
    "params": "clickAnalytics=true&facets=%5B%5D&highlightPostTag=__%2Fais-highlight__&highlightPreTag=__ais-highlight__&hitsPerPage=3&numericFilters=ref_count%20%3E%200&query=QUERY_STRING&tagFilters=&userToken=anonymous_09f81bae3a73d5bcb1582423816110b7"
  }, {
    "indexName": "intl.brand.fr.fr",
    "params": "clickAnalytics=true&facets=%5B%5D&highlightPostTag=__%2Fais-highlight__&highlightPreTag=__ais-highlight__&hitsPerPage=3&numericFilters=product_count%20%3E%200&query=QUERY_STRING&tagFilters=&userToken=anonymous_09f81bae3a73d5bcb1582423816110b7"
  }, {
    "indexName": "intl.active.fr.fr",
    "params": "clickAnalytics=true&facets=%5B%5D&highlightPostTag=__%2Fais-highlight__&highlightPreTag=__ais-highlight__&hitsPerPage=3&numericFilters=product_count%20%3E%200&query=QUERY_STRING&tagFilters=&userToken=anonymous_09f81bae3a73d5bcb1582423816110b7"
  }, {
    "indexName": "intl.content.for_recipes.fr.fr",
    "params": "clickAnalytics=true&facetFilters=%5B%22type%3Adiy%22%5D&facets=%5B%5D&highlightPostTag=__%2Fais-highlight__&highlightPreTag=__ais-highlight__&hitsPerPage=3&query=QUERY_STRING&tagFilters=&userToken=anonymous_09f81bae3a73d5bcb1582423816110b7"
  }]
};

/***/ }),

/***/ 4860:
/*!********************************************************************************************************!*\
  !*** ../../plugins/commerce/dist/libs/commerce/esm2020/lib/shared/scrappers/web-ecologie-scrapper.mjs ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebEcologieScrapper": () => (/* binding */ WebEcologieScrapper)
/* harmony export */ });
/* harmony import */ var _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../online-shop-scrapper */ 2841);

class WebEcologieScrapper extends _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.AbstractOnlineShopScrapper {
  constructor(http) {
    super(http);
    this.onlineShopName = "WebEcologie";
  }
  searchProductsForNameOrId(nameOrId, isId) {
    const query = WebEcologieScrapper.SEARCH_ONLINE_URL.replace("QUERY_STRING", encodeURIComponent(nameOrId));
    return this.requestWithProxy("GET", query, _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ProxyEngine.DONT_CODE, {
      headers: {
        Accept: 'text/html'
      },
      responseType: "text",
      observe: "body"
    }).then(htmlResult => {
      const ret = new Array();
      let startPos = htmlResult.indexOf(WebEcologieScrapper.PRODUCT_START_STRING);
      while (startPos >= 0) {
        const newProduct = new _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ScrappedProduct();
        let itemPos = htmlResult.indexOf('href="', startPos) + 6;
        newProduct.productUrl = htmlResult.substring(itemPos, htmlResult.indexOf('"', itemPos + 1));
        itemPos = htmlResult.indexOf('title="', startPos) + 7;
        newProduct.productName = htmlResult.substring(itemPos, htmlResult.indexOf('"', itemPos + 1));
        newProduct.productDescription = undefined;
        itemPos = htmlResult.indexOf('src="', startPos + 1) + 5;
        newProduct.productImageUrl = htmlResult.substring(itemPos, htmlResult.indexOf('"', itemPos + 1));
        const startWishlistPos = htmlResult.indexOf('<a class="addToWishlist', startPos) + 23;
        itemPos = htmlResult.indexOf('rel="', startWishlistPos) + 5;
        newProduct.productId = htmlResult.substring(itemPos, htmlResult.indexOf('"', itemPos + 1));
        this.extractPrice(htmlResult, startPos, newProduct);
        this.checkScrappedProduct(nameOrId, newProduct);
        ret.push(newProduct);
        startPos = htmlResult.indexOf(WebEcologieScrapper.PRODUCT_START_STRING, startPos + 1);
      }
      return ret;
    });
  }
  extractPrice(htmlResult, startPos, newProduct) {
    let itemPos = htmlResult.indexOf('class="price-first-part">', startPos) + 25;
    let price = Number.parseInt(htmlResult.substring(itemPos, htmlResult.indexOf('<', itemPos + 1)));
    itemPos = htmlResult.indexOf('class="price-last-part">', startPos) + 24;
    price = price + Number.parseInt(htmlResult.substring(itemPos, htmlResult.indexOf('<', itemPos + 1))) / 100;
    newProduct.productPrice = price;
    itemPos = htmlResult.indexOf("itemprop=\"priceCurrency\"", startPos) + 24;
    itemPos = htmlResult.indexOf("content=\"", itemPos) + 9;
    newProduct.currencyCode = htmlResult.substring(itemPos, htmlResult.indexOf('"', itemPos + 1));
  }
  /**
   * We have to go directly to the product page, otherwise there may be a redirect
   * @param product
   */
  updatePrice(product, useProductName) {
    if (product.productUrl == null) {
      return super.updatePrice(product, true); // If the product url is not found, let's try with the product name
    }
    return this.requestWithProxy("GET", product.productUrl, _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_0__.ProxyEngine.DONT_CODE, {
      headers: {
        Accept: 'text/html'
      },
      responseType: "text",
      observe: "body"
    }).then(htmlResult => {
      const newProduct = {
        productId: product.productId,
        productName: product.productName
      };
      this.extractPrice(htmlResult, 0, newProduct);
      this.checkScrappedProduct(product.productName ?? "Unknown", newProduct);
      product.productPrice = newProduct.productPrice;
      product.currencyCode = newProduct.currencyCode;
      return product;
    }).catch(error => {
      console.error("Error trying to access page for product " + product.productName, error);
      return super.updatePrice(product, true);
    });
  }
}
WebEcologieScrapper.SEARCH_ONLINE_URL = "https://www.webecologie.com/rechercher?search_query=QUERY_STRING";
WebEcologieScrapper.PRODUCT_START_STRING = "<a class=\"product_img_link\"";

/***/ }),

/***/ 1775:
/*!******************************************************************************************************!*\
  !*** ../../plugins/commerce/dist/libs/commerce/esm2020/lib/shared/services/price-finder.service.mjs ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PriceFinderService": () => (/* binding */ PriceFinderService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_monorepo_monorepo_common_temp_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/temp/node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 8706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../online-shop-scrapper */ 2841);
/* harmony import */ var _scrappers_easy_para_scrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scrappers/easy-para-scrapper */ 3991);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _scrappers_greenweez_scrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scrappers/greenweez-scrapper */ 5574);
/* harmony import */ var _declaration_commerce_plugin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../declaration/commerce-plugin */ 419);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 1211);
/* harmony import */ var _scrappers_new_pharma_scrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scrappers/new-pharma-scrapper */ 9907);
/* harmony import */ var _scrappers_web_ecologie_scrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scrappers/web-ecologie-scrapper */ 4860);
/* harmony import */ var _scrappers_boulanger_scrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scrappers/boulanger-scrapper */ 7611);
/* harmony import */ var _scrappers_darty_scrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scrappers/darty-scrapper */ 5394);
/* harmony import */ var _scrappers_cdiscount_scrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scrappers/cdiscount-scrapper */ 795);
/* harmony import */ var _scrappers_amazon_scrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../scrappers/amazon-scrapper */ 1353);
/* harmony import */ var _scrappers_fnac_scrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../scrappers/fnac-scrapper */ 7061);
/* harmony import */ var _scrappers_onatera_scrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scrappers/onatera-scrapper */ 7401);
/* harmony import */ var _scrappers_maxicoffee_scrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../scrappers/maxicoffee-scrapper */ 7906);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8451);




















class PriceFinderService {
  constructor(httpClient, modelMgr, storeMgr) {
    this.httpClient = httpClient;
    this.modelMgr = modelMgr;
    this.storeMgr = storeMgr;
    this.listOfScrappers = new Map();
    this.shopTypeNames = new Array();
    if (this.modelMgr == null) this.modelMgr = _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.dtcde.getModelManager();
    if (this.storeMgr == null) this.storeMgr = _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.dtcde.getStoreManager();
    this.addScrapper(new _scrappers_easy_para_scrapper__WEBPACK_IMPORTED_MODULE_2__.EasyParaScrapper(httpClient));
    this.addScrapper(new _scrappers_greenweez_scrapper__WEBPACK_IMPORTED_MODULE_3__.GreenWeezScrapper(httpClient));
    this.addScrapper(new _scrappers_new_pharma_scrapper__WEBPACK_IMPORTED_MODULE_4__.NewPharmaScrapper(httpClient));
    this.addScrapper(new _scrappers_web_ecologie_scrapper__WEBPACK_IMPORTED_MODULE_5__.WebEcologieScrapper(httpClient));
    this.addScrapper(new _scrappers_onatera_scrapper__WEBPACK_IMPORTED_MODULE_6__.OnateraScrapper(httpClient));
    this.addScrapper(new _scrappers_boulanger_scrapper__WEBPACK_IMPORTED_MODULE_7__.BoulangerScrapper(httpClient));
    this.addScrapper(new _scrappers_darty_scrapper__WEBPACK_IMPORTED_MODULE_8__.DartyScrapper(httpClient));
    this.addScrapper(new _scrappers_cdiscount_scrapper__WEBPACK_IMPORTED_MODULE_9__.CDiscountScrapper(httpClient));
    this.addScrapper(new _scrappers_fnac_scrapper__WEBPACK_IMPORTED_MODULE_10__.FnacScrapper(httpClient));
    this.addScrapper(new _scrappers_amazon_scrapper__WEBPACK_IMPORTED_MODULE_11__.AmazonScrapper(httpClient));
    this.addScrapper(new _scrappers_maxicoffee_scrapper__WEBPACK_IMPORTED_MODULE_12__.MaxicoffeeScrapper(httpClient));
  }
  addScrapper(newScrapper) {
    this.listOfScrappers.set(newScrapper.getOnlineShopName(), newScrapper);
    this.shopTypeNames.push(newScrapper.getOnlineShopName());
  }
  getListOfShopTypes() {
    return this.shopTypeNames;
  }
  /**
   * Finds the list of products corresponding to the productInfo given for the shopTypeName given at the model position given.
   * @param productInfo
   * @param position
   * @param shopName
   * @param model
   */
  searchProducts(productName, shopName) {
    var _this = this;
    return (0,_home_runner_work_monorepo_monorepo_common_temp_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const scrapper = _this.listOfScrappers.get(yield _this.getShopTypeNameOf(shopName));
      if (scrapper == null) throw new Error("Shop type " + shopName + " not found");
      return scrapper.searchProductsForNameOrId(productName, false);
    })();
  }
  /**
   * Finds the price of a product in parameter for a shop in parameter. It looks for a Price element in the product info given.
   * and updates it
   * @param productValue
   * @param position
   * @param shopName
   * @param model
   */
  findPrice(productValue, shopName, position, model) {
    var _this2 = this;
    return (0,_home_runner_work_monorepo_monorepo_common_temp_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (productValue == null) {
        throw new Error("No product to get price for");
      }
      const scrapper = _this2.listOfScrappers.get(yield _this2.getShopTypeNameOf(shopName));
      if (scrapper == null) throw new Error("Shop type " + shopName + " not found");
      if (model == null) {
        model = _this2.modelMgr.findAtPosition(position, false);
      }
      // We're looking for a Price that points to the shopType given in parameter
      let priceField = null;
      let productPrice = null;
      if (model?.fields != null) {
        for (const field of Object.values(model.fields)) {
          if (field.type === "Price") {
            // We found one, is it the correct one ?
            priceField = field;
            productPrice = productValue[priceField.name];
            break;
            /*if (productPrice?.shop!==shopTypeName) {
              priceField=null;
              productPrice=null;
            }else {
              break;
            }*/
          }
        }
      }
      // In case we didn't find anything, we assume the value in parameter is the price
      if (priceField == null) {
        priceField = model;
        productPrice = productValue;
      }
      // Let's see if we already have the id of the item, then we can get the price very quickly
      const productId = _this2.findProductId(productPrice);
      if (productId == null || productPrice == null) {
        return Promise.reject("Product Id not found in " + productValue);
      } else {
        if (productPrice != null) {
          // First update the lastCheckDate to avoid continuously retrying to get the price in case of error
          productPrice.lastCheckDate = new Date();
          return scrapper.updatePrice({
            productId,
            productName: productPrice.nameInShop ?? null,
            productUrl: productPrice.urlInShop
          }).then(updated => {
            if (updated != null && productPrice != null) {
              productPrice.cost = _online_shop_scrapper__WEBPACK_IMPORTED_MODULE_13__.AbstractOnlineShopScrapper.toMoneyAmount(updated);
              productPrice.outOfStock = updated.outOfStock;
              productPrice.priceDate = new Date();
              productPrice.inError = false;
              return productPrice;
            }
            return null;
          }).catch(reason => {
            console.error("Cannot update price for " + productPrice?.nameInShop + " because of ", reason);
            if (productPrice != null) productPrice.inError = true;
            throw reason;
          });
        } else {
          return Promise.reject("Impossible to be there...");
        }
      }
    })();
  }
  findProductId(info) {
    // Try to find if we have a list of shop per product
    if (info?.idInShop != null) {
      return info?.idInShop;
    } else {
      if (info?.productId != null) return info?.productId;else if (info?.id != null) {
        return info?.id;
      }
    }
    return null;
  }
  findProductName(info) {
    // Try to find if we have a list of shop per product
    if (info?.nameInShop != null) {
      return info?.nameInShop;
    } else {
      if (info?.productName != null) return info?.productName;else if (info?.name != null) {
        return info?.name;
      }
    }
    return null;
  }
  updatePriceIfPossible(val, position) {
    var _this3 = this;
    return (0,_home_runner_work_monorepo_monorepo_common_temp_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (val.idInShop != null && val.shop != null) {
        if (typeof val.lastCheckDate === 'string') {
          val.lastCheckDate = new Date(val.lastCheckDate);
        }
        if (val.lastCheckDate == null || val.lastCheckDate.getTime() + PriceFinderService.DONT_UPDATE_UNTIL_DELAY_MS < new Date().getTime()) {
          // Yes we can update
          //console.debug("Need to update price for ", val.nameInShop);
          const newPrice = yield _this3.findPrice(val, val.shop, position);
          if (newPrice != null) newPrice.priceDate = new Date();
          return newPrice;
        }
      }
      return null;
    })();
  }
  getShopTypeNameOf(shopName) {
    const query = "$.creation.entities[?(@.name=='" + _declaration_commerce_plugin__WEBPACK_IMPORTED_MODULE_14__.CommercePlugin.SHOP_ENTITY_NAME + "')]";
    const targetEntitiesPos = this.modelMgr.queryModelToSingle(query)?.pointer;
    if (targetEntitiesPos == null) return Promise.resolve(shopName);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.firstValueFrom)(this.storeMgr.searchEntities(targetEntitiesPos, {
      name: 'Shop',
      value: shopName,
      operator: _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.DontCodeStoreCriteriaOperator.EQUALS
    })).then(loaded => {
      if (loaded?.length != 1) return shopName;
      if (loaded[0].Type != null) return loaded[0].Type;else return shopName;
    });
  }
}
PriceFinderService.DONT_UPDATE_UNTIL_DELAY_MS = 1000 * 60 * 10; // Don't update price until 10mn has passed since the last one
PriceFinderService.ɵfac = function PriceFinderService_Factory(t) {
  return new (t || PriceFinderService)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_dontcode_core__WEBPACK_IMPORTED_MODULE_1__.DontCodeModelManager, 8), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵinject"](_dontcode_core__WEBPACK_IMPORTED_MODULE_1__.DontCodeStoreManager, 8));
};
PriceFinderService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjectable"]({
  token: PriceFinderService,
  factory: PriceFinderService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵsetClassMetadata"](PriceFinderService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClient
    }, {
      type: _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.DontCodeModelManager,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.Optional
      }]
    }, {
      type: _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.DontCodeStoreManager,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.Optional
      }]
    }];
  }, null);
})();

/***/ }),

/***/ 7944:
/*!*******************************************************************************************************!*\
  !*** ../../plugins/commerce/dist/libs/commerce/esm2020/lib/shared/ui/product-selection.component.mjs ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductSelectionComponent": () => (/* binding */ ProductSelectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 9305);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 4001);
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dataview */ 211);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/card */ 167);







function ProductSelectionComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Select product, or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductSelectionComponent_ng_template_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.notFound());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ProductSelectionComponent_ng_template_2_ng_template_2_img_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
  }
  if (rf & 2) {
    const product_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r4.productImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function ProductSelectionComponent_ng_template_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductSelectionComponent_ng_template_2_ng_template_2_img_0_Template, 1, 1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xA0 ");
  }
  if (rf & 2) {
    const product_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r4.productImageUrl !== null);
  }
}
function ProductSelectionComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductSelectionComponent_ng_template_2_ng_template_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const product_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.selectionOf(product_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ProductSelectionComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "p-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductSelectionComponent_ng_template_2_ng_template_2_Template, 2, 1, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p")(4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProductSelectionComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", product_r4.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4.productDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.localizedAmount(product_r4));
  }
}
class ProductSelectionComponent {
  constructor(ref) {
    this.ref = ref;
    this.listOfProducts = new Array();
    this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  selectionOf(product) {
    this.selected.next(product);
  }
  localizedAmount(product) {
    if (product.productPrice == null || product.currencyCode == null) return product.currencyCode ?? "";
    return Intl.NumberFormat(globalThis?.window?.navigator.language ?? 'en-US', {
      style: 'currency',
      currency: product.currencyCode
    }).format(product.productPrice);
  }
  notFound() {
    this.selected.next(null);
  }
}
ProductSelectionComponent.ɵfac = function ProductSelectionComponent_Factory(t) {
  return new (t || ProductSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
ProductSelectionComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProductSelectionComponent,
  selectors: [["dontcode-commerce-product-selection"]],
  inputs: {
    listOfProducts: "listOfProducts"
  },
  outputs: {
    selected: "selected"
  },
  decls: 3,
  vars: 3,
  consts: [["layout", "grid", 3, "value", "rows", "paginator"], ["pTemplate", "header"], ["pTemplate", "gridItem"], ["label", "Not found", "icon", "pi pi-delete-left", "pButton", "", 3, "click"], [1, "col-6", "md:col-3", "flex", "align-items-stretch"], [3, "header"], ["pTemplate", "footer"], [3, "src", 4, "ngIf"], [3, "src"], ["label", "Select", "icon", "pi pi-check", "pButton", "", 3, "click"]],
  template: function ProductSelectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-dataView", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductSelectionComponent_ng_template_1_Template, 2, 0, "ng-template", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductSelectionComponent_ng_template_2_Template, 10, 3, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.listOfProducts)("rows", 4)("paginator", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, primeng_api__WEBPACK_IMPORTED_MODULE_2__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective, primeng_dataview__WEBPACK_IMPORTED_MODULE_4__.DataView, primeng_card__WEBPACK_IMPORTED_MODULE_5__.Card]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductSelectionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'dontcode-commerce-product-selection',
      template: "<p-dataView [value]=\"listOfProducts\" [rows]=\"4\" [paginator]=\"true\" layout=\"grid\">\n  <ng-template pTemplate=\"header\">Select product, or <button label=\"Not found\" icon=\"pi pi-delete-left\" pButton (click)=\"notFound ()\"></button></ng-template>\n  <ng-template let-product pTemplate=\"gridItem\">\n    <div class=\"col-6 md:col-3 flex align-items-stretch\">\n      <p-card [header]=\"product.productName\">\n        <ng-template pTemplate=\"header\">\n          <img *ngIf=\"product.productImageUrl!==null\" [src]=\"product.productImageUrl\" />&nbsp;\n        </ng-template>\n        <p><small>{{product.productDescription}}</small></p>\n        <p><h2>{{localizedAmount(product)}}</h2>\n        <ng-template pTemplate=\"footer\">\n          <button label=\"Select\" icon=\"pi pi-check\" pButton (click)=\"selectionOf (product)\"></button>\n        </ng-template>\n      </p-card>\n    </div>\n  </ng-template>\n</p-dataView>\n"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    listOfProducts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

/***/ }),

/***/ 6299:
/*!***************************************************************************************!*\
  !*** ../../plugins/report/dist/libs/report/esm2020/lib/declaration/report-plugin.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportPlugin": () => (/* binding */ ReportPlugin)
/* harmony export */ });
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ 4765);
/* harmony import */ var chartjs_adapter_date_std__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-adapter-date-std */ 6129);
/* harmony import */ var chartjs_plugin_autocolors_typescript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chartjs-plugin-autocolors-typescript */ 6578);




/**
 * This plugin demonstrate 2 things:
 * - how to declare a new field type that can be selected in the Builder and how to manage the display and edition of this new type in the Previewer.
 * - As well it adds a new attribute 'seed' to any Entity and provides a viewer for the Previewer when its value is Yes or Maybe.
 */
class ReportPlugin {
  constructor() {
    chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chartjs_plugin_autocolors_typescript__WEBPACK_IMPORTED_MODULE_3__["default"]);
    chart_js__WEBPACK_IMPORTED_MODULE_2__._adapters._date.override(chartjs_adapter_date_std__WEBPACK_IMPORTED_MODULE_1__.StdDateAdapter.chartJsStandardAdapter());
  }
  getConfiguration() {
    return {
      plugin: {
        id: 'ReportPlugin',
        'display-name': 'Implements the Dont-code standard report model.',
        version: '1.0.0'
      },
      'preview-handlers': [{
        location: {
          parent: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS,
          id: ''
        },
        class: {
          name: 'ReportEntityComponent',
          source: 'report'
        }
      }, {
        location: {
          parent: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_DISPLAY,
          id: 'type',
          values: ['Table']
        },
        class: {
          name: 'ReportTableComponent',
          source: 'report'
        }
      }, {
        location: {
          parent: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_DISPLAY
        },
        class: {
          name: 'ReportDisplayComponent',
          source: 'report'
        }
      }]
    };
  }
  pluginInit(dontCode) {
    // Nothing to do here
  }
}

/***/ }),

/***/ 2243:
/*!********************************************************************************************!*\
  !*** ../../plugins/report/dist/libs/report/esm2020/lib/preview/cross-data-transformer.mjs ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrossDataTransformer": () => (/* binding */ CrossDataTransformer)
/* harmony export */ });
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);

/**
 * Transform columns values into rows depending on the graph configuration
 */
class CrossDataTransformer {
  constructor(modelMgr, affectedColumns, groupType, entityPosition) {
    this.modelMgr = modelMgr;
    this.affectedColumns = affectedColumns;
    this.groupType = groupType;
    this.entityPosition = entityPosition;
  }
  postLoadingTransformation(source) {
    if (this.groupType.show == null) return source;
    const ret = new Array();
    const fieldMapping = this.calculateFieldMapping();
    const metadataPerField = new Map();
    // Adds the groupBy Column to each element so that standard groupBy works
    for (const srcItem of source) {
      const newItem = structuredClone(srcItem);
      // Let's calculate the relevant column
      newItem[this.groupType.show.valueOf()] = this.calculateRelevantColumn(srcItem, fieldMapping, metadataPerField);
      ret.push(newItem);
    }
    return ret;
  }
  calculateRelevantColumn(srcItem, fieldMapping, metadataPerField) {
    let value = undefined;
    let extractValue = undefined;
    let column = undefined;
    const fieldsPosition = this.entityPosition.subItemPointer(_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS_NODE);
    for (const field of this.affectedColumns) {
      let metadata = metadataPerField.get(field);
      if (metadata == null) {
        metadata = new _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DataTransformationInfo();
        metadataPerField.set(field, metadata);
      }
      const fieldId = fieldMapping.get(field);
      if (fieldId == null) return undefined;
      const valueField = this.modelMgr.extractValue(srcItem[field], metadata, fieldsPosition.subItemPointer(fieldId));
      if (value == null || extractValue == null) {
        value = srcItem[field];
        extractValue = valueField;
        column = field;
      } else {
        if (this.groupType.show == _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeReportGroupShowType.OnlyLowest) {
          if (valueField < extractValue) {
            value = srcItem[field];
            extractValue = valueField;
            column = field;
          }
        } else {
          // Keep only Highest values
          if (valueField > extractValue) {
            value = srcItem[field];
            extractValue = valueField;
            column = field;
          }
        }
      }
    }
    return column;
  }
  calculateFieldMapping() {
    const entityDesc = this.modelMgr.findAtPosition(this.entityPosition.position, false);
    const ret = new Map();
    if (entityDesc.fields != null) {
      for (const field of Object.entries(entityDesc.fields)) {
        if (field[1].name != null) {
          ret.set(field[1].name, field[0]);
        }
      }
    }
    return ret;
  }
}

/***/ }),

/***/ 620:
/*!********************************************************************************************!*\
  !*** ../../plugins/report/dist/libs/report/esm2020/lib/preview/graph-data-transformer.mjs ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphDataTransformer": () => (/* binding */ GraphDataTransformer)
/* harmony export */ });
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5527);


/**
 * Calculates the correct data to generate a graph based on the configuration of the model
 */
class GraphDataTransformer {
  constructor(modelMgr, graphConfig) {
    this.modelMgr = modelMgr;
    this.data = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
    this.option = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
    this.targetType = null;
    this.config = graphConfig;
  }
  setConfig(graphConfig) {
    this.config = graphConfig;
  }
  setTargetType(newType) {
    this.targetType = newType;
  }
  translatedGraphType() {
    if (this.config?.type != null) {
      return this.config.type.toLowerCase();
    }
    return;
  }
  changeGraphType(newType) {
    if (this.config == null) throw new Error("No config to change type to " + newType);
    this.config.type = newType;
  }
  dataObservable() {
    return this.data.asObservable();
  }
  optionObservable() {
    return this.option.asObservable();
  }
  updateSourceData(srcData) {
    if (this.config == null) {
      throw new Error("Cannot process source data without graph configuration");
    }
    const isAmount = this.targetType == 'Dollar' || this.targetType == 'Euro' || this.targetType == 'Other currency';
    let byDate = false;
    if (this.config.type != "Table") {
      const data = [];
      const labels = [];
      let count = 1;
      const metaData = new _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DataTransformationInfo();
      const isBiDirectional = this.config.type != 'Pie';
      let xFieldName = this.labelFieldName;
      if (this.config.by != null) xFieldName = this.config.by;
      for (const elt of srcData.entities) {
        let label;
        if (xFieldName != null) {
          if (elt[xFieldName] instanceof Date) byDate = true;
          label = this.translateDateValue(elt[xFieldName]);
        } else {
          label = count;
          count++;
        }
        const newVal = this.translateDateValue(this.modelMgr.extractValue(elt[this.config.of], metaData));
        // Aggregates values for same label
        let posLabel = labels.indexOf(label);
        if (posLabel == -1) labels.push(label);
        if (!isBiDirectional) {
          if (posLabel == -1) {
            data.push(newVal);
          } else {
            if (typeof data[posLabel] == 'number')
              // Aggregate values for the same label
              data[posLabel] = newVal != null ? data[posLabel] + newVal : data[posLabel];else if (data[posLabel] == null) {
              data[posLabel] = newVal;
            } else {
              // We cannot add values, so we create a separate data point
              posLabel = -1;
              labels.push(label);
              data.push(newVal);
            }
          }
        } else {
          if (posLabel == -1) {
            // We store the complete object in src field in case it's an amount with currency for example
            data.push({
              x: label,
              y: newVal,
              src: elt[this.config.of]
            });
          } else {
            if (typeof data[posLabel].y == 'number') {
              // Aggregate values for the same label
              data[posLabel].y = newVal != null ? data[posLabel].y + newVal : data[posLabel].y;
              data[posLabel].src = this.modelMgr.modifyValues(data[posLabel].src, elt[this.config.of], metaData, (first, second) => {
                if (first == null) return second;
                if (second == null) return first;
                return first + second;
              });
            } else if (data[posLabel].y == null) {
              data[posLabel].y = newVal;
              data[posLabel].src = elt[this.config.of];
            } else {
              // There is no numeric values to sum up, so let's create a separate data point
              data.push({
                x: label,
                y: newVal,
                src: elt[this.config.of]
              });
            }
          }
        }
      }
      const chartData = {
        datasets: [{
          label: this.config.of,
          data
        }]
      };
      const chartOption = {};
      chartOption.plugins = {};
      chartOption.plugins.title = {
        align: "center",
        position: "top",
        display: true,
        text: this.config.title
      };
      if (!isAmount || !isBiDirectional) {
        chartData.labels = labels;
      }
      if (byDate) {
        chartOption.scales = {
          x: {
            type: 'time'
          }
        };
      }
      if (this.config.type != "Line") {
        chartOption.plugins.autocolors = {
          mode: 'data',
          offset: 2
        };
      } else {
        chartOption.plugins.autocolors = {
          mode: 'dataset',
          offset: 2
        };
      }
      if (isAmount) {
        chartOption.plugins.tooltip = {
          callbacks: {
            label: function (context) {
              if (context.raw?.src?.currencyCode != null) {
                return Intl.NumberFormat(undefined, {
                  style: 'currency',
                  currency: context.raw.src.currencyCode
                }).format(context.parsed.y);
              } else return context.parsed.y;
            }
          }
        };
      }
      if (this.config.type == 'Bar') {
        const barChartConfig = chartData;
        /*for (const dataSet of barChartConfig.datasets) {
          dataSet.backgroundColor = ChartsColors.fillColors;
        }*/
      } else if (this.config.type == 'Pie') {
        const pieChartConfig = chartData;
        for (const dataSet of pieChartConfig.datasets) {
          //dataSet.backgroundColor = ChartsColors.fillColors;
          dataSet.hoverOffset = 20;
        }
      } else if (this.config.type == 'Line') {
        const lineChartConfig = chartData;
        /*let position = 0;
        for (const dataSet of lineChartConfig.datasets) {
          dataSet.borderColor = ChartsColors.fillColors[position];
          position++;
        }*/
      }
      this.data.next(chartData);
      this.option.next(chartOption);
    }
  }
  setLabelFieldName(fieldName) {
    this.labelFieldName = fieldName;
  }
  translateDateValue(eltElement) {
    if (eltElement instanceof Date) {
      return eltElement.valueOf();
    } else return eltElement;
  }
}
/* class ChartsColors {
  public static fillColors=[
    '#42A5F5',
    '#7E57C2',
    '#66BB6A',
    '#FFCA28',
    '#26A69A',
    '#EC407A',
    '#AB47BC'
  ]
}*/

/***/ }),

/***/ 6626:
/*!*************************************************************************************************************!*\
  !*** ../../plugins/report/dist/libs/report/esm2020/lib/preview/report-display/report-display.component.mjs ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportDisplayComponent": () => (/* binding */ ReportDisplayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dontcode/plugin-common */ 561);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dontcode/plugin-common */ 1313);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _graph_data_transformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../graph-data-transformer */ 620);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/chart */ 7632);








const _c0 = ["fullView"];
function ReportDisplayComponent_ng_template_0_p_chart_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-chart", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 3, ctx_r2.chartData$))("options", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 5, ctx_r2.chartOption$))("type", ctx_r2.type);
  }
}
function ReportDisplayComponent_ng_template_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please define a graph type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function ReportDisplayComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ReportDisplayComponent_ng_template_0_p_chart_0_Template, 3, 7, "p-chart", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReportDisplayComponent_ng_template_0_ng_container_1_Template, 2, 0, "ng-container", 2);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.type !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.type === undefined);
  }
}
class ReportDisplayComponent extends _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__.AbstractDynamicComponent {
  constructor(modelMgr, schemaMgr) {
    super();
    this.modelMgr = modelMgr;
    this.schemaMgr = schemaMgr;
    this.title = "";
    this.provider = null;
    this.graphModelPointer = null;
    this.dataTransformer = new _graph_data_transformer__WEBPACK_IMPORTED_MODULE_3__.GraphDataTransformer(modelMgr);
    this.chartData$ = this.dataTransformer.dataObservable();
    this.chartOption$ = this.dataTransformer.optionObservable();
  }
  providesTemplates() {
    return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__.TemplateList(null, this.fullView, this.fullView);
  }
  canProvide(key) {
    return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__.PossibleTemplateList(false, true, true);
  }
  setValue(val) {
    super.setValue(val);
    // We can directly receive the store instead of the array of values
    /*    if( (val!=null) && (val.entities!=null)) {
          val = val.entities;
        }*/
    this.dataTransformer.updateSourceData(val);
  }
  initCommandFlow(provider, pointer) {
    this.provider = provider;
    this.graphModelPointer = pointer;
    const json = this.provider.getJsonAt(pointer.position);
    this.dataTransformer.setConfig(json);
    this.type = this.dataTransformer.translatedGraphType();
    this.title = json.title;
    // Try to guess the field of the target entity of the report that represents the name of the entity
    const reportPosition = _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModelPointer.parentPosition(this.graphModelPointer.containerPosition);
    if (reportPosition != null) {
      const entity = this.modelMgr.findTargetOfProperty(_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_FOR_NODE, reportPosition);
      if (entity != null && entity.value != null) {
        this.entityNamePropertyName = this.modelMgr.guessNamePropertyOfElement(null, entity.value.fields);
        // Gets the type information of the target field
        if (json.of != null) {
          for (const field of Object.values(entity.value.fields)) {
            if (field[_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS_NAME_NODE] == json.of) {
              this.dataTransformer.setTargetType(field[_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS_TYPE_NODE]);
              break;
            }
          }
        }
      } else {
        this.entityNamePropertyName = null;
      }
    }
    if (this.entityNamePropertyName != null) this.dataTransformer.setLabelFieldName(this.entityNamePropertyName);
  }
  handleChange(change) {
    // We are changing the config
    if (change.position == this.graphModelPointer?.position) {
      if (change.type === _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.ChangeType.DELETE) {
        this.dataTransformer.setConfig();
        this.type = undefined;
      } else {
        this.dataTransformer.setConfig(change.value);
        this.type = this.dataTransformer.translatedGraphType();
      }
    } else if (change.position == this.graphModelPointer?.position + '/' + _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_DISPLAY_TYPE_NODE) {
      if (change.type === _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.ChangeType.DELETE) {
        this.dataTransformer.setConfig();
        this.type = undefined;
      } else {
        this.dataTransformer.changeGraphType(change.value);
        this.type = this.dataTransformer.translatedGraphType();
      }
    }
  }
}
ReportDisplayComponent.ɵfac = function ReportDisplayComponent_Factory(t) {
  return new (t || ReportDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModelManager), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeSchemaManager));
};
ReportDisplayComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ReportDisplayComponent,
  selectors: [["dontcode-report-field"]],
  viewQuery: function ReportDisplayComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fullView = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 0,
  consts: [["fullView", ""], [3, "data", "options", "type", 4, "ngIf"], [4, "ngIf"], [3, "data", "options", "type"]],
  template: function ReportDisplayComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ReportDisplayComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, primeng_chart__WEBPACK_IMPORTED_MODULE_6__.UIChart, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReportDisplayComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'dontcode-report-field',
      template: "<ng-template #fullView>\n  <p-chart *ngIf=\"type!==undefined\" [data]=\"chartData$ | async\" [options]=\"chartOption$ | async\" [type]=\"type!\" ></p-chart>\n  <ng-container *ngIf=\"type===undefined\">Please define a graph type</ng-container>\n</ng-template>\n"
    }]
  }], function () {
    return [{
      type: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModelManager
    }, {
      type: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeSchemaManager
    }];
  }, {
    fullView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['fullView', {
        static: true
      }]
    }]
  });
})();

/***/ }),

/***/ 9124:
/*!***********************************************************************************************************!*\
  !*** ../../plugins/report/dist/libs/report/esm2020/lib/preview/report-entity/report-entity.component.mjs ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportEntityComponent": () => (/* binding */ ReportEntityComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dontcode/plugin-common */ 2577);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _cross_data_transformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cross-data-transformer */ 2243);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dontcode/plugin-common */ 2004);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dontcode/plugin-common */ 3824);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @dontcode/plugin-common */ 9744);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @dontcode/plugin-common */ 6093);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 7651);








const _c0 = ["defaultdisplay"];
function ReportEntityComponent_div_4_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
const _c1 = function (a0) {
  return {
    fieldType: a0
  };
};
function ReportEntityComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReportEntityComponent_div_4_div_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.subFieldFullViewTemplate(field_r3))("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, field_r3.type));
  }
}
function ReportEntityComponent_div_4_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function ReportEntityComponent_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReportEntityComponent_div_4_div_2_ng_container_1_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.subFieldFullViewTemplate(field_r3))("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, field_r3.type));
  }
}
function ReportEntityComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReportEntityComponent_div_4_div_1_Template, 2, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ReportEntityComponent_div_4_div_2_Template, 2, 4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const field_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", field_r3.type === "Table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", field_r3.type !== "Table");
  }
}
function ReportEntityComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r10 = ctx.fieldType;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" No components for ", type_r10, " ");
  }
}
class ReportEntityComponent extends _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__.PluginBaseComponent {
  constructor(loader, entityService, valueService, injector, ref, modelMgr) {
    super(loader, injector, ref);
    this.entityService = entityService;
    this.valueService = valueService;
    this.modelMgr = modelMgr;
    this.title = "No Title";
    this.store = null;
    this.dataLoading = false;
    this.reportDescription = null;
    this.reportEntityData = new _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeStorePreparedEntities([]);
    this.targetEntityPointer = null;
    this.fieldTypeTransformer = null;
    if (this.modelMgr == null)
      // Sometimes it's not injected...
      this.modelMgr = _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.dtcde.getModelManager();
  }
  initCommandFlow(provider, pointer) {
    super.initCommandFlow(provider, pointer);
    if (!this.entityPointer) throw new Error('Cannot listen to changes without knowing a base position');
    this.reportDescription = provider.getJsonAt(this.entityPointer.position);
    this.initTargetEntity();
    this.decomposeJsonToMultipleChanges(this.entityPointer, this.reportDescription); // Dont provide a special handling for initial json, but emulate a list of changes
    this.initChangeListening(true); // Listen to all changes made in the report definition
  }
  initTargetEntity() {
    if (this.entityPointer == null) return;
    const targetInfo = this.valueService.findTargetOfProperty("for", this.entityPointer.position);
    if (targetInfo != null && this.provider != null) {
      this.targetEntityPointer = this.provider.getSchemaManager().generateSchemaPointer(targetInfo.pointer);
      this.store = this.entityService.retrieveListManager(this.targetEntityPointer, this.valueService.findAtPosition(targetInfo.pointer, false));
      this.pluginHelper.initOtherChangeListening(true, this.targetEntityPointer);
    }
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    // When testing entityPointer is not defined
    this.loadTargetEntities();
  }
  loadTargetEntities() {
    if (this.entityPointer && this.provider) {
      if (this.store != null) {
        this.dataLoading = true;
        this.calculateTransformer();
        this.store.searchAndPrepareEntities(this.reportDescription?.sortedBy, this.reportDescription?.groupedBy, this.fieldTypeTransformer ?? undefined).then(() => {
          // eslint-disable-next-line no-restricted-syntax
          console.debug("Loaded entities");
          this.reportEntityData = this.store?.prepared ?? new _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeStorePreparedEntities([]);
          this.dataLoading = false;
          this.updateSubFieldsValues();
          this.ref.markForCheck();
          this.ref.detectChanges();
        }, reason => {
          this.dataLoading = false;
        });
      }
    } else {
      throw new Error('Cannot create subcomponents before initCommandFlow is called');
    }
  }
  updateSubFieldsValues() {
    for (const field of this.fields) {
      if (field.component != null) {
        field.component.setValue(this.store);
      }
    }
  }
  providesTemplates(key) {
    throw new Error('Method not implemented.');
  }
  canProvide(key) {
    throw new Error('Method not implemented.');
  }
  setValue(val) {
    // Just ignore it
    // eslint-disable-next-line no-restricted-syntax
    console.debug("setValue() called for ReportEntity");
  }
  getValue() {
    // Just ignore as well
    // eslint-disable-next-line no-restricted-syntax
    console.debug("getValue() called for ReportEntity");
    return undefined;
  }
  handleChange(change) {
    if (change?.pointer?.positionInSchema === _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_DISPLAY) {
      this.updateSubFieldsWithChange(change, _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_DISPLAY_NODE).then(value => {
        if (value != null) {
          this.updateSubFieldsValues();
          this.ref.markForCheck();
          this.ref.detectChanges();
        }
      }).catch(reason => {
        console.error(reason);
      });
    } else if (change?.pointer?.positionInSchema === _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_REPORTS_TITLE) {
      switch (change.type) {
        case _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.ChangeType.DELETE:
          this.title = '';
          break;
        default:
          this.title = change.value;
      }
    } else if (this.targetEntityPointer != null && change?.pointer?.isSubItemOf(this.targetEntityPointer) != null) {
      // A change has been made in the entity itself
      this.loadTargetEntities();
    }
  }
  subFieldFullViewTemplate(subField) {
    let ret = super.subFieldFullViewTemplate(subField);
    if (ret == null) ret = this.defaultTemplate;
    return ret;
  }
  /**
   * Some reports are based on columns instead of rows. So we must recalculate the loaded values
   */
  calculateTransformer() {
    this.fieldTypeTransformer = null;
    if (this.reportDescription != null && this.targetEntityPointer != null && this.provider != null) {
      // Is the report based on type of columns ?
      if (this.reportDescription.groupedBy != null) {
        const groupByColumn = Object.values(this.reportDescription.groupedBy)[0]?.of;
        if (groupByColumn != null) {
          // Is it an existing entity property or a column type name ?
          const entityDesc = this.valueService.findAtPosition(this.targetEntityPointer.position, false);
          if (entityDesc.fields != null) {
            const columnNames = new Array();
            for (const field of Object.values(entityDesc.fields)) {
              if (field.name == groupByColumn) {
                // We found the column for the groupby, so nothing to do
                return;
              } else {
                if (field.type == groupByColumn) {
                  columnNames.push(field.name);
                }
              }
            }
            // Did we find columns ?
            if (columnNames.length != 0) {
              // Yes ! Let's groupBy these columns then
              this.fieldTypeTransformer = new _cross_data_transformer__WEBPACK_IMPORTED_MODULE_3__.CrossDataTransformer(this.modelMgr, columnNames, Object.values(this.reportDescription.groupedBy)[0], this.targetEntityPointer);
            }
          }
        }
      }
    }
  }
}
ReportEntityComponent.ɵfac = function ReportEntityComponent_Factory(t) {
  return new (t || ReportEntityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__.ComponentLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_5__.EntityStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_6__.ValueService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModelManager, 8));
};
ReportEntityComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ReportEntityComponent,
  selectors: [["dontcode-report-entity"]],
  viewQuery: function ReportEntityComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.defaultTemplate = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 7,
  vars: 2,
  consts: [[1, "p-fluid"], ["class", "field grid", 4, "ngFor", "ngForOf"], ["defaultdisplay", ""], [1, "field", "grid"], ["class", "col-12", 4, "ngIf"], ["class", "col-12 md:col-6", 4, "ngIf"], [1, "col-12"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "col-12", "md:col-6"], [1, "col-12", "md:col-10"]],
  template: function ReportEntityComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "dtcde-dynamic");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ReportEntityComponent_div_4_Template, 3, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ReportEntityComponent_ng_template_5_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Report ", ctx.title, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getSubFields());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet, _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_8__.DynamicInsertPoint]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReportEntityComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'dontcode-report-entity',
      template: "<dtcde-dynamic></dtcde-dynamic>\n<h1>Report {{title}}</h1>\n<div class=\"p-fluid\">\n  <div class=\"field grid\" *ngFor=\"let field of getSubFields()\">\n    <div *ngIf=\"field.type==='Table'\" class=\"col-12\">\n      <ng-container *ngTemplateOutlet=\"subFieldFullViewTemplate(field); context:{ fieldType:field.type}\"></ng-container>\n    </div>\n    <div *ngIf=\"field.type!=='Table'\" class=\"col-12 md:col-6\">\n      <ng-container *ngTemplateOutlet=\"subFieldFullViewTemplate(field); context:{ fieldType:field.type}\"></ng-container>\n    </div>\n  </div>\n</div>\n\n<ng-template #defaultdisplay let-type=\"fieldType\">\n  <div class=\"col-12 md:col-10\">\n    No components for {{type}}\n  </div>\n</ng-template>\n"
    }]
  }], function () {
    return [{
      type: _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__.ComponentLoaderService
    }, {
      type: _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_5__.EntityStoreService
    }, {
      type: _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_6__.ValueService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }, {
      type: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModelManager,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }];
  }, {
    defaultTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['defaultdisplay']
    }]
  });
})();

/***/ }),

/***/ 7880:
/*!*********************************************************************************************************!*\
  !*** ../../plugins/report/dist/libs/report/esm2020/lib/preview/report-table/report-table.component.mjs ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportTableComponent": () => (/* binding */ ReportTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dontcode/plugin-common */ 2577);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dontcode/plugin-common */ 1313);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dontcode/plugin-common */ 9744);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dontcode/plugin-common */ 2004);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @dontcode/plugin-common */ 6093);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @dontcode/plugin-common */ 9850);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 9305);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 5980);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tooltip */ 3797);










const _c0 = ["fullView"];
function ReportTableComponent_ng_template_1_ng_template_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "p-sortIcon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "header-", col_r8.header, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pSortableColumn", col_r8.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", col_r8.header, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("field", col_r8.field);
  }
}
function ReportTableComponent_ng_template_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReportTableComponent_ng_template_1_ng_template_1_th_1_Template, 3, 4, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const columns_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", columns_r6);
  }
}
function ReportTableComponent_ng_template_1_ng_template_2_td_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function ReportTableComponent_ng_template_1_ng_template_2_td_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReportTableComponent_ng_template_1_ng_template_2_td_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const col_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const rowData_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r13.templateOf(col_r12, rowData_r9[col_r12.field]));
  }
}
function ReportTableComponent_ng_template_1_ng_template_2_td_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "beautifier");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "beautifier");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const col_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const rowData_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, rowData_r9[col_r12.field]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 4, rowData_r9[col_r12.field], 50));
  }
}
function ReportTableComponent_ng_template_1_ng_template_2_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReportTableComponent_ng_template_1_ng_template_2_td_1_ng_container_1_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ReportTableComponent_ng_template_1_ng_template_2_td_1_ng_container_2_Template, 5, 7, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", col_r12.component);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !col_r12.component);
  }
}
function ReportTableComponent_ng_template_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReportTableComponent_ng_template_1_ng_template_2_td_1_Template, 3, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const columns_r10 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", columns_r10);
  }
}
function ReportTableComponent_ng_template_1_ng_template_3_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 14)(1, "td", 15)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const columns_r21 = ctx_r23.columns;
    const rowData_r20 = ctx_r23.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("colSpan", columns_r21.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](rowData_r20[ctx_r22.groupRowsBy]);
  }
}
function ReportTableComponent_ng_template_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ReportTableComponent_ng_template_1_ng_template_3_tr_0_Template, 4, 2, "tr", 13);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.areGroupsDefined());
  }
}
function ReportTableComponent_ng_template_1_ng_template_4_tr_0_td_1_ng_container_1_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function ReportTableComponent_ng_template_1_ng_template_4_tr_0_td_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ReportTableComponent_ng_template_1_ng_template_4_tr_0_td_1_ng_container_1_ng_container_1_ng_container_3_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const value_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const col_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", value_r30.forAggregate.operation.toString(), ":\xA0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r31.templateOf(col_r28, value_r30.value));
  }
}
function ReportTableComponent_ng_template_1_ng_template_4_tr_0_td_1_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "beautifier");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "beautifier");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const value_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("pTooltip", "", value_r30.forAggregate.operation.toString(), ":\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, value_r30.value), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", value_r30.forAggregate.operation.toString(), ":\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 6, value_r30.value, 50), "");
  }
}
function ReportTableComponent_ng_template_1_ng_template_4_tr_0_td_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReportTableComponent_ng_template_1_ng_template_4_tr_0_td_1_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ReportTableComponent_ng_template_1_ng_template_4_tr_0_td_1_ng_container_1_ng_container_2_Template, 5, 9, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const value_r30 = ctx.$implicit;
    const col_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r29.isTemplate(col_r28, value_r30.forAggregate.operation));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r29.isTemplate(col_r28, value_r30.forAggregate.operation));
  }
}
function ReportTableComponent_ng_template_1_ng_template_4_tr_0_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReportTableComponent_ng_template_1_ng_template_4_tr_0_td_1_ng_container_1_Template, 3, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r28 = ctx.$implicit;
    const rowData_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r27.retrieveGroupedByValuesFor(rowData_r24[ctx_r27.groupRowsBy], col_r28.field));
  }
}
function ReportTableComponent_ng_template_1_ng_template_4_tr_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReportTableComponent_ng_template_1_ng_template_4_tr_0_td_1_Template, 2, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const columns_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", columns_r25);
  }
}
function ReportTableComponent_ng_template_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ReportTableComponent_ng_template_1_ng_template_4_tr_0_Template, 2, 1, "tr", 16);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.areGroupsDefined());
  }
}
function ReportTableComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-table", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReportTableComponent_ng_template_1_ng_template_1_Template, 2, 1, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ReportTableComponent_ng_template_1_ng_template_2_Template, 2, 1, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ReportTableComponent_ng_template_1_ng_template_3_Template, 1, 1, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ReportTableComponent_ng_template_1_ng_template_4_Template, 1, 1, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r1.cleanedTableData)("columns", ctx_r1.cols)("groupRowsBy", ctx_r1.groupRowsBy);
  }
}
class ReportTableComponent extends _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__.PluginBaseComponent {
  constructor(valueService, schemaMgr, loader, ref, injector) {
    super(loader, injector, ref);
    this.valueService = valueService;
    this.schemaMgr = schemaMgr;
    this.loader = loader;
    this.ref = ref;
    this.injector = injector;
    this.cols = new Array();
    this.colsMap = new Map();
    this.title = "";
    this.value = null;
    this.targetEntityPointer = null;
    this.reportPointer = null;
    this.cleanedTableData = [];
    this.groupedValuesByField = new Map();
    if (this.schemaMgr == null) this.schemaMgr = _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.dtcde.getSchemaManager();
  }
  providesTemplates() {
    return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__.TemplateList(null, this.fullView, this.fullView);
  }
  canProvide(key) {
    return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__.PossibleTemplateList(false, true, true);
  }
  initCommandFlow(provider, pointer) {
    super.initCommandFlow(provider, pointer);
    if (!this.entityPointer) throw new Error('Cannot listen to changes without knowing a base position');
    this.reportPointer = this.entityPointer.parentPointer(this.schemaMgr)?.parentPointer(this.schemaMgr) ?? null;
    if (this.reportPointer != null) {
      const targetInfo = this.valueService.findTargetOfProperty("for", this.reportPointer.position);
      if (targetInfo != null) {
        this.targetEntityPointer = this.schemaMgr.generateSchemaPointer(targetInfo.pointer);
        this.pluginHelper.initOtherChangeListening(true, this.targetEntityPointer.subPropertyPointer(_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS_NODE));
        this.decomposeJsonToMultipleChanges(this.targetEntityPointer, targetInfo.value); // Dont provide a special handling for initial json, but emulate a list of changes
      }
    }
    this.initChangeListening(true); // Listen to all changes occuring after report display definition
    this.decomposeJsonToMultipleChanges(this.entityPointer, this.provider?.getJsonAt(this.entityPointer.position)); // Dont provide a special handling for initial json, but emulate a list of changes
  }
  templateOf(col, value) {
    if (col.component != null) {
      col.component.setValue(value);
      const ref = col.component.providesTemplates(col.type).forInlineView;
      if (ref) return ref;
    }
    throw new Error('No component or template to display ' + col.type);
  }
  setValue(val) {
    super.setValue(val);
    if (val.entities != null) this.cleanedTableData = val.entities;else this.cleanedTableData = [];
    this.calculateGroupedValuesByField();
  }
  /**
  * Make the appropriate display updates whenever a change is received
  * @param change
  */
  handleChange(change) {
    //console.log("Changed Entity",change.position);
    // We only care when a field has been modified
    if (this.targetEntityPointer?.subPropertyPointer(_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS_NODE).isParentOf(change.position, true)) {
      // Columns have been changed
      this.applyUpdatesToArrayAsync(this.cols, this.colsMap, change, null, (position, value) => {
        return this.loadSubComponent(position, value.type, value.name).then(component => {
          const ret = new PrimeColumn(value.name, value.name, value.type);
          if (component) {
            // Keep the component only if it provides the view template
            if (component.canProvide(value.type).forInlineView) {
              ret.component = component;
              this.applyComponentToSubField(component, value.type, value.name);
            }
          }
          return ret;
        });
      }, this.targetEntityPointer?.subPropertyPointer(_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS_NODE).position).then(updatedColumns => {
        this.cols = updatedColumns;
        //  this.reloadData ();
        this.ref.markForCheck();
        this.ref.detectChanges();
      });
    } else if (this.entityPointer != null) {
      // The user changed the table values itself
      if (change.pointer?.isSubItemOf(this.entityPointer) === 'title') {
        // We have changed the grouping
        if (change.type == _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.ChangeType.DELETE) {
          this.title = '';
        } else {
          this.title = change.value;
        }
      }
    }
  }
  /**
   * Ease the display of grouped values by mapping them per column
   */
  calculateGroupedValuesByField() {
    this.groupedValuesByField.clear();
    if (this.value?.prepared?.groupedByEntities?.values != null) {
      this.groupRowsBy = this.value?.prepared.groupedByEntities.groupInfo.of;
      // In case of special column is created to enable filtering
      if (this.value?.prepared.groupedByEntities.groupInfo.show != null) {
        this.groupRowsBy = this.value?.prepared.groupedByEntities.groupInfo.show.valueOf();
      }
      for (const groupKey of this.value.prepared.groupedByEntities.values.keys()) {
        const values = this.value.prepared.groupedByEntities.values.get(groupKey) ?? [];
        for (const value of values) {
          let listOfValues = this.groupedValuesByField.get(groupKey)?.get(value.forAggregate.of);
          if (listOfValues == null) {
            listOfValues = new Array();
            let groupDelimiter = this.groupedValuesByField.get(groupKey);
            if (groupDelimiter == null) {
              groupDelimiter = new Map();
              this.groupedValuesByField.set(groupKey, groupDelimiter);
            }
            groupDelimiter.set(value.forAggregate.of, listOfValues);
          }
          listOfValues.push(value);
        }
      }
    }
  }
  retrieveGroupedByValuesFor(groupingValue, field) {
    const ret = this.groupedValuesByField.get(groupingValue)?.get(field);
    if (ret != null) return ret;else return [];
  }
  isTemplate(col, operation) {
    if (col.component == null || operation == _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeGroupOperationType.Count) return false;else return true;
  }
  areGroupsDefined() {
    return this.groupRowsBy != null;
  }
}
ReportTableComponent.ɵfac = function ReportTableComponent_Factory(t) {
  return new (t || ReportTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__.ValueService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeSchemaManager), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_5__.ComponentLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector));
};
ReportTableComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ReportTableComponent,
  selectors: [["dontcode-report-table"]],
  viewQuery: function ReportTableComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fullView = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 3,
  vars: 0,
  consts: [["fullView", ""], ["rowGroupMode", "subheader", 3, "value", "columns", "groupRowsBy"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "groupheader"], ["pTemplate", "groupfooter"], [3, "id", "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "id", "pSortableColumn"], [3, "field"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [4, "ngTemplateOutlet"], [3, "pTooltip"], ["pRowGroupHeader", "", "class", "rowgroup-header font-bold", 4, "ngIf"], ["pRowGroupHeader", "", 1, "rowgroup-header", "font-bold"], [3, "colSpan"], ["class", "rowgroup-footer font-italic", 4, "ngIf"], [1, "rowgroup-footer", "font-italic"]],
  template: function ReportTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "dtcde-dynamic");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReportTableComponent_ng_template_1_Template, 5, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_8__.DynamicInsertPoint, primeng_table__WEBPACK_IMPORTED_MODULE_9__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_9__.RowGroupHeader, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortIcon, primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__.Tooltip, _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_11__.BeautifierPipe],
  styles: [".rowgroup-footer[_ngcontent-%COMP%]{background:var(--surface-100)!important}.rowgroup-header[_ngcontent-%COMP%]{background:var(--surface-200)!important}"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReportTableComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'dontcode-report-table',
      template: "<dtcde-dynamic></dtcde-dynamic>\n<ng-template #fullView>\n  <p-table [value]=\"cleanedTableData\" [columns]=\"cols\" rowGroupMode=\"subheader\" [groupRowsBy]=\"groupRowsBy\">\n    <ng-template pTemplate=\"header\" let-columns>\n      <tr>\n        <th id=\"header-{{col.header}}\" *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n          {{col.header}} <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n        </th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n      <tr>\n        <td *ngFor=\"let col of columns\">\n          <ng-container *ngIf=\"col.component\">\n            <ng-container *ngTemplateOutlet=\"templateOf(col, rowData[col.field])\"></ng-container>\n          </ng-container>\n          <ng-container *ngIf=\"!col.component\"><span pTooltip=\"{{rowData[col.field] | beautifier}}\">{{rowData[col.field] | beautifier : 50}}</span></ng-container>\n        </td>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"groupheader\" let-rowData let-columns=\"columns\">\n      <tr *ngIf=\"areGroupsDefined()\" pRowGroupHeader class=\"rowgroup-header font-bold\">\n        <td [colSpan]=\"columns.length\" ><span>{{rowData[groupRowsBy!]}}</span></td>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"groupfooter\" let-rowData let-columns=\"columns\">\n      <tr *ngIf=\"areGroupsDefined()\" class=\"rowgroup-footer font-italic\">\n        <td *ngFor=\"let col of columns\">\n          <ng-container *ngFor=\"let value of retrieveGroupedByValuesFor (rowData[groupRowsBy!], col.field)\">\n            <ng-container *ngIf=\"isTemplate(col, value.forAggregate.operation)\">\n              <div>{{value.forAggregate.operation.toString()}}:&nbsp;<ng-container *ngTemplateOutlet=\"templateOf(col, value.value)\"></ng-container></div>\n            </ng-container>\n            <ng-container *ngIf=\"!isTemplate(col, value.forAggregate.operation)\">\n              <div pTooltip=\"{{value.forAggregate.operation.toString()}}:&nbsp;{{value.value | beautifier}}\">{{value.forAggregate.operation.toString()}}:&nbsp;{{value.value | beautifier : 50}}</div>\n             </ng-container>\n          </ng-container>\n        </td>\n      </tr>\n    </ng-template>\n  </p-table>\n</ng-template>\n",
      styles: [".rowgroup-footer{background:var(--surface-100)!important}.rowgroup-header{background:var(--surface-200)!important}\n"]
    }]
  }], function () {
    return [{
      type: _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__.ValueService
    }, {
      type: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeSchemaManager
    }, {
      type: _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_5__.ComponentLoaderService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector
    }];
  }, {
    fullView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['fullView', {
        static: true
      }]
    }]
  });
})();
class PrimeColumn {
  constructor(field, header, type) {
    this.field = field;
    this.header = header;
    this.type = type;
    this.component = null;
  }
}

/***/ }),

/***/ 6936:
/*!***************************************************************************!*\
  !*** ../../plugins/report/dist/libs/report/esm2020/lib/report.module.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportDisplayComponent": () => (/* reexport safe */ _preview_report_display_report_display_component__WEBPACK_IMPORTED_MODULE_3__.ReportDisplayComponent),
/* harmony export */   "ReportEntityComponent": () => (/* reexport safe */ _preview_report_entity_report_entity_component__WEBPACK_IMPORTED_MODULE_2__.ReportEntityComponent),
/* harmony export */   "ReportModule": () => (/* binding */ ReportModule),
/* harmony export */   "ReportTableComponent": () => (/* reexport safe */ _preview_report_table_report_table_component__WEBPACK_IMPORTED_MODULE_4__.ReportTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var _preview_report_display_report_display_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preview/report-display/report-display.component */ 6626);
/* harmony import */ var _preview_report_entity_report_entity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preview/report-entity/report-entity.component */ 9124);
/* harmony import */ var _declaration_report_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./declaration/report-plugin */ 6299);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @dontcode/plugin-common */ 4264);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4848);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dropdown */ 9963);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/chart */ 7632);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ 5980);
/* harmony import */ var _preview_report_table_report_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preview/report-table/report-table.component */ 7880);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tooltip */ 3797);















class ReportModule {
  constructor() {
    console.log('Report Plugin registering'); // Look for this log to make sure your plugin has been loaded
    _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.dtcde.registerPlugin(new _declaration_report_plugin__WEBPACK_IMPORTED_MODULE_1__.ReportPlugin()); // When created a module must register to the platform.
  }
  // We declare the components referenced by the ReportPlugin configuration
  exposedPreviewHandlers() {
    return new Map([['ReportEntityComponent', _preview_report_entity_report_entity_component__WEBPACK_IMPORTED_MODULE_2__.ReportEntityComponent], ['ReportDisplayComponent', _preview_report_display_report_display_component__WEBPACK_IMPORTED_MODULE_3__.ReportDisplayComponent], ['ReportTableComponent', _preview_report_table_report_table_component__WEBPACK_IMPORTED_MODULE_4__.ReportTableComponent]]);
  }
}
ReportModule.ɵfac = function ReportModule_Factory(t) {
  return new (t || ReportModule)();
};
ReportModule.ɵmod = function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵregisterNgModuleType"](ReportModule, 'dontcode-plugin/report');
  return /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: ReportModule,
    id: 'dontcode-plugin/report'
  });
}();
ReportModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__.DropdownModule, primeng_chart__WEBPACK_IMPORTED_MODULE_9__.ChartModule, _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_10__.PluginCommonModule.forRoot(), primeng_table__WEBPACK_IMPORTED_MODULE_11__.TableModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__.TooltipModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](ReportModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_8__.DropdownModule, primeng_chart__WEBPACK_IMPORTED_MODULE_9__.ChartModule, _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_10__.PluginCommonModule.forRoot(), primeng_table__WEBPACK_IMPORTED_MODULE_11__.TableModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__.TooltipModule],
      declarations: [_preview_report_display_report_display_component__WEBPACK_IMPORTED_MODULE_3__.ReportDisplayComponent, _preview_report_entity_report_entity_component__WEBPACK_IMPORTED_MODULE_2__.ReportEntityComponent, _preview_report_table_report_table_component__WEBPACK_IMPORTED_MODULE_4__.ReportTableComponent],
      id: 'dontcode-plugin/report' // A module containing previewer components must have an id to be found by the dont-code platform.
    }]
  }], function () {
    return [];
  }, null);
})();




/***/ }),

/***/ 9476:
/*!*********************************************************************************!*\
  !*** ../../plugins/rest/dist/libs/rest/esm2020/lib/declaration/rest-plugin.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestPlugin": () => (/* binding */ RestPlugin)
/* harmony export */ });
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);

/**
 * This plugin enables loading / saving entities from any rest services.
 */
class RestPlugin {
  getConfiguration() {
    return {
      plugin: {
        id: 'RestPlugin',
        'display-name': 'A plugin for entities managed through Rest APIs .',
        version: '1.0.0'
      },
      'schema-updates': [{
        id: 'rest-source',
        description: 'Add rest type of source',
        changes: [{
          location: {
            parent: '#/$defs/source',
            id: 'type'
          },
          update: {
            enum: ['Rest']
          },
          props: {
            url: {
              type: 'string'
            }
          },
          replace: false
        }]
      }],
      'global-handlers': [{
        location: {
          parent: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.ROOT + '/sources',
          id: 'type',
          values: ['Rest']
        },
        class: {
          name: 'SourceHandler',
          source: 'rest'
        }
      }]
    };
  }
  pluginInit(dontCode) {
    // Nothing to do
  }
}

/***/ }),

/***/ 2398:
/*!********************************************************************************************!*\
  !*** ../../plugins/rest/dist/libs/rest/esm2020/lib/preview/source/rest-store-provider.mjs ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestStoreProvider": () => (/* binding */ RestStoreProvider)
/* harmony export */ });
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 636);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1382);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 224);



class RestStoreProvider extends _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.AbstractDontCodeStoreProvider {
  constructor(http) {
    super();
    this.http = http;
    this.modelMgr = _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.dtcde.getModelManager();
  }
  deleteEntity(position, key) {
    return Promise.resolve(false);
  }
  loadEntity(position, key) {
    const entity = this.modelMgr.findAtPosition(position, false);
    if (entity === null) {
      return Promise.reject("No entity found at position " + position);
    }
    const config = this.modelMgr.findTargetOfProperty(_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_ENTITIES_FROM_NODE, position)?.value;
    let loadUrl = config.url;
    if (key != null) {
      try {
        const targetUrl = new URL(config.url);
        targetUrl.pathname = targetUrl.pathname + '/' + key;
        loadUrl = targetUrl.toString();
      } catch (wrongUrl) {
        console.error("The url for loading the entity is incorrect", config.url);
        return Promise.reject("The url for loading the entity is incorrect:" + config.url);
      }
    }
    const obs = this.http.get(loadUrl, {
      observe: "body",
      responseType: "json"
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(value => {
      if (Array.isArray(value)) {
        throw new Error("When loading an entity, the returned value should be one element");
      } // Should be unique value
      return value;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(value => {
      _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.StoreProviderHelper.cleanUpLoadedData([value], _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.StoreProviderHelper.findSpecialFields(position, entity));
      return value;
    }));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.lastValueFrom)(obs);
  }
  searchEntities(position, ...criteria) {
    const entity = this.modelMgr.findAtPosition(position, false);
    if (entity === null) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => {
        return new Error("No entity found at position " + position);
      });
    }
    // Search for all the date fields as we will need to convert them:
    const specialFields = _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.StoreProviderHelper.findSpecialFields(position, entity);
    const config = this.modelMgr.findTargetOfProperty(_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_ENTITIES_FROM_NODE, position)?.value;
    return this.http.get(config.url, {
      observe: "body",
      responseType: "json"
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(value => {
      let ret = [];
      // Check if the result is an array, otherwise try to find an array embedded in the result
      if (Array.isArray(value)) {
        ret = value;
      } else {
        let prop;
        for (prop in value) {
          if (Array.isArray(value[prop])) {
            ret = value[prop];
          }
        }
      }
      return _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.StoreProviderHelper.applyFilters(ret, ...criteria);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(result => {
      _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.StoreProviderHelper.cleanUpLoadedData(result, specialFields);
      return result;
    }));
  }
  storeEntity(position, entity) {
    return Promise.reject("RestStoreProvider cannot store elements");
  }
  canStoreDocument(position) {
    return false;
  }
  storeDocuments(toStore, position) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => {
      return new Error('Document storage is unsupported.');
    });
  }
}

/***/ }),

/***/ 5714:
/*!***************************************************************************************!*\
  !*** ../../plugins/rest/dist/libs/rest/esm2020/lib/preview/source/source-handler.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SourceHandler": () => (/* binding */ SourceHandler)
/* harmony export */ });
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dontcode/plugin-common */ 6683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _rest_store_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest-store-provider */ 2398);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8451);







class SourceHandler extends _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_1__.AbstractPluginHandler {
  constructor(httpClient) {
    super();
    this.httpClient = httpClient;
    this.storeMgr = _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.dtcde.getStoreManager();
    this.modelMgr = _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.dtcde.getModelManager();
    this.storeMgr.setProviderForSourceType(new _rest_store_provider__WEBPACK_IMPORTED_MODULE_2__.RestStoreProvider(this.httpClient), 'Rest');
  }
  /**
   * Update storeMgr with any changes done to Rest sources
   * @param change
   */
  handleChange(change) {
    // Clear the cache anytime the rest configuration changes
    _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.StoreProviderHelper.clearConfigCache();
    /*    if (change.pointer==null) {
          console.log('Cannot handle source event ', change.position+' without the pointer');
          return;
        }
        const  val = this.modelMgr.findAtPosition(change.getSafeParentPosition());
        switch (change.type) {
          case ChangeType.DELETE:
            this.storeMgr.removeProviderForSourceType(val.name);
            break;
          case ChangeType.ADD:
          case ChangeType.RESET:
            this.storeMgr.setProviderForSourceType(new RestStoreProvider(val.url, this.httpClient), val.name);
            break;
          case ChangeType.MOVE:
          case ChangeType.UPDATE:
            this.storeMgr.setProviderForSourceType(new RestStoreProvider(val.url, this.httpClient ), val.name);
            break;
          default:
            break;
        }*/
  }
}
SourceHandler.ɵfac = function SourceHandler_Factory(t) {
  return new (t || SourceHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
SourceHandler.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: SourceHandler,
  factory: SourceHandler.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SourceHandler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
    }];
  }, null);
})();

/***/ }),

/***/ 6060:
/*!*********************************************************************!*\
  !*** ../../plugins/rest/dist/libs/rest/esm2020/lib/rest.module.mjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestModule": () => (/* binding */ RestModule),
/* harmony export */   "RestStoreProvider": () => (/* reexport safe */ _preview_source_rest_store_provider__WEBPACK_IMPORTED_MODULE_5__.RestStoreProvider),
/* harmony export */   "SourceHandler": () => (/* reexport safe */ _preview_source_source_handler__WEBPACK_IMPORTED_MODULE_2__.SourceHandler)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var _declaration_rest_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./declaration/rest-plugin */ 9476);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _preview_source_source_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preview/source/source-handler */ 5714);
/* harmony import */ var _preview_source_rest_store_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preview/source/rest-store-provider */ 2398);






class RestModule {
  constructor() {
    console.log('Rest Plugin registering'); // Look for this log to make sure your plugin has been loaded
    _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.dtcde.registerPlugin(new _declaration_rest_plugin__WEBPACK_IMPORTED_MODULE_1__.RestPlugin()); // When created a module must register to the platform.
  }
  exposedPreviewHandlers() {
    return new Map([['SourceHandler', _preview_source_source_handler__WEBPACK_IMPORTED_MODULE_2__.SourceHandler]]);
  }
}
RestModule.ɵfac = function RestModule_Factory(t) {
  return new (t || RestModule)();
};
RestModule.ɵmod = function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵregisterNgModuleType"](RestModule, 'dontcode-plugin/rest');
  return /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: RestModule,
    id: 'dontcode-plugin/rest'
  });
}();
RestModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](RestModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
      declarations: [],
      id: 'dontcode-plugin/rest' // A module containing previewer components must have an id to be found by the dont-code platform.
    }]
  }], function () {
    return [];
  }, null);
})();



/***/ }),

/***/ 6852:
/*!*************************************************************************!*\
  !*** ../../plugins/standard/dist/libs/std/esm2020/lib/basic.module.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicEntityComponent": () => (/* reexport safe */ _preview_entity_basic_entity_component__WEBPACK_IMPORTED_MODULE_2__.BasicEntityComponent),
/* harmony export */   "BasicFieldsComponent": () => (/* reexport safe */ _preview_fields_basic_fields_component__WEBPACK_IMPORTED_MODULE_3__.BasicFieldsComponent),
/* harmony export */   "BasicModule": () => (/* binding */ BasicModule),
/* harmony export */   "DontCodeApiStoreProvider": () => (/* reexport safe */ _store_dont_code_api_store_provider__WEBPACK_IMPORTED_MODULE_6__.DontCodeApiStoreProvider),
/* harmony export */   "TimeFieldsComponent": () => (/* reexport safe */ _preview_time_time_fields_component__WEBPACK_IMPORTED_MODULE_4__.TimeFieldsComponent),
/* harmony export */   "WebFieldsComponent": () => (/* reexport safe */ _preview_web_web_fields_component__WEBPACK_IMPORTED_MODULE_5__.WebFieldsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _declaration_basic_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./declaration/basic-plugin */ 6699);
/* harmony import */ var _preview_entity_basic_entity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preview/entity/basic-entity.component */ 317);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 5980);
/* harmony import */ var _preview_entity_list_entity_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./preview/entity/list-entity.component */ 4536);
/* harmony import */ var _preview_entity_edit_entity_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./preview/entity/edit-entity.component */ 6306);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tabview */ 4750);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/checkbox */ 8408);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 4848);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputnumber */ 3763);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 1996);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toolbar */ 2945);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ 4001);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @dontcode/plugin-common */ 4264);
/* harmony import */ var _preview_fields_basic_fields_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preview/fields/basic-fields.component */ 5477);
/* harmony import */ var _store_dont_code_api_store_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/dont-code-api-store-provider */ 6317);
/* harmony import */ var _preview_time_time_fields_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preview/time/time-fields.component */ 9326);
/* harmony import */ var _preview_web_web_fields_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preview/web/web-fields.component */ 4861);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/calendar */ 4017);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/tooltip */ 3797);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/fileupload */ 1556);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/confirmdialog */ 2600);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/inputtextarea */ 6002);



























class BasicModule {
  constructor() {
    console.log("Basic Plugin registering");
    _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.dtcde.registerPlugin(new _declaration_basic_plugin__WEBPACK_IMPORTED_MODULE_1__.BasicPlugin());
  }
  // We declare the components
  exposedPreviewHandlers() {
    return new Map([['BasicEntityComponent', _preview_entity_basic_entity_component__WEBPACK_IMPORTED_MODULE_2__.BasicEntityComponent], ['BasicFieldsComponent', _preview_fields_basic_fields_component__WEBPACK_IMPORTED_MODULE_3__.BasicFieldsComponent], ['TimeFieldsComponent', _preview_time_time_fields_component__WEBPACK_IMPORTED_MODULE_4__.TimeFieldsComponent], ['WebFieldsComponent', _preview_web_web_fields_component__WEBPACK_IMPORTED_MODULE_5__.WebFieldsComponent], ['DontCodeApiStoreProvider', _store_dont_code_api_store_provider__WEBPACK_IMPORTED_MODULE_6__.DontCodeApiStoreProvider]]);
  }
}
BasicModule.ɵfac = function BasicModule_Factory(t) {
  return new (t || BasicModule)();
};
BasicModule.ɵmod = function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵregisterNgModuleType"](BasicModule, 'dontcode-plugin/basic');
  return /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: BasicModule,
    id: 'dontcode-plugin/basic'
  });
}();
BasicModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [_store_dont_code_api_store_provider__WEBPACK_IMPORTED_MODULE_6__.DontCodeApiStoreProvider],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, primeng_table__WEBPACK_IMPORTED_MODULE_9__.TableModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_10__.TabViewModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_11__.CheckboxModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__.InputNumberModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputTextModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_15__.ToolbarModule, primeng_button__WEBPACK_IMPORTED_MODULE_16__.ButtonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_17__.CalendarModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__.TooltipModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_19__.FileUploadModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_20__.ConfirmDialogModule, _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_21__.PluginCommonModule.forRoot(), primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_22__.InputTextareaModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](BasicModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, primeng_table__WEBPACK_IMPORTED_MODULE_9__.TableModule, primeng_tabview__WEBPACK_IMPORTED_MODULE_10__.TabViewModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_11__.CheckboxModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__.InputNumberModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputTextModule, primeng_toolbar__WEBPACK_IMPORTED_MODULE_15__.ToolbarModule, primeng_button__WEBPACK_IMPORTED_MODULE_16__.ButtonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, primeng_calendar__WEBPACK_IMPORTED_MODULE_17__.CalendarModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_18__.TooltipModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_19__.FileUploadModule, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_20__.ConfirmDialogModule, _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_21__.PluginCommonModule.forRoot(), primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_22__.InputTextareaModule],
      declarations: [_preview_entity_basic_entity_component__WEBPACK_IMPORTED_MODULE_2__.BasicEntityComponent, _preview_entity_list_entity_component__WEBPACK_IMPORTED_MODULE_23__.ListEntityComponent, _preview_entity_edit_entity_component__WEBPACK_IMPORTED_MODULE_24__.EditEntityComponent, _preview_fields_basic_fields_component__WEBPACK_IMPORTED_MODULE_3__.BasicFieldsComponent, _preview_time_time_fields_component__WEBPACK_IMPORTED_MODULE_4__.TimeFieldsComponent, _preview_web_web_fields_component__WEBPACK_IMPORTED_MODULE_5__.WebFieldsComponent],
      providers: [_store_dont_code_api_store_provider__WEBPACK_IMPORTED_MODULE_6__.DontCodeApiStoreProvider],
      id: 'dontcode-plugin/basic'
    }]
  }], function () {
    return [];
  }, null);
})();






/***/ }),

/***/ 6699:
/*!*************************************************************************************!*\
  !*** ../../plugins/standard/dist/libs/std/esm2020/lib/declaration/basic-plugin.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicPlugin": () => (/* binding */ BasicPlugin)
/* harmony export */ });
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);

class BasicPlugin {
  getConfiguration() {
    return {
      "plugin": {
        "id": "BasicPlugin",
        "display-name": "Dont code plugin for all base elements",
        "version": "1.0.0"
      },
      "schema-updates": [{
        "id": "entity-all",
        "description": "Screens to directly list, edit, remove entities",
        "changes": [{
          "location": {
            "parent": "#/$defs",
            "id": "entity"
          },
          "replace": false
        }]
      }, {
        "id": "dont-code-storage",
        "description": "Stores application data in Dont-code project storage",
        "changes": [{
          "location": {
            "parent": "#/$defs/sharing",
            "id": "with"
          },
          "replace": false,
          "update": {
            "enum": ["Dont-code users"]
          }
        }]
      }],
      "preview-handlers": [{
        location: {
          parent: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_ENTITIES,
          id: ''
        },
        class: {
          name: "BasicEntityComponent",
          source: "basic"
        }
      }, {
        location: {
          parent: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS,
          id: 'type',
          values: ['String', 'Number', 'Boolean']
        },
        class: {
          name: 'BasicFieldsComponent',
          source: 'basic'
        }
      }, {
        location: {
          parent: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS,
          id: 'type',
          values: ['Date', 'Date & Time', 'Time']
        },
        class: {
          name: 'TimeFieldsComponent',
          source: 'basic'
        }
      }, {
        location: {
          parent: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS,
          id: 'type',
          values: ['Website (url)', 'Image']
        },
        class: {
          name: 'WebFieldsComponent',
          source: 'basic'
        }
      }, {
        location: {
          parent: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_SHARING,
          id: 'with',
          values: ['Dont-code users']
        },
        class: {
          name: 'DontCodeApiStoreProvider',
          source: 'basic'
        }
      }]
    };
  }
  pluginInit(dontCode) {
    // Nothing to do here
  }
}

/***/ }),

/***/ 7854:
/*!**************************************************************************************!*\
  !*** ../../plugins/standard/dist/libs/std/esm2020/lib/declaration/fields-plugin.mjs ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldsPlugin": () => (/* binding */ FieldsPlugin)
/* harmony export */ });
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);

class FieldsPlugin {
  getConfiguration() {
    return {
      plugin: {
        id: 'FieldsPlugin',
        'display-name': 'Dont code plugin for specific fields like country, currency',
        version: '1.0.0'
      },
      'schema-updates': [{
        id: 'country-type',
        description: 'Add Country as a type of field',
        changes: [{
          location: {
            parent: '#/$defs/field',
            id: 'type'
          },
          update: {
            enum: [{
              Social: {
                enum: ['Rating']
              }
            }]
          },
          replace: false
        }]
      }],
      'preview-handlers': [{
        location: {
          parent: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS,
          id: 'type',
          values: [{
            Social: {
              enum: ['Rating']
            }
          }]
        },
        class: {
          name: 'RatingComponent',
          source: 'fields'
        }
      }, {
        location: {
          parent: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS,
          id: 'type',
          values: [{
            International: {
              enum: ['Country']
            }
          }]
        },
        class: {
          name: 'CountryComponent',
          source: 'fields'
        }
      }, {
        location: {
          parent: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS,
          id: 'type',
          values: [{
            International: {
              enum: ['Currency']
            }
          }]
        },
        class: {
          name: 'CurrencyComponent',
          source: 'fields'
        }
      }, {
        location: {
          parent: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS,
          id: 'type',
          values: [{
            Money: {
              enum: ['Euro', 'Dollar']
            }
          }]
        },
        class: {
          name: 'EuroDollarComponent',
          source: 'fields'
        }
      }, {
        location: {
          parent: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModel.APP_FIELDS,
          id: 'type',
          values: [{
            Money: {
              enum: ['Other currency']
            }
          }]
        },
        class: {
          name: 'MoneyComponent',
          source: 'fields'
        }
      }]
    };
  }
  pluginInit(dontCode) {
    // Nothing to do here
  }
}

/***/ }),

/***/ 7126:
/*!**************************************************************************!*\
  !*** ../../plugins/standard/dist/libs/std/esm2020/lib/fields.module.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryComponent": () => (/* reexport safe */ _preview_country_country_component__WEBPACK_IMPORTED_MODULE_2__.CountryComponent),
/* harmony export */   "CurrencyComponent": () => (/* reexport safe */ _preview_currency_currency_component__WEBPACK_IMPORTED_MODULE_3__.CurrencyComponent),
/* harmony export */   "EuroDollarComponent": () => (/* reexport safe */ _preview_money_euro_dollar_component__WEBPACK_IMPORTED_MODULE_4__.EuroDollarComponent),
/* harmony export */   "FieldsModule": () => (/* binding */ FieldsModule),
/* harmony export */   "MoneyComponent": () => (/* reexport safe */ _preview_money_money_component__WEBPACK_IMPORTED_MODULE_5__.MoneyComponent),
/* harmony export */   "RatingComponent": () => (/* reexport safe */ _preview_rating_rating_component__WEBPACK_IMPORTED_MODULE_6__.RatingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _declaration_fields_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./declaration/fields-plugin */ 7854);
/* harmony import */ var _preview_country_country_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preview/country/country.component */ 5659);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 4848);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ 9963);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @dontcode/plugin-common */ 4264);
/* harmony import */ var _preview_currency_currency_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preview/currency/currency.component */ 5969);
/* harmony import */ var _preview_money_euro_dollar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preview/money/euro-dollar.component */ 1925);
/* harmony import */ var _preview_money_money_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preview/money/money.component */ 9708);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputnumber */ 3763);
/* harmony import */ var _preview_rating_rating_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preview/rating/rating.component */ 7846);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/rating */ 9057);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8451);
















class FieldsModule {
  constructor() {
    console.log('Fields Plugin registering');
    _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.dtcde.registerPlugin(new _declaration_fields_plugin__WEBPACK_IMPORTED_MODULE_1__.FieldsPlugin());
  }
  // We declare the components
  exposedPreviewHandlers() {
    return new Map([['CountryComponent', _preview_country_country_component__WEBPACK_IMPORTED_MODULE_2__.CountryComponent], ['CurrencyComponent', _preview_currency_currency_component__WEBPACK_IMPORTED_MODULE_3__.CurrencyComponent], ['EuroDollarComponent', _preview_money_euro_dollar_component__WEBPACK_IMPORTED_MODULE_4__.EuroDollarComponent], ['MoneyComponent', _preview_money_money_component__WEBPACK_IMPORTED_MODULE_5__.MoneyComponent], ['RatingComponent', _preview_rating_rating_component__WEBPACK_IMPORTED_MODULE_6__.RatingComponent]]);
  }
}
FieldsModule.ɵfac = function FieldsModule_Factory(t) {
  return new (t || FieldsModule)();
};
FieldsModule.ɵmod = function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵregisterNgModuleType"](FieldsModule, 'dontcode-plugin/fields');
  return /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: FieldsModule,
    id: 'dontcode-plugin/fields'
  });
}();
FieldsModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__.DropdownModule, _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_12__.PluginCommonModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__.InputNumberModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, primeng_rating__WEBPACK_IMPORTED_MODULE_14__.RatingModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FieldsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__.DropdownModule, _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_12__.PluginCommonModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_13__.InputNumberModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, primeng_rating__WEBPACK_IMPORTED_MODULE_14__.RatingModule],
      declarations: [_preview_country_country_component__WEBPACK_IMPORTED_MODULE_2__.CountryComponent, _preview_currency_currency_component__WEBPACK_IMPORTED_MODULE_3__.CurrencyComponent, _preview_money_euro_dollar_component__WEBPACK_IMPORTED_MODULE_4__.EuroDollarComponent, _preview_money_money_component__WEBPACK_IMPORTED_MODULE_5__.MoneyComponent, _preview_rating_rating_component__WEBPACK_IMPORTED_MODULE_6__.RatingComponent],
      id: 'dontcode-plugin/fields'
    }]
  }], function () {
    return [];
  }, null);
})();






/***/ }),

/***/ 5659:
/*!**********************************************************************************************!*\
  !*** ../../plugins/standard/dist/libs/std/esm2020/lib/preview/country/country.component.mjs ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountryComponent": () => (/* binding */ CountryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dontcode/plugin-common */ 561);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dontcode/plugin-common */ 1313);
/* harmony import */ var i18n_iso_countries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18n-iso-countries */ 4482);
/* harmony import */ var i18n_iso_countries_langs_en_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18n-iso-countries/langs/en.json */ 1823);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4848);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dropdown */ 9963);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 9305);









/**
 * Display or edit a country value
 */
const _c0 = ["inlineView"];
const _c1 = ["fullEditView"];
function CountryComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "flag-icon-" + (ctx_r1.value == null ? null : ctx_r1.value.toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.value);
  }
}
function CountryComponent_ng_template_2_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "flag-icon-" + (ctx_r6.form.controls[ctx_r6.name].value == null ? null : ctx_r6.form.controls[ctx_r6.name].value.toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r6.form.controls[ctx_r6.name].value, " ");
  }
}
function CountryComponent_ng_template_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CountryComponent_ng_template_2_ng_template_2_div_0_Template, 3, 2, "div", 7);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.form.controls[ctx_r4.name].value);
  }
}
function CountryComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
  }
  if (rf & 2) {
    const country_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", "flag-icon-" + (country_r7 == null ? null : country_r7.alpha2code.toLowerCase()));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", country_r7.name, " ");
  }
}
function CountryComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p-dropdown", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CountryComponent_ng_template_2_ng_template_2_Template, 1, 1, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CountryComponent_ng_template_2_ng_template_3_Template, 2, 2, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r3.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r3.countries)("formControlName", ctx_r3.name)("filter", true)("showClear", true);
  }
}
class CountryComponent extends _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__.AbstractDynamicComponent {
  constructor() {
    super(...arguments);
    this.countries = new Array();
  }
  //  selectedCountry;
  ngOnInit() {
    i18n_iso_countries__WEBPACK_IMPORTED_MODULE_0__.registerLocale(i18n_iso_countries_langs_en_json__WEBPACK_IMPORTED_MODULE_1__);
    for (const alpha2 in i18n_iso_countries__WEBPACK_IMPORTED_MODULE_0__.getAlpha2Codes()) {
      this.countries.push({
        name: i18n_iso_countries__WEBPACK_IMPORTED_MODULE_0__.getName(alpha2, 'en') || alpha2,
        alpha2code: alpha2
      });
    }
  }
  providesTemplates() {
    return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__.TemplateList(this.inlineView, null, this.fullEditView);
  }
  canProvide(key) {
    return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__.PossibleTemplateList(true, false, true);
  }
}
CountryComponent.ɵfac = /* @__PURE__ */function () {
  let ɵCountryComponent_BaseFactory;
  return function CountryComponent_Factory(t) {
    return (ɵCountryComponent_BaseFactory || (ɵCountryComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](CountryComponent)))(t || CountryComponent);
  };
}();
CountryComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CountryComponent,
  selectors: [["dontcode-fields-country"]],
  viewQuery: function CountryComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.inlineView = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.fullEditView = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 0,
  consts: [["inlineView", ""], ["fullEditView", ""], [1, "flag-icon", 3, "ngClass"], [3, "formGroup"], ["optionLabel", "name", "optionValue", "alpha2code", "filterBy", "name", "placeholder", "Select a Country", 3, "options", "formControlName", "filter", "showClear"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], [4, "ngIf"]],
  template: function CountryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CountryComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CountryComponent_ng_template_2_Template, 4, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__.Dropdown, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CountryComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'dontcode-fields-country',
      template: "<ng-template #inlineView ><span class=\"flag-icon\" [ngClass]=\"'flag-icon-'+value?.toLowerCase()\"></span>{{value}}</ng-template>\n<ng-template #fullEditView>\n  <ng-container [formGroup]=\"form\">\n    <p-dropdown [options]=\"countries\" [formControlName]=\"name\" optionLabel=\"name\" optionValue=\"alpha2code\" [filter]=\"true\" filterBy=\"name\" [showClear]=\"true\" placeholder=\"Select a Country\">\n      <ng-template pTemplate=\"selectedItem\">\n        <div *ngIf=\"form.controls[name].value\">\n          <span class=\"flag-icon\" [ngClass]=\"'flag-icon-'+form.controls[name].value?.toLowerCase()\"></span>\n          {{form.controls[name].value}}\n        </div>\n      </ng-template>\n      <ng-template let-country pTemplate=\"item\">\n        <span class=\"flag-icon\" [ngClass]=\"'flag-icon-'+country?.alpha2code.toLowerCase()\"></span>\n        {{country.name}}\n      </ng-template>\n    </p-dropdown>\n  </ng-container></ng-template>\n"
    }]
  }], null, {
    inlineView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: ['inlineView', {
        static: true
      }]
    }],
    fullEditView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: ['fullEditView', {
        static: true
      }]
    }]
  });
})();

/***/ }),

/***/ 5969:
/*!************************************************************************************************!*\
  !*** ../../plugins/standard/dist/libs/std/esm2020/lib/preview/currency/currency.component.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyComponent": () => (/* binding */ CurrencyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dontcode/plugin-common */ 561);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dontcode/plugin-common */ 1313);
/* harmony import */ var all_country_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! all-country-data */ 3769);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4848);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dropdown */ 9963);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 9305);








/**
 * Display or edit a country value
 */
const _c0 = ["inlineView"];
const _c1 = ["fullEditView"];
function CurrencyComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.value);
  }
}
function CurrencyComponent_ng_template_2_ng_container_0_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.form.controls[ctx_r7.name].value, " ");
  }
}
function CurrencyComponent_ng_template_2_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CurrencyComponent_ng_template_2_ng_container_0_ng_template_2_div_0_Template, 2, 1, "div", 7);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.form.controls[ctx_r5.name].value);
  }
}
function CurrencyComponent_ng_template_2_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const currency_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", currency_r8.currency, " - ", currency_r8.currencyCode, " ");
  }
}
function CurrencyComponent_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p-dropdown", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CurrencyComponent_ng_template_2_ng_container_0_ng_template_2_Template, 1, 1, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CurrencyComponent_ng_template_2_ng_container_0_ng_template_3_Template, 1, 2, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r4.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r4.currencies)("formControlName", ctx_r4.name)("filter", true)("showClear", true);
  }
}
function CurrencyComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CurrencyComponent_ng_template_2_ng_container_0_Template, 4, 5, "ng-container", 2);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.form);
  }
}
class CurrencyComponent extends _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__.AbstractDynamicComponent {
  constructor() {
    super();
    this.currencies = new Array();
    // Prepare the list of currencies
    const currencySet = new Map();
    all_country_data__WEBPACK_IMPORTED_MODULE_0__.countryCurrencyList().forEach(country => {
      if (country.currency && country.currency_code) {
        currencySet.set(country.currency, country.currency_code);
      }
    }); // Remove duplicates
    this.currencies = [];
    currencySet.forEach((code, key) => {
      this.currencies.push({
        currency: key,
        currencyCode: code
      });
    });
    this.currencies = this.currencies.sort((a, b) => {
      return a.currency.localeCompare(b.currency);
    });
  }
  providesTemplates() {
    return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__.TemplateList(this.inlineView, null, this.fullEditView);
  }
  canProvide(key) {
    return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__.PossibleTemplateList(true, false, true);
  }
}
CurrencyComponent.ɵfac = function CurrencyComponent_Factory(t) {
  return new (t || CurrencyComponent)();
};
CurrencyComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CurrencyComponent,
  selectors: [["dontcode-fields-currency"]],
  viewQuery: function CurrencyComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inlineView = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fullEditView = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 0,
  consts: [["inlineView", ""], ["fullEditView", ""], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["optionValue", "currencyCode", "filterBy", "currency", "placeholder", "Select a Currency", 3, "options", "formControlName", "filter", "showClear"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], [4, "ngIf"]],
  template: function CurrencyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CurrencyComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CurrencyComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__.Dropdown, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CurrencyComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'dontcode-fields-currency',
      template: "<ng-template #inlineView >{{value}}</ng-template>\n<ng-template #fullEditView>\n  <ng-container *ngIf=\"form\" [formGroup]=\"form\">\n    <p-dropdown [options]=\"currencies\" [formControlName]=\"name\" optionValue=\"currencyCode\" [filter]=\"true\" filterBy=\"currency\" [showClear]=\"true\" placeholder=\"Select a Currency\">\n      <ng-template pTemplate=\"selectedItem\">\n        <div *ngIf=\"form.controls[name].value\">\n          {{form.controls[name].value}}\n        </div>\n      </ng-template>\n      <ng-template let-currency pTemplate=\"item\">\n        {{currency.currency}} - {{currency.currencyCode}}\n      </ng-template>\n    </p-dropdown>\n  </ng-container></ng-template>\n"
    }]
  }], function () {
    return [];
  }, {
    inlineView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['inlineView', {
        static: true
      }]
    }],
    fullEditView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['fullEditView', {
        static: true
      }]
    }]
  });
})();

/***/ }),

/***/ 317:
/*!**************************************************************************************************!*\
  !*** ../../plugins/standard/dist/libs/std/esm2020/lib/preview/entity/basic-entity.component.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicEntityComponent": () => (/* binding */ BasicEntityComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_monorepo_monorepo_common_temp_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/temp/node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 8706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dontcode/plugin-common */ 2577);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dontcode/plugin-common */ 1313);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 224);
/* harmony import */ var _list_entity_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-entity.component */ 4536);
/* harmony import */ var _edit_entity_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-entity.component */ 6306);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @dontcode/plugin-common */ 3824);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @dontcode/plugin-common */ 2004);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ 9305);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tabview */ 4750);
/* harmony import */ var primeng_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/toolbar */ 2945);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/button */ 4001);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tooltip */ 3797);
















function BasicEntityComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BasicEntityComponent_ng_template_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.newEntity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BasicEntityComponent_ng_template_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.deleteEntity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BasicEntityComponent_ng_template_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.refreshScreen());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BasicEntityComponent_ng_template_3_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.saveEntity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("pTooltip", "Create a new ", ctx_r0.entityName, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.dataLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("pTooltip", "Remove permanently the selected ", ctx_r0.entityName, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r0.selectedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("pTooltip", "Refresh values of all ", ctx_r0.entityName, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r0.refreshIcon)("disabled", ctx_r0.dataLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("pTooltip", "Saves permanently the selected ", ctx_r0.entityName, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r0.canSave);
  }
}
function BasicEntityComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BasicEntityComponent_ng_template_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.newEntity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BasicEntityComponent_ng_template_10_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.deleteEntity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BasicEntityComponent_ng_template_10_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.refreshScreen());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BasicEntityComponent_ng_template_10_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.saveEntity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("pTooltip", "Create a new ", ctx_r1.entityName, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.dataLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("pTooltip", "Remove permanently the selected ", ctx_r1.entityName, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r1.selectedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("pTooltip", "Refresh values of all ", ctx_r1.entityName, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx_r1.refreshIcon)("disabled", ctx_r1.dataLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("pTooltip", "Saves permanently the selected ", ctx_r1.entityName, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r1.canSave);
  }
}
const _c0 = function () {
  return [];
};
class BasicEntityComponent extends _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__.PluginBaseComponent {
  constructor(entityService, ref, componentLoader, injector) {
    super(componentLoader, injector, ref);
    this.entityService = entityService;
    this.entityName = '';
    this.canSave = false;
    this.store = null;
    this.tabIndex = 0;
    this.dataLoading = false;
    this.refreshIcon = BasicEntityComponent.baseRefreshIcons;
  }
  initCommandFlow(provider, pointer) {
    super.initCommandFlow(provider, pointer);
    if (this.entityPointer) {
      const json = provider.getJsonAt(this.entityPointer.position);
      this.store = this.entityService.retrieveListManager(this.entityPointer, json);
      this.decomposeJsonToMultipleChanges(this.entityPointer, json);
    }
    this.initChangeListening(); // Listen to name changes of this Entity
  }
  ngAfterViewInit() {
    // When testing entityPointer is not defined
    if (this.entityPointer && this.provider) {
      this.list.initCommandFlow(this.provider, this.entityPointer.subPropertyPointer(_dontcode_core__WEBPACK_IMPORTED_MODULE_1__.DontCodeModel.APP_FIELDS_NODE));
      this.edit.initCommandFlow(this.provider, this.entityPointer.subPropertyPointer(_dontcode_core__WEBPACK_IMPORTED_MODULE_1__.DontCodeModel.APP_FIELDS_NODE));
      if (this.store != null) {
        //this.dataLoading=true;
        this.store.loadAll().then(() => {
          console.debug("Loaded entities");
          try {
            this.list.dataIsLoaded();
          } catch (e) {
            console.debug("Just ignore errors when calling dataIsloaded");
          }
          //this.dataLoading=false;
          this.ref.markForCheck();
          this.ref.detectChanges();
        }, reason => {
          //this.dataLoading=false;
          this.ref.markForCheck();
          this.ref.detectChanges();
        });
      }
    } else {
      throw new Error('Cannot create subcomponents before initCommandFlow is called');
    }
    super.ngAfterViewInit();
  }
  initChangeListening() {
    super.initChangeListening();
    if (this.provider) {
      this.subscriptions.add(this.provider.receiveCommands(_dontcode_core__WEBPACK_IMPORTED_MODULE_1__.DontCodeModel.APP_SHARING_WITH).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(change => {
        if (this.store) {
          console.debug("Reloading data due to change of StoreManager");
          //          this.dataLoading=true;
          this.store.reset();
          this.store.loadAll().then(() => {
            try {
              this.list.dataIsLoaded();
            } catch (e) {
              console.debug("Just ignore errors when calling dataIsloaded");
            }
            //this.dataLoading=false;
            this.ref.markForCheck();
            this.ref.detectChanges();
          }, reason => {
            //           this.dataLoading=false;
            this.ref.markForCheck();
            this.ref.detectChanges();
          });
        } else {
          console.error('Cannot reload data because store is not set');
        }
      })).subscribe());
    } else {
      throw new Error('Cannot create subcomponents before initCommandFlow is called');
    }
  }
  /**
   * Make the appropriate display updates whenever a change is received
   * @param change
   * @protected
   */
  handleChange(change) {
    //console.log("Changed Entity",change.position);
    if (!change.pointer) {
      if (this.provider) {
        change.pointer = this.provider.calculatePointerFor(change.position);
      } else {
        throw new Error('Cannot handle change with no pointer for position' + change.position);
      }
    }
    if (this.entityPointer) {
      const prop = change.pointer.isUnderSubItemOf(this.entityPointer);
      if (prop) {
        switch (prop) {
          case _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.DontCodeModel.APP_ENTITIES_NAME_NODE:
            this.entityName = change.value;
            break;
          default:
            return;
        }
      }
      this.ref.markForCheck();
      this.ref.detectChanges();
    } else {
      throw new Error('Need an entityPointer to handle change @' + change.position);
    }
  }
  selectChange($event) {
    var _this = this;
    return (0,_home_runner_work_monorepo_monorepo_common_temp_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //    console.log("Event:", $event);
      if ($event) {
        // Load the details of the selected element
        if (_this.store != null) {
          yield _this.store.loadDetailOf($event).then(newValue => {
            if (newValue != null) {
              _this.selectedItem = newValue;
            }
          }).catch(reason => {
            console.error("Ignoring the failed loading of " + $event._id + " due to ", reason);
          });
        }
        _this.canSave = true;
        _this.tabIndex = 1; // Automatically move to edit when selection is made
      } else {
        _this.canSave = false;
      }
      _this.ref.markForCheck();
      _this.ref.detectChanges();
    })();
  }
  deleteEntity() {
    var _this2 = this;
    return (0,_home_runner_work_monorepo_monorepo_common_temp_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.selectedItem && _this2.store) {
        yield _this2.store.remove(_this2.selectedItem).then(deleted => {
          _this2.selectedItem = null;
          _this2.canSave = false;
          _this2.tabIndex = 0;
          _this2.ref.markForCheck();
          _this2.ref.detectChanges();
        });
      }
    })();
  }
  newEntity() {
    const newEntity = {};
    this.store?.push(newEntity);
    this.selectedItem = newEntity;
    this.canSave = true;
    this.tabIndex = 1;
  }
  saveEntity() {
    var _this3 = this;
    return (0,_home_runner_work_monorepo_monorepo_common_temp_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.selectedItem) {
        _this3.canSave = false;
        try {
          // Ensure all fields are ok
          //this.edit.form.updateValueAndValidity({onlySelf:true, emitEvent:false});
          _this3.edit.getValue();
          yield _this3.store?.store(_this3.selectedItem).then(value => {
            console.debug("Entity named ", _this3.entityName + " with value " + value, " stored at position " + _this3.entityPointer?.position);
            _this3.selectedItem = value;
            _this3.tabIndex = 0;
          }).catch(reason => {
            console.error("Entity named ", _this3.entityName, " not saved because of ", reason);
          });
        } finally {
          _this3.canSave = true;
          _this3.ref.markForCheck();
          _this3.ref.detectChanges();
        }
      }
    })();
  }
  providesTemplates() {
    return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_5__.TemplateList(null, null, null);
  }
  canProvide(key) {
    return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_5__.PossibleTemplateList(false, false, false);
  }
  refreshScreen() {
    var _this4 = this;
    return (0,_home_runner_work_monorepo_monorepo_common_temp_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.debug("Refresh called");
      if (_this4.entityPointer != null) {
        if (_this4.tabIndex == 0) {
          // List
          try {
            _this4.refreshIcon = BasicEntityComponent.baseRefreshIcons + ' pi-spin';
            console.debug("Performing action");
            yield _this4.pluginHelper.performAction(new _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.Action(_this4.entityPointer?.position, null, _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.ActionContextType.LIST, _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.ActionType.EXTRACT, _this4.entityPointer));
            console.debug("Marking for Check");
            _this4.ref.markForCheck();
            _this4.ref.detectChanges();
            console.debug("Storing Changed values");
            yield _this4.store?.storeAllChanged();
            console.debug("Stored values changed");
          } catch (reason) {
            console.error("Error ", reason, " performing refresh action on ", _this4.entityName, _this4.entityPointer);
          } finally {
            _this4.refreshIcon = BasicEntityComponent.baseRefreshIcons;
            _this4.ref.markForCheck();
            _this4.ref.detectChanges();
          }
        } else return Promise.reject('Not displaying the list');
      } else return Promise.reject('No entityPointer');
    })();
  }
}
BasicEntityComponent.baseRefreshIcons = 'pi pi-refresh';
BasicEntityComponent.ɵfac = function BasicEntityComponent_Factory(t) {
  return new (t || BasicEntityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_6__.EntityStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_7__.ComponentLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector));
};
BasicEntityComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: BasicEntityComponent,
  selectors: [["dontcode-basic-entity"]],
  viewQuery: function BasicEntityComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_list_entity_component__WEBPACK_IMPORTED_MODULE_8__.ListEntityComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_edit_entity_component__WEBPACK_IMPORTED_MODULE_9__.EditEntityComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.list = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.edit = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 11,
  vars: 7,
  consts: [["pTemplate", "left"], [3, "activeIndex", "activeIndexChange"], ["header", "List"], [3, "entities", "selectedItem", "selectedItemChange"], ["header", "Edit", 3, "disabled"], [3, "value"], ["name", "new", "pButton", "", "icon", "pi pi-plus", 1, "p-button-rounded", "p-button-success", "p-mr-2", 3, "pTooltip", "disabled", "click"], ["name", "delete", "pButton", "", "icon", "pi pi-trash", 1, "p-button-rounded", "p-button-warning", 3, "pTooltip", "disabled", "click"], [1, "pi", "pi-minus", "p-mx-2", 2, "font-size", "0.5rem"], ["name", "refresh", "pButton", "", 1, "p-button-rounded", "p-button-warning", 3, "icon", "pTooltip", "disabled", "click"], ["name", "save", "pButton", "", "icon", "pi pi-save", 1, "p-button-rounded", "p-button-warning", 3, "pTooltip", "disabled", "click"], ["name", "new-bottom", "pButton", "", "icon", "pi pi-plus", 1, "p-button-rounded", "p-button-success", "p-mr-2", 3, "pTooltip", "disabled", "click"], ["name", "delete-bottom", "pButton", "", "icon", "pi pi-trash", 1, "p-button-rounded", "p-button-warning", 3, "pTooltip", "disabled", "click"], ["name", "refresh-bottom", "pButton", "", 1, "p-button-rounded", "p-button-warning", 3, "icon", "pTooltip", "disabled", "click"], ["name", "save-bottom", "pButton", "", "icon", "pi pi-save", 1, "p-button-rounded", "p-button-warning", 3, "pTooltip", "disabled", "click"]],
  template: function BasicEntityComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p-toolbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, BasicEntityComponent_ng_template_3_Template, 5, 9, "ng-template", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p-tabView", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activeIndexChange", function BasicEntityComponent_Template_p_tabView_activeIndexChange_4_listener($event) {
        return ctx.tabIndex = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p-tabPanel", 2)(6, "dontcode-list-entity", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedItemChange", function BasicEntityComponent_Template_dontcode_list_entity_selectedItemChange_6_listener($event) {
        return ctx.selectedItem = $event;
      })("selectedItemChange", function BasicEntityComponent_Template_dontcode_list_entity_selectedItemChange_6_listener($event) {
        return ctx.selectChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p-tabPanel", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "dontcode-edit-entity", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p-toolbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, BasicEntityComponent_ng_template_10_Template, 5, 9, "ng-template", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      let tmp_2_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("List of ", ctx.entityName, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("activeIndex", ctx.tabIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("entities", (tmp_2_0 = ctx.store == null ? null : ctx.store.entities) !== null && tmp_2_0 !== undefined ? tmp_2_0 : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0))("selectedItem", ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.selectedItem);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.selectedItem);
    }
  },
  dependencies: [primeng_api__WEBPACK_IMPORTED_MODULE_10__.PrimeTemplate, primeng_tabview__WEBPACK_IMPORTED_MODULE_11__.TabView, primeng_tabview__WEBPACK_IMPORTED_MODULE_11__.TabPanel, primeng_toolbar__WEBPACK_IMPORTED_MODULE_12__.Toolbar, primeng_button__WEBPACK_IMPORTED_MODULE_13__.ButtonDirective, primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__.Tooltip, _list_entity_component__WEBPACK_IMPORTED_MODULE_8__.ListEntityComponent, _edit_entity_component__WEBPACK_IMPORTED_MODULE_9__.EditEntityComponent],
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BasicEntityComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'dontcode-basic-entity',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
      template: "<h1>List of {{entityName}}</h1>\n<p-toolbar>\n  <ng-template pTemplate=\"left\">\n    <button name=\"new\" pButton icon=\"pi pi-plus\" class=\"p-button-rounded p-button-success p-mr-2\" (click)=\"newEntity()\" pTooltip=\"Create a new {{entityName}}.\" [disabled]=\"dataLoading\"></button>\n    <button name=\"delete\" pButton icon=\"pi pi-trash\" class=\"p-button-rounded p-button-warning\" (click)=\"deleteEntity()\"  pTooltip=\"Remove permanently the selected {{entityName}}.\" [disabled]=\"!selectedItem\"></button>\n    <i class=\"pi pi-minus p-mx-2\" style=\"font-size: 0.5rem\"></i>\n    <button name=\"refresh\" pButton [icon]=\"refreshIcon\" class=\"p-button-rounded p-button-warning\" (click)=\"refreshScreen()\" pTooltip=\"Refresh values of all {{entityName}}.\" [disabled]=\"dataLoading\"></button>\n    <button name=\"save\" pButton icon=\"pi pi-save\" class=\"p-button-rounded p-button-warning\" (click)=\"saveEntity()\" pTooltip=\"Saves permanently the selected {{entityName}}.\" [disabled]=\"!canSave\"></button>\n  </ng-template>\n</p-toolbar>\n<p-tabView [(activeIndex)]=\"tabIndex\">\n  <p-tabPanel header=\"List\">\n      <!-- Display an array of elements -->\n    <dontcode-list-entity [entities]=\"store?.entities??[]\" [(selectedItem)]=\"selectedItem\" (selectedItemChange)=\"selectChange($event)\" ></dontcode-list-entity>\n  </p-tabPanel>\n  <p-tabPanel header=\"Edit\" [disabled]=\"!selectedItem\">\n      <dontcode-edit-entity [value]=\"selectedItem\"></dontcode-edit-entity>\n  </p-tabPanel>\n</p-tabView>\n<p-toolbar>\n  <ng-template pTemplate=\"left\">\n    <button name=\"new-bottom\" pButton icon=\"pi pi-plus\" class=\"p-button-rounded p-button-success p-mr-2\" (click)=\"newEntity()\" pTooltip=\"Create a new {{entityName}}.\" [disabled]=\"dataLoading\"></button>\n    <button name=\"delete-bottom\" pButton icon=\"pi pi-trash\" class=\"p-button-rounded p-button-warning\" (click)=\"deleteEntity()\" pTooltip=\"Remove permanently the selected {{entityName}}.\" [disabled]=\"!selectedItem\"></button>\n    <i class=\"pi pi-minus p-mx-2\" style=\"font-size: 0.5rem\"></i>\n    <button name=\"refresh-bottom\" pButton [icon]=\"refreshIcon\" class=\"p-button-rounded p-button-warning\" (click)=\"refreshScreen()\" pTooltip=\"Refresh values of all {{entityName}}.\" [disabled]=\"dataLoading\"></button>\n    <button name=\"save-bottom\" pButton icon=\"pi pi-save\" class=\"p-button-rounded p-button-warning\" (click)=\"saveEntity()\" pTooltip=\"Saves permanently the selected {{entityName}}.\" [disabled]=\"!canSave\"></button>\n  </ng-template>\n</p-toolbar>\n"
    }]
  }], function () {
    return [{
      type: _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_6__.EntityStoreService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
    }, {
      type: _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_7__.ComponentLoaderService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
    }];
  }, {
    list: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: [_list_entity_component__WEBPACK_IMPORTED_MODULE_8__.ListEntityComponent]
    }],
    edit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
      args: [_edit_entity_component__WEBPACK_IMPORTED_MODULE_9__.EditEntityComponent]
    }]
  });
})();

/***/ }),

/***/ 6306:
/*!*************************************************************************************************!*\
  !*** ../../plugins/standard/dist/libs/std/esm2020/lib/preview/entity/edit-entity.component.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditEntityComponent": () => (/* binding */ EditEntityComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dontcode/plugin-common */ 2577);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dontcode/plugin-common */ 1313);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4848);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dontcode/plugin-common */ 2004);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @dontcode/plugin-common */ 6093);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 1996);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtextarea */ 6002);








const _c0 = ["defaulteditor"];
function EditEntityComponent_ng_container_1_div_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
  }
}
const _c1 = function (a0) {
  return {
    fieldName: a0
  };
};
function EditEntityComponent_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EditEntityComponent_ng_container_1_div_2_ng_container_5_Template, 1, 0, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const field_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", field_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](field_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.templateOf(field_r4))("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, field_r4.name));
  }
}
function EditEntityComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditEntityComponent_ng_container_1_div_2_Template, 6, 6, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.getSubFields());
  }
}
function EditEntityComponent_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const name_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().fieldName;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", name_r6)("formControlName", name_r6);
  }
}
function EditEntityComponent_ng_template_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "textarea", 11);
  }
  if (rf & 2) {
    const name_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().fieldName;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", name_r6)("formControlName", name_r6)("autoResize", true);
  }
}
function EditEntityComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditEntityComponent_ng_template_2_ng_container_1_Template, 2, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditEntityComponent_ng_template_2_ng_template_2_Template, 1, 3, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const name_r6 = ctx.fieldName;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isShortText(name_r6))("ngIfElse", _r8);
  }
}
class EditEntityComponent extends _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_1__.PluginBaseComponent {
  set _value(newVal) {
    this.setValue(newVal);
  }
  //initing = false;
  //formConfig = {};
  constructor(ref, fb, injector, componentLoader) {
    super(componentLoader, injector, ref);
    this.fb = fb;
  }
  ngOnInit() {
    this.form = this.fb.group({}, {
      updateOn: 'blur'
    });
    this.updateValueOnFormChanges();
  }
  initCommandFlow(provider, pointer) {
    //this.initing=true;
    super.initCommandFlow(provider, pointer);
    if (!this.entityPointer) throw new Error('Cannot listen to changes without knowing a base position');
    this.decomposeJsonToMultipleChanges(this.entityPointer, provider.getJsonAt(this.entityPointer.position)); // Dont provide a special handling for initial json, but emulate a list of changes
    this.initChangeListening(true); // Listen to all changes occuring after entityPointer
    //this.initing=false;
    this.rebuildForm();
  }
  /**
   * Updates the edit form whenever the fields of the entity are changed
   * @param change
   * @protected
   */
  handleChange(change) {
    if (change.position !== this.entityPointer?.position) {
      this.updateSubFieldsWithChange(change, null).then(value => {
        if (value != null) {
          this.ref.markForCheck();
          this.ref.detectChanges();
        }
      });
    }
  }
  providesTemplates() {
    return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__.TemplateList(null, null, null);
  }
  canProvide(key) {
    return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__.PossibleTemplateList(false, false, false);
  }
  templateOf(field) {
    let ref = field.component?.providesTemplates(field.type).forFullEdit;
    if (!ref) ref = this.defaultTemplate;
    return ref;
  }
  setForm(form) {
    // Just ignore any form set
    if (form) {
      throw new Error('Trying to set a form to the Edit Entity component who already has one');
    }
  }
  isShortText(fieldName) {
    const val = this.form.get(fieldName)?.value;
    if (val != null) return val.length < 50;else return true;
  }
  getValue() {
    return super.getValue();
  }
}
EditEntityComponent.ɵfac = function EditEntityComponent_Factory(t) {
  return new (t || EditEntityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__.ComponentLoaderService));
};
EditEntityComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: EditEntityComponent,
  selectors: [["dontcode-edit-entity"]],
  viewQuery: function EditEntityComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.defaultTemplate = _t.first);
    }
  },
  inputs: {
    _value: ["value", "_value"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 1,
  consts: [[4, "ngIf"], ["defaulteditor", ""], [3, "formGroup"], ["class", "formgrid grid", 4, "ngFor", "ngForOf"], [1, "formgrid", "grid"], [1, "field", "col-12"], [3, "for"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf", "ngIfElse"], ["smallText", ""], ["pInputText", "", 1, "w-full", 3, "name", "formControlName"], ["pInputTextarea", "", 3, "name", "formControlName", "autoResize"]],
  template: function EditEntityComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dtcde-dynamic");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditEntityComponent_ng_container_1_Template, 3, 2, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditEntityComponent_ng_template_2_Template, 4, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_7__.DynamicInsertPoint, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_8__.InputTextarea]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditEntityComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'dontcode-edit-entity',
      template: "  <dtcde-dynamic></dtcde-dynamic>\n  <ng-container *ngIf=\"value\">\n    <form [formGroup]=\"form\">\n      <div class=\"formgrid grid\" *ngFor=\"let field of getSubFields()\">\n        <div class=\"field col-12\">\n          <label [for]=\"field.name\">{{field.name}}</label>\n          <div>\n            <ng-container *ngTemplateOutlet=\"templateOf(field); context:{ fieldName:field.name}\"></ng-container>\n          </div>\n        </div>\n    </div>\n    </form>\n</ng-container>\n\n<ng-template #defaulteditor let-name=\"fieldName\">\n  <ng-container [formGroup]=\"form\">\n    <ng-container *ngIf=\"isShortText(name); else smallText\"><input [name]=\"name\" [formControlName]=\"name\" pInputText class=\"w-full\" /></ng-container>\n    <ng-template #smallText><textarea [name]=\"name\" [formControlName]=\"name\" pInputTextarea [autoResize]=\"true\"></textarea> </ng-template>\n  </ng-container>\n</ng-template>\n"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__.ComponentLoaderService
    }];
  }, {
    _value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['value']
    }],
    defaultTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['defaulteditor']
    }]
  });
})();

/***/ }),

/***/ 4536:
/*!*************************************************************************************************!*\
  !*** ../../plugins/standard/dist/libs/std/esm2020/lib/preview/entity/list-entity.component.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListEntityComponent": () => (/* binding */ ListEntityComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_monorepo_monorepo_common_temp_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/temp/node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 8706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dontcode/plugin-common */ 2577);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dontcode/plugin-common */ 1313);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dontcode/plugin-common */ 2004);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/table */ 5980);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 9305);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tooltip */ 3797);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @dontcode/plugin-common */ 6093);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @dontcode/plugin-common */ 9850);











/**
 * Displays a read-only list of entity in a table.
 * Each field of the entity is a column and managed by one component only (we call setValue for each row we display)
 */
function ListEntityComponent_ng_template_2_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "p-sortIcon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "header-", col_r4.header, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSortableColumn", col_r4.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", col_r4.header, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", col_r4.field);
  }
}
function ListEntityComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ListEntityComponent_ng_template_2_th_1_Template, 3, 4, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const columns_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", columns_r2);
  }
}
function ListEntityComponent_ng_template_3_td_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function ListEntityComponent_ng_template_3_td_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ListEntityComponent_ng_template_3_td_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const col_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const rowData_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r9.templateOf(col_r8, rowData_r5[col_r8.field]));
  }
}
function ListEntityComponent_ng_template_3_td_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "beautifier");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "beautifier");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const col_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const rowData_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("pTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, rowData_r5[col_r8.field]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 4, rowData_r5[col_r8.field], 50));
  }
}
function ListEntityComponent_ng_template_3_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ListEntityComponent_ng_template_3_td_1_ng_container_1_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ListEntityComponent_ng_template_3_td_1_ng_container_2_Template, 5, 7, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", col_r8.component);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !col_r8.component);
  }
}
function ListEntityComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ListEntityComponent_ng_template_3_td_1_Template, 3, 2, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rowData_r5 = ctx.$implicit;
    const columns_r6 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pSelectableRow", rowData_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", columns_r6);
  }
}
class ListEntityComponent extends _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__.PluginBaseComponent {
  constructor(ref, injector, componentLoader, modelMgr) {
    super(componentLoader, injector, ref);
    this.modelMgr = modelMgr;
    this.selectedItemChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.cols = new Array();
    this.colsMap = new Map();
    this.entities = [];
    if (this.modelMgr == null) this.modelMgr = _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.dtcde.getModelManager(); // In case the injext did not work
  }
  selectionChange(event) {
    this.selectedItemChange.emit(event);
  }
  initCommandFlow(provider, pointer) {
    super.initCommandFlow(provider, pointer);
    if (!this.entityPointer) throw new Error('Cannot listen to changes without knowing a base position');
    this.decomposeJsonToMultipleChanges(this.entityPointer, provider.getJsonAt(this.entityPointer.position)); // Dont provide a special handling for initial json, but emulate a list of changes
    this.initChangeListening(true); // Listen to all changes occuring after entityPointer
  }
  /**
   * Make the appropriate display updates whenever a change is received
   * @param change
   */
  handleChange(change) {
    //console.log("Changed Entity",change.position);
    if (change.position !== this.entityPointer?.position) {
      // Columns have been changed
      this.applyUpdatesToArrayAsync(this.cols, this.colsMap, change, null, (position, value) => {
        return this.loadSubComponent(position, value.type, value.name, this.provider?.getJsonAt(position.position)).then(component => {
          const ret = new PrimeColumn(value.name, value.name, value.type);
          if (component) {
            // Keep the component only if it provides the view template
            if (component.canProvide(value.type).forInlineView) {
              ret.component = component;
              this.applyComponentToSubField(component, value.type, value.name);
            }
          }
          return ret;
        });
      }).then(updatedColumns => {
        this.cols = updatedColumns;
        //  this.reloadData ();
        this.ref.markForCheck();
        this.ref.detectChanges();
      });
    }
  }
  /**
   * Runs the action on the subcomponents
   * @param action
   */
  performAction(action) {
    var _this = this;
    return (0,_home_runner_work_monorepo_monorepo_common_temp_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (action.pointer == null) return Promise.reject("No pointer for Action with position " + action.position);
      // It must point directly to the element
      if (action.position == _this.entityPointer?.position) {
        // Update all columns
        if (_this.entities != null) {
          for (const colInfo of _this.cols) if (colInfo.component?.performAction != null) {
            for (const entity of _this.entities) {
              colInfo.component?.setValue(entity[colInfo.field]);
              yield colInfo.component.performAction(action);
            }
          }
        }
      }
    })();
  }
  retrieveColumnInfo(colName) {
    const index = this.colsMap.get(colName);
    if (index != null) {
      return this.cols[index];
    } else {
      throw new Error("Cannot find column with name " + colName);
    }
  }
  providesTemplates() {
    return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__.TemplateList(null, null, null);
  }
  canProvide(key) {
    return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_4__.PossibleTemplateList(false, false, false);
  }
  templateOf(col, value) {
    if (col.component != null) {
      col.component.setValue(value);
      const ref = col.component.providesTemplates(col.type).forInlineView;
      if (ref) return ref;
    }
    throw new Error('No component or template to display ' + col.type);
  }
  getStoreEntities() {
    if (this.entities != null) return this.entities;else return [];
  }
  dataIsLoaded() {
    // Try to reduce the number of columns if some of them don't have values
    let data = this.getStoreEntities();
    if (data?.length > 0) {
      const toRemove = new Array();
      toRemove.push(...this.cols.map(value => value.field));
      let row = 0;
      while (toRemove.length > 0 && row < data.length) {
        for (let i = 0; i < toRemove.length; i++) {
          const fieldName = toRemove[i];
          if (data[row][fieldName] != null) {
            toRemove.splice(i, 1);
            i--;
          }
        }
        row++;
      }
      // Let's remove some columns
      if (toRemove.length > 0 && toRemove.length < this.cols.length) {
        for (let colPos = 0; colPos < this.cols.length; colPos++) {
          let colName = this.cols[colPos].field;
          if (toRemove.indexOf(colName) >= 0) {
            this.cols.splice(colPos, 1);
            for (let entry of this.colsMap.entries()) {
              if (entry[1] === colPos) {
                this.colsMap.delete(entry[0]);
                break;
              }
            }
          }
        }
      }
    }
  }
  customSort(event) {
    if (event.field != null && event.data != null) {
      this.modelMgr.sortValues(event.data, event.order, event.field);
    }
  }
}
ListEntityComponent.ɵfac = function ListEntityComponent_Factory(t) {
  return new (t || ListEntityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_5__.ComponentLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dontcode_core__WEBPACK_IMPORTED_MODULE_1__.DontCodeModelManager));
};
ListEntityComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ListEntityComponent,
  selectors: [["dontcode-list-entity"]],
  inputs: {
    selectedItem: "selectedItem",
    entities: "entities"
  },
  outputs: {
    selectedItemChange: "selectedItemChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 4,
  consts: [["styleClass", "p-datatable-striped", "responsiveLayout", "scroll", "selectionMode", "single", 3, "columns", "value", "selection", "customSort", "selectionChange", "sortFunction"], ["pTemplate", "header"], ["pTemplate", "body"], [3, "id", "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "id", "pSortableColumn"], [3, "field"], [3, "pSelectableRow"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [4, "ngTemplateOutlet"], [3, "pTooltip"]],
  template: function ListEntityComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "dtcde-dynamic");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p-table", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function ListEntityComponent_Template_p_table_selectionChange_1_listener($event) {
        return ctx.selectedItem = $event;
      })("selectionChange", function ListEntityComponent_Template_p_table_selectionChange_1_listener($event) {
        return ctx.selectionChange($event);
      })("sortFunction", function ListEntityComponent_Template_p_table_sortFunction_1_listener($event) {
        return ctx.customSort($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ListEntityComponent_ng_template_2_Template, 2, 1, "ng-template", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ListEntityComponent_ng_template_3_Template, 2, 2, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx.cols)("value", ctx.getStoreEntities())("selection", ctx.selectedItem)("customSort", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, primeng_table__WEBPACK_IMPORTED_MODULE_7__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_7__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_7__.SelectableRow, primeng_table__WEBPACK_IMPORTED_MODULE_7__.SortIcon, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.Tooltip, _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_10__.DynamicInsertPoint, _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_11__.BeautifierPipe]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ListEntityComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
    args: [{
      selector: 'dontcode-list-entity',
      template: "<dtcde-dynamic></dtcde-dynamic>\n<p-table [columns]=\"cols\" [value]=\"getStoreEntities()\"\n         styleClass=\"p-datatable-striped\" responsiveLayout=\"scroll\"\n         selectionMode=\"single\" [(selection)]=\"selectedItem\" (selectionChange)=\"selectionChange($event)\"\n         (sortFunction)=\"customSort($event)\" [customSort]=\"true\">\n  <ng-template pTemplate=\"header\" let-columns>\n    <tr>\n      <th id=\"header-{{col.header}}\" *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n        {{col.header}} <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n      </th>\n    </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n    <tr [pSelectableRow]=\"rowData\">\n      <td *ngFor=\"let col of columns\">\n        <ng-container *ngIf=\"col.component\">\n          <ng-container *ngTemplateOutlet=\"templateOf(col, rowData[col.field])\"></ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"!col.component\"><span pTooltip=\"{{rowData[col.field] | beautifier}}\">{{rowData[col.field] | beautifier : 50}}</span></ng-container>\n      </td>\n    </tr>\n  </ng-template>\n</p-table>\n"
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector
    }, {
      type: _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_5__.ComponentLoaderService,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_5__.ComponentLoaderService]
      }]
    }, {
      type: _dontcode_core__WEBPACK_IMPORTED_MODULE_1__.DontCodeModelManager
    }];
  }, {
    selectedItem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }],
    selectedItemChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
    }],
    entities: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();
class PrimeColumn {
  constructor(field, header, type) {
    this.field = field;
    this.header = header;
    this.type = type;
    this.component = null;
  }
}

/***/ }),

/***/ 5477:
/*!**************************************************************************************************!*\
  !*** ../../plugins/standard/dist/libs/std/esm2020/lib/preview/fields/basic-fields.component.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicFieldsComponent": () => (/* binding */ BasicFieldsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dontcode/plugin-common */ 561);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dontcode/plugin-common */ 1313);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4848);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/checkbox */ 8408);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputnumber */ 3763);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 1996);








const _c0 = ["INPUT"];
const _c1 = ["NUMERIC"];
const _c2 = ["CHECK"];
const _c3 = ["LIST_CHECK"];
function BasicFieldsComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r1.name)("formControlName", ctx_r1.name);
  }
}
function BasicFieldsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-inputNumber", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r3.name)("formControlName", ctx_r3.name)("showButtons", true);
  }
}
function BasicFieldsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-checkbox", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r5.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r5.name)("formControlName", ctx_r5.name)("binary", true);
  }
}
function BasicFieldsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-checkbox", 8);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true)("binary", true)("ngModel", ctx_r7.value);
  }
}
class BasicFieldsComponent extends _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_1__.AbstractDynamicComponent {
  constructor() {
    super(...arguments);
    this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, {
      updateOn: "blur"
    });
    this.isJson = false;
  }
  setForm(form) {
    super.setForm(form);
    this.form.registerControl(this.name, this.control);
  }
  providesTemplates(type) {
    if (this.type != type) {
      console.warn("BasicField Type is changed from " + this.type + " to " + type);
      this.type = type;
    }
    switch (type) {
      case 'Number':
        return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__.TemplateList(null, null, this.numericTemplate);
      case 'Boolean':
        return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__.TemplateList(this.listCheckTemplate, null, this.checkTemplate);
      default:
        return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__.TemplateList(null, null, this.inputTemplate);
    }
  }
  canProvide(type) {
    this.type = type;
    return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__.PossibleTemplateList(type === 'Boolean' ? true : false, false, true);
  }
  transformToFormGroupValue(val) {
    if (this.type === 'Text') {
      if (typeof val !== 'string') {
        this.isJson = true;
        return val != null ? JSON.stringify(val, null, 2) : val;
      }
    }
    return super.transformToFormGroupValue(val);
  }
  transformFromFormGroupValue(val) {
    if (this.isJson) {
      try {
        const ret = JSON.parse(val);
        return ret;
      } catch (error) {
        console.error("Cannot convert field with name " + this.name + " from text String to an object");
      }
    } else return val;
  }
}
BasicFieldsComponent.ɵfac = /* @__PURE__ */function () {
  let ɵBasicFieldsComponent_BaseFactory;
  return function BasicFieldsComponent_Factory(t) {
    return (ɵBasicFieldsComponent_BaseFactory || (ɵBasicFieldsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](BasicFieldsComponent)))(t || BasicFieldsComponent);
  };
}();
BasicFieldsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BasicFieldsComponent,
  selectors: [["plugins-basic-fields"]],
  viewQuery: function BasicFieldsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.numericTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.checkTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.listCheckTemplate = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 8,
  vars: 0,
  consts: [["INPUT", ""], ["NUMERIC", ""], ["CHECK", ""], ["LIST_CHECK", ""], [3, "formGroup"], ["pInputText", "", 3, "name", "formControlName"], [3, "name", "formControlName", "showButtons"], [3, "name", "formControlName", "binary"], [3, "readonly", "binary", "ngModel"]],
  template: function BasicFieldsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BasicFieldsComponent_ng_template_0_Template, 2, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BasicFieldsComponent_ng_template_2_Template, 2, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BasicFieldsComponent_ng_template_4_Template, 2, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BasicFieldsComponent_ng_template_6_Template, 1, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [primeng_checkbox__WEBPACK_IMPORTED_MODULE_4__.Checkbox, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_5__.InputNumber, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicFieldsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'plugins-basic-fields',
      template: "<ng-template #INPUT ><ng-container [formGroup]=\"form\"><input [name]=\"name\" [formControlName]=\"name\" pInputText /></ng-container></ng-template>\n<ng-template #NUMERIC ><ng-container [formGroup]=\"form\"><p-inputNumber [name]=\"name\" [formControlName]=\"name\" [showButtons]=\"true\"></p-inputNumber></ng-container></ng-template>\n<ng-template #CHECK ><ng-container [formGroup]=\"form\"><p-checkbox [name]=\"name\" [formControlName]=\"name\" [binary]=\"true\"></p-checkbox></ng-container></ng-template>\n<ng-template #LIST_CHECK><p-checkbox [readonly]=\"true\" [binary]=\"true\" [ngModel]=\"value\"></p-checkbox></ng-template>\n"
    }]
  }], null, {
    inputTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['INPUT']
    }],
    numericTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['NUMERIC']
    }],
    checkTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['CHECK']
    }],
    listCheckTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['LIST_CHECK']
    }]
  });
})();

/***/ }),

/***/ 1925:
/*!************************************************************************************************!*\
  !*** ../../plugins/standard/dist/libs/std/esm2020/lib/preview/money/euro-dollar.component.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EuroDollarComponent": () => (/* binding */ EuroDollarComponent)
/* harmony export */ });
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dontcode/plugin-common */ 561);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dontcode/plugin-common */ 1313);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4848);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputnumber */ 3763);







/**
 * EuroDollarComponent is just a specialized MoneyComponent to display only EUR or USD
 */
const _c0 = ["inlineView"];
const _c1 = ["fullEditView"];
function EuroDollarComponent_ng_template_0_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.localizedAmount(ctx_r4.value.amount));
  }
}
function EuroDollarComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, EuroDollarComponent_ng_template_0_span_0_Template, 2, 1, "span", 2);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.value == null ? null : ctx_r1.value.amount);
  }
}
function EuroDollarComponent_ng_template_2_ng_container_0_p_inputNumber_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-inputNumber", 7);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("currency", ctx_r6.value.currencyCode)("name", ctx_r6.name)("formControlName", ctx_r6.name);
  }
}
function EuroDollarComponent_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EuroDollarComponent_ng_template_2_ng_container_0_p_inputNumber_1_Template, 1, 3, "p-inputNumber", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r5.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.value == null ? null : ctx_r5.value.currencyCode);
  }
}
function EuroDollarComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, EuroDollarComponent_ng_template_2_ng_container_0_Template, 2, 2, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.form);
  }
}
class EuroDollarComponent extends _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__.AbstractDynamicComponent {
  constructor() {
    super();
    this.value = new _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.MoneyAmount();
    this.converter = Intl.NumberFormat(navigator.language, {
      style: 'currency',
      currency: 'EUR'
    });
  }
  providesTemplates(key) {
    switch (key) {
      case 'Euro':
      case 'Dollar':
        this.value.currencyCode = key === 'Euro' ? 'EUR' : 'USD';
        this.updateConverter();
        return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__.TemplateList(this.inlineView, null, this.fullEditView);
      default:
        return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__.TemplateList(null, null, null);
    }
  }
  setValue(val) {
    if (val == null) {
      val = new _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.MoneyAmount();
      val.currencyCode = this.value.currencyCode;
    } else {
      if (val.currencyCode != this.value.currencyCode && this.value.currencyCode != null) {
        console.warn("Setting currencyCode to " + val.currencyCode + " that is different from the component one (" + this.value.currencyCode + ")");
      }
    }
    super.setValue(val);
  }
  canProvide(key) {
    switch (key) {
      case 'Euro':
      case 'Dollar':
        this.value.currencyCode = key === 'Euro' ? 'EUR' : 'USD';
        this.updateConverter();
        return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__.PossibleTemplateList(true, false, true);
    }
    return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__.PossibleTemplateList(false, false, false);
  }
  updateConverter() {
    if (this.value?.currencyCode != null) this.converter = Intl.NumberFormat(navigator.language, {
      style: 'currency',
      currency: this.value.currencyCode
    });
  }
  localizedAmount(amount) {
    if (amount == null) return this.value.currencyCode ?? "";
    const ret = this.converter.format(amount);
    /*const chars=[];
    for (let i=0;i<ret.length;i++) {
      chars.push(ret.charCodeAt(i));
    }
    console.log("Generated:",ret, ...chars);
    */
    return ret;
  }
  transformToFormGroupValue(val) {
    if (val?.amount == null) {
      return null;
    } else {
      return val.amount;
    }
  }
  transformFromFormGroupValue(val) {
    this.value.amount = val;
    return this.value;
  }
}
EuroDollarComponent.ɵfac = function EuroDollarComponent_Factory(t) {
  return new (t || EuroDollarComponent)();
};
EuroDollarComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: EuroDollarComponent,
  selectors: [["dontcode-fields-eurodollar"]],
  viewQuery: function EuroDollarComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inlineView = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fullEditView = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 0,
  consts: [["inlineView", ""], ["fullEditView", ""], ["class", "numeric", 4, "ngIf"], [1, "numeric"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["mode", "currency", 3, "currency", "name", "formControlName", 4, "ngIf"], ["mode", "currency", 3, "currency", "name", "formControlName"]],
  template: function EuroDollarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, EuroDollarComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EuroDollarComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_6__.InputNumber],
  styles: [".numeric[_ngcontent-%COMP%]{text-align:end}"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EuroDollarComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'dontcode-fields-eurodollar',
      template: "<ng-template #inlineView><span *ngIf=\"value?.amount\" class=\"numeric\">{{localizedAmount(value.amount)}}</span></ng-template>\n<ng-template #fullEditView>\n  <ng-container *ngIf=\"form\" [formGroup]=\"form!\">\n    <p-inputNumber *ngIf=\"value?.currencyCode\" mode=\"currency\" [currency]=\"value.currencyCode!\" [name]=\"name\" [formControlName]=\"name\"></p-inputNumber>\n  </ng-container>\n</ng-template>\n",
      styles: [".numeric{text-align:end}\n"]
    }]
  }], function () {
    return [];
  }, {
    inlineView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['inlineView', {
        static: true
      }]
    }],
    fullEditView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['fullEditView', {
        static: true
      }]
    }]
  });
})();

/***/ }),

/***/ 9708:
/*!******************************************************************************************!*\
  !*** ../../plugins/standard/dist/libs/std/esm2020/lib/preview/money/money.component.mjs ***!
  \******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoneyComponent": () => (/* binding */ MoneyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dontcode/plugin-common */ 6093);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dontcode/plugin-common */ 1313);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4848);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @dontcode/plugin-common */ 2004);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputnumber */ 3763);









/**
 * Display or edit a country value
 */
const _c0 = ["inlineView"];
const _c1 = ["fullEditView"];
function MoneyComponent_ng_template_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.localizedAmount(ctx_r4.value.amount));
  }
}
function MoneyComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MoneyComponent_ng_template_1_span_0_Template, 2, 1, "span", 2);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.value == null ? null : ctx_r1.value.currencyCode);
  }
}
function MoneyComponent_ng_template_3_ng_container_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function MoneyComponent_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "p-inputNumber", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MoneyComponent_ng_template_3_ng_container_0_ng_container_5_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r5.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", ctx_r5.name)("minFractionDigits", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.subFieldFullEditTemplate("currencyCode"));
  }
}
function MoneyComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MoneyComponent_ng_template_3_ng_container_0_Template, 6, 4, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.form);
  }
}
class MoneyComponent extends _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__.AbstractDynamicLoaderComponent {
  constructor(loaderService, injector, ref) {
    super(loaderService, injector, ref);
    this.value = new _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.MoneyAmount();
    this.converter = null;
    // We use Dont-code framework to find the component that will manage the currency selection
    this.defineSubField('currencyCode', 'Currency');
  }
  providesTemplates(key) {
    return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__.TemplateList(this.inlineView, null, this.fullEditView);
  }
  canProvide(key) {
    return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__.PossibleTemplateList(true, false, true);
  }
  createAndRegisterFormControls() {
    this.form.registerControl('amount', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, {
      updateOn: "blur"
    }));
  }
  loadSubField(subField, type, subValue) {
    //    console.debug ("Loading SubField ", subField);
    return super.loadSubField(subField, type, subValue);
  }
  getAmountSafe() {
    return this.value?.amount;
  }
  setValue(val) {
    if (val == null) {
      val = new _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.MoneyAmount();
    }
    super.setValue(val);
    this.updateConverter();
  }
  updateConverter() {
    if (this.value?.currencyCode != null) this.converter = Intl.NumberFormat(navigator.language, {
      style: 'currency',
      currency: this.value.currencyCode
    });else this.converter = null;
  }
  localizedAmount(amount) {
    if (amount == null) return this.value?.currencyCode ?? "";
    if (this.converter != null) return this.converter?.format(amount);else return amount.toString();
  }
  subFieldFullEditTemplate(subField) {
    const ret = super.subFieldFullEditTemplate(subField);
    return ret;
  }
}
MoneyComponent.ɵfac = function MoneyComponent_Factory(t) {
  return new (t || MoneyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_5__.ComponentLoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
};
MoneyComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MoneyComponent,
  selectors: [["dontcode-fields-money"]],
  viewQuery: function MoneyComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inlineView = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fullEditView = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 5,
  vars: 0,
  consts: [["inlineView", ""], ["fullEditView", ""], ["class", "numeric", 4, "ngIf"], [1, "numeric"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "grid"], [1, "col-12", "md:col-8"], ["formControlName", "amount", 3, "name", "minFractionDigits"], [1, "col-12", "md:col-4"], [4, "ngTemplateOutlet"]],
  template: function MoneyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "dtcde-dynamic");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MoneyComponent_ng_template_1_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MoneyComponent_ng_template_3_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__.DynamicInsertPoint, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_7__.InputNumber]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MoneyComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'dontcode-fields-money',
      template: "<dtcde-dynamic></dtcde-dynamic>\n<ng-template #inlineView><span *ngIf=\"value?.currencyCode\" class=\"numeric\">{{localizedAmount(value.amount)}}</span></ng-template>\n<ng-template #fullEditView>\n  <ng-container *ngIf=\"form\" [formGroup]=\"form\">\n    <div class=\"grid\">\n      <div class=\"col-12 md:col-8\">\n        <p-inputNumber [name]=\"this.name\" formControlName=\"amount\" [minFractionDigits]=\"2\"></p-inputNumber>\n      </div>\n      <div class=\"col-12 md:col-4\">\n        <ng-container *ngTemplateOutlet=\"subFieldFullEditTemplate('currencyCode')\"></ng-container>\n      </div>\n    </div>\n  </ng-container>\n</ng-template>\n"
    }]
  }], function () {
    return [{
      type: _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_5__.ComponentLoaderService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }];
  }, {
    inlineView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['inlineView', {
        static: true
      }]
    }],
    fullEditView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['fullEditView', {
        static: true
      }]
    }]
  });
})();

/***/ }),

/***/ 7846:
/*!********************************************************************************************!*\
  !*** ../../plugins/standard/dist/libs/std/esm2020/lib/preview/rating/rating.component.mjs ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingComponent": () => (/* binding */ RatingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dontcode/plugin-common */ 561);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dontcode/plugin-common */ 1313);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4848);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/rating */ 9057);






/**
 * Display or edit a country value
 */
const _c0 = ["inlineView"];
const _c1 = ["fullEditView"];
function RatingComponent_ng_template_0_p_rating_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "p-rating", 3);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true)("ngModel", ctx_r4.value)("cancel", false);
  }
}
function RatingComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RatingComponent_ng_template_0_p_rating_0_Template, 1, 3, "p-rating", 2);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.value);
  }
}
function RatingComponent_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-rating", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r5.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", false)("formControlName", ctx_r5.name);
  }
}
function RatingComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RatingComponent_ng_template_2_ng_container_0_Template, 2, 3, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.form);
  }
}
class RatingComponent extends _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_1__.AbstractDynamicComponent {
  providesTemplates() {
    return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__.TemplateList(this.inlineView, null, this.fullEditView);
  }
  canProvide(key) {
    return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__.PossibleTemplateList(true, false, true);
  }
}
RatingComponent.ɵfac = /* @__PURE__ */function () {
  let ɵRatingComponent_BaseFactory;
  return function RatingComponent_Factory(t) {
    return (ɵRatingComponent_BaseFactory || (ɵRatingComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](RatingComponent)))(t || RatingComponent);
  };
}();
RatingComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RatingComponent,
  selectors: [["dontcode-fields-rating"]],
  viewQuery: function RatingComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inlineView = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fullEditView = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 0,
  consts: [["inlineView", ""], ["fullEditView", ""], ["iconOnClass", "pi pi-star-fill", "iconOffClass", "pi pi-star", 3, "readonly", "ngModel", "cancel", 4, "ngIf"], ["iconOnClass", "pi pi-star-fill", "iconOffClass", "pi pi-star", 3, "readonly", "ngModel", "cancel"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["iconOnClass", "pi pi-star-fill", "iconOffClass", "pi pi-star", 3, "readonly", "formControlName"]],
  template: function RatingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RatingComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RatingComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, primeng_rating__WEBPACK_IMPORTED_MODULE_5__.Rating]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'dontcode-fields-rating',
      template: "<ng-template #inlineView ><p-rating *ngIf=\"value\" [readonly]=\"true\" [ngModel]=\"value\" [cancel]=\"false\" iconOnClass=\"pi pi-star-fill\" iconOffClass=\"pi pi-star\"></p-rating></ng-template>\n<ng-template #fullEditView>\n  <ng-container *ngIf=\"form\" [formGroup]=\"form\">\n    <p-rating [readonly]=\"false\" [formControlName]=\"name\" iconOnClass=\"pi pi-star-fill\" iconOffClass=\"pi pi-star\"></p-rating>\n  </ng-container>\n</ng-template>\n"
    }]
  }], null, {
    inlineView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['inlineView', {
        static: true
      }]
    }],
    fullEditView: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['fullEditView', {
        static: true
      }]
    }]
  });
})();

/***/ }),

/***/ 9326:
/*!***********************************************************************************************!*\
  !*** ../../plugins/standard/dist/libs/std/esm2020/lib/preview/time/time-fields.component.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeFieldsComponent": () => (/* binding */ TimeFieldsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dontcode/plugin-common */ 561);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dontcode/plugin-common */ 1313);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4848);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/calendar */ 4017);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tooltip */ 3797);






const _c0 = ["EDIT_DATE"];
const _c1 = ["READ_DATE"];
const _c2 = ["EDIT_DATE_TIME"];
const _c3 = ["READ_DATE_TIME"];
const _c4 = ["EDIT_TIME"];
const _c5 = ["READ_TIME"];
function TimeFieldsComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-calendar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function TimeFieldsComponent_ng_template_0_Template_p_calendar_onSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.dateSelected(ctx_r12.form, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r1.name)("formControlName", ctx_r1.name);
  }
}
function TimeFieldsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-calendar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function TimeFieldsComponent_ng_template_2_Template_p_calendar_onSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.dateSelected(ctx_r14.form, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r3.name)("formControlName", ctx_r3.name)("showTime", true);
  }
}
function TimeFieldsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-calendar", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function TimeFieldsComponent_ng_template_4_Template_p_calendar_onSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.dateSelected(ctx_r16.form, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r5.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r5.name)("formControlName", ctx_r5.name)("timeOnly", true);
  }
}
function TimeFieldsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pTooltip", ctx_r7.localizeLongDate(ctx_r7.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.localizeShortDate(ctx_r7.value));
  }
}
function TimeFieldsComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pTooltip", ctx_r9.localizeLongDate(ctx_r9.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.localizeShortDate(ctx_r9.value));
  }
}
function TimeFieldsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pTooltip", ctx_r11.localizeLongDate(ctx_r11.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.localizeShortDate(ctx_r11.value));
  }
}
class TimeFieldsComponent extends _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_1__.AbstractDynamicComponent {
  constructor() {
    super(...arguments);
    this.longConverter = Intl.DateTimeFormat(navigator.language, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'long'
    });
    this.shortConverter = Intl.DateTimeFormat(navigator.language, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    });
  }
  providesTemplates(type) {
    this.updateConverters(type);
    switch (type) {
      case 'Date':
        return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__.TemplateList(this.readDateTemplate, null, this.editDateTemplate);
      case 'Date & Time':
        return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__.TemplateList(this.readDateTimeTemplate, null, this.editDateTimeTemplate);
      case 'Time':
      default:
        return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__.TemplateList(this.readTimeTemplate, null, this.editTimeTemplate);
    }
  }
  updateConverters(type) {
    switch (type) {
      case 'Date':
        this.longConverter = Intl.DateTimeFormat(navigator.language, {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        });
        this.shortConverter = Intl.DateTimeFormat(navigator.language, {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        });
        break;
      case 'Date & Time':
        this.longConverter = Intl.DateTimeFormat(navigator.language, {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'long'
        });
        this.shortConverter = Intl.DateTimeFormat(navigator.language, {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short'
        });
        break;
      case 'Time':
      default:
        this.longConverter = Intl.DateTimeFormat(navigator.language, {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'long'
        });
        this.shortConverter = Intl.DateTimeFormat(navigator.language, {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          timeZoneName: 'short'
        });
    }
  }
  localizeLongDate(value) {
    if (value != null && Number.isNaN(value.valueOf())) return "";
    return this.longConverter.format(value);
  }
  localizeShortDate(value) {
    if (value != null && Number.isNaN(value.valueOf())) return "";
    return this.shortConverter.format(value);
  }
  canProvide(type) {
    switch (type) {
      case 'Date':
      case 'Date & Time':
      case 'Time':
        return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__.PossibleTemplateList(true, false, true);
      default:
        return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__.PossibleTemplateList(false, false, false);
    }
  }
  /**
   * By default, when you select a date in the dropdown, it won't update the reactive form. So we do it manually
   * @param form
   * @param event
   */
  dateSelected(form, event) {
    // One have to trigger onBlur event as it's the only one listened to by the form...
    console.log('Selection:', event);
    const value = {};
    const control = form.get(this.name);
    if (control != null) {
      control.setValue(event);
      control.markAsDirty();
    } else {
      console.error("Cannot set date of unknown form control with name " + this.name);
    }
  }
}
TimeFieldsComponent.ɵfac = /* @__PURE__ */function () {
  let ɵTimeFieldsComponent_BaseFactory;
  return function TimeFieldsComponent_Factory(t) {
    return (ɵTimeFieldsComponent_BaseFactory || (ɵTimeFieldsComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](TimeFieldsComponent)))(t || TimeFieldsComponent);
  };
}();
TimeFieldsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TimeFieldsComponent,
  selectors: [["plugins-time-fields"]],
  viewQuery: function TimeFieldsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editDateTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.readDateTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editDateTimeTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.readDateTimeTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.editTimeTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.readTimeTemplate = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 12,
  vars: 0,
  consts: [["EDIT_DATE", ""], ["EDIT_DATE_TIME", ""], ["EDIT_TIME", ""], ["READ_DATE", ""], ["READ_DATE_TIME", ""], ["READ_TIME", ""], [3, "formGroup"], [3, "name", "formControlName", "onSelect"], [3, "name", "formControlName", "showTime", "onSelect"], [3, "name", "formControlName", "timeOnly", "onSelect"], [3, "pTooltip"]],
  template: function TimeFieldsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TimeFieldsComponent_ng_template_0_Template, 2, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TimeFieldsComponent_ng_template_2_Template, 2, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TimeFieldsComponent_ng_template_4_Template, 2, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TimeFieldsComponent_ng_template_6_Template, 2, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TimeFieldsComponent_ng_template_8_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TimeFieldsComponent_ng_template_10_Template, 2, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, primeng_calendar__WEBPACK_IMPORTED_MODULE_4__.Calendar, primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__.Tooltip]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeFieldsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'plugins-time-fields',
      template: "<ng-template #EDIT_DATE><ng-container [formGroup]=\"form\"><p-calendar [name]=\"name\" [formControlName]=\"name\" (onSelect)=\"dateSelected(form, $event)\"></p-calendar></ng-container></ng-template>\n<ng-template #EDIT_DATE_TIME><ng-container [formGroup]=\"form\"><p-calendar [name]=\"name\" [formControlName]=\"name\" (onSelect)=\"dateSelected(form, $event)\" [showTime]=\"true\"></p-calendar></ng-container></ng-template>\n<ng-template #EDIT_TIME><ng-container [formGroup]=\"form\"><p-calendar [name]=\"name\" [formControlName]=\"name\" (onSelect)=\"dateSelected(form, $event)\" [timeOnly]=\"true\"></p-calendar></ng-container></ng-template>\n<ng-template #READ_DATE><span pTooltip=\"{{this.localizeLongDate(value)}}\">{{this.localizeShortDate(value)}}</span></ng-template>\n<ng-template #READ_DATE_TIME><span pTooltip=\"{{this.localizeLongDate(value)}}\">{{this.localizeShortDate(value)}}</span></ng-template>\n<ng-template #READ_TIME><span pTooltip=\"{{this.localizeLongDate(value)}}\">{{this.localizeShortDate(value)}}</span></ng-template>\n"
    }]
  }], null, {
    editDateTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['EDIT_DATE', {
        static: true
      }]
    }],
    readDateTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['READ_DATE', {
        static: true
      }]
    }],
    editDateTimeTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['EDIT_DATE_TIME', {
        static: true
      }]
    }],
    readDateTimeTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['READ_DATE_TIME', {
        static: true
      }]
    }],
    editTimeTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['EDIT_TIME', {
        static: true
      }]
    }],
    readTimeTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['READ_TIME', {
        static: true
      }]
    }]
  });
})();

/***/ }),

/***/ 4861:
/*!*********************************************************************************************!*\
  !*** ../../plugins/standard/dist/libs/std/esm2020/lib/preview/web/web-fields.component.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebFieldsComponent": () => (/* binding */ WebFieldsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dontcode/plugin-common */ 561);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dontcode/plugin-common */ 1313);
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 224);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 9305);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/fileupload */ 1556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 7651);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4848);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 1996);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tooltip */ 3797);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/confirmdialog */ 2600);















const _c0 = ["EDIT_URL"];
const _c1 = ["READ_URL"];
const _c2 = ["EDIT_IMAGE"];
const _c3 = ["READ_IMAGE"];
function WebFieldsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", ctx_r1.name)("formControlName", ctx_r1.name);
  }
}
function WebFieldsComponent_ng_template_3_p_fileUpload_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p-fileUpload", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("uploadHandler", function WebFieldsComponent_ng_template_3_p_fileUpload_3_Template_p_fileUpload_uploadHandler_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.uploadImage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", ctx_r8.name + "-img")("auto", true)("multiple", false)("customUpload", true);
  }
}
function WebFieldsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, WebFieldsComponent_ng_template_3_p_fileUpload_3_Template, 1, 4, "p-fileUpload", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r3.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.supportsImageUpload());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", ctx_r3.name)("formControlName", ctx_r3.name);
  }
}
function WebFieldsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pTooltip", ctx_r5.value)("href", ctx_r5.value, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.calculateUrl(ctx_r5.value));
  }
}
function WebFieldsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 13);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r7.value, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
class WebFieldsComponent extends _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_2__.AbstractDynamicComponent {
  constructor(confirm, storeMgr, ref) {
    super();
    this.confirm = confirm;
    this.storeMgr = storeMgr;
    this.ref = ref;
    // Hack for when DI doesn't find the storemanager due to mfe stuff
    if (this.storeMgr == null) {
      this.storeMgr = _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.dtcde.getStoreManager();
      console.warn("DontCodeStoreManager not found by Angular's Injector");
    }
  }
  providesTemplates(type) {
    switch (type) {
      case 'Website (url)':
        return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__.TemplateList(this.readUrlTemplate, null, this.editUrlTemplate);
      case 'Image':
      default:
        return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__.TemplateList(this.readImageTemplate, null, this.editImageTemplate);
    }
  }
  canProvide(type) {
    switch (type) {
      case 'Website (url)':
      case 'Image':
        return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__.PossibleTemplateList(true, false, true);
      default:
        return new _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_3__.PossibleTemplateList(false, false, false);
    }
  }
  calculateUrl(url) {
    if (!url) return url;
    if (url.includes('//')) {
      url = url.substring(url.indexOf('//') + 2);
    }
    if (url.length > 20) return url.substring(0, 17) + '...';else return url;
  }
  supportsImageUpload() {
    return this.storeMgr.canStoreDocument(this.parentPosition || undefined);
  }
  uploadImage(event) {
    /*  this.confirm.confirm({
        header:'Confirm',
        message: 'Uploading:'+JSON.stringify(event, null, 4),
        accept: ()=>{*/
    console.info("Uploading image", event);
    this.form.get(this.name)?.setValue(undefined);
    this.value = null;
    this.subscriptions.add(this.storeMgr.storeDocuments(event.files, this.parentPosition || undefined).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(loaded => {
      console.debug("File uploaded:", loaded.documentId);
      this.form.get(this.name)?.setValue(loaded.documentId);
      this.value = loaded.documentId;
      return loaded;
    })).subscribe({
      /*next: (value) => {
        this.confirm.confirm({
          header: 'Uploaded',
          message: 'Uploaded:'+JSON.stringify(value, null, 4)
        });
      },*/
      error: error => {
        this.fileUpload.clear();
        this.ref.markForCheck();
        this.ref.detectChanges();
        this.confirm.confirm({
          header: 'Error',
          message: 'Error:' + JSON.stringify(error, null, 4)
        });
      },
      complete: () => {
        this.fileUpload.clear();
        this.ref.markForCheck();
        this.ref.detectChanges();
      }
    }));
    //     }
    //   });
  }
}
WebFieldsComponent.ɵfac = function WebFieldsComponent_Factory(t) {
  return new (t || WebFieldsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeStoreManager, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
};
WebFieldsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: WebFieldsComponent,
  selectors: [["plugins-web-fields"]],
  viewQuery: function WebFieldsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__.FileUpload, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.editUrlTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.readUrlTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.editImageTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.readImageTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fileUpload = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_5__.ConfirmationService]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  decls: 9,
  vars: 0,
  consts: [["header", "Error", "icon", "pi pi-exclamation-triangle"], ["EDIT_URL", ""], ["EDIT_IMAGE", ""], ["READ_URL", ""], ["READ_IMAGE", ""], [3, "formGroup"], ["pInputText", "", 1, "w-full", 3, "name", "formControlName"], [1, "grid"], [1, "col-2"], ["mode", "basic", "chooseLabel", "Browse", "accept", "image/*", 3, "name", "auto", "multiple", "customUpload", "uploadHandler", 4, "ngIf"], [1, "col-10"], ["mode", "basic", "chooseLabel", "Browse", "accept", "image/*", 3, "name", "auto", "multiple", "customUpload", "uploadHandler"], ["target", "_blank", 3, "pTooltip", "href"], [1, "inline-image", 3, "src"]],
  template: function WebFieldsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-confirmDialog", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WebFieldsComponent_ng_template_1_Template, 2, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, WebFieldsComponent_ng_template_3_Template, 6, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, WebFieldsComponent_ng_template_5_Template, 2, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, WebFieldsComponent_ng_template_7_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__.Tooltip, primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__.FileUpload, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_11__.ConfirmDialog],
  styles: [".inline-image[_ngcontent-%COMP%]{max-height:5em;max-width:10em}.tip-image[_ngcontent-%COMP%]{max-height:50em;max-width:100em}"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WebFieldsComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'plugins-web-fields',
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_5__.ConfirmationService],
      template: "<p-confirmDialog header=\"Error\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\n<ng-template #EDIT_URL><ng-container [formGroup]=\"form\"><input [name]=\"name\" [formControlName]=\"name\" pInputText class=\"w-full\"/></ng-container></ng-template>\n<ng-template #EDIT_IMAGE>\n  <ng-container [formGroup]=\"form\">\n    <div class=\"grid\">\n      <div class=\"col-2\">\n        <p-fileUpload *ngIf=\"supportsImageUpload()\" mode=\"basic\" chooseLabel=\"Browse\" [name]=\"name+'-img'\" [auto]=\"true\" [multiple]=\"false\" accept=\"image/*\" [customUpload]=\"true\" (uploadHandler)=\"uploadImage ($event)\"></p-fileUpload>\n      </div>\n      <div class=\"col-10\">\n        <input [name]=\"name\" [formControlName]=\"name\" pInputText class=\"w-full\" />\n      </div>\n    </div>\n  </ng-container>\n</ng-template>\n<ng-template #READ_URL><a [pTooltip]=\"value\" [href]=\"value\" target=\"_blank\">{{calculateUrl (value)}}</a></ng-template>\n<ng-template #READ_IMAGE><img class=\"inline-image\" [src]=\"value\" /></ng-template>\n",
      styles: [".inline-image{max-height:5em;max-width:10em}.tip-image{max-height:50em;max-width:100em}\n"]
    }]
  }], function () {
    return [{
      type: primeng_api__WEBPACK_IMPORTED_MODULE_5__.ConfirmationService
    }, {
      type: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeStoreManager,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }];
  }, {
    editUrlTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['EDIT_URL', {
        static: true
      }]
    }],
    readUrlTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['READ_URL', {
        static: true
      }]
    }],
    editImageTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['EDIT_IMAGE', {
        static: true
      }]
    }],
    readImageTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: ['READ_IMAGE', {
        static: true
      }]
    }],
    fileUpload: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
      args: [primeng_fileupload__WEBPACK_IMPORTED_MODULE_6__.FileUpload]
    }]
  });
})();

/***/ }),

/***/ 6317:
/*!***********************************************************************************************!*\
  !*** ../../plugins/standard/dist/libs/std/esm2020/lib/store/dont-code-api-store-provider.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DontCodeApiStoreProvider": () => (/* binding */ DontCodeApiStoreProvider)
/* harmony export */ });
/* harmony import */ var _dontcode_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dontcode/core */ 8612);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2320);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 636);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1382);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8451);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 8988);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 224);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9048);
/* harmony import */ var _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @dontcode/plugin-common */ 3760);









/**
 * A Store Provider that uses the DontCode API to store / read application data
 */
class DontCodeApiStoreProvider extends _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.AbstractDontCodeStoreProvider {
  constructor(http, modelMgr, configService) {
    super();
    this.http = http;
    this.modelMgr = modelMgr;
    this.configService = configService;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
    this.apiUrl = 'https://test.dont-code.net/data';
    this.docUrl = 'https://test.dont-code.net/documents';
    this.updateConfig(this.configService.getConfig());
    this.subscriptions.add(this.configService.getUpdates().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(updatedConfig => {
      this.updateConfig(updatedConfig);
    })).subscribe());
    // Hack for when DI cannot provide the ModelManager due to some weird stuff
    if (this.modelMgr == null) {
      this.modelMgr = _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.dtcde.getModelManager();
      console.warn("DontCodeModelManager not found by Angular's DI");
    }
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  updateConfig(newConfig) {
    if (newConfig.storeApiUrl != null) this.apiUrl = newConfig.storeApiUrl;
    if (newConfig.documentApiUrl != null) this.docUrl = newConfig.documentApiUrl;
  }
  storeEntity(position, data) {
    const entity = this.modelMgr.findAtPosition(position, false);
    if (entity === null) {
      return Promise.reject("No entity found at position " + position);
    }
    const id = data._id;
    // Reconverts dates or Ids
    const specialFields = _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.StoreProviderHelper.findSpecialFields(position, entity);
    _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.StoreProviderHelper.cleanUpDataBeforeSaving([data], specialFields);
    if (id != undefined) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.lastValueFrom)(this.http.put(this.apiUrl + '/' + entity.name + '/' + id, data, {
        observe: "body",
        responseType: "json"
      }));
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.lastValueFrom)(this.http.post(this.apiUrl + '/' + entity.name, data, {
        observe: "body",
        responseType: "json"
      }));
    }
  }
  loadEntity(position, key) {
    const entity = this.modelMgr.findAtPosition(position, false);
    if (entity === null) {
      return Promise.reject("No entity found at position " + position);
    }
    const obs = this.http.get(this.apiUrl + '/' + entity.name + '/' + key, {
      observe: "body",
      responseType: "json"
    });
    const specialFields = _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.StoreProviderHelper.findSpecialFields(position, entity);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.lastValueFrom)(obs).then(value => {
      _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.StoreProviderHelper.cleanUpLoadedData([value], specialFields);
      return value;
    });
  }
  deleteEntity(position, key) {
    const entity = this.modelMgr.findAtPosition(position, false);
    if (entity === null) {
      return Promise.reject("No entity found at position " + position);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.lastValueFrom)(this.http.delete(this.apiUrl + '/' + entity.name + '/' + key, {
      observe: "body",
      responseType: "json"
    })).then(value => {
      return true;
    });
  }
  searchEntities(position, ...criteria) {
    const entity = this.modelMgr.findAtPosition(position, false);
    if (entity === null) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error("No entity found at position " + position));
    }
    const specialFields = _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.StoreProviderHelper.findSpecialFields(position, entity);
    return this.http.get(this.apiUrl + '/' + entity.name, {
      observe: "body",
      responseType: "json"
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(value => {
      _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.StoreProviderHelper.cleanUpLoadedData(value, specialFields);
      return value;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(value => {
      return _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.StoreProviderHelper.applyFilters(value, ...criteria);
    }));
  }
  canStoreDocument(position) {
    return true;
  }
  storeDocuments(toStore, position) {
    const myFormData = new FormData();
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    let count = 0;
    // store files details into formdata
    toStore.forEach(file => {
      myFormData.append('document#' + count, file);
      count++;
    });
    //HTTP Angular service, which will send call to Laravel API With headers and myformdata
    return this.http.post(this.docUrl, myFormData, {
      headers: headers
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeAll)());
  }
}
DontCodeApiStoreProvider.ɵfac = function DontCodeApiStoreProvider_Factory(t) {
  return new (t || DontCodeApiStoreProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModelManager, 8), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_8__.CommonConfigService));
};
DontCodeApiStoreProvider.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: DontCodeApiStoreProvider,
  factory: DontCodeApiStoreProvider.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](DontCodeApiStoreProvider, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
    }, {
      type: _dontcode_core__WEBPACK_IMPORTED_MODULE_0__.DontCodeModelManager,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Optional
      }]
    }, {
      type: _dontcode_plugin_common__WEBPACK_IMPORTED_MODULE_8__.CommonConfigService
    }];
  }, null);
})();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(2531)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map