import "../css/home-style.css";
import BecomeDonorButton from "./BecomeDonorButton";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="home-header">
        <p>Your donation can make a difference in someone's life today.</p>

        <BecomeDonorButton />
      </div>
      <div className="why-donate-container">
        <h3>Why Donate Blood</h3>
        <p>
          Blood donation is a simple act that saves millions of lives. By
          donating blood, you can help those in need durind surgeries,
          accidents, and medical conditions that require transfusion.
        </p>
      </div>

      <div className="donation-stats-container">
        <h3>Donation Stats</h3>
        <div className="donation-stats">
          <div>
            <p className="stats">1200+</p>
            <p>Successful Donations</p>
          </div>

          <div>
            <p className="stats">900+</p>
            <p>Registered Donors</p>
          </div>

          <div>
            <p className="stats">500+</p>
            <p>Patients Helped</p>
          </div>
        </div>
      </div>

      <div className="how-to-donate-container">
        <h3>How to Donate</h3>
        <div>
          <p>Check the eligibility requirements for donating blood.</p>
          <p>Book an appointment at your nearest blood donation camp.</p>
          <p>Come prepared, stay hidrated, and donate!</p>
        </div>

        <button
          className="learn-more-button"
          onClick={() => navigate("/about")}
        >
          Learn More About the Process
        </button>
      </div>

      <footer>
        Join are community of life-savers. Follow us on social media or contact
        us for more information.
      </footer>
    </div>
  );
};

export default Home;
