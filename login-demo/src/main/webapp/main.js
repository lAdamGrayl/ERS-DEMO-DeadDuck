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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = "\r\n\r\n\r\n\r\n\r\n.inModalButtons{\r\n  text-align:center;\r\n  margin:auto;\r\n  padding: 30px;\r\n  background: lightblue;\r\n\r\n}\r\n\r\n\r\n.col-form-label{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n\r\n.form-group{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n\r\n.a{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n\r\na{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n\r\n/* .button{\r\n text-align: center;\r\n    color:black;\r\n    max-width:  500;\r\n   margin: auto;\r\n} */\r\n\r\n\r\nbutton{\r\n  text-align: center;\r\n  color: black;\r\n  max-width:  50%;\r\n  margin: 0 auto;\r\n  display: flex;\r\n}\r\n\r\n\r\n.jumbotron {\r\n  margin:4px;\r\n  font-size: 21px;\r\n  font-weight: 200;\r\n  line-height: 2.1428571435;\r\n  background-color: lightblue;\r\n  border-radius: 25px;\r\n\r\n}\r\n\r\n\r\n.modal.fade.in{\r\n  overflow:auto;\r\n  padding-right:0px !important;\r\n\r\n}\r\n\r\n\r\n.modal-open{overflow:auto;\r\n  padding-right:0px !important;\r\n}\r\n\r\n\r\n.router-outlet{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n\r\nrouter-outlet{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n\r\nli {\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n\r\nul {\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n\r\nh1 {\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n\r\nh2{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n\r\nh3{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n\r\n.container{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n\r\n}\r\n\r\n\r\nrouter-outlet{\r\n  width: 600px;\r\n  margin-top: 100px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: lightblue;\r\n  border: 2px solid black;\r\n  border-radius: 25px;\r\n\r\n\r\n}\r\n\r\n\r\nbody {\r\n  width: 600px;\r\n  margin-top: 100px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: lightblue;\r\n  border: 2px solid black;\r\n  border-radius: 25px;\r\n\r\n\r\n\r\n\r\n}\r\n\r\n\r\np {\r\n  border: 1px solid black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n\r\n"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.refresh = function () {
        window.location.href = 'http://localhost:8080/login/';
    };
    AppComponent.prototype.getUser = function () {
        console.log(JSON.parse(localStorage.getItem("authToken")).firstName),
            console.log(JSON.parse(localStorage.getItem("authToken")).lastName);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_view_reimbursements_view_reimbursements_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/view-reimbursements/view-reimbursements.component */ "./src/app/components/view-reimbursements/view-reimbursements.component.ts");
/* harmony import */ var _components_reimbursement_request_reimbursement_request_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/reimbursement-request/reimbursement-request.component */ "./src/app/components/reimbursement-request/reimbursement-request.component.ts");
/* harmony import */ var _components_approve_or_deny_approve_or_deny_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/approve-or-deny/approve-or-deny.component */ "./src/app/components/approve-or-deny/approve-or-deny.component.ts");
/* harmony import */ var _components_view_all_reimbursements_view_all_reimbursements_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/view-all-reimbursements/view-all-reimbursements.component */ "./src/app/components/view-all-reimbursements/view-all-reimbursements.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
    },
    {
        path: 'reimbursementrequest',
        component: _components_reimbursement_request_reimbursement_request_component__WEBPACK_IMPORTED_MODULE_12__["ReimbursementRequestComponent"]
    },
    {
        path: 'showreimbursementsemp',
        component: _components_view_reimbursements_view_reimbursements_component__WEBPACK_IMPORTED_MODULE_11__["ViewReimbursementsComponent"]
    },
    {
        path: 'showreimbursementsmanager',
        component: _components_view_all_reimbursements_view_all_reimbursements_component__WEBPACK_IMPORTED_MODULE_14__["ViewAllReimbursementsComponent"]
    },
    {
        path: 'approveordenyreimbursements',
        component: _components_approve_or_deny_approve_or_deny_component__WEBPACK_IMPORTED_MODULE_13__["ApproveOrDenyComponent"]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"],
                _components_view_reimbursements_view_reimbursements_component__WEBPACK_IMPORTED_MODULE_11__["ViewReimbursementsComponent"],
                _components_reimbursement_request_reimbursement_request_component__WEBPACK_IMPORTED_MODULE_12__["ReimbursementRequestComponent"],
                _components_approve_or_deny_approve_or_deny_component__WEBPACK_IMPORTED_MODULE_13__["ApproveOrDenyComponent"],
                _components_view_all_reimbursements_view_all_reimbursements_component__WEBPACK_IMPORTED_MODULE_14__["ViewAllReimbursementsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/approve-or-deny/approve-or-deny.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/approve-or-deny/approve-or-deny.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\ntable,ol, *ngFor {\r\n\r\n  text-align: center;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: white;\r\n  border: 2px solid black;\r\n  border-radius: 5px;\r\n  padding: 5px;\r\n  border-spacing: 5px;\r\n\r\n\r\n\r\n\r\n}\r\n\r\nth, tr,form {\r\n  text-align: center;\r\n  border: 1px solid black;\r\n  padding: 5px;\r\n  border-spacing: 15px;\r\n  border-radius: 5px;\r\n\r\n\r\n\r\n}\r\n\r\nnav{\r\n  width: 600px;\r\n  margin-top: 100px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: lightblue;\r\n  border: 2px solid black;\r\n  border-radius: 25px;\r\n\r\n}\r\n\r\n.col-form-label{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n.form-group{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n.a{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\na{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n  border: 2px solid black;\r\n}\r\n\r\n/* .button{\r\n text-align: center;\r\n    color:black;\r\n    max-width:  500;\r\n   margin: auto;\r\n} */\r\n\r\nbutton{\r\n  text-align: center;\r\n  color: black;\r\n  max-width:  50%;\r\n  margin: 0 auto;\r\n  display: flex;\r\n}\r\n\r\n.jumbotron {\r\n  margin:4px;\r\n  font-size: 21px;\r\n  font-weight: 200;\r\n  line-height: 2.1428571435;\r\n  background-color: lightblue;\r\n  border-radius: 25px;\r\n\r\n}\r\n\r\n.modal.fade.in{\r\n  overflow:auto;\r\n  padding-right:0px !important;\r\n\r\n}\r\n\r\n.modal-open{overflow:auto;\r\n  padding-right:0px !important;\r\n}\r\n\r\n.router-outlet{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\nrouter-outlet{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\nli {\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n  border: 1px solid black;\r\n  background-color: white;\r\n\r\n}\r\n\r\nul {\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\nh2{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\nh3{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n.container{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n  background-color: lightblue;\r\n\r\n\r\n}\r\n\r\nrouter-outlet{\r\n  width: 600px;\r\n  margin-top: 100px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: lightblue;\r\n  border: 2px solid black;\r\n  border-radius: 25px;\r\n\r\n\r\n}\r\n\r\nbody {\r\n  width: 600px;\r\n  margin-top: 100px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: lightblue;\r\n  border: 2px solid black;\r\n  border-radius: 25px;\r\n\r\n\r\n\r\n\r\n}\r\n\r\np {\r\n  border: 1px solid black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/approve-or-deny/approve-or-deny.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/approve-or-deny/approve-or-deny.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--<input type=\"checkbox\" (click)=\"fShowApprovedReimbursements()\">Approved<br>-->\n<!--<input type=\"checkbox\" (click)=\"fShowDeniedReimbursements()\">Denied<br>-->\n<!--<input type=\"checkbox\" (click)=\"fShowPendingReimbursements()\">Pending<br>-->\n<nav>\n\n<ol>\n  <h1>Reimbursement Approval</h1>\n\n  <li *ngFor=\"let reimbursement of reimbursements\">\n    <div *ngIf=\"reimbursement.statusId === 1 && showPendingReimbursements\n     || reimbursement.statusId === 2 && showApprovedReimbursements\n      || reimbursement.statusId === 3 && showDeniedReimbursements\">\n      <div>\n        Requester :{{reimbursement.authorId}} <br> Description: {{reimbursement.description}} <br> Amount: ${{reimbursement.amount}} <br> Submit Date: {{reimbursement.dateSubmitted | date}} <br> Type: {{reimbursement.typeId}} <br> Status: {{reimbursement.statusId}}\n\n      <div *ngIf=\"reimbursement.statusId === 1\">\n        <form (ngSubmit)=\"submitRequest(f, reimbursement.id)\" #f=\"ngForm\">\n          <input type=\"radio\" value=\"approve\" ngModel name=\"status\">Approve<br>\n          <input type=\"radio\" value=\"deny\" ngModel name=\"status\">Deny<br>\n          <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Submit</button>\n        </form>\n\n      </div>\n      </div>\n\n      <div *ngIf=\"reimbursement.statusId === 2\">\n        This reimbursement has been approved.\n      </div>\n      <div *ngIf=\"reimbursement.statusId === 3\">\n        This reimbursement has been denied.\n      </div>\n    </div>\n    <br><br>\n  </li>\n\n</ol>\n  <br>\n  <button class=\"submit\" (click)=\"refresh()\">Go Home.</button>\n  <br>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/approve-or-deny/approve-or-deny.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/approve-or-deny/approve-or-deny.component.ts ***!
  \*************************************************************************/
/*! exports provided: ApproveOrDenyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveOrDenyComponent", function() { return ApproveOrDenyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_reimbursement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/reimbursement.service */ "./src/app/services/reimbursement.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _models_Reimbursement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Reimbursement */ "./src/app/models/Reimbursement.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApproveOrDenyComponent = /** @class */ (function () {
    function ApproveOrDenyComponent(reimbursementService, authService) {
        this.reimbursementService = reimbursementService;
        this.authService = authService;
        this.showApprovedReimbursements = true;
        this.showDeniedReimbursements = true;
        this.showPendingReimbursements = true;
        this.type1 = 'Lodging';
        this.type2 = 'Food';
        this.type3 = 'Travel';
        this.type4 = 'Other';
        this.status1 = 'Open';
        this.status2 = 'Approved';
        this.status3 = 'Rejected';
    }
    ApproveOrDenyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reimbursementService.getAllReimbursements()
            .subscribe(function (reimbursements) {
            _this.reimbursements = reimbursements;
        });
    };
    ApproveOrDenyComponent.prototype.submitRequest = function (form, reimbursementId) {
        var reimbursement = new _models_Reimbursement__WEBPACK_IMPORTED_MODULE_3__["Reimbursement"]();
        reimbursement.id = reimbursementId;
        reimbursement.resolverId = this.authService.getLoggedInUser().id;
        reimbursement.dateResolved = new Date();
        if (form.value['status'] === 'approve') {
            reimbursement.statusId = 2;
        }
        else if (form.value['status'] === 'deny') {
            reimbursement.statusId = 3;
        }
        else {
            reimbursement.statusId = 1;
        }
        this.reimbursementService.updateReimbursement(reimbursement)
            .subscribe(function () { return console.log('success'); }, function () { return console.log('failure'); });
        window.location.reload();
    };
    ApproveOrDenyComponent.prototype.fShowApprovedReimbursements = function () {
        this.showApprovedReimbursements = this.showApprovedReimbursements;
    };
    ApproveOrDenyComponent.prototype.fShowDeniedReimbursements = function () {
        this.showDeniedReimbursements = this.showApprovedReimbursements;
    };
    ApproveOrDenyComponent.prototype.fShowPendingReimbursements = function () {
        this.showPendingReimbursements = this.showPendingReimbursements;
    };
    ApproveOrDenyComponent.prototype.refresh = function () {
        window.location.href = 'http://localhost:8080/login/';
    };
    ApproveOrDenyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-approve-or-deny',
            template: __webpack_require__(/*! ./approve-or-deny.component.html */ "./src/app/components/approve-or-deny/approve-or-deny.component.html"),
            styles: [__webpack_require__(/*! ./approve-or-deny.component.css */ "./src/app/components/approve-or-deny/approve-or-deny.component.css")]
        }),
        __metadata("design:paramtypes", [_services_reimbursement_service__WEBPACK_IMPORTED_MODULE_1__["ReimbursementService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ApproveOrDenyComponent);
    return ApproveOrDenyComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.button {\r\n  display: inline-block;\r\n  padding: 15px 25px;\r\n  font-size: 24px;\r\n  cursor: pointer;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  outline: none;\r\n  color: #fff;\r\n  background-color: #4CAF50;\r\n  border: none;\r\n  border-radius: 15px;\r\n  box-shadow: 0 9px #999;\r\n}\r\n\r\n.button:hover {background-color: #3e8e41}\r\n\r\n.button:active {\r\n  background-color: #3e8e41;\r\n  box-shadow: 0 5px #666;\r\n  -webkit-transform: translateY(4px);\r\n          transform: translateY(4px);\r\n}\r\n\r\n.inModalButtons{\r\n  text-align:center;\r\n  margin:auto;\r\n  padding: 30px;\r\n  background: lightblue;\r\n\r\n}\r\n\r\n.col-form-label{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n.form-group{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n.a{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\na{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n/* .button{\r\n text-align: center;\r\n    color:black;\r\n    max-width:  500;\r\n   margin: auto;\r\n} */\r\n\r\nbutton{\r\n  text-align: center;\r\n  color: black;\r\n  max-width:  50%;\r\n  margin: 0 auto;\r\n  display: flex;\r\n}\r\n\r\n.jumbotron {\r\n  margin:4px;\r\n  font-size: 21px;\r\n  font-weight: 200;\r\n  line-height: 2.1428571435;\r\n  background-color: lightblue;\r\n  border-radius: 25px;\r\n\r\n}\r\n\r\n.modal.fade.in{\r\n  overflow:auto;\r\n  padding-right:0px !important;\r\n\r\n}\r\n\r\n.modal-open{overflow:auto;\r\n  padding-right:0px !important;\r\n}\r\n\r\n.router-outlet{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\nrouter-outlet{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\nh2{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\nh3{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n.container{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n\r\n}\r\n\r\nbody {\r\n  width: 600px;\r\n  margin-top: 100px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: lightblue;\r\n  border: 2px solid black;\r\n  border-radius: 25px;\r\n\r\n\r\n\r\n\r\n}\r\n\r\np {\r\n  border: 1px solid black;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav [navItems]=\"userNavs\"></app-nav>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.authService.hasRoles(['Manager'])) {
            this.userNavs = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].managerNav;
            // forward to manager page
        }
        else {
            this.userNavs = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].employeeNav;
            // forward to employee page
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\ntable {\r\n\r\n  text-align: center;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: white;\r\n  border: 2px solid black;\r\n  border-radius: 5px;\r\n  padding: 5px;\r\n  border-spacing: 5px;\r\n}\r\n\r\n  input{\r\n\r\n    text-align: center;\r\n    color: black;\r\n    max-width:  50%;\r\n    margin: 0 auto;\r\n    display: flex;\r\n\r\n  }\r\n\r\n  th, td, tr,input {\r\n  text-align: center;\r\n  border: 1px solid black;\r\n  padding: 5px;\r\n  border-spacing: 15px;\r\n  border-radius: 5px;\r\n  background-color: white;\r\n\r\n\r\n\r\n\r\n\r\n}\r\n\r\n  .form-container, ngForm{\r\n  width: 600px;\r\n  margin-top: 100px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: lightblue;\r\n  border: 2px solid black;\r\n  border-radius: 25px;\r\n\r\n}\r\n\r\n  .col-form-label{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n  .form-group{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n  .a{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n  a{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n  /* .button{\r\n text-align: center;\r\n    color:black;\r\n    max-width:  500;\r\n   margin: auto;\r\n} */\r\n\r\n  button{\r\n  text-align: center;\r\n  color: black;\r\n  max-width:  50%;\r\n  margin: 0 auto;\r\n  display: flex;\r\n}\r\n\r\n  .jumbotron {\r\n  margin:4px;\r\n  font-size: 21px;\r\n  font-weight: 200;\r\n  line-height: 2.1428571435;\r\n  background-color: lightblue;\r\n  border-radius: 25px;\r\n\r\n}\r\n\r\n  .modal.fade.in{\r\n  overflow:auto;\r\n  padding-right:0px !important;\r\n\r\n}\r\n\r\n  .modal-open{overflow:auto;\r\n  padding-right:0px !important;\r\n}\r\n\r\n  .router-outlet{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n  router-outlet{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n  li {\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n  ul {\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n  h1 {\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n  h2{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n  h3{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n  .container{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n\r\n}\r\n\r\n  router-outlet{\r\n  width: 600px;\r\n  margin-top: 100px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: lightblue;\r\n  border: 2px solid black;\r\n  border-radius: 25px;\r\n\r\n\r\n}\r\n\r\n  body {\r\n  width: 600px;\r\n  margin-top: 100px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: lightblue;\r\n  border: 2px solid black;\r\n  border-radius: 25px;\r\n\r\n\r\n\r\n\r\n}\r\n\r\n  p {\r\n  border: 1px solid black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\r\n  <br>\r\n  <h1> Employee Reimbursement System.</h1>\r\n  <br>\r\n  <br>\r\n  <h3>By</h3><br>\r\n  <h3> Eric Webb and Adam Gray.</h3>\r\n  <form #loginForm=\"ngForm\" novalidate (ngSubmit)=\"loginSubmit()\">\r\n    <br>\r\n<br>\r\n    <div>\r\n      <input \r\n      type=\"text\"\r\n      name=\"username\" \r\n      placeholder=\"email\"\r\n      [(ngModel)]=\"username\"\r\n      required/>\r\n    </div>  <br>\r\n\r\n    <div>\r\n      <input \r\n        type=\"password\"\r\n        name=\"password\"\r\n        placeholder=\"password\"\r\n        [(ngModel)]=\"password\"\r\n        required/>\r\n    </div>  <br>\r\n\r\n    <div>\r\n      <button type=\"submit\" [disabled]=\"!loginForm.valid\">Login</button>\r\n    </div>  <br>\r\n\r\n  </form>  <br>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
    };
    LoginComponent.prototype.loginSubmit = function () {
        var _this = this;
        this.authService.authenticate(this.username, this.password, function () { return _this.router.navigate([_this.returnUrl]); }, function (err) {
            console.log(err);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/nav/nav.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n\r\nnav{\r\n  width: 600px;\r\n  margin-top: 100px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: lightblue;\r\n  border: 2px solid black;\r\n  border-radius: 25px;\r\n\r\n}\r\n\r\n\r\n.col-form-label{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n\r\n.form-group{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n\r\n.a{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n\r\na{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n\r\n/* .button{\r\n text-align: center;\r\n    color:black;\r\n    max-width:  500;\r\n   margin: auto;\r\n} */\r\n\r\n\r\nbutton{\r\n  text-align: center;\r\n  color: black;\r\n  max-width:  50%;\r\n  margin: 0 auto;\r\n  display: flex;\r\n}\r\n\r\n\r\n.jumbotron {\r\n  margin:4px;\r\n  font-size: 21px;\r\n  font-weight: 200;\r\n  line-height: 2.1428571435;\r\n  background-color: lightblue;\r\n  border-radius: 25px;\r\n\r\n}\r\n\r\n\r\n.modal.fade.in{\r\n  overflow:auto;\r\n  padding-right:0px !important;\r\n\r\n}\r\n\r\n\r\n.modal-open{overflow:auto;\r\n  padding-right:0px !important;\r\n}\r\n\r\n\r\n.router-outlet{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n\r\nrouter-outlet{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n\r\nli {\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n\r\nul {\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n\r\nh1 {\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n\r\nh2{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n\r\nh3{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n\r\n.container{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n\r\n}\r\n\r\n\r\nrouter-outlet{\r\n  width: 600px;\r\n  margin-top: 100px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: lightblue;\r\n  border: 2px solid black;\r\n  border-radius: 25px;\r\n\r\n\r\n}\r\n\r\n\r\nbody {\r\n  width: 600px;\r\n  margin-top: 100px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: lightblue;\r\n  border: 2px solid black;\r\n  border-radius: 25px;\r\n\r\n\r\n\r\n\r\n}\r\n\r\n\r\np {\r\n  border: 1px solid black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<nav>\r\n  <br>\r\n\r\n  <h1> You are now logged into the  <h1 id=\"roles\"></h1> portal.</h1>\r\n    <br><br>\r\n  <h1> Welcome back <h1 id=\"firstname\"> ! </h1> </h1>\r\n    <br><br><br>\r\n\r\n  <!--<button type=\"button\" (click)=\"getUser()\">Get user Name</button>-->\r\n  <!--&lt;!&ndash;<ul>&ndash;&gt;-->\r\n    <!--&lt;!&ndash;<li *ngFor=\"let item of navItems\"><a =\"\">{{item.title}}</a>&ndash;&gt;-->\r\n    <!--&lt;!&ndash;</li>&ndash;&gt;-->\r\n  <!--&lt;!&ndash;</ul>&ndash;&gt;-->\r\n  <!--<p id=\"role\"></p>-->\r\n    <ul>\r\n      <li *ngFor=\"let item of navItems\"><a [routerLink]=\"['/', item.link]\">{{item.title}}</a>\r\n      </li>\r\n    </ul>\r\n<br><br>\r\n  <br>\r\n  <button type=\"submit\" (click)=\"Logout()\">Logout</button>\r\n  <br>\r\n  <button class=\"submit\" (click)=\"refresh()\">Reload</button>\r\n  <br>\r\n</nav>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



"";
var NavComponent = /** @class */ (function () {
    function NavComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
    }
    NavComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        var every = JSON.parse(localStorage.getItem(('authToken')));
        var firstName = document.getElementById('firstname').innerHTML = every.firstName;
        var role = document.getElementById('roles').innerHTML = every.roles;
    };
    NavComponent.prototype.refresh = function () {
        window.location.href = 'http://localhost:8080/login/';
    };
    NavComponent.prototype.Logout = function () {
        console.log(this.firstName, this.lastName);
        localStorage.removeItem('authToken');
        this.router.navigate([this.returnUrl]);
        window.location.reload();
    };
    NavComponent.prototype.getUser = function () {
        var every = JSON.parse(localStorage.getItem(('authToken')));
        var firstName = document.getElementById('display').innerHTML = 'firstName: ' + every.firstName;
        return document.getElementById('display').innerHTML = firstName;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NavComponent.prototype, "navItems", void 0);
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/components/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/reimbursement-request/reimbursement-request.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/reimbursement-request/reimbursement-request.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n\r\n.container{\r\n  text-align:center;\r\n  margin:auto;\r\n  padding: 30px;\r\n  background: lightblue;\r\n\r\n}\r\n\r\n\r\n.col-form-label{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n\r\n.form-group{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n\r\n.a{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n\r\na{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n\r\n/* .button{\r\n text-align: center;\r\n    color:black;\r\n    max-width:  500;\r\n   margin: auto;\r\n} */\r\n\r\n\r\nbutton{\r\n  text-align: center;\r\n  color: black;\r\n  max-width:  50%;\r\n  margin: 0 auto;\r\n  display: flex;\r\n}\r\n\r\n\r\n.jumbotron {\r\n  margin:4px;\r\n  font-size: 21px;\r\n  font-weight: 200;\r\n  line-height: 2.1428571435;\r\n  background-color: lightblue;\r\n  border-radius: 25px;\r\n\r\n}\r\n\r\n\r\n.modal.fade.in{\r\n  overflow:auto;\r\n  padding-right:0px !important;\r\n\r\n}\r\n\r\n\r\n.modal-open{overflow:auto;\r\n  padding-right:0px !important;\r\n}\r\n\r\n\r\n.router-outlet{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n\r\nrouter-outlet{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n\r\nli {\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n\r\nul {\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n\r\nh1 {\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n\r\nh2{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n\r\nh3{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n\r\n.container{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n\r\n}\r\n\r\n\r\nrouter-outlet{\r\n  width: 600px;\r\n  margin-top: 100px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: lightblue;\r\n  border: 2px solid black;\r\n  border-radius: 25px;\r\n\r\n\r\n}\r\n\r\n\r\nbody {\r\n  width: 600px;\r\n  margin-top: 100px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: lightblue;\r\n  border: 2px solid black;\r\n  border-radius: 25px;\r\n\r\n\r\n\r\n\r\n}\r\n\r\n\r\np {\r\n  border: 1px solid black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/reimbursement-request/reimbursement-request.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/reimbursement-request/reimbursement-request.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css\">\r\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n</head>\r\n<body>\r\n\r\n<div class=\"container\">\r\n  <h1>Reimbursement Form</h1>\r\n  <form (ngSubmit)=\"submitRequest(f)\" #f=\"ngForm\">\r\n    <div id=\"reimbursement-data\">\r\n    <div class=\"form-group\">\r\n      <label for=\"reimbursement-amount\">Amount:</label>\r\n    </div>\r\n      <input type=\"number\" id=\"reimbursement-amount\" class=\"form-control\" ngModel name=\"reimbursement-amount\"\r\n             required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"reimbursement-description\">Description:</label>\r\n      <input type=\"text\" id=\"reimbursement-description\" class=\"form-control\" ngModel\r\n             name=\"reimbursement-description\" required>\r\n    </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"reimbursement-type\">Type</label>\r\n        <select id=\"reimbursement-type\" class=\"form-control\" [ngModel]=\"defaultTypeOption\" name=\"reimbursement-type\">\r\n          <option value=\"1\">Lodging</option>\r\n          <option value=\"2\">Travel</option>\r\n          <option value=\"3\">Food</option>\r\n          <option value=\"4\">Other</option>\r\n\r\n        </select>\r\n\r\n      </div>\r\n    <br>\r\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Submit</button>\r\n\r\n    <br>\r\n    <button class=\"submit\" (click)=\"refresh()\">Go Home.</button>\r\n    <br>\r\n  </form>\r\n</div>\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/components/reimbursement-request/reimbursement-request.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/reimbursement-request/reimbursement-request.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ReimbursementRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReimbursementRequestComponent", function() { return ReimbursementRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_reimbursement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/reimbursement.service */ "./src/app/services/reimbursement.service.ts");
/* harmony import */ var _models_Reimbursement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/Reimbursement */ "./src/app/models/Reimbursement.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReimbursementRequestComponent = /** @class */ (function () {
    function ReimbursementRequestComponent(reimbursementService, authService) {
        this.reimbursementService = reimbursementService;
        this.authService = authService;
        this.defaultTypeOption = '4';
    }
    ReimbursementRequestComponent.prototype.ngOnInit = function () {
    };
    ReimbursementRequestComponent.prototype.submitRequest = function (form) {
        var reimbursement = new _models_Reimbursement__WEBPACK_IMPORTED_MODULE_2__["Reimbursement"]();
        reimbursement.description = form.value['reimbursement-description'];
        reimbursement.amount = form.value['reimbursement-amount'];
        reimbursement.typeId = parseInt(form.value['reimbursement-type']);
        reimbursement.authorId = this.authService.getLoggedInUser().id;
        reimbursement.resolverId;
        reimbursement.dateResolved = null;
        reimbursement.dateSubmitted = new Date('0001-01-01T00:00:00');
        reimbursement.statusId = 1;
        this.reimbursementService.addReimbursement(reimbursement)
            .subscribe(function () { return console.log('success'); }, function () { return console.log('failure'); });
        window.location.href = 'http://localhost:8080/login/';
    };
    ReimbursementRequestComponent.prototype.refresh = function () {
        window.location.href = 'http://localhost:8080/login/';
    };
    ReimbursementRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reimbursement-request',
            template: __webpack_require__(/*! ./reimbursement-request.component.html */ "./src/app/components/reimbursement-request/reimbursement-request.component.html"),
            styles: [__webpack_require__(/*! ./reimbursement-request.component.css */ "./src/app/components/reimbursement-request/reimbursement-request.component.css")]
        }),
        __metadata("design:paramtypes", [_services_reimbursement_service__WEBPACK_IMPORTED_MODULE_1__["ReimbursementService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ReimbursementRequestComponent);
    return ReimbursementRequestComponent;
}());



/***/ }),

/***/ "./src/app/components/view-all-reimbursements/view-all-reimbursements.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/view-all-reimbursements/view-all-reimbursements.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\ntable {\r\n\r\n  text-align: center;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: white;\r\n  border: 2px solid black;\r\n  border-radius: 5px;\r\n  padding: 5px;\r\n  border-spacing: 5px;\r\n\r\n\r\n\r\n\r\n}\r\n\r\nth, td, tr {\r\n  text-align: center;\r\n  border: 1px solid black;\r\n  padding: 5px;\r\n  border-spacing: 15px;\r\n  border-radius: 5px;\r\n\r\n\r\n\r\n}\r\n\r\nnav{\r\n  width: 600px;\r\n  margin-top: 100px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: lightblue;\r\n  border: 2px solid black;\r\n  border-radius: 25px;\r\n\r\n}\r\n\r\n.col-form-label{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n.form-group{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n.a{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\na{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n/* .button{\r\n text-align: center;\r\n    color:black;\r\n    max-width:  500;\r\n   margin: auto;\r\n} */\r\n\r\nbutton{\r\n  text-align: center;\r\n  color: black;\r\n  max-width:  50%;\r\n  margin: 0 auto;\r\n  display: flex;\r\n}\r\n\r\n.jumbotron {\r\n  margin:4px;\r\n  font-size: 21px;\r\n  font-weight: 200;\r\n  line-height: 2.1428571435;\r\n  background-color: lightblue;\r\n  border-radius: 25px;\r\n\r\n}\r\n\r\n.modal.fade.in{\r\n  overflow:auto;\r\n  padding-right:0px !important;\r\n\r\n}\r\n\r\n.modal-open{overflow:auto;\r\n  padding-right:0px !important;\r\n}\r\n\r\n.router-outlet{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\nrouter-outlet{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\nli {\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\nul {\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\nh2{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\nh3{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n.container{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n\r\n}\r\n\r\nrouter-outlet{\r\n  width: 600px;\r\n  margin-top: 100px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: lightblue;\r\n  border: 2px solid black;\r\n  border-radius: 25px;\r\n\r\n\r\n}\r\n\r\nbody {\r\n  width: 600px;\r\n  margin-top: 100px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: lightblue;\r\n  border: 2px solid black;\r\n  border-radius: 25px;\r\n\r\n\r\n\r\n\r\n}\r\n\r\np {\r\n  border: 1px solid black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/view-all-reimbursements/view-all-reimbursements.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/view-all-reimbursements/view-all-reimbursements.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <br><br>\n  <h1>View All Reimbursements.</h1>\n  <br>\n\n<table style=\"width:50%\">\n  <tr>\n    <th id=\"id\">Reimbursement ID</th>\n    <th id=\"amount\">Amount</th>\n    <th id=\"dateSubmitted\">Submit Date</th>\n    <th id=\"type\">Type</th>\n    <th id=\"description\">Description</th>\n    <th id=\"Status\">Status</th>\n  </tr>\n  <tr *ngFor=\"let reimbursement of reimbursements\">\n    <!--<td headers=\"type\">{{reimbursement.typeId}}</td>-->\n\n    <td headers=\"id\">{{reimbursement.id}}</td>\n    <td headers=\"amount\">${{reimbursement.amount}}</td>\n    <td headers=\"dateSubmitted\">{{reimbursement.dateSubmitted | date}}</td>\n    <td *ngIf=\"reimbursement.typeId === 1\">{{type1}}</td>\n    <td *ngIf=\"reimbursement.typeId === 2\">{{type2}}</td>\n    <td *ngIf=\"reimbursement.typeId === 3\">{{type3}}</td>\n    <td *ngIf=\"reimbursement.typeId === 4\">{{type4}}</td>\n    <td headers=\"description\">{{reimbursement.description}}</td>\n    <!--<td headers=\"Status\">{{reimbursement.statusId}}</td>-->\n    <td *ngIf=\"reimbursement.statusId === 1\">{{status1}}</td>\n    <td *ngIf=\"reimbursement.statusId === 2\">{{status2}}</td>\n    <td *ngIf=\"reimbursement.statusId === 3\">{{status3}}</td>\n  </tr>\n</table>\n\n  <br>\n  <button class=\"submit\" (click)=\"refresh()\">Go Home.</button>\n  <br>\n  </nav>\n"

/***/ }),

/***/ "./src/app/components/view-all-reimbursements/view-all-reimbursements.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/view-all-reimbursements/view-all-reimbursements.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ViewAllReimbursementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAllReimbursementsComponent", function() { return ViewAllReimbursementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_reimbursement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/reimbursement.service */ "./src/app/services/reimbursement.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewAllReimbursementsComponent = /** @class */ (function () {
    function ViewAllReimbursementsComponent(reimbursementService) {
        this.reimbursementService = reimbursementService;
        this.type1 = 'Lodging';
        this.type2 = 'Food';
        this.type3 = 'Travel';
        this.type4 = 'Other';
        this.status1 = 'Open';
        this.status2 = 'Approved';
        this.status3 = 'Rejected';
    }
    ViewAllReimbursementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reimbursementService.getAllReimbursements()
            .subscribe(function (reimbursements) {
            _this.reimbursements = reimbursements;
        });
    };
    ViewAllReimbursementsComponent.prototype.refresh = function () {
        window.location.href = 'http://localhost:8080/login/';
    };
    ViewAllReimbursementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-all-reimbursements',
            template: __webpack_require__(/*! ./view-all-reimbursements.component.html */ "./src/app/components/view-all-reimbursements/view-all-reimbursements.component.html"),
            styles: [__webpack_require__(/*! ./view-all-reimbursements.component.css */ "./src/app/components/view-all-reimbursements/view-all-reimbursements.component.css")]
        }),
        __metadata("design:paramtypes", [_services_reimbursement_service__WEBPACK_IMPORTED_MODULE_1__["ReimbursementService"]])
    ], ViewAllReimbursementsComponent);
    return ViewAllReimbursementsComponent;
}());



/***/ }),

/***/ "./src/app/components/view-reimbursements/view-reimbursements.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/view-reimbursements/view-reimbursements.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n\r\n  text-align: center;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: white;\r\n  border: 2px solid black;\r\n  border-radius: 5px;\r\n  padding: 5px;\r\n  border-spacing: 5px;\r\n\r\n\r\n\r\n\r\n}\r\n\r\nth, td, tr {\r\n  text-align: center;\r\n  border: 1px solid black;\r\n  padding: 5px;\r\n  border-spacing: 15px;\r\n  border-radius: 5px;\r\n\r\n\r\n\r\n}\r\n\r\nnav{\r\n  width: 600px;\r\n  margin-top: 100px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: lightblue;\r\n  /*border: 2px solid black;*/\r\n  border-radius: 25px;\r\n\r\n}\r\n\r\n.col-form-label{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n.form-group{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n.a{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\na{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\n/* .button{\r\n text-align: center;\r\n    color:black;\r\n    max-width:  500;\r\n   margin: auto;\r\n} */\r\n\r\nbutton{\r\n  text-align: center;\r\n  color: black;\r\n  max-width:  50%;\r\n  margin: 0 auto;\r\n  display: flex;\r\n}\r\n\r\n.jumbotron {\r\n  margin:4px;\r\n  font-size: 21px;\r\n  font-weight: 200;\r\n  line-height: 2.1428571435;\r\n  background-color: lightblue;\r\n  border-radius: 25px;\r\n\r\n}\r\n\r\n.modal.fade.in{\r\n  overflow:auto;\r\n  padding-right:0px !important;\r\n\r\n}\r\n\r\n.modal-open{overflow:auto;\r\n  padding-right:0px !important;\r\n}\r\n\r\n.router-outlet{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\nrouter-outlet{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\nli {\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\nul {\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\nh2{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n}\r\n\r\nh3{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n}\r\n\r\n.container{\r\n  text-align: center;\r\n  color:black;\r\n  max-width:  50%;\r\n  margin: auto;\r\n\r\n\r\n}\r\n\r\nrouter-outlet{\r\n  width: 600px;\r\n  margin-top: 100px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: lightblue;\r\n  /*border: 2px solid black;*/\r\n  /*border-radius: 25px;*/\r\n\r\n\r\n}\r\n\r\nbody {\r\n  width: 600px;\r\n  margin-top: 90px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: lightblue;\r\n  border: 2px solid black;\r\n  border-radius: 25px;\r\n\r\n\r\n\r\n\r\n}\r\n\r\np {\r\n  /*border: 1px solid black;*/\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/view-reimbursements/view-reimbursements.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/view-reimbursements/view-reimbursements.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<body>\n<h1>Your Reimbursement Details</h1>\n<br>\n<br>\n<nav>\n  <table style=\"width:50%\">\n  <tr>\n    <th id=\"id\"> Reimbursement ID</th>\n    <th id=\"type\">Type</th>\n    <th id=\"amount\">Amount</th>\n    <th id=\"description\">Description</th>\n    <th id=\"dateSubmitted\">Submit Date</th>\n    <th id=\"status\">Status</th>\n  </tr>\n  <tr *ngFor=\"let reimbursement of reimbursements\">\n    <!--<td headers=\"type\">{{reimbursement.typeId}}</td>-->\n    <td headers=\"id\">{{reimbursement.id}}</td>\n    <td *ngIf=\"reimbursement.typeId === 1\">{{type1}}</td>\n    <td *ngIf=\"reimbursement.typeId === 2\">{{type2}}</td>\n    <td *ngIf=\"reimbursement.typeId === 3\">{{type3}}</td>\n    <td *ngIf=\"reimbursement.typeId === 4\">{{type4}}</td>\n    <td headers=\"amount\">${{reimbursement.amount}}</td>\n    <td headers=\"description\">{{reimbursement.description}}</td>\n    <td headers=\"dateSubmitted\">{{reimbursement.dateSubmitted | date}}</td>\n    <td *ngIf=\"reimbursement.statusId === 1\">{{status1}}</td>\n    <td *ngIf=\"reimbursement.statusId === 2\">{{status2}}</td>\n    <td *ngIf=\"reimbursement.statusId === 3\">{{status3}}</td>\n  </tr>\n</table>\n<br>\n<button class=\"submit\" (click)=\"refresh()\">Go Home.</button>\n<br>\n\n</nav>\n</body>\n\n"

/***/ }),

/***/ "./src/app/components/view-reimbursements/view-reimbursements.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/view-reimbursements/view-reimbursements.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ViewReimbursementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewReimbursementsComponent", function() { return ViewReimbursementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_reimbursement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/reimbursement.service */ "./src/app/services/reimbursement.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewReimbursementsComponent = /** @class */ (function () {
    function ViewReimbursementsComponent(reimbursementService, authService) {
        this.reimbursementService = reimbursementService;
        this.authService = authService;
        this.type1 = 'Lodging';
        this.type2 = 'Food';
        this.type3 = 'Travel';
        this.type4 = 'Other';
        this.status1 = 'Open';
        this.status2 = 'Approved';
        this.status3 = 'Rejected';
    }
    ViewReimbursementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var loggedInUserId = this.authService.getLoggedInUser().id;
        this.reimbursementService.getReimbursementsByAuthorId(loggedInUserId)
            .subscribe(function (reimbursements) { return _this.reimbursements = reimbursements; });
    };
    ViewReimbursementsComponent.prototype.refresh = function () {
        window.location.href = 'http://localhost:8080/login/';
    };
    ViewReimbursementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-reimbursements',
            template: __webpack_require__(/*! ./view-reimbursements.component.html */ "./src/app/components/view-reimbursements/view-reimbursements.component.html"),
            styles: [__webpack_require__(/*! ./view-reimbursements.component.css */ "./src/app/components/view-reimbursements/view-reimbursements.component.css")]
        }),
        __metadata("design:paramtypes", [_services_reimbursement_service__WEBPACK_IMPORTED_MODULE_1__["ReimbursementService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ViewReimbursementsComponent);
    return ViewReimbursementsComponent;
}());



/***/ }),

/***/ "./src/app/models/Reimbursement.ts":
/*!*****************************************!*\
  !*** ./src/app/models/Reimbursement.ts ***!
  \*****************************************/
/*! exports provided: Reimbursement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reimbursement", function() { return Reimbursement; });
var Reimbursement = /** @class */ (function () {
    function Reimbursement() {
    }
    return Reimbursement;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('authToken')) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
        // used as a route guard.
        // if returning false the route will not be loaded
        ,
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
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


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.authUrl = 'http://localhost:8080/login/auth';
    }
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('authToken') !== null;
    };
    AuthService.prototype.getLoggedInUser = function () {
        var userJson = localStorage.getItem('authToken');
        if (userJson === null)
            return null;
        var user = JSON.parse(userJson);
        return user;
    };
    AuthService.prototype.hasRoles = function (roles) {
        var tokenRoles = JSON.parse(localStorage.getItem('authToken')).roles;
        return roles.every(function (role) { return tokenRoles.indexOf(role) >= 0; });
    };
    AuthService.prototype.authenticate = function (username, password, success, fail) {
        return this.http.post(this.authUrl, JSON.stringify({ email: username, password: password }), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .toPromise()
            .then(function (resp) {
            localStorage.setItem('authToken', JSON.stringify(resp));
            success();
        }, function (err) {
            fail(err);
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/reimbursement.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/reimbursement.service.ts ***!
  \***************************************************/
/*! exports provided: ReimbursementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReimbursementService", function() { return ReimbursementService; });
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



var ReimbursementService = /** @class */ (function () {
    function ReimbursementService(httpClient) {
        this.httpClient = httpClient;
    }
    ReimbursementService.prototype.getReimbursementsByAuthorId = function (authorId) {
        return this.httpClient.get('http://localhost:8080/login/reimbursementsbyauthor/' + authorId);
    };
    ReimbursementService.prototype.getAllReimbursements = function () {
        return this.httpClient.get('http://localhost:8080/login/reimbursements/');
    };
    ReimbursementService.prototype.addReimbursement = function (reimbursement) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.httpClient.post('http://localhost:8080/login/reimbursements/', reimbursement, httpOptions);
    };
    ReimbursementService.prototype.updateReimbursement = function (reimbursement) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.httpClient.put('http://localhost:8080/login/reimbursements/', reimbursement, httpOptions);
    };
    ReimbursementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ReimbursementService);
    return ReimbursementService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: "http://localhost:8080",
    managerNav: [
        {
            title: ' View All Reimbursements',
            link: 'showreimbursementsmanager'
        },
        {
            title: 'Approve/Deny',
            link: 'approveordenyreimbursements'
        }
    ],
    employeeNav: [
        {
            title: 'View Your Reimbursements',
            link: 'showreimbursementsemp'
        },
        {
            title: ' Make New Reimbursement',
            link: 'reimbursementrequest'
        }
    ]
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Aarons\Desktop\spark_nov27_usf\spark_nov27_usf\spark_nov27_usf\Week7_J2EE_Angular\login-demo\login-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map