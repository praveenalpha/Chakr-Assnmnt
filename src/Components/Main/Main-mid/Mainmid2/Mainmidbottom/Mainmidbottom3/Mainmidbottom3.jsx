import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,

} from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import "./Mainmidbottom3.css";

const Mainmidbottom3 = () => {
    return (
        <Stat height={'13vh'} bg={"#ffff"} className='main-mid-bottom-3'>
            <StatLabel className='main-mid-bottom-3-head' fontSize={"1.4rem"}>Top Buyer</StatLabel>
            <WrapItem className='main-mid-bottom-3-avatar' >
                <Avatar  size='xs' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
            </WrapItem>
            <StatHelpText className='main-mid-bottom-3-avatar'  color={"black"}>Maggie Johnson</StatHelpText>
            <p className='main-mid-bottom-3-p'>Oasis Organic Inc</p>
        </Stat>
    );
}

export default Mainmidbottom3;