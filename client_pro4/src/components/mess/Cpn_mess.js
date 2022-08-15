import React , { useContext,useEffect,useRef,useState } from "react";
import "./Cpn_mess.css"

import AppContext from "../AppContext";
import Conversation from "../conversations/Conversations";
import Messa from "../messa/messa";
import ChatOnline from "../chatOnline/ChatOnline";
import axios from "axios"

export default function CpnMess(){
    const {state_user} = useContext(AppContext);
    const [conversation,setconversation]=useState([]);
    const [currentchat,setcurrentchat]=useState(null);
    const [messages,setmessages]=useState([]);
    const [newmessage,setnewmessage]=useState("");

    useEffect(()=>{
        const getConversation=async ()=>{
            try{
               const res=await axios.get("/conversation/"+ state_user.user.temp._id)     
                setconversation(res.data)
            }catch(err){
                console.log(err)
            }
        }
        getConversation();
    },[state_user.user.temp._id])

    useEffect(()=>{
        const getMessages= async ()=>{
            try{
                const res = await axios.get("/message/"+currentchat?._id)
                setmessages(res.data)
            }catch(err){
                console.log(err)
            }
        }
        getMessages()
    },[currentchat])

    console.log(messages)

    const handleSubmit = async (e)=>{
         e.preventDefault();
         const message = {
            sender:state_user.user.temp._id,
            text:newmessage,
            conversationId : currentchat._id 
         }
         try{

            const res=await axios.post("/message",message)
            setmessages([...messages,res.data])
         }catch(err){
            console.log(err)
         }
    }

    return(
        <div className="mess">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder="search for friend" className="chatMenuInput"></input>
                    {conversation.map((c)=>(
                        <div onClick={()=>setcurrentchat(c)}>
                            <Conversation conversation={c} currentUser={state_user.user.temp} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                   {
                    currentchat ? 
                    <>
                    <div className="chatBoxTop">
                       {messages.map(m=>(
                           <Messa message={m} own={m.sender === state_user.user.temp._id} />
                       ))} 
                    </div>
                    <div className="chatBoxBottom">
                        <textarea
                         className="chatMessageInput" 
                         placeholder="write something..."
                         onChange={(e)=>setnewmessage(e.target.value)}
                         value={newmessage}
                         >

                         </textarea>
                        <button className="chatSubmitButton" onClick={handleSubmit}>Send</button>
                    </div>
                    </>:<span className="noConversationtext">Open a conversation to start a chat </span>}
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