import { useNavigate } from "react-router-dom";
const BecomeDonorButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/donor");
      }}
    >
      Become a Donor
    </button>
  );
};

export default BecomeDonorButton;
