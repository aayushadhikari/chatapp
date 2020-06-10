import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import Infobar from "../components/Inforbar";
import Input from "../components/Input";
import Messages from "../components/Messages";

let socket;
const SignedIn = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const endpoint = "localhost:3005";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(endpoint);
    setName(name);
    setRoom(room);
    socket.emit("join", { name: name, room: room }, () => {});
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [endpoint, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  };

  console.log(message, messages);

  return (
    <div className="outerContainer">
      <div className="container">
        <Infobar room={room} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
        <Messages />
      </div>
    </div>
  );
};

export default SignedIn;
