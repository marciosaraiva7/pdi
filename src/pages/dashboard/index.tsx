import { useNavigate } from "react-router-dom";
import useDecoder from "../../hooks/useDecoder";

const token = localStorage.getItem("token");

let decode = useDecoder(token ?? "")

console.log(decode.name)

const Dashboard = () => {
  const navigate = useNavigate();

  function toProfile() {
    navigate("/Profile");
  }

  return (
    <div>
      <h1>Olá</h1>
      <button onClick={() => toProfile()}>to Profile</button>
    </div>
  );
};

export default Dashboard;
