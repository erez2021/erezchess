(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+j1i":
/*!****************************************************!*\
  !*** ./src/app/pages/welcome/welcome.component.ts ***!
  \****************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function () { return ["test-level"]; };
const _c1 = function () { return ["home"]; };
class WelcomeComponent {
    constructor(router) {
        this.router = router;
        this.isDark = true;
    }
    signup() {
        this.isDark = false;
        this.router.navigateByUrl("home");
    }
    get darkOut() {
        return { 'light': !this.isDark };
    }
    get flyOut() {
        return { 'fly-out': !this.isDark };
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 9, vars: 5, consts: [[1, "dark", 3, "ngClass"], [1, "main-container"], [1, "welcome"], [1, "btn", "test-level", 3, "routerLink"], [1, "btn", "home-page", 3, "routerLink"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Test Your Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "OR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Go To Home-Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.darkOut);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".dark[_ngcontent-%COMP%] {\n  background-color: rgba(238, 221, 221, 0.7);\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 4;\n  position: fixed;\n  display: block;\n}\n\n.light[_ngcontent-%COMP%] {\n  position: unset;\n}\n\n.welcome[_ngcontent-%COMP%] {\n  z-index: 5;\n  margin: 0 auto;\n  margin-top: 200px;\n  margin-left: 35%;\n  width: 350px;\n  height: 350px;\n  position: absolute;\n  border: 1px solid black;\n  border-radius: 5px;\n  background-color: #524141;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  animation: show 1s;\n  transform: scale(1);\n}\n\n@keyframes show {\n  from {\n    opacity: 0;\n    transform: scale(0);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n.test-level[_ngcontent-%COMP%] {\n  width: 220px;\n}\n\n.home-page[_ngcontent-%COMP%] {\n  width: 220px;\n  background-color: cadetblue;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n@media (max-width: 540px) {\n  .welcome[_ngcontent-%COMP%] {\n    margin-top: 150px;\n    margin-left: 10%;\n    width: 300px;\n    height: 300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx3ZWxjb21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDRCxZQUFBO0VBQ0EsYUFBQTtFQUNDLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDQztFQUNJO0lBQ0ksVUFBQTtJQUNBLG1CQUFBO0VBRVA7RUFESztJQUNFLFVBQUE7SUFDQSxtQkFBQTtFQUdQO0FBQ0Y7O0FBQ0E7RUFDSSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsMkJBQUE7QUFFSjs7QUFDQTtFQUNJLGVBQUE7QUFFSjs7QUFDQTtFQUNJO0lBQ0ksaUJBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VBRU47QUFDRiIsImZpbGUiOiJ3ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhcmt7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2VlZGRkZCwgJGFscGhhOiAwLjcpO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogNDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5saWdodHtcclxuICAgIHBvc2l0aW9uOiB1bnNldCBcclxufVxyXG5cclxuLndlbGNvbWV7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNSU7XHJcbiAgIHdpZHRoOiAzNTBweDtcclxuICAgaGVpZ2h0OiAzNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCA2NSwgNjUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbmltYXRpb246IHNob3cgMXM7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gfVxyXG4gXHJcbiBAa2V5ZnJhbWVzIHNob3cge1xyXG4gICAgIGZyb217XHJcbiAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgfSB0byB7XHJcbiAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgfVxyXG4gfVxyXG5cclxuXHJcbi50ZXN0LWxldmVsIHtcclxuICAgIHdpZHRoOiAyMjBweDtcclxufVxyXG4uaG9tZS1wYWdlIHtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XHJcbiAgICAud2VsY29tZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgfSBcclxufSJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Erez\Desktop\ANGULAR\my-web\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "0rfa":
/*!*************************************************!*\
  !*** ./src/app/cmps/review/review.component.ts ***!
  \*************************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_review_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/review.service */ "4kQV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ReviewComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.reviews[ctx_r0.idx].opinion);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.reviews[ctx_r0.idx].name);
} }
class ReviewComponent {
    constructor(reviewService) {
        this.reviewService = reviewService;
        this.reviews = [];
        this.idx = 0;
    }
    ngOnInit() {
        this.reviewService.getReviews().subscribe((data) => {
            this.reviews = data;
        });
        this.interval = setInterval(() => {
            this.idx++;
            if (this.idx === 4)
                this.idx = 0;
        }, 5000);
    }
    nextReview() {
        clearInterval(this.interval);
        this.idx++;
        if (this.idx === 4)
            this.idx = 0;
    }
    ngOnDestroy() {
        this.interval = clearInterval;
    }
}
ReviewComponent.ɵfac = function ReviewComponent_Factory(t) { return new (t || ReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_review_service__WEBPACK_IMPORTED_MODULE_1__["ReviewService"])); };
ReviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviewComponent, selectors: [["app-review"]], decls: 10, vars: 1, consts: [["name", "reviews"], [1, "background"], ["href", "https://www.limudnaim.co.il/%D7%9E%D7%95%D7%A8%D7%94-%D7%A4%D7%A8%D7%98%D7%99/%D7%90%D7%A8%D7%96-%D7%94%D7%A8%D7%A9%D7%A7%D7%95%D7%91%D7%99%D7%A5", 2, "color", "white"], ["class", "review-container", 4, "ngIf"], ["src", "assets/icons/right-arrow2.png", 1, "arrow", 3, "click"], [1, "review-container"]], template: function ReviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reviews from my chess students");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "*Real reviews taken from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "limudnaim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ReviewComponent_div_8_Template, 6, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewComponent_Template_img_click_9_listener() { return ctx.nextReview(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviews && ctx.reviews.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".review-container[_ngcontent-%COMP%] {\n  width: 800px;\n  height: 300px;\n  padding: 20px;\n  margin: 0 auto;\n  text-align: right;\n  line-height: 1.5;\n}\n\n.background[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  padding-bottom: 100px;\n  background-color: #221d1d;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  margin-left: 750px;\n  cursor: pointer;\n}\n\n@media (max-width: 540px) {\n  .background[_ngcontent-%COMP%] {\n    position: relative;\n    max-width: 540px;\n    padding-top: 50px;\n    padding-bottom: 150px;\n  }\n\n  .review-container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n\n  .arrow[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 20px;\n    bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNBO0lBQ0ksa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EscUJBQUE7RUFDRjs7RUFDQTtJQUNFLGVBQUE7RUFFRjs7RUFBQTtJQUNJLGtCQUFBO0lBQ0YsV0FBQTtJQUNBLFlBQUE7RUFHRjtBQUNGIiwiZmlsZSI6InJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXZpZXctY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLmJhY2tncm91bmR7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzQsIDI5LCAyOSk7XHJcbn1cclxuXHJcbi5hcnJvd3tcclxuICAgIG1hcmdpbi1sZWZ0OiA3NTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XHJcbi5iYWNrZ3JvdW5kIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC13aWR0aDogNTQwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNTBweDtcclxuICB9XHJcbiAgLnJldmlldy1jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5hcnJvd3tcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbn0iXX0= */"] });


/***/ }),

/***/ "2TR/":
/*!***********************************************!*\
  !*** ./src/app/cmps/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/contact"]; };
class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 23, vars: 2, consts: [["name", "about"], [1, "background"], [1, "about"], [2, "color", "white", 3, "routerLink"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Qualified chess instructor from age 13. Own the title 'Master' from the Israeli chess association.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Playing for 'Hapoel Petah-Tikva' club for more than 25 years.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Have lots of experience with students in all ages. Teach at clubs, private lessons and groups.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Believe in fitting the most personal syllabus for each student.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Help and encourage my students to play on tournaments and league.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "If you want to know more please ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "contact me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "P.S - if you like my site and you want to hire my services as a developer you are welcome.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".about[_ngcontent-%COMP%] {\n  width: 900px;\n  height: 400px;\n  padding: 20px;\n  margin: 0 auto;\n  text-align: left;\n  line-height: 1.5;\n}\n\n.background[_ngcontent-%COMP%] {\n  padding-top: 50px;\n  padding-bottom: 100px;\n  background-color: #221d1d;\n  color: white;\n  text-align: center;\n}\n\n@media (max-width: 540px) {\n  .background[_ngcontent-%COMP%] {\n    position: relative;\n    max-width: 540px;\n    padding-top: 50px;\n    padding-bottom: 50px;\n    margin-left: unset;\n  }\n\n  .about[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBR0E7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFFQSxZQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFLQTtFQUNBO0lBQ0ksa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtFQUZGOztFQUlBO0lBQ0UsZUFBQTtJQUNBLFlBQUE7RUFERjtBQUNGIiwiZmlsZSI6ImFib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0e1xyXG4gICAgd2lkdGg6IDkwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG5cclxuLmJhY2tncm91bmR7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzNCwgMjksIDI5KTtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAxMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xyXG4uYmFja2dyb3VuZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXgtd2lkdGg6IDU0MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcclxuICB9XHJcbiAgLmFib3V0e1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "3vlP":
/*!*****************************************************!*\
  !*** ./src/app/cmps/beginner/beginner.component.ts ***!
  \*****************************************************/
/*! exports provided: BeginnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeginnerComponent", function() { return BeginnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_puzzle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/puzzle.service */ "Cd6q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function BeginnerComponent_div_5_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose the correct answer and click submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BeginnerComponent_div_5_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.puzzles[ctx_r3.count].solution.letter, " is the solution:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.puzzles[ctx_r3.count].explanation, "");
} }
function BeginnerComponent_div_5_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BeginnerComponent_div_5_div_8_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.radioChangeHandler($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r5.letter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", option_r5.img);
} }
const _c0 = function (a0) { return { "shake": a0 }; };
function BeginnerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BeginnerComponent_div_5_div_5_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BeginnerComponent_div_5_div_6_Template, 4, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function BeginnerComponent_div_5_Template_form_submit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.sendAnswer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BeginnerComponent_div_5_div_8_Template, 5, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BeginnerComponent_div_5_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.nextQuest(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BeginnerComponent_div_5_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.viewResult(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.puzzles[ctx_r0.count].question);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx_r0.puzzles[ctx_r0.count].isCorrect === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.puzzles[ctx_r0.count].img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.count === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isShowAnswer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.puzzles[ctx_r0.count].options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.isClicked)("disabled", !ctx_r0.isChosen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r0.isClicked || ctx_r0.count === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.count !== 4)("disabled", !ctx_r0.isClicked);
} }
const _c1 = function () { return ["/contact"]; };
function BeginnerComponent_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BeginnerComponent_div_6_div_7_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.useCoupon(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Use Coupon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("this is you code: ", ctx_r13.coupon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
} }
const _c2 = function () { return ["/test-level/intermediate"]; };
const _c3 = function () { return ["/test-level/advanced"]; };
function BeginnerComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your result is:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BeginnerComponent_div_6_div_7_Template, 5, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BeginnerComponent_div_6_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.playAgain(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Beginner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Intermediate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Advanced");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.score, "/5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.totalScore);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.score >= 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c3));
} }
const _c4 = function (a0) { return { "flipped": a0 }; };
class BeginnerComponent {
    constructor(puzzleService) {
        this.puzzleService = puzzleService;
        this.puzzles = [];
        this.count = 0;
        this.isShowAnswer = false;
        this.isClicked = false;
        this.isFlipped = false;
        this.isChosen = false;
        this.coupon = '';
        this.score = 0;
    }
    ngOnInit() {
        this.puzzleService.getPuzzles().subscribe((data) => {
            console.log(data);
            this.puzzles = data;
            this.coupon = this.puzzleService.makeId(6);
        });
    }
    sendAnswer() {
        if (this.count === 4 && this.isClicked === true)
            console.log('yes');
        this.isClicked = true;
        if (this.puzzles[this.count].answer === this.puzzles[this.count].solution.img) {
            new Audio('http://www.utc.fr/si28/ProjetsUpload/P2006_si28p004/flash_puzzle/sons/rush/crowd3.wav').play();
            this.puzzles[this.count].isCorrect = true;
            this.score++;
        }
        else {
            new Audio('https://rpg.hamsterrepublic.com/wiki-images/d/d7/Oddbounce.ogg').play();
            this.puzzles[this.count].isCorrect = false;
            this.isShowAnswer = true;
            this.puzzles[this.count].img = this.puzzles[this.count].solution.img;
        }
    }
    radioChangeHandler(event) {
        this.isChosen = true;
        this.puzzles[this.count].img = event.target.value;
        this.puzzles[this.count].answer = event.target.value;
    }
    nextQuest() {
        this.isChosen = false;
        this.isClicked = false;
        this.count++;
        this.isShowAnswer = false;
    }
    viewResult() {
        this.puzzles = [];
        this.isFlipped = true;
    }
    playAgain() {
        window.location.reload();
    }
    useCoupon() {
        localStorage.setItem('coupon', JSON.stringify(this.coupon));
    }
    get totalScore() {
        if (this.score === 5)
            return '😀 Perfect! you are not a beginner. try intermediate level.';
        if (this.score === 4)
            return '🙂 Good! you are not a beginner. try intermediate level.';
        if (this.score === 3)
            return 'Not bad but you need some more practice';
        if (this.score < 3)
            return '😕 Try again, you will be better next time';
    }
}
BeginnerComponent.ɵfac = function BeginnerComponent_Factory(t) { return new (t || BeginnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_puzzle_service__WEBPACK_IMPORTED_MODULE_1__["PuzzleService"])); };
BeginnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BeginnerComponent, selectors: [["app-beginner"]], decls: 7, vars: 5, consts: [[1, "page-container"], [1, "title"], [1, "main-card"], [1, "inner-card", 3, "ngClass"], ["class", "puzzle-section", 4, "ngIf"], ["class", "result-container", 4, "ngIf"], [1, "puzzle-section"], [1, "question"], [1, "img-container", 3, "ngClass"], ["alt", "board-img", 1, "puzzle-img", 3, "src"], ["class", "instructions", 4, "ngIf"], ["class", "show-answer", 4, "ngIf"], [3, "submit"], [4, "ngFor", "ngForOf"], [1, "btn", "submit", 3, "hidden", "disabled"], [1, "btn", "next", 3, "hidden", "click"], [1, "btn", "result", 3, "hidden", "disabled", "click"], [1, "instructions"], [1, "show-answer"], [1, "flex-no-space", "answers"], ["type", "radio", "name", "option", 1, "input-button", 3, "value", "change"], [1, "result-container"], [4, "ngIf"], [1, "btns-panel"], [1, "btn", "beginner", 3, "click"], [1, "btn", "intermediate", 3, "routerLink"], [1, "btn", "advanced", 3, "routerLink"], [1, "red"], [1, "btn", 3, "routerLink", "click"]], template: function BeginnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Beginner Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BeginnerComponent_div_5_Template, 15, 13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BeginnerComponent_div_6_Template, 15, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c4, ctx.isFlipped));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.puzzles && ctx.puzzles.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFlipped);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiZWdpbm5lci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "4kQV":
/*!********************************************!*\
  !*** ./src/app/services/review.service.ts ***!
  \********************************************/
/*! exports provided: ReviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewService", function() { return ReviewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ReviewService {
    // reviews: Array<Review> = [
    //   {name: 'tomer', opinion: 'לורם איפסום או בקיצור ליפסום הוא מלל מקובל וחסר משמעות המשמש "ממלא מקום" בעת עריכה, בתחום הדפוס, ההדפסה והפרסום. הטקסט משמש כלי לייצוג דפוס שאמור להתווסף למוצר הפרסום בעתיד. מדובר במללק '},
    //   {name: 'Yuval', opinion: 'לורם איפסום או בקיצור ליפסום הוא מלל מקובל וחסר משמעות המשמש "ממלא מקום" בעת עריכה, בתחום הדפוס, ההדפסה והפרסום. הטקסט משמש כלי לייצוג דפוס שאמור להתווסף למוצר הפרסום בעתיד. מדובר במלל ארוך במיוחד שניתן לבדוק '},
    //   {name: 'Lirit', opinion: 'לורם איפסום או בקיצור ליפסום הוא מלל מקובל וחסר משמעות המשמש "ממלא מקום" בעת עריכה, בתחום הדפוס, ההדפסה והפרסום. הטקסט משמש כלי לייצוג דפוס שאמור להתווסף למוצר הפרסום בעתיד. ק '},
    //   {name: 'Moshe', opinion: 'לורם איפסום או בקיצור ליפסום הוא מלל מקובל וחסר משמעות המשמש "ממלא מקום" בעת עריכה, בתחום הדפוס, ההדפסה והפרסום. הטקסט משמש כלי לייצוג דפוס שאמור להתווסף למוצר הפרסום בעתיד. מדובר במלל ארוך  '},
    // ]
    constructor(http) {
        this.http = http;
        this.url = 'https://erezchess.herokuapp.com';
    }
    getReviews() {
        return this.http.get(`${this.url}/reviews`);
    }
}
ReviewService.ɵfac = function ReviewService_Factory(t) { return new (t || ReviewService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ReviewService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReviewService, factory: ReviewService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "5YFy":
/*!**********************************************************!*\
  !*** ./src/app/pages/test-level/test-level.component.ts ***!
  \**********************************************************/
/*! exports provided: TestLevelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestLevelComponent", function() { return TestLevelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



function TestLevelComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Try to solve 4 out of 5 puzzles.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "You will win a coupon worth 50 NIS for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "a private lesson with me.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "One coupon per user");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "New students only");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["beginner"]; };
const _c1 = function () { return ["intermediate"]; };
const _c2 = function () { return ["advanced"]; };
class TestLevelComponent {
    constructor() {
        this.isShowDetails = false;
    }
    ngOnInit() {
    }
    showDetails() {
        this.isShowDetails = !this.isShowDetails;
    }
}
TestLevelComponent.ɵfac = function TestLevelComponent_Factory(t) { return new (t || TestLevelComponent)(); };
TestLevelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestLevelComponent, selectors: [["app-test-level"]], decls: 18, vars: 7, consts: [[1, "main-container", "full"], [1, "test-level-container"], [2, "color", "white", 3, "click"], ["class", "instuctions", 4, "ngIf"], [1, "btns-panel"], [1, "btn", "beginner", 3, "routerLink"], [1, "btn", "intermediate", 3, "routerLink"], [1, "btn", "advanced", 3, "routerLink"], [1, "instuctions"], [1, "red"]], template: function TestLevelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Test your level");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "And you can win a coupon! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestLevelComponent_Template_a_click_6_listener() { return ctx.showDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "click here for details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TestLevelComponent_div_8_Template, 12, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Choose puzzles level");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Beginner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Intermediate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Advanced");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShowDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".full[_ngcontent-%COMP%] {\n  height: 105vh;\n}\n\n.test-level-container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding-top: 50px;\n  width: 350px;\n}\n\n.test-level-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 44px;\n}\n\n.instuctions[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: Tahoma;\n  z-index: 2;\n  background-color: #524141;\n  border: 1px solid black;\n  padding-left: 10px;\n  font-weight: bold;\n}\n\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.btns-panel[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  position: absolute;\n}\n\n@media screen and (max-width: 540px) {\n  .btns-panel[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n\n  .full[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0ZXN0LWxldmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUdBO0VBQ0ksZUFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0k7SUFDQSxnQkFBQTtFQUFGOztFQUdBO0lBQ0ksZUFBQTtFQUFKO0FBQ0YiLCJmaWxlIjoidGVzdC1sZXZlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsIHtcclxuICAgIGhlaWdodDogMTA1dmg7XHJcbn1cclxuXHJcbi50ZXN0LWxldmVsLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbn1cclxuXHJcbi50ZXN0LWxldmVsLWNvbnRhaW5lciBoMXtcclxuICAgIGZvbnQtc2l6ZTogNDRweDtcclxufVxyXG4uaW5zdHVjdGlvbnN7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1mYW1pbHk6VGFob21hO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgNjUsIDY1KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG5cclxuYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG5zLXBhbmVse1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQwcHgpIHtcclxuICAgIC5idG5zLXBhbmVse1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICBcclxuICB9XHJcbiAgLmZ1bGwge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "BE/z":
/*!*************************************************!*\
  !*** ./src/app/cmps/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


const _c0 = function (a0) { return { "open-menu": a0 }; };
class HeaderComponent {
    constructor() {
        this.navOpen = false;
    }
    toggleMenu() {
        this.navOpen = !this.navOpen;
    }
    openMenu() {
        if (this.navOpen)
            return 'open-menu';
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 23, vars: 3, consts: [[1, "header-container"], [3, "ngClass"], ["href", "home", 1, "active"], ["href", "test-level", 1, "target"], [1, "glow"], ["href", "home#whychess", 3, "click"], ["href", "home#about", 3, "click"], ["href", "home#reviews", 3, "click"], ["href", "contact"], ["hidden", "", 1, "menu-btn", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Test level");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_10_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Why Chess");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_13_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_16_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_21_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u2630");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.navOpen));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".header-container[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 120px;\n  position: fixed;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  opacity: 0.8;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  color: white;\n  padding: 8px;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 80px;\n  font-weight: bold;\n}\n\n#logo[_ngcontent-%COMP%] {\n  opacity: 1;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n  height: 120px;\n}\n\nli[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-left: 15px;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .glow[_ngcontent-%COMP%] {\n  line-height: 30px;\n}\n\n[_ngcontent-%COMP%]:target {\n  color: #04AA6D;\n}\n\n.glow[_ngcontent-%COMP%] {\n  animation: glowing 1500ms infinite;\n}\n\n@keyframes glowing {\n  0% {\n    background-color: #B20000;\n    box-shadow: 0 0 3px #B20000;\n  }\n  50% {\n    background-color: #FF0000;\n    box-shadow: 0 0 3px #FF0000;\n  }\n  100% {\n    background-color: #B20000;\n    box-shadow: 0 0 3px #B20000;\n  }\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #555;\n  color: white;\n}\n\na[_ngcontent-%COMP%] {\n  height: 120px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.5);\n}\n\n@media (max-width: 540px) {\n  ul[_ngcontent-%COMP%] {\n    position: fixed;\n    width: 200px;\n    right: 0;\n    top: 40px;\n    height: 100vh;\n    padding: 10px;\n    transform: translateX(100%);\n    transition: transform 0.4s, box-shadow 0.4s;\n    opacity: 0.95;\n    z-index: 6;\n  }\n\n  a[_ngcontent-%COMP%] {\n    height: 80px;\n  }\n\n  #logo[_ngcontent-%COMP%] {\n    height: 80px;\n  }\n\n  #logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    padding-top: 5px;\n  }\n\n  .menu-btn[_ngcontent-%COMP%] {\n    position: absolute;\n    display: block;\n    height: 40px;\n    background-color: #4b4141;\n    border-radius: 5px;\n    right: 0;\n  }\n\n  .open-menu[_ngcontent-%COMP%] {\n    transform: translateX(0);\n    box-shadow: -3px 3px 3px 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxVQUFBO0FBQUQ7O0FBR0E7RUFDSSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUlFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQURKOztBQUlFO0VBQ0UsVUFBQTtFQUNBLGlEQUFBO0VBQ0EsYUFBQTtBQURKOztBQUlFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQURKOztBQUlFO0VBQ0UsaUJBQUE7QUFESjs7QUFJRTtFQUNFLGNBQUE7QUFESjs7QUFPQTtFQUlFLGtDQUFBO0FBSkY7O0FBd0JBO0VBQ0U7SUFBSyx5QkFBQTtJQUEyQiwyQkFBQTtFQVNoQztFQVJBO0lBQU0seUJBQUE7SUFBMkIsMkJBQUE7RUFZakM7RUFYQTtJQUFPLHlCQUFBO0lBQTJCLDJCQUFBO0VBZWxDO0FBQ0Y7O0FBYkU7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUFlSjs7QUFaRTtFQUNFLGFBQUE7RUFDQSxpREFBQTtBQWVKOztBQVhFO0VBRUU7SUFDSSxlQUFBO0lBQ0EsWUFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0EsYUFBQTtJQUNBLGFBQUE7SUFDQSwyQkFBQTtJQUNBLDJDQUFBO0lBQ0EsYUFBQTtJQUNSLFVBQUE7RUFhRTs7RUFWRTtJQUNFLFlBQUE7RUFhSjs7RUFYRTtJQUNFLFlBQUE7RUFjSjs7RUFaRTtJQUNFLGdCQUFBO0VBZUo7O0VBWkU7SUFDRSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxZQUFBO0lBQ0EseUJBQUE7SUFFQSxrQkFBQTtJQUNBLFFBQUE7RUFjSjs7RUFYQTtJQUNJLHdCQUFBO0lBQ0EsNEJBQUE7RUFjSjtBQUNGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaGVhZGVyLWNvbnRhaW5lcntcclxuIHotaW5kZXg6MjtcclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgIFxyXG4gIH1cclxuICBcclxuICBsaSBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDgwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gICNsb2dve1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpO1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICB9XHJcblxyXG4gIGxpIGltZ3tcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgbGkgYSAuZ2xvd3tcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxuICBcclxuICA6dGFyZ2V0IHtcclxuICAgIGNvbG9yOiAjMDRBQTZEO1xyXG4gIFxyXG4gIH1cclxuXHJcblxyXG5cclxuLmdsb3d7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGdsb3dpbmcgMTUwMG1zIGluZmluaXRlO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBnbG93aW5nIDE1MDBtcyBpbmZpbml0ZTtcclxuICAtby1hbmltYXRpb246IGdsb3dpbmcgMTUwMG1zIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjogZ2xvd2luZyAxNTAwbXMgaW5maW5pdGU7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGdsb3dpbmcge1xyXG4gIDAlIHsgYmFja2dyb3VuZC1jb2xvcjogI0IyMDAwMDsgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgM3B4ICNCMjAwMDA7IH1cclxuICA1MCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwOyAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggI0ZGMDAwMDsgfVxyXG4gIDEwMCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjQjIwMDAwOyAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggI0IyMDAwMDsgfVxyXG59XHJcblxyXG4vLyAgIEAtbW96LWtleWZyYW1lcyBnbG93aW5nIHtcclxuLy8gICAgIDAlIHsgYmFja2dyb3VuZC1jb2xvcjogI0IyMDAwMDsgLW1vei1ib3gtc2hhZG93OiAwIDAgM3B4ICNCMjAwMDA7IH1cclxuLy8gICAgIDUwJSB7IGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7IC1tb3otYm94LXNoYWRvdzogMCAwIDQwcHggI0ZGMDAwMDsgfVxyXG4vLyAgICAgMTAwJSB7IGJhY2tncm91bmQtY29sb3I6ICNCMjAwMDA7IC1tb3otYm94LXNoYWRvdzogMCAwIDNweCAjQjIwMDAwOyB9XHJcbi8vICAgfVxyXG5cclxuQC1vLWtleWZyYW1lcyBnbG93aW5nIHtcclxuICAwJSB7IGJhY2tncm91bmQtY29sb3I6ICNCMjAwMDA7IGJveC1zaGFkb3c6IDAgMCAzcHggI0IyMDAwMDsgfVxyXG4gIDUwJSB7IGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7IGJveC1zaGFkb3c6IDAgMCAzcHggI0ZGMDAwMDsgfVxyXG4gIDEwMCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjQjIwMDAwOyBib3gtc2hhZG93OiAwIDAgM3B4ICNCMjAwMDA7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBnbG93aW5nIHtcclxuICAwJSB7IGJhY2tncm91bmQtY29sb3I6ICNCMjAwMDA7IGJveC1zaGFkb3c6IDAgMCAzcHggI0IyMDAwMDsgfVxyXG4gIDUwJSB7IGJhY2tncm91bmQtY29sb3I6ICNGRjAwMDA7IGJveC1zaGFkb3c6IDAgMCAzcHggI0ZGMDAwMDsgfVxyXG4gIDEwMCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjQjIwMDAwOyBib3gtc2hhZG93OiAwIDAgM3B4ICNCMjAwMDA7IH1cclxufVxyXG4gIFxyXG4gIGxpIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIGF7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSk7XHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XHJcblxyXG4gICAgdWwgeyAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC40cywgYm94LXNoYWRvdyAuNHM7XHJcbiAgICAgICAgb3BhY2l0eTogMC45NTtcclxuei1pbmRleDo2XHJcbiAgICB9XHJcblxyXG4gICAgYXtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgfVxyXG4gICAgI2xvZ297XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgIH1cclxuICAgICNsb2dvIGltZ3tcclxuICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAubWVudS1idG4ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3NSwgNjUsIDY1KTtcclxuICBcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICByaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5vcGVuLW1lbnUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgIGJveC1zaGFkb3c6IC0zcHggM3B4IDNweCAwcHg7XHJcbiAgfVxyXG5cclxuICB9XHJcblxyXG4gIl19 */"] });


/***/ }),

/***/ "Cd6q":
/*!********************************************!*\
  !*** ./src/app/services/puzzle.service.ts ***!
  \********************************************/
/*! exports provided: PuzzleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleService", function() { return PuzzleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class PuzzleService {
    constructor(http) {
        this.http = http;
        this.url = 'https://erezchess.herokuapp.com';
    }
    getPuzzles() {
        return this.http.get(`${this.url}/puzzles`);
    }
    makeId(n) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (var i = 0; i < n; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}
PuzzleService.ɵfac = function PuzzleService_Factory(t) { return new (t || PuzzleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
PuzzleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PuzzleService, factory: PuzzleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "FS3d":
/*!*************************************************!*\
  !*** ./src/app/cmps/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "footer"], [1, "copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A9 443322021 EREZ-CHESS. All Rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #252121;\n  border-top: 1px solid rgba(255, 255, 255, 0.5);\n  bottom: 0;\n  margin-left: 120px;\n  text-align: center;\n  height: 50px;\n  color: #4e3c3c;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  padding-top: 17px;\n  color: white;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n@media (max-width: 540px) {\n  .footer[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSw4Q0FBQTtFQUVBLFNBQUE7RUFDRCxrQkFBQTtFQUNDLGtCQUFBO0VBQ0EsWUFBQTtFQUNELGNBQUE7QUFBSDs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdBO0VBQ0ksU0FBQTtBQUFKOztBQUdBO0VBQ0k7SUFDQSxjQUFBO0VBQUY7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDM3LCAzMywgMzMpO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsIDAuNSk7XHJcbiAgXHJcbiAgICBib3R0b206IDA7XHJcbiAgIG1hcmdpbi1sZWZ0OiAxMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgY29sb3I6IHJnYig3OCwgNjAsIDYwKTtcclxufVxyXG5cclxuLmNvcHlyaWdodHtcclxuICAgIHBhZGRpbmctdG9wOiAxN3B4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5wIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XHJcbiAgICAuZm9vdGVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxufSJdfQ== */"] });


/***/ }),

/***/ "FY5E":
/*!*************************************************************!*\
  !*** ./src/app/cmps/intermediate/intermediate.component.ts ***!
  \*************************************************************/
/*! exports provided: IntermediateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntermediateComponent", function() { return IntermediateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_puzzle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/puzzle.service */ "Cd6q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function IntermediateComponent_div_5_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose the correct answer and click submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IntermediateComponent_div_5_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.puzzles[ctx_r3.count].solution.letter, " is the solution:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.puzzles[ctx_r3.count].explanation, "");
} }
function IntermediateComponent_div_5_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function IntermediateComponent_div_5_div_8_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.radioChangeHandler($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r5.letter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", option_r5.img);
} }
const _c0 = function (a0) { return { "shake": a0 }; };
function IntermediateComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, IntermediateComponent_div_5_div_5_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, IntermediateComponent_div_5_div_6_Template, 4, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function IntermediateComponent_div_5_Template_form_submit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.sendAnswer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, IntermediateComponent_div_5_div_8_Template, 5, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntermediateComponent_div_5_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.nextQuest(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntermediateComponent_div_5_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.viewResult(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.puzzles[ctx_r0.count].question);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx_r0.puzzles[ctx_r0.count].isCorrect === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.puzzles[ctx_r0.count].img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.count === 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isShowAnswer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.puzzles[ctx_r0.count].options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.isClicked)("disabled", !ctx_r0.isChosen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r0.isClicked || ctx_r0.count === 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.count !== 9)("disabled", !ctx_r0.isClicked);
} }
function IntermediateComponent_div_6_h3_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("this is you code: ", ctx_r13.coupon, "");
} }
const _c1 = function () { return ["/test-level/beginner"]; };
const _c2 = function () { return ["/test-level/advanced"]; };
function IntermediateComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your result is:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, IntermediateComponent_div_6_h3_7_Template, 2, 1, "h3", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Beginner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntermediateComponent_div_6_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.playAgain(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Intermediate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Advanced");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.score, "/5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.totalScore);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.score >= 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
} }
const _c3 = function (a0) { return { "flipped": a0 }; };
class IntermediateComponent {
    constructor(puzzleService) {
        this.puzzleService = puzzleService;
        this.puzzles = [];
        this.count = 5;
        this.isShowAnswer = false;
        this.isClicked = false;
        this.isFlipped = false;
        this.isChosen = false;
        this.coupon = '';
        this.score = 0;
    }
    ngOnInit() {
        console.log('beginner component');
        this.puzzleService.getPuzzles().subscribe((data) => {
            console.log(data);
            this.puzzles = data;
            this.coupon = this.puzzleService.makeId(6);
        });
    }
    sendAnswer() {
        if (this.count === 9 && this.isClicked === true)
            console.log('yes');
        this.isClicked = true;
        if (this.puzzles[this.count].answer === this.puzzles[this.count].solution.img) {
            new Audio('http://www.utc.fr/si28/ProjetsUpload/P2006_si28p004/flash_puzzle/sons/rush/crowd3.wav').play();
            this.puzzles[this.count].isCorrect = true;
            this.score++;
        }
        else {
            new Audio('https://rpg.hamsterrepublic.com/wiki-images/d/d7/Oddbounce.ogg').play();
            this.puzzles[this.count].isCorrect = false;
            this.isShowAnswer = true;
            this.puzzles[this.count].img = this.puzzles[this.count].solution.img;
        }
    }
    radioChangeHandler(event) {
        this.isChosen = true;
        this.puzzles[this.count].img = event.target.value;
        this.puzzles[this.count].answer = event.target.value;
    }
    nextQuest() {
        this.isChosen = false;
        this.isClicked = false;
        this.count++;
        this.isShowAnswer = false;
    }
    viewResult() {
        this.puzzles = [];
        this.isFlipped = true;
    }
    playAgain() {
        window.location.reload();
    }
    get totalScore() {
        if (this.score === 5)
            return '😀 Great result! try advanced level';
        if (this.score === 4)
            return '🙂 Very nice! try advanced level';
        if (this.score === 3)
            return 'Not bad but you need some more practice';
        if (this.score < 3)
            return '😕 Try again, you will be better next time';
    }
}
IntermediateComponent.ɵfac = function IntermediateComponent_Factory(t) { return new (t || IntermediateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_puzzle_service__WEBPACK_IMPORTED_MODULE_1__["PuzzleService"])); };
IntermediateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntermediateComponent, selectors: [["app-intermediate"]], decls: 7, vars: 5, consts: [[1, "page-container"], [1, "title"], [1, "main-card"], [1, "inner-card", 3, "ngClass"], ["class", "puzzle-section", 4, "ngIf"], ["class", "result-container", 4, "ngIf"], [1, "puzzle-section"], [1, "question"], [1, "img-container", 3, "ngClass"], ["alt", "board-img", 1, "puzzle-img", 3, "src"], ["class", "instructions", 4, "ngIf"], ["class", "show-answer", 4, "ngIf"], [3, "submit"], [4, "ngFor", "ngForOf"], [1, "btn", "submit", 3, "hidden", "disabled"], [1, "btn", "next", 3, "hidden", "click"], [1, "btn", "result", 3, "hidden", "disabled", "click"], [1, "instructions"], [1, "show-answer"], [1, "flex-no-space", "answers"], ["type", "radio", "name", "option", 1, "input-button", 3, "value", "change"], [1, "result-container"], ["class", "red", 4, "ngIf"], [1, "btns-panel"], [1, "btn", "beginner", 3, "routerLink"], [1, "btn", "intermediate", 3, "click"], [1, "btn", "advanced", 3, "routerLink"], [1, "red"]], template: function IntermediateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Intermediate Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, IntermediateComponent_div_5_Template, 15, 13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, IntermediateComponent_div_6_Template, 15, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c3, ctx.isFlipped));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.puzzles && ctx.puzzles.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFlipped);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRlcm1lZGlhdGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "JFIp":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cmps_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cmps/about/about.component */ "2TR/");
/* harmony import */ var _cmps_review_review_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../cmps/review/review.component */ "0rfa");
/* harmony import */ var _cmps_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cmps/chat/chat.component */ "ecFy");
/* harmony import */ var _cmps_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cmps/footer/footer.component */ "FS3d");






const _c0 = function () { return ["/challenge"]; };
class HomePageComponent {
    constructor() {
        this.isShown = false;
    }
    ngOnInit() {
        new Audio('assets/sounds/typing.wav').play();
        // setTimeout(() =>{
        //   this.isShown = true
        //   var audio = new Audio('assets/sounds/appear.wav');
        //   audio.play()
        // },6000)
        //   }
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 90, vars: 2, consts: [["name", "arrow"], [1, "main-container"], [1, "typewriter"], [1, "headline-img"], [1, "headline"], ["src", "assets/icons/chess-icon1.png", "alt", "icon"], [1, "typing"], ["src", "assets/icons/avatar.jpg", "alt", "", "srcset", "", 1, "avatar"], [1, "banner", 3, "routerLink"], ["src", "assets/icons/banner.jpg", "alt", "banner"], [1, "banner-title", "red"], [1, "home-pic"], ["src", "assets/icons/home-pic3.webp", "alt", "pic"], [1, "qoute"], ["name", "whychess", 2, "text-decoration", "none", "color", "white"], [1, "why-playing"], [1, "img-cards", "flex-space-around"], [1, "img-card"], ["src", "https://www.mayoclinichealthsystem.org/-/media/national-files/images/hometown-health/2018/brain-caricature-lifting-weights.jpg?h=370&w=660&la=en&hash=1D5FBC0DF2D186B11F4F3357ACB6BF03", "alt", "", "srcset", ""], [1, "label"], ["src", "https://massets.appsflyer.com/wp-content/uploads/2020/12/5-ways-to-analyze-app-campaigns.png", "alt", "", "srcset", ""], [1, "img-cards", "flex-space-around", "lower"], ["src", "https://images-na.ssl-images-amazon.com/images/I/51GS2Engz7L._AC_SY679_.jpg", "alt", "", "srcset", ""], ["src", "https://www.animatedvideo.com/blog/wp-content/uploads/2017/03/Video_Marketing_and_ROI-1-770x360.jpg", "alt", "", "srcset", ""], [1, "improve"], [1, "improve-container"], [1, "two-cards", "flex-space-around"], [1, "improve-card"], ["href", "home#arrow"], ["src", "assets/icons/up-arrow.png", "alt", "", "srcset", "", 1, "up-arrow"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "EREZ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " CHESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Chess Master & Fullstack Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Club Players Challenge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u201CEvery chess master was once a beginner\u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Irving Chernev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Why playing chess?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Sports For The Brain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Increases Analytical Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Improves Focusing Abilities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Elevates Creativity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h1", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "How to improve chess skills?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Analyze your games");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Analysis is considered to be one of the best ways to improve a chess player's level.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Most efficient way is with a coach or computer, but you can analyze with a friend or even alone.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Just do it!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Solve exercises");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "The amount of online puzzles is enormous, from tactics and traps to endgames.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Try focusing on improving your weaker sides.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Study openings theory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "You should have at least one opening that you control it well on white as well as black.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "The recommended way is learn from videos or database of greatest players.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Learn how to think");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Always think first what your opponent threats, and why they did this move.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Think organized. don't jump to draw conclusions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Do not trust your feelings. Calculate!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "app-review");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "app-chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _cmps_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"], _cmps_review_review_component__WEBPACK_IMPORTED_MODULE_3__["ReviewComponent"], _cmps_chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"], _cmps_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".headline[_ngcontent-%COMP%] {\n  font-size: 84px;\n  font-weight: bold;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\n.banner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 300px;\n  height: 100px;\n  margin-bottom: 60px;\n  margin-left: 50%;\n  animation: bannermove 10s linear infinite;\n  cursor: pointer;\n}\n\n@keyframes bannermove {\n  0% {\n    margin-left: 100%;\n  }\n  100% {\n    margin-left: 0px;\n  }\n}\n\n.banner-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 50px;\n}\n\n.banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.typewriter[_ngcontent-%COMP%] {\n  width: 1200px;\n  margin: 0 auto;\n  padding-top: 50px;\n}\n\n.typewriter[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 36px;\n  overflow: hidden;\n  white-space: nowrap;\n  letter-spacing: 0.1em;\n  animation: typing 3s steps(40, end);\n}\n\n\n\n@keyframes typing {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n.avatar[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  border-radius: 50%;\n  margin-top: 60px;\n  margin-bottom: 60px;\n}\n\n.home-pic[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.home-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.qoute[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100px;\n  left: 250px;\n}\n\n.qoute[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: cursive;\n  font-size: 44px;\n}\n\n.lower[_ngcontent-%COMP%] {\n  padding-bottom: 50px;\n}\n\n.img-card[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 70px;\n  width: 600px;\n  height: 400px;\n  border-radius: 5px;\n}\n\n.img-card[_ngcontent-%COMP%]:hover {\n  animation: skew 2s infinite;\n  transform: skew(10deg);\n  animation-direction: alternate;\n}\n\n@keyframes skew {\n  0% {\n    transform: skew(0deg, 0deg);\n  }\n  100% {\n    transform: skew(-5deg, -5deg);\n  }\n}\n\n.img-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 400px;\n  opacity: 0.7;\n  border-radius: 5px;\n}\n\n.label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 150px;\n  width: 600px;\n  height: 120px;\n}\n\n.up-arrow[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 150px;\n  bottom: 55px;\n  width: 50px;\n  height: 50px;\n  z-index: 1;\n}\n\n.why-playing[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  margin-bottom: 0px;\n}\n\n.improve-container[_ngcontent-%COMP%] {\n  max-width: 100%;\n  text-align: left;\n  padding-bottom: 50px;\n}\n\n.improve-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #4f3580;\n}\n\n.improve[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n\n.improve-card[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 300px;\n  background-color: #221d1d;\n  margin-top: 70px;\n  padding: 20px;\n  line-height: 1.5;\n  border-radius: 5px;\n}\n\n.improve-card[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  cursor: url(\"https://img.icons8.com/ios/50/000000/pawn.png\"), auto;\n}\n\n@media (max-width: 540px) {\n  .avatar[_ngcontent-%COMP%] {\n    width: 250px;\n    height: 250px;\n  }\n\n  .typewriter[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .img-card[_ngcontent-%COMP%] {\n    width: 220px;\n    height: 160px;\n  }\n\n  .img-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 98%;\n    height: 98%;\n  }\n\n  .up-arrow[_ngcontent-%COMP%] {\n    left: 30px;\n    opacity: 0.7;\n  }\n\n  .label[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 30px;\n    max-width: 90%;\n    height: 40px;\n  }\n\n  .label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: medium;\n  }\n\n  .typewriter[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n\n  .headline[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n\n  .headline-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 30px;\n    width: 30px;\n  }\n\n  .qoute[_ngcontent-%COMP%] {\n    left: unset;\n    top: 0;\n    text-align: left;\n    padding-left: 20px;\n  }\n\n  .qoute[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .qoute[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .two-cards[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .improve-card[_ngcontent-%COMP%] {\n    max-width: 90%;\n    height: 98%;\n    margin-top: 40px;\n  }\n\n  .improve-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .improve-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .banner[_ngcontent-%COMP%] {\n    position: relative;\n    width: 220px;\n    height: 70px;\n    margin: 0 auto;\n    margin-bottom: 60px;\n    animation: unset;\n  }\n\n  .banner-title[_ngcontent-%COMP%] {\n    font-size: 16px;\n    position: absolute;\n    bottom: 10px;\n    left: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNGLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDSyx5Q0FBQTtFQUNKLGVBQUE7QUFERDs7QUFLQTtFQUNBO0lBQ0EsaUJBQUE7RUFGRTtFQUlGO0lBQ0EsZ0JBQUE7RUFGRTtBQUNGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFGRjs7QUFLQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLRTtFQUNFLGVBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FDRTtBQUhSOztBQU1JLHNCQUFBOztBQUNBO0VBQ0U7SUFBTyxRQUFBO0VBRlg7RUFHSTtJQUFLLFdBQUE7RUFBVDtBQUNGOztBQUVJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBTjs7QUFHSTtFQUNFLGtCQUFBO0FBQU47O0FBR0k7RUFDRSxlQUFBO0FBQU47O0FBRUk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ047O0FBRUk7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUFDTjs7QUFFSTtFQUNFLG9CQUFBO0FBQ047O0FBRUk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNOOztBQUFNO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBRU47O0FBQ0k7RUFDRTtJQUNFLDJCQUFBO0VBRU47RUFBSTtJQUNFLDZCQUFBO0VBRU47QUFDRjs7QUFDSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ047O0FBRUk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNOOztBQUVJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQ047O0FBRUk7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBQ047O0FBQ0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQUVOOztBQUFJO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FBR047O0FBREk7RUFDRSxnQkFBQTtBQUlOOztBQURJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0QsYUFBQTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7QUFJTjs7QUFITTtFQUNFLFlBQUE7RUFDQSxrRUFBQTtBQUtSOztBQUFJO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQUdOOztFQUFJO0lBQ0UsZUFBQTtFQUdOOztFQURFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUFJSjs7RUFGRTtJQUNFLGNBQUE7SUFDQSxXQUFBO0VBS0o7O0VBSEU7SUFDRSxVQUFBO0lBQ0EsWUFBQTtFQU1KOztFQUpFO0lBQ0Usa0JBQUE7SUFDQSxTQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7RUFPSjs7RUFIRTtJQUNFLGlCQUFBO0VBTUo7O0VBSkU7SUFDRSxlQUFBO0VBT0o7O0VBSkE7SUFDRSxlQUFBO0VBT0Y7O0VBTEE7SUFDQyxZQUFBO0lBQ0EsV0FBQTtFQVFEOztFQUxBO0lBQ0UsV0FBQTtJQUNBLE1BQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VBUUY7O0VBTkE7SUFDRSxlQUFBO0VBU0Y7O0VBUEE7SUFDRSxlQUFBO0VBVUY7O0VBUkE7SUFDRSxzQkFBQTtFQVdGOztFQVRBO0lBQ0UsY0FBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtFQVlGOztFQVJFO0lBQ0UsZUFBQTtFQVdKOztFQVRFO0lBQ0UsZUFBQTtFQVlKOztFQVRGO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7SUFDRixtQkFBQTtJQUVJLGdCQUFBO0VBV0Y7O0VBTEY7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtFQVFBO0FBQ0YiLCJmaWxlIjoiaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uaGVhZGxpbmV7XHJcbiAgZm9udC1zaXplOiA4NHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcblxyXG4uYmFubmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxubWFyZ2luLWJvdHRvbTogNjBweDtcclxubWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgICBhbmltYXRpb246IGJhbm5lcm1vdmUgMTBzIGxpbmVhciBpbmZpbml0ZTtcclxuIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgYmFubmVybW92ZSB7XHJcbjAlIHtcclxubWFyZ2luLWxlZnQ6IDEwMCU7XHJcbn1cclxuMTAwJSB7XHJcbm1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxufVxyXG4uYmFubmVyLXRpdGxle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgbGVmdDogNTBweDtcclxufVxyXG5cclxuLmJhbm5lciBpbWd7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udHlwZXdyaXRlcntcclxuICAgIHdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIH1cclxuICBcclxuICAudHlwZXdyaXRlciBoMSB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgXHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAuMWVtOyBcclxuICAgICAgYW5pbWF0aW9uOiBcclxuICAgICAgICB0eXBpbmcgM3Mgc3RlcHMoNDAsIGVuZCksICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogVGhlIHR5cGluZyBlZmZlY3QgKi9cclxuICAgIEBrZXlmcmFtZXMgdHlwaW5nIHtcclxuICAgICAgZnJvbSB7IHdpZHRoOiAwIH1cclxuICAgICAgdG8geyB3aWR0aDogMTAwJSB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF2YXRhcntcclxuICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvbWUtcGlje1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvbWUtcGljIGltZ3tcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnFvdXRle1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMTAwcHg7XHJcbiAgICAgIGxlZnQ6IDI1MHB4O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAucW91dGUgaDF7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgICBmb250LXNpemU6IDQ0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvd2Vye1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW1nLWNhcmR7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICY6aG92ZXJ7XHJcbiAgICAgIGFuaW1hdGlvbjogc2tldyAycyBpbmZpbml0ZTtcclxuICAgICAgdHJhbnNmb3JtOiBza2V3KDEwZGVnKTtcclxuICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG4gICAgfVxyXG4gIH1cclxuICAgIEBrZXlmcmFtZXMgc2tldyB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNrZXcoMGRlZywgMGRlZyk7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3KC01ZGVnLCAtNWRlZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaW1nLWNhcmQgaW1ne1xyXG4gICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5sYWJlbCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxNTBweDtcclxuICAgICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC51cC1hcnJvd3tcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICBsZWZ0OiAxNTBweDtcclxuICAgICAgYm90dG9tOiA1NXB4O1xyXG4gICAgICB3aWR0aDogNTBweDtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC53aHktcGxheWluZ3tcclxuICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxuICAgIC5pbXByb3ZlLWNvbnRhaW5lcntcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICAgIH1cclxuICAgIC5pbXByb3ZlLWNvbnRhaW5lciBoMntcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogcmdiKDc5LCA1MywgMTI4KTtcclxuICAgIH1cclxuICAgIC5pbXByb3Zle1xyXG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbXByb3ZlLWNhcmR7XHJcbiAgICAgIHdpZHRoOiA2MDBweDtcclxuICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM0LCAyOSwgMjkpO1xyXG4gICAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgY3Vyc29yOiB1cmwoXCJodHRwczovL2ltZy5pY29uczguY29tL2lvcy81MC8wMDAwMDAvcGF3bi5wbmdcIiksYXV0bztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICBcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTQwcHgpIHtcclxuICAgICAgLmF2YXRhcntcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnR5cGV3cml0ZXIgaDF7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICAuaW1nLWNhcmR7XHJcbiAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIH1cclxuICAgIC5pbWctY2FyZCBpbWd7XHJcbiAgICAgIG1heC13aWR0aDogOTglO1xyXG4gICAgICBoZWlnaHQ6IDk4JTtcclxuICAgIH1cclxuICAgIC51cC1hcnJvd3tcclxuICAgICAgbGVmdDogMzBweDtcclxuICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDMwcHg7XHJcbiAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgXHJcbiBcclxuICAgIH1cclxuICAgIC5sYWJlbCBoMntcclxuICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICB9XHJcbiAgICAudHlwZXdyaXRlcntcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGxpbmV7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgfVxyXG4gIC5oZWFkbGluZS1pbWcgaW1ne1xyXG4gICBoZWlnaHQ6IDMwcHg7XHJcbiAgIHdpZHRoOiAzMHB4O1xyXG5cclxuICB9XHJcbiAgLnFvdXRle1xyXG4gICAgbGVmdDogdW5zZXQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuICAucW91dGUgaDF7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG4gIC5xb3V0ZSBoMntcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgLnR3by1jYXJkc3tcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIC5pbXByb3ZlLWNhcmR7XHJcbiAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTglO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuXHJcbiAgICBcclxuICAgIH1cclxuICAgIC5pbXByb3ZlLWNhcmQgaDJ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIC5pbXByb3ZlLWNhcmQgaDN7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIFxyXG4uYmFubmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5tYXJnaW4tYm90dG9tOiA2MHB4O1xyXG5cclxuICAgIGFuaW1hdGlvbjogdW5zZXQ7XHJcbiBcclxufVxyXG5cclxuXHJcblxyXG4uYmFubmVyLXRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIGxlZnQ6IDIwcHg7XHJcbn1cclxuICB9Il19 */"] });


/***/ }),

/***/ "NkJ1":
/*!*****************************************************!*\
  !*** ./src/app/cmps/advanced/advanced.component.ts ***!
  \*****************************************************/
/*! exports provided: AdvancedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedComponent", function() { return AdvancedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_puzzle_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/puzzle.service */ "Cd6q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function AdvancedComponent_div_5_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose the correct answer and click submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvancedComponent_div_5_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.puzzles[ctx_r3.count].solution.letter, " is the solution:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.puzzles[ctx_r3.count].explanation, "");
} }
function AdvancedComponent_div_5_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdvancedComponent_div_5_div_8_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.radioChangeHandler($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r5.letter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", option_r5.img);
} }
const _c0 = function (a0) { return { "shake": a0 }; };
function AdvancedComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdvancedComponent_div_5_div_5_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdvancedComponent_div_5_div_6_Template, 4, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AdvancedComponent_div_5_Template_form_submit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.sendAnswer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdvancedComponent_div_5_div_8_Template, 5, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvancedComponent_div_5_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.nextQuest(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvancedComponent_div_5_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.viewResult(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.puzzles[ctx_r0.count].question);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx_r0.puzzles[ctx_r0.count].isCorrect === false));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.puzzles[ctx_r0.count].img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.count === 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isShowAnswer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.puzzles[ctx_r0.count].options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.isClicked)("disabled", !ctx_r0.isChosen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r0.isClicked || ctx_r0.count === 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r0.count !== 14)("disabled", !ctx_r0.isClicked);
} }
function AdvancedComponent_div_6_h3_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("this is you code: ", ctx_r13.coupon, "");
} }
const _c1 = function () { return ["/test-level/beginner"]; };
const _c2 = function () { return ["/test-level/intermediate"]; };
function AdvancedComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your result is:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdvancedComponent_div_6_h3_7_Template, 2, 1, "h3", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Beginner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Intermediate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvancedComponent_div_6_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.playAgain(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Advanced");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.score, "/5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.totalScore);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.score >= 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
} }
const _c3 = function (a0) { return { "flipped": a0 }; };
class AdvancedComponent {
    constructor(puzzleService) {
        this.puzzleService = puzzleService;
        this.puzzles = [];
        this.count = 10;
        this.isShowAnswer = false;
        this.isClicked = false;
        this.isFlipped = false;
        this.isChosen = false;
        this.coupon = '';
        this.score = 0;
    }
    ngOnInit() {
        this.puzzleService.getPuzzles().subscribe((data) => {
            console.log(data);
            this.puzzles = data;
            this.coupon = this.puzzleService.makeId(6);
        });
    }
    sendAnswer() {
        if (this.count === 4 && this.isClicked === true)
            console.log('yes');
        this.isClicked = true;
        if (this.puzzles[this.count].answer === this.puzzles[this.count].solution.img) {
            new Audio('http://www.utc.fr/si28/ProjetsUpload/P2006_si28p004/flash_puzzle/sons/rush/crowd3.wav').play();
            this.puzzles[this.count].isCorrect = true;
            this.score++;
        }
        else {
            new Audio('https://rpg.hamsterrepublic.com/wiki-images/d/d7/Oddbounce.ogg').play();
            this.puzzles[this.count].isCorrect = false;
            this.isShowAnswer = true;
            this.puzzles[this.count].img = this.puzzles[this.count].solution.img;
        }
    }
    radioChangeHandler(event) {
        this.isChosen = true;
        this.puzzles[this.count].img = event.target.value;
        this.puzzles[this.count].answer = event.target.value;
    }
    nextQuest() {
        this.isChosen = false;
        this.isClicked = false;
        this.count++;
        this.isShowAnswer = false;
    }
    viewResult() {
        this.puzzles = [];
        this.isFlipped = true;
    }
    playAgain() {
        window.location.reload();
    }
    useCoupon() {
        localStorage.setItem('coupon', JSON.stringify(this.coupon));
    }
    get totalScore() {
        if (this.score === 5)
            return '😀 Perfect! you are no doubt a club player over 1500.';
        if (this.score === 4)
            return '🙂 Good! you are no doubt a club player over 1300.';
        if (this.score === 3)
            return 'Not bad but you need some more practice to be a strong club player.';
        if (this.score < 3)
            return '😕 Try to solve all puzzles at intermediate level, before these ones.';
    }
}
AdvancedComponent.ɵfac = function AdvancedComponent_Factory(t) { return new (t || AdvancedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_puzzle_service__WEBPACK_IMPORTED_MODULE_1__["PuzzleService"])); };
AdvancedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdvancedComponent, selectors: [["app-advanced"]], decls: 7, vars: 5, consts: [[1, "page-container"], [1, "title"], [1, "main-card"], [1, "inner-card", 3, "ngClass"], ["class", "puzzle-section", 4, "ngIf"], ["class", "result-container", 4, "ngIf"], [1, "puzzle-section"], [1, "question"], [1, "img-container", 3, "ngClass"], ["alt", "board-img", 1, "puzzle-img", 3, "src"], ["class", "instructions", 4, "ngIf"], ["class", "show-answer", 4, "ngIf"], [3, "submit"], [4, "ngFor", "ngForOf"], [1, "btn", "submit", 3, "hidden", "disabled"], [1, "btn", "next", 3, "hidden", "click"], [1, "btn", "result", 3, "hidden", "disabled", "click"], [1, "instructions"], [1, "show-answer"], [1, "flex-no-space", "answers"], ["type", "radio", "name", "option", 1, "input-button", 3, "value", "change"], [1, "result-container"], ["class", "red", 4, "ngIf"], [1, "btns-panel"], [1, "btn", "beginner", 3, "routerLink"], [1, "btn", "intermediate", 3, "routerLink"], [1, "btn", "advanced", 3, "click"], [1, "red"]], template: function AdvancedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Advanced Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AdvancedComponent_div_5_Template, 15, 13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdvancedComponent_div_6_Template, 15, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c3, ctx.isFlipped));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.puzzles && ctx.puzzles.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFlipped);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZHZhbmNlZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cmps_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cmps/header/header.component */ "BE/z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'my-web';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_cmps_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _cmps_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cmps/header/header.component */ "BE/z");
/* harmony import */ var _cmps_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cmps/footer/footer.component */ "FS3d");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "JFIp");
/* harmony import */ var _cmps_beginner_beginner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cmps/beginner/beginner.component */ "3vlP");
/* harmony import */ var _services_puzzle_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/puzzle.service */ "Cd6q");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _cmps_chat_chat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cmps/chat/chat.component */ "ecFy");
/* harmony import */ var _cmps_intermediate_intermediate_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cmps/intermediate/intermediate.component */ "FY5E");
/* harmony import */ var _pages_contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/contact-me/contact-me.component */ "hFQQ");
/* harmony import */ var _pages_test_level_test_level_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/test-level/test-level.component */ "5YFy");
/* harmony import */ var _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/welcome/welcome.component */ "+j1i");
/* harmony import */ var _cmps_review_review_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cmps/review/review.component */ "0rfa");
/* harmony import */ var _cmps_about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cmps/about/about.component */ "2TR/");
/* harmony import */ var _cmps_advanced_advanced_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cmps/advanced/advanced.component */ "NkJ1");
/* harmony import */ var _pages_challenge_challenge_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/challenge/challenge.component */ "aBPk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");




















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ providers: [_services_puzzle_service__WEBPACK_IMPORTED_MODULE_8__["PuzzleService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _cmps_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _cmps_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"],
        _cmps_beginner_beginner_component__WEBPACK_IMPORTED_MODULE_7__["BeginnerComponent"],
        _cmps_chat_chat_component__WEBPACK_IMPORTED_MODULE_10__["ChatComponent"],
        _cmps_intermediate_intermediate_component__WEBPACK_IMPORTED_MODULE_11__["IntermediateComponent"],
        _pages_contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_12__["ContactMeComponent"],
        _pages_test_level_test_level_component__WEBPACK_IMPORTED_MODULE_13__["TestLevelComponent"],
        _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_14__["WelcomeComponent"],
        _cmps_review_review_component__WEBPACK_IMPORTED_MODULE_15__["ReviewComponent"],
        _cmps_about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"],
        _cmps_advanced_advanced_component__WEBPACK_IMPORTED_MODULE_17__["AdvancedComponent"],
        _pages_challenge_challenge_component__WEBPACK_IMPORTED_MODULE_18__["ChallengeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]] }); })();


/***/ }),

/***/ "aBPk":
/*!********************************************************!*\
  !*** ./src/app/pages/challenge/challenge.component.ts ***!
  \********************************************************/
/*! exports provided: ChallengeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengeComponent", function() { return ChallengeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



function ChallengeComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "White mates in 2 moves.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "You have only one chance and one minute.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Just press on the square that the queen should go to.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "If you press on any other square you fail.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChallengeComponent_div_16_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChallengeComponent_div_16_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/test-level"]; };
const _c1 = function () { return ["/home"]; };
function ChallengeComponent_div_16_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChallengeComponent_div_16_div_3_div_1_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChallengeComponent_div_16_div_3_div_2_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Test Your Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "OR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Go To Home-Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isCorrect);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isCorrect);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
} }
function ChallengeComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChallengeComponent_div_16_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.wrongAnswer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChallengeComponent_div_16_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.rightAnswer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChallengeComponent_div_16_div_3_Template, 9, 6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isPressed);
} }
const _c2 = function (a0) { return { "color": a0 }; };
class ChallengeComponent {
    constructor() {
        this.isCorrect = null;
        this.isShown = false;
        this.isClicked = false;
        this.isPressed = false;
        this.time = 60;
    }
    ngOnInit() {
    }
    startTime() {
        this.isShown = true;
        this.interval = setInterval(() => {
            this.time--;
            if (this.time === 0) {
                this.isPressed = true;
                this.isCorrect = false;
                clearInterval(this.interval);
                var audio = new Audio('assets/sounds/fail.wav');
                audio.play();
            }
        }, 1000);
    }
    rightAnswer() {
        this.isPressed = true;
        this.isCorrect = true;
        clearInterval(this.interval);
        var audio = new Audio('assets/sounds/tada.flac');
        audio.play();
    }
    wrongAnswer() {
        if (this.isCorrect)
            return;
        this.isPressed = true;
        this.isCorrect = false;
        clearInterval(this.interval);
        var audio = new Audio('assets/sounds/fail.wav');
        audio.play();
    }
    toggleInstructions() {
        this.isClicked = !this.isClicked;
    }
    ngOnDestroy() {
        clearInterval(this.interval);
    }
}
ChallengeComponent.ɵfac = function ChallengeComponent_Factory(t) { return new (t || ChallengeComponent)(); };
ChallengeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChallengeComponent, selectors: [["app-challenge"]], decls: 17, vars: 7, consts: [[1, "page-container"], [1, "challenge-container"], [1, "red"], [2, "color", "white", 3, "click"], ["class", "c-instructions", 4, "ngIf"], [1, "btn", 3, "hidden", "click"], [1, "clock"], ["src", "assets/icons/clock.png", "alt", "", "srcset", ""], [1, "countdown", 3, "ngStyle"], ["class", "challenge-card", 3, "click", 4, "ngIf"], [1, "c-instructions"], [1, "challenge-card", 3, "click"], ["src", "assets/icons/challenge2.png", "alt", "", "srcset", ""], [1, "square", 3, "click"], ["class", "trophy", 4, "ngIf"], [1, "trophy"], [4, "ngIf"], [1, "btn", "test-level", 3, "routerLink"], [1, "btn", "home-page", 3, "routerLink"], ["src", "assets/icons/trophy.png", "alt", "", "srcset", ""], ["src", "assets/icons/fail.png", "alt", "", "srcset", ""]], template: function ChallengeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Club players challenge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Read the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChallengeComponent_Template_a_click_6_listener() { return ctx.toggleInstructions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "insructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " carefully");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ChallengeComponent_div_9_Template, 9, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChallengeComponent_Template_button_click_10_listener() { return ctx.startTime(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ChallengeComponent_div_16_Template, 4, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isClicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx.time > 10 ? "white" : "red"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isShown);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".challenge-container[_ngcontent-%COMP%] {\n  width: 600px;\n  margin: 0 auto;\n  padding-top: 50px;\n}\n\n.challenge-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.challenge-card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n\n.c-instructions[_ngcontent-%COMP%] {\n  width: 450px;\n  margin: 0 auto;\n  text-align: left;\n  font-family: Tahoma;\n  z-index: 2;\n  background-color: #524141;\n  border: 1px solid black;\n  padding-left: 10px;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n\n.square[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 155px;\n  right: 45px;\n  width: 55px;\n  height: 55px;\n  z-index: 1;\n}\n\n.clock[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 150px;\n  position: relative;\n}\n\n.clock[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n}\n\n.countdown[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 25px;\n  bottom: 35px;\n}\n\n.trophy[_ngcontent-%COMP%] {\n  left: 0;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  top: 0;\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(82, 65, 65, 0.7);\n}\n\n.trophy[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 250px;\n  margin-top: 50px;\n}\n\n.test-level[_ngcontent-%COMP%] {\n  width: 220px;\n}\n\n.home-page[_ngcontent-%COMP%] {\n  width: 220px;\n  background-color: cadetblue;\n}\n\n@media (max-width: 540px) {\n  .challenge-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .challenge-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .c-instructions[_ngcontent-%COMP%] {\n    width: 90%;\n    line-height: 1.4;\n  }\n\n  .square[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 110px;\n    right: 15px;\n    width: 30px;\n    height: 30px;\n  }\n\n  .trophy[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 150px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGFsbGVuZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSwwQkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsVUFBQTtBQUVKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFHSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFHSjs7QUFBQTtFQUNHLE9BQUE7RUFDQSxzQkFBQTtFQUNDLDZCQUFBO0VBQ0EsbUJBQUE7RUFDRCxNQUFBO0VBRUMsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtBQUVKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksWUFBQTtBQUdKOztBQUFBO0VBQ0ksWUFBQTtFQUNBLDJCQUFBO0FBR0o7O0FBQUE7RUFDQTtJQUNJLFdBQUE7RUFHRjs7RUFERjtJQUNJLFdBQUE7RUFJRjs7RUFGRjtJQUNJLFVBQUE7SUFDQSxnQkFBQTtFQUtGOztFQUhGO0lBQ0ksa0JBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBTUY7O0VBRkY7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQUtGO0FBQ0YiLCJmaWxlIjoiY2hhbGxlbmdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYWxsZW5nZS1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcbi5jaGFsbGVuZ2UtY29udGFpbmVyIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNoYWxsZW5nZS1jYXJke1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmMtaW5zdHJ1Y3Rpb25ze1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1mYW1pbHk6IFRhaG9tYTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI0MTQxO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5zcXVhcmV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDE1NXB4O1xyXG4gICAgcmlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogNTVweDtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgXHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uY2xvY2t7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY2xvY2sgaW1nIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbn1cclxuXHJcbi5jb3VudGRvd257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjVweDtcclxuICAgIGJvdHRvbTogMzVweDtcclxufVxyXG5cclxuLnRyb3BoeXtcclxuICAgbGVmdDogMDtcclxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgdG9wOiAwO1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgkY29sb3I6ICM1MjQxNDEsICRhbHBoYTogMC43KVxyXG4gICAgXHJcbn1cclxuLnRyb3BoeSBpbWcge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLnRlc3QtbGV2ZWwge1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgXHJcbn1cclxuLmhvbWUtcGFnZSB7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xyXG4uY2hhbGxlbmdlLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jaGFsbGVuZ2UtY2FyZCBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uYy1pbnN0cnVjdGlvbnN7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxufVxyXG4uc3F1YXJle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMTBweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcblxyXG59XHJcblxyXG4udHJvcGh5IGltZyB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ecFy":
/*!*********************************************!*\
  !*** ./src/app/cmps/chat/chat.component.ts ***!
  \*********************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




function ChatComponent_div_2_tr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", message_r3, " ");
} }
function ChatComponent_div_2_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("OK ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r2.name), ", Good day! ");
} }
function ChatComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hi! What's your name?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatComponent_div_2_tr_5_Template, 3, 1, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatComponent_div_2_tr_6_Template, 4, 3, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChatComponent_div_2_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.userMsg = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_2_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.sendMsg(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_div_2_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.closeChat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.messages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.userMsg);
} }
class ChatComponent {
    constructor(router) {
        this.router = router;
        this.chatOpen = false;
        this.count = 0;
        this.userMsg = '';
        this.messages = [];
        this.name = '';
        this.autoMsgs = ['Would you like to contact me? write ' + '\xa0\xa0' + 'yes' + '\xa0\xa0' + 'or ' + '\xa0\xa0' + 'no',
            'please write ' + '\xa0\xa0' + 'yes' + '\xa0\xa0' + 'or ' + '\xa0\xa0' + 'no'];
        this.showMsg = false;
    }
    toggleChat() {
        this.chatOpen = !this.chatOpen;
    }
    closeChat() {
        this.chatOpen = false;
    }
    sendMsg() {
        if (!this.userMsg)
            return;
        if (this.userMsg === 'Yes' || this.userMsg === 'yes') {
            this.chatOpen = false;
            this.router.navigateByUrl("contact");
            return;
        }
        if (this.userMsg === 'No' || this.userMsg === 'no') {
            this.name = JSON.parse(localStorage.getItem('name'));
            this.showMsg = true;
            setTimeout(() => {
                this.chatOpen = false;
            }, 2500);
            return;
        }
        else if (this.count < 1) {
            (localStorage.setItem('name', JSON.stringify(this.userMsg)));
        }
        this.messages.push(this.userMsg);
        setTimeout(() => {
            this.messages.push(this.autoMsgs[this.count]);
            this.count++;
            if (this.count > 2) {
                this.chatOpen = false;
                this.count = 0;
                this.messages = [];
            }
            this.userMsg = '';
        }, 1000);
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 3, vars: 1, consts: [[1, "chat-btn", 3, "click"], ["src", "assets/icons/chat.png", "alt", "chat"], ["class", "chat-container", 4, "ngIf"], [1, "chat-container"], [1, "chat-table"], [1, "input"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "send-msg"], ["type", "text", "name", "name", 1, "input", 3, "ngModel", "ngModelChange"], [1, "send-btn", 3, "click"], ["src", "assets/icons/send.png", "alt", "send"], [1, "close-chat", 3, "click"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_0_listener() { return ctx.toggleChat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatComponent_div_2_Template, 13, 3, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chatOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"]], styles: [".chat-container[_ngcontent-%COMP%] {\n  z-index: 5;\n  height: 650px;\n  width: 350px;\n  position: fixed;\n  right: 10px;\n  bottom: 100px;\n  background-color: white;\n  border: 1px solid black;\n  border-radius: 10px;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\n.chat-table[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n\n.close-chat[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  color: white;\n  background-color: black;\n  opacity: 0.8;\n  border: none;\n  cursor: pointer;\n  font-size: large;\n  border-radius: 5px;\n}\n\n.input[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 5px;\n  width: 250px;\n  min-height: 40px;\n  border: 3px solid rgba(58, 53, 53, 0.8);\n  overflow: hidden;\n  word-wrap: break-word;\n  max-width: 30ch;\n  text-overflow: ellipsis;\n  color: #252222;\n}\n\ntable[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  border-collapse: separate;\n  border-spacing: 0 1em;\n}\n\n.send-btn[_ngcontent-%COMP%] {\n  border: none;\n  background-color: white;\n}\n\n.chat-btn[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 30px;\n  bottom: 50px;\n  border: none;\n  background-color: transparent;\n  z-index: 1;\n}\n\n.chat-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 50px;\n  width: 50px;\n}\n\n.send-msg[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  bottom: 50px;\n  right: 30px;\n}\n\n.send-msg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 40px;\n  width: 40px;\n  opacity: 0.8;\n}\n\n@media (max-width: 540px) {\n  .chat-container[_ngcontent-%COMP%] {\n    z-index: 5;\n    height: 350px;\n    width: 350px;\n    bottom: 10px;\n  }\n\n  .input[_ngcontent-%COMP%] {\n    height: 30px;\n    padding: unset;\n  }\n\n  table[_ngcontent-%COMP%] {\n    padding-top: 5px;\n  }\n\n  .send-msg[_ngcontent-%COMP%] {\n    bottom: 5px;\n  }\n\n  .chat-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    opacity: 0.7;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksVUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7QUFEUjs7QUFRSTtFQUNJLGNBQUE7QUFMUjs7QUFRSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTFI7O0FBUUk7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDRCxlQUFBO0VBQ0EsdUJBQUE7RUFDQyxjQUFBO0FBTFI7O0FBUUk7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFMUjs7QUFTSTtFQUNNLFlBQUE7RUFDQSx1QkFBQTtBQU5WOztBQVNJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBQU5SOztBQVNJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBTlI7O0FBVUk7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVBSOztBQVVJO0VBQ0ksZUFBQTtFQUNGLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVBOOztBQVVJO0VBQ0k7SUFDSSxVQUFBO0lBQ0ksYUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VBUGQ7O0VBVUU7SUFDSSxZQUFBO0lBQ0EsY0FBQTtFQVBOOztFQVNFO0lBQ0ksZ0JBQUE7RUFOTjs7RUFRRTtJQUNJLFdBQUE7RUFMTjs7RUFPRTtJQUNJLFlBQUE7RUFKTjtBQUNGIiwiZmlsZSI6ImNoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5jaGF0LWNvbnRhaW5lcntcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgaGVpZ2h0OiA2NTBweDtcclxuICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMTAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBmb250LWZhbWlseTonVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmXHJcbiAgICB9XHJcblxyXG4gICBcclxuICAgIFxyXG4gICBcclxuXHJcbiAgICAuY2hhdC10YWJsZXtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuY2xvc2UtY2hhdHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0e1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoNTgsIDUzLCA1MywgMC44KTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgIG1heC13aWR0aDogMzBjaDtcclxuICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMzcsIDM0LCAzNCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGV7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOnNlcGFyYXRlOyBcclxuICAgICAgICBib3JkZXItc3BhY2luZzogMCAxZW07XHJcbiAgICB9XHJcbiBcclxuXHJcbiAgICAuc2VuZC1idG57XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuY2hhdC1idG57XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGJvdHRvbTogNTBweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGF0LWJ0biBpbWd7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLnNlbmQtbXNne1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogNTBweDtcclxuICAgICAgICByaWdodDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VuZC1tc2cgaW1ne1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xyXG4gICAgICAgIC5jaGF0LWNvbnRhaW5lcntcclxuICAgICAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuaW5wdXR7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IHVuc2V0O1xyXG4gICAgfVxyXG4gICAgdGFibGV7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIH1cclxuICAgIC5zZW5kLW1zZ3tcclxuICAgICAgICBib3R0b206IDVweDtcclxuICAgIH1cclxuICAgIC5jaGF0LWJ0biBpbWd7XHJcbiAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG59XHJcblxyXG4gICBcclxuXHJcbiBcclxuICAgIFxyXG4iXX0= */"] });


/***/ }),

/***/ "hFQQ":
/*!**********************************************************!*\
  !*** ./src/app/pages/contact-me/contact-me.component.ts ***!
  \**********************************************************/
/*! exports provided: ContactMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMeComponent", function() { return ContactMeComponent; });
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emailjs-com */ "+MUk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["couponinput"];
const _c1 = ["username"];
function ContactMeComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Your message has been sent. I will be back to you soon.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c2 = function (a0) { return { "shown": a0 }; };
const _c3 = function () { return ["/test-level"]; };
Object(emailjs_com__WEBPACK_IMPORTED_MODULE_0__["init"])("user_85Gzk36csKRW5b5fwmCrZ");
class ContactMeComponent {
    constructor(router) {
        this.router = router;
        this.name = '';
        this.isHover = false;
        this.isSent = false;
        this.coupon = '';
    }
    ngOnInit() {
        this.name = JSON.parse(localStorage.getItem('name'));
        this.coupon = JSON.parse(localStorage.getItem('coupon'));
    }
    ngAfterViewInit() {
        this.couponinput.nativeElement.value = this.coupon;
        this.username.nativeElement.value = this.name;
    }
    sendEmail(e) {
        e.preventDefault();
        emailjs_com__WEBPACK_IMPORTED_MODULE_0__["default"].sendForm('service_c5u92tt', 'template_4fvzhti', e.target, 'user_85Gzk36csKRW5b5fwmCrZ')
            .then((result) => {
            console.log(result.text);
            this.isSent = true;
            setTimeout(() => {
                this.router.navigateByUrl("home");
            }, 4000);
        }, (error) => {
            console.log('Error:', error.text);
        });
    }
    hideLine() {
        this.isHover = false;
    }
}
ContactMeComponent.ɵfac = function ContactMeComponent_Factory(t) { return new (t || ContactMeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ContactMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactMeComponent, selectors: [["app-contact-me"]], viewQuery: function ContactMeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.couponinput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.username = _t.first);
    } }, decls: 29, vars: 6, consts: [[1, "main-container"], [1, "contact-container", "flex-vertical"], [1, "contact-form", 3, "submit"], ["type", "text", "name", "message", 1, "input"], ["username", ""], ["type", "email", "name", "message", 1, "input"], ["hidden", "", 3, "ngClass"], [2, "color", "white", 3, "routerLink"], [1, "coupon-input", 3, "mouseover", "click"], ["type", "text", "name", "message", "id", "coupon", 1, "input"], ["couponinput", ""], ["name", "message"], ["type", "submit", "value", "Send", 1, "btn", "send"], ["class", "input message-sent", 4, "ngIf"], [1, "input", "message-sent"]], template: function ContactMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Contact Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function ContactMeComponent_Template_form_submit_4_listener($event) { return ctx.sendEmail($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Click here to win a coupon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function ContactMeComponent_Template_label_mouseover_18_listener() { return ctx.isHover = true; })("click", function ContactMeComponent_Template_label_click_18_listener() { return ctx.hideLine(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "coupon?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Your Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ContactMeComponent_div_28_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c2, ctx.isHover));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSent);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".contact-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  padding-top: 50px;\n  width: 250px;\n  margin: 0 auto;\n  text-align: left;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 100px;\n  padding-right: 15px;\n}\n\n.input[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 5px;\n  width: 220px;\n  min-height: 40px;\n  border: 1px solid rgba(58, 53, 53, 0.8);\n  overflow: hidden;\n  word-wrap: break-word;\n  text-overflow: ellipsis;\n  margin-bottom: 20px;\n}\n\n.coupon-input[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.shown[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.message-sent[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  background-color: white;\n  color: #3a3333;\n  font-weight: bold;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 80px;\n}\n\n.send[_ngcontent-%COMP%] {\n  margin-left: 50px;\n  margin-top: 20px;\n  background-color: cadetblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb250YWN0LW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUVELHVCQUFBO0VBQ0gsbUJBQUE7QUFEQTs7QUFHQTtFQUNJLGVBQUE7QUFBSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUFDSiIsImZpbGUiOiJjb250YWN0LW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jb250YWN0LWNvbnRhaW5lcntcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgXHJcbn1cclxuXHJcbmgxIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcbi5pbnB1dCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgbWluLWhlaWdodDogNDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNTgsIDUzLCA1MywgMC44KTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblxyXG4gICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxubWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uY291cG9uLWlucHV0e1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5zaG93bntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubWVzc2FnZS1zZW50e1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6IHJnYig1OCwgNTEsIDUxKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi5zZW5ke1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xyXG5cclxufSJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_cmps_beginner_beginner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/cmps/beginner/beginner.component */ "3vlP");
/* harmony import */ var _app_cmps_intermediate_intermediate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/cmps/intermediate/intermediate.component */ "FY5E");
/* harmony import */ var _app_cmps_advanced_advanced_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/cmps/advanced/advanced.component */ "NkJ1");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "JFIp");
/* harmony import */ var _pages_contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/contact-me/contact-me.component */ "hFQQ");
/* harmony import */ var _pages_test_level_test_level_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/test-level/test-level.component */ "5YFy");
/* harmony import */ var _pages_challenge_challenge_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/challenge/challenge.component */ "aBPk");
/* harmony import */ var _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/welcome/welcome.component */ "+j1i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











const routes = [
    { path: 'test-level/beginner', component: _app_cmps_beginner_beginner_component__WEBPACK_IMPORTED_MODULE_1__["BeginnerComponent"] },
    { path: 'test-level/intermediate', component: _app_cmps_intermediate_intermediate_component__WEBPACK_IMPORTED_MODULE_2__["IntermediateComponent"] },
    { path: 'test-level/advanced', component: _app_cmps_advanced_advanced_component__WEBPACK_IMPORTED_MODULE_3__["AdvancedComponent"] },
    { path: 'test-level', component: _pages_test_level_test_level_component__WEBPACK_IMPORTED_MODULE_6__["TestLevelComponent"] },
    { path: 'challenge', component: _pages_challenge_challenge_component__WEBPACK_IMPORTED_MODULE_7__["ChallengeComponent"] },
    { path: 'contact', component: _pages_contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_5__["ContactMeComponent"] },
    { path: 'home', component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"] },
    { path: '', component: _pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__["WelcomeComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map