webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr;\r\n    -ms-grid-rows: 200px;\r\n        grid-template-rows: 200px;\r\n    grid-template-areas: 'header logo';\r\n    grid-column-gap: 20px;\r\n    grid-row-gap: 30px;\r\n    -ms-grid-column-align: center;\r\n        justify-items: center;\r\n}\r\n\r\n.title {\r\n    -ms-grid-column: 1;\r\n        grid-column: 1;\r\n}\r\n\r\n.logo {\r\n    -ms-grid-column: 2;\r\n        grid-column: 2;\r\n    width: 150px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\n<header class=\"container\">\n  <h1 class=\"title\">\n    Welcome to {{title}}!\n  </h1>\n  <img src=\"https://lh4.googleusercontent.com/-v0soe-ievYE/AAAAAAAAAAI/AAAAAAADwkE/KyrKDjjeV1o/photo.jpg\" alt=\"logo\" class=\"logo\">\n</header>\n<search-params></search-params>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Custom Google Search';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_params_searchParams__ = __webpack_require__("../../../../../src/app/search-params/searchParams.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_params_imageSearch_service__ = __webpack_require__("../../../../../src/app/search-params/imageSearch.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__search_params_searchParams__["a" /* SearchParams */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* JsonpModule */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* NO_ERRORS_SCHEMA */]],
        providers: [__WEBPACK_IMPORTED_MODULE_8__search_params_imageSearch_service__["a" /* ImageSearchService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/search-params/imageSearch.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageSearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageSearchService = (function () {
    function ImageSearchService(http) {
        this.http = http;
        this.searchUrl = 'https://www.googleapis.com/customsearch/v1?'; // URL to web API
        this.apiKey = 'AIzaSyBbaPben2bvrrAHli5eDGEw1t4q58jSkSk'; // Use your API key here
        this.cx = '011828124882349175087:zujpxbgaedu'; // Custom Search Engine id (use your own here)
    }
    ImageSearchService.prototype.search = function (query) {
        return this.http.get(this.searchUrl + 'key=' + this.apiKey + '&cx=' + this.cx + '&searchType=image' + '&q=' + query)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ImageSearchService.prototype.extractData = function (res) {
        var searchResult = res.json();
        return searchResult.items || {};
    };
    ImageSearchService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return ImageSearchService;
}());
ImageSearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ImageSearchService);

var _a;
//# sourceMappingURL=imageSearch.service.js.map

/***/ }),

/***/ "../../../../../src/app/search-params/searchParams.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr;\r\n    -ms-grid-rows: auto;\r\n        grid-template-rows: auto;\r\n    grid-template-areas: 'product-img form';\r\n    grid-column-gap: 20px;\r\n    grid-row-gap: 30px;\r\n    -ms-grid-column-align: center;\r\n        justify-items: center;\r\n}\r\n\r\nmain {\r\n    width: 50%;\r\n}\r\n\r\n.products {\r\n    grid-area: product-img;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: 120px 120px;\r\n        grid-template-columns: 120px 120px;\r\n    -ms-grid-rows: (120px)[3];\r\n        grid-template-rows: repeat(3, 120px);\r\n    grid-auto-flow: row;\r\n    grid-gap: 10px;\r\n    padding-left: 0;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    grid-template-areas: \"main-img main-img\"\r\n    \"main-img main-img\"\r\n    \". .\"\r\n}\r\n\r\n.img-item-main {\r\n    grid-area: main-img;\r\n}\r\n\r\n.products li  {\r\n    list-style: none;\r\n    padding: 20px 20px 0 20px;\r\n    background-color: darkseagreen;\r\n}\r\n\r\n.products li img {\r\n    width: 100%;\r\n}\r\n\r\n.search-form-fields form{\r\n    grid-area: form;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: minmax(auto, 500px);\r\n        grid-template-columns: minmax(auto, 500px);\r\n    grid-auto-flow: row;\r\n}\r\n\r\n\r\n\r\n.search-results {\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -ms-grid-column-span: 2;\r\n        grid-column-end: span 2;\r\n    width: 80%;\r\n}\r\n\r\n.search-results h2 {\r\n    text-align: center;\r\n}\r\n\r\n.search-results .images {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    -ms-grid-columns: (minmax(200px, 1fr))[auto-fill];\r\n        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\r\n    grid-gap: 20px;\r\n}\r\n\r\n.search-results .images li  {\r\n    list-style: none;\r\n    padding: 10px;\r\n    background-color: beige;\r\n    border-radius: 5%;\r\n}\r\n\r\n.search-results .images li img {\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-params/searchParams.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\r\n  <main>\r\n    <md-card>\r\n      <md-card-title>Product images</md-card-title>\r\n      <md-card-content>\r\n        <ul class=\"products\">\r\n          <li class=\"img-item-main\"><img src=\"https://www.band-aid.com/sites/bandaid_us/files/styles/tout_image/public/header-page-1-5.png?itok=UUreTcxq\" alt=\"product\"></li>\r\n          <li><img src=\"https://www.band-aid.com/sites/bandaid_us/files/styles/tout_image/public/header-page-1-5.png?itok=UUreTcxq\" alt=\"product\"></li>\r\n          <li><img src=\"https://www.band-aid.com/sites/bandaid_us/files/styles/tout_image/public/header-page-1-5.png?itok=UUreTcxq\" alt=\"product\"></li>\r\n          <li><img src=\"https://www.band-aid.com/sites/bandaid_us/files/styles/tout_image/public/header-page-1-5.png?itok=UUreTcxq\" alt=\"product\"></li>\r\n          <li><img src=\"https://www.band-aid.com/sites/bandaid_us/files/styles/tout_image/public/header-page-1-5.png?itok=UUreTcxq\" alt=\"product\"></li>\r\n        </ul>\r\n      </md-card-content>\r\n    </md-card>\r\n\r\n  </main>\r\n  <aside class=\"search-form-fields\">\r\n    <md-card>\r\n      <md-card-title>Product Details</md-card-title>\r\n      <md-card-content>\r\n        <form>\r\n          <md-input-container>\r\n            <input mdInput placeholder=\"Product Category / E-class\"\r\n                   type=\"text\"\r\n                   required id=\"category\"\r\n                   [(ngModel)]=\"product.category\"\r\n                   name=\"Product Category / E-class\">\r\n          </md-input-container>\r\n\r\n          <md-input-container>\r\n            <input mdInput placeholder=\"Product name\"\r\n                   type=\"text\"\r\n                   [(ngModel)]=\"product.name\"\r\n                   required id=\"name\"\r\n                   name=\"Product name\">\r\n          </md-input-container>\r\n\r\n          <md-input-container>\r\n            <input mdInput placeholder=\"SKU\"\r\n                   type=\"text\"\r\n                   [(ngModel)]=\"product.sku\"\r\n                   required id=\"sku\"\r\n                   name=\"SKU\">\r\n          </md-input-container>\r\n\r\n          <md-input-container>\r\n            <input mdInput\r\n                   placeholder=\"OEM Part Number\"\r\n                   type=\"text\"\r\n                   [(ngModel)]=\"product.oem\"\r\n                   required id=\"oem\"\r\n                   name=\"OEM Part Number\">\r\n          </md-input-container>\r\n\r\n          <md-input-container>\r\n            <input mdInput\r\n                   placeholder=\"Brand\"\r\n                   type=\"text\"\r\n                   [(ngModel)]=\"product.brand\"\r\n                   required\r\n                   id=\"brand\"\r\n                   name=\"Brand\">\r\n          </md-input-container>\r\n\r\n          <md-input-container>\r\n            <input mdInput\r\n                   placeholder=\"Search Query\"\r\n                   type=\"text\"\r\n                   value=\"{{product.name}} {{product.brand}} {{product.oem}} {{product.sku}}\"\r\n                   name=\"SearchQuery\">\r\n          </md-input-container>\r\n        </form>\r\n\r\n        <button md-raised-button type=\"submit\" (click)=\"getSearchQuery(); searchImages(searchQuery);\">Search Images</button>\r\n\r\n      </md-card-content>\r\n    </md-card>\r\n\r\n\r\n  </aside>\r\n</section>\r\n\r\n<section class=\"container \">\r\n  <article class=\"search-results\">\r\n    <h2>Suggested product images</h2>\r\n    <section class=\"images\">\r\n      <li *ngFor=\"let url of imageUrls\"><img src=\"{{url}}\" alt=\"product\"></li>\r\n    </section>\r\n\r\n  </article>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/search-params/searchParams.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imageSearch_service__ = __webpack_require__("../../../../../src/app/search-params/imageSearch.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchParams; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchParams = (function () {
    function SearchParams(imageSearchService) {
        this.imageSearchService = imageSearchService;
        this.imageUrls = [];
        this.product = {
            brand: '',
            sku: '',
            category: '',
            oem: '',
            name: ''
        };
    }
    SearchParams.prototype.getSearchQuery = function () {
        this.searchQuery = [this.product.name, this.product.brand, this.product.oem, this.product.sku].reduce(function (acc, val) {
            if (val !== '' || val) {
                return acc + '+' + val;
            }
            else {
                return acc + val;
            }
        });
    };
    SearchParams.prototype.searchImages = function (query) {
        var _this = this;
        if (query !== '') {
            this.imageSearchService.search(query)
                .subscribe(function (result) {
                if (result.length) {
                    var urls_1 = [];
                    result.forEach(function (item) {
                        if (item && item.link) {
                            urls_1.push(item.link);
                        }
                    });
                    _this.imageUrls = urls_1;
                }
            }, function (error) { return _this.errorMessage = error; });
        }
        else {
            alert('query is empty!');
        }
    };
    return SearchParams;
}());
SearchParams = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'search-params',
        template: __webpack_require__("../../../../../src/app/search-params/searchParams.html"),
        styles: [__webpack_require__("../../../../../src/app/search-params/searchParams.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__imageSearch_service__["a" /* ImageSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__imageSearch_service__["a" /* ImageSearchService */]) === "function" && _a || Object])
], SearchParams);

var _a;
//# sourceMappingURL=searchParams.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map