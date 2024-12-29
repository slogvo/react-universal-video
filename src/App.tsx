import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div>
      <VideoPlayer
        url="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
        width="800"
        height="450"
      />
    </div>
  );
}

export default App;
