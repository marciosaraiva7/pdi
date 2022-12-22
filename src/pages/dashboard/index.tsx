import { useNavigate } from "react-router-dom";
import useDecoder from "../../hooks/useDecoder";

const Dashboard = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const decode = useDecoder(token ?? "");
  const name = decode.name




  function toProfile() {
    navigate("/profile");
  }

  return (
    <div>
      <h1>Olá,{name} </h1>
      <button onClick={() => toProfile()}>to Profile</button>
    </div>
  );
};

export default Dashboard;
