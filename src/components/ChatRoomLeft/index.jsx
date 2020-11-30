import React, {Component} from 'react';
import {
    ChatRoomLeftBody,
    ChatRoomLeftList,
    ChatRoomLeftListAvatar, ChatRoomLeftListBox,
    ChatRoomLeftListContainer,
    ChatRoomLeftListFullName,
    ChatRoomLeftListLastMessage,
    ChatRoomLeftListNumberOfMessage,
    ChatRoomLeftListNumberOfUnreadMessage,
    ChatRoomSearchInput,
    ChatRoomSearchInputBox, CoverSurFace,
    ListFullNameAndLastMessage
} from "./styles";

import Avatar1 from "../../assets/images/avatar.jpg";
import Avatar2 from "../../assets/images/driver.jpg";
import Avatar3 from "../../assets/images/businessman.jpg";
import Avatar4 from "../../assets/images/lion_abbos.jpg";
import Avatar5 from "../../assets/images/Flag_of_Uzbekistan.png";
import Avatar6 from "../../assets/images/Flag_of_Russia.png";
import Avatar7 from "../../assets/images/Flag_of_Kazahstan.png";


function ChatRoomLeft({listOfUsers, chosenUserId, setChosenUserId, setListMessagesSelected, listMessagesSelected}) {

    return (
        <>
            <CoverSurFace/>
            <ChatRoomLeftBody listMessagesSelected={listMessagesSelected}>
                <ChatRoomSearchInputBox>
                    <ChatRoomSearchInput placeholder={"Search"}/>
                </ChatRoomSearchInputBox>
                <ChatRoomLeftListContainer>
                    {/*<ChatRoomLeftListBox>*/}
                    {listOfUsers.map(({userId, avatar, firstName, lastName, lastMessage, unreadMessage}, index) => {
                        return (
                            <ChatRoomLeftList key={userId}
                                              dragable="true"
                                              ui-draggable="true"
                                              drag="room"
                                              selected={chosenUserId === userId}
                                              onClick={
                                                  () => {
                                                      setChosenUserId(userId)
                                                      setListMessagesSelected(false)
                                                  }
                                              }
                            >
                                <ChatRoomLeftListAvatar>
                                    <img src={avatar} alt=""/>
                                </ChatRoomLeftListAvatar>
                                <ListFullNameAndLastMessage>
                                    <ChatRoomLeftListFullName>{firstName + " " + lastName}</ChatRoomLeftListFullName>
                                    <ChatRoomLeftListLastMessage>{lastMessage}</ChatRoomLeftListLastMessage>
                                </ListFullNameAndLastMessage>
                                <ChatRoomLeftListNumberOfUnreadMessage>{unreadMessage}</ChatRoomLeftListNumberOfUnreadMessage>
                            </ChatRoomLeftList>
                        )
                    })}
                    {/*</ChatRoomLeftListBox>*/}
                </ChatRoomLeftListContainer>
            </ChatRoomLeftBody>
        </>
    );
}

export default ChatRoomLeft;