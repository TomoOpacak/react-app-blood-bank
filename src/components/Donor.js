import "../css/donor-style.css";

const Donor = () => {
  return (
    <div>
      <h1>Donor Registration</h1>

      <form
        className="donor-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert(
            "Thank you for registering as a donor! We will contact you soon."
          );
        }}
      >
        <h2>Book Your Blood Donation Slot</h2>
        <p>
          Thank you for your interest in donating blood! Please fill out the
          form below to book a slot for your donation.
        </p>

        {/* IME PREZIME */}
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text "
            id="name"
            name="name"
            placeholder="Enter your name"
          />
        </div>

        {/* EMAIL ADRESA */}
        <div className="form-group">
          <label htmlFor="email">Email Adress:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>

        {/* KRVNA GRUPA */}
        <div className="form-group">
          <label htmlFor="blood-type">Blood Type:</label>
          <select id="blood-type" name="blood-type">
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        {/* DATUM DONACIJE */}
        <div className="form-group">
          <label htmlFor="donation-date">Preferred Donation Date:</label>
          <input type="date" id="donation-date" name="donation-date" />
        </div>

        {/* MJESTO DONACIJE */}
        <div className="form-group">
          <label htmlFor="donation-location">
            Preferred Donation Location:
          </label>
          <input
            type="text"
            id="donation-location"
            name="donation-location"
            placeholder="Enter location"
          />
        </div>

        {/* GUMB ZA SUBMIT */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Donor;
