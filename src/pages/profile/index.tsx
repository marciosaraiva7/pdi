import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signout } from "../../store/auth/actions";
import { Button, Container } from "@nextui-org/react";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  async function checkToken() {
    const token = window.localStorage.getItem("token");
    const baseURL = "https://pdi-backend-next.vercel.app/api";
     const bearer = 'Bearer ' + token;

    try {
      const response = await fetch(baseURL + "/auth/checkToken", {
        method: "GET",
        headers: {
         'Authorization': bearer,
         'Content-Type': 'application/json'
     }
      });

      const data = await response.json();
      const objectData = {
        status: response.status,
        body: data,
      };

      if (objectData.status === 200) {
        setMessage(objectData.body.message);
      }
      setMessage(objectData.body.message);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      {/* <h1>Esse é o perfil do {username}</h1> */}
      <Container>
        <Button bordered color="success" auto onPress={checkToken}>
          Checar token
        </Button>
        <p>{message}</p>
      </Container>
    </div>
  );
};

export default Profile;
