# @slogvo/react-universal-video

`@slogvo/react-universal-video` is a React module that allows you to easily play videos from different sources such as HTML5, YouTube, and streaming services (like HLS). Simply provide a video URL, and the module will automatically select the appropriate player to play the video. You can also customize the player’s style as needed.

## Installation

To use the module, you can install it via npm, yarn or pnpm:

```bash
npm i @slogvo/react-universal-video
```

```bash
yarn add @slogvo/react-universal-video
```

```bash
pnpm add @slogvo/react-universal-video
```

## Usage

To use the video player, simply import the VideoPlayer component and pass the video URL as a prop.

### Example:

```typescript
import React from "react";
import VideoPlayer from "@slogvo/react-universal-video";

const App = () => {
  return (
    <div>
      // HTML5
      <VideoPlayer
        url="https://videos.pexels.com/video-files/5013307/5013307-hd_1920_1080_30fps.mp4"
        width="800"
        height="450"
      />
      // Yotube
      <VideoPlayer
        url="https://www.youtube.com/watch?v=oA91tf1Udr0"
        width="800"
        height="450"
      />
      // HLS
      <VideoPlayer
        url="https://live-hls-abr-cdn.livepush.io/live/bigbuckbunnyclip/index.m3u8"
        width="800"
        height="450"
      />
    </div>
  );
};

export default App;
```

## VideoPlayer Component Props

| Prop        | Description                                                                   | Default |
| ----------- | ----------------------------------------------------------------------------- | ------- |
| `url`       | The video URL to play. This can be a YouTube URL, MP4 file, or streaming URL. | `-`     |
| `width`     | The width of the player.                                                      | `100%`  |
| `height`    | The height of the player.                                                     | `400px` |
| `autoplay`  | Whether the video should autoplay.                                            | `false` |
| `controls`  | Whether to show video controls (play, pause, volume, etc.).                   | `true`  |
| `className` | Custom CSS class for the player.                                              | `-`     |

## Components

### VideoPlayer

The main component of this module. It automatically selects the appropriate player (YouTube, HTML5, or streaming) based on the video URL you provide.

```typescript
import VideoPlayer from "@slogvo/react-universal-video";
```

## How It Works

The VideoPlayer component automatically determines the type of video based on the provided URL:

<div><strong>YouTube:</strong> If the URL is a YouTube video, the YoutubePlayer component will be used.
<div>

<div><strong>HTML5 (MP4):</strong> If the URL is an MP4 file (or other HTML5 video formats), the Html5 component will be used.</div>
<div><strong>Stream (HLS):</strong> If the URL is a streaming video (e.g., m3u8), the VideojsPlayer component will be used.</div>

## Customizing Styles

You can add custom CSS classes to the player using the className prop to style the player as needed.

## Utility Functions

You can use utility functions from @slogvo/react-universal-video to interact with video URLs, such as extracting YouTube video IDs:

```typescript
import { getYoutubeId } from "@slogvo/react-universal-video";

const youtubeId = getYoutubeId("https://www.youtube.com/watch?v=9cklv0qQ8Jw");
console.log(youtubeId); // Output: 9cklv0qQ8Jw
```

## Contributing

If you'd like to contribute to @slogvo/react-universal-video, feel free to fork the repository and submit a pull request. We appreciate your contributions!
