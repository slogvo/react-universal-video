import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div>
      {/* HTML5 */}
      <VideoPlayer
        url="https://videos.pexels.com/video-files/5013307/5013307-hd_1920_1080_30fps.mp4"
        width="800"
        height="450"
      />

      {/* Youtube */}
      <VideoPlayer
        url="https://www.youtube.com/watch?v=oA91tf1Udr0"
        width="800"
        height="450"
      />

      {/* HLS */}
      <VideoPlayer
        url="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default App;
