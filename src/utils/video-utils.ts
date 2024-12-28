export const getVideoType = (url: string): "youtube" | "mp4" | "stream" => {
  // YouTube URL patterns
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;

  // Simple extension check
  const extension = url.split(".").pop()?.toLowerCase();

  if (youtubeRegex.test(url)) {
    return "youtube";
  } else if (extension === "mp4") {
    return "mp4";
  }
  return "stream"; // For HLS, m3u8 etc.
};

export const getYoutubeId = (url: string): string => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : "";
};
