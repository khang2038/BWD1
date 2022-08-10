import React , { useContext } from "react";
import "./Cpn_mess.css"

import AppContext from "../AppContext";
import Conversation from "../conversations/Conversations";
import Messa from "../messa/messa";
import ChatOnline from "../chatOnline/ChatOnline";

export default function CpnMess(){
    const {state_user} = useContext(AppContext);
    
    console.log(state_user.user);
    return(
        <div className="mess">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder="search for friend" className="chatMenuInput"></input>
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    <div className="chatBoxTop">
                        <Messa />
                        <Messa own={true}/>
                        <Messa />
                        <Messa own={true}/>
                        <Messa />
                        <Messa own={true}/>
                        <Messa />
                        <Messa own={true}/>
                        <Messa />
                        <Messa own={true}/>
                        <Messa />
                    </div>
                    <div className="chatBoxBottom">
                        <textarea className="chatMessageInput" placeholder="write something..."></textarea>
                        <button className="chatSubmitButton">Send</button>
                    </div>
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    <ChatOnline />
                </div>
            </div>
        </div>    
    )
}