import React, {Component, useState} from 'react';
import {Body} from "./styles";
import ChatRoomRight from "../../components/ChatRoomRight";
import ChatRoomMiddle from "../../components/ChatRoomMiddle";
import ChatRoomLeft from "../../components/ChatRoomLeft";
import Avatar1 from "../../assets/images/avatar.jpg";
import Avatar2 from "../../assets/images/driver.jpg";
import Avatar3 from "../../assets/images/businessman.jpg";
import Avatar4 from "../../assets/images/lion_abbos.jpg";
import Avatar5 from "../../assets/images/Flag_of_Uzbekistan.png";
import Avatar6 from "../../assets/images/Flag_of_Russia.png";
import {CoverSurFace} from "../../components/ChatRoomLeft/styles";

function ChatRoom() {

    const [chosenUserId, setChosenUserId] = useState(null)

    const [listOfMessagesSelected, setListOfMessagesSelected] = useState(false)

    const [senderUserInfoClicked, setSenderUserInfoClicked] = useState(false)

    const [users, setUsers] = useState([
        {
            userId: 1,
            avatar: Avatar1,
            firstName: "Maraim",
            lastName: "Tukhtasunov",
            lastMessage: "Hi I'm TMB",
            unreadMessage: 23
        },
        {
            userId: 2,
            avatar: Avatar2,
            firstName: "Daler",
            lastName: "Nazarov",
            lastMessage: "Hi I'm Daler",
            unreadMessage: 11
        },
        {
            userId: 3,
            avatar: Avatar3,
            firstName: "Muhammad",
            lastName: "Nazarov",
            lastMessage: "Hi I'm Muhammad",
            unreadMessage: 19
        },
        {
            userId: 4,
            avatar: Avatar4,
            firstName: "Abbos",
            lastName: "Karimov",
            lastMessage: "Hi I'm Abbos",
            unreadMessage: 1
        },
        {
            userId: 5,
            avatar: Avatar5,
            firstName: "Jamshed",
            lastName: "Toshmatov",
            lastMessage: "Hi I'm Jamshed",
            unreadMessage: 5
        },
        {
            userId: 6,
            avatar: Avatar6,
            firstName: "Akmal",
            lastName: "Sagataliev",
            lastMessage: "Hi I'm Akmal",
            unreadMessage: 65
        },
    ])

    const [messages, setMessages] = useState({
        senderInfo: {
            avatar: Avatar3,
            name: "Nazarov",
            surname: "Muhammad",
            occupation: "Driver",
            phoneNumber: "+998 (94) 410-76-44",
            email: "maraimtuxtasunov@gmail.com"
        },
        listOfMessages: [
            {
                senderUserId: 1,
                senderName: "Muhammad Nazarov",
                receiverUserId: 3,
                avatarSenderUserId: Avatar3,
                message: "salom",
                dateTime: {
                    day: 4,
                    month: "Nov",
                    year: 2021,
                    hour: 22,
                    min: 31
                }
            },
            {
                senderUserId: 3,
                senderName: "Muhammad Nazarov",
                receiverUserId: 1,
                avatarSenderUserId: Avatar3,
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores corporis " +
                    "error exercitationem hic, incidunt labore, magnam magni pariatur quod reiciendis rem " +
                    "sint, vitae? Blanditiis dicta eius illum magni ut!",
                dateTime: {
                    day: 6,
                    month: "Nov",
                    year: 2010,
                    hour: 22,
                    min: 31
                }
            },
            {
                senderUserId: 1,
                senderName: "Muhammad Nazarov",
                receiverUserId: 3,
                avatarSenderUserId: Avatar3,
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores corporis " +
                    "error exercitationem hic, incidunt labore, magnam magni pariatur quod reiciendis rem " +
                    "sint, vitae? Blanditiis dicta eius illum magni ut!",
                dateTime: {
                    day: 1,
                    month: "Nov",
                    year: 2022,
                    hour: 22,
                    min: 31
                }
            },
            {
                senderUserId: 1,
                senderName: "Muhammad Nazarov",
                receiverUserId: 3,
                avatarSenderUserId: Avatar3,
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores corporis " +
                    "error exercitationem hic, incidunt labore, magnam magni pariatur quod reiciendis rem " +
                    "sint, vitae? Blanditiis dicta eius illum magni ut!",
                dateTime: {
                    day: 1,
                    month: "Nov",
                    year: 2022,
                    hour: 22,
                    min: 31
                }
            },
            {
                senderUserId: 3,
                senderName: "Muhammad Nazarov",
                receiverUserId: 1,
                avatarSenderUserId: Avatar3,
                message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores corporis " +
                    "error exercitationem hic, incidunt labore, magnam magni pariatur quod reiciendis rem " +
                    "sint, vitae? Blanditiis dicta eius illum magni ut!",
                dateTime: {
                    day: 1,
                    month: "Nov",
                    year: 2020,
                    hour: 22,
                    min: 31
                }
            },
        ]
    })


    return (
        <Body>
            <CoverSurFace listOfMessagesSelected={listOfMessagesSelected}
                          senderUserInfoClicked={senderUserInfoClicked}
                          onClick={()=>{
                              setSenderUserInfoClicked(false);
                              setListOfMessagesSelected(false)
                          }}
            />
            <ChatRoomLeft listOfUsers={users}
                          chosenUserId={chosenUserId}
                          setChosenUserId={setChosenUserId}
                          setListMessagesSelected={setListOfMessagesSelected}
                          listMessagesSelected={listOfMessagesSelected}
            />

            {/*<p>{senderUserInfoClicked.toString()}</p>*/}
            <ChatRoomMiddle myMessages={messages}
                            listMessagesSelected={setListOfMessagesSelected}
                            setSenderUserInfoClicked={setSenderUserInfoClicked}
            />
            <ChatRoomRight senderInfo={messages.senderInfo}
                           setSenderUserInfoClicked={setSenderUserInfoClicked}
                           senderUserInfoClicked={senderUserInfoClicked}
            />
        </Body>
    );
}

export default ChatRoom;