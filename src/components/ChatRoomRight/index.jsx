import React, {Component, useRef} from 'react';

import {ReactComponent as CloseIcon} from "../../assets/icons/letter-x.svg"

import {
    Avatar,
    AvatarContactInfo,
    AvatarContainer,
    AvatarFullName, AvatarInfoBox,
    AvatarOccupation,
    ChatRoomRightBody, ContactIcon, Contacts,
    CloseSenderInfo

} from "./styles";
import AvatarPic from "../../assets/images/lion_abbos.jpg"

// import {CloseSenderInfo} from "../ChatRoomMiddle/styles";

function ChatRoomRight({senderInfo, setSenderUserInfoClicked,senderUserInfoClicked}) {

    return (
        <ChatRoomRightBody senderUserInfoClicked={senderUserInfoClicked}>
            <CloseSenderInfo onClick={() => setSenderUserInfoClicked(false)}>
                {/*<img src={CloseIcon} alt="" width={"25px"} height={"25px"}/>*/}
                <CloseIcon width={"25px"} height={"25px"} color={"black"}/>
            </CloseSenderInfo>
            <AvatarContainer>
                <Avatar avatar={senderInfo.avatar}/>
                <AvatarInfoBox>
                    <AvatarFullName>
                        {senderInfo.name} {senderInfo.surname}
                    </AvatarFullName>
                    <AvatarOccupation>
                        {senderInfo.occupation}
                    </AvatarOccupation>
                </AvatarInfoBox>
            </AvatarContainer>

            <AvatarContactInfo>

                <Contacts>
                    <ContactIcon>
                        <i className="fas fa-mobile-alt"/>
                    </ContactIcon>
                    {document.queryCommandSupported('copy') &&
                    <span>
                        {senderInfo.phoneNumber}
                        {/*+998 (94) 410-76-44*/}
                    </span>}
                </Contacts>

                {/*<button onClick={copyToClipboard}>Copy</button>*/}

                {/*<textarea ref={textAreaRef} name="" id="" cols="30" rows="10">salom</textarea>*/}

                <Contacts>
                    <ContactIcon>
                        <i className="far fa-envelope"/>
                    </ContactIcon>
                    {senderInfo.email}
                </Contacts>

            </AvatarContactInfo>

        </ChatRoomRightBody>
    );
    // }
}

export default ChatRoomRight;