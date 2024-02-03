import { Heading } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import "./Mainmid1.css";

const Mainlow2 = () => {
    return (
        <div className="main-mid-1">
            <Heading color={'black'} className="main-mid-1-head">Chats</Heading>
            <p className='main-mid-1-p'>2 unread messages</p>
            <div className="main-mid-1-bottom">
                <Wrap>
                    <WrapItem>
                        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                    </WrapItem>
                    <WrapItem>
                        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                    </WrapItem>
                    <WrapItem>
                        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                    </WrapItem>
                    <WrapItem>
                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                    </WrapItem>
                </Wrap>
            </div>
        </div>
    );
}

export default Mainlow2;