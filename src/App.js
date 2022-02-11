import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed"

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="3ac5d5a5-73d4-4a63-88e0-17a73409da6c"
        userName="Ved"
        userSecret="qwerty1234"
        renderChatFeed = {(chatAppProps) =><ChatFeed {...chatAppProps}/>}
        onNewMessage={() =>
          new Audio("https://chat-engine-assets.s3.amazonaws.com/click.mp3")
            .play
        }
      />
    </div>
  );
}

export default App;
