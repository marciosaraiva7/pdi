import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useDecoder from "../../hooks/useDecoder";
import { coaching } from "../../components/coaching/coach.json";

import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { Container, ContainerText, SubTitle, Title, Input } from "./styles";
import { SpeechToText } from "../../components/Speech-to-text";

const Dashboard = () => {
  const baseURL = "https://pdi-backend-next.vercel.app/api/AI/chatAI";
  const localURL = "http://localhost:3000/api/AI/chatAI";
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [message, setMessage] = useState("");
  const [botResponse, setBotResponse] = useState("");
  // const [recording, setRecording] = useState(false);
  const [firstCoach, setFirstCoach] = useState(`${coaching} `);

  const decode = useDecoder(token ?? "");
  const name = decode.name;
  const image = decode.image;
  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set("Content-Type", "application/json");

  const { transcript, resetTranscript, listening } = useSpeechRecognition();
  const microphoneRef = useRef<HTMLInputElement>(null);
  // const options = {
  //   autoStart: false,
  //   continuous: true,
  //   language: "pt-BR",
  //   interimResults: true,
  // };

  function toProfile() {
    navigate("/profile");
  }
  const GetResponse = (response: any) => {
    setBotResponse(response);
    setFirstCoach("");
  };

  // const handleListing = () => {
  //   microphoneRef.current?.classList.add("listening");
  //   SpeechRecognition.startListening(options);
  //   setRecording(true);
  // };
  // const stopHandle = () => {
  //   microphoneRef.current?.classList.remove("listening");
  //   SpeechRecognition.stopListening();
  // };
  // const handleReset = () => {
  //   stopHandle();
  //   resetTranscript();
  // };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <span>O Navegador não pode te ouvir</span>;
  }

  async function HandleForm() {
    fetch("https://pdi-backend-next.vercel.app/api/AI/chatAI", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/json",
        Connection: "keep-alive",
      },
      body: JSON.stringify({
        message: firstCoach + message,
      }),
    })
      .then((res) => res.json())
      .then((data) => GetResponse(data.message.content.replace("Jarvis: ", "")))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    setMessage(transcript);
  }, [transcript]);

  // useEffect(() => {
  //   if (listening) {
  //     setRecording(true);
  //   } else if (transcript && !listening) {
  //     setRecording(false);
  //     HandleForm();
  //   }
  // }, [listening]);

  useEffect(() => {
    if (botResponse) {
      let utterance = new SpeechSynthesisUtterance(botResponse);
      const voices = window.speechSynthesis.getVoices();
      const voice = voices.find((voice) => voice.lang === "pt-BR");
      utterance.voice = voice || null;
      utterance.rate = 1.7;

      speechSynthesis.speak(utterance);
    }
  }, [botResponse]);

  return (
    <Container>
      <ContainerText>
        <Title>Olá,{name}</Title>
        <SubTitle>Pergunte o que quiser</SubTitle>
        <div>
          <p>{botResponse}</p>
        </div>
      </ContainerText>
      <form>
        <Input
          placeholder="escreva algo"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
      <button onClick={HandleForm}>Enviar</button>
      {/* <div
        className="microphone-icon-container"
        ref={microphoneRef}
        onClick={handleListing}
      >
        mic
      </div>
      <div className="microphone-status">{recording ? "Ouvindo..." : ""}</div>
      {recording && (
        <button className="microphone-stop btn" onClick={stopHandle}>
          Stop
        </button>
      )}
      {transcript && (
        <div className="microphone-result-container">
          <button className="microphone-reset btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      )} */}

      <SpeechToText setTranscriptionValue={setMessage} />
    </Container>
  );
};

export default Dashboard;
