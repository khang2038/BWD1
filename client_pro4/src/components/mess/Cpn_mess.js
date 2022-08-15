import React , { useContext,useEffect,useRef,useState } from "react";
import "./Cpn_mess.css"

import AppContext from "../AppContext";
import Conversation from "../conversations/Conversations";
import Messa from "../messa/messa";
import ChatOnline from "../chatOnline/ChatOnline";
import axios from "axios"
import {io} from "socket.io-client"

export default function CpnMess(){
    const {state_user} = useContext(AppContext);
    const [conversation,setconversation]=useState([]);
    const [currentchat,setcurrentchat]=useState(null);
    const [messages,setmessages]=useState([]);
    const [newmessage,setnewmessage]=useState("");
    const [arrivalmessage,setArrivalmessage]=useState(null);
    const socket = useRef(io("ws://localhost:8900"))
    const scrollRef=useRef();

    useEffect(()=>{
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage",data=>{
            setArrivalmessage({
                sender:data.senderId,
                text:data.text,
                createdAt:Date.now(),
            })
        })
    },[])

    useEffect(()=>{
        arrivalmessage && currentchat?.members.includes(arrivalmessage.sender) &&
        setmessages(prev=>[...prev,arrivalmessage]) 
    },[arrivalmessage,currentchat])

    useEffect(()=>{
         socket.current.emit("addUser", state_user.user.temp._id )
         socket.current.on("getUsers",users=>{
            console.log(users)
         })
    },[state_user.user.temp])

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


    const handleSubmit = async (e)=>{
         e.preventDefault();
         const message = {
            sender:state_user.user.temp._id,
            text:newmessage,
            conversationId : currentchat._id 
         }

         const receiverId = currentchat.members.find(member=> member !== state_user.user.temp._id)

         socket.current.emit("sendMessage",{
            senderId:state_user.user.temp._id,
            receiverId,
            text:newmessage,
         })

         try{

            const res=await axios.post("/message",message)
            setmessages([...messages,res.data])
            setnewmessage("")

         }catch(err){
            console.log(err)
         }
    }

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({behavior:"smooth"})
    },[messages])

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
                           <div ref={scrollRef}> 
                                <Messa message={m} own={m.sender === state_user.user.temp._id} />
                           </div> 
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