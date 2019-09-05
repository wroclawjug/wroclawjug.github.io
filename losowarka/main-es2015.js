(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n  <!--<img [src]=\"logoImage\" style=\"width: 50px; display: inline-block;\" />-->\n  <h1 style=\"display: inline-block;\">WrocławJUG Random Attendee</h1>\n</div>\n<attendees>ha</attendees>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/attendees/attendees.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/attendees/attendees.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid grid-pad\">\n  <H3>{{attendees.length}} attendees subscribed</H3>\n\n  <div class=\"giant-random-button-holder\">\n    <button (click)=\"randomAttendee()\" class=\"giant-random-button\">Random Attendee</button>\n    <button (click)=\"clearRandomAttendees()\" class=\"giant-random-button\">Clear</button>\n    <button (click)=\"notPresent()\" class=\"giant-random-button\">Last not present</button>\n    <br/>\n    <label>Hide config: <input type=\"checkbox\" (change)=\"toggleConfig()\" [checked]=\"hideConfig\"></label>\n    <br/>\n    <div *ngIf=\"!hideConfig\" class=\"animate-if\">\n      <button *ngIf=\"!isLoggedIn()\" class=\"btn btn-default\" (click)=\"login()\">\n        Login\n      </button>\n      <br/>\n      <br/>\n      <div *ngIf=\"meetupEvents.length === 0\" >\n        <button (click)=\"fetchMettupEvents()\" class=\"btn btn-default\">Load Meetups</button>\n      </div>\n      <label class=\"giant-label\">Meetups</label>\n      <br/>\n      <div>\n        <a *ngFor=\"let meetup of meetupEvents\">\n          <button (click)=\"eventIdProvided($event.target.value)\" class=\"giant-random-button\"\n                  value=\"{{meetup.id}}\">{{meetup.name}}</button>\n          <br/>\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"winners.length !== 0\">\n    <h2>Winners!</h2>\n    <div>\n      <a *ngFor=\"let person of winners\" class=\"col-1-8\" >\n        <div class=\"module hero\">\n          <h4>{{person.member.name}}</h4>\n          <img class=\"attendeePhoto\" src=\"{{this.realUrl(person.member.photo)}}\">\n          <div class=\"moduletooltip\">\n            <h2><a href=\"https://www.meetup.com/members/{{person.member.id}}/\" target=\"_blank\">\n              {{person.member.name}}\n            </a></h2>\n            <img class=\"attendeePhotoFull\" src=\"{{this.highResPhotoUrl(person.member.photo)}}\">\n          </div>\n        </div>\n      </a>\n    </div>\n  </div>\n\n  <div style=\"clear: both\" *ngIf=\"loosers.length !== 0\">\n    <h2>Guys who missed their opportunity :)</h2>\n    <a *ngFor=\"let person of loosers\" class=\"col-1-8\">\n      <div class=\"module hero\">\n        <h4>{{person.member.name}}</h4>\n        <img class=\"attendeePhoto\" src=\"{{this.realUrl(person.member.photo)}}\">\n        <div class=\"moduletooltip\">\n          <h2><a href=\"https://www.meetup.com/members/{{person.member.id}}/\" target=\"_blank\">\n            {{person.member.name}}\n          </a></h2>\n          <img class=\"attendeePhotoFull\" src=\"{{this.highResPhotoUrl(person.member.photo)}}\">\n        </div>\n      </div>\n    </a>\n  </div>\n</div>\n"

/***/ }),

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

module.exports = "h1 {\n  font-size: 3em;\n  color: lightslategrey;\n  margin-bottom: 0;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgZm9udC1zaXplOiAzZW07XG4gIGNvbG9yOiBsaWdodHNsYXRlZ3JleTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let AppComponent = class AppComponent {
    constructor(oauthService, location) {
        this.oauthService = oauthService;
        this.logoImage = '/assets/img/WroclawJUG.png';
        this.location = location;
        const authConfig = {
            loginUrl: 'https://secure.meetup.com/oauth2/authorize',
            redirectUri: window.location.origin + this.location.prepareExternalUrl('index.html'),
            clientId: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].oauth2ClientId,
            scope: 'basic',
            oidc: false,
        };
        this.oauthService.configure(authConfig);
    }
};
AppComponent.ctorParameters = () => [
    { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["OAuthService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
];
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'my-app',
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["PathLocationStrategy"] }],
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["OAuthService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
], AppComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _attendees_attendees_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attendees/attendees.service */ "./src/app/attendees/attendees.service.ts");
/* harmony import */ var _attendees_attendees_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attendees/attendees.component */ "./src/app/attendees/attendees.component.ts");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








const authModuleConfig = {
    resourceServer: {
        allowedUrls: [
            'https://api.meetup.com/',
            'https://cors-anywhere.herokuapp.com/',
        ],
        sendAccessToken: true
    }
};
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientJsonpModule"],
            angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__["OAuthModule"].forRoot(authModuleConfig),
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _attendees_attendees_component__WEBPACK_IMPORTED_MODULE_6__["AttendeesComponent"]
        ],
        providers: [
            _attendees_attendees_service__WEBPACK_IMPORTED_MODULE_5__["AttendeesService"],
            { provide: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__["OAuthModuleConfig"], useValue: authModuleConfig },
            { provide: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__["ValidationHandler"], useClass: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__["JwksValidationHandler"] },
            { provide: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__["OAuthStorage"], useValue: localStorage },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/attendees/attendees.component.css":
/*!***************************************************!*\
  !*** ./src/app/attendees/attendees.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n\n/*[class*='col-']:last-of-type {*/\n\n/*padding-right: 0;*/\n\n/*}*/\n\ndiv {\n  clear: both\n}\n\nimg {\n  max-width:100%;\n  max-height:100%;\n}\n\na {\n  text-decoration: none;\n}\n\n*, *:after, *:before {\n  box-sizing: border-box;\n}\n\nh3 {\n  margin-top: 0;\n  text-align: center;\n  margin-bottom: 0;\n  font-size: 30px;\n}\n\nh4 {\n  position: relative;\n}\n\n.grid {\n  margin: 0;\n}\n\n.col-1-8 {\n  width: 12.5%;\n}\n\n.module {\n  padding: 5px;\n  text-align: center;\n  color: #eee;\n  max-height: 240px;\n  height: 170px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 2px;\n}\n\n.module:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n\n.module .moduletooltip {\n  visibility: hidden;\n  width: 90%;\n  height: 90%;\n  background-color: #607D8B;\n  color: #EEE;\n  border-radius: 6px;\n  position: fixed;\n  top: 5%;\n  left: 5%;\n  right: 5%;\n  bottom: 5%;\n  z-index: 1;\n}\n\n.module:hover .moduletooltip {\n  visibility: visible;\n}\n\n.moduletooltip a {\n  color: #EEE;\n}\n\n.grid-pad {\n  padding: 10px 0;\n}\n\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n\n.giant-random-button-holder {\n  padding: 15px;\n  border-radius: 10px;\n  text-align: center;\n}\n\n.giant-label {\n  padding: 15px;\n  font-size: 25px;\n  color: #039be5;\n}\n\n.giant-random-button {\n  padding: 15px;\n  font-size: 25px;\n  color: #039be5;\n}\n\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 140px;\n  }\n\n  .col-1-8 {\n    width: 25%;\n  }\n}\n\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n\n  .module {\n    min-width: 60px;\n  }\n\n  .col-1-8 {\n    width: 20%;\n  }\n}\n\n.attendeePhoto {\n    max-width: 80px;\n    max-height: 80px;\n}\n\n.attendeePhotoFull {\n    max-width: 80%;\n    max-height: 80%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXR0ZW5kZWVzL2F0dGVuZGVlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUEsaUNBQWlDOztBQUMvQixvQkFBb0I7O0FBQ3RCLElBQUk7O0FBRUo7RUFDRTtBQUNGOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2F0dGVuZGVlcy9hdHRlbmRlZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIltjbGFzcyo9J2NvbC0nXSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLypbY2xhc3MqPSdjb2wtJ106bGFzdC1vZi10eXBlIHsqL1xuICAvKnBhZGRpbmctcmlnaHQ6IDA7Ki9cbi8qfSovXG5cbmRpdiB7XG4gIGNsZWFyOiBib3RoXG59XG5cbmltZyB7XG4gIG1heC13aWR0aDoxMDAlO1xuICBtYXgtaGVpZ2h0OjEwMCU7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiosICo6YWZ0ZXIsICo6YmVmb3JlIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmgzIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbmg0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZ3JpZCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNvbC0xLTgge1xuICB3aWR0aDogMTIuNSU7XG59XG5cbi5tb2R1bGUge1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNlZWU7XG4gIG1heC1oZWlnaHQ6IDI0MHB4O1xuICBoZWlnaHQ6IDE3MHB4O1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5tb2R1bGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjNjA3ZDhiO1xufVxuXG4ubW9kdWxlIC5tb2R1bGV0b29sdGlwIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcbiAgY29sb3I6ICNFRUU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUlO1xuICBsZWZ0OiA1JTtcbiAgcmlnaHQ6IDUlO1xuICBib3R0b206IDUlO1xuICB6LWluZGV4OiAxO1xufVxuXG4ubW9kdWxlOmhvdmVyIC5tb2R1bGV0b29sdGlwIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLm1vZHVsZXRvb2x0aXAgYSB7XG4gIGNvbG9yOiAjRUVFO1xufVxuXG4uZ3JpZC1wYWQge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbi5ncmlkLXBhZCA+IFtjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4uZ2lhbnQtcmFuZG9tLWJ1dHRvbi1ob2xkZXIge1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5naWFudC1sYWJlbCB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICMwMzliZTU7XG59XG5cbi5naWFudC1yYW5kb20tYnV0dG9uIHtcbiAgcGFkZGluZzogMTVweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzAzOWJlNTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tb2R1bGUge1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBtYXgtaGVpZ2h0OiAxNDBweDtcbiAgfVxuXG4gIC5jb2wtMS04IHtcbiAgICB3aWR0aDogMjUlO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmdyaWQge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5tb2R1bGUge1xuICAgIG1pbi13aWR0aDogNjBweDtcbiAgfVxuXG4gIC5jb2wtMS04IHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG59XG5cbi5hdHRlbmRlZVBob3RvIHtcbiAgICBtYXgtd2lkdGg6IDgwcHg7XG4gICAgbWF4LWhlaWdodDogODBweDtcbn1cblxuLmF0dGVuZGVlUGhvdG9GdWxsIHtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBtYXgtaGVpZ2h0OiA4MCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/attendees/attendees.component.ts":
/*!**************************************************!*\
  !*** ./src/app/attendees/attendees.component.ts ***!
  \**************************************************/
/*! exports provided: AttendeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendeesComponent", function() { return AttendeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _attendees_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attendees.service */ "./src/app/attendees/attendees.service.ts");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AttendeesComponent = class AttendeesComponent {
    constructor(attendeeService, oauthService) {
        this.attendeeService = attendeeService;
        this.oauthService = oauthService;
        this.meetupEvents = [];
        this.attendees = [];
        this.winners = [];
        this.loosers = [];
        this.usedIndexes = [];
        this.eventId = 0;
        this.hideConfig = false;
        this.notFoundPhoto = 'http://s.quickmeme.com/img/a8/a8022006b463b5ed9be5a62f1bdbac43b4f3dbd5c6b3bb44707fe5f5e26635b0.jpg';
        this.oauthService.tryLogin().then(result => {
            if (this.oauthService.hasValidAccessToken()) {
                this.fetchMettupEvents();
            }
        });
    }
    login() {
        this.oauthService.initImplicitFlow();
    }
    isLoggedIn() {
        return this.oauthService.hasValidAccessToken();
    }
    realUrl(photo) {
        try {
            return photo.thumb_link;
        }
        catch (err) {
            return this.notFoundPhoto;
        }
    }
    highResPhotoUrl(photo) {
        let photoUrl = this.notFoundPhoto;
        if (photo) {
            if (photo.highres_link) {
                photoUrl = photo.highres_link;
            }
            else if (photo.photo_link) {
                photoUrl = photo.photo_link;
            }
            else {
                photoUrl = photo.thumb_link;
            }
        }
        return photoUrl;
    }
    toggleConfig() {
        this.hideConfig = !(this.hideConfig);
    }
    eventIdProvided(newEventId) {
        this.eventId = newEventId;
        this.toggleConfig();
        this.fetchAttendees();
    }
    fetchMettupEvents() {
        this.attendeeService.getMeetupEvents()
            .then(meetupEvents => this.meetupEvents = meetupEvents);
    }
    fetchAttendees() {
        if (this.eventId > 0) {
            this.attendeeService.getAttendees(this.eventId)
                .then(attendees => this.attendees = attendees);
        }
    }
    randomAttendee() {
        if (this.attendees.length === 0) {
            alert('Patience, my young apprentice');
        }
        else if (this.attendees.length === this.usedIndexes.length) {
            alert('Everyone was already choosen');
        }
        else {
            let winner = this.attendees[this.randomAttendeeIndexWithoutRepetition()];
            this.attendeeService.getMemberFull(winner)
                .then(memberFull => {
                this.winners.unshift(winner);
            });
        }
    }
    clearRandomAttendees() {
        this.winners = [];
        this.loosers = [];
        this.usedIndexes = [];
    }
    notPresent() {
        // TODO: copy-paste from randomAttendee. some js method reference magic would be probably nice
        if (this.attendees.length === 0) {
            alert('Patience, my young apprentice');
        }
        else if (this.winners.length === 0) {
            alert('Try randomizing someone before marking them as absent first'); // TODO: how to show modals? :D
        }
        else {
            let notPresent = this.winners[0]; // TODO: pop should also work
            this.winners.shift();
            this.loosers.unshift(notPresent);
        }
    }
    randomAttendeeIndexWithoutRepetition() {
        let randomAttendeeIndex;
        do {
            randomAttendeeIndex = Math.floor(Math.random() * this.attendees.length - 1) + 1;
        } while (this.usedIndexes.indexOf(randomAttendeeIndex) >= 0);
        this.usedIndexes.push(randomAttendeeIndex);
        return randomAttendeeIndex;
    }
};
AttendeesComponent.ctorParameters = () => [
    { type: _attendees_service__WEBPACK_IMPORTED_MODULE_1__["AttendeesService"] },
    { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["OAuthService"] }
];
AttendeesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'attendees',
        template: __webpack_require__(/*! raw-loader!./attendees.component.html */ "./node_modules/raw-loader/index.js!./src/app/attendees/attendees.component.html"),
        styles: [__webpack_require__(/*! ./attendees.component.css */ "./src/app/attendees/attendees.component.css")]
    }),
    __metadata("design:paramtypes", [_attendees_service__WEBPACK_IMPORTED_MODULE_1__["AttendeesService"], angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["OAuthService"]])
], AttendeesComponent);



/***/ }),

/***/ "./src/app/attendees/attendees.service.ts":
/*!************************************************!*\
  !*** ./src/app/attendees/attendees.service.ts ***!
  \************************************************/
/*! exports provided: AttendeesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendeesService", function() { return AttendeesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm2015/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
let wjugUrlBase = `${corsAnywhere}https://api.meetup.com/WroclawJUG/events/`;
let membersUrlBase = `${corsAnywhere}https://api.meetup.com/members/`;
let AttendeesService = class AttendeesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getMeetupEvents() {
        return this.httpClient.get(this.buildMeetupEventsUrl())
            .toPromise()
            .catch(this.handleError);
    }
    getAttendees(eventId) {
        console.log('getAttendees');
        return this.httpClient.get(this.buildLastMeetupUrl(eventId))
            .toPromise()
            .catch(this.handleError);
    }
    getMemberFull(attende) {
        return this.httpClient.get(this.buildMemberFullUrl(attende.member.id))
            .toPromise()
            .catch(this.handleError);
    }
    // example https://api.meetup.com/WroclawJUG/events/123/attendance?callback=__ng_jsonp__.__req0.finished&key=XYZ
    buildLastMeetupUrl(meetupId) {
        return `${wjugUrlBase}${meetupId}/attendance`;
    }
    // example https://api.meetup.com/WroclawJUG/events?&sign=true&photo-host=public&page=20
    buildMeetupEventsUrl() {
        return `${wjugUrlBase}?scroll=recent_past`;
    }
    buildMemberFullUrl(id) {
        return `${membersUrlBase}${id}`;
    }
    handleError(error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
};
AttendeesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AttendeesService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], AttendeesService);



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
    production: true,
    oauth2ClientId: 't2vnvuf3pb99hka5tao2do6bki',
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
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/wroclawjug/wroclawjug-random-attendee/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map