import { Box } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import Mainmid1 from './Mainlow1/Mainmid1';
import Mainmid2 from './Mainlow2/Mainmid2';
import Mainlow3 from './Mainlow3/Mainlow3';
// import "./Mainupper.css";


const Mainlow = () => {
    return (
        <Wrap>
            <WrapItem>
                <Center className="mainupper-box" w='28rem' bg='#ffff'>
                    <Mainmid1 />
                </Center>
            </WrapItem>
            <WrapItem>
                <Center className="mainupper-box"  w='28vw' h='30vh' bg='#ffff'>
                    <Mainmid2 />
                </Center>
            </WrapItem>
            <WrapItem>
                <Center className="mainupper-box"  w='18vw' h='30vh' bg='#ffff'>
                    <Mainlow3 />
                </Center>
            </WrapItem>
        </Wrap>
    );
}

export default Mainlow;

