"use strict";
exports.__esModule = true;
exports.PaymentSystem = void 0;
var PaymentSystem = /** @class */ (function () {
    function PaymentSystem(pageTitle) {
        this.pageTitle = pageTitle;
    }
    PaymentSystem.prototype.showPageTitle = function () {
        console.log(this.pageTitle);
    };
    PaymentSystem.prototype.getPageTitle = function () {
        return this.pageTitle;
    };
    return PaymentSystem;
}());
exports.PaymentSystem = PaymentSystem;
var paymentSystemObj = new PaymentSystem("Stripe");
paymentSystemObj.showPageTitle();
