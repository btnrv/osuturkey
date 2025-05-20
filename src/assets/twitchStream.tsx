import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import "../styles/otr25.scss";

interface TwitchStreamProps {
  channel: string;
}

// this gets called when playback starts
function show() {
  const element = document.querySelector('.twitch-embed') as HTMLElement;
  if (element) {
    console.log('Twitch stream is now visible');
    element.style.removeProperty('visibility');
    element.style.removeProperty('height');

  }
}

export function TwitchStream({ channel }: TwitchStreamProps) {
  return (
    <div
      className="twitch-embed"
      style={{visibility: "hidden", height: 0}}
    >
      <ReactTwitchEmbedVideo
        channel={channel}
        layout="video"
        theme="dark"
        width="480"
        height="270"
        autoplay={true}
        muted={false}
        onPlay={show}
      />
    </div>
  );
}