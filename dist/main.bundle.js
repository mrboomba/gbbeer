webpackJsonp([1,4],{

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(100);
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
//# sourceMappingURL=/home/mrboomba/gbbeer/src/product.service.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(100);
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
    RegisterService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* Http */]) === 'function' && _a) || Object])
    ], RegisterService);
    return RegisterService;
    var _a;
}());
//# sourceMappingURL=/home/mrboomba/gbbeer/src/register.service.js.map

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 388;


/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(510);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/mrboomba/gbbeer/src/main.js.map

/***/ }),

/***/ 507:
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
    }
    AdvertiseComponent.prototype.ngOnInit = function () {
    };
    AdvertiseComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-advertise',
            template: __webpack_require__(690),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [])
    ], AdvertiseComponent);
    return AdvertiseComponent;
}());
//# sourceMappingURL=/home/mrboomba/gbbeer/src/advertise.component.js.map

/***/ }),

/***/ 508:
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
            template: __webpack_require__(691),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [])
    ], AllproComponent);
    return AllproComponent;
}());
//# sourceMappingURL=/home/mrboomba/gbbeer/src/allpro.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function AppComponent() {
        this.exists = true;
        this.check = true;
        this.pop = true;
    }
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
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(692),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/mrboomba/gbbeer/src/app.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__beer_beer_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cart_cart_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bestseller_bestseller_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__newproduct_newproduct_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__review_review_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__advertise_advertise_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__each_each_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_login_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__register_register_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__catagory_catagory_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__allpro_allpro_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_product_service__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_register_service__ = __webpack_require__(330);
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
                __WEBPACK_IMPORTED_MODULE_18__allpro_allpro_component__["a" /* AllproComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_20__services_register_service__["a" /* RegisterService */], __WEBPACK_IMPORTED_MODULE_19__services_product_service__["a" /* ProductService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/mrboomba/gbbeer/src/app.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__(216);
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
    function BeerComponent(productService) {
        var _this = this;
        this.productService = productService;
        this.productService.getAllproduct().subscribe(function (data) { return _this.getAllproduct(data); });
    }
    BeerComponent.prototype.getAllproduct = function (data) {
        console.log(JSON.parse(data._body));
        this.allProduct = JSON.parse(data._body);
    };
    BeerComponent.prototype.ngOnInit = function () {
    };
    BeerComponent.prototype.getId = function (id) {
        console.log(id);
        console.log("id");
    };
    BeerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-beer',
            template: __webpack_require__(693),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === 'function' && _a) || Object])
    ], BeerComponent);
    return BeerComponent;
    var _a;
}());
//# sourceMappingURL=/home/mrboomba/gbbeer/src/beer.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function BestsellerComponent() {
    }
    BestsellerComponent.prototype.ngOnInit = function () {
    };
    BestsellerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-bestseller',
            template: __webpack_require__(694),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [])
    ], BestsellerComponent);
    return BestsellerComponent;
}());
//# sourceMappingURL=/home/mrboomba/gbbeer/src/bestseller.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-cart',
            template: __webpack_require__(695),
            styles: [__webpack_require__(681)]
        }), 
        __metadata('design:paramtypes', [])
    ], CartComponent);
    return CartComponent;
}());
//# sourceMappingURL=/home/mrboomba/gbbeer/src/cart.component.js.map

/***/ }),

/***/ 514:
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
            template: __webpack_require__(696),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [])
    ], CatagoryComponent);
    return CatagoryComponent;
}());
//# sourceMappingURL=/home/mrboomba/gbbeer/src/catagory.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function EachComponent() {
    }
    EachComponent.prototype.ngOnInit = function () {
    };
    EachComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-each',
            template: __webpack_require__(697),
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [])
    ], EachComponent);
    return EachComponent;
}());
//# sourceMappingURL=/home/mrboomba/gbbeer/src/each.component.js.map

/***/ }),

/***/ 516:
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
            template: __webpack_require__(698),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/mrboomba/gbbeer/src/home.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(699),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
//# sourceMappingURL=/home/mrboomba/gbbeer/src/login.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(700),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=/home/mrboomba/gbbeer/src/navbar.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__(216);
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
    function NewproductComponent(productService) {
        var _this = this;
        this.productService = productService;
        this.productService.getNewproduct().subscribe(function (data) { return _this.getNewProduct(data); });
    }
    NewproductComponent.prototype.getNewProduct = function (data) {
        console.log(JSON.parse(data._body));
        this.newProduct = JSON.parse(data._body);
    };
    NewproductComponent.prototype.ngOnInit = function () {
    };
    NewproductComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-newproduct',
            template: __webpack_require__(701),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === 'function' && _a) || Object])
    ], NewproductComponent);
    return NewproductComponent;
    var _a;
}());
//# sourceMappingURL=/home/mrboomba/gbbeer/src/newproduct.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_register_service__ = __webpack_require__(330);
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
    RegisterComponent.prototype.register = function (username, password, firstname, lastname, birthDay, address, email) {
        var _this = this;
        var user = {
            "username": username,
            "password": password,
            "firstname": firstname,
            "lastname": lastname,
            "address": address,
            "email": email,
            "birthday": birthDay
        };
        this.registerService.register(user).subscribe(function (data) { return _this.getUser(data); });
    };
    RegisterComponent.prototype.getUser = function (data) {
        console.log(JSON.parse(data._body));
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__(702),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_register_service__["a" /* RegisterService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_register_service__["a" /* RegisterService */]) === 'function' && _a) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a;
}());
//# sourceMappingURL=/home/mrboomba/gbbeer/src/register.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function ReviewComponent() {
    }
    ReviewComponent.prototype.ngOnInit = function () {
    };
    ReviewComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-review',
            template: __webpack_require__(703),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [])
    ], ReviewComponent);
    return ReviewComponent;
}());
//# sourceMappingURL=/home/mrboomba/gbbeer/src/review.component.js.map

/***/ }),

/***/ 522:
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
//# sourceMappingURL=/home/mrboomba/gbbeer/src/environment.js.map

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = "/*=========================\n  Icons\n ================= */\n    /* footer social icons */\n    \n    ul.social-network {\n        list-style: none;\n        display: inline;\n        margin-left: 0 !important;\n        padding: 0;\n        /*margin-top: 100%;*/\n        /*padding-top: 5%;*/\n    }\n    \n    ul.social-network li {\n        display: inline;\n        margin: 0 5px;\n    }\n    /* footer social icons */\n    \n    .social-network a.icoRss:hover {\n        background-color: #F56505;\n    }\n    \n    .social-network a.icoFacebook:hover {\n        background-color: #3B5998;\n    }\n    \n    .social-network a.icoTwitter:hover {\n        background-color: #33ccff;\n    }\n    \n    .social-network a.icoGoogle:hover {\n        background-color: #BD3518;\n    }\n    \n    .social-network a.icoVimeo:hover {\n        background-color: #0590B8;\n    }\n    \n    .social-network a.icoLinkedin:hover {\n        background-color: #6e5494;\n    }\n    \n    .social-network a.icoig:hover {\n        background-color: #c13584;\n    }\n    \n    .social-network a.icoRss:hover i,\n    .social-network a.icoFacebook:hover i,\n    .social-network a.icoTwitter:hover i,\n    .social-network a.icoGoogle:hover i,\n    .social-network a.icoVimeo:hover i,\n    .social-network a.icoLinkedin:hover i {\n        color: #fff;\n    }\n    \n    a.socialIcon:hover,\n    .socialHoverClass {\n        color: #44BCDD;\n    }\n    \n    .social-circle li a {\n        display: inline-block;\n        position: relative;\n        margin: 0 auto 0 auto;\n        border-radius: 50%;\n        text-align: center;\n        width: 30px;\n        height: 30px;\n        font-size: 20px;\n    }\n    \n    .social-circle li i {\n        margin: 0;\n        line-height: 30px;\n        text-align: center;\n    }\n    \n    .social-circle li a:hover i,\n    .triggeredHover {\n        -moz-transform: rotate(360deg);\n        -webkit-transform: rotate(360deg);\n        -ms--transform: rotate(360deg);\n        transform: rotate(360deg);\n        transition: all 0.2s;\n    }\n    \n    .social-circle i {\n        color: #fff;\n        transition: all 0.8s;\n    }\n    \n    .social-network a {\n        background-color: #D3D3D3;\n    }\n    \n    #header {\n        background-color: #F0D041;\n        text-align: center;\n        margin: 0;\n    }\n    \n    #imgheader {\n        width: 15%;\n        margin: 0;\n        padding: 0;\n    }\n    \n    #textheader {\n        right: 0;\n        margin: 0 20px 0 0;\n        padding: 2px 0 0 0;\n        text-align: right;\n    }\n    #textheader a{\n       text-decoration: none;\n       color: black;\n    }\n    \n    html,\n    body {\n        overflow-x: hidden;\n        margin: 0;\n        padding: 0;\n        height: 100%;\n    }\n    \n    #container {\n        min-height: 100%;\n        position: relative;\n    }\n    \n    #body {\n        /*padding:10px;*/\n        padding-bottom: 60px;\n        /* Height of the footer */\n        background-color: #F5F5F5;\n        /*height: 100%;*/\n    }\n    \n    #footer {\n        background-color: #F0D041;\n        text-align: center;\n        position: absolute;\n        bottom: 0;\n        width: 100%;\n        height: 60px;\n        padding-top: 1%;\n    }\n    \n    #copyright {\n        margin-left: 10%;\n        margin-top: 1%;\n        /*padding-top: 3%;*/\n    }\n    \n    .overlay {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        background: rgba(0, 0, 0, 0.7);\n        transition: opacity 500ms;\n        visibility: hidden;\n        opacity: 0;\n    }\n    \n    .overlay:target {\n        visibility: visible;\n        opacity: 1;\n    }\n    \n    .popup {\n        margin: 70px auto;\n        padding: 20px;\n        background: #F5F5F5;\n        border-radius: 5px;\n        /*width:50%;*/\n        position: relative;\n        /*transition: all 5s ease-in-out;*/\n    }\n    \n    .popup h3 a {\n        margin-top: 0;\n        /*color: #333;*/\n        font-family: Tahoma, Arial, sans-serif;\n        text-decoration: none;\n    }\n    \n    .popup h3 a:hover {\n        color: #F0D041;\n    }\n    \n    .popup h3 a:active {\n        color: #F0D041;\n    }\n    \n    .popup .close {\n        position: absolute;\n        top: 20px;\n        right: 30px;\n        transition: all 200ms;\n        font-size: 30px;\n        font-weight: bold;\n        text-decoration: none;\n        color: #333;\n    }\n    \n    .popup .close:hover {\n        color: #F0D041;\n    }\n    \n    .popup .content {\n        background-color: #FFF;\n        overflow: auto;\n        /*padding-left: 13%;*/\n    }\n    \n    .content h5 {\n        left: 0;\n    }\n    \n    @media screen and (max-width: 700px) {\n        .box {\n            width: 70%;\n        }\n        .popup {\n            width: 70%;\n        }\n    }\n    \n    #textbox {\n        border: 1px solid black;\n    }\n    \n    #bttnsignin {\n        background-color: #F0D041;\n        margin-left: 25%;\n        border: 1px solid #F5F5F5;\n        color: #FFF;\n        text-align: center;\n        width: 100px;\n    }\n    \n    #right {\n        border-left: 1px solid #F5F5F5;\n    }\n    \n    .fieldgroup {\n        float: left;\n        width: auto;\n        margin-left: 3em;\n    }\n   \n    .one  {\n        color: #333;\n    }\n    .two {\n        color: #AFAFAF;\n    }\n    .three{\n        width:30%;\n    }\n    .four{\n        width:70%;\n    }\n\n      "

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = "#left{\n\tbackground-color: #FFF;\n\theight: 1850px;\n\tborder: 1px solid #D2D2D2;\n\n\t\n}\n#ADD{\n    color: #000;\n    background-color: #F0D041;\n    border: 1px solid #818181;\n    height: 30px;\n}\n#right{\n\tpadding: 0;\n}\n#top{\n\theight: 200px;\n\tbackground-color: #FFF;\n\tborder: 1px solid #D2D2D2;\n}ul{ \n    /*text-align:center;*/\n    padding: 0;\n    margin: 0; \n}ul li {\n    position: relative;\n    text-align: center;\n    display: inline-block;\n    vertical-align: top;\n}#content ul li #each {\n   display:block;\n   margin:20px 0 10px 40px;\n   padding:3px 10px;\n   background:#FFF;\n   color:#000;\n   text-decoration:none;\n   line-height:1.3em;\n   height: 360px;\n   width:250px;\n}\n#content{\n\tmargin-left: 20px;\n}\n\n#content ul li #each:hover {\n   background:#F0D041;\n   color:#fff;\n}\n#seemore{\n    color: #CACACA;\n    background-color: #FFF;\n    border: 1px solid #818181;\n    height: 30px;\n}h3{\n    margin-top: 3px;\n    font-size: 100%;\n}"

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = "#bestseller{\n    margin: 0 30px 0 30px;\n}\n.col-lg-4{\n    height: 300px;\n    border: 2px solid blue;\n    padding: 0;\n    margin: 0;\n}\n#seemore{\n    color: #CACACA;\n    background-color: #FFF;\n    border: 1px solid #818181;\n    height: 30px;\n}\n#ADD{\n    color: #000;\n    background-color: #F0D041;\n    border: 1px solid #818181;\n    height: 30px;\n}\n h3{\n    margin: 0;\n    font-size: 100%;\n}\n\n#button{\n    text-align: center;\n    margin: 2% 0 2% 0;\n    padding: 0;\n}\nul{ \n    /*text-align:center;*/\n    padding: 0;\n    margin: 0; \n}\n\n/*#centeredmenu ul li a {\n   display:block;\n   margin:20px 0 0 40px;\n   padding:3px 10px;\n   background:#FFF;\n   color:#000;\n   text-decoration:none;\n   line-height:1.3em;\n   height: 360px;\n   width:250px;\n}\n\n#centeredmenu ul li a:hover {\n   background:#F0D041;\n   color:#fff;\n}*/\n#centeredmenu ul li #each {\n   display:block;\n   margin:20px 0 0 40px;\n   padding:3px 10px;\n   background:#FFF;\n   color:#000;\n   text-decoration:none;\n   line-height:1.3em;\n   height: 360px;\n   width:250px;\n}\n\n#centeredmenu ul li #each:hover {\n   background:#F0D041;\n   color:#fff;\n}\nul li {\n    position: relative;\n    text-align: center;\n    display: inline-block;\n    vertical-align: top;\n} \n\n\nheader {\n    display:table;\n    width:100%;\n    max-width:100%;\n}\nheader div {\n    display:table-row;\n    line-height:1.5em;\n    font-size:2em;\n    white-space:nowrap;\n}\nheader h1 {\n    font-size:0.75em; \n    overflow:hidden;\n    display:table-cell;\n    vertical-align:middle;\n    width:1px;\n}\nheader span.spacer {\n    display:table-cell;\n}\nheader h1 {\n    padding:0 15px;\n}\nheader span.spacer:after {\n    display:inline-block;\n    width:100%;\n    content:\".\";\n    font-size:0;\n    color:transparent;\n    height:2px;\n    background:#CACACA;\n    vertical-align:middle;\n    position:relative;\n    top:-1px;\n}\n"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = "#content{\n\toverflow-x: hidden;\n\theight: 800px;\n\tbackground-color: #FFF;\n\tmargin:5%;\n\t border: 1px solid #D2D2D2;\n}\n#cart{\n\tmargin-left: 3%;\n\tmargin-bottom: 5%;\n}\n#proincart{\n\tborder: 1px solid #D2D2D2;\n\tmargin: 5px;\n\tpadding: 2%;\n}#ADD{\n    color: #000;\n    background-color: #F0D041;\n    border: 1px solid #818181;\n    height: 30px;\n} \n#addto{\n    margin: 0;\n    font-size: 100%;\n}ul{ \n    /*text-align:center;*/\n    padding: 0;\n    margin: 0; \n}\n\n#centeredmenu ul li #each {\n   display:block;\n   margin:20px 0 0 40px;\n   padding:3px 10px;\n   background:#FFF;\n   color:#000;\n   text-decoration:none;\n   line-height:1.3em;\n   height: 360px;\n   width:250px;\n}\n\n#centeredmenu ul li #each:hover {\n   background:#F0D041;\n   color:#fff;\n}\nul li {\n    position: relative;\n    text-align: center;\n    display: inline-block;\n    vertical-align: top;\n} \n#col{\n\tmargin-top: 15%;\n}"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "#imgeach{\n\twidth: 400px;\n\theight: 400px;\n\t margin: 10%;\n}\n#pic{\n\tborder: 2px solid black;\n\t text-align: center;\n}\n#detail{\n\t/*background-color: #F5F5F5;*/\n}\n#content{\n\twidth: 600px;\n\theight: 400px;\n\tmargin: 7%;\n\tborder: 1px solid #D2D2D2;\n\tbackground-color: #FFF;\n}\n#addtocart{\n\tbackground-color: #F0D041;\n\tcolor: black;\n\tborder: 1px solid #D2D2D2;\n\tborder-radius: 10px;\n\twidth: 30%;\n\theight: 50px;\n\tright: 100px;\n\tposition: absolute;\n\tbottom: 60px;\n}\n#imgcart{\n\twidth: 20%;\n}\n#review{\n\tborder: 1px solid #D2D2D2;\n\tbackground-color: #FFF;\n\tmargin: 2%;\n}\n#writereview{\n\tbackground-color: #F0D041;\n\tcolor: black;\n\tborder: 1px solid #D2D2D2;\n\tborder-radius: 10px;\n\twidth: 50%;\n\theight: 50px;\n\tbottom: 0;\n}\n#sarm{\n\tborder: 1px solid #D2D2D2;\n\ttext-align: left;\n}\n#comment{\n\tborder: 1px solid #D2D2D2;\n\twidth: 80%;\n\tmargin-left: 5%;\n\t /*display: inline;*/\n\t/*float: left;*/\n}\n#loop{\n\t/*text-decoration: none;*/\n}\nul li {\n    position: relative;\n    text-align: center;\n    /*display: inline-block;*/\n    vertical-align: top;\n    list-style-type: none;\n} "

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = ".overlay {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        background: rgba(0, 0, 0, 0.7);\n        transition: opacity 500ms;\n        visibility: hidden;\n        opacity: 0;\n    }\n    \n    .overlay:target {\n        visibility: visible;\n        opacity: 1;\n    }\n    \n    .popup {\n        margin: 70px auto;\n        padding: 20px;\n        background: #F5F5F5;\n        border-radius: 5px;\n        width: 30%;\n        position: relative;\n        transition: all 5s ease-in-out;\n    }\n    \n    .popup h3 a {\n        margin-top: 0;\n        color: #333;\n        font-family: Tahoma, Arial, sans-serif;\n        text-decoration: none;\n    }\n    \n    .popup h3 a:hover {\n        color: #F0D041;\n    }\n    \n    .popup h3 a:after {\n        color: #F0D041;\n    }\n    \n    .popup .close {\n        position: absolute;\n        top: 20px;\n        right: 30px;\n        transition: all 200ms;\n        font-size: 30px;\n        font-weight: bold;\n        text-decoration: none;\n        color: #333;\n    }\n    \n    .popup .close:hover {\n        color: #F0D041;\n    }\n    \n    .content {\n        background-color: #FFF;\n        overflow: auto;\n        padding-left: 13%;\n    }\n    \n    .content h5 {\n        left: 0;\n    }\n    \n    @media screen and (max-width: 700px) {\n        .box {\n            width: 70%;\n        }\n        .popup {\n            width: 70%;\n        }\n    }\n#textbox {\n        border: 1px solid black;\n        width: 80%;\n    }\n    \n    #bttnsignin {\n        background-color: #F0D041;\n        margin-left: 25%;\n        border: 1px solid #F5F5F5;\n        color: #FFF;\n        text-align: center;\n        height: 40px;\n        width: 100px;\n    }\n    \n    .content a{\n        text-decoration: none;\n    }"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = ".navbar-default{\n\tmargin-bottom: 0px;\n}\n.navbar-nav{\n\tmargin: 0;\n}\n#imgcart{\n\twidth: 10%;\n\tmargin-top: 2%;\n\n}\n\n.navbar-right {\ntext-align: right;\nwidth: 40%;\n/*padding-left:15%;*/\n}\n\n"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "#newproduct{\n    margin: 0 30px 0 30px;\n}\n.col-lg-4{\n    height: 300px;\n    border: 2px solid blue;\n    padding: 0;\n    margin: 0;\n}\n#seemore{\n    color: #CACACA;\n    background-color: #FFF;\n    border: 1px solid #818181;\n    height: 30px;\n\n}\n\n#ADD{\n    color: #000;\n    background-color: #F0D041;\n    border: 1px solid #818181;\n    height: 30px;\n}\n h3{\n    margin: 0;\n    font-size: 100%;\n}\n\n#button{\n\n    text-align: center;\n    margin: 2% 0 2% 0;\n    padding: 0;\n}\nul{ \n    /*text-align:center;*/\n    padding: 0;\n    margin: 0; \n}\n\n#centeredmenu ul li #each {\n   display:block;\n   margin:20px 0 0 40px;\n   padding:3px 10px;\n   background:#FFF;\n   color:#000;\n   text-decoration:none;\n   line-height:1.3em;\n   height: 360px;\n   width:250px;\n}\n\n#centeredmenu ul li #each:hover {\n   background:#F0D041;\n   color:#fff;\n}\nul li {\n    position: relative;\n    text-align: center;\n    display: inline-block;\n    vertical-align: top;\n} \n\n\nheader {\n    display:table;\n    width:100%;\n    max-width:100%;\n}\nheader div {\n    display:table-row;\n    line-height:1.5em;\n    font-size:2em;\n    white-space:nowrap;\n}\nheader h1 {\n    font-size:0.75em; \n    overflow:hidden;\n    display:table-cell;\n    vertical-align:middle;\n    width:1px;\n}\nheader span.spacer {\n    display:table-cell;\n}\nheader h1 {\n    padding:0 15px;\n}\nheader span.spacer:after {\n    display:inline-block;\n    width:100%;\n    content:\".\";\n    font-size:0;\n    color:transparent;\n    height:2px;\n    background:#CACACA;\n    vertical-align:middle;\n    position:relative;\n    top:-1px;\n}\n"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = ".overlay {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        background: rgba(0, 0, 0, 0.7);\n        transition: opacity 500ms;\n        visibility: hidden;\n        opacity: 0;\n    }\n    \n    .overlay:target {\n        visibility: visible;\n        opacity: 1;\n    }\n    \n    .popup {\n        margin: 70px auto;\n        padding: 20px;\n        background: #F5F5F5;\n        border-radius: 5px;\n        width: 30%;\n        position: relative;\n        transition: all 5s ease-in-out;\n    }\n    \n    .popup h3 a {\n        margin-top: 0;\n        color: #333;\n        font-family: Tahoma, Arial, sans-serif;\n        text-decoration: none;\n    }\n    \n    .popup h3 a:hover {\n        color: #F0D041;\n    }\n    \n    .popup h3 a:after {\n        color: #F0D041;\n    }\n    \n    .popup .close {\n        position: absolute;\n        top: 20px;\n        right: 30px;\n        transition: all 200ms;\n        font-size: 30px;\n        font-weight: bold;\n        text-decoration: none;\n        color: #333;\n    }\n    \n    .popup .close:hover {\n        color: #F0D041;\n    }\n    \n    .content {\n        background-color: #FFF;\n        overflow-x: hidden;\n        padding: 2% 6% 2% 6%;\n\n    }\n    \n    .content h5 {\n        left: 0;\n    }\n    \n    @media screen and (max-width: 700px) {\n        .box {\n            width: 70%;\n        }\n        .popup {\n            width: 70%;\n        }\n    }\n    #textbox {\n        border: 1px solid black;\n        width: 90%;\n    }\n    \n    #bttnsignin {\n        background-color: #F0D041;\n        margin-left: 43%;\n        border: 1px solid #F5F5F5;\n        color: #FFF;\n        height: 40px;\n        width: 100px;\n    }\n    #right {\n        /*padding-top: 20%;*/\n        margin-top: 5%;\n        border-left: 1px solid #F5F5F5;\n    }\n    \n    .fieldgroup {\n        float: left;\n        width: auto;\n        margin-left: 3em;\n    }"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "#review{\n    margin: 0 30px 0 30px;\n}\n.col-lg-4{\n    height: 300px;\n    border: 2px solid blue;\n    padding: 0;\n    margin: 0;\n}\n#seemore{\n    color: #CACACA;\n    background-color: #FFF;\n    border: 1px solid #818181;\n    height: 30px;\n}\n h3{\n    margin: 0;\n    font-size: 100%;\n}\n\n#button{\n    text-align: center;\n    margin: 2% 0 2% 0;\n    padding: 0;\n}\nul{ \n    /*text-align:center;*/\n    padding: 0;\n    margin: 0; \n}\n\n#centeredmenu ul li #each {\n   display:block;\n   margin:20px 0 0 40px;\n   padding:3px 10px;\n   background:#FFF;\n   color:#000;\n   text-decoration:none;\n   line-height:1.3em;\n   height: 360px;\n   width:250px;\n}\n\n#centeredmenu ul li #each:hover {\n   background:#F0D041;\n   color:#fff;\n}\n\nul li {\n    position: relative;\n    text-align: center;\n    display: inline-block;\n    vertical-align: top;\n} \n\n\nheader {\n    display:table;\n    width:100%;\n    max-width:100%;\n}\nheader div {\n    display:table-row;\n    line-height:1.5em;\n    font-size:2em;\n    white-space:nowrap;\n}\nheader h1 {\n    font-size:0.75em; \n    overflow:hidden;\n    display:table-cell;\n    vertical-align:middle;\n    width:1px;\n}\nheader span.spacer {\n    display:table-cell;\n}\nheader h1 {\n    padding:0 15px;\n}\nheader span.spacer:after {\n    display:inline-block;\n    width:100%;\n    content:\".\";\n    font-size:0;\n    color:transparent;\n    height:2px;\n    background:#CACACA;\n    vertical-align:middle;\n    position:relative;\n    top:-1px;\n}\n"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "<style type=\"text/css\">\n\t#ad{\n\tmargin: 0;\n\tpadding: 0;\n\t}\n\t#ad1{\n\tborder: 2px solid red;\n\theight: 300px;\n\tmargin: 0;\n\tpadding: 0;\n\t}\n\t#ad2,#ad3{\n\tborder: 2px solid pink;\n\theight: 150px;\n\t\n\t}\n\t/*#ad3{\n\tborder: 2px solid yellow;\n\theight: 125px;\n\t\n\t}*/\n</style>\n<div class=\"row\" id=\"ad\">\n\t<div class=\"col-lg-7\" id=\"ad1\">\n\t\t1\n\t\t<img src=\"\">\n\t</div>\n\t<div class=\"col-lg-5\" id=\"ad\">\n\t\t\t<div id=\"ad2\"  >\n\t\t\t2\n\t\t\t<img src=\"\">\n\t\t\t</div>\n\t\t\t<div id=\"ad3\"  >\n\t\t\t3\n\t\t\t<img src=\"\">\n\t\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "<p>\n  allpro works!\n</p>\n"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div id=\"header\">\n        <h3 id=\"textheader\"><a href=\"#popup1\"(click)=\"toggleExists()\"  \n            (click)=\"toggleExists3()\">register / login</a></h3>\n        <img id=\"imgheader\" src=\"assets/lo.png\">\n    </div>\n    <div id=\"body\">\n        <app-navbar></app-navbar>\n        <router-outlet></router-outlet>\n    </div>\n    <div id=\"footer\">\n        <div class=\"row\">\n            <div class=\"col-md-6\" style=\"text-align: left;\">\n                <p id=\"copyright\">Copyright &copy; 2017 GBBeer&trade; - gmine&boomba beer service |Privacy Policy</p>\n            </div>\n            <div class=\"col-md-6\" id=\"copyright2\">\n                <ul class=\"social-network social-circle\">\n                    <li><a href=\"#\" class=\"icoFacebook\" title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n                    <li><a href=\"#\" class=\"icoTwitter\" title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n                    <li><a href=\"#\" class=\"icoGoogle\" title=\"Google +\"><i class=\"fa fa-google-plus\"></i></a></li>\n                    <li><a href=\"#\" class=\"icoig\" title=\"ig\"><i class=\" fa fa-instagram\"></i></a></li>\n                    <li><a href=\"#\" class=\"icoLinkedin\" title=\"Linkedin\"><i class=\"fa fa-github-alt\"></i></a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"popup1\" class=\"overlay\">\n    <div class=\"popup\" [ngClass]=\"{'three': pop, 'four': !pop}\">\n        <h3>\n            <a  id=\"login\" [ngClass]=\"{'one': check, 'two': !check}\"\n                            (click)=\"toggleExists3()\"\n                            (click)=\"toggleExists()\"  >Login</a>|\n\n            <a  id=\"regis\" [ngClass]=\"{'one': !check, 'two': check}\"\n                            (click)=\"toggleExists4()\"\n                           (click)=\"toggleExists2()\" >Register</a>\n        </h3>\n        <a class=\"close\" href=\"#\">&times;</a>\n        <app-login *ngIf=\"exists\" ></app-login>\n        <app-register *ngIf=\"!exists\"></app-register>\n    </div>\n</div>\n<!-- <some-element [ngClass]=\"'first second'\">...</some-element>\n<some-element [ngClass]=\"['first', 'second']\">...</some-element>\n<some-element [ngClass]=\"{'first': true, 'second': true, 'third': false}\">...</some-element>\n<some-element [ngClass]=\"stringExp|arrayExp|objExp\">...</some-element>\n<some-element [ngClass]=\"{'class1 class2 class3' : true}\">...</some-element> -->\n"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-3\" id=\"left\" >k</div>\n    <div class=\"col-lg-9\" id=\"right\">\n        <div id=\"top\">1</div>\n        <div id=\"content\">\n            <ul>\n                <li *ngFor=\"let all of allProduct; let i = index; trackBy: trackByFn\">\n                    <div id=\"each\">\n                        <a [routerLink]=\"['/each']\">\n                            <img src=\"\" style=\"width: 170px;height: 200px ;margin-top: 20px;\">\n                            <br>\n                            <br>\n                        </a>\n                         <h3>{{all.name}}</h3>\n                        <h3>{{all.price}}</h3>\n                        <br>\n                        <button id=\"ADD\" (click)=\"getId(all._id)\">\n                            <h3>ADD TO CART</h3>  </button>\n                    </div>\n                </li>\n              \n            </ul>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "<div id=\"bestseller\">\n\t<header>\n\t\t<div>\n\t\t\t<span class=\"spacer\"></span>\n\t\t\t\t<h1>BEST SELLERS</h1>\n\t\t\t<span class=\"spacer\"></span>\n\t\t</div>\n\t</header>\n<div id=\"centeredmenu\">\n   <ul>\n      <li>\n      <div id=\"each\">\n      <a [routerLink]=\"['/each']\">\n\t\t\t<img src=\"\" style=\"width: 170px;height: 200px ;margin-top: 20px;\"><br><br>\n      </a>\n     \t\t <h3>$$$$</h3><br>\n      \t\t<button id=\"ADD\"><h3 >ADD TO CART</h3></button>\n      </div>\n\n      </li>\n\n     \n     <!--  <li><a href=\"#\" >Tab two</a></li>\n      <li><a href=\"#\">Tab three</a></li>\n      <li><a href=\"#\">Tab four</a></li> -->\n   </ul>\n</div>\n\t<div id=\"button\">\n\t\t<button id=\"seemore\" [routerLink]=\"['/beer']\"><h3 >SEE MORE</h3></button>\n\t</div>\n</div>\n\n\n"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "<app-advertise></app-advertise>\n<div id=\"content1\">\n    <div id=\"content\">\n        <h3 id=\"cart\"><b>CART</b></h3>\n        <div class=\"row\">\n            <div class=\"col-lg-4\"></div>\n            <div class=\"col-lg-2\">Description</div>\n            <div class=\"col-lg-2\">Price</div>\n            <div class=\"col-lg-2\">amount</div>\n            <div class=\"col-lg-2\">Total</div>\n        </div>\n        <div id=\"proincart\">\n            <div class=\"row\">\n            <div class=\"col-lg-4\">\n            \t<div id=\"centeredmenu\">\n                <ul>\n                    <li >\n                        <div id=\"each\" >\n                            <a href=\"\">\n                                <img src=\"\" style=\"width: 170px;height: 200px ;margin-top: 20px;\">\n                                <br>\n                                <br>\n                            </a>\n                            <h3>{{product.name}} .</h3>\n                            <br>\n                            <h3>{{product.price}} Bath.</h3>\n                            <br>\n                            <button id=\"ADD\">\n                                <h3 id=\"addto\">ADD TO CART</h3></button>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n            </div>\n            <div class=\"col-lg-2\" id=\"col\">test</div>\n            <div class=\"col-lg-2\" id=\"col\">test</div>\n            <div class=\"col-lg-2\" id=\"col\">test</div>\n            <div class=\"col-lg-2\" id=\"col\">test</div>\n        </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "<p>\n  catagory works!\n</p>\n"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"maincontent\">\n    <div class=\"col-lg-5\" id=\"pic\">\n        <img src=\"\" id=\"imgeach\">\n    </div>\n    <div class=\"col-lg-7\" id=\"detail\">\n        <div id=\"content\">\n            <button id=\"addtocart\"><b>ADD TO CART </b><img id=\"imgcart\" src=\"assets/cart.png\"></button>\n        </div>\n    </div>\n</div>\n<hr>\n<div id=\"review\">\n    <div class=\"row\">\n        <div class=\"col-lg-1\"></div>\n        <div class=\"col-lg-8\">\n            <h3><b>REVIEW</b></h3>\n            <ul>\n                <li>\n                    <div class=\"row\">\n                        <div class=\"col-lg-1\">\n                            <h5>name</h5>\n                            <h5>date</h5></div>\n                        <div class=\"col-lg-7\">\n                            <h4>comment</h4></div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"row\">\n                        <div class=\"col-lg-1\">\n                            <h5>name</h5>\n                            <h5>date</h5></div>\n                        <div class=\"col-lg-7\">\n                            <h4>comment</h4></div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"row\">\n                        <div class=\"col-lg-1\">\n                            <h5>name</h5>\n                            <h5>date</h5></div>\n                        <div class=\"col-lg-7\">\n                            <h4>comment</h4></div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"row\">\n                        <div class=\"col-lg-1\">\n                            <h5>name</h5>\n                            <h5>date</h5></div>\n                        <div class=\"col-lg-7\">\n                            <h4>comment</h4></div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n        <div class=\"col-lg-3\" id=\"sarm\">\n            <button id=\"writereview\"><b>WRITE REVIEW</b></button>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<app-advertise></app-advertise>\n<app-bestseller></app-bestseller>\n\n<app-newproduct></app-newproduct>\n<app-review></app-review>\n"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n        <h5><b>Username</b></h5>\n        <input id=\"textbox\" type=\"text\" name=\" \" placeholder=\" Username\">\n        <h5><b>Password</b></h5>\n        <input id=\"textbox\" type=\"Password\" name=\" \" placeholder=\" Password\">\n        <h6><a href=\"\" >forget password?</a></h6><br>\n        <button id=\"bttnsignin\">Sign in</button>\n        <br><br>\n</div>"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "\n      <nav class=\"navbar navbar-default\" >\n        <div class=\"container-fluid\">\n          <div id=\"navbar\" class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n              <li class=\"\"><a [routerLink]=\"['']\"><h4>HOME</h4></a></li>\n              <li><a [routerLink]=\"['/beer']\"><h4>BEER</h4></a></li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n               <li *ngIf=\"!cart\"><img [routerLink]=\"['/cart']\"   id=\"imgcart\" src=\"assets/cart.png\"></li>\n               <li *ngIf=\"cart\"><img [routerLink]=\"['/cart']\"   id=\"imgcart\" src=\"assets/redcart.png\"></li>\n            </ul>\n          </div>\n        </div>\n      </nav>\n    "

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "<div id=\"newproduct\">\n\t<header>\n\t\t<div>\n\t\t\t<span class=\"spacer\"></span>\n\t\t\t\t<h1>NEW PRODUCTS</h1>\n\t\t\t<span class=\"spacer\"></span>\n\t\t</div>\n\t</header>\n\n\n\n<div id=\"centeredmenu\">\n  <ul >\n      <li *ngFor=\"let product of newProduct; let i = index; trackBy: trackByFn\">\n      <div id=\"each\" *ngIf = \"i<4\">\n      <a href=\"\">\n\t\t\t<img src=\"\" style=\"width: 170px;height: 200px ;margin-top: 20px;\"><br><br>\n      </a>\n      \t <h3>{{product.name}} .</h3><br>\n     \t\t <h3>{{product.price}} Bath.</h3><br>\n      \t\t<button id=\"ADD\"><h3 >ADD TO CART</h3></button>\n      </div>\n      </li>\n   </ul>\n</div>\n\n\n\t<div id=\"button\">\n\t\t<button id=\"seemore\" [routerLink]=\"['/beer']\"><h3 >SEE MORE</h3></button>\n\t</div>\n</div>\n\n\n"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n    <div class=\"row\">\n        <div class=\"col-lg-6\">\n            <h5><b>Firstname</b></h5>\n            <input id=\"textbox\"  [(ngModel)]=\"firstname\" type=\"text\" name=\"\" placeholder=\" Firstname\">\n            <h5><b>Lastname</b></h5>\n            <input id=\"textbox\" [(ngModel)]=\"lastname\" type=\"text\" name=\"\" placeholder=\" Lastname\">\n            <h5><b>Username</b></h5>\n            <input id=\"textbox\" [(ngModel)]=\"username\" type=\"text\" name=\"\" placeholder=\" Username\">\n            <h5><b>E-Mail</b></h5>\n            <input id=\"textbox\" [(ngModel)]=\"email\" type=\"text\" name=\"\" placeholder=\" E-Mail\">\n            <h5><b>Password</b></h5>\n            <input id=\"textbox\" [(ngModel)]=\"password\" type=\"Password\" name=\"\" placeholder=\" Password\">\n            <br>\n            <br>\n        </div>\n        <div class=\"col-lg-6\" id=\"right\">\n            <h5><b>Gender</b></h5>\n            <div class=\"fieldgroup\">\n                <input type=\"radio\"  [(ngModel)]=\"result\" name=\"payment_method\" value=\"Bill Me\">\n                <label for=\"payment1\"> Male\n                </label>\n            </div>\n            <div class=\"fieldgroup\">\n                <input type=\"radio\" [(ngModel)]=\"result\" name=\"payment_method\" value=\"Bill Me\">\n                <label for=\"payment2\"> FeMale</label>\n            </div>\n            <br>\n            <div class=\"form-group\">\n                <h5><b>Date of birth</b></h5>\n                <input #expDate type=\"date\" name=\"sdate\" value=\"\" maxlength=\"15\" class=\"form-control required\" title=\"Please fill Start Date\">\n            </div>\n            <h5><b>Address</b></h5>\n    <textarea rows=\"4\" cols=\"37\" [(ngModel)]=\"address\" placeholder=\"Address\" value=\"gmine\"></textarea>\n        </div>\n    </div>\n\n    <br>\n    <br>\n    <button id=\"bttnsignin\" (click) ='register(username,password,firstname,lastname,expDate.value,address,email)'>Register</button>\n</div>\n"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "<div id=\"review\">\n\t<header>\n\t\t<div>\n\t\t\t<span class=\"spacer\"></span>\n\t\t\t\t<h1>REVIEW</h1>\n\t\t\t<span class=\"spacer\"></span>\n\t\t</div>\n\t</header>\n\n\n\n<div id=\"centeredmenu\">\n   <ul >\n     <li>\n      <div id=\"each\">\n      <a href=\"\">\n\t\t\t<img src=\"\" style=\"width: 170px;height: 200px ;margin-top: 20px;\"><br><br>\n      </a>\n     \t\t <h3>$$$$</h3><br>\n     \t\t <span>star review</span><br>\n      \t\t<button id=\"seemore\"><h3 >ADD TO CART</h3></button>\n      </div>\n      </li>\n   </ul>\n</div>\n\n\n\t<div id=\"button\">\n\t\t<button id=\"seemore\" [routerLink]=\"['/beer']\"><h3 >SEE MORE</h3></button>\n\t</div>\n</div>\n\n\n"

/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(389);


/***/ })

},[720]);
//# sourceMappingURL=main.bundle.map