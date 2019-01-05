(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n        <!-- <app-student-landing-page></app-student-landing-page> -->\r\n        <router-outlet></router-outlet>\r\n        \r\n</div>\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.loading = true;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_questionComponent_question_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/questionComponent/question.component */ "./src/app/components/questionComponent/question.component.ts");
/* harmony import */ var _components_questionSectionComponent_question_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/questionSectionComponent/question-section.component */ "./src/app/components/questionSectionComponent/question-section.component.ts");
/* harmony import */ var _components_sectionsComponent_sections_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sectionsComponent/sections.component */ "./src/app/components/sectionsComponent/sections.component.ts");
/* harmony import */ var _components_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar.component */ "./src/app/components/navbar.component.ts");
/* harmony import */ var _pages_admin_landing_admin_landing_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/admin-landing/admin-landing-page.component */ "./src/app/pages/admin-landing/admin-landing-page.component.ts");
/* harmony import */ var _pages_student_landing_student_landing_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/student-landing/student-landing-page.component */ "./src/app/pages/student-landing/student-landing-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_aboutus_aboutus_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/aboutus/aboutus-page.component */ "./src/app/pages/aboutus/aboutus-page.component.ts");
/* harmony import */ var _pages_pagenotfound_pagenotfound_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/pagenotfound/pagenotfound-page.component */ "./src/app/pages/pagenotfound/pagenotfound-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_questionComponent_question_component__WEBPACK_IMPORTED_MODULE_7__["QuestionComponent"],
                _components_questionSectionComponent_question_section_component__WEBPACK_IMPORTED_MODULE_8__["QuestionSectionComponent"],
                _components_sectionsComponent_sections_component__WEBPACK_IMPORTED_MODULE_9__["SectionsComponent"],
                _components_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _pages_admin_landing_admin_landing_page_component__WEBPACK_IMPORTED_MODULE_11__["AdminLandingPageComponent"],
                _pages_student_landing_student_landing_page_component__WEBPACK_IMPORTED_MODULE_12__["StudentLandingPageComponent"],
                _pages_aboutus_aboutus_page_component__WEBPACK_IMPORTED_MODULE_14__["AboutusPageComponent"],
                _pages_pagenotfound_pagenotfound_page_component__WEBPACK_IMPORTED_MODULE_15__["PagenotfoundPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot([
                    { path: 'student-landing', component: _pages_student_landing_student_landing_page_component__WEBPACK_IMPORTED_MODULE_12__["StudentLandingPageComponent"] },
                    { path: 'admin-landing', component: _pages_admin_landing_admin_landing_page_component__WEBPACK_IMPORTED_MODULE_11__["AdminLandingPageComponent"] },
                    { path: 'aboutus', component: _pages_aboutus_aboutus_page_component__WEBPACK_IMPORTED_MODULE_14__["AboutusPageComponent"] },
                    { path: 'welcome', component: _pages_admin_landing_admin_landing_page_component__WEBPACK_IMPORTED_MODULE_11__["AdminLandingPageComponent"] },
                    { path: '**', component: _pages_pagenotfound_pagenotfound_page_component__WEBPACK_IMPORTED_MODULE_15__["PagenotfoundPageComponent"] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/navbar.component.css":
/*!*************************************************!*\
  !*** ./src/app/components/navbar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar.component.html":
/*!**************************************************!*\
  !*** ./src/app/components/navbar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <a class=\"active\" href=\"javascript:void(0)\" [routerLink]=\"['/welcome']\" routerLinkActive=\"router-link-active\">Home</a>\n  <a href=\"javascript:void(0)\" [routerLink]=\"['/student-landing']\" routerLinkActive=\"router-link-active\" >Login</a>\n  <a href=\"javascript:void(0)\" [routerLink]=\"['/aboutus']\" routerLinkActive=\"router-link-active\" >About Us</a>\n  <label class=\"label-left\">Feedback System </label>\n</p>\n"

/***/ }),

/***/ "./src/app/components/navbar.component.ts":
/*!************************************************!*\
  !*** ./src/app/components/navbar.component.ts ***!
  \************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/questionComponent/question.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/questionComponent/question.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:500,100,300,700,400);\r\n\r\n\r\n\r\n.container .jumbotron\r\n{\r\n    color : rgb(68, 27, 142);\r\n    border-radius : 90px!important;\r\n    padding-top: 1px;\r\n    padding-bottom: 1px;\r\n    background-color:rgba(255, 255, 255, 0.5)\r\n\r\n}\r\n\r\n\r\n\r\n.display-4\r\n{\r\n  font-family: Georgia, serif;\r\nfont-size: 25px;\r\nletter-spacing: 0px;\r\nword-spacing: 1.4px;\r\ncolor: #000000;\r\nfont-weight: 700;\r\n-webkit-text-decoration: none solid rgba(68, 68, 68);\r\n        text-decoration: none solid rgba(68, 68, 68);\r\nfont-style: normal;\r\nfont-variant: normal; \r\n}\r\n\r\n\r\n\r\ndiv.stars{\r\n  width: 270px;\r\n  display: inline-block;\r\n}\r\n\r\n\r\n\r\ninput.star{\r\n  display: none;\r\n}\r\n\r\n\r\n\r\nlabel.star {\r\n  float: right;\r\n  padding: 10px;\r\n  font-size: 36px;\r\n  color: #444;\r\n  transition: all .2s;\r\n}\r\n\r\n\r\n\r\ninput.star:checked ~ label.star:before {\r\n  content:'\\f005';\r\n  color: #FD4;\r\n  transition: all .25s;\r\n}\r\n\r\n\r\n\r\ninput.star-5:checked ~ label.star:before {\r\n  color:#FE7;\r\n  text-shadow: 0 0 20px #952;\r\n}\r\n\r\n\r\n\r\ninput.star-1:checked ~ label.star:before {\r\n  color: #F62;\r\n}\r\n\r\n\r\n\r\nlabel.star:hover{\r\n  -webkit-transform: rotate(-15deg) scale(1.3);\r\n          transform: rotate(-15deg) scale(1.3);\r\n}\r\n\r\n\r\n\r\nlabel.star:before{\r\n  content:'\\f006';\r\n  font-family: FontAwesome;\r\n}\r\n\r\n\r\n\r\n.rev-box{\r\n  overflow: hidden;\r\n  height: 0;\r\n  width: 100%;\r\n  transition: all .25s;\r\n}\r\n\r\n\r\n\r\ntextarea.review{\r\n  background: #222;\r\n  border: none;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  height: 100px;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n  color: #EEE;\r\n}\r\n\r\n\r\n\r\nlabel.review{\r\n  display: block;\r\n  transition:opacity .25s;\r\n}\r\n\r\n\r\n\r\ninput.star:checked ~ .rev-box{\r\n  height: 125px;\r\n  overflow: visible;\r\n}\r\n\r\n\r\n\r\n.sh:active {\r\n  -webkit-animation: shake 0.5s;\r\n          animation: shake 0.5s;\r\n  -webkit-animation-iteration-count: initial;\r\n          animation-iteration-count: initial;\r\n}\r\n\r\n\r\n\r\n@-webkit-keyframes shake {\r\n  0% { -webkit-transform: translate(1px, -8px) rotate(0deg); transform: translate(1px, -8px) rotate(0deg); }\r\n  30% { -webkit-transform: translate(1px, -8px) rotate(5deg); transform: translate(1px, -8px) rotate(5deg); }\r\n  35% { -webkit-transform: translate(1px, -8px) rotate(15deg); transform: translate(1px, -8px) rotate(15deg); }\r\n  40% { -webkit-transform: translate(1px, -8px) rotate(30deg); transform: translate(1px, -8px) rotate(30deg); }\r\n  45% { -webkit-transform: translate(1px, -8px) rotate(45deg); transform: translate(1px, -8px) rotate(45deg); }\r\n  50% { -webkit-transform: translate(1px, -8px) rotate(60deg); transform: translate(1px, -8px) rotate(60deg); }\r\n  55% { -webkit-transform: translate(1px, -70px) rotate(750deg); transform: translate(1px, -70px) rotate(750deg); }\r\n  60% { -webkit-transform: translate(1px, -70px) rotate(90deg); transform: translate(1px, -70px) rotate(90deg); }\r\n  60% { -webkit-transform: translate(1px, -80px) rotate(100deg); transform: translate(1px, -80px) rotate(100deg); }\r\n  65% { -webkit-transform: translate(1px, -85px) rotate(120deg); transform: translate(1px, -85px) rotate(120deg); }\r\n  70% { -webkit-transform: translate(1px, -90px) rotate(145deg); transform: translate(1px, -90px) rotate(145deg); }\r\n  75% { -webkit-transform: translate(1px, -95px) rotate(160deg); transform: translate(1px, -95px) rotate(160deg); }\r\n  80% { -webkit-transform: translate(1px, -100px) rotate(180deg); transform: translate(1px, -100px) rotate(180deg); }\r\n  85% { -webkit-transform: translate(1px, -120px) rotate(200deg); transform: translate(1px, -120px) rotate(200deg); }\r\n  90% { -webkit-transform: translate(1px, -125px) rotate(220deg); transform: translate(1px, -125px) rotate(220deg); }\r\n  95% { -webkit-transform: translate(1px, -130px) rotate(270deg); transform: translate(1px, -130px) rotate(270deg); }\r\n  100% { -webkit-transform: translate(1px, -140px) rotate(360deg); transform: translate(1px, -140px) rotate(360deg); }\r\n}\r\n\r\n\r\n\r\n@keyframes shake {\r\n  0% { -webkit-transform: translate(1px, -8px) rotate(0deg); transform: translate(1px, -8px) rotate(0deg); }\r\n  30% { -webkit-transform: translate(1px, -8px) rotate(5deg); transform: translate(1px, -8px) rotate(5deg); }\r\n  35% { -webkit-transform: translate(1px, -8px) rotate(15deg); transform: translate(1px, -8px) rotate(15deg); }\r\n  40% { -webkit-transform: translate(1px, -8px) rotate(30deg); transform: translate(1px, -8px) rotate(30deg); }\r\n  45% { -webkit-transform: translate(1px, -8px) rotate(45deg); transform: translate(1px, -8px) rotate(45deg); }\r\n  50% { -webkit-transform: translate(1px, -8px) rotate(60deg); transform: translate(1px, -8px) rotate(60deg); }\r\n  55% { -webkit-transform: translate(1px, -70px) rotate(750deg); transform: translate(1px, -70px) rotate(750deg); }\r\n  60% { -webkit-transform: translate(1px, -70px) rotate(90deg); transform: translate(1px, -70px) rotate(90deg); }\r\n  60% { -webkit-transform: translate(1px, -80px) rotate(100deg); transform: translate(1px, -80px) rotate(100deg); }\r\n  65% { -webkit-transform: translate(1px, -85px) rotate(120deg); transform: translate(1px, -85px) rotate(120deg); }\r\n  70% { -webkit-transform: translate(1px, -90px) rotate(145deg); transform: translate(1px, -90px) rotate(145deg); }\r\n  75% { -webkit-transform: translate(1px, -95px) rotate(160deg); transform: translate(1px, -95px) rotate(160deg); }\r\n  80% { -webkit-transform: translate(1px, -100px) rotate(180deg); transform: translate(1px, -100px) rotate(180deg); }\r\n  85% { -webkit-transform: translate(1px, -120px) rotate(200deg); transform: translate(1px, -120px) rotate(200deg); }\r\n  90% { -webkit-transform: translate(1px, -125px) rotate(220deg); transform: translate(1px, -125px) rotate(220deg); }\r\n  95% { -webkit-transform: translate(1px, -130px) rotate(270deg); transform: translate(1px, -130px) rotate(270deg); }\r\n  100% { -webkit-transform: translate(1px, -140px) rotate(360deg); transform: translate(1px, -140px) rotate(360deg); }\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .container\r\n{\r\n  width: 100%;\r\n  margin-top: -20px;\r\n}\r\n.display-4{\r\n  font-family: Georgia, serif;\r\nfont-size: 20px;\r\nletter-spacing: 0px;\r\nword-spacing: 1.4px;\r\ncolor: #000000;\r\nfont-weight:600;\r\n-webkit-text-decoration: none solid rgb(68, 68, 68);\r\n        text-decoration: none solid rgb(68, 68, 68);\r\nfont-style: normal;\r\nfont-variant: normal; \r\nwidth: 250px;\r\npadding: 10px;\r\npadding-right: 25px;\r\nword-wrap: break-word;\r\n}\r\ndiv.stars{\r\n  width: 225px;\r\n  display: inline-block;\r\n  margin-right: 0px;\r\n  margin-top: -30px;\r\n}\r\nlabel.star {\r\n  float: right;\r\n  padding: 5px;\r\n  font-size: 36px;\r\n  color: #444;\r\n  transition: all .2s;\r\n}\r\n.sh:hover {\r\n  -webkit-animation: shake 0.5s;\r\n          animation: shake 0.5s;\r\n  -webkit-animation-iteration-count: initial;\r\n          animation-iteration-count: initial;\r\n}\r\n\r\n@-webkit-keyframes shake {\r\n  0% { -webkit-transform: translate(1px, -8px) rotate(0deg); transform: translate(1px, -8px) rotate(0deg); }\r\n  30% { -webkit-transform: translate(1px, -8px) rotate(5deg); transform: translate(1px, -8px) rotate(5deg); }\r\n  35% { -webkit-transform: translate(1px, -8px) rotate(15deg); transform: translate(1px, -8px) rotate(15deg); }\r\n  40% { -webkit-transform: translate(1px, -8px) rotate(30deg); transform: translate(1px, -8px) rotate(30deg); }\r\n  45% { -webkit-transform: translate(1px, -8px) rotate(45deg); transform: translate(1px, -8px) rotate(45deg); }\r\n  50% { -webkit-transform: translate(1px, -8px) rotate(60deg); transform: translate(1px, -8px) rotate(60deg); }\r\n  55% { -webkit-transform: translate(1px, -70px) rotate(750deg); transform: translate(1px, -70px) rotate(750deg); }\r\n  60% { -webkit-transform: translate(1px, -70px) rotate(90deg); transform: translate(1px, -70px) rotate(90deg); }\r\n  60% { -webkit-transform: translate(1px, -80px) rotate(100deg); transform: translate(1px, -80px) rotate(100deg); }\r\n  65% { -webkit-transform: translate(1px, -85px) rotate(120deg); transform: translate(1px, -85px) rotate(120deg); }\r\n  70% { -webkit-transform: translate(1px, -90px) rotate(145deg); transform: translate(1px, -90px) rotate(145deg); }\r\n  75% { -webkit-transform: translate(1px, -95px) rotate(160deg); transform: translate(1px, -95px) rotate(160deg); }\r\n  80% { -webkit-transform: translate(1px, -100px) rotate(180deg); transform: translate(1px, -100px) rotate(180deg); }\r\n  85% { -webkit-transform: translate(1px, -120px) rotate(200deg); transform: translate(1px, -120px) rotate(200deg); }\r\n  90% { -webkit-transform: translate(1px, -125px) rotate(220deg); transform: translate(1px, -125px) rotate(220deg); }\r\n  95% { -webkit-transform: translate(1px, -130px) rotate(270deg); transform: translate(1px, -130px) rotate(270deg); }\r\n  100% { -webkit-transform: translate(1px, -140px) rotate(360deg); transform: translate(1px, -140px) rotate(360deg); }\r\n}\r\n\r\n@keyframes shake {\r\n  0% { -webkit-transform: translate(1px, -8px) rotate(0deg); transform: translate(1px, -8px) rotate(0deg); }\r\n  30% { -webkit-transform: translate(1px, -8px) rotate(5deg); transform: translate(1px, -8px) rotate(5deg); }\r\n  35% { -webkit-transform: translate(1px, -8px) rotate(15deg); transform: translate(1px, -8px) rotate(15deg); }\r\n  40% { -webkit-transform: translate(1px, -8px) rotate(30deg); transform: translate(1px, -8px) rotate(30deg); }\r\n  45% { -webkit-transform: translate(1px, -8px) rotate(45deg); transform: translate(1px, -8px) rotate(45deg); }\r\n  50% { -webkit-transform: translate(1px, -8px) rotate(60deg); transform: translate(1px, -8px) rotate(60deg); }\r\n  55% { -webkit-transform: translate(1px, -70px) rotate(750deg); transform: translate(1px, -70px) rotate(750deg); }\r\n  60% { -webkit-transform: translate(1px, -70px) rotate(90deg); transform: translate(1px, -70px) rotate(90deg); }\r\n  60% { -webkit-transform: translate(1px, -80px) rotate(100deg); transform: translate(1px, -80px) rotate(100deg); }\r\n  65% { -webkit-transform: translate(1px, -85px) rotate(120deg); transform: translate(1px, -85px) rotate(120deg); }\r\n  70% { -webkit-transform: translate(1px, -90px) rotate(145deg); transform: translate(1px, -90px) rotate(145deg); }\r\n  75% { -webkit-transform: translate(1px, -95px) rotate(160deg); transform: translate(1px, -95px) rotate(160deg); }\r\n  80% { -webkit-transform: translate(1px, -100px) rotate(180deg); transform: translate(1px, -100px) rotate(180deg); }\r\n  85% { -webkit-transform: translate(1px, -120px) rotate(200deg); transform: translate(1px, -120px) rotate(200deg); }\r\n  90% { -webkit-transform: translate(1px, -125px) rotate(220deg); transform: translate(1px, -125px) rotate(220deg); }\r\n  95% { -webkit-transform: translate(1px, -130px) rotate(270deg); transform: translate(1px, -130px) rotate(270deg); }\r\n  100% { -webkit-transform: translate(1px, -140px) rotate(360deg); transform: translate(1px, -140px) rotate(360deg); }\r\n}\r\n}"

/***/ }),

/***/ "./src/app/components/questionComponent/question.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/questionComponent/question.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"http://netdna.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\">\r\n<div class=\"row\">\r\n    <div class=\"container col-md-12\">\r\n        <div class=\"jumbotron \">     \r\n          <h2 class=\"display-4 \">{{question.question}}</h2>\r\n          \r\n          <div class=\"stars\">\r\n                <input class=\"star star-5 {{question.questionId}} sh\" id=\"star-5 {{question.questionId}}\" type=\"radio\" name=\"{{question.questionId}}\" value=\"5\" [(ngModel)]=\"question.answer\" (change)=\"onClick()\" required />\r\n                <label class=\"star star-5 {{question.questionId}} sh\" for=\"star-5 {{question.questionId}}\"></label>\r\n                <input class=\"star star-4 {{question.questionId}} sh\" id=\"star-4 {{question.questionId}}\" type=\"radio\" name=\"{{question.questionId}}\" value=\"4\" [(ngModel)]=\"question.answer\" (change)=\"onClick()\" required/>\r\n                <label class=\"star star-4 {{question.questionId}} sh\" for=\"star-4 {{question.questionId}}\"></label>\r\n                <input class=\"star star-3 {{question.questionId}} sh\" id=\"star-3 {{question.questionId}}\"  type=\"radio\" name=\"{{question.questionId}}\" value=\"3\" [(ngModel)]=\"question.answer\" (change)=\"onClick()\" required/>\r\n                <label class=\"star star-3 {{question.questionId}} sh\" for=\"star-3 {{question.questionId}}\"></label>\r\n                <input class=\"star star-2 {{question.questionId}} sh\" id=\"star-2 {{question.questionId}}\" type=\"radio\" name=\"{{question.questionId}}\" value=\"2\" [(ngModel)]=\"question.answer\" (change)=\"onClick()\" required/>\r\n                <label class=\"star star-2 {{question.questionId}} sh\" for=\"star-2 {{question.questionId}}\"></label>\r\n                <input class=\"star star-1 {{question.questionId}} sh\" id=\"star-1 {{question.questionId}}\" type=\"radio\" name=\"{{question.questionId}}\" value=\"1\" [(ngModel)]=\"question.answer\" (change)=\"onClick()\" required/>\r\n                <label class=\"star star-1 {{question.questionId}} sh\" for=\"star-1 {{question.questionId}}\"></label>\r\n          </div>  \r\n        </div>   \r\n      </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/questionComponent/question.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/questionComponent/question.component.ts ***!
  \********************************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestionComponent = /** @class */ (function () {
    function QuestionComponent() {
        this.answered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    QuestionComponent.prototype.ngOnInit = function () {
        this.questionModel = this.question;
        this.question.answer = 0;
    };
    QuestionComponent.prototype.onAnswer = function () {
        this.answered.emit(this.question.answer);
    };
    QuestionComponent.prototype.onClick = function () {
        this.answered.emit(this.question.answer);
        this.audio = new Audio('/src/assets/sounds/tickel.wav');
        this.audio.volume = this.question.answer / 5;
        this.audio.play();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QuestionComponent.prototype, "question", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], QuestionComponent.prototype, "answered", void 0);
    QuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! ./question.component.html */ "./src/app/components/questionComponent/question.component.html"),
            styles: [__webpack_require__(/*! ./question.component.css */ "./src/app/components/questionComponent/question.component.css")]
        })
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/components/questionSectionComponent/question-section.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/questionSectionComponent/question-section.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Roboto:100\");\r\n\r\n.jumbotron {\r\n  background-color: rgba(87, 89, 167,1);\r\n  color: black;\r\n  border-radius: 50px !important;\r\n  padding: 35px 5px;\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n}\r\n\r\n.section-heading {\r\n  font-size: 45px !important;\r\n  border-radius: 50px !important;\r\n  font-family: Impact, Charcoal, sans-serif;\r\n  font-size: 169px!important;\r\n  letter-spacing: 0px;\r\n  word-spacing: 1.4px;\r\n  font-weight: normal;\r\n  -webkit-text-decoration: none solid rgb(68, 68, 68);\r\n          text-decoration: none solid rgb(68, 68, 68);\r\n  background-color: rgba(87, 89, 167, 0);\r\n  font-style: normal;\r\n  font-variant: small-caps;\r\n  text-transform: capitalize;\r\n  text-align: center;\r\n  height: 100px;\r\n}\r\n\r\nh1 {\r\n  margin: 0;\r\n  margin-top: -5px;\r\n  padding-bottom: 40px;\r\n  font-weight: 100;\r\n}\r\n\r\n.content {\r\n  width: 100%;\r\n  background-color: rgba(87, 89, 167,1);\r\n  padding-top:10px; \r\n}\r\n\r\n.content .header {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  background-color: rgba(71, 73, 189,0);\r\n  padding-top: 200px;\r\n  margin-top: -137px;\r\n  padding-bottom: 135px;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .jumbotron {\r\n    background-color: rgb(87, 89, 167);\r\n    color: black;\r\n    border-radius: 50px !important;\r\n    padding: 35px 5px;\r\n  }\r\n  .content .header {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 0;\r\n    background-color: rgba(71, 73, 189,0);\r\n    padding-top: 20px;\r\n    margin-top: 19px;\r\n    padding-bottom: 41px;\r\n  }\r\n  .section-heading {\r\n    font-size: 45px !important;\r\n    border-radius: 50px !important;\r\n    font-family: Impact, Charcoal, sans-serif;\r\n    font-size: 80px!important;\r\n    letter-spacing: 0px;\r\n    word-spacing: 1.4px;\r\n    font-weight: normal;\r\n    -webkit-text-decoration: none solid rgb(68, 68, 68);\r\n            text-decoration: none solid rgb(68, 68, 68);\r\n    background-color: rgba(87, 89, 167, 1);\r\n    font-style: normal;\r\n    font-variant: small-caps;\r\n    text-transform: capitalize;\r\n    text-align: center;\r\n    height: 100px;\r\n    margin-top:-40px;\r\n  }\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/questionSectionComponent/question-section.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/questionSectionComponent/question-section.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"jumbotron content col-xs-12 col-md-12\">\r\n  <div class=\"container header\">\r\n    <h1 class=\"section-heading \">{{section.sectionName}}</h1>\r\n  </div>\r\n\r\n  <div class=\"content-inner col-md-12\">\r\n  <app-question *ngFor=\"let quest of section.questions\" [question]=\"quest\" (answered)=\"quest.answer = $event\"></app-question>\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/questionSectionComponent/question-section.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/questionSectionComponent/question-section.component.ts ***!
  \***********************************************************************************/
/*! exports provided: QuestionSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionSectionComponent", function() { return QuestionSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestionSectionComponent = /** @class */ (function () {
    function QuestionSectionComponent() {
    }
    QuestionSectionComponent.prototype.ngOnInit = function () {
        this.header = 'Here comes the Header';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QuestionSectionComponent.prototype, "section", void 0);
    QuestionSectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question-section',
            template: __webpack_require__(/*! ./question-section.component.html */ "./src/app/components/questionSectionComponent/question-section.component.html"),
            styles: [__webpack_require__(/*! ./question-section.component.css */ "./src/app/components/questionSectionComponent/question-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuestionSectionComponent);
    return QuestionSectionComponent;
}());



/***/ }),

/***/ "./src/app/components/sectionsComponent/sections.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/sectionsComponent/sections.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.button-padding{\r\n    padding-bottom: 110px;\r\n\r\n}\r\nbutton{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    font-size: 25px;\r\n    float: right;\r\n    background-color: azure;\r\n    width: 200px;\r\n    height: 75px;\r\n    background-color: rgba(16, 18, 129, 0.7);\r\n    border-radius : 50px!important;\r\n    color:white;\r\n}\r\n.button-left{\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    font-size: 25px;\r\n    float: left;\r\n    background-color: azure;\r\n    width: 200px;\r\n    height: 75px;\r\n    background-color: rgba(16, 18, 129, 0.7);\r\n    border-radius : 50px!important;\r\n    color:white;\r\n}\r\n@media only screen and (max-width: 600px) {\r\n    button{\r\n        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n        font-size: 25px;\r\n        float: right;\r\n        background-color: azure;\r\n        width: 130px;\r\n        height: 45px;\r\n        background-color: rgba(16, 18, 129, 0.7);\r\n        border-radius : 50px!important;\r\n        color:white;\r\n    }\r\n    .button-left{\r\n        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n        font-size: 25px;\r\n        float: left;\r\n        background-color: azure;\r\n        width: 130px;\r\n        height: 45px;\r\n        background-color: rgba(16, 18, 129, 0.7);\r\n        border-radius : 50px!important;\r\n        color:white;\r\n    }\r\n}\r\n.loading{\r\n    position:absolute;\r\n    top:0;\r\n    right:0;\r\n    padding-right: 200px;\r\n}\r\n.container{\r\n    padding-bottom: 50px;\r\n}\r\n#helper-container {\r\n    position: fixed;\r\n    top:0;\r\n    left:0;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: table;\r\n    text-align: center;\r\n}\r\n#centered-element {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n}\r\n#centered-element .content {\r\n    display: inline-block;\r\n    overflow-y: scroll;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/sectionsComponent/sections.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/sectionsComponent/sections.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"helper-container\" *ngIf=\"loading\">\r\n    <div id=\"centered-element\">\r\n       <div class=\"content\">\r\n              <mat-spinner diameter=100 strokeWidth=10></mat-spinner>\r\n       </div>\r\n    </div>\r\n </div>\r\n\r\n\r\n\r\n\r\n<div class=\"container\" *ngIf=\"!loading\">\r\n  <app-question-section *ngFor=\"let section of sectionsdata\" [section]=\"section\"></app-question-section>\r\n  <div class=\"button-padding\">\r\n    <button mat-button (click)=\"logsomemassage()\">Submit</button>\r\n    <button mat-button class=\"button-left\" (click)=\"logsomemassage()\">Clear</button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/sectionsComponent/sections.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/sectionsComponent/sections.component.ts ***!
  \********************************************************************/
/*! exports provided: SectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsComponent", function() { return SectionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_section_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/section.service */ "./src/app/services/section.service.ts");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var SectionsComponent = /** @class */ (function () {
    function SectionsComponent(sectionService) {
        this.sectionService = sectionService;
    }
    SectionsComponent.prototype.logsomemassage = function () {
        console.log(this.sectionsdata);
    };
    // tslint:disable-next-line:use-life-cycle-interface
    SectionsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.loading = true;
                this.sectionService.getSection().subscribe(function (data) { return _this.sectionsdata = data; }, function (err) { return _this.error = err; }, function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, Object(q__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000)];
                            case 1:
                                _a.sent();
                                this.loading = false;
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SectionsComponent.prototype, "sections", void 0);
    SectionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sections',
            template: __webpack_require__(/*! ./sections.component.html */ "./src/app/components/sectionsComponent/sections.component.html"),
            styles: [__webpack_require__(/*! ./sections.component.css */ "./src/app/components/sectionsComponent/sections.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_section_service__WEBPACK_IMPORTED_MODULE_1__["SectionService"]])
    ], SectionsComponent);
    return SectionsComponent;
}());



/***/ }),

/***/ "./src/app/pages/aboutus/aboutus-page.component.css":
/*!**********************************************************!*\
  !*** ./src/app/pages/aboutus/aboutus-page.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/aboutus/aboutus-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/aboutus/aboutus-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<img src=\"/src/assets/images/devloper1.jpg\" alt=\"Avatar\" style=\"width:300px;height:auto;\">\n<div>Pradeep</div>"

/***/ }),

/***/ "./src/app/pages/aboutus/aboutus-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/aboutus/aboutus-page.component.ts ***!
  \*********************************************************/
/*! exports provided: AboutusPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPageComponent", function() { return AboutusPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusPageComponent = /** @class */ (function () {
    function AboutusPageComponent() {
    }
    AboutusPageComponent.prototype.ngOnInit = function () {
    };
    AboutusPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutus-page',
            template: __webpack_require__(/*! ./aboutus-page.component.html */ "./src/app/pages/aboutus/aboutus-page.component.html"),
            styles: [__webpack_require__(/*! ./aboutus-page.component.css */ "./src/app/pages/aboutus/aboutus-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusPageComponent);
    return AboutusPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin-landing/admin-landing-page.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/pages/admin-landing/admin-landing-page.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/admin-landing/admin-landing-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/admin-landing/admin-landing-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-landing-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/admin-landing/admin-landing-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/admin-landing/admin-landing-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminLandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLandingPageComponent", function() { return AdminLandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminLandingPageComponent = /** @class */ (function () {
    function AdminLandingPageComponent() {
    }
    AdminLandingPageComponent.prototype.ngOnInit = function () {
    };
    AdminLandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-landing-page',
            template: __webpack_require__(/*! ./admin-landing-page.component.html */ "./src/app/pages/admin-landing/admin-landing-page.component.html"),
            styles: [__webpack_require__(/*! ./admin-landing-page.component.css */ "./src/app/pages/admin-landing/admin-landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminLandingPageComponent);
    return AdminLandingPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/pagenotfound/pagenotfound-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/pages/pagenotfound/pagenotfound-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/pagenotfound/pagenotfound-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/pagenotfound/pagenotfound-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<body>\n<img src=\"/src/assets/images/pagenotfound.jpg\" alt=\"Page Not Found\" style=\"width:95%; height:auto; padding-left: 6%;margin-top: -10px;\">\n</body>\n</html>\n "

/***/ }),

/***/ "./src/app/pages/pagenotfound/pagenotfound-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/pagenotfound/pagenotfound-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: PagenotfoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundPageComponent", function() { return PagenotfoundPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagenotfoundPageComponent = /** @class */ (function () {
    function PagenotfoundPageComponent() {
    }
    PagenotfoundPageComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagenotfound-page',
            template: __webpack_require__(/*! ./pagenotfound-page.component.html */ "./src/app/pages/pagenotfound/pagenotfound-page.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound-page.component.css */ "./src/app/pages/pagenotfound/pagenotfound-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundPageComponent);
    return PagenotfoundPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/student-landing/student-landing-page.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/pages/student-landing/student-landing-page.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/student-landing/student-landing-page.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/student-landing/student-landing-page.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sections (loadingStatus)=\"loading=$event\" ></app-sections>"

/***/ }),

/***/ "./src/app/pages/student-landing/student-landing-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/student-landing/student-landing-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: StudentLandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentLandingPageComponent", function() { return StudentLandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudentLandingPageComponent = /** @class */ (function () {
    function StudentLandingPageComponent() {
    }
    StudentLandingPageComponent.prototype.ngOnInit = function () {
    };
    StudentLandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-landing-page',
            template: __webpack_require__(/*! ./student-landing-page.component.html */ "./src/app/pages/student-landing/student-landing-page.component.html"),
            styles: [__webpack_require__(/*! ./student-landing-page.component.css */ "./src/app/pages/student-landing/student-landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentLandingPageComponent);
    return StudentLandingPageComponent;
}());



/***/ }),

/***/ "./src/app/services/section.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/section.service.ts ***!
  \*********************************************/
/*! exports provided: SectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionService", function() { return SectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SectionService = /** @class */ (function () {
    function SectionService(http) {
        this.http = http;
    }
    SectionService.prototype.getSection = function () {
        return this.http.get('api/mockServices/section.json');
    };
    SectionService.prototype.getString = function () {
        return this.http.get('api/mockServices/string.json');
    };
    SectionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SectionService);
    return SectionService;
}());



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\Others\FeedbackApp\client\feedbackApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map