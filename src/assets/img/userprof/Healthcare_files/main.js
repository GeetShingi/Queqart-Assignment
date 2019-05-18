(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

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

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/app-routing/routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _doctors_doctors_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../doctors/doctors.component */ "./src/app/doctors/doctors.component.ts");
/* harmony import */ var _doctordetail_doctordetail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../doctordetail/doctordetail.component */ "./src/app/doctordetail/doctordetail.component.ts");
/* harmony import */ var _booking_booking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../booking/booking.component */ "./src/app/booking/booking.component.ts");
/* harmony import */ var _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../userprofile/userprofile.component */ "./src/app/userprofile/userprofile.component.ts");
/* harmony import */ var _doctorsview_doctorsview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../doctorsview/doctorsview.component */ "./src/app/doctorsview/doctorsview.component.ts");
/* harmony import */ var _medicals_medicals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../medicals/medicals.component */ "./src/app/medicals/medicals.component.ts");
/* harmony import */ var _medicaldetail_medicaldetail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../medicaldetail/medicaldetail.component */ "./src/app/medicaldetail/medicaldetail.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _userdetail_userdetail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../userdetail/userdetail.component */ "./src/app/userdetail/userdetail.component.ts");
/* harmony import */ var _medicalview_medicalview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../medicalview/medicalview.component */ "./src/app/medicalview/medicalview.component.ts");
/* harmony import */ var _prescriptions_prescriptions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../prescriptions/prescriptions.component */ "./src/app/prescriptions/prescriptions.component.ts");
/* harmony import */ var _prescriptionview_prescriptionview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../prescriptionview/prescriptionview.component */ "./src/app/prescriptionview/prescriptionview.component.ts");
/* harmony import */ var _prescriptiondetail_prescriptiondetail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../prescriptiondetail/prescriptiondetail.component */ "./src/app/prescriptiondetail/prescriptiondetail.component.ts");
/* harmony import */ var _medicalcart_medicalcart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../medicalcart/medicalcart.component */ "./src/app/medicalcart/medicalcart.component.ts");
/* harmony import */ var _orderdetail_orderdetail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../orderdetail/orderdetail.component */ "./src/app/orderdetail/orderdetail.component.ts");
/* harmony import */ var _userorders_userorders_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../userorders/userorders.component */ "./src/app/userorders/userorders.component.ts");

















var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'appointment', component: _doctors_doctors_component__WEBPACK_IMPORTED_MODULE_1__["DoctorsComponent"] },
    { path: 'doctordetail/:id', component: _doctordetail_doctordetail_component__WEBPACK_IMPORTED_MODULE_2__["DoctordetailComponent"] },
    { path: 'medicaldetail/:id', component: _medicaldetail_medicaldetail_component__WEBPACK_IMPORTED_MODULE_7__["MedicaldetailComponent"] },
    { path: 'userdetail/:id', component: _userdetail_userdetail_component__WEBPACK_IMPORTED_MODULE_9__["UserdetailComponent"] },
    { path: 'myappointments', component: _booking_booking_component__WEBPACK_IMPORTED_MODULE_3__["BookingComponent"] },
    { path: 'managemedicines', component: _medicalview_medicalview_component__WEBPACK_IMPORTED_MODULE_10__["MedicalviewComponent"] },
    { path: 'userprofile', component: _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_4__["UserprofileComponent"] },
    { path: 'doctorsview', component: _doctorsview_doctorsview_component__WEBPACK_IMPORTED_MODULE_5__["DoctorsviewComponent"] },
    { path: 'buymedicines', component: _medicals_medicals_component__WEBPACK_IMPORTED_MODULE_6__["MedicalsComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"] },
    { path: 'appointment/:id', component: _prescriptions_prescriptions_component__WEBPACK_IMPORTED_MODULE_11__["PrescriptionsComponent"] },
    { path: 'prescriptions', component: _prescriptionview_prescriptionview_component__WEBPACK_IMPORTED_MODULE_12__["PrescriptionviewComponent"] },
    { path: 'prescriptiondetail/:id', component: _prescriptiondetail_prescriptiondetail_component__WEBPACK_IMPORTED_MODULE_13__["PrescriptiondetailComponent"] },
    { path: 'myorders', component: _medicalcart_medicalcart_component__WEBPACK_IMPORTED_MODULE_14__["MedicalcartComponent"] },
    { path: 'orderdetail/:id', component: _orderdetail_orderdetail_component__WEBPACK_IMPORTED_MODULE_15__["OrderdetailComponent"] },
    { path: 'orders', component: _userorders_userorders_component__WEBPACK_IMPORTED_MODULE_16__["UserordersComponent"] },
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>"

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
        this.title = 'server';
    }
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _doctors_doctors_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./doctors/doctors.component */ "./src/app/doctors/doctors.component.ts");
/* harmony import */ var _doctordetail_doctordetail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./doctordetail/doctordetail.component */ "./src/app/doctordetail/doctordetail.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var _booking_booking_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./booking/booking.component */ "./src/app/booking/booking.component.ts");
/* harmony import */ var _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @progress/kendo-angular-dateinputs */ "./node_modules/@progress/kendo-angular-dateinputs/dist/fesm5/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @progress/kendo-angular-intl */ "./node_modules/@progress/kendo-angular-intl/dist/fesm5/index.js");
/* harmony import */ var _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./userprofile/userprofile.component */ "./src/app/userprofile/userprofile.component.ts");
/* harmony import */ var _doctorsview_doctorsview_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./doctorsview/doctorsview.component */ "./src/app/doctorsview/doctorsview.component.ts");
/* harmony import */ var _medicals_medicals_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./medicals/medicals.component */ "./src/app/medicals/medicals.component.ts");
/* harmony import */ var _medicaldetail_medicaldetail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./medicaldetail/medicaldetail.component */ "./src/app/medicaldetail/medicaldetail.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _userdetail_userdetail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./userdetail/userdetail.component */ "./src/app/userdetail/userdetail.component.ts");
/* harmony import */ var _medicalview_medicalview_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./medicalview/medicalview.component */ "./src/app/medicalview/medicalview.component.ts");
/* harmony import */ var _prescriptions_prescriptions_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./prescriptions/prescriptions.component */ "./src/app/prescriptions/prescriptions.component.ts");
/* harmony import */ var _prescriptionview_prescriptionview_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./prescriptionview/prescriptionview.component */ "./src/app/prescriptionview/prescriptionview.component.ts");
/* harmony import */ var _prescriptiondetail_prescriptiondetail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./prescriptiondetail/prescriptiondetail.component */ "./src/app/prescriptiondetail/prescriptiondetail.component.ts");
/* harmony import */ var _medicalcart_medicalcart_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./medicalcart/medicalcart.component */ "./src/app/medicalcart/medicalcart.component.ts");
/* harmony import */ var _orderdetail_orderdetail_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./orderdetail/orderdetail.component */ "./src/app/orderdetail/orderdetail.component.ts");
/* harmony import */ var _userorders_userorders_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./userorders/userorders.component */ "./src/app/userorders/userorders.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _doctors_doctors_component__WEBPACK_IMPORTED_MODULE_12__["DoctorsComponent"],
                _doctordetail_doctordetail_component__WEBPACK_IMPORTED_MODULE_13__["DoctordetailComponent"],
                _booking_booking_component__WEBPACK_IMPORTED_MODULE_15__["BookingComponent"],
                _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_19__["UserprofileComponent"],
                _doctorsview_doctorsview_component__WEBPACK_IMPORTED_MODULE_20__["DoctorsviewComponent"],
                _medicals_medicals_component__WEBPACK_IMPORTED_MODULE_21__["MedicalsComponent"],
                _medicaldetail_medicaldetail_component__WEBPACK_IMPORTED_MODULE_22__["MedicaldetailComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_23__["CartComponent"],
                _userdetail_userdetail_component__WEBPACK_IMPORTED_MODULE_24__["UserdetailComponent"],
                _medicalview_medicalview_component__WEBPACK_IMPORTED_MODULE_25__["MedicalviewComponent"],
                _prescriptions_prescriptions_component__WEBPACK_IMPORTED_MODULE_26__["PrescriptionsComponent"],
                _prescriptionview_prescriptionview_component__WEBPACK_IMPORTED_MODULE_27__["PrescriptionviewComponent"],
                _prescriptiondetail_prescriptiondetail_component__WEBPACK_IMPORTED_MODULE_28__["PrescriptiondetailComponent"],
                _medicalcart_medicalcart_component__WEBPACK_IMPORTED_MODULE_29__["MedicalcartComponent"],
                _orderdetail_orderdetail_component__WEBPACK_IMPORTED_MODULE_30__["OrderdetailComponent"],
                _userorders_userorders_component__WEBPACK_IMPORTED_MODULE_31__["UserordersComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"].enablePersistence(),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_14__["Ng2SearchPipeModule"],
                _progress_kendo_angular_dateinputs__WEBPACK_IMPORTED_MODULE_16__["DateInputsModule"],
                _progress_kendo_angular_intl__WEBPACK_IMPORTED_MODULE_18__["IntlModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/booking/booking.component.css":
/*!***********************************************!*\
  !*** ./src/app/booking/booking.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card\n{\nbox-shadow:2px 6px;\n\nmargin-bottom: 10px;\n}\n.vl {\n  border-right: 2px solid green;\n  \n  position: relative;\n  left: 50%;\n  margin-left: -3px;\n  top: 0;\n}"

/***/ }),

/***/ "./src/app/booking/booking.component.html":
/*!************************************************!*\
  !*** ./src/app/booking/booking.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngFor = \"let appointment of appointments\">\n  <h1>{{appointment.doctor}}</h1>\n  <h2>{{appointment.date}}</h2>\n  <h2>{{appointment.time}}</h2>\n  <h3>{{appointment._id}}</h3>\n  <button (click) = \"cancelAppointment(appointment._id)\">Cancel</button>\n</div> -->\n<h1>Appointments</h1>\n<div class=\"container\">\n<!-- <table class=\"table table-hover\">\n    \n   \n    <tbody>\n      <tr *ngFor = \"let appointment of appointments\">\n        <td>Doctor: {{appointment.doctor}}</td>\n        <td>{{appointment.date}}</td>\n        <td>{{appointment.time}}</td>\n        <td>{{appointment._id}}</td>\n        <td><button (click) = \"cancelAppointment(appointment._id)\">Cancel</button></td>\n      </tr>\n    </tbody>\n   \n  </table> -->\n  <div class=\"card\" *ngFor = \"let appointment of appointments\">\n\t <div class=\"card-body\"><h2>Date: {{appointment.date}}  &nbsp; &nbsp;Time:{{appointment.time}}</h2>\n\t<hr>\n  \t<h3>Doctor: {{appointment.doctor}} &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;\n\t Token id:{{appointment._id}}</h3>\n  </div>\n  <div class=\"card-footer\">\n    <button (click) = \"cancelAppointment(appointment._id)\" class=\"btn btn-danger\">Cancel</button>\n\n  </div>\n</div>\n  </div>\n"

/***/ }),

/***/ "./src/app/booking/booking.component.ts":
/*!**********************************************!*\
  !*** ./src/app/booking/booking.component.ts ***!
  \**********************************************/
/*! exports provided: BookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingComponent", function() { return BookingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_booking_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/booking.service */ "./src/app/services/booking.service.ts");
/* harmony import */ var _services_doctor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/doctor.service */ "./src/app/services/doctor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingComponent = /** @class */ (function () {
    function BookingComponent(bookingservice, doctorservice) {
        this.bookingservice = bookingservice;
        this.doctorservice = doctorservice;
    }
    BookingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookingservice.getAppointments()
            .subscribe(function (appointments) {
            _this.appointments = appointments;
        }, function (errmess) { return _this.errMess = errmess; });
    };
    BookingComponent.prototype.cancelAppointment = function (id) {
        this.bookingservice.deleteAppointment(id)
            .then(function () {
            alert("Deleted appointment" + id);
        });
    };
    BookingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-booking',
            template: __webpack_require__(/*! ./booking.component.html */ "./src/app/booking/booking.component.html"),
            styles: [__webpack_require__(/*! ./booking.component.css */ "./src/app/booking/booking.component.css")]
        }),
        __metadata("design:paramtypes", [_services_booking_service__WEBPACK_IMPORTED_MODULE_1__["BookingService"],
            _services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"]])
    ], BookingComponent);
    return BookingComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card\n{\nbox-shadow:5px 10px;\n}\n.card-header\n{\n\tbackground-color: #b3ecff;\n}\ntable\n{\n\tborder-left: 1px solid black;\n\tbox-shadow: 3px 7px 1px 1px;\n\tborder-radius: 5px;\n}\ntd,tr,th\n{\n\tborder-collapse: collapse;\n}\n.h\n{\n\ttop: 50%;\n    left: 50%;\n\t\n}"

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"h\"><h1>CART</h1></div>\n<div class=\"container\">\n\t\n<div class=\"row\">\n<div class=\"col-md-9\">\n  \n    <!-- <h1>{{car.medicines}}</h1><span>{{car.quantity}}</span>\n    <h2> {{car.price}} </h2> -->\n    \n \n \n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th>NAME</th>\n        <th>Quantity</th>\n        <th>Price</th>\n        <th>Delete</th>\n      </tr>\n    </thead>\n   \n    <tbody>\n      <tr *ngFor = \"let car of cart\">\n        <td>{{car.medicines}}</td>\n        <td>{{car.quantity}}</td>\n        <td>{{car.price}}</td>\n        <td><button (click) = \"deleteMedicine(car._id, car.price)\" class=\"btn btn-danger\">Delete</button></td>\n      </tr>\n    </tbody>\n   \n  </table>\n</div>\n<div class=\"col-md-3\">\n<div class=\"card\">\n\t<div class=\"card-header\"><h4 class=\"card-title\">Total <i style=\"font-size:24px\" class=\"fa\">&#xf07a;</i></h4></div>\n  <div class=\"card-body\">{{total}}\n  </div>\n\n  <div class=\"card-footer\">\n    <button class=\"btn btn-success\" (click) = \"onBuy()\">BUY</button>\n\n  </div>\n</div>\n</div>\n\n</div>\n<h2 routerLink=\"/orders\">Your Previous Orders</h2>\n</div>"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartComponent = /** @class */ (function () {
    function CartComponent(cartservice) {
        this.cartservice = cartservice;
        this.total = 0;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartservice.getCart()
            .subscribe(function (cart) {
            _this.cart = cart;
            _this.id = cart[0].medicalid;
            cart.forEach(function (cart) {
                _this.total = _this.total + cart.price;
            });
        });
    };
    CartComponent.prototype.deleteMedicine = function (id, price) {
        var _this = this;
        this.cartservice.deleteMedicine(id)
            .then(function () {
            _this.total = 0;
            _this.cartservice.getCart()
                .subscribe(function (cart) {
                cart.forEach(function (cart) {
                    _this.total = _this.total + cart.price;
                });
            });
            console.log("Deleted Medicine " + id);
        });
    };
    CartComponent.prototype.onBuy = function () {
        console.log(this.id);
        this.cartservice.postCartM(this.id, this.cart);
        this.cartservice.postCartU(this.cart);
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/doctordetail/doctordetail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/doctordetail/doctordetail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1\n{\n-ms-grid-row-align: center;\n    align-self: center;\n}"

/***/ }),

/***/ "./src/app/doctordetail/doctordetail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/doctordetail/doctordetail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"doctor\">\n\t<h1>{{doctor.name}}</h1>\n\t<p>{{doctor.specialization}}</p>\n</div>\n<div class=\"container\">\n\n\t<div class=\"form-group\">\n\t\t<div class=\"input-group input-group-alternative\">\n\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t<span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\n\t\t\t</div>\n\t\t\t<input class=\"form-control\" [(ngModel)] = \"date\" placeholder=\"Select date\" type=\"date\">\n\t\t\t<label for=\"inputState\">Time</label>\n\t\t\t<select class=\"form-control\" [(ngModel)] = \"time\">\n\t\t\t\t<option *ngFor =\"let timing of timings\">{{timing}}</option>\n\t\t\t</select>\n\t\t</div>\n\t</div>\n\t<button (click) = \"bookAppointment()\">Confirm</button>\n</div>\n"

/***/ }),

/***/ "./src/app/doctordetail/doctordetail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/doctordetail/doctordetail.component.ts ***!
  \********************************************************/
/*! exports provided: DoctordetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctordetailComponent", function() { return DoctordetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_doctor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/doctor.service */ "./src/app/services/doctor.service.ts");
/* harmony import */ var _services_booking_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/booking.service */ "./src/app/services/booking.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DoctordetailComponent = /** @class */ (function () {
    function DoctordetailComponent(route, location, doctorservice, bookingservice) {
        this.route = route;
        this.location = location;
        this.doctorservice = doctorservice;
        this.bookingservice = bookingservice;
        this.start_time = 0;
        this.end_time = 0;
        this.timings = [];
        this.appointment = false;
        this.validator = false;
    }
    DoctordetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.doctorservice.getDoctorIds().subscribe(function (doctorIds) { return _this.doctorIds = doctorIds; });
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) { return _this.doctorservice.getDoctor(params['id']); }))
            .subscribe(function (doctor) {
            _this.doctor = doctor;
            _this.setPrevNext(doctor._id);
            _this.start_time = doctor.start_time;
            _this.end_time = doctor.end_time;
            _this.timings.push(_this.start_time);
            while (_this.start_time < _this.end_time) {
                if (_this.start_time % 100 == 0) {
                    _this.start_time = _this.start_time + 30;
                }
                else {
                    _this.start_time = _this.start_time + 70;
                }
                _this.timings.push(_this.start_time);
            }
            ;
        }, function (errmess) { return _this.errMess = errmess; });
    };
    DoctordetailComponent.prototype.setPrevNext = function (doctorId) {
        var index = this.doctorIds.indexOf(doctorId);
        this.prev = this.doctorIds[(this.doctorIds.length + index - 1) % this.doctorIds.length];
        this.next = this.doctorIds[(this.doctorIds.length + index + 1) % this.doctorIds.length];
    };
    DoctordetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    DoctordetailComponent.prototype.bookAppointment = function () {
        var _this = this;
        this.bookingservice.isAppointment(this.doctor._id)
            .then(function (value) {
            _this.appointment = value;
            if (!_this.appointment) {
                _this.dt = _this.date + _this.time.toString();
                _this.bookingservice.checkDatetime(_this.doctor._id, _this.dt)
                    .then(function (value) {
                    _this.validator = value;
                    if (!_this.validator) {
                        _this.time = +_this.time;
                        _this.bookingservice.postAppointment(_this.doctor.name, _this.doctor._id, _this.date, _this.time, _this.dt)
                            .then(function (appointments) { console.log(appointments); _this.appointment = true; })
                            .catch(function (err) { return console.log('Error ', err); });
                    }
                });
            }
        });
    };
    DoctordetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doctordetail',
            template: __webpack_require__(/*! ./doctordetail.component.html */ "./src/app/doctordetail/doctordetail.component.html"),
            styles: [__webpack_require__(/*! ./doctordetail.component.css */ "./src/app/doctordetail/doctordetail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _services_doctor_service__WEBPACK_IMPORTED_MODULE_4__["DoctorService"],
            _services_booking_service__WEBPACK_IMPORTED_MODULE_5__["BookingService"]])
    ], DoctordetailComponent);
    return DoctordetailComponent;
}());



/***/ }),

/***/ "./src/app/doctors/doctors.component.css":
/*!***********************************************!*\
  !*** ./src/app/doctors/doctors.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-header {\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/doctors/doctors.component.html":
/*!************************************************!*\
  !*** ./src/app/doctors/doctors.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<input class=\"form-control\" placeholder=\"Search\" type=\"text\" [(ngModel)] = \"query\">\n<div class=\"container-fluid\">\n  <div class=\"row\">\n      <div class=\"card border-primary my-3 mx-3 col-md-2\" *ngFor = \"let doctor of doctors | filter: query\" >\n          <div class=\"card-header\">{{doctor.name}}</div>\n          <div class=\"card-body text-primary\">\n            <h5 class=\"card-title\">{{doctor.specialization}}</h5>\n            <p class=\"card-text\">{{doctor.location}}</p>\n            <button class=\"btn btn-primary\" [routerLink]=\"['/doctordetail', doctor._id]\">Book</button>\n          </div>\n        </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/doctors/doctors.component.ts":
/*!**********************************************!*\
  !*** ./src/app/doctors/doctors.component.ts ***!
  \**********************************************/
/*! exports provided: DoctorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorsComponent", function() { return DoctorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_doctor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/doctor.service */ "./src/app/services/doctor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DoctorsComponent = /** @class */ (function () {
    function DoctorsComponent(doctorservice) {
        this.doctorservice = doctorservice;
    }
    DoctorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.doctorservice.getDoctors()
            .subscribe(function (doctors) { return _this.doctors = doctors; }, function (errmess) { return _this.errMess = errmess; });
    };
    DoctorsComponent.prototype.onSelect = function (doctor) {
        this.selectedDoctor = doctor;
    };
    DoctorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doctors',
            template: __webpack_require__(/*! ./doctors.component.html */ "./src/app/doctors/doctors.component.html"),
            styles: [__webpack_require__(/*! ./doctors.component.css */ "./src/app/doctors/doctors.component.css")]
        }),
        __metadata("design:paramtypes", [_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__["DoctorService"]])
    ], DoctorsComponent);
    return DoctorsComponent;
}());



/***/ }),

/***/ "./src/app/doctorsview/doctorsview.component.css":
/*!*******************************************************!*\
  !*** ./src/app/doctorsview/doctorsview.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/doctorsview/doctorsview.component.html":
/*!********************************************************!*\
  !*** ./src/app/doctorsview/doctorsview.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor = \"let appointment of appointments\">\n    <h1>{{appointment.user}}</h1>\n    <h2>{{appointment.date}}</h2>\n    <h2>{{appointment.time}}</h2>\n    <h3>{{appointment._id}}</h3>\n    <button [routerLink]=\"['/userdetail', appointment.userid]\">View Patient's Info</button>\n    <button (click) = \"cancelAppointment(appointment._id)\">Cancel</button>\n    <button [routerLink]=\"['/appointment', appointment._id]\">Start</button>\n  </div>\n  "

/***/ }),

/***/ "./src/app/doctorsview/doctorsview.component.ts":
/*!******************************************************!*\
  !*** ./src/app/doctorsview/doctorsview.component.ts ***!
  \******************************************************/
/*! exports provided: DoctorsviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorsviewComponent", function() { return DoctorsviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_booking_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/booking.service */ "./src/app/services/booking.service.ts");
/* harmony import */ var _services_doctor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/doctor.service */ "./src/app/services/doctor.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DoctorsviewComponent = /** @class */ (function () {
    function DoctorsviewComponent(bookingservice, doctorservice, usersservice) {
        this.bookingservice = bookingservice;
        this.doctorservice = doctorservice;
        this.usersservice = usersservice;
    }
    DoctorsviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookingservice.getDoctorAppointments()
            .subscribe(function (appointments) {
            _this.appointments = appointments;
        }, function (errmess) { return _this.errMess = errmess; });
    };
    DoctorsviewComponent.prototype.cancelAppointment = function (id) {
        this.bookingservice.deleteAppointment(id)
            .then(function () {
            console.log("Deleted appointment");
        });
    };
    DoctorsviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doctorsview',
            template: __webpack_require__(/*! ./doctorsview.component.html */ "./src/app/doctorsview/doctorsview.component.html"),
            styles: [__webpack_require__(/*! ./doctorsview.component.css */ "./src/app/doctorsview/doctorsview.component.css")]
        }),
        __metadata("design:paramtypes", [_services_booking_service__WEBPACK_IMPORTED_MODULE_1__["BookingService"],
            _services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]])
    ], DoctorsviewComponent);
    return DoctorsviewComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link-inner--text{\n    font-size: 14px;\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <div class=\"container\">\n      <a class=\"navbar-brand\" href=\"#\">Healthcare</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-default\" aria-controls=\"navbar-default\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbar-default\">\n          <div class=\"navbar-collapse-header\">\n              <div class=\"row\">\n                  <div class=\"col-6 collapse-brand\">\n                      <a href=\"index.html\">\n                          <h1>Healthcare</h1>\n                      </a>\n                  </div>\n                  <div class=\"col-6 collapse-close\">\n                      <button type=\"button\" class=\"navbar-toggler\" data-toggle=\"collapse\" data-target=\"#navbar-default\" aria-controls=\"navbar-default\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                          <span></span>\n                          <span></span>\n                      </button>\n                  </div>\n              </div>\n          </div>\n\n          <ul class=\"navbar-nav ml-lg-auto\">\n              <li class=\"nav-item\">\n                  <a class=\"nav-link nav-link-icon\" routerLink = \"/home\">\n                      <span class=\"nav-link-inner--text\">Home</span>\n                  </a>\n              </li>\n              <li class=\"nav-item\" *ngIf = \"user_category === 'patient'\">\n                  <a class=\"nav-link nav-link-icon\" routerLink = \"/appointment\">\n                      <span class=\"nav-link-inner--text\">Book an Appointment</span>\n                  </a>\n              </li>\n              <li class=\"nav-item\" *ngIf = \"user_category === 'patient'\">\n                    <a class=\"nav-link nav-link-icon\" routerLink = \"/myappointments\">\n                        <span class=\"nav-link-inner--text\">My Appointments</span>\n                    </a>\n                </li>\n                <li class=\"nav-item\" *ngIf = \"user_category === 'patient'\">\n                        <a class=\"nav-link nav-link-icon\" routerLink = \"/prescriptions\">\n                            <span class=\"nav-link-inner--text\">My Prescriptions</span>\n                        </a>\n                    </li>\n                <li class=\"nav-item\" *ngIf = \"user_category === 'doctor'\">\n                    <a class=\"nav-link nav-link-icon\" routerLink = \"/doctorsview\">\n                        <span class=\"nav-link-inner--text\">Manage Appointment</span>\n                    </a>\n                </li>\n                <li class=\"nav-item\" *ngIf = \"user_category === 'medical'\">\n                        <a class=\"nav-link nav-link-icon\" routerLink = \"/managemedicines\">\n                            <span class=\"nav-link-inner--text\">Manage Medicines</span>\n                        </a>\n                </li>\n                <li class=\"nav-item\" *ngIf = \"user_category === 'medical'\">\n                        <a class=\"nav-link nav-link-icon\" routerLink = \"/myorders\">\n                            <span class=\"nav-link-inner--text\">Manage Orders</span>\n                        </a>\n                </li>\n              <li class=\"nav-item dropdown\" *ngIf = \"user_category !== 'medical'\">\n                  <a class=\"nav-link nav-link-icon\" routerLink = \"/buymedicines\">\n                      <span class=\"nav-link-inner--text\">Buy Medicines</span>\n                  </a>\n              </li>\n              <li class=\"nav-item dropdown\" *ngIf = \"user_category !== 'medical'\">\n                    <a class=\"nav-link nav-link-icon\" routerLink = \"/cart\">\n                        <span class=\"nav-link-inner--text\">Cart</span>\n                    </a>\n                </li>\n              <li class=\"nav-item\">\n                    <a class=\"nav-link nav-link-icon\" routerLink = \"/userprofile\">\n                        <span class=\"nav-link-inner--text\">Profile</span>\n                    </a>\n                </li>\n              <li class=\"nav-item\" *ngIf=\"!usern\">\n                <a class=\"nav-link nav-link-icon\" >\n                    <span class=\"nav-link-inner--text\" data-toggle=\"modal\" data-target=\"#modal-form\">Login</span>\n                </a>\n              </li>\n            <li class=\"nav-item\" *ngIf=\"!usern\">\n              <a class=\"nav-link nav-link-icon\">\n                  <span class=\"nav-link-inner--text\" data-toggle=\"modal\" data-target=\"#modal-form1\">SignUp</span>\n              </a>\n            </li>\n            <li class=\"nav-item\" *ngIf=\"usern\">\n              <a class=\"nav-link nav-link-icon\" (click)=\"logOut()\" routerLink = \"/home\" onclick=\"window.location.reload()\">\n                  <span class=\"nav-link-inner--text\">{{userna}}</span>\n                  <span class=\"nav-link-inner--text\">Logout</span>\n              </a>\n            </li>\n          </ul>\n\n      </div>\n  </div>\n</nav>\n\n<div class=\"modal fade\" id=\"modal-form\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-form\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal- modal-dialog-centered modal-sm\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body p-0\">\n        <div class=\"card bg-secondary shadow border-0\">\n            <div class=\"card-header bg-white pb-5\">\n                <div class=\"text-muted text-center mb-3\"><small>Sign in with</small></div>\n                <div class=\"btn-wrapper text-center\">\n                    <button class=\"btn btn-neutral btn-icon\" data-toggle=\"modal\" data-target=\"#modal-form\" (click) = \"googleLogin()\">\n                        <span class=\"btn-inner--icon\"><img src=\"../../assets/img/icons/common/google.svg\"></span>\n                        <span class=\"btn-inner--text\">Google</span>\n                    </button>\n                </div>\n            </div>\n            <div class=\"card-body px-lg-5 py-lg-5\">\n                <div class=\"text-center text-muted mb-4\">\n                    <small>Or sign in with credentials</small>\n                </div>\n                <form role=\"form\" novalidate #loginForm=\"ngForm\" (ngSubmit) = \"onSubmitlogin()\">\n                    <div class=\"form-group mb-3\">\n                        <div class=\"input-group input-group-alternative\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                            </div>\n                            <input class=\"form-control\" [(ngModel)]=\"user.username\" name=\"username\"  #username=\"ngModel\" required placeholder=\"Email\" type=\"email\">\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"input-group input-group-alternative\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                            </div>\n                            <input class=\"form-control\" [(ngModel)]=\"user.password\" name=\"password\"  #password=\"ngModel\" required placeholder=\"Password\" type=\"password\">\n                        </div>\n                    </div>\n                    <div class=\"custom-control custom-control-alternative custom-checkbox\">\n                        <input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\n                        <label class=\"custom-control-label\" for=\" customCheckLogin\"><span style=\"color:black\">Remember me</span></label>\n                    </div>\n                    <div class=\"text-center\">\n                        <button type=\"button\" (click) = \"onSubmitlogin()\" class=\"btn btn-primary my-4\" data-toggle=\"modal\" data-target=\"#modal-form\">Sign in</button>\n                    </div>\n                </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"modal-form1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modal-form1\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal- modal-dialog-centered modal-sm\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body p-0\">\n        <div class=\"card bg-secondary shadow border-0\">\n            <div class=\"card-header bg-white pb-5\">\n                <div class=\"text-muted text-center mb-3\"><small>Sign up with</small></div>\n                <div class=\"btn-wrapper text-center\">\n                    <button href=\"#\" class=\"btn btn-neutral btn-icon\" data-toggle=\"modal\" data-target=\"#modal-form1\" (click) = \"googleLogin()\">\n                        <span class=\"btn-inner--icon\"><img src=\"../../assets/img/icons/common/google.svg\"></span>\n                        <span class=\"btn-inner--text\">Google</span>\n                    </button>\n                </div>\n            </div>\n            <div class=\"card-body px-lg-5 py-lg-5\">\n                <div class=\"text-center text-muted mb-4\">\n                    <small>Or sign up with credentials</small>\n                </div>\n                <form role=\"form\" novalidate #signupForm=\"ngForm\" (ngSubmit)=\"onSubmitsign()\">\n                    <div class=\"form-group mb-3\">\n                        <div class=\"input-group input-group-alternative\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                            </div>\n                            <input class=\"form-control\" [(ngModel)]=\"user1.username\" name=\"username\"  #username=\"ngModel\" required placeholder=\"Email\" type=\"email\">\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"input-group input-group-alternative\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                            </div>\n                            <input class=\"form-control\" [(ngModel)]=\"user1.password\" name=\"password\"  #password=\"ngModel\" required placeholder=\"Password\" type=\"password\">\n                        </div>\n                    </div>\n                    <div class=\"custom-control custom-control-alternative custom-checkbox\">\n                        <input class=\"custom-control-input\" id=\" customCheckSignup\" type=\"checkbox\">\n                        <label class=\"custom-control-label\" for=\" customCheckSignup\"><span style=\"color:black\">Remember me</span></label>\n                    </div>\n                    <div class=\"text-center\">\n                        <button type=\"button\" data-toggle=\"modal\" data-target=\"#modal-form1\" (click) = \"onSubmitsign()\" class=\"btn btn-primary my-4\" routerLink = \"/userprofile\">Sign up</button>\n                    </div>\n                </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, usersservice) {
        this.authService = authService;
        this.usersservice = usersservice;
        this.user = { username: '', password: '', remember: false };
        this.user1 = { username: '', password: '', remember: false };
        this.usern = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuthState()
            .subscribe(function (user) {
            if (user) {
                // User is signed in.
                _this.usersservice.getUser()
                    .subscribe(function (user) {
                    if (user) {
                        _this.user_category = user.category;
                    }
                    else {
                        console.log('Not defined');
                    }
                });
                _this.username = user.displayName ? user.displayName : user.email;
                _this.userna = _this.username;
                _this.usern = true;
                console.log('Welcome ' + _this.username);
            }
            else {
                console.log('Wrong Password or Username');
                _this.usern = false;
                _this.username = undefined;
            }
        });
    };
    HeaderComponent.prototype.onSubmitlogin = function () {
        console.log('User: ', this.user);
        this.authService.logIn(this.user);
    };
    HeaderComponent.prototype.onSubmitsign = function () {
        console.log('User: ', this.user1);
        this.authService.signUp(this.user1);
    };
    HeaderComponent.prototype.googleLogin = function () {
        this.authService.googleLogin();
    };
    HeaderComponent.prototype.logOut = function () {
        this.username = undefined;
        this.authService.logOut();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row mt-5\">\n    <div class=\"card col-md-4\">\n      <img class=\"card-img-top\" style=\"height:200px;\" src=\"../../assets/img/person.png\" alt=\"Book Appointment\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Book an Appointment</h5>\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        <a routerLink = \"/appointment\" class=\"btn btn-primary\">Book an Appointment</a>\n      </div>\n    </div>\n  \n    <div class=\"card col-md-4 offset-md-2\">\n      <img class=\"card-img-top\" style=\"height:200px;\" src=\"../../assets/img/person.png\" alt=\"Book Appointment\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Book an Appointment</h5>\n        <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n        <a routerLink = \"/appointment\" class=\"btn btn-primary\">Book an Appointment</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/medicalcart/medicalcart.component.css":
/*!*******************************************************!*\
  !*** ./src/app/medicalcart/medicalcart.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/medicalcart/medicalcart.component.html":
/*!********************************************************!*\
  !*** ./src/app/medicalcart/medicalcart.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor = \"let order of orders\">\n  <h1> {{order._id}} </h1>\n  <h1> {{order.createdAt.toDate() | date: 'yyyy/MM/dd h:mm:ss a'}} </h1>\n  <button (click) = \"delete(order._id,order.userid)\">Cancel</button>\n  <button [routerLink]=\"['/orderdetail', order._id]\">View</button>\n</div>"

/***/ }),

/***/ "./src/app/medicalcart/medicalcart.component.ts":
/*!******************************************************!*\
  !*** ./src/app/medicalcart/medicalcart.component.ts ***!
  \******************************************************/
/*! exports provided: MedicalcartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalcartComponent", function() { return MedicalcartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_medicals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/medicals.service */ "./src/app/services/medicals.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MedicalcartComponent = /** @class */ (function () {
    function MedicalcartComponent(cartservice, medicalservice, authService) {
        this.cartservice = cartservice;
        this.medicalservice = medicalservice;
        this.authService = authService;
    }
    MedicalcartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuthState()
            .subscribe(function (user) {
            if (user) {
                _this.userid = user.uid;
                // User is signed in.
            }
        });
        this.medicalservice.getOrders()
            .subscribe(function (orders) {
            _this.orders = orders;
            console.log(_this.orders);
        });
    };
    MedicalcartComponent.prototype.delete = function (id, user) {
        console.log(id, user);
        this.cartservice.deleteorderM(this.userid, id);
        this.cartservice.deleteorderU(user, id);
    };
    MedicalcartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-medicalcart',
            template: __webpack_require__(/*! ./medicalcart.component.html */ "./src/app/medicalcart/medicalcart.component.html"),
            styles: [__webpack_require__(/*! ./medicalcart.component.css */ "./src/app/medicalcart/medicalcart.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"],
            _services_medicals_service__WEBPACK_IMPORTED_MODULE_2__["MedicalsService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], MedicalcartComponent);
    return MedicalcartComponent;
}());



/***/ }),

/***/ "./src/app/medicaldetail/medicaldetail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/medicaldetail/medicaldetail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/medicaldetail/medicaldetail.component.html":
/*!************************************************************!*\
  !*** ./src/app/medicaldetail/medicaldetail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"medical\">\n    <h1>{{medical.name}}</h1>\n    <p>{{medical.location}}</p>\n</div>\n  <div class=\"form-group\">\n\t\t<div class=\"input-group input-group-alternative\">\n\t\t\t<label>Medicine</label>\n\t\t\t<select class=\"form-control\" [(ngModel)] = \"selectedMedicine\" >\n\t\t\t\t<option *ngFor =\"let medicine of medical.medicines\">{{medicine.name}}</option>\n      </select>\n      <input class=\"form-control\" type=\"number\" min=\"0\" [(ngModel)] = \"quantity\">\n    </div>\n    <button class=\"btn btn-primary\" (click) = \"addtoCart()\">Add to Cart</button>\n\t</div>\n  "

/***/ }),

/***/ "./src/app/medicaldetail/medicaldetail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/medicaldetail/medicaldetail.component.ts ***!
  \**********************************************************/
/*! exports provided: MedicaldetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicaldetailComponent", function() { return MedicaldetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_medicals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/medicals.service */ "./src/app/services/medicals.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MedicaldetailComponent = /** @class */ (function () {
    // quantities: number[] = [];
    function MedicaldetailComponent(medicalsservice, route, location, cartservice) {
        this.medicalsservice = medicalsservice;
        this.route = route;
        this.location = location;
        this.cartservice = cartservice;
        this.price = 0;
        this.quantity = 0;
    }
    MedicaldetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) { return _this.medicalsservice.getMedical(params['id']); }))
            .subscribe(function (medical) {
            _this.medical = medical;
            _this.medicalsservice.getMedicines(_this.medical._id)
                .subscribe(function (medicines) {
                _this.medical.medicines = medicines;
            });
        });
        this.cartservice.getCart()
            .subscribe(function (cart) {
            _this.cart = cart;
        });
    };
    MedicaldetailComponent.prototype.addtoCart = function () {
        var _this = this;
        // this.cartservice.getCart()
        // .subscribe(cart =>
        //   {
        //     this.cart = cart;
        //     console.log(this.cart); 
        //   if(this.cart.length == 0)
        //   {
        //       this.route.params.pipe(switchMap((params: Params) => this.medicalsservice.getMedical(params['id'])))
        //       .subscribe(medical => { 
        //         this.medical1 = medical;
        //         this.medicalsservice.getMedicine(this.medical1._id, this.selectedMedicine)
        //         .subscribe(medicines => {
        //           this.med = medicines;
        //           this.price = this.med[0].price*this.quantity;   
        //           this.cartservice.postCart(this.selectedMedicine,this.price,this.quantity, this.medical._id);   
        //         });
        //      });   
        //   }
        // else
        // {
        // this.cartservice.isMedical(this.medical._id)
        // .then(value1 => {
        //   if(value1)
        //   {
        if (this.cart.length == 0) {
            this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) { return _this.medicalsservice.getMedical(params['id']); }))
                .subscribe(function (medical) {
                _this.medical1 = medical;
                _this.medicalsservice.getMedicine(_this.medical1._id, _this.selectedMedicine)
                    .subscribe(function (medicines) {
                    _this.med = medicines;
                    _this.price = _this.med[0].price * _this.quantity;
                    console.log(_this.medical._id);
                    _this.cartservice.postCart(_this.selectedMedicine, _this.price, _this.quantity, _this.medical._id);
                });
            });
        }
        else {
            this.cartservice.isMedical(this.medical._id)
                .then(function (value) {
                if (value) {
                    _this.cartservice.isMedicine(_this.selectedMedicine)
                        .then(function (value) {
                        console.log(value);
                        if (!value) {
                            _this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) { return _this.medicalsservice.getMedical(params['id']); }))
                                .subscribe(function (medical) {
                                _this.medical1 = medical;
                                _this.medicalsservice.getMedicine(_this.medical1._id, _this.selectedMedicine)
                                    .subscribe(function (medicines) {
                                    _this.med = medicines;
                                    _this.price = _this.med[0].price * _this.quantity;
                                    console.log(_this.medical._id);
                                    _this.cartservice.postCart(_this.selectedMedicine, _this.price, _this.quantity, _this.medical._id);
                                });
                            });
                        }
                    });
                }
            });
        }
        // {
        //   alert("Medicine already exists in cart");
        // }
    };
    MedicaldetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-medicaldetail',
            template: __webpack_require__(/*! ./medicaldetail.component.html */ "./src/app/medicaldetail/medicaldetail.component.html"),
            styles: [__webpack_require__(/*! ./medicaldetail.component.css */ "./src/app/medicaldetail/medicaldetail.component.css")]
        }),
        __metadata("design:paramtypes", [_services_medicals_service__WEBPACK_IMPORTED_MODULE_5__["MedicalsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]])
    ], MedicaldetailComponent);
    return MedicaldetailComponent;
}());



/***/ }),

/***/ "./src/app/medicals/medicals.component.css":
/*!*************************************************!*\
  !*** ./src/app/medicals/medicals.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/medicals/medicals.component.html":
/*!**************************************************!*\
  !*** ./src/app/medicals/medicals.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<input class=\"form-control\" placeholder=\"Search\" type=\"text\" [(ngModel)] = \"query\">\n<div class=\"container-fluid\">\n  <div class=\"row\">\n      <div class=\"card border-primary my-3 mx-3 col-md-3\" *ngFor = \"let medical of medicals | filter: query\" >\n          <div class=\"card-header\">{{medical.name}}</div>\n          <div class=\"card-body text-primary\">\n            <h5 class=\"card-title\">{{medical.location}}</h5>\n            <button class=\"btn btn-primary\" [routerLink]=\"['/medicaldetail', medical._id]\">See</button>\n          </div>\n        </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/medicals/medicals.component.ts":
/*!************************************************!*\
  !*** ./src/app/medicals/medicals.component.ts ***!
  \************************************************/
/*! exports provided: MedicalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalsComponent", function() { return MedicalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_medicals_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/medicals.service */ "./src/app/services/medicals.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MedicalsComponent = /** @class */ (function () {
    function MedicalsComponent(medicalsservice) {
        this.medicalsservice = medicalsservice;
    }
    MedicalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.medicalsservice.getMedicals()
            .subscribe(function (medicals) { return _this.medicals = medicals; }, function (errmess) { return _this.errMess = errmess; });
    };
    MedicalsComponent.prototype.onSelect = function (medical) {
        this.selectedMedical = medical;
    };
    MedicalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-medicals',
            template: __webpack_require__(/*! ./medicals.component.html */ "./src/app/medicals/medicals.component.html"),
            styles: [__webpack_require__(/*! ./medicals.component.css */ "./src/app/medicals/medicals.component.css")]
        }),
        __metadata("design:paramtypes", [_services_medicals_service__WEBPACK_IMPORTED_MODULE_1__["MedicalsService"]])
    ], MedicalsComponent);
    return MedicalsComponent;
}());



/***/ }),

/***/ "./src/app/medicalview/medicalview.component.css":
/*!*******************************************************!*\
  !*** ./src/app/medicalview/medicalview.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/medicalview/medicalview.component.html":
/*!********************************************************!*\
  !*** ./src/app/medicalview/medicalview.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"medicines\">\n    <select class=\"form-control\" [(ngModel)] = \"selectedMedicine\" >\n\t\t\t\t<option *ngFor =\"let medicine of medicines\">{{medicine._id}}</option>\n    </select>\n    Price\n    <input type=\"number\" [(ngModel)] = \"price\" >\n    <button (click) = \"addMedicine(selectedMedicine, price)\">Add</button>\n</div>\n\n<div *ngIf = \"med\">\n  Your database\n  <div *ngFor = \"let medicine of med\">\n     <span>{{medicine.name}} </span>\n     <span>{{medicine.price}}</span>\n     <button (click) =\"deleteMedicine(medicine.name)\">Delete</button>\n  </div>\n</div>\n\n<div>\n  <h4>Add to Our Database</h4>\n  Name<input type=\"text\" [(ngModel)] = \"name\">\n  Description <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" placeholder=\"Write Description\" [(ngModel)] = \"description\"></textarea>\n  <button (click) = \"addMed(name, description)\">Add</button>\n</div>"

/***/ }),

/***/ "./src/app/medicalview/medicalview.component.ts":
/*!******************************************************!*\
  !*** ./src/app/medicalview/medicalview.component.ts ***!
  \******************************************************/
/*! exports provided: MedicalviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalviewComponent", function() { return MedicalviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_medicine_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/medicine.service */ "./src/app/services/medicine.service.ts");
/* harmony import */ var _services_medicals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/medicals.service */ "./src/app/services/medicals.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MedicalviewComponent = /** @class */ (function () {
    function MedicalviewComponent(medicineservice, medicalservice, authService, usersservice) {
        this.medicineservice = medicineservice;
        this.medicalservice = medicalservice;
        this.authService = authService;
        this.usersservice = usersservice;
        this.medic = false;
        this.medic1 = false;
    }
    MedicalviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.medicineservice.getAllmedicines()
            .subscribe(function (medicines) {
            _this.medicines = medicines;
        });
        this.authService.getAuthState()
            .subscribe(function (user) {
            if (user) {
                _this.userid = user.uid;
                _this.medicalservice.getMedicines(_this.userid)
                    .subscribe(function (medicines) {
                    _this.med = medicines;
                });
            }
        });
    };
    MedicalviewComponent.prototype.addMedicine = function (medicine, price) {
        var _this = this;
        this.medicalservice.isMedicine(medicine)
            .then(function (value) {
            _this.medic = value;
            if (!_this.medic) {
                _this.medicineservice.getMedicine(medicine)
                    .subscribe(function (medicines) {
                    _this.medicalservice.postMedicine(medicine, medicines.description, price);
                });
            }
        });
    };
    MedicalviewComponent.prototype.deleteMedicine = function (id) {
        var _this = this;
        this.medicalservice.getMedicin(id)
            .subscribe(function (medicine) {
            _this.medicalservice.deleteMedicine(medicine._id);
        });
    };
    MedicalviewComponent.prototype.addMed = function (id, description) {
        var _this = this;
        this.medicineservice.isMedicine(id)
            .then(function (value) {
            _this.medic1 = value;
            console.log(_this.medic1);
            if (!_this.medic1) {
                _this.medicineservice.postMedicine(id, description);
            }
        });
    };
    MedicalviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-medicalview',
            template: __webpack_require__(/*! ./medicalview.component.html */ "./src/app/medicalview/medicalview.component.html"),
            styles: [__webpack_require__(/*! ./medicalview.component.css */ "./src/app/medicalview/medicalview.component.css")]
        }),
        __metadata("design:paramtypes", [_services_medicine_service__WEBPACK_IMPORTED_MODULE_1__["MedicineService"],
            _services_medicals_service__WEBPACK_IMPORTED_MODULE_2__["MedicalsService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]])
    ], MedicalviewComponent);
    return MedicalviewComponent;
}());



/***/ }),

/***/ "./src/app/orderdetail/orderdetail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/orderdetail/orderdetail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/orderdetail/orderdetail.component.html":
/*!********************************************************!*\
  !*** ./src/app/orderdetail/orderdetail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor = \"let order of cart\">\n  <h3> {{order.medicines}} </h3>\n  <h3> {{order.quantity}} </h3>\n</div>"

/***/ }),

/***/ "./src/app/orderdetail/orderdetail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/orderdetail/orderdetail.component.ts ***!
  \******************************************************/
/*! exports provided: OrderdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderdetailComponent", function() { return OrderdetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderdetailComponent = /** @class */ (function () {
    function OrderdetailComponent(route, location, cartservice) {
        this.route = route;
        this.location = location;
        this.cartservice = cartservice;
    }
    OrderdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) { return _this.cartservice.getOrders(params['id']); }))
            .subscribe(function (orders) {
            console.log(orders.cart);
            _this.cart = orders.cart;
        });
    };
    OrderdetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orderdetail',
            template: __webpack_require__(/*! ./orderdetail.component.html */ "./src/app/orderdetail/orderdetail.component.html"),
            styles: [__webpack_require__(/*! ./orderdetail.component.css */ "./src/app/orderdetail/orderdetail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]])
    ], OrderdetailComponent);
    return OrderdetailComponent;
}());



/***/ }),

/***/ "./src/app/prescriptiondetail/prescriptiondetail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/prescriptiondetail/prescriptiondetail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/prescriptiondetail/prescriptiondetail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/prescriptiondetail/prescriptiondetail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor = \"let medicine of prescription.medicines\"> \n  <p>{{medicine.medicine}}</p>\n</div>"

/***/ }),

/***/ "./src/app/prescriptiondetail/prescriptiondetail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/prescriptiondetail/prescriptiondetail.component.ts ***!
  \********************************************************************/
/*! exports provided: PrescriptiondetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescriptiondetailComponent", function() { return PrescriptiondetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_prescription_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/prescription.service */ "./src/app/services/prescription.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PrescriptiondetailComponent = /** @class */ (function () {
    function PrescriptiondetailComponent(prescriptionservice, route, location, authService) {
        this.prescriptionservice = prescriptionservice;
        this.route = route;
        this.location = location;
        this.authService = authService;
    }
    PrescriptiondetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuthState()
            .subscribe(function (user) {
            if (user) {
                // User is signed in.
                _this.userid = user.uid;
            }
            else {
                console.log('Wrong Password or Username');
            }
        });
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) { return _this.prescriptionservice.getPrescription(params['id']); }))
            .subscribe(function (prescription) {
            _this.prescription = prescription;
            _this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
                return _this.prescriptionservice.getAllMed(_this.userid, params['id']);
            }))
                .subscribe(function (medicines) {
                _this.prescription.medicines = medicines;
                console.log(_this.prescription.medicines);
            });
        });
    };
    PrescriptiondetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prescriptiondetail',
            template: __webpack_require__(/*! ./prescriptiondetail.component.html */ "./src/app/prescriptiondetail/prescriptiondetail.component.html"),
            styles: [__webpack_require__(/*! ./prescriptiondetail.component.css */ "./src/app/prescriptiondetail/prescriptiondetail.component.css")]
        }),
        __metadata("design:paramtypes", [_services_prescription_service__WEBPACK_IMPORTED_MODULE_1__["PrescriptionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], PrescriptiondetailComponent);
    return PrescriptiondetailComponent;
}());



/***/ }),

/***/ "./src/app/prescriptions/prescriptions.component.css":
/*!***********************************************************!*\
  !*** ./src/app/prescriptions/prescriptions.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/prescriptions/prescriptions.component.html":
/*!************************************************************!*\
  !*** ./src/app/prescriptions/prescriptions.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>{{patient}}</p>\n<p>{{location1}}</p>\nDescription\n<input type=\"text\" [(ngModel)] = \"description1\">\n\n<button (click) = \"onSave()\">Create</button>\n<div *ngIf = \"medicines\">\n    <select class=\"form-control\" [(ngModel)] = \"medicine\" >\n\t\t\t\t<option *ngFor =\"let medicine of medicines\">{{medicine._id}}</option>\n    </select>\n    Description\n    <input type=\"text\" [(ngModel)] = \"description\" >\n    Quantity\n    <input type=\"number\" [(ngModel)] = \"quantity\" >\n    <button (click) = \"onAdd()\">Add</button>\n</div>\n<div *ngFor = \"let medicine of med\">\n  <h4 > {{medicine.medicine}} </h4>\n  <button (click)=\"deleteMed(medicine.medicine)\">Delete</button>\n</div>\n"

/***/ }),

/***/ "./src/app/prescriptions/prescriptions.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/prescriptions/prescriptions.component.ts ***!
  \**********************************************************/
/*! exports provided: PrescriptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescriptionsComponent", function() { return PrescriptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_doctor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/doctor.service */ "./src/app/services/doctor.service.ts");
/* harmony import */ var _services_patients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/patients.service */ "./src/app/services/patients.service.ts");
/* harmony import */ var _services_prescription_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/prescription.service */ "./src/app/services/prescription.service.ts");
/* harmony import */ var _services_booking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/booking.service */ "./src/app/services/booking.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_medicine_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/medicine.service */ "./src/app/services/medicine.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PrescriptionsComponent = /** @class */ (function () {
    function PrescriptionsComponent(doctorservice, patientservice, prescriptionservice, route, location, bookingservice, medicineservice) {
        this.doctorservice = doctorservice;
        this.patientservice = patientservice;
        this.prescriptionservice = prescriptionservice;
        this.route = route;
        this.location = location;
        this.bookingservice = bookingservice;
        this.medicineservice = medicineservice;
    }
    PrescriptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.medicineservice.getAllmedicines()
            .subscribe(function (medicines) {
            _this.medicines = medicines;
        });
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (params) { return _this.bookingservice.getAppointment(params['id']); }))
            .subscribe(function (appointment) {
            _this.patient = appointment.userid;
            _this.date = appointment.date;
            _this.patientname = appointment.user;
            _this.doctor = appointment.docid;
            _this.doctorname = appointment.doctor;
            _this.id = appointment._id;
            _this.appid = appointment._id;
            _this.date_time = appointment.date_time;
            _this.doctorservice.getDoctor(_this.doctor)
                .subscribe(function (doctor) {
                _this.location1 = doctor.location;
            });
            _this.prescriptionservice.getAllMed(_this.patient, _this.id)
                .subscribe(function (medicines) {
                _this.med = medicines;
                console.log(_this.med);
            });
        });
    };
    PrescriptionsComponent.prototype.onSave = function () {
        this.prescriptionservice.postPrescription(this.patient, this.date, this.doctorname, this.location1, this.id, this.description1, this.doctor, this.patientname);
    };
    PrescriptionsComponent.prototype.onAdd = function () {
        this.prescriptionservice.postMed(this.medicine, this.quantity, this.patient, this.date, this.id, this.description);
    };
    PrescriptionsComponent.prototype.deleteMed = function (id) {
        this.prescriptionservice.delMed(this.patient, id, this.id);
    };
    PrescriptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prescriptions',
            template: __webpack_require__(/*! ./prescriptions.component.html */ "./src/app/prescriptions/prescriptions.component.html"),
            styles: [__webpack_require__(/*! ./prescriptions.component.css */ "./src/app/prescriptions/prescriptions.component.css")]
        }),
        __metadata("design:paramtypes", [_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__["DoctorService"], _services_patients_service__WEBPACK_IMPORTED_MODULE_2__["PatientsService"],
            _services_prescription_service__WEBPACK_IMPORTED_MODULE_3__["PrescriptionService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _services_booking_service__WEBPACK_IMPORTED_MODULE_4__["BookingService"],
            _services_medicine_service__WEBPACK_IMPORTED_MODULE_8__["MedicineService"]])
    ], PrescriptionsComponent);
    return PrescriptionsComponent;
}());



/***/ }),

/***/ "./src/app/prescriptionview/prescriptionview.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/prescriptionview/prescriptionview.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/prescriptionview/prescriptionview.component.html":
/*!******************************************************************!*\
  !*** ./src/app/prescriptionview/prescriptionview.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor = \"let pre of prescription\">\n  <p> {{pre.date}} </p>\n  <button [routerLink]=\"['/prescriptiondetail', pre._id]\">View</button>\n</div>"

/***/ }),

/***/ "./src/app/prescriptionview/prescriptionview.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/prescriptionview/prescriptionview.component.ts ***!
  \****************************************************************/
/*! exports provided: PrescriptionviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescriptionviewComponent", function() { return PrescriptionviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_doctor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/doctor.service */ "./src/app/services/doctor.service.ts");
/* harmony import */ var _services_patients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/patients.service */ "./src/app/services/patients.service.ts");
/* harmony import */ var _services_prescription_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/prescription.service */ "./src/app/services/prescription.service.ts");
/* harmony import */ var _services_booking_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/booking.service */ "./src/app/services/booking.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_medicine_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/medicine.service */ "./src/app/services/medicine.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PrescriptionviewComponent = /** @class */ (function () {
    function PrescriptionviewComponent(doctorservice, patientservice, prescriptionservice, route, location, bookingservice, medicineservice) {
        this.doctorservice = doctorservice;
        this.patientservice = patientservice;
        this.prescriptionservice = prescriptionservice;
        this.route = route;
        this.location = location;
        this.bookingservice = bookingservice;
        this.medicineservice = medicineservice;
    }
    PrescriptionviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prescriptionservice.getAllPRescription()
            .subscribe(function (prescriptions) {
            _this.prescription = prescriptions;
        });
    };
    PrescriptionviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-prescriptionview',
            template: __webpack_require__(/*! ./prescriptionview.component.html */ "./src/app/prescriptionview/prescriptionview.component.html"),
            styles: [__webpack_require__(/*! ./prescriptionview.component.css */ "./src/app/prescriptionview/prescriptionview.component.css")]
        }),
        __metadata("design:paramtypes", [_services_doctor_service__WEBPACK_IMPORTED_MODULE_1__["DoctorService"], _services_patients_service__WEBPACK_IMPORTED_MODULE_2__["PatientsService"],
            _services_prescription_service__WEBPACK_IMPORTED_MODULE_3__["PrescriptionService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _services_booking_service__WEBPACK_IMPORTED_MODULE_4__["BookingService"],
            _services_medicine_service__WEBPACK_IMPORTED_MODULE_7__["MedicineService"]])
    ], PrescriptionviewComponent);
    return PrescriptionviewComponent;
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
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
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
    function AuthService(afAuth) {
        var _this = this;
        this.afAuth = afAuth;
        this.currentUser = null;
        this.authState = this.afAuth.authState;
        this.authState.subscribe(function (user) {
            if (user) {
                _this.currentUser = user;
            }
            else {
                _this.currentUser = null;
            }
        });
    }
    AuthService.prototype.getAuthState = function () {
        return this.authState;
    };
    AuthService.prototype.signUp = function (user) {
        firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(user.username, user.password)
            .then(function (res) { return console.log(res); })
            .catch(function (error) {
            // Handle Errors here.
        });
    };
    AuthService.prototype.logIn = function (user) {
        this.afAuth.auth.signInWithEmailAndPassword(user.username, user.password)
            .then(function (res) { return console.log(res); })
            .catch(function (error) {
            // Handle Errors here.
        });
    };
    AuthService.prototype.logOut = function () {
        this.afAuth.auth.signOut();
    };
    AuthService.prototype.googleLogin = function () {
        this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/booking.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/booking.service.ts ***!
  \*********************************************/
/*! exports provided: BookingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingService", function() { return BookingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_patients_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/patients.service */ "./src/app/services/patients.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BookingService = /** @class */ (function () {
    function BookingService(afs, authService, patientservice) {
        var _this = this;
        this.afs = afs;
        this.authService = authService;
        this.patientservice = patientservice;
        this.userId = undefined;
        this.username = undefined;
        this.currentUser = null;
        this.authService.getAuthState()
            .subscribe(function (user) {
            if (user) {
                // User is signed in.
                _this.userId = user.uid;
                _this.patientservice.getPatient(_this.userId)
                    .subscribe(function (patient) {
                    _this.username = patient.name;
                });
            }
            else {
                _this.userId = undefined;
            }
        });
    }
    BookingService.prototype.getAppointment = function (id) {
        if (this.userId) {
            return this.afs.doc('appointments/' + id).snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) {
                var data = action.payload.data();
                var _id = action.payload.id;
                return __assign({ _id: _id }, data);
            }));
        }
    };
    BookingService.prototype.getAppointments = function () {
        var _this = this;
        if (this.userId) {
            return this.afs.collection('appointments', function (ref) { return ref.where('userid', '==', _this.userId); }).snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
                return actions.map(function (action) {
                    var data = action.payload.doc.data();
                    var _id = action.payload.doc.id;
                    return __assign({ _id: _id }, data);
                });
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])('No User Logged In!');
        }
    };
    BookingService.prototype.getDoctorAppointments = function () {
        var _this = this;
        if (this.userId) {
            return this.afs.collection('appointments', function (ref) { return ref.where('docid', '==', _this.userId); }).snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
                return actions.map(function (action) {
                    var data = action.payload.doc.data();
                    var _id = action.payload.doc.id;
                    return __assign({ _id: _id }, data);
                });
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])('No User Logged In!');
        }
    };
    // getAppointment(doctorid): Observable<Booking> {
    //   if (this.userId) {
    //     return this.afs.collection<Booking>('appointments', ref => ref.where('doctor', '==', doctorid)).snapshotChanges()
    //     .pipe(map(actions => {
    //       return actions.map(action => {
    //         const data = action.payload.doc.data() as Booking;
    //         const _id = action.payload.doc.id;
    //         return { _id, ...data };
    //       });
    //     }));
    //   } else {
    //     return throwError('No User Logged In!');
    //   }
    //   } 
    // }
    // getAppointment(id): Observable <Booking> {
    //   if(this.userId)
    //   {
    //     return this.afs.doc('appointments)
    //   }
    // }
    BookingService.prototype.postAppointment = function (name, id, date, time, dt) {
        if (this.userId) {
            return this.afs.collection('appointments').add({ userid: this.userId, doctor: name, docid: id, date: date, time: time, date_time: dt, user: this.username });
        }
        else {
            return Promise.reject(new Error('No User Logged In!'));
        }
    };
    BookingService.prototype.isAppointment = function (id) {
        var db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
        if (this.userId) {
            return db.collection('appointments').where('userid', '==', this.userId).where('docid', '==', id).get()
                .then(function (doc) {
                return !doc.empty;
            });
        }
        else {
            return Promise.resolve(false);
        }
    };
    BookingService.prototype.checkDatetime = function (id, dt) {
        var db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
        if (this.userId) {
            return db.collection('appointments').where('docid', '==', id).where('date_time', '==', dt).get()
                .then(function (doc) {
                return !doc.empty;
            });
        }
        else {
            return Promise.resolve(false);
        }
    };
    BookingService.prototype.deleteAppointment = function (id) {
        var db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
        if (this.userId) {
            return db.doc('appointments/' + id).delete();
        }
        else {
            return Promise.reject(new Error('No User Logged In!'));
        }
    };
    BookingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_patients_service__WEBPACK_IMPORTED_MODULE_5__["PatientsService"]])
    ], BookingService);
    return BookingService;
}());



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartService = /** @class */ (function () {
    function CartService(afs, authService) {
        var _this = this;
        this.afs = afs;
        this.authService = authService;
        this.userId = undefined;
        this.username = undefined;
        this.currentUser = null;
        this.authService.getAuthState()
            .subscribe(function (user) {
            if (user) {
                // User is signed in.
                _this.userId = user.uid;
                _this.username = user.email;
            }
            else {
                _this.userId = undefined;
            }
        });
    }
    // deleteCart(): Promise<void> {
    //   const db = firebase.firestore();
    //   if (this.userId) {
    //     return db.collection('messages').getDocuments().then((snapshot) {
    //       return snapshot.documents.map((doc) {
    //         doc.reference.delete();
    //       });
    //     });
    //   } else {
    //     return Promise.reject(new Error('No User Logged In!'));
    //   }
    // }
    CartService.prototype.postCart = function (medicines, price, quantity, medid) {
        if (this.userId) {
            this.afs.collection('users/' + this.userId + '/cart').add({ medicines: medicines, price: price, quantity: quantity, medicalid: medid });
        }
        else {
            return Promise.reject(new Error('No User Logged In!'));
        }
    };
    CartService.prototype.getCart = function () {
        if (this.userId) {
            return this.afs.collection('users').doc(this.userId).collection('cart').snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
                return actions.map(function (action) {
                    var data = action.payload.doc.data();
                    var _id = action.payload.doc.id;
                    return __assign({ _id: _id }, data);
                });
            }));
        }
    };
    CartService.prototype.deleteMedicine = function (id) {
        var db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
        if (this.userId) {
            return db.doc('users/' + this.userId + '/cart/' + id).delete();
        }
        else {
            return Promise.reject(new Error('No User Logged In!'));
        }
    };
    CartService.prototype.isMedicine = function (id) {
        var db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
        if (this.userId) {
            return db.collection('users').doc(this.userId).collection('cart').where('medicines', '==', id).get()
                .then(function (doc) {
                return !doc.empty;
            });
        }
        else {
            return Promise.resolve(false);
        }
    };
    CartService.prototype.isMedical = function (id) {
        var db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
        if (this.userId) {
            return db.collection('users').doc(this.userId).collection('cart').where('medicalid', '==', id).get()
                .then(function (doc) {
                return !doc.empty;
            });
        }
        else {
            return Promise.resolve(false);
        }
    };
    CartService.prototype.postCartM = function (id, cart) {
        if (this.userId) {
            this.afs.collection('medicals/' + id + '/orders').add({ createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.serverTimestamp(), cart: cart, userid: this.userId });
        }
        else {
            return Promise.reject(new Error('No User Logged In!'));
        }
    };
    CartService.prototype.postCartU = function (cart) {
        if (this.userId) {
            this.afs.collection('users/' + this.userId + '/orders').add({ createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.serverTimestamp(), cart: cart });
        }
        else {
            return Promise.reject(new Error('No User Logged In!'));
        }
    };
    CartService.prototype.getOrders = function (id) {
        if (this.userId) {
            return this.afs.collection('medicals').doc(this.userId).collection('orders').doc(id).snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) {
                var data = action.payload.data();
                var _id = action.payload.id;
                return __assign({ _id: _id }, data);
            }));
        }
    };
    CartService.prototype.deleteorderM = function (mid, id) {
        var db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
        if (this.userId) {
            return db.doc('medicals/' + mid + '/orders/' + id).delete();
        }
        else {
            return Promise.reject(new Error('No User Logged In!'));
        }
    };
    CartService.prototype.deleteorderU = function (mid, id) {
        var db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
        if (this.userId) {
            return db.doc('users/' + mid + '/orders/' + id).delete();
        }
        else {
            return Promise.reject(new Error('No User Logged In!'));
        }
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/services/doctor.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/doctor.service.ts ***!
  \********************************************/
/*! exports provided: DoctorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorService", function() { return DoctorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DoctorService = /** @class */ (function () {
    function DoctorService(afs, authService) {
        var _this = this;
        this.afs = afs;
        this.authService = authService;
        this.currentUser = null;
        this.authService.getAuthState()
            .subscribe(function (user) {
            if (user) {
                // User is signed in.
                _this.currentUser = user;
                _this.userId = user.uid;
                _this.username = user.email;
            }
            else {
                _this.currentUser = null;
            }
        });
    }
    DoctorService.prototype.isDoctor = function () {
        var db = firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"]();
        if (this.userId) {
            return db.collection('doctors').doc(this.userId).get()
                .then(function (doc) {
                if (doc.exists) {
                    return Promise.resolve(true);
                }
            });
        }
        else {
            return Promise.resolve(false);
        }
    };
    DoctorService.prototype.getDoctors = function () {
        return this.afs.collection('doctors').snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var _id = action.payload.doc.id;
                return __assign({ _id: _id }, data);
            });
        }));
    };
    DoctorService.prototype.putDoctor = function (name, specialization, location, description, gender, start, end) {
        if (this.userId) {
            return this.afs.collection('doctors').doc(this.userId).update({ name: name, email: this.username, specialization: specialization, location: location, gender: gender, description: description, start_time: start, end_time: end });
        }
        else {
            return Promise.reject(new Error('No User Logged In!'));
        }
    };
    DoctorService.prototype.postDoctor = function (name, specialization, location, gender, description, start, end) {
        if (this.userId) {
            return this.afs.collection('doctors').doc(this.userId).set({ name: name, email: this.username, specialization: specialization, location: location, gender: gender, description: description, start_time: start, end_time: end });
        }
        else {
            return Promise.reject(new Error('No User Logged In!'));
        }
    };
    DoctorService.prototype.getDoctor = function (id) {
        return this.afs.doc('doctors/' + id).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) {
            var data = action.payload.data();
            var _id = action.payload.id;
            return __assign({ _id: _id }, data);
        }));
    };
    DoctorService.prototype.getSpecializedDoctor = function (specialize) {
        return this.afs.collection('doctors', function (ref) { return ref.where('specialization', '==', specialize); }).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var _id = action.payload.doc.id;
                return __assign({ _id: _id }, data);
            })[0];
        }));
    };
    DoctorService.prototype.getDoctorIds = function () {
        return this.getDoctors()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (doctors) { return doctors.map(function (doctor) { return doctor._id; }); }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) { return error; }));
    };
    DoctorService.prototype.postComment = function (doctorId, comment) {
        if (this.currentUser) {
            return this.afs.collection('doctors').doc(doctorId).collection('comments')
                .add({
                author: {
                    '_id': this.currentUser.uid,
                    'firstname': this.currentUser.displayName ? this.currentUser.displayName : this.currentUser.email
                },
                rating: comment.rating,
                comment: comment.comment,
                createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.serverTimestamp(),
                updatedAt: firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.serverTimestamp()
            });
        }
        else {
            return Promise.reject(new Error('No User Logged In!'));
        }
    };
    DoctorService.prototype.getComments = function (doctorId) {
        return this.afs.collection('doctors').doc(doctorId).collection('comments').valueChanges();
    };
    DoctorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], DoctorService);
    return DoctorService;
}());



/***/ }),

/***/ "./src/app/services/medicals.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/medicals.service.ts ***!
  \**********************************************/
/*! exports provided: MedicalsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalsService", function() { return MedicalsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MedicalsService = /** @class */ (function () {
    function MedicalsService(afs, authService) {
        var _this = this;
        this.afs = afs;
        this.authService = authService;
        this.userId = undefined;
        this.username = undefined;
        this.authService.getAuthState()
            .subscribe(function (user) {
            if (user) {
                // User is signed in.
                _this.userId = user.uid;
                _this.username = user.email;
            }
            else {
                _this.userId = undefined;
            }
        });
    }
    MedicalsService.prototype.getMedicals = function () {
        return this.afs.collection('medicals').snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var _id = action.payload.doc.id;
                return __assign({ _id: _id }, data);
            });
        }));
    };
    MedicalsService.prototype.getMedical = function (id) {
        return this.afs.doc('medicals/' + id).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) {
            var data = action.payload.data();
            var _id = action.payload.id;
            return __assign({ _id: _id }, data);
        }));
    };
    MedicalsService.prototype.getMedicines = function (medicalId) {
        return this.afs.collection('medicals').doc(medicalId).collection('medicines').valueChanges();
    };
    MedicalsService.prototype.getMedicine = function (medicalId, medicine) {
        return this.afs.collection('medicals').doc(medicalId).collection('medicines', function (ref) { return ref.where('name', '==', medicine); }).valueChanges();
        // .pipe(map(actions => {
        //   return actions.map(action => {
        //     const data = action.payload.doc.data() as Medicine;
        //     const _id = action.payload.doc.id;
        //     return { _id, ...data };
        //   })[0];
        // }));
    };
    MedicalsService.prototype.putMedical = function (name, location, ph) {
        if (this.userId) {
            return this.afs.collection('medicals').doc(this.userId).update({ name: name, email: this.username, location: location, contact: ph });
        }
    };
    MedicalsService.prototype.postMedical = function (name, location, ph) {
        if (this.userId) {
            return this.afs.collection('medicals').doc(this.userId).set({ name: name, email: this.username, location: location, contact: ph });
        }
    };
    MedicalsService.prototype.isMedical = function () {
        var db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
        if (this.userId) {
            return db.collection('medicals').doc(this.userId).get()
                .then(function (doc) {
                if (doc.exists) {
                    return Promise.resolve(true);
                }
            });
        }
        else {
            return Promise.resolve(false);
        }
    };
    MedicalsService.prototype.postMedicine = function (medicine, description, price) {
        return this.afs.collection('medicals').doc(this.userId).collection('medicines').add({ name: medicine, description: description, price: price });
    };
    // deleteMedicine(id: string): Promise<void> {
    //   const db = firebase.firestore();
    //   if (this.userId) {
    //       return db.doc('medicals/' + this.userId + '/medicines/' +  ).delete();
    //   } else {
    //     return Promise.reject(new Error('No User Logged In!'));
    //   }
    // }
    MedicalsService.prototype.getMedicin = function (id) {
        return this.afs.collection('medicals').doc(this.userId).collection('medicines', function (ref) { return ref.where('name', '==', id); }).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var _id = action.payload.doc.id;
                return __assign({ _id: _id }, data);
            })[0];
        }));
    };
    MedicalsService.prototype.deleteMedicine = function (id) {
        var db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
        if (this.userId) {
            return db.doc('medicals/' + this.userId + '/medicines/' + id).delete();
        }
        else {
            return Promise.reject(new Error('No User Logged In!'));
        }
    };
    MedicalsService.prototype.isMedicine = function (id) {
        var db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
        if (this.userId) {
            return db.collection('medicals').doc(this.userId).collection('medicines').where('name', '==', id).get()
                .then(function (doc) {
                return !doc.empty;
            });
        }
        else {
            return Promise.resolve(false);
        }
    };
    MedicalsService.prototype.getOrders = function () {
        if (this.userId) {
            return this.afs.collection('medicals').doc(this.userId).collection('orders').snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
                return actions.map(function (action) {
                    var data = action.payload.doc.data();
                    var _id = action.payload.doc.id;
                    return __assign({ _id: _id }, data);
                });
            }));
        }
    };
    MedicalsService.prototype.getUserOrder = function () {
        if (this.userId) {
            return this.afs.collection('users').doc(this.userId).collection('orders').snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
                return actions.map(function (action) {
                    var data = action.payload.doc.data();
                    var _id = action.payload.doc.id;
                    return __assign({ _id: _id }, data);
                });
            }));
        }
    };
    MedicalsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], MedicalsService);
    return MedicalsService;
}());



/***/ }),

/***/ "./src/app/services/medicine.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/medicine.service.ts ***!
  \**********************************************/
/*! exports provided: MedicineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicineService", function() { return MedicineService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MedicineService = /** @class */ (function () {
    function MedicineService(afs, authService) {
        var _this = this;
        this.afs = afs;
        this.authService = authService;
        this.userId = undefined;
        this.username = undefined;
        this.authService.getAuthState()
            .subscribe(function (user) {
            if (user) {
                // User is signed in.
                _this.userId = user.uid;
                _this.username = user.email;
            }
            else {
                _this.userId = undefined;
            }
        });
    }
    MedicineService.prototype.getAllmedicines = function () {
        return this.afs.collection('medicines').snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var _id = action.payload.doc.id;
                return __assign({ _id: _id }, data);
            });
        }));
    };
    MedicineService.prototype.getMedicine = function (id) {
        return this.afs.doc('medicines/' + id).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) {
            var data = action.payload.data();
            var _id = action.payload.id;
            return __assign({ _id: _id }, data);
        }));
    };
    MedicineService.prototype.isMedicine = function (id) {
        var db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
        if (this.userId) {
            return db.collection('medicines').doc(id).get()
                .then(function (doc) {
                if (doc.exists) {
                    return Promise.resolve(true);
                }
            });
        }
        else {
            return Promise.resolve(false);
        }
    };
    MedicineService.prototype.postMedicine = function (id, description) {
        if (this.userId) {
            return this.afs.collection('medicines').doc(id).set({ description: description });
        }
        else {
            return Promise.reject(new Error('No User Logged In!'));
        }
    };
    MedicineService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], MedicineService);
    return MedicineService;
}());



/***/ }),

/***/ "./src/app/services/patients.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/patients.service.ts ***!
  \**********************************************/
/*! exports provided: PatientsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsService", function() { return PatientsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PatientsService = /** @class */ (function () {
    function PatientsService(afs, authService) {
        var _this = this;
        this.afs = afs;
        this.authService = authService;
        this.currentUser = null;
        this.authService.getAuthState()
            .subscribe(function (user) {
            if (user) {
                // User is signed in.
                _this.currentUser = user;
                _this.userId = user.uid;
                _this.username = user.email;
            }
            else {
                _this.currentUser = null;
            }
        });
    }
    PatientsService.prototype.isPatient = function () {
        var db = firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"]();
        if (this.userId) {
            return db.collection('patients').doc(this.userId).get()
                .then(function (doc) {
                if (doc.exists) {
                    return Promise.resolve(true);
                }
            });
        }
        else {
            return Promise.resolve(false);
        }
    };
    PatientsService.prototype.putPatient = function (name, phno, gender, bldgrp, height, weight, age) {
        if (this.userId) {
            return this.afs.collection('patients').doc(this.userId).update({ name: name, email: this.username, contact: phno, gender: gender, bloodgroup: bldgrp, height: height, weight: weight, age: age });
        }
        else {
            return Promise.reject(new Error('No User Logged In!'));
        }
    };
    PatientsService.prototype.postPatient = function (name, phno, gender, bldgrp, height, weight, age) {
        if (this.userId) {
            return this.afs.collection('patients').doc(this.userId).set({ name: name, email: this.username, contact: phno, gender: gender, bloodgroup: bldgrp, height: height, weight: weight, age: age });
        }
        else {
            return Promise.reject(new Error('No User Logged In!'));
        }
    };
    PatientsService.prototype.getPatient = function (id) {
        return this.afs.doc('patients/' + id).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) {
            var data = action.payload.data();
            var _id = action.payload.id;
            return __assign({ _id: _id }, data);
        }));
    };
    PatientsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], PatientsService);
    return PatientsService;
}());



/***/ }),

/***/ "./src/app/services/prescription.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/prescription.service.ts ***!
  \**************************************************/
/*! exports provided: PrescriptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrescriptionService", function() { return PrescriptionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PrescriptionService = /** @class */ (function () {
    function PrescriptionService(afs, authService) {
        var _this = this;
        this.afs = afs;
        this.authService = authService;
        this.userId = undefined;
        this.username = undefined;
        this.currentUser = null;
        this.authService.getAuthState()
            .subscribe(function (user) {
            if (user) {
                // User is signed in.
                _this.userId = user.uid;
                _this.username = user.email;
            }
            else {
                _this.userId = undefined;
            }
        });
    }
    PrescriptionService.prototype.postPrescription = function (patient, date, doctor, location, date_time, description, doctorid, patientname) {
        if (this.userId) {
            return this.afs.collection('patients').doc(patient).collection('prescriptions').doc(date_time).set({ user: patientname, doctor: doctor, location: location, date: date, description: description, doctorid: doctorid });
        }
        else {
            return Promise.reject(new Error('No User Logged In!'));
        }
    };
    PrescriptionService.prototype.postMed = function (medicine, quantity, patient, date, date_time, description) {
        if (this.userId) {
            return this.afs.collection('patients').doc(patient).collection('prescriptions').doc(date_time).collection('medicines').doc(medicine).set({ medicine: medicine, quantity: quantity, description: description });
        }
        else {
            return Promise.reject(new Error('No User Logged In!'));
        }
    };
    PrescriptionService.prototype.getAllMed = function (patient, id) {
        if (this.userId) {
            return this.afs.collection('patients').doc(patient).collection('prescriptions').doc(id).collection('medicines').snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
                return actions.map(function (action) {
                    var data = action.payload.doc.data();
                    var _id = action.payload.doc.id;
                    return __assign({ _id: _id }, data);
                });
            }));
        }
    };
    PrescriptionService.prototype.getAllPRescription = function () {
        return this.afs.collection('patients').doc(this.userId).collection('prescriptions').snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var _id = action.payload.doc.id;
                return __assign({ _id: _id }, data);
            });
        }));
    };
    PrescriptionService.prototype.delMed = function (patient, id, date_time) {
        var db = firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"]();
        if (this.userId) {
            return db.doc('patients/' + patient + '/prescriptions/' + date_time + '/medicines/' + id).delete();
        }
        else {
            return Promise.reject(new Error('No User Logged In!'));
        }
    };
    PrescriptionService.prototype.getPrescription = function (id) {
        return this.afs.collection('patients').doc(this.userId).collection('prescriptions').doc(id).valueChanges();
        // .pipe(map(action => {
        //   const data = action.payload.data() as Prescription;
        //   const _id = action.payload.id;
        //   return { _id, ...data };
        // }));
    };
    PrescriptionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], PrescriptionService);
    return PrescriptionService;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersService = /** @class */ (function () {
    function UsersService(afs, authService) {
        var _this = this;
        this.afs = afs;
        this.authService = authService;
        this.userId = undefined;
        this.username = undefined;
        this.currentUser = null;
        this.authService.getAuthState()
            .subscribe(function (user) {
            if (user) {
                // User is signed in.
                _this.userId = user.uid;
                _this.username = user.email;
            }
            else {
                _this.userId = undefined;
            }
        });
    }
    UsersService.prototype.getUser = function () {
        return this.afs.doc('users/' + this.userId).snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) {
            var data = action.payload.data();
            var _id = action.payload.id;
            return __assign({ _id: _id }, data);
        }));
    };
    UsersService.prototype.postPatient = function (category, name) {
        if (this.userId) {
            return this.afs.collection('users').doc(this.userId).set({ category: category, name: name, email: this.username });
        }
        else {
            return Promise.reject(new Error('No User Logged In!'));
        }
    };
    UsersService.prototype.postDoc = function (category, name) {
        if (this.userId) {
            return this.afs.collection('users').doc(this.userId).set({ name: name, email: this.username, category: category });
        }
        else {
            return Promise.reject(new Error('No User Logged In!'));
        }
    };
    UsersService.prototype.postMed = function (category, name, location) {
        if (this.userId) {
            return this.afs.collection('users').doc(this.userId).set({ name: name, email: this.username, category: category });
        }
        else {
            return Promise.reject(new Error('No User Logged In!'));
        }
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/userdetail/userdetail.component.css":
/*!*****************************************************!*\
  !*** ./src/app/userdetail/userdetail.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/userdetail/userdetail.component.html":
/*!******************************************************!*\
  !*** ./src/app/userdetail/userdetail.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"user_category === 'doctor'\">\n  <h1>{{patient.bloodgroup}}</h1>\n</div>"

/***/ }),

/***/ "./src/app/userdetail/userdetail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/userdetail/userdetail.component.ts ***!
  \****************************************************/
/*! exports provided: UserdetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdetailComponent", function() { return UserdetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_patients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/patients.service */ "./src/app/services/patients.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserdetailComponent = /** @class */ (function () {
    function UserdetailComponent(route, authService, location, usersservice, patientservice) {
        this.route = route;
        this.authService = authService;
        this.location = location;
        this.usersservice = usersservice;
        this.patientservice = patientservice;
    }
    UserdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuthState()
            .subscribe(function (user) {
            if (user) {
                // User is signed in.
                _this.usersservice.getUser()
                    .subscribe(function (user) {
                    if (user) {
                        _this.user_category = user.category;
                    }
                    else {
                        console.log('Not defined');
                    }
                });
            }
        });
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) { return _this.patientservice.getPatient(params['id']); }))
            .subscribe(function (user) {
            _this.patient = user;
        });
    };
    UserdetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userdetail',
            template: __webpack_require__(/*! ./userdetail.component.html */ "./src/app/userdetail/userdetail.component.html"),
            styles: [__webpack_require__(/*! ./userdetail.component.css */ "./src/app/userdetail/userdetail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            _services_patients_service__WEBPACK_IMPORTED_MODULE_2__["PatientsService"]])
    ], UserdetailComponent);
    return UserdetailComponent;
}());



/***/ }),

/***/ "./src/app/userorders/userorders.component.css":
/*!*****************************************************!*\
  !*** ./src/app/userorders/userorders.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/userorders/userorders.component.html":
/*!******************************************************!*\
  !*** ./src/app/userorders/userorders.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor = \"let order of orders\">\n    <h1> {{order._id}} </h1>\n    <h1> {{order.createdAt.toDate() | date: 'yyyy/MM/dd h:mm:ss a'}} </h1>\n    <button (click) = \"delete(order._id,order.userid)\">Cancel</button>\n    <button [routerLink]=\"['/orderdetail', order._id]\">View</button>\n  </div>"

/***/ }),

/***/ "./src/app/userorders/userorders.component.ts":
/*!****************************************************!*\
  !*** ./src/app/userorders/userorders.component.ts ***!
  \****************************************************/
/*! exports provided: UserordersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserordersComponent", function() { return UserordersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_medicals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/medicals.service */ "./src/app/services/medicals.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserordersComponent = /** @class */ (function () {
    function UserordersComponent(cartservice, medicalservice, authService) {
        this.cartservice = cartservice;
        this.medicalservice = medicalservice;
        this.authService = authService;
    }
    UserordersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuthState()
            .subscribe(function (user) {
            if (user) {
                _this.userid = user.uid;
                // User is signed in.
            }
        });
        this.medicalservice.getUserOrder()
            .subscribe(function (orders) {
            _this.orders = orders;
            console.log(_this.orders);
        });
    };
    UserordersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userorders',
            template: __webpack_require__(/*! ./userorders.component.html */ "./src/app/userorders/userorders.component.html"),
            styles: [__webpack_require__(/*! ./userorders.component.css */ "./src/app/userorders/userorders.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"],
            _services_medicals_service__WEBPACK_IMPORTED_MODULE_2__["MedicalsService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], UserordersComponent);
    return UserordersComponent;
}());



/***/ }),

/***/ "./src/app/userprofile/userprofile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cate\n{\n\tborder:2px solid blue;\n\tborder-radius: 10px;\n\tpadding: 5px;\nmargin: 2%;\nopacity: 1;\nbackground:white;\n\n}\ninput{\n\tbox-sizing: border-box;\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\toutline: none;\n\tdisplay: block;\n\twidth: 100%;\n\tpadding: 7px;\n\tborder: none;\n\tborder-bottom: 1px solid #ddd;\n\tbackground: transparent;\n\tmargin-bottom: 10px;\n}\nselect\n{\n\tpadding: 7px;\n\tbox-sizing: border-box;\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\n}\n.form1\n{\n\tborder:2px solid blue;\n\tborder-radius: 10px;\n\tpadding: 10px;\n\tmargin: 2%;\n\topacity: 1;\n\tbackground-color: white;\n}\n.back\n{\n\tbackground-image: url('1.jpg');\n\tbackground-size: 100%;\n  background-repeat: no-repeat;\n\n\n\n}\n.container-fluid\n{\n\tposition: relative;\n  text-align: center;\n\n}\n.h\n{\n\ttop: 50%;\n    left: 50%;\n\t\n}\n\n\n"

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.html":
/*!********************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"back container-fluid\">\n\t<div class=\"container-fluid\">\n\t<div class=\"h\"><h2>PROFILE</h2></div>\n\t\n</div>\n<div class=\"container\" *ngIf = \"!this.category\">\n\t<div class=\"row cate\">\n    <div class=\"col-md-3\">Category</div><br>\n    <div class=\"col-md-3\"><div class=\"custom-control custom-radio\">\n  \t\t<input name=\"doctor\" class=\"custom-control-input\" id=\"Radio1\" type=\"radio\" [(ngModel)] = \"category\" value=\"doctor\">\n  \t\t<label class=\"custom-control-label\" for=\"Radio1\">Doctor</label>\n\t\t</div><br></div>\n    <div class=\"col-md-3\">\n    \t<div class=\"custom-control custom-radio\">\n  \t\t<input name=\"patient\" class=\"custom-control-input\" type=\"radio\" [(ngModel)] = \"category\" value=\"patient\" id=\"Radio2\"checked=\"\">\n  \t\t<label class=\"custom-control-label\" for=\"Radio2\">Patient</label>\n\t\t</div><br>\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t\t\t<div class=\"custom-control custom-radio\">\n\t\t\t\t<input name=\"patient\" class=\"custom-control-input\" type=\"radio\" [(ngModel)] = \"category\" value=\"medical\" id=\"Radio3\"checked=\"\">\n\t\t\t\t<label class=\"custom-control-label\" for=\"Radio3\">Medical</label>\n\t\t</div><br>\n\t</div>\n    </div>  \n</div>\n<div class=\"container\">\n  <div *ngIf = \"category === 'doctor'\" class=\"form1\">\n    \n    <input type=\"text\" name=\"name\" placeholder=\"Name\" [(ngModel)] = \"name\">\n      <select name=\"gender\" class=\"custom-select  mb-3\" [(ngModel)] = \"gender\">\n        <option>Gender</option>\n      \t<option value=\"Male\">Male</option>\n      \t<option value=\"Female\">Female</option>\n     \t\t<option value=\"Other\">Other</option>\n      </select><br>\n    <input type=\"text\" name=\"location\" placeholder=\"Location\" [(ngModel)] = \"location\"><br>\n\t\t<input type=\"text\" name=\"specialization\" placeholder=\"Specialization\" [(ngModel)] = \"specialization\"><br>\n\t\t<textarea class=\"form-control mb-3\" id=\"exampleFormControlTextarea1\" rows=\"3\" placeholder=\"Description\" [(ngModel)] = \"description\"></textarea>\n\t\t<div class=\"col-xs-6\">\n        <select name=\"start_time\" class=\"custom-select mb-3\" [(ngModel)] = \"start_time\"> \n        \t\t<option>Start Time</option>\n          \t<option value=0000>0000</option>\n          \t<option value=0100>0100</option>\n          \t<option value=0200>0200</option>\n          \t<option value=0300>0300</option>\n          \t<option value=0400>0400</option>\n          \t<option value=0500>0500</option>\n          \t<option value=0600>0600</option>\n          \t<option value=0700>0700</option>\n          \t<option value=0800>0800</option>\n          \t<option value=0900>0900</option>\n          \t<option value=1000>1000</option>\n\t\t\t\t\t\t<option value=1100>1100</option>\n\t\t\t\t\t\t<option value=1200>1200</option>\n          \t<option value=1300>1300</option>\n          \t<option value=1400>1400</option>\n          \t<option value=1500>1500</option>\n          \t<option value=1600>1600</option>\n          \t<option value=1700>1700</option>\n          \t<option value=1800>1800</option>\n          \t<option value=1900>1900</option>\n          \t<option value=2000>2000</option>\n          \t<option value=2100>2100</option>\n          \t<option value=2200>2200</option>\n\t\t\t\t\t\t<option value=2300>2300</option>\n        </select><br>\n\t\t</div>\n\t\t<div class=\"col-xs-6\">\n        <select name=\"end_time\" class=\"custom-select mb-3\" [(ngModel)] = \"end_time\"> \n        \t<option>End Time</option>\n\t\t\t\t\t<option value=0000>0000</option>\n\t\t\t\t\t<option value=0100>0100</option>\n\t\t\t\t\t<option value=0200>0200</option>\n\t\t\t\t\t<option value=0300>0300</option>\n\t\t\t\t\t<option value=0400>0400</option>\n\t\t\t\t\t<option value=0500>0500</option>\n\t\t\t\t\t<option value=0600>0600</option>\n\t\t\t\t\t<option value=0700>0700</option>\n\t\t\t\t\t<option value=0800>0800</option>\n\t\t\t\t\t<option value=0900>0900</option>\n\t\t\t\t\t<option value=1000>1000</option>\n\t\t\t\t\t<option value=1100>1100</option>\n\t\t\t\t\t<option value=1200>1200</option>\n\t\t\t\t\t<option value=1300>1300</option>\n\t\t\t\t\t<option value=1400>1400</option>\n\t\t\t\t\t<option value=1500>1500</option>\n\t\t\t\t\t<option value=1600>1600</option>\n\t\t\t\t\t<option value=1700>1700</option>\n\t\t\t\t\t<option value=1800>1800</option>\n\t\t\t\t\t<option value=1900>1900</option>\n\t\t\t\t\t<option value=2000>2000</option>\n\t\t\t\t\t<option value=2100>2100</option>\n\t\t\t\t\t<option value=2200>2200</option>\n\t\t\t\t\t<option value=2300>2300</option>\n        </select><br>\n    </div>\n</div>\n</div>\n<div class=\"container\">\n  <div *ngIf = \"category === 'patient'\" class=\"form1\">\n \n\t\t<input type=\"text\" name=\"name\" placeholder=\"Name\" [(ngModel)] = \"name\">\n\t\t<input type=\"number\" name=\"age\" placeholder=\"Age\" [(ngModel)] = \"age\" min=0>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n        <select name=\"gender\" class=\"custom-select mb-3\" [(ngModel)] = \"gender\">\n          <option>Gender</option>\n      \t\t<option value=\"Male\">Male</option>\n      \t\t<option value=\"Female\">Female</option>\n      \t\t<option value=\"Other\">Other</option>\n        </select><br>\n\t </div>\n   <div class=\"col-md-6\">\n        <select name=\"weight\"class=\"custom-select mb-3\" [(ngModel)] = \"weight\"> \n        \t<option value=\"5\">Weight</option>\n          \t<option value=\"15\">10-20</option>\n          \t<option value=\"25\">20-30</option>\n          \t<option value=\"35\">30-40</option>\n          \t<option value=\"45\">40-50</option>\n          \t<option value=\"55\">50-60</option>\n          \t<option value=\"65\">60-70</option>\n          \t<option value=\"75\">70-80</option>\n          \t<option value=\"85\">80-90</option>\n          \t<option value=\"95\">90-100</option>\n          \t<option value=\"105\">100-110</option>\n          \t<option value=\"115\">110-120</option>\n          \t<option value=\"0\">Other</option>\n        </select><br>\n    </div>\n    </div>\n    <input type=\"number\" name=\"contact\" maxlength=\"10\" placeholder=\"Phone number\" [(ngModel)] = \"phno\"><br>\n    <input type=\"text\" name=\"height\" placeholder=\"Height(cm)\" [(ngModel)] = \"height\"><br>\n    <input type=\"text\" name=\"bloodgroup\" placeholder=\"Bloodgroup\" [(ngModel)] = \"bldgrp\"><br>\n    </div> \n  <button type=\"submit\" class=\"btn btn-primary\" (click) = \"saveprofile()\">SUBMIT</button>\n</div>\n\n\n<div class=\"container\">\n\t\t<div *ngIf = \"category === 'medical'\" class=\"form1\">\n\t\t\t<input type=\"text\" name=\"name\" placeholder=\"Name\" [(ngModel)] = \"name\">\n\t\t\t<input type=\"number\" name=\"contact\" maxlength=\"10\" placeholder=\"Phone number\" [(ngModel)] = \"phno\"><br>\n\t\t\t<input type=\"text\" name=\"location\" placeholder=\"Location\" [(ngModel)] = \"location\"><br>\n\t\t\t</div> \n\t</div>"

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.ts ***!
  \******************************************************/
/*! exports provided: UserprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofileComponent", function() { return UserprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_doctor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/doctor.service */ "./src/app/services/doctor.service.ts");
/* harmony import */ var _services_medicals_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/medicals.service */ "./src/app/services/medicals.service.ts");
/* harmony import */ var _services_patients_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/patients.service */ "./src/app/services/patients.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserprofileComponent = /** @class */ (function () {
    function UserprofileComponent(usersservice, doctorservice, patientservice, medicalservice) {
        this.usersservice = usersservice;
        this.doctorservice = doctorservice;
        this.patientservice = patientservice;
        this.medicalservice = medicalservice;
        this.gender = "Gender";
        this.weight = "5";
        this.start_time = 0;
        this.end_time = 0;
    }
    UserprofileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersservice.getUser()
            .subscribe(function (user) {
            _this.category = user.category;
            _this.userid = user._id;
            if (_this.category == 'doctor') {
                _this.doctorservice.getDoctor(_this.userid)
                    .subscribe(function (doctor) {
                    _this.name = doctor.name;
                    _this.specialization = doctor.specialization;
                    _this.location = doctor.location;
                    _this.description = doctor.description;
                    _this.start_time = doctor.start_time;
                    _this.end_time = doctor.end_time;
                    _this.gender = doctor.gender;
                });
            }
            else if (_this.category == 'patient') {
                _this.patientservice.getPatient(_this.userid)
                    .subscribe(function (doctor) {
                    _this.name = doctor.name;
                    _this.bldgrp = doctor.bloodgroup;
                    _this.age = doctor.age;
                    _this.height = doctor.height;
                    _this.weight = doctor.weight;
                    _this.gender = doctor.gender;
                    _this.phno = doctor.contact;
                });
            }
            else if (_this.category == 'medical') {
                _this.medicalservice.getMedical(_this.userid)
                    .subscribe(function (medical) {
                    _this.location = medical.location;
                    _this.name = medical.name;
                    _this.phno = medical.contact;
                });
            }
        });
    };
    UserprofileComponent.prototype.saveprofile = function () {
        var _this = this;
        if (this.category == 'doctor') {
            this.usersservice.postDoc(this.category, this.name);
            this.doctorservice.isDoctor()
                .then(function (value) {
                if (!value) {
                    _this.start_time = +_this.start_time;
                    _this.end_time = +_this.end_time;
                    _this.doctorservice.postDoctor(_this.name, _this.specialization, _this.location, _this.gender, _this.description, _this.start_time, _this.end_time);
                }
                else {
                    _this.doctorservice.putDoctor(_this.name, _this.specialization, _this.location, _this.description, _this.gender, _this.start_time, _this.end_time);
                }
            });
        }
        else if (this.category == 'patient') {
            this.usersservice.postPatient(this.category, this.name);
            this.patientservice.isPatient()
                .then(function (value) {
                if (!value) {
                    _this.patientservice.postPatient(_this.name, _this.phno, _this.gender, _this.bldgrp, _this.height, _this.weight, _this.age);
                }
                else {
                    _this.patientservice.putPatient(_this.name, _this.phno, _this.gender, _this.bldgrp, _this.height, _this.weight, _this.age);
                }
            });
        }
        else if (this.category == 'medical') {
            this.usersservice.postMed(this.category, this.name, this.location);
            this.medicalservice.isMedical()
                .then(function (value) {
                if (!value) {
                    _this.medicalservice.postMedical(_this.name, _this.location, _this.phno);
                }
                else {
                    _this.medicalservice.putMedical(_this.name, _this.location, _this.phno);
                }
            });
        }
    };
    UserprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userprofile',
            template: __webpack_require__(/*! ./userprofile.component.html */ "./src/app/userprofile/userprofile.component.html"),
            styles: [__webpack_require__(/*! ./userprofile.component.css */ "./src/app/userprofile/userprofile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            _services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"],
            _services_patients_service__WEBPACK_IMPORTED_MODULE_4__["PatientsService"],
            _services_medicals_service__WEBPACK_IMPORTED_MODULE_3__["MedicalsService"]])
    ], UserprofileComponent);
    return UserprofileComponent;
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
    production: false,
    firebase: {
        apiKey: "AIzaSyA0VNj4jXjkuzOzdDaj746yl1DOAUapvyI",
        authDomain: "server-a6b11.firebaseapp.com",
        databaseURL: "https://server-a6b11.firebaseio.com",
        projectId: "server-a6b11",
        storageBucket: "server-a6b11.appspot.com",
        messagingSenderId: "1752021545"
    }
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0 ./src/main.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/geetshingi/Documents/Health/server/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0");
module.exports = __webpack_require__(/*! /Users/geetshingi/Documents/Health/server/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map