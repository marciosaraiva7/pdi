import React, { useState } from "react";

type SpeechToTextProps = {
  setTranscriptionValue: any;
};

type SpeechToTextState = {
  transcript: string;
  audioFile: Blob | null;
};

export const SpeechToText = (props: SpeechToTextProps) => {
  const [transcript, setTranscript] =
    useState<SpeechToTextState["transcript"]>("");
  const [audioFile, setAudioFile] =
    useState<SpeechToTextState["audioFile"]>(null);

  type TranscriptionResponse = {
    id: string;
    object: string;
    object_mode: string;
    created: number;
    model: string;
    status: string;
    audio_duration_seconds: number;
    text: string;
  };

  const handleStartRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();

      const audioChunks: BlobPart[] = [];
      mediaRecorder.addEventListener("dataavailable", (event) => {
        audioChunks.push(event.data);
      });

      mediaRecorder.addEventListener("stop", async () => {
        const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
        setAudioFile(audioBlob);
        const transcript = await transcribeAudio(audioBlob);
        setTranscript(transcript);
        props.setTranscriptionValue(transcript);
      });

      setTimeout(() => {
        mediaRecorder.stop();
      }, 10000); // Stop recording after 5 seconds
    });
  };

  const transcribeAudio = async (audioData: Blob): Promise<string> => {
    let formData = new FormData();
    formData.append("file", audioData, "audioteste.wav");
    formData.append("model", "whisper-1");

    const response = await fetch(
      "https://api.openai.com/v1/audio/transcriptions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer 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`,
        },
        body: formData,
      }
    );
    const data: TranscriptionResponse = await response.json();
    return data.text;
  };
  return (
    <div>
      <button onClick={handleStartRecording}>Iniciar gravação</button>
    </div>
  );
};
