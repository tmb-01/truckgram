import React, {Component, useEffect, useState} from 'react';
import {
    BackButton,
    ChatBoxIcon,
    ChatBoxIcons,
    ChatBoxIconSend,
    ChatRoomMiddleBody,
    ChatRoomMiddleContainer,
    ChatRoomMiddleFooter,
    ChatRoomMiddleFooterBox,
    ChatRoomMiddleHeader,
    HeaderFullName, HeaderFullNameButton,
    IconImg,
    MessageBox,
    MessageBoxAvatar, MessageBoxAvatarBox,
    MessageBoxTextBox, MessageBoxTime, MessagesDate,
    MyMessageBox,
    MyMessageBoxTextBox,
    TextareaMessage
} from "./styles";

import {p} from "../../pages/PostFreight/styles";

function ChatRoomMiddle({myMessages, listMessagesSelected, setSenderUserInfoClicked}) {


    const [myId, setMyId] = useState(3)
    const [recording, setRecording] = useState(false)
    const [textareaMessages, setTextareaMessages] = useState('')
    const [messageDate, setMessageDate] = useState({
        day: 1,
        month: 12,
        year: 2000,
        hour: 1,
        min: 45
    })

    const handleDate = (year, month, day) => {
        setMessageDate({
            year,
            month,
            day
        })
    }


    return (
        <ChatRoomMiddleContainer>

            <ChatRoomMiddleHeader>
                <BackButton onClick={()=>listMessagesSelected(true)}>
                    <p className="fas fa-arrow-left m-0"/>
                </BackButton>
                <HeaderFullNameButton onClick={()=>setSenderUserInfoClicked(true)}>
                    {myMessages.senderInfo.name} {myMessages.senderInfo.surname}
                </HeaderFullNameButton>
                <HeaderFullName>
                    {/*<p className="fas fa-arrow-left mr-3"/>*/}
                    {myMessages.senderInfo.name} {myMessages.senderInfo.surname}
                </HeaderFullName>
            </ChatRoomMiddleHeader>

            <ChatRoomMiddleBody>
                {
                    myMessages.listOfMessages.map((messageInfo) => (
                        <>
                            <MessagesDate>{messageInfo.dateTime.month} {messageInfo.dateTime.day}</MessagesDate>
                            {messageInfo.senderUserId === myId ?
                                <MyMessageBox>
                                    <MyMessageBoxTextBox me>
                                        <p>{messageInfo.message}</p>
                                        <MessageBoxTime
                                            me>{messageInfo.dateTime.hour}:{messageInfo.dateTime.min}</MessageBoxTime>
                                    </MyMessageBoxTextBox>
                                </MyMessageBox>
                                :
                                <MessageBox>
                                    <MessageBoxTextBox>
                                        <p>{messageInfo.message}</p>
                                        <MessageBoxTime>{messageInfo.dateTime.hour}:{messageInfo.dateTime.min}</MessageBoxTime>
                                    </MessageBoxTextBox>
                                </MessageBox>}
                        </>
                    ))
                }
            </ChatRoomMiddleBody>

            <ChatRoomMiddleFooterBox>
                <ChatRoomMiddleFooter>
                    <TextareaMessage minRows={1} maxRows={4} placeholder={" Write your message"}
                                     onChange={e => setTextareaMessages(e.target.value)}
                                     value={textareaMessages}
                    />
                    <ChatBoxIcons>
                        <ChatBoxIcon clip>
                            <IconImg className="img" clip/>
                        </ChatBoxIcon>
                        {textareaMessages === '' ?
                            <ChatBoxIcon microphone
                                         recording={recording}
                            >
                                <IconImg
                                    onMouseDown={() => setRecording(true)}
                                    onMouseUp={() => setRecording(false)}
                                    microphone/>
                            </ChatBoxIcon> :
                            <ChatBoxIcon send>
                                <IconImg send/>
                            </ChatBoxIcon>}

                    </ChatBoxIcons>
                </ChatRoomMiddleFooter>
            </ChatRoomMiddleFooterBox>
        </ChatRoomMiddleContainer>
    );
}

export default ChatRoomMiddle;