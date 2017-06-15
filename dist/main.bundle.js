webpackJsonp([1,4],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterService = (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.register = function (data) {
        console.log("join");
        console.log(data);
        var body = JSON.stringify(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:3000/api/register', body, options).map(function (data) { return data; });
    };
    RegisterService.prototype.login = function (data) {
        console.log("loginjoin");
        console.log(data);
        var body = JSON.stringify(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:3000/api/login', body, options).map(function (data) { return data; });
    };
    RegisterService.prototype.checkAuth = function () {
        console.log("checkAuth");
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestMethod */].Get, headers: headers });
        return this.http.get('http://localhost:3000/api/islogin', options).map(function (data) { return data; });
    };
    RegisterService.prototype.logout = function () {
        console.log("logoutlogouts");
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestMethod */].Get, headers: headers });
        return this.http.get('http://localhost:3000/api/logout', options).map(function (data) { return data; });
    };
    RegisterService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */]) === 'function' && _a) || Object])
    ], RegisterService);
    return RegisterService;
    var _a;
}());
//# sourceMappingURL=C:/Users/gmineminii/Desktop/5709680077/3term2/cs485/FinalProject/gbbeer/src/register.service.js.map

/***/ }),

/***/ 390:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 390;


/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(511);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/gmineminii/Desktop/5709680077/3term2/cs485/FinalProject/gbbeer/src/main.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getNewproduct = function () {
        console.log("getNewproduct");
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestMethod */].Get, headers: headers });
        return this.http.get('http://localhost:3000/api/beer/newcoming?', options).map(function (data) { return data; });
    };
    ProductService.prototype.getAllproduct = function () {
        console.log("getAllproduct");
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestMethod */].Get, headers: headers });
        return this.http.get('http://localhost:3000/api/beer/all?', options).map(function (data) { return data; });
    };
    ProductService.prototype.getBestproduct = function () {
        console.log("getBestproduct");
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestMethod */].Get, headers: headers });
        return this.http.get('http://localhost:3000/api/beer/bestsell?', options).map(function (data) { return data; });
    };
    ProductService.prototype.getPopproduct = function () {
        console.log("getPopproduct");
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestMethod */].Get, headers: headers });
        return this.http.get('http://localhost:3000/api/beer/popular?', options).map(function (data) { return data; });
    };
    ProductService.prototype.getSendToCartproduct = function (id) {
        console.log("getSendToCartproduct");
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestMethod */].Get, headers: headers });
        return this.http.get('http://localhost:3000/api/addtocart/' + id, options).map(function (data) { return data; });
    };
    ProductService.prototype.getCartproduct = function () {
        console.log("getCartproduct");
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestMethod */].Get, headers: headers });
        return this.http.get('http://localhost:3000/api/cart', options).map(function (data) { return data; });
    };
    ProductService.prototype.getRecommend = function () {
        console.log("getCartproduct");
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestMethod */].Get, headers: headers });
        return this.http.get('http://localhost:3000/api/recommend', options).map(function (data) { return data; });
    };
    ProductService.prototype.getBuy = function () {
        console.log("getCartproduct");
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestMethod */].Get, headers: headers });
        return this.http.get('http://localhost:3000/api/buy', options).map(function (data) { return data; });
    };
    ProductService.prototype.checkCart = function () {
        console.log("checkCart");
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestMethod */].Get, headers: headers });
        return this.http.get('http://localhost:3000/api/check_cart', options).map(function (data) { return data; });
    };
    ProductService.prototype.join = function (id) {
        console.log("join");
        var data = {
            "id": id
        };
        var body = JSON.stringify(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:3000/join_activity', body, options).map(function (data) { return data; });
    };
    ProductService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */]) === 'function' && _a) || Object])
    ], ProductService);
    return ProductService;
    var _a;
}());
//# sourceMappingURL=C:/Users/gmineminii/Desktop/5709680077/3term2/cs485/FinalProject/gbbeer/src/product.service.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertiseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdvertiseComponent = (function () {
    function AdvertiseComponent() {
        this.slideIndex = 1;
    }
    AdvertiseComponent.prototype.ngOnInit = function () {
    };
    AdvertiseComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-advertise',
            template: __webpack_require__(693),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [])
    ], AdvertiseComponent);
    return AdvertiseComponent;
}());
//# sourceMappingURL=C:/Users/gmineminii/Desktop/5709680077/3term2/cs485/FinalProject/gbbeer/src/advertise.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllproComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AllproComponent = (function () {
    function AllproComponent() {
    }
    AllproComponent.prototype.ngOnInit = function () {
    };
    AllproComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-allpro',
            template: __webpack_require__(694),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [])
    ], AllproComponent);
    return AllproComponent;
}());
//# sourceMappingURL=C:/Users/gmineminii/Desktop/5709680077/3term2/cs485/FinalProject/gbbeer/src/allpro.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_register_service__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(register) {
        var _this = this;
        this.register = register;
        this.exists = true;
        this.check = true;
        this.pop = true;
        this.register.checkAuth().subscribe(function (data) { return _this.getData(data); });
    }
    AppComponent.prototype.getData = function (data) {
        var value = JSON.parse(data._body);
        console.log(value.status);
        this.isLogin = value.status;
    };
    AppComponent.prototype.getDataLogout = function (data) {
        var _this = this;
        var value = JSON.parse(data._body);
        console.log(value.status);
        this.register.checkAuth().subscribe(function (data) { return _this.getData(data); });
    };
    AppComponent.prototype.toggleExists = function () {
        this.exists = true;
    };
    AppComponent.prototype.toggleExists2 = function () {
        this.exists = false;
    };
    AppComponent.prototype.toggleExists3 = function () {
        this.check = true;
        this.pop = true;
    };
    AppComponent.prototype.toggleExists4 = function () {
        this.check = false;
        this.pop = false;
    };
    AppComponent.prototype.toggleExists5 = function () {
        var _this = this;
        this.register.logout().subscribe(function (data) { return _this.getDataLogout(data); });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(695),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_register_service__["a" /* RegisterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_register_service__["a" /* RegisterService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/gmineminii/Desktop/5709680077/3term2/cs485/FinalProject/gbbeer/src/app.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__beer_beer_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cart_cart_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bestseller_bestseller_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__newproduct_newproduct_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__review_review_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__advertise_advertise_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__each_each_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__register_register_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__catagory_catagory_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__allpro_allpro_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__writereview_writereview_component__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_product_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_register_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_review_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */] },
    { path: 'beer', component: __WEBPACK_IMPORTED_MODULE_8__beer_beer_component__["a" /* BeerComponent */] },
    { path: 'each', component: __WEBPACK_IMPORTED_MODULE_14__each_each_component__["a" /* EachComponent */] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_9__cart_cart_component__["a" /* CartComponent */] },
    { path: 'writereview', component: __WEBPACK_IMPORTED_MODULE_19__writereview_writereview_component__["a" /* WritereviewComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__beer_beer_component__["a" /* BeerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_10__bestseller_bestseller_component__["a" /* BestsellerComponent */],
                __WEBPACK_IMPORTED_MODULE_11__newproduct_newproduct_component__["a" /* NewproductComponent */],
                __WEBPACK_IMPORTED_MODULE_12__review_review_component__["a" /* ReviewComponent */],
                __WEBPACK_IMPORTED_MODULE_13__advertise_advertise_component__["a" /* AdvertiseComponent */],
                __WEBPACK_IMPORTED_MODULE_14__each_each_component__["a" /* EachComponent */],
                __WEBPACK_IMPORTED_MODULE_15__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_17__catagory_catagory_component__["a" /* CatagoryComponent */],
                __WEBPACK_IMPORTED_MODULE_18__allpro_allpro_component__["a" /* AllproComponent */],
                __WEBPACK_IMPORTED_MODULE_19__writereview_writereview_component__["a" /* WritereviewComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_21__services_register_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_20__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_22__services_review_service__["a" /* ReviewService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/gmineminii/Desktop/5709680077/3term2/cs485/FinalProject/gbbeer/src/app.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_review_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BeerComponent = (function () {
    function BeerComponent(productService, reviewService, router) {
        var _this = this;
        this.productService = productService;
        this.reviewService = reviewService;
        this.router = router;
        this.productService.getAllproduct().subscribe(function (data) { return _this.getAllproduct(data); });
    }
    BeerComponent.prototype.getAllproduct = function (data) {
        console.log(JSON.parse(data._body));
        this.allProduct = JSON.parse(data._body);
    };
    BeerComponent.prototype.ngOnInit = function () {
    };
    BeerComponent.prototype.sentID = function (id) {
        var _this = this;
        this.reviewService.getReview(id).subscribe(function (data) {
            _this.reviewService.storeUserData(data);
            _this.router.navigate(['/each']);
        });
    };
    BeerComponent.prototype.sentIDToCart = function (id) {
        var _this = this;
        this.productService.getSendToCartproduct(id).subscribe(function (data) { return _this.getaddcart(data); });
    };
    BeerComponent.prototype.getaddcart = function (data) {
        console.log(JSON.parse(data._body));
    };
    BeerComponent.prototype.getId = function (id) {
        console.log(id);
        console.log("id");
    };
    BeerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-beer',
            template: __webpack_require__(696),
            styles: [__webpack_require__(681)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_review_service__["a" /* ReviewService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_review_service__["a" /* ReviewService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], BeerComponent);
    return BeerComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/gmineminii/Desktop/5709680077/3term2/cs485/FinalProject/gbbeer/src/beer.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_review_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BestsellerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BestsellerComponent = (function () {
    function BestsellerComponent(productService, reviewService, router) {
        var _this = this;
        this.productService = productService;
        this.reviewService = reviewService;
        this.router = router;
        this.productService.getBestproduct().subscribe(function (data) { return _this.getBestproduct(data); });
    }
    BestsellerComponent.prototype.getBestproduct = function (data) {
        console.log(JSON.parse(data._body));
        this.bestProduct2 = JSON.parse(data._body).length;
        this.bestProduct = JSON.parse(data._body);
    };
    BestsellerComponent.prototype.sentID = function (id) {
        var _this = this;
        this.reviewService.getReview(id).subscribe(function (data) {
            _this.reviewService.storeUserData(data);
            _this.router.navigate(['/each']);
        });
    };
    BestsellerComponent.prototype.sentIDToCart = function (id) {
        var _this = this;
        this.productService.getSendToCartproduct(id).subscribe(function (data) { return _this.getaddcart(data); });
    };
    BestsellerComponent.prototype.getaddcart = function (data) {
        console.log(JSON.parse(data._body));
    };
    BestsellerComponent.prototype.ngOnInit = function () {
    };
    BestsellerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-bestseller',
            template: __webpack_require__(697),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_review_service__["a" /* ReviewService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_review_service__["a" /* ReviewService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], BestsellerComponent);
    return BestsellerComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/gmineminii/Desktop/5709680077/3term2/cs485/FinalProject/gbbeer/src/bestseller.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_review_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartComponent = (function () {
    function CartComponent(productService, reviewService, router) {
        var _this = this;
        this.productService = productService;
        this.reviewService = reviewService;
        this.router = router;
        this.productService.getCartproduct().subscribe(function (data) { return _this.getcart(data); });
    }
    CartComponent.prototype.getcart = function (data) {
        this.cart = JSON.parse(data._body).beers;
        this.cart2 = JSON.parse(data._body).beers.length;
        this.totalPrice = JSON.parse(data._body).totalPrice;
        console.log(this.cart2);
    };
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-cart',
            template: __webpack_require__(698),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_review_service__["a" /* ReviewService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_review_service__["a" /* ReviewService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], CartComponent);
    return CartComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/gmineminii/Desktop/5709680077/3term2/cs485/FinalProject/gbbeer/src/cart.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatagoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CatagoryComponent = (function () {
    function CatagoryComponent() {
    }
    CatagoryComponent.prototype.ngOnInit = function () {
    };
    CatagoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-catagory',
            template: __webpack_require__(699),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [])
    ], CatagoryComponent);
    return CatagoryComponent;
}());
//# sourceMappingURL=C:/Users/gmineminii/Desktop/5709680077/3term2/cs485/FinalProject/gbbeer/src/catagory.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_review_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EachComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EachComponent = (function () {
    function EachComponent(productService, reviewService, router) {
        var _this = this;
        this.productService = productService;
        this.reviewService = reviewService;
        this.router = router;
        //this.reView= this.reviewService.getstoreUser()
        this.id = this.reviewService.getstoreUser();
        console.log(this.id);
        this.reviewService.getReview(this.id).subscribe(function (data) { return _this.getReview(data); });
        this.reviewService.getBeer(this.id).subscribe(function (data) { return _this.getBeer(data); });
    }
    EachComponent.prototype.getReview = function (data) {
        this.reView = JSON.parse(data._body).beer;
    };
    EachComponent.prototype.sentIDToCart = function (id) {
        var _this = this;
        this.productService.getSendToCartproduct(id).subscribe(function (data) { return _this.getaddcart(data); });
    };
    EachComponent.prototype.getaddcart = function (data) {
        console.log(JSON.parse(data._body));
    };
    EachComponent.prototype.getreview = function () {
        var _this = this;
        this.reviewService.getReview(this.id).subscribe(function (data) { return _this.getReview(data); });
    };
    EachComponent.prototype.getBeer = function (data) {
        this.beer = JSON.parse(data._body);
        console.log(this.beer);
        this.name = this.beer.name;
        this.brand = this.beer.brand;
        this.country = this.beer.country;
        this.color = this.beer.color;
        this.date = this.beer.date;
        this.degree = this.beer.degree;
        this.price = this.beer.price;
        this.rate = this.beer.rate;
        this.type = this.beer.type;
        this.img = 'http://localhost:3000/view/img/' + this.beer.img;
    };
    EachComponent.prototype.sendComment = function (comment, star) {
        var _this = this;
        var user = {
            "comment": comment,
            "star": star,
            "beer": this.id
        };
        this.reviewService.comment(user).subscribe(function (data) { return _this.getUser(data); });
        this.reviewService.getReview(this.id).subscribe(function (data) { return _this.getReview(data); });
        console.log(this.reView);
    };
    EachComponent.prototype.getUser = function (data) {
    };
    EachComponent.prototype.ngOnInit = function () {
    };
    EachComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-each',
            template: __webpack_require__(700),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_review_service__["a" /* ReviewService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_review_service__["a" /* ReviewService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], EachComponent);
    return EachComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/gmineminii/Desktop/5709680077/3term2/cs485/FinalProject/gbbeer/src/each.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(701),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/Users/gmineminii/Desktop/5709680077/3term2/cs485/FinalProject/gbbeer/src/home.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_register_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        var user = {
            "username": username,
            "password": password
        };
        this.loginService.login(user).subscribe(function (data) { return _this.getUser(data); });
    };
    LoginComponent.prototype.getUser = function (data) {
        console.log(data._body);
        data = JSON.parse(data._body);
        this.check = data.status;
        if (this.check === "success") {
            console.log("refresh");
            window.location.href = '/';
        }
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(702),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_register_service__["a" /* RegisterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__services_register_service__["a" /* RegisterService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/gmineminii/Desktop/5709680077/3term2/cs485/FinalProject/gbbeer/src/login.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(productService) {
        var _this = this;
        this.productService = productService;
        this.productService.checkCart().subscribe(function (data) { return _this.checkCart(data); });
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.sendService = function () {
        var _this = this;
        this.productService.getCartproduct().subscribe(function (data) { return _this.getcart(data); });
    };
    NavbarComponent.prototype.getcart = function (data) {
        console.log(JSON.parse(data._body));
    };
    NavbarComponent.prototype.checkCart = function (data) {
        console.log(JSON.parse(data._body));
        this.cart = JSON.parse(data._body);
        if (Object.keys(this.cart).length === 0 || this.cart.status === "fail") {
            this.isEmptyCart = true;
        }
        else {
            this.isEmptyCart = false;
        }
        console.log(this.isEmptyCart);
    };
    NavbarComponent.prototype.clearCart = function () {
        this.isEmptyCart = true;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(703),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === 'function' && _a) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/gmineminii/Desktop/5709680077/3term2/cs485/FinalProject/gbbeer/src/navbar.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_review_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewproductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewproductComponent = (function () {
    function NewproductComponent(productService, reviewService, router) {
        var _this = this;
        this.productService = productService;
        this.reviewService = reviewService;
        this.router = router;
        this.productService.getNewproduct().subscribe(function (data) { return _this.getNewProduct(data); });
    }
    NewproductComponent.prototype.sentID = function (id) {
        var _this = this;
        this.reviewService.getReview(id).subscribe(function (data) {
            _this.reviewService.storeUserData(data);
            _this.router.navigate(['/each']);
        });
    };
    NewproductComponent.prototype.getNewProduct = function (data) {
        console.log(JSON.parse(data._body));
        this.newProduct = JSON.parse(data._body);
    };
    NewproductComponent.prototype.sentIDToCart = function (id) {
        var _this = this;
        this.productService.getSendToCartproduct(id).subscribe(function (data) { return _this.getaddcart(data); });
        window.location.href = '';
    };
    NewproductComponent.prototype.getaddcart = function (data) {
        console.log(JSON.parse(data._body));
    };
    NewproductComponent.prototype.ngOnInit = function () {
    };
    NewproductComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-newproduct',
            template: __webpack_require__(704),
            styles: [__webpack_require__(689)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_review_service__["a" /* ReviewService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_review_service__["a" /* ReviewService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], NewproductComponent);
    return NewproductComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/gmineminii/Desktop/5709680077/3term2/cs485/FinalProject/gbbeer/src/newproduct.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_register_service__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = (function () {
    function RegisterComponent(registerService) {
        this.registerService = registerService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (username, password, firstname, lastname, birthDay, address, email, gender) {
        var _this = this;
        var user = {
            "username": username,
            "password": password,
            "firstname": firstname,
            "lastname": lastname,
            "address": address,
            "email": email,
            "birthday": birthDay,
            "gender": gender
        };
        this.registerService.register(user).subscribe(function (data) { return _this.getUser(data); });
    };
    RegisterComponent.prototype.getUser = function (data) {
        console.log(JSON.parse(data._body));
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__(705),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_register_service__["a" /* RegisterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_register_service__["a" /* RegisterService */]) === 'function' && _a) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/gmineminii/Desktop/5709680077/3term2/cs485/FinalProject/gbbeer/src/register.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_review_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewComponent = (function () {
    function ReviewComponent(productService, reviewService, router) {
        var _this = this;
        this.productService = productService;
        this.reviewService = reviewService;
        this.router = router;
        this.productService.getPopproduct().subscribe(function (data) { return _this.getPopproduct(data); });
    }
    ReviewComponent.prototype.getPopproduct = function (data) {
        console.log(JSON.parse(data._body));
        this.popProduct2 = JSON.parse(data._body).length;
        this.popProduct = JSON.parse(data._body);
        console.log(this.popProduct2);
    };
    ReviewComponent.prototype.sentID = function (id) {
        var _this = this;
        this.reviewService.getReview(id).subscribe(function (data) {
            _this.reviewService.storeUserData(data);
            _this.router.navigate(['/each']);
        });
    };
    ReviewComponent.prototype.sentIDToCart = function (id) {
        var _this = this;
        this.productService.getSendToCartproduct(id).subscribe(function (data) { return _this.getaddcart(data); });
    };
    ReviewComponent.prototype.getaddcart = function (data) {
        console.log(JSON.parse(data._body));
    };
    ReviewComponent.prototype.ngOnInit = function () {
    };
    ReviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-review',
            template: __webpack_require__(706),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_review_service__["a" /* ReviewService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_review_service__["a" /* ReviewService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], ReviewComponent);
    return ReviewComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/gmineminii/Desktop/5709680077/3term2/cs485/FinalProject/gbbeer/src/review.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WritereviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WritereviewComponent = (function () {
    function WritereviewComponent(productService) {
        var _this = this;
        this.productService = productService;
        this.productService.getRecommend().subscribe(function (data) { return _this.getPopproduct(data); });
    }
    WritereviewComponent.prototype.ngOnInit = function () {
    };
    WritereviewComponent.prototype.getPopproduct = function (data) {
        console.log(JSON.parse(data._body));
        this.rec = JSON.parse(data._body);
    };
    WritereviewComponent.prototype.sentbil = function () {
        var _this = this;
        this.productService.getBuy().subscribe(function (data) { return _this.getPopproduct2(data); });
    };
    WritereviewComponent.prototype.getPopproduct2 = function (data) {
        console.log(JSON.parse(data._body));
    };
    WritereviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-writereview',
            template: __webpack_require__(707),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === 'function' && _a) || Object])
    ], WritereviewComponent);
    return WritereviewComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/gmineminii/Desktop/5709680077/3term2/cs485/FinalProject/gbbeer/src/writereview.component.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/gmineminii/Desktop/5709680077/3term2/cs485/FinalProject/gbbeer/src/environment.js.map

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "#ad {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#ad1 {\r\n    /*border: 2px solid red;*/\r\n    height: 300px;\r\n    margin: 0;\r\n    width: 58.25%;\r\n    /*display: inline;*/\r\n    padding: 0;\r\n    float: left;\r\n}\r\n\r\n#ad2,\r\n#ad3 {\r\n    /*border: 2px solid pink;*/\r\n    height: 150px;\r\n    width: 100%;\r\n}\r\n\r\n.bgimg1 {\r\n    background: url('assets/beer12.png') ;\r\n\r\n}\r\n.bgimg2 {\r\n    background: url('assets/beer9.png') ;\r\n\r\n}\r\n.bgimg3 {\r\n    background: url('assets/beer13.png') ;\r\n}\r\n\r\n/*no-repeat center center fixed */"

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReviewService = (function () {
    function ReviewService(http) {
        this.http = http;
    }
    ReviewService.prototype.getReview = function (id) {
        console.log("getReview");
        this.id = id;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestMethod */].Get, headers: headers });
        return this.http.get('http://localhost:3000/api/review/' + id, options).map(function (data) { return data; });
    };
    ReviewService.prototype.getBeer = function (id) {
        console.log("get Beer");
        this.id = id;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ method: __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestMethod */].Get, headers: headers });
        return this.http.get('http://localhost:3000/api/beer/' + id, options).map(function (data) { return data; });
    };
    ReviewService.prototype.comment = function (data) {
        console.log("comment");
        console.log(data);
        var body = JSON.stringify(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:3000/api/comment', body, options).map(function (data) { return data; });
    };
    ReviewService.prototype.getBeerId = function () {
        return this.id;
    };
    ReviewService.prototype.storeUserData = function (user) {
        this.user = JSON.parse(user._body);
    };
    ReviewService.prototype.getstoreUser = function () {
        return this.id;
    };
    ReviewService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */]) === 'function' && _a) || Object])
    ], ReviewService);
    return ReviewService;
    var _a;
}());
//# sourceMappingURL=C:/Users/gmineminii/Desktop/5709680077/3term2/cs485/FinalProject/gbbeer/src/review.service.js.map

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "/*=========================\r\n  Icons\r\n ================= */\r\n    /* footer social icons */\r\n    \r\n    ul.social-network {\r\n        list-style: none;\r\n        display: inline;\r\n        margin-left: 0 !important;\r\n        padding: 0;\r\n        /*margin-top: 100%;*/\r\n        /*padding-top: 5%;*/\r\n    }\r\n    \r\n    ul.social-network li {\r\n        display: inline;\r\n        margin: 0 5px;\r\n    }\r\n    /* footer social icons */\r\n    \r\n    .social-network a.icoRss:hover {\r\n        background-color: #F56505;\r\n    }\r\n    \r\n    .social-network a.icoFacebook:hover {\r\n        background-color: #3B5998;\r\n    }\r\n    \r\n    .social-network a.icoTwitter:hover {\r\n        background-color: #33ccff;\r\n    }\r\n    \r\n    .social-network a.icoGoogle:hover {\r\n        background-color: #BD3518;\r\n    }\r\n    \r\n    .social-network a.icoVimeo:hover {\r\n        background-color: #0590B8;\r\n    }\r\n    \r\n    .social-network a.icoLinkedin:hover {\r\n        background-color: #6e5494;\r\n    }\r\n    \r\n    .social-network a.icoig:hover {\r\n        background-color: #c13584;\r\n    }\r\n    \r\n    .social-network a.icoRss:hover i,\r\n    .social-network a.icoFacebook:hover i,\r\n    .social-network a.icoTwitter:hover i,\r\n    .social-network a.icoGoogle:hover i,\r\n    .social-network a.icoVimeo:hover i,\r\n    .social-network a.icoLinkedin:hover i {\r\n        color: #fff;\r\n    }\r\n    \r\n    a.socialIcon:hover,\r\n    .socialHoverClass {\r\n        color: #44BCDD;\r\n    }\r\n    \r\n    .social-circle li a {\r\n        display: inline-block;\r\n        position: relative;\r\n        margin: 0 auto 0 auto;\r\n        border-radius: 50%;\r\n        text-align: center;\r\n        width: 30px;\r\n        height: 30px;\r\n        font-size: 20px;\r\n    }\r\n    \r\n    .social-circle li i {\r\n        margin: 0;\r\n        line-height: 30px;\r\n        text-align: center;\r\n    }\r\n    \r\n    .social-circle li a:hover i,\r\n    .triggeredHover {\r\n        -moz-transform: rotate(360deg);\r\n        -webkit-transform: rotate(360deg);\r\n        -ms--transform: rotate(360deg);\r\n        transform: rotate(360deg);\r\n        transition: all 0.2s;\r\n    }\r\n    \r\n    .social-circle i {\r\n        color: #fff;\r\n        transition: all 0.8s;\r\n    }\r\n    \r\n    .social-network a {\r\n        background-color: #D3D3D3;\r\n    }\r\n    \r\n    #header {\r\n        background-color: #F0D041;\r\n        text-align: center;\r\n        margin: 0;\r\n    }\r\n    \r\n    #imgheader {\r\n        width: 15%;\r\n        margin: 0;\r\n        padding: 0;\r\n    }\r\n    \r\n    #textheader {\r\n        right: 0;\r\n        margin: 0 20px 0 0;\r\n        padding: 2px 0 0 0;\r\n        text-align: right;\r\n    }\r\n    #textheader a{\r\n       text-decoration: none;\r\n       color: black;\r\n    }\r\n    \r\n    html,\r\n    body {\r\n        overflow-x: hidden;\r\n        margin: 0;\r\n        padding: 0;\r\n        height: 100%;\r\n    }\r\n    \r\n    #container {\r\n        min-height: 100%;\r\n        position: relative;\r\n    }\r\n    \r\n    #body {\r\n        /*padding:10px;*/\r\n        padding-bottom: 60px;\r\n        /* Height of the footer */\r\n        background-color: #F5F5F5;\r\n        /*height: 100%;*/\r\n    }\r\n    \r\n    #footer {\r\n        background-color: #F0D041;\r\n        text-align: center;\r\n        position: absolute;\r\n        bottom: 0;\r\n        width: 100%;\r\n        height: 60px;\r\n        padding-top: 1%;\r\n    }\r\n    \r\n    #copyright {\r\n        margin-left: 6%;\r\n        margin-top: 1%;\r\n        /*padding-top: 3%;*/\r\n    }\r\n    \r\n    .overlay {\r\n        position: fixed;\r\n        top: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        background: rgba(0, 0, 0, 0.7);\r\n        transition: opacity 500ms;\r\n        visibility: hidden;\r\n        opacity: 0;\r\n    }\r\n    \r\n    .overlay:target {\r\n        visibility: visible;\r\n        opacity: 1;\r\n    }\r\n    \r\n    .popup {\r\n        margin: 70px auto;\r\n        padding: 20px;\r\n        background: #F5F5F5;\r\n        border-radius: 5px;\r\n        /*width:50%;*/\r\n        position: relative;\r\n        /*transition: all 5s ease-in-out;*/\r\n    }\r\n    \r\n    .popup h3 a {\r\n        margin-top: 0;\r\n        /*color: #333;*/\r\n        font-family: Tahoma, Arial, sans-serif;\r\n        text-decoration: none;\r\n    }\r\n    \r\n    .popup h3 a:hover {\r\n        color: #F0D041;\r\n    }\r\n    \r\n    .popup h3 a:active {\r\n        color: #F0D041;\r\n    }\r\n    \r\n    .popup .close {\r\n        position: absolute;\r\n        top: 20px;\r\n        right: 30px;\r\n        transition: all 200ms;\r\n        font-size: 30px;\r\n        font-weight: bold;\r\n        text-decoration: none;\r\n        color: #333;\r\n    }\r\n    \r\n    .popup .close:hover {\r\n        color: #F0D041;\r\n    }\r\n    \r\n    .popup .content {\r\n        background-color: #FFF;\r\n        overflow: auto;\r\n        /*padding-left: 13%;*/\r\n    }\r\n    \r\n    .content h5 {\r\n        left: 0;\r\n    }\r\n    \r\n    @media screen and (max-width: 700px) {\r\n        .box {\r\n            width: 70%;\r\n        }\r\n        .popup {\r\n            width: 70%;\r\n        }\r\n    }\r\n    \r\n    #textbox {\r\n        border: 1px solid black;\r\n    }\r\n    \r\n    #bttnsignin {\r\n        background-color: #F0D041;\r\n        margin-left: 25%;\r\n        border: 1px solid #F5F5F5;\r\n        color: #FFF;\r\n        text-align: center;\r\n        width: 100px;\r\n    }\r\n    \r\n    #right {\r\n        border-left: 1px solid #F5F5F5;\r\n    }\r\n    \r\n    .fieldgroup {\r\n        float: left;\r\n        width: auto;\r\n        margin-left: 3em;\r\n    }\r\n   \r\n    .one  {\r\n        color: #333;\r\n    }\r\n    .two {\r\n        color: #AFAFAF;\r\n    }\r\n    .three{\r\n        width:30%;\r\n    }\r\n    .four{\r\n        width:70%;\r\n    }\r\n\r\n      "

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "#left{\r\n\tbackground-color: #FFF;\r\n\theight: 1850px;\r\n\tborder: 1px solid #D2D2D2;\r\n\r\n\t\r\n}\r\n#check{\r\n  margin-left: 20%;\r\n}\r\n#check2{\r\n  margin-left: 20%;\r\n  width: 150px;\r\n}\r\n#all{\r\n  font-size: 25px;\r\n  margin-top: 10%;\r\n  margin-left: 5%;\r\n}\r\n#all2{\r\n  font-size: 20px;\r\n  margin-top: 1%;\r\n  margin-left: 5%;\r\n}\r\n#cl1{\r\n  background-color: #000;\r\n  width:10px;\r\n  height: 10px;\r\n}\r\n#cl2{\r\n  background-color: #000;\r\n  width:10px;\r\n  height: 10px;\r\n}\r\n#sel{\r\n  width: 150px;\r\n}\r\n#cl3{\r\n  background-color: #000;\r\n  width:10px;\r\n  height: 10px;\r\n}\r\n#cl4{\r\n  background-color: #000;\r\n  width:10px;\r\n  height: 10px;\r\n}\r\n#cl5{\r\n  background-color: #000;\r\n  width:10px;\r\n  height: 10px;\r\n}\r\n#all3{\r\n  font-size: 30px;\r\n  margin-top: 60%;\r\n  margin-left: 10%;\r\n}\r\n#all4{\r\n  font-size: 30px;\r\n  /*margin-top: 30%;*/\r\n  margin-left: 15%;\r\n}\r\n#ADD{\r\n    color: #000;\r\n    background-color: #FFF;\r\n    border: 1px solid #818181;\r\n    height: 30px;\r\n}\r\n#right{\r\n\tpadding: 0;\r\n}\r\n#top{\r\n\theight: 200px;\r\n\tbackground-color: #FFF;\r\n\tborder: 1px solid #D2D2D2;\r\n}ul{ \r\n    /*text-align:center;*/\r\n    padding: 0;\r\n    margin: 0; \r\n}ul li {\r\n    position: relative;\r\n    text-align: center;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n}#content ul li #each {\r\n   display:block;\r\n   margin:20px 0 10px 40px;\r\n   padding:3px 10px;\r\n   background:#FFF;\r\n   color:#000;\r\n   text-decoration:none;\r\n   line-height:1.3em;\r\n   height: 360px;\r\n   width:250px;\r\n}\r\n#content{\r\n\tmargin-left: 20px;\r\n}\r\n\r\n#content ul li #each:hover {\r\n   background:#F0D041;\r\n   color:#fff;\r\n}\r\n#seemore{\r\n    color: #CACACA;\r\n    background-color: #FFF;\r\n    border: 1px solid #818181;\r\n    height: 30px;\r\n}h3{\r\n    margin-top: 3px;\r\n    font-size: 100%;\r\n}"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "#bestseller{\r\n    margin: 30px 30px 0 30px;\r\n\r\n}\r\n#no{\r\n  margin: 1%;\r\n  border: 1px solid #E5E5E5;\r\n  height: 300px;\r\n  text-align: center;\r\n  background-color: #F1F1F1;\r\n}\r\n#nono{\r\n  margin-top: 10%;\r\n  font-size: 30px;\r\n}\r\n.col-lg-4{\r\n    height: 300px;\r\n    border: 2px solid blue;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n#seemore{\r\n    color: #CACACA;\r\n    background-color: #FFF;\r\n    border: 1px solid #818181;\r\n    height: 30px;\r\n}\r\n#ADD{\r\n    color: #000;\r\n    background-color: #FFF;\r\n    border: 1px solid #818181;\r\n    height: 30px;\r\n}\r\n h3{\r\n    margin: 0;\r\n    font-size: 100%;\r\n}\r\n\r\n#button{\r\n    text-align: center;\r\n    margin: 2% 0 2% 0;\r\n    padding: 0;\r\n}\r\nul{ \r\n    /*text-align:center;*/\r\n    padding: 0;\r\n    margin: 0; \r\n}\r\n\r\n/*#centeredmenu ul li a {\r\n   display:block;\r\n   margin:20px 0 0 40px;\r\n   padding:3px 10px;\r\n   background:#FFF;\r\n   color:#000;\r\n   text-decoration:none;\r\n   line-height:1.3em;\r\n   height: 360px;\r\n   width:250px;\r\n}\r\n\r\n#centeredmenu ul li a:hover {\r\n   background:#F0D041;\r\n   color:#fff;\r\n}*/\r\n#centeredmenu ul li #each {\r\n   display:block;\r\n   margin:20px 0 0 40px;\r\n   padding:3px 10px;\r\n   background:#FFF;\r\n   color:#000;\r\n   text-decoration:none;\r\n   line-height:1.3em;\r\n   height: 360px;\r\n   width:250px;\r\n}\r\n\r\n#centeredmenu ul li #each:hover {\r\n   background:#F0D041;\r\n   color:#fff;\r\n}\r\nul li {\r\n    position: relative;\r\n    text-align: center;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n} \r\n\r\n\r\nheader {\r\n    display:table;\r\n    width:100%;\r\n    max-width:100%;\r\n}\r\nheader div {\r\n    display:table-row;\r\n    line-height:1.5em;\r\n    font-size:2em;\r\n    white-space:nowrap;\r\n}\r\nheader h1 {\r\n    font-size:0.75em; \r\n    overflow:hidden;\r\n    display:table-cell;\r\n    vertical-align:middle;\r\n    width:1px;\r\n}\r\nheader span.spacer {\r\n    display:table-cell;\r\n}\r\nheader h1 {\r\n    padding:0 15px;\r\n}\r\nheader span.spacer:after {\r\n    display:inline-block;\r\n    width:100%;\r\n    content:\".\";\r\n    font-size:0;\r\n    color:transparent;\r\n    height:2px;\r\n    background:#CACACA;\r\n    vertical-align:middle;\r\n    position:relative;\r\n    top:-1px;\r\n}\r\n"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "#content{\r\n\toverflow-x: hidden;\r\n\t/*height: 800px;*/\r\n\tbackground-color: #FFF;\r\n\tmargin:5%;\r\n\t border: 1px solid #D2D2D2;\r\n}#no{\r\n  margin: 1%;\r\n  border: 1px solid #E5E5E5;\r\n  height: 300px;\r\n  text-align: center;\r\n  background-color: #F1F1F1;\r\n}\r\n#nono{\r\n  margin-top: 10%;\r\n  font-size: 30px;\r\n}\r\n\r\n#addtocart{\r\n  background-color: #F0D041;\r\n  color: black;\r\n  border: 1px solid #D2D2D2;\r\n  border-radius: 10px;\r\n  width: 30%;\r\n  height: 50px;\r\n  /*right: 400px;*/\r\n  /*position: absolute;*/\r\n  margin: 2%;\r\n  /*bottom: 0px;*/\r\n}#sub{\r\n  text-align: center;\r\n}\r\n\r\n#total{\r\n  margin-bottom: 2%;\r\n  margin-top: 2%;\r\n   margin-right: 16%;\r\n   /*border: 1px solid black;*/\r\n   text-align: right;\r\n}\r\n#cart{\r\n\tmargin-left: 3%;\r\n\tmargin-bottom: 5%;\r\n}\r\n#proincart{\r\n\tborder: 1px solid #D2D2D2;\r\n\tmargin: 5px;\r\n\tpadding: 2%;\r\n}#ADD{\r\n    color: #000;\r\n    background-color: #F0D041;\r\n    border: 1px solid #818181;\r\n    height: 30px;\r\n} \r\n#addto{\r\n    margin: 0;\r\n    font-size: 100%;\r\n}ul{ \r\n    /*text-align:center;*/\r\n    padding: 0;\r\n    margin: 0; \r\n}\r\n\r\n#centeredmenu ul li #each {\r\n   display:block;\r\n   margin:20px 0 0 40px;\r\n   padding:3px 10px;\r\n   background:#FFF;\r\n   color:#000;\r\n   text-decoration:none;\r\n   line-height:1.3em;\r\n   height: 280px;\r\n   width:250px;\r\n}\r\n\r\n#centeredmenu ul li #each:hover {\r\n   background:#F0D041;\r\n   color:#fff;\r\n}\r\nul li {\r\n    position: relative;\r\n    text-align: center;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n} \r\n#col{\r\n\tmargin-top: 10%;\r\n}"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "#imgeach{\r\n\twidth: 400px;\r\n\theight: 400px;\r\n\t margin: 10%;\r\n\t border: 2px solid #D2D2D2;\r\n}#name{\r\n\tmargin-left: 35px;\r\n\tfont-size: 100%;\r\n    color: #000;\r\n\tmargin-top: 20px;\r\n}\r\n#name1{\r\n\tmargin-left: 35px;\r\n\tfont-size: 25px;\r\n    color: #000;\r\n    /*margin-left: 30%;*/\r\n    margin-bottom: 20px;\r\n    text-transform: uppercase;\r\n\tmargin-top: 20px;\r\n}\r\n#left{\r\n\ttext-align: left;\r\n}\r\n#pic{\r\n\t\r\n\t text-align: right;\r\n}\r\n#detail{\r\n\t/*background-color: #F5F5F5;*/\r\n}\r\n#content{\r\n\twidth: 600px;\r\n\theight: 400px;\r\n\tmargin: 7%;\r\n\tborder: 1px solid #D2D2D2;\r\n\tbackground-color: #FFF;\r\n}\r\n#addtocart{\r\n\tbackground-color: #F0D041;\r\n\tcolor: black;\r\n\tborder: 1px solid #D2D2D2;\r\n\tborder-radius: 10px;\r\n\twidth: 30%;\r\n\theight: 50px;\r\n\tright: 255px;\r\n\tposition: absolute;\r\n\tbottom: 70px;\r\n}\r\n#imgcart{\r\n\twidth: 20%;\r\n}\r\n#review{\r\n\tborder: 1px solid #D2D2D2;\r\n\tbackground-color: #FFF;\r\n\tmargin: 2%;\r\n}\r\n#writereview{\r\n\tbackground-color: #F0D041;\r\n\tcolor: black;\r\n\tborder: 1px solid #D2D2D2;\r\n\tborder-radius: 10px;\r\n\twidth: 80%;\r\n\theight: 50px;\r\n\tbottom: 0;\r\n}\r\n#sarm{\r\n\ttext-align: right;\r\n\tmargin: 2% 0 5% 40%;\r\n\r\n}\r\n#textwrite{\r\n\t/*border: 1px solid #D2D2D2;*/\r\n\theight: 240px;\r\n\tmargin-top: 5%;\r\n}\r\n#bor{\r\n\t/*border: 1px solid #D2D2D2;*/\r\n\twidth: 80%;\r\n}\r\n#com{\r\n\ttext-align: left;\r\n\tmargin-left: 5%;\r\n}\r\n\r\n#loop{\r\n\t/*text-decoration: none;*/\r\n}\r\nul li {\r\n    position: relative;\r\n    text-align: center;\r\n    /*display: inline-block;*/\r\n    vertical-align: top;\r\n    list-style-type: none;\r\n} \r\n\r\n@import url(//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css);\r\n\r\nfieldset, label { margin: 0; padding: 0; }\r\n/*body{ margin: 20px; }\r\nh1 { font-size: 1.5em; margin: 10px; }*/\r\n\r\n/****** Style Star Rating Widget *****/\r\n\r\n.rating { \r\n  border: none;\r\n  float: left;\r\n}\r\n\r\n.rating > input { display: none; } \r\n.rating > label:before { \r\n  margin: 5px;\r\n  font-size: 3em;\r\n  font-family: FontAwesome;\r\n  display: inline-block;\r\n  content: \"\\f005\";\r\n}\r\n\r\n.rating > .half:before { \r\n  content: \"\\f089\";\r\n  position: absolute;\r\n}\r\n\r\n.rating > label { \r\n  color: #ddd; \r\n float: right; \r\n}\r\n\r\n/***** CSS Magic to Highlight Stars on Hover *****/\r\n\r\n.rating > input:checked ~ label, /* show gold star when clicked */\r\n.rating:not(:checked) > label:hover, /* hover current star */\r\n.rating:not(:checked) > label:hover ~ label { color: #FFD700;  } /* hover previous stars in list */\r\n\r\n.rating > input:checked + label:hover, /* hover current star when changing rating */\r\n.rating > input:checked ~ label:hover,\r\n.rating > label:hover ~ input:checked ~ label, /* lighten current selection */\r\n.rating > input:checked ~ label:hover ~ label { color: #FFED85;  } "

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = ".overlay {\r\n        position: fixed;\r\n        top: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        background: rgba(0, 0, 0, 0.7);\r\n        transition: opacity 500ms;\r\n        visibility: hidden;\r\n        opacity: 0;\r\n    }\r\n    \r\n    .overlay:target {\r\n        visibility: visible;\r\n        opacity: 1;\r\n    }\r\n    \r\n    .popup {\r\n        margin: 70px auto;\r\n        padding: 20px;\r\n        background: #F5F5F5;\r\n        border-radius: 5px;\r\n        width: 30%;\r\n        position: relative;\r\n        transition: all 5s ease-in-out;\r\n    }\r\n    \r\n    .popup h3 a {\r\n        margin-top: 0;\r\n        color: #333;\r\n        font-family: Tahoma, Arial, sans-serif;\r\n        text-decoration: none;\r\n    }\r\n    \r\n    .popup h3 a:hover {\r\n        color: #F0D041;\r\n    }\r\n    \r\n    .popup h3 a:after {\r\n        color: #F0D041;\r\n    }\r\n    \r\n    .popup .close {\r\n        position: absolute;\r\n        top: 20px;\r\n        right: 30px;\r\n        transition: all 200ms;\r\n        font-size: 30px;\r\n        font-weight: bold;\r\n        text-decoration: none;\r\n        color: #333;\r\n    }\r\n    \r\n    .popup .close:hover {\r\n        color: #F0D041;\r\n    }\r\n    \r\n    .content {\r\n        background-color: #FFF;\r\n        overflow: auto;\r\n        padding-left: 13%;\r\n    }\r\n    \r\n    .content h5 {\r\n        left: 0;\r\n    }\r\n    \r\n    @media screen and (max-width: 700px) {\r\n        .box {\r\n            width: 70%;\r\n        }\r\n        .popup {\r\n            width: 70%;\r\n        }\r\n    }\r\n#textbox {\r\n        border: 1px solid black;\r\n        width: 80%;\r\n    }\r\n    \r\n    #bttnsignin {\r\n        background-color: #F0D041;\r\n        margin-left: 25%;\r\n        border: 1px solid #F5F5F5;\r\n        color: #FFF;\r\n        text-align: center;\r\n        height: 40px;\r\n        width: 100px;\r\n    }\r\n    \r\n    .content a{\r\n        text-decoration: none;\r\n    }"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = ".navbar-default{\r\n\tmargin-bottom: 0px;\r\n}\r\n.navbar-nav{\r\n\tmargin: 0;\r\n}\r\n#imgcart{\r\n\twidth: 10%;\r\n\tmargin-top: 2%;\r\n\r\n}\r\n\r\n.navbar-right {\r\ntext-align: right;\r\nwidth: 40%;\r\n/*padding-left:15%;*/\r\n}\r\n\r\n"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "#newproduct{\r\n    margin: 0 30px 0 30px;\r\n}\r\n.col-lg-4{\r\n    height: 300px;\r\n    border: 2px solid blue;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n#seemore{\r\n    color: #CACACA;\r\n    background-color: #FFF;\r\n    border: 1px solid #818181;\r\n    height: 30px;\r\n\r\n}\r\n\r\n#ADD{\r\n    color: #000;\r\n    background-color: #FFF;\r\n    border: 1px solid #818181;\r\n    height: 30px;\r\n\r\n}\r\n#ADD:hover{\r\n    background-color: #FFF;\r\n}\r\n#seemore:hover{\r\n    background-color: #000;\r\n}\r\n\r\n h3{\r\n    margin: 0;\r\n    font-size: 100%;\r\n}\r\n\r\n#button{\r\n\r\n    text-align: center;\r\n    margin: 2% 0 2% 0;\r\n    padding: 0;\r\n}\r\nul{ \r\n    /*text-align:center;*/\r\n    padding: 0;\r\n    margin: 0; \r\n}\r\n\r\n#centeredmenu ul li #each {\r\n   display:block;\r\n   margin:20px 0 0 40px;\r\n   padding:3px 10px;\r\n   background:#FFF;\r\n   color:#000;\r\n   text-decoration:none;\r\n   line-height:1.3em;\r\n   height: 360px;\r\n   width:250px;\r\n}\r\n\r\n#centeredmenu ul li #each:hover {\r\n   background:#F0D041;\r\n   color:#fff;\r\n}\r\nul li {\r\n    position: relative;\r\n    text-align: center;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n} \r\n\r\n\r\nheader {\r\n    display:table;\r\n    width:100%;\r\n    max-width:100%;\r\n}\r\nheader div {\r\n    display:table-row;\r\n    line-height:1.5em;\r\n    font-size:2em;\r\n    white-space:nowrap;\r\n}\r\nheader h1 {\r\n    font-size:0.75em; \r\n    overflow:hidden;\r\n    display:table-cell;\r\n    vertical-align:middle;\r\n    width:1px;\r\n}\r\nheader span.spacer {\r\n    display:table-cell;\r\n}\r\nheader h1 {\r\n    padding:0 15px;\r\n}\r\nheader span.spacer:after {\r\n    display:inline-block;\r\n    width:100%;\r\n    content:\".\";\r\n    font-size:0;\r\n    color:transparent;\r\n    height:2px;\r\n    background:#CACACA;\r\n    vertical-align:middle;\r\n    position:relative;\r\n    top:-1px;\r\n}\r\n"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = ".overlay {\r\n        position: fixed;\r\n        top: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        background: rgba(0, 0, 0, 0.7);\r\n        transition: opacity 500ms;\r\n        visibility: hidden;\r\n        opacity: 0;\r\n    }\r\n    \r\n    .overlay:target {\r\n        visibility: visible;\r\n        opacity: 1;\r\n    }\r\n    \r\n    .popup {\r\n        margin: 70px auto;\r\n        padding: 20px;\r\n        background: #F5F5F5;\r\n        border-radius: 5px;\r\n        width: 30%;\r\n        position: relative;\r\n        transition: all 5s ease-in-out;\r\n    }\r\n    \r\n    .popup h3 a {\r\n        margin-top: 0;\r\n        color: #333;\r\n        font-family: Tahoma, Arial, sans-serif;\r\n        text-decoration: none;\r\n    }\r\n    \r\n    .popup h3 a:hover {\r\n        color: #F0D041;\r\n    }\r\n    \r\n    .popup h3 a:after {\r\n        color: #F0D041;\r\n    }\r\n    \r\n    .popup .close {\r\n        position: absolute;\r\n        top: 20px;\r\n        right: 30px;\r\n        transition: all 200ms;\r\n        font-size: 30px;\r\n        font-weight: bold;\r\n        text-decoration: none;\r\n        color: #333;\r\n    }\r\n    \r\n    .popup .close:hover {\r\n        color: #F0D041;\r\n    }\r\n    \r\n    .content {\r\n        background-color: #FFF;\r\n        overflow-x: hidden;\r\n        padding: 2% 6% 2% 6%;\r\n\r\n    }\r\n    \r\n    .content h5 {\r\n        left: 0;\r\n    }\r\n    \r\n    @media screen and (max-width: 700px) {\r\n        .box {\r\n            width: 70%;\r\n        }\r\n        .popup {\r\n            width: 70%;\r\n        }\r\n    }\r\n    #textbox {\r\n        border: 1px solid black;\r\n        width: 90%;\r\n    }\r\n    \r\n    #bttnsignin {\r\n        background-color: #F0D041;\r\n        margin-left: 43%;\r\n        border: 1px solid #F5F5F5;\r\n        color: #FFF;\r\n        height: 40px;\r\n        width: 100px;\r\n    }\r\n    #right {\r\n        /*padding-top: 20%;*/\r\n        margin-top: 5%;\r\n        border-left: 1px solid #F5F5F5;\r\n    }\r\n    \r\n    .fieldgroup {\r\n        float: left;\r\n        width: auto;\r\n        margin-left: 3em;\r\n    }"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "#review{\r\n    margin: 0 30px 0 30px;\r\n}\r\n.col-lg-4{\r\n    height: 300px;\r\n    border: 2px solid blue;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n#no{\r\n  margin: 1%;\r\n  border: 1px solid #E5E5E5;\r\n  height: 300px;\r\n  text-align: center;\r\n  background-color: #F1F1F1;\r\n}\r\n#nono{\r\n  margin-top: 10%;\r\n  font-size: 30px;\r\n}\r\n#seemore{\r\n    color: #CACACA;\r\n    background-color: #FFF;\r\n    border: 1px solid #818181;\r\n    height: 30px;\r\n}\r\n h3{\r\n    margin: 0;\r\n    font-size: 100%;\r\n}\r\n\r\n#button{\r\n    text-align: center;\r\n    margin: 2% 0 2% 0;\r\n    padding: 0;\r\n}\r\nul{ \r\n    /*text-align:center;*/\r\n    padding: 0;\r\n    margin: 0; \r\n}\r\n\r\n#centeredmenu ul li #each {\r\n   display:block;\r\n   margin:20px 0 0 40px;\r\n   padding:3px 10px;\r\n   background:#FFF;\r\n   color:#000;\r\n   text-decoration:none;\r\n   line-height:1.3em;\r\n   height: 360px;\r\n   width:250px;\r\n}\r\n\r\n#centeredmenu ul li #each:hover {\r\n   background:#F0D041;\r\n   color:#fff;\r\n}\r\n\r\nul li {\r\n    position: relative;\r\n    text-align: center;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n} \r\n\r\n\r\nheader {\r\n    display:table;\r\n    width:100%;\r\n    max-width:100%;\r\n}\r\nheader div {\r\n    display:table-row;\r\n    line-height:1.5em;\r\n    font-size:2em;\r\n    white-space:nowrap;\r\n}\r\nheader h1 {\r\n    font-size:0.75em; \r\n    overflow:hidden;\r\n    display:table-cell;\r\n    vertical-align:middle;\r\n    width:1px;\r\n}\r\nheader span.spacer {\r\n    display:table-cell;\r\n}\r\nheader h1 {\r\n    padding:0 15px;\r\n}\r\nheader span.spacer:after {\r\n    display:inline-block;\r\n    width:100%;\r\n    content:\".\";\r\n    font-size:0;\r\n    color:transparent;\r\n    height:2px;\r\n    background:#CACACA;\r\n    vertical-align:middle;\r\n    position:relative;\r\n    top:-1px;\r\n}\r\n"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "#content{\r\n\toverflow-x: hidden;\r\n\t/*height: 800px;*/\r\n\tbackground-color: #FFF;\r\n\tmargin:5%;\r\n\t border: 1px solid #D2D2D2;\r\n}#no{\r\n  margin: 1%;\r\n  border: 1px solid #E5E5E5;\r\n  height: 300px;\r\n  text-align: center;\r\n  background-color: #F1F1F1;\r\n}\r\n#nono{\r\n  margin-top: 10%;\r\n  font-size: 30px;\r\n}\r\n\r\n#addtocart{\r\n  background-color: #F0D041;\r\n  color: black;\r\n  border: 1px solid #D2D2D2;\r\n  border-radius: 10px;\r\n  width: 30%;\r\n  height: 50px;\r\n  /*right: 400px;*/\r\n  display: inline-block;\r\n  /*position: absolute;*/\r\n\r\n  margin: 2%;\r\n  /*bottom: 0px;*/\r\n}#sub{\r\n  text-align: center;\r\n}\r\n\r\n#total{\r\n  margin-bottom: 2%;\r\n  margin-top: 2%;\r\n   margin-right: 16%;\r\n   /*border: 1px solid black;*/\r\n   text-align: right;\r\n}\r\n#cart{\r\n\tmargin-left: 3%;\r\n\tmargin-bottom: 5%;\r\n}\r\n#proincart{\r\n\tborder: 1px solid #D2D2D2;\r\n\tmargin: 5px;\r\n\tpadding: 2%;\r\n\ttext-align: center;\r\n}#ADD{\r\n    color: #000;\r\n    background-color: #F0D041;\r\n    border: 1px solid #818181;\r\n    height: 30px;\r\n} \r\n#addto{\r\n    margin: 0;\r\n    font-size: 100%;\r\n}ul{ \r\n    /*text-align:center;*/\r\n    padding: 0;\r\n    margin: 0; \r\n}#cart2{\r\n\tmargin-left: 7%;\r\n}\r\n#cart{\r\n\tmargin: 5%;\r\n}\r\n#centeredmenu ul li #each {\r\n   display:block;\r\n   margin:20px 0 0 40px;\r\n   padding:3px 10px;\r\n   background:#FFF;\r\n   color:#000;\r\n   text-decoration:none;\r\n   line-height:1.3em;\r\n   height: 280px;\r\n   width:250px;\r\n}\r\n\r\n#centeredmenu ul li #each:hover {\r\n   background:#F0D041;\r\n   color:#fff;\r\n}\r\nul li {\r\n    position: relative;\r\n    text-align: center;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n} \r\n#col{\r\n\tmargin-top: 10%;\r\n}"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"ad\">\r\n\t<div class=\"col-lg-7\" id=\"ad1\" class=\"bgimg1\">\r\n\t</div>\r\n\t<div class=\"col-lg-5\" id=\"ad\">\r\n\t\t\t<div id=\"ad2\" class=\"bgimg2\" >\r\n\t\t\t\r\n\t\t\t<img src=\"\">\r\n\t\t\t</div>\r\n\t\t\t<div id=\"ad3\" class=\"bgimg3\" >\r\n\t\t\t\r\n\t\t\t<img src=\"\">\r\n\t\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  allpro works!\r\n</p>\r\n"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\r\n    <div id=\"header\">\r\n         <div *ngIf=\"isLogin!='success'\">\r\n             <h3 id=\"textheader\"><a href=\"#popup1\"(click)=\"toggleExists()\"  \r\n            (click)=\"toggleExists3()\">register / login</a></h3>\r\n             </div>\r\n             \r\n            \r\n            <div  *ngIf=\"isLogin==='success'\">\r\n             <h3 id=\"textheader\"><a  href=\"\" (click)=\"toggleExists5()\">Logout</a></h3>\r\n             </div>\r\n\r\n\r\n        <img id=\"imgheader\" src=\"assets/lo.png\">\r\n    </div>\r\n    <div id=\"body\">\r\n        <app-navbar></app-navbar>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <div id=\"footer\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\" style=\"text-align: left;\">\r\n                <p id=\"copyright\">Copyright &copy; 2017 GBBeer&trade; - gmine&boomba beer service |Privacy Policy</p>\r\n            </div>\r\n            <div class=\"col-md-6\" id=\"copyright2\">\r\n                <ul class=\"social-network social-circle\">\r\n                    <li><a href=\"#\" class=\"icoFacebook\" title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a></li>\r\n                    <li><a href=\"#\" class=\"icoTwitter\" title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a></li>\r\n                    <li><a href=\"#\" class=\"icoGoogle\" title=\"Google +\"><i class=\"fa fa-google-plus\"></i></a></li>\r\n                    <li><a href=\"#\" class=\"icoig\" title=\"ig\"><i class=\" fa fa-instagram\"></i></a></li>\r\n                    <li><a href=\"#\" class=\"icoLinkedin\" title=\"Linkedin\"><i class=\"fa fa-github-alt\"></i></a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"popup1\" class=\"overlay\">\r\n    <div class=\"popup\" [ngClass]=\"{'three': pop, 'four': !pop}\">\r\n        <h3>\r\n            <a  id=\"login\" [ngClass]=\"{'one': check, 'two': !check}\"\r\n                            (click)=\"toggleExists3()\"\r\n                            (click)=\"toggleExists()\"  >Login</a>|\r\n\r\n            <a  id=\"regis\" [ngClass]=\"{'one': !check, 'two': check}\"\r\n                            (click)=\"toggleExists4()\"\r\n                           (click)=\"toggleExists2()\" >Register</a>\r\n        </h3>\r\n        <a class=\"close\" href=\"#\">&times;</a>\r\n        <app-login *ngIf=\"exists\" ></app-login>\r\n        <app-register *ngIf=\"!exists\"></app-register>\r\n    </div>\r\n</div>\r\n<!-- <some-element [ngClass]=\"'first second'\">...</some-element>\r\n<some-element [ngClass]=\"['first', 'second']\">...</some-element>\r\n<some-element [ngClass]=\"{'first': true, 'second': true, 'third': false}\">...</some-element>\r\n<some-element [ngClass]=\"stringExp|arrayExp|objExp\">...</some-element>\r\n<some-element [ngClass]=\"{'class1 class2 class3' : true}\">...</some-element> -->\r\n"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-3\" id=\"left\">\r\n        <h3 id=\"all3\">Catagory\r\n            </h3>\r\n        <h2 id=\"all4\">Price</h2>\r\n        <form id=\"check\">\r\n            <div class=\"checkbox\">\r\n                <label>\r\n                    <input type=\"checkbox\"  value=\"\">0 - 100</label>\r\n            </div>\r\n            <div class=\"checkbox\">\r\n                <label>\r\n                    <input type=\"checkbox\" value=\"\">101-200</label>\r\n            </div>\r\n            <div class=\"checkbox\">\r\n                <label>\r\n                    <input type=\"checkbox\"  value=\"\">201-300</label>\r\n            </div>\r\n            <div class=\"checkbox\">\r\n                <label>\r\n                    <input type=\"checkbox\"  value=\"\">301-400</label>\r\n            </div>\r\n            <div class=\"checkbox\">\r\n                <label>\r\n                    <input type=\"checkbox\"  value=\"\" >401-500</label>\r\n            </div>\r\n            <div class=\"checkbox\">\r\n                <label>\r\n                    <input type=\"checkbox\"  value=\"\" >500++</label>\r\n            </div>\r\n        </form>\r\n        <h2 id=\"all4\">Color</h2>\r\n        <select id=\"check2\">\r\n            <option value=\"Amber\">Amber <div id=\"cl1\"></div></option>\r\n            <option value=\"Blond\">Blond <div id=\"cl2\"></div></option>\r\n            <option value=\"Rose\">Rose <div id=\"cl3\"></div></option>\r\n            <option value=\"Ruby\">Ruby <div id=\"cl4\"></div></option>\r\n            <option value=\"Wit\">White <div id=\"cl5\"></div></option>\r\n            <!-- <option value=\"audi\">Audi</option> -->\r\n        </select>\r\n        <h2 id=\"all4\">Country</h2>\r\n        <select id=\"check2\">\r\n            <option value=\"Belgium\">Belgium </option>\r\n            <option value=\"CzechRepublic\">Czech Republic</option>\r\n            <option value=\"Japan\">Japan</option>\r\n            <option value=\"Spain \">Spain </option>\r\n            <option value=\"Thailand\">Thailand</option>\r\n            <!-- <option value=\"audi\">Audi</option> -->\r\n        </select>\r\n    </div>\r\n    <div class=\"col-lg-9\" id=\"right\">\r\n        <div id=\"top\">\r\n            <h3 id=\"all\">ALL PRODUCT</h3>\r\n            <h4 id=\"all2\">Sort By&nbsp;&nbsp;<select>\r\n                <option value=\"Name\">Name</option>\r\n                <option value=\"Price\">Price</option>\r\n                <option value=\"Popular\">Popular</option>\r\n                <!-- <option value=\"audi\">Audi</option> -->\r\n            </select></h4>\r\n        </div>\r\n        <div id=\"content\">\r\n            <ul>\r\n                <li *ngFor=\"let all of allProduct; let i = index; trackBy: trackByFn \">\r\n                    <div id=\"each\">\r\n                        <a [routerLink]=\"['/each']\" (click)='sentID(all._id)'>\r\n                            <img src=\"http://localhost:3000/view/img/{{all.img}}\" style=\"width: 170px;height: 200px ;margin-top: 20px;\">\r\n                            <br>\r\n                            <br>\r\n                        </a>\r\n                        <h3>{{all.name}}</h3>\r\n                        <h3>{{all.price}}</h3>\r\n                        <br>\r\n                        <button id=\"ADD\" (click)=\"getId(all._id)\" (click)='sentIDToCart(all._id)'>\r\n                            <h3 >ADD TO CART</h3> </button>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<div id=\"bestseller\">\r\n    <header>\r\n        <div>\r\n            <span class=\"spacer\"></span>\r\n            <h1>BEST SELLERS</h1>\r\n            <span class=\"spacer\"></span>\r\n        </div>\r\n    </header>\r\n    <div id=\"centeredmenu\">\r\n        <ul>\r\n            <li  *ngFor=\"let product of bestProduct; let i = index; trackBy: trackByFn\">\r\n                <div id=\"each\">\r\n                    <a [routerLink]=\"['/each']\" (click)='sentID(product._id)'>\r\n                        <img src=\"http://localhost:3000/view/img/{{product.img}}\" style=\"width: 170px;height: 200px ;margin-top: 20px;\">\r\n                        <br>\r\n                        <br>\r\n                    </a>\r\n                    <h3>{{product.name}}</h3>\r\n                    <h3>{{product.price}} Bath.</h3>\r\n                    <br>\r\n                    <button id=\"ADD\" (click)='sentIDToCart(product._id)'>\r\n                        <h3 >ADD TO CART</h3></button>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n        <div   *ngIf=\"bestProduct2===0\">\r\n             <div id=\"no\"><h3 id=\"nono\">NO PRODUCT YET</h3></div>\r\n        </div>\r\n    </div>\r\n    <div id=\"button\">\r\n        <button id=\"seemore\" *ngIf=\"bestProduct2!=0\"  [routerLink]=\"['/beer']\">\r\n            <h3>SEE MORE</h3></button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<app-advertise></app-advertise>\r\n<div id=\"content1\">\r\n    <div id=\"content\">\r\n        <h3 id=\"cart\"><b>CART</b></h3>\r\n        <div class=\"row\" *ngIf=\"cart2!=0\">\r\n            <div class=\"col-lg-4\"></div>\r\n            <div class=\"col-lg-2\">Price</div>\r\n            <div class=\"col-lg-2\">Quantity</div>\r\n            <div class=\"col-lg-2\">Total</div>\r\n        </div>\r\n        <div id=\"proincart\" *ngFor=\"let crt of cart; let i = index; trackBy: trackByFn\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-4\">\r\n                    <div id=\"centeredmenu\">\r\n                        <ul>\r\n                            <li>\r\n                                <div id=\"each\">\r\n                                    <a >\r\n                                        <img src=\"http://localhost:3000/view/img/{{crt.item.img}}\" style=\"width: 170px;height: 200px ;margin-top: 20px;\">\r\n                                        <br>\r\n                                        <h3>{{crt.item.name}}</h3>\r\n                                        <br>\r\n                                    </a>\r\n                                    <h3></h3>\r\n                                    <br>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-2\" id=\"col\"><b>{{crt.item.price}}</b></div>\r\n                <div class=\"col-lg-2\" id=\"col\"><b>{{crt.qty}}</b></div>\r\n                <div class=\"col-lg-2\" id=\"col\"><b>{{crt.price}} Bath.</b></div>\r\n            </div>\r\n        </div>\r\n        <div   *ngIf=\"cart2===0\">\r\n             <div id=\"no\"><h3 id=\"nono\">NO PRODUCT YET</h3></div>\r\n        </div>\r\n        <div   *ngIf=\"cart2!=0\" id=\"total\">\r\n             <h3><b>Total Price: </b> {{totalPrice}} Bath.</h3>\r\n        </div>\r\n\r\n    </div>\r\n     <div id=\"sub\" *ngIf=\"cart2!=0\">\r\n\r\n            <button id=\"addtocart\" [routerLink]=\"['/writereview']\">\r\n                <h3 >BUY !!</h3></button>\r\n\r\n        </div>\r\n</div>\r\n"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  catagory works!\r\n</p>\r\n"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"maincontent\">\r\n    <div class=\"col-lg-5\" id=\"pic\">\r\n        <img src='{{img}}' id=\"imgeach\">\r\n    </div>\r\n    <div class=\"col-lg-7\" id=\"detail\">\r\n        <div id=\"content\">\r\n            <h3 id=\"name1\"><b>  {{name}}. </b></h3>\r\n            <hr>\r\n            <h3 id=\"name\"><b>Brand:</b> {{brand}}.</h3>\r\n            <h3 id=\"name\"><b>Country:</b> {{country}}.</h3>\r\n            <h3 id=\"name\"><b>Color:</b>  {{color}}.</h3>\r\n            <h3 id=\"name\"><b>ABV%:</b> {{degree}}.</h3>\r\n            <h3 id=\"name\"><b>Price:</b>  {{price}} Bath.</h3>\r\n            <h3 id=\"name\"><b>Type:</b>  {{type}}.</h3>\r\n            <h3 id=\"name\"><b>Type:</b>  {{date | date: 'dd/MM/yyyy'}}.</h3>\r\n            <button id=\"addtocart\" (click)='sentIDToCart(id)'><b>ADD TO CART </b><img id=\"imgcart\" src=\"assets/cart.png\"></button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<hr>\r\n<div id=\"review\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-1\"></div>\r\n        <div class=\"col-lg-8\">\r\n            <h3><b>REVIEW</b></h3>\r\n            <div id=\"bor\">\r\n                <ul>\r\n                    <li *ngFor=\"let review of reView; let i = index; trackBy: trackByFn\">\r\n                        <div class=\"row\" id=\"left\">\r\n                            <h5><b>Name: </b> {{review.name}}</h5>\r\n                            <h5><b>Date: </b>{{review.date}}</h5>\r\n                            <h4><b>Comment: </b>{{review.comment}}</h4>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div id=\"textwrite\">\r\n                <h5><b>Write Review</b></h5>\r\n                <textarea rows=\"4\" cols=\"37\" [(ngModel)]=\"textarea\" placeholder=\"comment\" value=\"gmine\"></textarea>\r\n                <br>\r\n                <h6><b>Select Rating</b></h6>\r\n                <fieldset class=\"rating\">\r\n                    <input type=\"radio\" id=\"star5\" [(ngModel)]=\"rate\" name=\"rating\" value=\"5\" />\r\n                    <label class=\"full\" for=\"star5\" title=\"Awesome - 5 stars\"></label>\r\n                    <input type=\"radio\" id=\"star4half\" [(ngModel)]=\"rate\" name=\"rating\" value=\"4.5\" />\r\n                    <label class=\"half\" for=\"star4half\" title=\"Pretty good - 4.5 stars\"></label>\r\n                    <input type=\"radio\" id=\"star4\" [(ngModel)]=\"rate\" name=\"rating\" value=\"4\" />\r\n                    <label class=\"full\" for=\"star4\" title=\"Pretty good - 4 stars\"></label>\r\n                    <input type=\"radio\" id=\"star3half\" [(ngModel)]=\"rate\" name=\"rating\" value=\"3.5\" />\r\n                    <label class=\"half\" for=\"star3half\" title=\"Meh - 3.5 stars\"></label>\r\n                    <input type=\"radio\" id=\"star3\" [(ngModel)]=\"rate\" name=\"rating\" value=\"3\" />\r\n                    <label class=\"full\" for=\"star3\" title=\"Meh - 3 stars\"></label>\r\n                    <input type=\"radio\" id=\"star2half\" [(ngModel)]=\"rate\" name=\"rating\" value=\"2.5\" />\r\n                    <label class=\"half\" for=\"star2half\" title=\"Kinda bad - 2.5 stars\"></label>\r\n                    <input type=\"radio\" id=\"star2\" [(ngModel)]=\"rate\" name=\"rating\" value=\"2\" />\r\n                    <label class=\"full\" for=\"star2\" title=\"Kinda bad - 2 stars\"></label>\r\n                    <input type=\"radio\" id=\"star1half\" [(ngModel)]=\"rate\" name=\"rating\" value=\"1.5\" />\r\n                    <label class=\"half\" for=\"star1half\" title=\"Meh - 1.5 stars\"></label>\r\n                    <input type=\"radio\" id=\"star1\" [(ngModel)]=\"rate\" name=\"rating\" value=\"1\" />\r\n                    <label class=\"full\" for=\"star1\" title=\"Sucks big time - 1 star\"></label>\r\n                    <input type=\"radio\" id=\"starhalf\" [(ngModel)]=\"rate\" name=\"rating\" value=\"0.5\" />\r\n                    <label class=\"half\" for=\"starhalf\" title=\"Sucks big time - 0.5 stars\"></label>\r\n                </fieldset>\r\n                <!-- <h1>{{rate}}</h1> -->\r\n            </div>\r\n            <div class=\"col-lg-3\" id=\"sarm\">\r\n                <button id=\"writereview\" (click)='sendComment(textarea,rate)' ><b>Submit</b></button>\r\n                <!-- [routerLink]=\"['/writereview']\" -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "<app-advertise></app-advertise>\r\n<app-bestseller></app-bestseller>\r\n\r\n<app-newproduct></app-newproduct>\r\n<app-review></app-review>\r\n"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n        <h5><b>Username</b></h5>\r\n        <input id=\"textbox\" [(ngModel)]=\"username\" type=\"text\" name=\" \" placeholder=\" Username\">\r\n        <h5><b>Password</b></h5>\r\n        <input id=\"textbox\" [(ngModel)]=\"password\" type=\"Password\" name=\" \" placeholder=\" Password\">\r\n        <h6><a href=\"\" >forget password?</a></h6><br>\r\n        <button id=\"bttnsignin\" (click)='login(username,password)'>Sign in</button>\r\n        <br><br>\r\n</div>\r\n"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "\r\n      <nav class=\"navbar navbar-default\" >\r\n        <div class=\"container-fluid\">\r\n          <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n              <li class=\"\"><a [routerLink]=\"['']\"><h4>HOME</h4></a></li>\r\n              <li><a [routerLink]=\"['/beer']\"><h4>BEER</h4></a></li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n               <!-- <li *ngIf=\"!cart\"><img [routerLink]=\"['/cart']\"   id=\"imgcart\" src=\"assets/cart.png\"></li> -->\r\n               <div *ngIf=\"isEmptyCart\">\r\n               <li ><img [routerLink]=\"['/cart']\"   id=\"imgcart\" src=\"assets/cart.png\"></li>\r\n               </div>\r\n                <div *ngIf=\"!isEmptyCart\">\r\n               <li ><img [routerLink]=\"['/cart']\"  (click)=\"clearCart()\" id=\"imgcart\" src=\"assets/redcart.png\"></li>\r\n               </div>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </nav>\r\n    "

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "<div id=\"newproduct\">\r\n\t<header>\r\n\t\t<div>\r\n\t\t\t<span class=\"spacer\"></span>\r\n\t\t\t\t<h1>NEW PRODUCTS</h1>\r\n\t\t\t<span class=\"spacer\"></span>\r\n\t\t</div>\r\n\t</header>\r\n\r\n\r\n\r\n<div id=\"centeredmenu\">\r\n  <ul >\r\n      <li *ngFor=\"let product of newProduct; let i = index; trackBy: trackByFn\">\r\n      <div id=\"each\" *ngIf = \"i<4\">\r\n      <a [routerLink]=\"['/each']\" (click)='sentID(product._id)' >\r\n\t\t\t<img src=\"http://localhost:3000/view/img/{{product.img}}\" style=\"width: 170px;height: 200px ;margin-top: 20px;\"><br><br>\r\n      </a>\r\n      \t <h3>{{product.name}} .</h3><br>\r\n     \t\t <h3>{{product.price}} Bath.</h3><br>\r\n      \t\t<button id=\"ADD\" (click)='sentIDToCart(product._id)'><h3 >ADD TO CART</h3></button>\r\n      </div>\r\n      </li>\r\n   </ul>\r\n</div>\r\n\r\n\r\n\t<div id=\"button\">\r\n\t\t<button id=\"seemore\" [routerLink]=\"['/beer']\"><h3 >SEE MORE</h3></button>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n            <h5><b>Firstname</b></h5>\r\n            <input id=\"textbox\" [(ngModel)]=\"firstname\" type=\"text\" name=\"\" placeholder=\" Firstname\">\r\n            <h5><b>Lastname</b></h5>\r\n            <input id=\"textbox\" [(ngModel)]=\"lastname\" type=\"text\" name=\"\" placeholder=\" Lastname\">\r\n            <h5><b>Username</b></h5>\r\n            <input id=\"textbox\" [(ngModel)]=\"username\" type=\"text\" name=\"\" placeholder=\" Username\">\r\n            <h5><b>Password</b></h5>\r\n            <input id=\"textbox\" [(ngModel)]=\"password\" type=\"Password\" name=\"\" placeholder=\" Password\">\r\n            <h5><b>E-Mail</b></h5>\r\n            <input id=\"textbox\" [(ngModel)]=\"email\" type=\"text\" name=\"\" placeholder=\" E-Mail\">\r\n            \r\n            <br>\r\n            <br>\r\n        </div>\r\n        <div class=\"col-lg-6\" id=\"right\">\r\n            <h5><b>Gender</b></h5>\r\n            <div class=\"fieldgroup\">\r\n                <input type=\"radio\" [(ngModel)]=\"result\" name=\"payment_method\" ng-value=\"'pass'\">\r\n                <label for=\"payment1\"> Male\r\n                </label>\r\n            </div>\r\n            <div class=\"fieldgroup\">\r\n                <input type=\"radio\" [(ngModel)]=\"result\" name=\"payment_method\" value=\"fail\">\r\n                <label for=\"payment2\"> FeMale</label>\r\n            </div>\r\n            <br>\r\n            <div class=\"form-group\">\r\n                <h5><b>Date of birth</b></h5>\r\n                <input #expDate type=\"date\" name=\"sdate\" value=\"\" maxlength=\"15\" class=\"form-control required\" title=\"Please fill Start Date\">\r\n            </div>\r\n            <h5><b>Address</b></h5>\r\n            <textarea rows=\"4\" cols=\"37\" [(ngModel)]=\"address\" placeholder=\"Address\" value=\"gmine\"></textarea>\r\n        </div>\r\n    </div>\r\n    <br>\r\n    <br>\r\n    <button id=\"bttnsignin\" (click)='register(username,password,firstname,lastname,expDate.value,address,email,result)'>Register</button>\r\n</div>\r\n"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "<div id=\"review\">\r\n    <header>\r\n        <div>\r\n            <span class=\"spacer\"></span>\r\n            <h1>REVIEW</h1>\r\n            <span class=\"spacer\"></span>\r\n        </div>\r\n    </header>\r\n    <div id=\"centeredmenu\">\r\n        <ul>\r\n            <li *ngFor=\"let product of popProduct; let i = index; trackBy: trackByFn \">\r\n                <div id=\"each\">\r\n                    <a [routerLink]=\"['/each']\" (click)='sentID(product._id)'>\r\n                        <img src=\"http://localhost:3000/view/img/{{product.img}}\" style=\"width: 170px;height: 200px ;margin-top: 20px;\">\r\n                        <br>\r\n                        <br>\r\n                    </a>\r\n                    <h3>{{product.name}}</h3>\r\n                    <h3>{{product.price}} Bath.</h3>\r\n                    <br>\r\n                    <span>Rating: {{product.rate}} </span>\r\n                    <br>\r\n                    <button id=\"seemore\" (click)='sentIDToCart(product._id)' >\r\n                        <h3 >ADD TO CART</h3></button>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n        <div   *ngIf=\"popProduct2===0\">\r\n             <div id=\"no\"><h3 id=\"nono\">NO PRODUCT YET</h3></div>\r\n        </div>\r\n    </div>\r\n    <div id=\"button\">\r\n        <button id=\"seemore\" *ngIf=\"popProduct!=0\" [routerLink]=\"['/beer']\">\r\n            <h3>SEE MORE</h3></button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "<app-advertise></app-advertise>\r\n<div id=\"content1\">\r\n    <div id=\"content\">\r\n        <h3 id=\"cart\"><b>Recommend</b></h3>\r\n        <h3 id=\"cart2\">Customer who buy this beer also buy:</h3>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-4\"></div>\r\n            <div class=\"col-lg-2\">Price</div>\r\n            <!-- <div class=\"col-lg-2\">Quantity</div> -->\r\n            <!-- <div class=\"col-lg-2\">Total</div> -->\r\n        </div>\r\n        <div id=\"proincart\" *ngFor=\"let recc of rec; let i = index; trackBy: trackByFn\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-4\">\r\n                    <div id=\"centeredmenu\">\r\n                        <ul>\r\n                            <li>\r\n                                <div id=\"each\">\r\n                                    <a>\r\n                                        <img src=\"http://localhost:3000/view/img/{{recc.img}}\" style=\"width: 170px;height: 200px ;margin-top: 20px;\">\r\n                                        <br>\r\n                                        <h3>{{recc.name}}</h3>\r\n                                        <br>\r\n                                    </a>\r\n                                    <h3></h3>\r\n                                    <br>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-2\" id=\"col\"><b>{{recc.price}}</b></div>\r\n                <!-- <div class=\"col-lg-2\" id=\"col\"><b>{{recc.qty}}</b></div> -->\r\n                <!-- <div class=\"col-lg-2\" id=\"col\"><b>{{crt.price}} Bath.</b></div> -->\r\n            </div>\r\n        </div>\r\n      <!--   <div *ngIf=\"cart2===0\">\r\n            <div id=\"no\">\r\n                <h3 id=\"nono\">NO PRODUCT YET</h3></div>\r\n        </div> -->\r\n    </div>\r\n    <div id=\"sub\" >\r\n        <button id=\"addtocart\" [routerLink]=\"['/beer']\">\r\n            <h3>Back to Shopping</h3></button>\r\n    </div>\r\n    <div id=\"sub\" >\r\n        <button id=\"addtocart\" [routerLink]=\"['']\" (click)=\"sentbil()\">\r\n            <h3>Go to payment</h3></button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(391);


/***/ })

},[724]);
//# sourceMappingURL=main.bundle.map