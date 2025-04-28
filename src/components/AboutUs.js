import "../css/about-us-style.css";
import jane from "../files/images/jane_doe.svg";
import john from "../files/images/john_smith.svg";
import emily from "../files/images/emily_davis.svg";
import BecomeDonorButton from "./BecomeDonorButton";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>

      <p className="about-us-intro">
        Saving lives, one drop at a time. Our mission is to make blood donation
        easy, accessible and imapctful.
      </p>

      <h2>Our Mission</h2>
      <p>
        We are dedicated to bridging the gap between blood donors and those in
        need. Our platform connects donors with blood banks and hospitals,
        ensuring that every donation makes a difference. By providing reliable
        information, convenient scheduling and real-time tracking, we aim to
        make the donation process smooth and transparent.
      </p>

      <h2>Our Vision</h2>
      <p>
        Our vision is to create a world where no life is lost due to a shortage
        of blood. We strive to build a community of regular donors and ensure
        that blood is always available for those whp need it most. Through
        awareness campaigns, community events and partnerships with healthcare
        organizations, we work tirelessly to achieve this goal.
      </p>

      <h2>Meet Our Team</h2>

      <div className="team-members">
        <div>
          <img src={jane} alt="Jane Doe" title="Jane Doe" />

          <div className="team-member-name">
            <h4>Jane Doe</h4>
            <p>Founder & CEO</p>
          </div>
        </div>
        <div>
          <img src={john} alt="John Smith" title="John Smith" />
          <div className="team-member-name">
            <h4>John Smith</h4>
            <p>Co-Founder & Operation Lead</p>
          </div>
        </div>
        <div>
          <img src={emily} alt="Emily Davis" title="Emily Davis" />
          <div className="team-member-name">
            <h4>Emily Davis</h4>
            <p>Head of Marketing</p>
          </div>
        </div>
      </div>
      <div className="join-us-container">
        <h2>Join Us in Saving Lives</h2>
        <p>
          Wether you're a donor, volunteer or advocate, you cand help us achieve
          our mission. Together, we can make sure that no one has to wait for
          the blood they need. Become a part of our community today.
        </p>
        <BecomeDonorButton />
      </div>
    </div>
  );
};

export default AboutUs;
