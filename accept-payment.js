"use strict";
exports.__esModule = true;
var payment_system_1 = require("./payment-system");
var AcceptPayment = /** @class */ (function () {
    function AcceptPayment(paymentSystem) {
        this.paymentSystem = paymentSystem;
    }
    AcceptPayment.prototype.showPaymentInformation = function () {
        //var process = new PaymentSystem("Braintree");
        console.log(this.paymentSystem.getPageTitle());
    };
    return AcceptPayment;
}());
var payment = new AcceptPayment(new payment_system_1.PaymentSystem("levelup"));
payment.showPaymentInformation();
