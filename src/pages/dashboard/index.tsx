import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useDecoder from "../../hooks/useDecoder";

const Dashboard = () => {
  const [name, setName] = useState('')
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      let decode = useDecoder(token ?? "");
      setName(decode.name)
    }
  },[token])

  

  function toProfile() {
    navigate("/Profile");
  }

  return (
    <div>
      <h1>Olá, {name}</h1>
      <button onClick={() => toProfile()}>to Profile</button>
    </div>
  );
};

export default Dashboard;
