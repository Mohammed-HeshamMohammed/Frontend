import React from "react";
import { FaCreditCard, FaPaypal } from "react-icons/fa";
import "../css/paymentform.css"; // Create this CSS file for custom styles

function PaymentForm() {
  return (
    <div className="container payment-form">
      <form>
        <h4 className="mb-4">Select Payment Method</h4>
        <div className="form-check">
          <input type="radio" id="debitCredit" name="paymentMethod" className="form-check-input" />
          <label className="form-check-label mx-2" htmlFor="debitCredit">
            <FaCreditCard className="icon" />
            Debit or Credit Card
          </label>
        </div>
        <div className="form-check">
          <input type="radio" id="paypal" name="paymentMethod" className="form-check-input" />
          <label className="form-check-label mx-2" htmlFor="paypal">
            <FaPaypal className="icon" />
            PayPal
          </label>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" className="form-control" />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default PaymentForm;
