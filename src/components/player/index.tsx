import React from "react";
import SpotifyPlayer from "react-spotify-web-playback";


interface SpotifyProps {
  accessToken: string;
  trackUri: string;
}

export default function Player({ accessToken, trackUri }: SpotifyProps) {
  if (!accessToken) return null;
  return (
    <SpotifyPlayer
      token={"BQDT9Ibx6lgeq7YUyUUz7zKpyqsajbilamsRa3SJwn3F3pvKjIzlil0fuxVRM1"}
      showSaveIcon
      uris={trackUri}
    />
  );
}
