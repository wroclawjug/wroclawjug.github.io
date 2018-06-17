webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  font-size: 3em;\n  color: lightslategrey;\n  margin-bottom: 0;\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n  <img [src]=\"logoImage\" style=\"width: 50px; display: inline-block;\" />\n  <h1 style=\"display: inline-block;\">WrocławJUG Random Attendee</h1>\n</div>\n<attendees>ha</attendees>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var AppComponent = (function () {
    function AppComponent() {
        this.logoImage = '/assets/img/WroclawJUG.png';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        template: __webpack_require__("../../../../../src/app/app.component.html"),
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
// import {AppRoutingModule} from "./app-routing.module";
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var attendees_service_1 = __webpack_require__("../../../../../src/app/attendees/attendees.service.ts");
var attendees_component_1 = __webpack_require__("../../../../../src/app/attendees/attendees.component.ts");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            attendees_component_1.AttendeesComponent
        ],
        providers: [
            attendees_service_1.AttendeesService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/attendees/attendees.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*='col-'] {\n  float: left;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n\n/*[class*='col-']:last-of-type {*/\n  /*padding-right: 0;*/\n/*}*/\n\ndiv {\n  clear: both\n}\n\nimg {\n  max-width:100%;\n  max-height:100%;\n}\n\na {\n  text-decoration: none;\n}\n\n*, *:after, *:before {\n  box-sizing: border-box;\n}\n\nh3 {\n  margin-top: 0;\n  text-align: center;\n  margin-bottom: 0;\n  font-size: 30px;\n}\n\nh4 {\n  position: relative;\n}\n\n.grid {\n  margin: 0;\n}\n\n.col-1-8 {\n  width: 12.5%;\n}\n\n.module {\n  padding: 5px;\n  text-align: center;\n  color: #eee;\n  max-height: 240px;\n  height: 170px;\n  min-width: 120px;\n  background-color: #607D8B;\n  border-radius: 2px;\n}\n\n.module:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n\n.module .moduletooltip {\n  visibility: hidden;\n  width: 90%;\n  height: 90%;\n  background-color: #607D8B;\n  color: #EEE;\n  border-radius: 6px;\n  position: fixed;\n  top: 5%;\n  left: 5%;\n  right: 5%;\n  bottom: 5%;\n  z-index: 1;\n}\n\n.module:hover .moduletooltip {\n  visibility: visible;\n}\n\n.moduletooltip a {\n  color: #EEE;\n}\n\n.grid-pad {\n  padding: 10px 0;\n}\n\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n\n.giant-random-button-holder {\n  padding: 15px;\n  border-radius: 10px;\n  text-align: center;\n}\n\n.giant-label {\n  padding: 15px;\n  font-size: 25px;\n  color: #039be5;\n}\n\n.giant-random-button {\n  padding: 15px;\n  font-size: 25px;\n  color: #039be5;\n}\n\n@media (max-width: 600px) {\n  .module {\n    font-size: 10px;\n    max-height: 140px;\n  }\n\n  .col-1-8 {\n    width: 25%;\n  }\n}\n\n@media (max-width: 1024px) {\n  .grid {\n    margin: 0;\n  }\n\n  .module {\n    min-width: 60px;\n  }\n\n  .col-1-8 {\n    width: 20%;\n  }\n}\n\n.attendeePhoto {\n    max-width: 80px;\n    max-height: 80px;\n}\n\n.attendeePhotoFull {\n    max-width: 80%;\n    max-height: 80%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/attendees/attendees.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid grid-pad\">\n  <H3>{{attendees.length}} attendees subscribed</H3>\n\n  <div class=\"giant-random-button-holder\">\n    <button (click)=\"randomAttendee()\" class=\"giant-random-button\">Random Attendee</button>\n    <button (click)=\"clearRandomAttendees()\" class=\"giant-random-button\">Clear</button>\n    <button (click)=\"notPresent()\" class=\"giant-random-button\">Last not present</button>\n    <br/>\n    <label>Hide config: <input type=\"checkbox\" (change)=\"toggleConfig()\" [checked]=\"hideConfig\"></label>\n    <br/>\n    <div *ngIf=\"!hideConfig\" class=\"animate-if\">\n      <label for=\"token\" class=\"giant-label\">Token</label>\n      <input class=\"giant-label\" name=\"token\" type=\"password\" ng-model=\"token\" (change)=\"tokenProvided($event.target.value)\"/>\n      <br/>\n      <br/>\n      <label class=\"giant-label\">Meetups</label>\n      <br/>\n      <div>\n        <a *ngFor=\"let meetup of meetupEvents\">\n          <button (click)=\"eventIdProvided($event.target.value)\" class=\"giant-random-button\" ng-model=\"eventId\"\n                  value=\"{{meetup.id}}\">{{meetup.name}}</button>\n          <br/>\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"winners.length != 0\">\n    <h2>Winners!</h2>\n    <div>\n      <a *ngFor=\"let person of winners\" class=\"col-1-8\" >\n        <div class=\"module hero\">\n          <h4>{{person.member.name}}</h4>\n          <img class=\"attendeePhoto\" src=\"{{this.realUrl(person.member.photo)}}\">\n          <div class=\"moduletooltip\">\n            <h2><a href=\"https://www.meetup.com/members/{{person.member.id}}/\" target=\"_blank\">\n              {{person.member.name}}\n            </a></h2>\n            <img class=\"attendeePhotoFull\" src=\"{{person.member.photoFull}}\">\n          </div>\n        </div>\n      </a>\n    </div>\n  </div>\n\n  <div style=\"clear: both\" *ngIf=\"loosers.length != 0\">\n    <h2>Guys who missed their opportunity :)</h2>\n    <a *ngFor=\"let person of loosers\" class=\"col-1-8\">\n      <div class=\"module hero\">\n        <h4>{{person.member.name}}</h4>\n        <img class=\"attendeePhoto\" src=\"{{this.realUrl(person.member.photo)}}\">\n        <div class=\"moduletooltip\">\n          <h2><a href=\"https://www.meetup.com/members/{{person.member.id}}/\" target=\"_blank\">\n            {{person.member.name}}\n          </a></h2>\n          <img class=\"attendeePhotoFull\" src=\"{{person.member.photoFull}}\">\n        </div>\n      </div>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/attendees/attendees.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var attendees_service_1 = __webpack_require__("../../../../../src/app/attendees/attendees.service.ts");
var AttendeesComponent = (function () {
    function AttendeesComponent(attendeeService) {
        this.attendeeService = attendeeService;
        this.meetupEvents = [];
        this.attendees = [];
        this.winners = [];
        this.loosers = [];
        this.usedIndexes = [];
        this.eventId = 0;
        this.token = '';
        this.hideConfig = false;
        this.notFoundPhoto = 'http://s.quickmeme.com/img/a8/a8022006b463b5ed9be5a62f1bdbac43b4f3dbd5c6b3bb44707fe5f5e26635b0.jpg';
    }
    AttendeesComponent.prototype.realUrl = function (photo) {
        try {
            return photo.thumb;
        }
        catch (err) {
            return this.notFoundPhoto;
        }
    };
    AttendeesComponent.prototype.toggleConfig = function () {
        this.hideConfig = !(this.hideConfig);
    };
    AttendeesComponent.prototype.tokenProvided = function (token) {
        this.token = token;
        this.fetchMettupEvents();
    };
    AttendeesComponent.prototype.eventIdProvided = function (newEventId) {
        this.eventId = newEventId;
        this.toggleConfig();
        this.fetchAttendees();
    };
    AttendeesComponent.prototype.fetchMettupEvents = function () {
        var _this = this;
        if (this.token.length != 0) {
            this.attendeeService.getMettupEvents(this.token)
                .then(function (meetupEvents) { return _this.meetupEvents = meetupEvents; });
        }
    };
    AttendeesComponent.prototype.fetchAttendees = function () {
        var _this = this;
        if (this.eventId > 0 && this.token.length != 0) {
            this.attendeeService.getAttendees(this.eventId, this.token)
                .then(function (attendees) { return _this.attendees = attendees; });
        }
    };
    AttendeesComponent.prototype.randomAttendee = function () {
        var _this = this;
        if (this.attendees.length == 0) {
            alert('Patience, my young apprentice');
        }
        else if (this.attendees.length == this.usedIndexes.length) {
            alert('Everyone was already choosen');
        }
        else {
            var winner_1 = this.attendees[this.randomAttendeeIndexWithoutRepetition()];
            this.attendeeService.getMemberFull(winner_1, this.token)
                .then(function (memberFull) {
                if (memberFull.photo) {
                    if (memberFull.photo.highres_link) {
                        winner_1.member.photoFull = memberFull.photo.highres_link;
                    }
                    else if (memberFull.photo.photo_link) {
                        winner_1.member.photoFull = memberFull.photo.photo_link;
                    }
                    else {
                        winner_1.member.photoFull = memberFull.photo.thumb_link;
                    }
                }
                else {
                    winner_1.member.photoFull = _this.notFoundPhoto;
                }
                _this.winners.unshift(winner_1);
            });
        }
    };
    AttendeesComponent.prototype.randomAttendeeIndexWithoutRepetition = function () {
        var randomAttendeeIndex;
        do {
            randomAttendeeIndex = Math.floor(Math.random() * this.attendees.length - 1) + 1;
        } while (this.usedIndexes.indexOf(randomAttendeeIndex) >= 0);
        this.usedIndexes.push(randomAttendeeIndex);
        return randomAttendeeIndex;
    };
    AttendeesComponent.prototype.clearRandomAttendees = function () {
        this.winners = [];
        this.loosers = [];
        this.usedIndexes = [];
    };
    AttendeesComponent.prototype.notPresent = function () {
        //TODO: copy-paste from randomAttendee. some js method reference magic would be probably nice
        if (this.attendees.length == 0) {
            alert("Patience, my young apprentice");
        }
        else if (this.winners.length == 0) {
            alert("Try randomizing someone before marking them as absent first"); //TODO: how to show modals? :D
        }
        else {
            var notPresent = this.winners[0]; //TODO: pop should also work
            this.winners.shift();
            this.loosers.unshift(notPresent);
        }
    };
    return AttendeesComponent;
}());
AttendeesComponent = __decorate([
    core_1.Component({
        selector: 'attendees',
        styles: [__webpack_require__("../../../../../src/app/attendees/attendees.component.css")],
        template: __webpack_require__("../../../../../src/app/attendees/attendees.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof attendees_service_1.AttendeesService !== "undefined" && attendees_service_1.AttendeesService) === "function" && _a || Object])
], AttendeesComponent);
exports.AttendeesComponent = AttendeesComponent;
var _a;
//# sourceMappingURL=attendees.component.js.map

/***/ }),

/***/ "../../../../../src/app/attendees/attendees.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/add/operator/toPromise.js");
var and = '&';
var wjugUrlBase = 'https://api.meetup.com/WroclawJUG/events/';
var membersUrlBase = 'https://api.meetup.com/members/';
var attendance = '/attendance?';
var question = '?';
var apiKey = 'key=';
var jsonpCallback = 'callback=JSONP_CALLBACK';
var scrollRecentPast = 'scroll=recent_past';
var AttendeesService = (function () {
    function AttendeesService(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
    }
    AttendeesService.prototype.getMettupEvents = function (token) {
        return this.jsonp.get(this.buildMeetupEventsUrl(token))
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    AttendeesService.prototype.getAttendees = function (eventId, token) {
        return this.jsonp.get(this.buildLastMeetupUrl(eventId, token))
            .toPromise()
            .then(function (response) { return response.json().data; })
            .then(function (response) { return response.filter(function (attendee) { return attendee.rsvp.response === 'yes'; }); })
            .catch(this.handleError);
    };
    AttendeesService.prototype.getMemberFull = function (attende, token) {
        return this.jsonp.get(this.buildMemberFullUrl(attende.member.id, token))
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    //example https://api.meetup.com/WroclawJUG/events/123/attendance?callback=__ng_jsonp__.__req0.finished&key=XYZ
    AttendeesService.prototype.buildLastMeetupUrl = function (meetupId, token) {
        return wjugUrlBase + meetupId + attendance + jsonpCallback + and + apiKey + token;
    };
    // example https://api.meetup.com/WroclawJUG/events?&sign=true&photo-host=public&page=20
    AttendeesService.prototype.buildMeetupEventsUrl = function (token) {
        return wjugUrlBase + question + jsonpCallback + and + scrollRecentPast + and + apiKey + token;
    };
    AttendeesService.prototype.buildMemberFullUrl = function (id, token) {
        return membersUrlBase + id + question + jsonpCallback + and + apiKey + token;
    };
    AttendeesService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return AttendeesService;
}());
AttendeesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof http_1.Jsonp !== "undefined" && http_1.Jsonp) === "function" && _b || Object])
], AttendeesService);
exports.AttendeesService = AttendeesService;
var _a, _b;
//# sourceMappingURL=attendees.service.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
core_1.enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map