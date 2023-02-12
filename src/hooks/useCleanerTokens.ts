export default function useCleanerTokens() {
 window.localStorage.removeItem("token");
 window.localStorage.removeItem("spotifyToken");
 return
}