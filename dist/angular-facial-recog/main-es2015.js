(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _examcomplete_examcomplete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examcomplete/examcomplete.component */ "./src/app/examcomplete/examcomplete.component.ts");
/* harmony import */ var _exammenu_exammenu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exammenu/exammenu.component */ "./src/app/exammenu/exammenu.component.ts");
/* harmony import */ var _exampage_exampage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exampage/exampage.component */ "./src/app/exampage/exampage.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _invpage_invpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./invpage/invpage.component */ "./src/app/invpage/invpage.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");











const routes = [
    { path: 'examcomplete', component: _examcomplete_examcomplete_component__WEBPACK_IMPORTED_MODULE_3__["ExamcompleteComponent"] },
    { path: 'exammenu', component: _exammenu_exammenu_component__WEBPACK_IMPORTED_MODULE_4__["ExammenuComponent"] },
    { path: 'exampage', component: _exampage_exampage_component__WEBPACK_IMPORTED_MODULE_5__["ExampageComponent"] },
    { path: 'invpage', component: _invpage_invpage_component__WEBPACK_IMPORTED_MODULE_7__["InvpageComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"] },
    { path: 'app', component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
    { path: '', pathMatch: 'full', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                useHash: false
            })],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        useHash: false
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'angular-facial-recog';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _exammenu_exammenu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exammenu/exammenu.component */ "./src/app/exammenu/exammenu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _exampage_exampage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exampage/exampage.component */ "./src/app/exampage/exampage.component.ts");
/* harmony import */ var _examcomplete_examcomplete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examcomplete/examcomplete.component */ "./src/app/examcomplete/examcomplete.component.ts");
/* harmony import */ var _invpage_invpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./invpage/invpage.component */ "./src/app/invpage/invpage.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/__ivy_ngcc__/fesm2015/ngx-webcam.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            ngx_webcam__WEBPACK_IMPORTED_MODULE_10__["WebcamModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _exammenu_exammenu_component__WEBPACK_IMPORTED_MODULE_3__["ExammenuComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _exampage_exampage_component__WEBPACK_IMPORTED_MODULE_5__["ExampageComponent"],
        _examcomplete_examcomplete_component__WEBPACK_IMPORTED_MODULE_6__["ExamcompleteComponent"],
        _invpage_invpage_component__WEBPACK_IMPORTED_MODULE_7__["InvpageComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        ngx_webcam__WEBPACK_IMPORTED_MODULE_10__["WebcamModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _exammenu_exammenu_component__WEBPACK_IMPORTED_MODULE_3__["ExammenuComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _exampage_exampage_component__WEBPACK_IMPORTED_MODULE_5__["ExampageComponent"],
                    _examcomplete_examcomplete_component__WEBPACK_IMPORTED_MODULE_6__["ExamcompleteComponent"],
                    _invpage_invpage_component__WEBPACK_IMPORTED_MODULE_7__["InvpageComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    ngx_webcam__WEBPACK_IMPORTED_MODULE_10__["WebcamModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/examcomplete/examcomplete.component.ts":
/*!********************************************************!*\
  !*** ./src/app/examcomplete/examcomplete.component.ts ***!
  \********************************************************/
/*! exports provided: ExamcompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamcompleteComponent", function() { return ExamcompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");




class ExamcompleteComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        var data = JSON.stringify({ "canonicalId": "HarryPotter", "claims": [{ "key": "nam", "value": "HarryPotter" }, { "key": "dgr", "value": "Knowledge of Magic" }, { "key": "rnk", "value": "A1" }, { "key": "iss", "value": "Ministry of Magic" }] });
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });
        xhr.open("POST", "http://44.233.202.250:8080/v1/verifiableCredential");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Accept", "text/plain");
        xhr.send(data);
    }
}
ExamcompleteComponent.ɵfac = function ExamcompleteComponent_Factory(t) { return new (t || ExamcompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ExamcompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamcompleteComponent, selectors: [["app-examcomplete"]], decls: 5, vars: 0, consts: [[1, "container-fluid", "m-0", "p-0"], [1, "row"], [1, "col-sm-12"], ["src", "assets/CertificateOfMagic.pdf", "width", "100%", "height", "800px", "type", "application/pdf"]], template: function ExamcompleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "embed", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1jb21wbGV0ZS9leGFtY29tcGxldGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamcompleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-examcomplete',
                templateUrl: './examcomplete.component.html',
                styleUrls: ['./examcomplete.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/exammenu/exammenu.component.ts":
/*!************************************************!*\
  !*** ./src/app/exammenu/exammenu.component.ts ***!
  \************************************************/
/*! exports provided: ExammenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExammenuComponent", function() { return ExammenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class ExammenuComponent {
    constructor(router) {
        this.router = router;
    }
    startExam() {
        this.router.navigate(['exampage']);
    }
}
ExammenuComponent.ɵfac = function ExammenuComponent_Factory(t) { return new (t || ExammenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ExammenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExammenuComponent, selectors: [["app-exammenu"]], decls: 18, vars: 0, consts: [["type", "radio", "id", "radio1", "name", "radios", "checked", ""], ["for", "radio1"], ["type", "radio", "id", "radio2", "name", "radios"], ["for", "radio2"], ["type", "radio", "id", "radio3", "name", "radios"], ["for", "radio3"], [3, "click"]], template: function ExammenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Please select your exam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Introduction to Myths and Magic Part 1 : Final Exam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "The general knowledge exam of magic and the strange world");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Advance study : Potion Masterclass Exam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExammenuComponent_Template_button_click_16_listener() { return ctx.startExam(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto:400,300);\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  height: 100%;\n  font-family: Roboto, san-serif;\n  font-weight: 300;\n  background-color: #f5f6f7;\n}\n\nform[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100;\n  left: 20%;\n  width: 460px;\n  transform: translateX(-50%);\n  margin: 2rem 0;\n  z-index: 1;\n}\nfieldset[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  padding: 0;\n  border: none;\n}\nlegend[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\nlegend[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.5rem;\n}\ninput[type=text][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.5rem;\n  width: 100%;\n  background-color: white;\n  border-radius: 0.25rem;\n  border: 1px solid #e5e5e5;\n  outline: none;\n  \n  transition-property: none;\n  transition-duration: none;\n}\ninput[type=text][_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  border-color: #ef7ead;\n}\ntextarea[_ngcontent-%COMP%] {\n  max-width: 300px;\n  height: 100px;\n}\ninput[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  height: 34px;\n}\nselect[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  position: relative;\n  top: 5px;\n  width: 22px;\n  height: 22px;\n  margin: 0 0.5rem;\n  background-color: white;\n  border: 1px solid #e5e5e5;\n  outline: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  \n  transition-property: none;\n  transition-duration: none;\n}\ninput[type=checkbox][_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked {\n  background-color: #ef7ead;\n  border: none;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked:after {\n  display: block;\n  content: \"\";\n  height: 4px;\n  width: 10px;\n  border-bottom: 3px solid #fff;\n  border-left: 3px solid #fff;\n  transform: translate(5px, 6px) rotate(-45deg) scale(1);\n}\ninput[type=radio][_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\ninput[type=radio][_ngcontent-%COMP%]:checked {\n  border-width: 5px;\n  border-color: white;\n  background-color: #ef7ead;\n}\nbutton[_ngcontent-%COMP%] {\n  display: block;\n  margin: 3em auto;\n  padding: 0.5rem 2rem;\n  font-size: 125%;\n  color: white;\n  border: none;\n  border-radius: 0.25rem;\n  background-color: #ef7ead;\n  outline: none;\n  box-shadow: 0 0.4rem 0.1rem -0.3rem rgba(0, 0, 0, 0.1);\n  \n  transform: perspective(300px) scale(0.95) translateZ(0);\n  transform-style: preserve-3d;\n  \n  transition-property: none;\n  \n  transition-duration: none;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #ff96c8;\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  transform: scale(1.1) rotateX(0);\n}\nbutton[_ngcontent-%COMP%]:active {\n  background-color: #ef7ead;\n  transform: scale(1.05) rotateX(-10deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhhbW1lbnUvRTpcXGZhY2VcXGZhY2UtbW9uaXRvcmluZy9zcmNcXGFwcFxcZXhhbW1lbnVcXGV4YW1tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9leGFtbWVudS9leGFtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxtRUFBQTtBQUNSO0VBQUksc0JBQUE7QUNFSjtBREFBO0VBQU8sWUFBQTtBQ0lQO0FERkE7RUFDRSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDS0Y7QUREQSx1QkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDSUY7QUREQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNJRjtBRERBO0VBQ0UsZ0JBQUE7QUNJRjtBRERBOztFQUVFLHFCQUFBO0VBQ0EscUJBQUE7QUNJRjtBRERBOzs7RUFHRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBRUEsMkNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDR0Y7QURERTs7O0VBQ0UscUJBQUE7QUNLSjtBRERBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FDSUY7QUREQTs7RUFFRSxZQUFBO0FDSUY7QUREQTtFQUNFLG1CQUFBO0FDSUY7QUREQTs7RUFFRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBRUEsMkNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDR0Y7QURBQTtFQUNFLGtCQUFBO0FDR0Y7QURERTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0dKO0FEREk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHNEQUFBO0FDR047QURFQTtFQUNFLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0NKO0FES0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0RBQUE7RUFFQSwrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsNEJBQUE7RUFFQTsyQkFBQTtFQUVBLHlCQUFBO0VBRUEsZ0RBQUE7RUFDQSx5QkFBQTtBQ0xGO0FET0U7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0FDTEo7QURRRTtFQUNFLHlCQUFBO0VBQ0Esc0NBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL2V4YW1tZW51L2V4YW1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsMzAwKTtcbiogeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbmh0bWwgeyBoZWlnaHQ6IDEwMCU7IH1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2FuLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY3O1xufVxuXG5cbi8qIEZvcm0gZWxlbWVudCBzZXR1cCAqL1xuZm9ybSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDA7XG4gIGxlZnQ6IDIwJTtcbiAgd2lkdGg6IDQ2MHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIG1hcmdpbjogMnJlbSAwO1xuICB6LWluZGV4OiAxO1xufVxuXG5maWVsZHNldCB7XG4gIG1hcmdpbjogMCAwIDFyZW0gMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5sZWdlbmQge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5sZWdlbmQsXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG59XG5cbmlucHV0W3R5cGU9J3RleHQnXSxcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IC41cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgb3V0bGluZTogbm9uZTtcbiAgICAgIFxuICAvKiBMaXN0IHNvbWUgcHJvcGVydGllcyB0aGF0IG1pZ2h0IGNoYW5nZSAqL1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBub25lO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBub25lO1xuICBcbiAgJjpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjM5LDEyNiwxNzMpO1xuICB9XG59XG5cbnRleHRhcmVhIHtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuaW5wdXRbdHlwZT0ndGV4dCddLFxuc2VsZWN0IHtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG5zZWxlY3Qge1xuICBmb250LXNpemU6IC44NzVyZW07XG59XG5cbmlucHV0W3R5cGU9J2NoZWNrYm94J10sXG5pbnB1dFt0eXBlPSdyYWRpbyddIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDVweDtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgbWFyZ2luOiAwIC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgb3V0bGluZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIFxuICAvKiBMaXN0IHNvbWUgcHJvcGVydGllcyB0aGF0IG1pZ2h0IGNoYW5nZSAqL1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBub25lO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBub25lO1xufVxuXG5pbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICY6Y2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwxMjYsMTczKTsgXG4gICAgYm9yZGVyOiBub25lO1xuXG4gICAgJjphZnRlciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmZmO1xuICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZmZmO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LDZweCkgcm90YXRlKC00NWRlZykgc2NhbGUoMSk7XG4gICAgfVxuICB9XG59XG5cbmlucHV0W3R5cGU9J3JhZGlvJ10ge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIFxuICAmOmNoZWNrZWQge1xuICAgIGJvcmRlci13aWR0aDogNXB4O1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwxMjYsMTczKTtcbiAgfVxufVxuXG5cblxuYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogM2VtIGF1dG87XG4gIHBhZGRpbmc6IC41cmVtIDJyZW07XG4gIGZvbnQtc2l6ZTogMTI1JTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwxMjYsMTczKTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAuNHJlbSAuMXJlbSAtLjNyZW0gcmdiYSgwLDAsMCwuMSk7XG5cbiAgLyogV2UnbGwgdGFsayBhYm91dCB0aGlzIG5leHQgKi9cbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgzMDBweCkgc2NhbGUoLjk1KSB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuXG4gIC8qIExpc3QgdGhlIHByb3BlcnRpZXMgdGhhdCB5b3UncmUgbG9va2luZyB0byB0cmFuc2l0aW9uLlxuICAgICBUcnkgbm90IHRvIHVzZSAnYWxsJyAqL1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBub25lO1xuXG4gIC8qIFRoaXMgYXBwbGllcyB0byBhbGwgb2YgdGhlIGFib3ZlIHByb3BlcnRpZXMgKi9cbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogbm9uZTtcbiAgICBcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsMTUwLDIwMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsMCwwLDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSByb3RhdGVYKDApO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksMTI2LDE3Myk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KSByb3RhdGVYKC0xMGRlZyk7XG4gIH1cbn1cbiIsIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDMwMCk7XG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2FuLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY3O1xufVxuXG4vKiBGb3JtIGVsZW1lbnQgc2V0dXAgKi9cbmZvcm0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwO1xuICBsZWZ0OiAyMCU7XG4gIHdpZHRoOiA0NjBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBtYXJnaW46IDJyZW0gMDtcbiAgei1pbmRleDogMTtcbn1cblxuZmllbGRzZXQge1xuICBtYXJnaW46IDAgMCAxcmVtIDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxubGVnZW5kIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxubGVnZW5kLFxubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSxcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xuICBvdXRsaW5lOiBub25lO1xuICAvKiBMaXN0IHNvbWUgcHJvcGVydGllcyB0aGF0IG1pZ2h0IGNoYW5nZSAqL1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBub25lO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBub25lO1xufVxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyxcbnRleHRhcmVhOmZvY3VzLFxuc2VsZWN0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjZWY3ZWFkO1xufVxuXG50ZXh0YXJlYSB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0sXG5zZWxlY3Qge1xuICBoZWlnaHQ6IDM0cHg7XG59XG5cbnNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdLFxuaW5wdXRbdHlwZT1yYWRpb10ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNXB4O1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW46IDAgMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgb3V0bGluZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC8qIExpc3Qgc29tZSBwcm9wZXJ0aWVzIHRoYXQgbWlnaHQgY2hhbmdlICovXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG5vbmU7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjdlYWQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQ6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiA0cHg7XG4gIHdpZHRoOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZmZmO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIDZweCkgcm90YXRlKC00NWRlZykgc2NhbGUoMSk7XG59XG5cbmlucHV0W3R5cGU9cmFkaW9dIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCB7XG4gIGJvcmRlci13aWR0aDogNXB4O1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY3ZWFkO1xufVxuXG5idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAzZW0gYXV0bztcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XG4gIGZvbnQtc2l6ZTogMTI1JTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjdlYWQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMC40cmVtIDAuMXJlbSAtMC4zcmVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLyogV2UnbGwgdGFsayBhYm91dCB0aGlzIG5leHQgKi9cbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgzMDBweCkgc2NhbGUoMC45NSkgdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLyogTGlzdCB0aGUgcHJvcGVydGllcyB0aGF0IHlvdSdyZSBsb29raW5nIHRvIHRyYW5zaXRpb24uXG4gICAgIFRyeSBub3QgdG8gdXNlICdhbGwnICovXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG5vbmU7XG4gIC8qIFRoaXMgYXBwbGllcyB0byBhbGwgb2YgdGhlIGFib3ZlIHByb3BlcnRpZXMgKi9cbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogbm9uZTtcbn1cbmJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTZjODtcbiAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlWCgwKTtcbn1cbmJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY3ZWFkO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpIHJvdGF0ZVgoLTEwZGVnKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExammenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exammenu',
                templateUrl: './exammenu.component.html',
                styleUrls: ['./exammenu.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/exampage/exampage.component.ts":
/*!************************************************!*\
  !*** ./src/app/exampage/exampage.component.ts ***!
  \************************************************/
/*! exports provided: ExampageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampageComponent", function() { return ExampageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/__ivy_ngcc__/fesm2015/ngx-webcam.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function ExampageComponent_webcam_53_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "webcam", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCapture", function ExampageComponent_webcam_53_Template_webcam_imageCapture_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.handleImage($event); })("initError", function ExampageComponent_webcam_53_Template_webcam_initError_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.handleInitError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 320)("width", 240)("trigger", ctx_r0.triggerObservable)("videoOptions", ctx_r0.videoOptions);
} }
class ExampageComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.pictureTaken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showWebcam = true;
        this.multipleWebcamsAvailable = false;
        this.videoOptions = {
            width: { ideal: 160 },
            height: { ideal: 120 }
        };
        this.width = 100;
        this.height = 100;
        this.errors = [];
        this.webcamImage = null;
        this.outimg = '';
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__('http://localhost:5000', { transports: ['polling'] });
    }
    ngOnInit() {
        ngx_webcam__WEBPACK_IMPORTED_MODULE_2__["WebcamUtil"].getAvailableVideoInputs()
            .then((mediaDevices) => {
            this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        }).then(() => {
            this.socketcontinue();
        });
    }
    ;
    handleImage(webcamImage) {
        this.webcamImage = webcamImage;
    }
    ;
    socketcontinue() {
        this.socket.on('image_out', (message) => {
            this.outimg = "data:image/png;base64," + message;
        });
        this.intervalHandle = setInterval(() => {
            this.trigger.next();
            this.socket.emit('image', this.webcamImage.imageAsBase64);
        }, 40);
    }
    ;
    postcontinue() {
        this.intervalHandle =
            setInterval(() => {
                this.trigger.next();
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                });
                this.http.post("http://localhost:5000/videoStreaming", { img: this.webcamImage.imageAsBase64 }, { headers }).subscribe((res) => {
                    //this.loginResponse = JSON.stringify(res)
                    //  alert(this.loginResponse);  
                    if (res.valid === false) {
                        alert(res.error);
                    }
                    console.log(res);
                });
            }, 40); // currently interval is set for every 5 seconds.
    }
    ;
    handleInitError(error) {
        this.errors.push(error);
    }
    ;
    get triggerObservable() {
        return this.trigger.asObservable();
    }
    ;
    completeExam() {
        console.log('in the complete');
        clearInterval(this.intervalHandle);
        this.trigger.next();
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        // this.http.post("http://localhost:5000/videoStreamingClose", { img: this.webcamImage.imageAsBase64 }, {headers }).subscribe((res:any) => {
        //this.loginResponse = JSON.stringify(res)
        //  alert(this.loginResponse);  
        // if (res.valid === false){
        //   alert(res.error);
        // }
        //console.log(res);
        //});
        // this.socket.emit('disconnect');
        // this.socket.disconnect();
        this.router.navigate(['examcomplete']);
    }
    ;
}
ExampageComponent.ɵfac = function ExampageComponent_Factory(t) { return new (t || ExampageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ExampageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampageComponent, selectors: [["app-exampage"]], decls: 54, vars: 1, consts: [[1, "container"], [1, "row"], [1, "col-sm-8"], ["type", "radio", "id", "radio1", "name", "radios", "checked", ""], ["for", "radio1"], ["type", "radio", "id", "radio2", "name", "radios"], ["for", "radio2"], ["type", "radio", "id", "radio3", "name", "radios"], ["for", "radio3"], ["type", "radio", "id", "radio4", "name", "radios1", "checked", ""], ["type", "radio", "id", "radio5", "name", "radios1"], ["type", "radio", "id", "radio6", "name", "radios1"], ["type", "radio", "id", "radio7", "name", "radios2", "checked", ""], ["for", "radio7"], ["type", "radio", "id", "radio8", "name", "radios2"], ["for", "radio8"], ["type", "radio", "id", "radio9", "name", "radios2"], ["for", "radio9"], [3, "click"], [1, "col-sm-4"], [1, "py-4", "text-center"], [3, "height", "width", "trigger", "videoOptions", "imageCapture", "initError", 4, "ngIf"], [3, "height", "width", "trigger", "videoOptions", "imageCapture", "initError"]], template: function ExampageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Which of the following is a real spell");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Hocis Pocis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ablakazam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Lumos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "What is the name of a person without magic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Moggel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Mogel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Muggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Which bird rises from the ashes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Pegasus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Pheonix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Dragon Dove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExampageComponent_Template_button_click_47_listener() { return ctx.completeExam(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Submit Answers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Webcam preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ExampageComponent_webcam_53_Template, 1, 4, "webcam", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showWebcam);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ngx_webcam__WEBPACK_IMPORTED_MODULE_2__["WebcamComponent"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto:400,300);\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  height: 100%;\n  font-family: Roboto, san-serif;\n  font-weight: 300;\n  background-color: #f5f6f7;\n}\n\nform[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100;\n  left: 20%;\n  width: 460px;\n  transform: translateX(-50%);\n  margin: 2rem 0;\n  z-index: 1;\n}\nfieldset[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  padding: 0;\n  border: none;\n}\nlegend[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\nlegend[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0.5rem;\n}\ninput[type=text][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.5rem;\n  width: 100%;\n  background-color: white;\n  border-radius: 0.25rem;\n  border: 1px solid #e5e5e5;\n  outline: none;\n  \n  transition-property: none;\n  transition-duration: none;\n}\ninput[type=text][_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus {\n  border-color: #ef7ead;\n}\ntextarea[_ngcontent-%COMP%] {\n  max-width: 300px;\n  height: 100px;\n}\ninput[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  height: 34px;\n}\nselect[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  position: relative;\n  top: 5px;\n  width: 22px;\n  height: 22px;\n  margin: 0 0.5rem;\n  background-color: white;\n  border: 1px solid #e5e5e5;\n  outline: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  \n  transition-property: none;\n  transition-duration: none;\n}\ninput[type=checkbox][_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked {\n  background-color: #ef7ead;\n  border: none;\n}\ninput[type=checkbox][_ngcontent-%COMP%]:checked:after {\n  display: block;\n  content: \"\";\n  height: 4px;\n  width: 10px;\n  border-bottom: 3px solid #fff;\n  border-left: 3px solid #fff;\n  transform: translate(5px, 6px) rotate(-45deg) scale(1);\n}\ninput[type=radio][_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\ninput[type=radio][_ngcontent-%COMP%]:checked {\n  border-width: 5px;\n  border-color: white;\n  background-color: #ef7ead;\n}\nbutton[_ngcontent-%COMP%] {\n  display: block;\n  margin: 3em auto;\n  padding: 0.5rem 2rem;\n  font-size: 125%;\n  color: white;\n  border: none;\n  border-radius: 0.25rem;\n  background-color: #ef7ead;\n  outline: none;\n  box-shadow: 0 0.4rem 0.1rem -0.3rem rgba(0, 0, 0, 0.1);\n  \n  transform: perspective(300px) scale(0.95) translateZ(0);\n  transform-style: preserve-3d;\n  \n  transition-property: none;\n  \n  transition-duration: none;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #ff96c8;\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  transform: scale(1.1) rotateX(0);\n}\nbutton[_ngcontent-%COMP%]:active {\n  background-color: #ef7ead;\n  transform: scale(1.05) rotateX(-10deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhhbXBhZ2UvRTpcXGZhY2VcXGZhY2UtbW9uaXRvcmluZy9zcmNcXGFwcFxcZXhhbXBhZ2VcXGV4YW1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9leGFtcGFnZS9leGFtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxtRUFBQTtBQUNSO0VBQUksc0JBQUE7QUNFSjtBREFBO0VBQU8sWUFBQTtBQ0lQO0FERkE7RUFDRSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDS0Y7QUREQSx1QkFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDSUY7QUREQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNJRjtBRERBO0VBQ0UsZ0JBQUE7QUNJRjtBRERBOztFQUVFLHFCQUFBO0VBQ0EscUJBQUE7QUNJRjtBRERBOzs7RUFHRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBRUEsMkNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDR0Y7QURERTs7O0VBQ0UscUJBQUE7QUNLSjtBRERBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FDSUY7QUREQTs7RUFFRSxZQUFBO0FDSUY7QUREQTtFQUNFLG1CQUFBO0FDSUY7QUREQTs7RUFFRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBRUEsMkNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDR0Y7QURBQTtFQUNFLGtCQUFBO0FDR0Y7QURERTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0dKO0FEREk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHNEQUFBO0FDR047QURFQTtFQUNFLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0NKO0FES0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0RBQUE7RUFFQSwrQkFBQTtFQUNBLHVEQUFBO0VBQ0EsNEJBQUE7RUFFQTsyQkFBQTtFQUVBLHlCQUFBO0VBRUEsZ0RBQUE7RUFDQSx5QkFBQTtBQ0xGO0FET0U7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0FDTEo7QURRRTtFQUNFLHlCQUFBO0VBQ0Esc0NBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wYWdlL2V4YW1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsMzAwKTtcbiogeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbmh0bWwgeyBoZWlnaHQ6IDEwMCU7IH1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2FuLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY3O1xufVxuXG5cbi8qIEZvcm0gZWxlbWVudCBzZXR1cCAqL1xuZm9ybSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDA7XG4gIGxlZnQ6IDIwJTtcbiAgd2lkdGg6IDQ2MHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIG1hcmdpbjogMnJlbSAwO1xuICB6LWluZGV4OiAxO1xufVxuXG5maWVsZHNldCB7XG4gIG1hcmdpbjogMCAwIDFyZW0gMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5sZWdlbmQge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG5sZWdlbmQsXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG59XG5cbmlucHV0W3R5cGU9J3RleHQnXSxcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IC41cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgb3V0bGluZTogbm9uZTtcblxuICAvKiBMaXN0IHNvbWUgcHJvcGVydGllcyB0aGF0IG1pZ2h0IGNoYW5nZSAqL1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBub25lO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBub25lO1xuXG4gICY6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDIzOSwxMjYsMTczKTtcbiAgfVxufVxuXG50ZXh0YXJlYSB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbmlucHV0W3R5cGU9J3RleHQnXSxcbnNlbGVjdCB7XG4gIGhlaWdodDogMzRweDtcbn1cblxuc2VsZWN0IHtcbiAgZm9udC1zaXplOiAuODc1cmVtO1xufVxuXG5pbnB1dFt0eXBlPSdjaGVja2JveCddLFxuaW5wdXRbdHlwZT0ncmFkaW8nXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1cHg7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIG1hcmdpbjogMCAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXG4gIC8qIExpc3Qgc29tZSBwcm9wZXJ0aWVzIHRoYXQgbWlnaHQgY2hhbmdlICovXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG5vbmU7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgJjpjaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LDEyNiwxNzMpO1xuICAgIGJvcmRlcjogbm9uZTtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGhlaWdodDogNHB4O1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZmZjtcbiAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2ZmZjtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCw2cHgpIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEpO1xuICAgIH1cbiAgfVxufVxuXG5pbnB1dFt0eXBlPSdyYWRpbyddIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICY6Y2hlY2tlZCB7XG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LDEyNiwxNzMpO1xuICB9XG59XG5cblxuXG5idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAzZW0gYXV0bztcbiAgcGFkZGluZzogLjVyZW0gMnJlbTtcbiAgZm9udC1zaXplOiAxMjUlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LDEyNiwxNzMpO1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwIC40cmVtIC4xcmVtIC0uM3JlbSByZ2JhKDAsMCwwLC4xKTtcblxuICAvKiBXZSdsbCB0YWxrIGFib3V0IHRoaXMgbmV4dCAqL1xuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDMwMHB4KSBzY2FsZSguOTUpIHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG5cbiAgLyogTGlzdCB0aGUgcHJvcGVydGllcyB0aGF0IHlvdSdyZSBsb29raW5nIHRvIHRyYW5zaXRpb24uXG4gICAgIFRyeSBub3QgdG8gdXNlICdhbGwnICovXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IG5vbmU7XG5cbiAgLyogVGhpcyBhcHBsaWVzIHRvIGFsbCBvZiB0aGUgYWJvdmUgcHJvcGVydGllcyAqL1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBub25lO1xuXG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LDE1MCwyMDApO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgcm90YXRlWCgwKTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LDEyNiwxNzMpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSkgcm90YXRlWCgtMTBkZWcpO1xuICB9XG59XG4iLCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjQwMCwzMDApO1xuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbi1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmNztcbn1cblxuLyogRm9ybSBlbGVtZW50IHNldHVwICovXG5mb3JtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMDtcbiAgbGVmdDogMjAlO1xuICB3aWR0aDogNDYwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgbWFyZ2luOiAycmVtIDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbmZpZWxkc2V0IHtcbiAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmxlZ2VuZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmxlZ2VuZCxcbmxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbmlucHV0W3R5cGU9dGV4dF0sXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgb3V0bGluZTogbm9uZTtcbiAgLyogTGlzdCBzb21lIHByb3BlcnRpZXMgdGhhdCBtaWdodCBjaGFuZ2UgKi9cbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbm9uZTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogbm9uZTtcbn1cbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyxcbnNlbGVjdDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogI2VmN2VhZDtcbn1cblxudGV4dGFyZWEge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLFxuc2VsZWN0IHtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG5zZWxlY3Qge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XSxcbmlucHV0W3R5cGU9cmFkaW9dIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDVweDtcbiAgd2lkdGg6IDIycHg7XG4gIGhlaWdodDogMjJweDtcbiAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAvKiBMaXN0IHNvbWUgcHJvcGVydGllcyB0aGF0IG1pZ2h0IGNoYW5nZSAqL1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBub25lO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBub25lO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbmlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY3ZWFkO1xuICBib3JkZXI6IG5vbmU7XG59XG5pbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogNHB4O1xuICB3aWR0aDogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2ZmZjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCA2cHgpIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEpO1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQge1xuICBib3JkZXItd2lkdGg6IDVweDtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmN2VhZDtcbn1cblxuYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogM2VtIGF1dG87XG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xuICBmb250LXNpemU6IDEyNSU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY3ZWFkO1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwIDAuNHJlbSAwLjFyZW0gLTAuM3JlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC8qIFdlJ2xsIHRhbGsgYWJvdXQgdGhpcyBuZXh0ICovXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMzAwcHgpIHNjYWxlKDAuOTUpIHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIC8qIExpc3QgdGhlIHByb3BlcnRpZXMgdGhhdCB5b3UncmUgbG9va2luZyB0byB0cmFuc2l0aW9uLlxuICAgICBUcnkgbm90IHRvIHVzZSAnYWxsJyAqL1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBub25lO1xuICAvKiBUaGlzIGFwcGxpZXMgdG8gYWxsIG9mIHRoZSBhYm92ZSBwcm9wZXJ0aWVzICovXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IG5vbmU7XG59XG5idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjk2Yzg7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpIHJvdGF0ZVgoMCk7XG59XG5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmN2VhZDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KSByb3RhdGVYKC0xMGRlZyk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exampage',
                templateUrl: './exampage.component.html',
                styleUrls: ['./exampage.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 22, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand"], ["src", "assets/images/hog2.png"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link"], ["routerLink", "/profile", 1, "nav-link"], ["routerLink", "/exammenu", 1, "nav-link"], ["routerLink", "/invpage", 1, "nav-link"], [1, "nav", "navbar-nav", "navbar-right"], [1, "glyphicon", "glyphicon-log-out"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Exam List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Invigilator Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm2015/Subject.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-webcam */ "./node_modules/ngx-webcam/__ivy_ngcc__/fesm2015/ngx-webcam.js");








function HomeComponent_webcam_27_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "webcam", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCapture", function HomeComponent_webcam_27_Template_webcam_imageCapture_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.handleImage($event); })("initError", function HomeComponent_webcam_27_Template_webcam_initError_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.handleInitError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 275)("width", 275)("trigger", ctx_r0.triggerObservable);
} }
const _c0 = function () { return { standalone: true }; };
class HomeComponent {
    constructor(route, http) {
        this.route = route;
        this.http = http;
        this.webcamImage = null;
        this.trigger = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.pictureTaken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.errors = [];
        this.showWebcam = true;
        this.username = "";
        this.emailAdr = "";
        this.password = "";
    }
    ngOnInit() {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');
        signUpButton.addEventListener('click', () => container.classList.add('right-panel-active'));
        signInButton.addEventListener('click', () => container.classList.remove('right-panel-active'));
        var body = document.body;
        signUpButton.addEventListener('click', function (e) {
            body.className = body.className ? '' : 'with_nav';
            e.preventDefault();
        });
    }
    triggerSnapshot() {
        this.trigger.next();
    }
    handleImage(webcamImage) {
        console.info('received webcam image', webcamImage.imageAsBase64);
        //this.pictureTaken.emit(webcamImage);
        //this.webcamImage = webcamImage
        //img.crossOrigin = 'Anonymous';
        //img.src = webcamImage;
        var fd = new FormData();
        fd.append('imageFile', webcamImage.imageAsBase64);
        fd.append('userId', this.username);
        this.http.post('http://localhost:8080/ca/facialRecognition', fd).subscribe(data => {
            this.loginResponse = data.message;
            if (this.loginResponse == 'Facial Recognition Successful') {
                alert(this.loginResponse);
                this.route.navigate(['exammenu']);
            }
            else {
                alert(this.loginResponse);
            }
        });
    }
    handleInitError(error) {
        this.errors.push(error);
    }
    get triggerObservable() {
        return this.trigger.asObservable();
    }
    onSelectFile(event) {
        console.log("login" + event.target.files[0]);
        this.file = event.target.files[0];
    }
    onSelectSignupFile(event) {
        console.log("signupfile" + event.target.files[0]);
        this.signupFile = event.target.files[0];
    }
    signup() {
        var fd = new FormData();
        fd.append('imageFile', this.signupFile);
        fd.append('userId', this.emailAdr);
        fd.append('password', this.password);
        this.http.post('http://localhost:8080/ca/register', fd).subscribe(data => {
            this.loginResponse = data.message;
            alert(this.loginResponse);
            window.location.reload();
        });
    }
    login() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 50, vars: 10, consts: [["rel", "stylesheet", "href", "https://use.fontawesome.com/releases/v5.10.2/css/all.css"], ["ng-app", "myApp", "ng-controller", "myCtrl"], ["id", "container", 1, "container"], [1, "form-container", "sign-up-container"], ["action", "#"], [1, "social-container"], ["src", "assets/images/hog.png", 2, "width", "300px", "height", "230px"], ["type", "text", "placeholder", "First Name"], ["type", "text", "placeholder", "Last Name"], ["type", "email", "placeholder", "Email", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "password", "placeholder", "Password", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["for", "img1"], ["type", "file", "id", "img1", "name", "img", "accept", "image/*", 3, "change"], [1, "su", 3, "click"], [1, "form-container", "sign-in-container"], ["id", "username", "type", "text", "placeholder", "Email", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["type", "password", "placeholder", "Password"], [3, "height", "width", "trigger", "imageCapture", "initError", 4, "ngIf"], ["title", "Take Picture", 1, "actionBtn", 3, "click"], ["title", "Take Picture", 1, "si", 3, "click"], [1, "overlay-container"], [1, "overlay"], [1, "overlay-panel", "overlay-left"], ["id", "signIn", 1, "ghost"], [1, "overlay-panel", "overlay-right"], ["id", "signUp", 1, "ghost"], [3, "height", "width", "trigger", "imageCapture", "initError"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_11_listener($event) { return ctx.emailAdr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_12_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Please upload document ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HomeComponent_Template_input_change_15_listener($event) { return ctx.onSelectSignupFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_16_listener() { return ctx.signup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_22_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Capture or Select image for facial recognition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HomeComponent_webcam_27_Template, 1, 3, "webcam", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_29_listener() { return ctx.triggerSnapshot(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "I Forgot my Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_32_listener() { return ctx.triggerSnapshot(); })("click", function HomeComponent_Template_button_click_32_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sign In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Welcome Back!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Please login to view you Cambridge Assessments account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Enter your personal details and start journey with us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.emailAdr)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showWebcam);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_webcam__WEBPACK_IMPORTED_MODULE_6__["WebcamComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Teko:wght@500&display=swap\");\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: \"Teko\", sans-serif;\n  background: #86235a;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  margin: -20px 0 50px;\n}\nh1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  letter-spacing: 0.8px;\n  margin: 0;\n}\np[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 100;\n  line-height: 20px;\n  letter-spacing: 0.5px;\n  margin: 20px 0 30px;\n}\nspan[_ngcontent-%COMP%] {\n  font-size: 16px;\n  letter-spacing: 0.8px;\n}\na[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 16px;\n  letter-spacing: 0.5px;\n  text-decoration: none;\n  margin: 15px 0;\n}\n.container[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 50px;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  position: center;\n  overflow: hidden;\n  width: 768px;\n  max-width: 70%;\n  min-height: 480px;\n  text-align: center;\n}\n.form-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  padding: 0 50px;\n  height: 100%;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n}\n.social-container[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n.social-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 50%;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 5px;\n  height: 40px;\n  width: 40px;\n}\n.form-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: #eee;\n  border: none;\n  padding: 12px 15px;\n  margin: 8px 0;\n  width: 100%;\n}\nbutton[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  border: 1px solid #f3f3f3;\n  background: #23bebe;\n  color: #fff;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 12px 45px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  transition: transform 80ms ease-in;\n}\nbutton[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\nbutton.ghost[_ngcontent-%COMP%] {\n  background: transparent;\n  border-color: #fff;\n}\n.si[_ngcontent-%COMP%] {\n  background-color: #FF2727;\n}\n.su[_ngcontent-%COMP%] {\n  background-color: #ebc90d;\n}\n.form-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  transition: all 0.6s ease-in-out;\n}\n.sign-in-container[_ngcontent-%COMP%] {\n  left: 0;\n  width: 50%;\n  z-index: 2;\n}\n.sign-up-container[_ngcontent-%COMP%] {\n  left: 0;\n  width: 50%;\n  opacity: 0;\n  z-index: 1;\n}\n.overlay-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  transition: transform 0.6s ease-in-out;\n  z-index: 100;\n}\n.overlay[_ngcontent-%COMP%] {\n  background: #FF2727;\n  background: linear-gradient(to right, #FF2727, #808080) no-repeat 0 0/cover;\n  color: #fff;\n  position: relative;\n  left: -100%;\n  height: 100%;\n  width: 200%;\n  transform: translateX(0);\n  transition: transform 0.6s ease-in-out;\n}\n.overlay-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0 40px;\n  height: 100%;\n  width: 50%;\n  text-align: center;\n  transform: translateX(0);\n  transition: transform 0.6s ease-in-out;\n}\n.overlay-right[_ngcontent-%COMP%] {\n  right: 0;\n  transform: translateX(0);\n}\n.overlay-left[_ngcontent-%COMP%] {\n  transform: translateX(-20%);\n}\n\n\n.container.right-panel-active[_ngcontent-%COMP%]   .sign-in-container[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n}\n\n.container.right-panel-active[_ngcontent-%COMP%]   .overlay-container[_ngcontent-%COMP%] {\n  transform: translateX(-100%);\n}\n\n.container.right-panel-active[_ngcontent-%COMP%]   .sign-up-container[_ngcontent-%COMP%] {\n  transform: translateX(100%);\n  opacity: 1;\n  z-index: 5;\n}\n\n.container.right-panel-active[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  transform: translateX(50%);\n}\n.container.right-panel-active[_ngcontent-%COMP%]   .overlay-left[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.container.right-panel-active[_ngcontent-%COMP%]   .overlay-right[_ngcontent-%COMP%] {\n  transform: translateX(20%);\n}\n.actionBtn[_ngcontent-%COMP%] {\n  font-size: 4em;\n  cursor: pointer;\n}\n.snapshot[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.snapshot[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 800px;\n  max-height: 800px;\n}\nul.links[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9FOlxcZmFjZVxcZmFjZS1tb25pdG9yaW5nL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsa0ZBQUE7QUFDUjtFQUNJLHNCQUFBO0FDQ0o7QURDQTtFQUNJLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FDRUo7QURBQTtFQUNJLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0FDR0o7QUREQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0lKO0FERkE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7QUNLSjtBREhBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQ01KO0FESkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDT0o7QURMQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNRSjtBRE5BO0VBQ0ksY0FBQTtBQ1NKO0FEUEE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDVUo7QURSQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNXSjtBRFRBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0FDWUo7QURWQTtFQUNJLHNCQUFBO0FDYUo7QURYQTtFQUNJLGFBQUE7QUNjSjtBRFpBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtBQ2VKO0FEYkE7RUFDSSx5QkFBQTtBQ2dCSjtBRGRBO0VBQ0kseUJBQUE7QUNpQko7QURmQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQ2tCSjtBRGZBO0VBQ0ksT0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDa0JKO0FEaEJBO0VBQ0ksT0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ21CSjtBRGpCQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7RUFDQSxZQUFBO0FDb0JKO0FEbEJBO0VBQ0ksbUJBQUE7RUFDQSwyRUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0NBQUE7QUNxQko7QURuQkE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNDLG1CQUFBO0VBQ0QsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNDQUFBO0FDc0JKO0FEbkJBO0VBQ0ksUUFBQTtFQUNBLHdCQUFBO0FDc0JKO0FEcEJDO0VBQ0csMkJBQUE7QUN1Qko7QURwQkEsY0FBQTtBQUVBLDZCQUFBO0FBQ0E7RUFDSSwyQkFBQTtBQ3NCSjtBRHBCQSxpQkFBQTtBQUNBO0VBQ0ksNEJBQUE7QUN1Qko7QURyQkEseUJBQUE7QUFDQTtFQUNJLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUN3Qko7QUR0QkEsMEJBQUE7QUFDQTtFQUNJLDBCQUFBO0FDeUJKO0FEdkJBO0VBQ0ksd0JBQUE7QUMwQko7QUR4QkE7RUFDSSwwQkFBQTtBQzJCSjtBRHpCQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDNEJKO0FEMUJBO0VBQ0ksa0JBQUE7QUM2Qko7QUQ1Qkk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FDOEJSO0FEM0JBO0VBQ0ksb0JBQUE7QUM4QkoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UZWtvOndnaHRANTAwJmRpc3BsYXk9c3dhcCcpO1xuKntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuYm9keXtcbiAgICBmb250LWZhbWlseTogJ1Rla28nLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQ6ICM4NjIzNWE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtYXJnaW46IC0yMHB4IDAgNTBweDtcbn1cbmgxe1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbiAgICBtYXJnaW46IDA7XG59XG5we1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICBtYXJnaW46IDIwcHggMCAzMHB4O1xufVxuc3BhbntcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xufVxuYXtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBtYXJnaW46IDE1cHggMDtcbn1cbi5jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwwLDAsMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4yMik7XG4gICAgcG9zaXRpb246IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiA3NjhweDtcbiAgICBtYXgtd2lkdGg6IDcwJTtcbiAgICBtaW4taGVpZ2h0OiA0ODBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9ybS1jb250YWluZXIgZm9ybXtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAwIDUwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNvY2lhbC1jb250YWluZXJ7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG59XG4uc29jaWFsLWNvbnRhaW5lciBhe1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIDVweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG59XG4uZm9ybS1jb250YWluZXIgaW5wdXR7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMTJweCAxNXB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5idXR0b257XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjNmM2YzO1xuICAgIGJhY2tncm91bmQ6ICMyM2JlYmU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDEycHggNDVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwbXMgZWFzZS1pbjtcbn1cbmJ1dHRvbjphY3RpdmV7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbn1cbmJ1dHRvbjpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xufVxuYnV0dG9uLmdob3N0e1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcbn1cbi5zaXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYyNzI3O1xufVxuLnN1e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIwMSwgMTMpO1xufVxuLmZvcm0tY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2lnbi1pbi1jb250YWluZXJ7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogNTAlO1xuICAgIHotaW5kZXg6IDI7XG59XG4uc2lnbi11cC1jb250YWluZXJ7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogNTAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgei1pbmRleDogMTtcbn1cbi5vdmVybGF5LWNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xuICAgIHotaW5kZXg6IDEwMDtcbn1cbi5vdmVybGF5e1xuICAgIGJhY2tncm91bmQ6ICNGRjI3Mjc7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkYyNzI3LCAjODA4MDgwKSBuby1yZXBlYXQgMCAwIC8gY292ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0xMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMjAwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xufVxuLm92ZXJsYXktcGFuZWx7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCA0MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5vdmVybGF5LXJpZ2h0e1xuICAgIHJpZ2h0OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cbiAub3ZlcmxheS1sZWZ0e1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAlKTtcbn1cblxuLyogQW5pbWF0aW9uICovXG5cbi8qIE1vdmUgc2lnbmluIHRvIHRoZSByaWdodCAqL1xuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLnNpZ24taW4tY29udGFpbmVye1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbn1cbi8qIE1vdmUgb3ZlcmxheSAqL1xuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXktY29udGFpbmVye1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG59XG4vKiBTaWduIHVwIG92ZXIgU2lnbiBJbiAqL1xuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLnNpZ24tdXAtY29udGFpbmVye1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHotaW5kZXg6IDU7XG59XG4vKiBPdmVybGF5IEJhY2sgdG8gcmlnaHQgKi9cbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5e1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xufVxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXktbGVmdHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAub3ZlcmxheS1yaWdodHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAlKTtcbn1cbi5hY3Rpb25CdG4ge1xuICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zbmFwc2hvdHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaW1ne1xuICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA4MDBweDtcbiAgICB9XG59XG51bC5saW5rc3tcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1UZWtvOndnaHRANTAwJmRpc3BsYXk9c3dhcFwiKTtcbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiVGVrb1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiAjODYyMzVhO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luOiAtMjBweCAwIDUwcHg7XG59XG5cbmgxIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbiAgbWFyZ2luOiAwO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBtYXJnaW46IDIwcHggMCAzMHB4O1xufVxuXG5zcGFuIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG59XG5cbmEge1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICBwb3NpdGlvbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogNzY4cHg7XG4gIG1heC13aWR0aDogNzAlO1xuICBtaW4taGVpZ2h0OiA0ODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9ybS1jb250YWluZXIgZm9ybSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDAgNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc29jaWFsLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4uc29jaWFsLWNvbnRhaW5lciBhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCA1cHg7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5mb3JtLWNvbnRhaW5lciBpbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICBtYXJnaW46IDhweCAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YzZjNmMztcbiAgYmFja2dyb3VuZDogIzIzYmViZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDEycHggNDVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDgwbXMgZWFzZS1pbjtcbn1cblxuYnV0dG9uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG59XG5cbmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmJ1dHRvbi5naG9zdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6ICNmZmY7XG59XG5cbi5zaSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjI3Mjc7XG59XG5cbi5zdSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmM5MGQ7XG59XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2lnbi1pbi1jb250YWluZXIge1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNTAlO1xuICB6LWluZGV4OiAyO1xufVxuXG4uc2lnbi11cC1jb250YWluZXIge1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNTAlO1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ub3ZlcmxheS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2UtaW4tb3V0O1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5vdmVybGF5IHtcbiAgYmFja2dyb3VuZDogI0ZGMjcyNztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRkYyNzI3LCAjODA4MDgwKSBuby1yZXBlYXQgMCAwL2NvdmVyO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMjAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cyBlYXNlLWluLW91dDtcbn1cblxuLm92ZXJsYXktcGFuZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5vdmVybGF5LXJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cblxuLm92ZXJsYXktbGVmdCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAlKTtcbn1cblxuLyogQW5pbWF0aW9uICovXG4vKiBNb3ZlIHNpZ25pbiB0byB0aGUgcmlnaHQgKi9cbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5zaWduLWluLWNvbnRhaW5lciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbn1cblxuLyogTW92ZSBvdmVybGF5ICovXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAub3ZlcmxheS1jb250YWluZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xufVxuXG4vKiBTaWduIHVwIG92ZXIgU2lnbiBJbiAqL1xuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLnNpZ24tdXAtY29udGFpbmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiA1O1xufVxuXG4vKiBPdmVybGF5IEJhY2sgdG8gcmlnaHQgKi9cbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG59XG5cbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LWxlZnQge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5LXJpZ2h0IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XG59XG5cbi5hY3Rpb25CdG4ge1xuICBmb250LXNpemU6IDRlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc25hcHNob3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc25hcHNob3QgaW1nIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWF4LWhlaWdodDogODAwcHg7XG59XG5cbnVsLmxpbmtzIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/invpage/invpage.component.ts":
/*!**********************************************!*\
  !*** ./src/app/invpage/invpage.component.ts ***!
  \**********************************************/
/*! exports provided: InvpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvpageComponent", function() { return InvpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");






class InvpageComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.outimg = '';
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__('http://localhost:5000', { transports: ['polling'] });
    }
    ngOnInit() {
        this.socket.on('image_out', (message) => {
            this.outimg = "data:image/png;base64," + message;
        });
    }
    disconnectall() {
        console.log('disconnectall');
        this.socket.emit('disconnect');
        this.socket.disconnect();
    }
}
InvpageComponent.ɵfac = function InvpageComponent_Factory(t) { return new (t || InvpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
InvpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvpageComponent, selectors: [["app-invpage"]], decls: 11, vars: 1, consts: [[1, "container"], [1, "row"], [1, "col-sm-12", "text-center"], [1, "mt-5"], ["width", "320px", "height", "240px", 3, "src"], [3, "click"]], template: function InvpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Inv Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvpageComponent_Template_button_click_9_listener() { return ctx.disconnectall(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.outimg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludnBhZ2UvaW52cGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-invpage',
                templateUrl: './invpage.component.html',
                styleUrls: ['./invpage.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");



class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 6, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-sm-12"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Profile Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\face\face-monitoring\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map