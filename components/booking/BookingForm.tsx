const BookingForm = () => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold mb-4">Contact Detail</h2>

    <form>
      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" name="firstName" type="text" className="border p-2 w-full mt-1 rounded" />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" name="lastName" type="text" className="border p-2 w-full mt-1 rounded" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="border p-2 w-full mt-1 rounded" />
        </div>

        <div>
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" name="phone" type="text" className="border p-2 w-full mt-1 rounded" />
        </div>
      </div>

      {/* Payment */}
      <h2 className="text-xl font-semibold mt-6">Pay with</h2>

      <div className="mt-4">
        <label htmlFor="cardNumber">Card Number</label>
        <input id="cardNumber" name="cardNumber" type="text" className="border p-2 w-full mt-1 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="expiry">Expiration Date</label>
          <input id="expiry" name="expiry" type="text" className="border p-2 w-full mt-1 rounded" />
        </div>

        <div>
          <label htmlFor="cvv">CVV</label>
          <input id="cvv" name="cvv" type="text" className="border p-2 w-full mt-1 rounded" />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-xl font-semibold mt-6">Billing Address</h2>

      <div className="mt-4">
        <label htmlFor="street">Street Address</label>
        <input id="street" name="street" type="text" className="border p-2 w-full mt-1 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="city">City</label>
          <input id="city" name="city" type="text" className="border p-2 w-full mt-1 rounded" />
        </div>

        <div>
          <label htmlFor="state">State</label>
          <input id="state" name="state" type="text" className="border p-2 w-full mt-1 rounded" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="zip">Zip Code</label>
          <input id="zip" name="zip" type="text" className="border p-2 w-full mt-1 rounded" />
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <input id="country" name="country" type="text" className="border p-2 w-full mt-1 rounded" />
        </div>
      </div>

      <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full">
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;
