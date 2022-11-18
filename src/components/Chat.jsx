import React, { useContext } from 'react';
import Camera from '../assets/img/Camera.svg';
import Add from '../assets/img/Add.svg';
import More from '../assets/img/More.svg';
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from "../context/ChatContext";


const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="leftChat">
          <span><img className='img' src={data.user?.photoURL} alt="" /></span>
          <span>{data.user?.displayName}</span>
        </div>
        <div className="chatIcons">
          <img src={Camera} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;