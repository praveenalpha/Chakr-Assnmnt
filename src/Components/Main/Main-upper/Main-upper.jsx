import { Box } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import "./Mainupper.css";
import Box1 from './Box1/Box1';
import Box2 from './Box2/Box2';
import Box3 from './Box3/Box3';

const Mainupper = () => {
    return (
        <Wrap>
            <WrapItem>
                <Center className="mainupper-box" w='27vw' h='30vh' bg='#ffff'>
                    <Box1 />
                </Center>
            </WrapItem>
            <WrapItem>
                <Center className="mainupper-box"  w='27vw' h='30vh'bg='#ffff'>
                    <Box2 />
                </Center>
            </WrapItem>
            <WrapItem>
                <Center className="mainupper-box"  w='18vw' h='30vh'bg='#ffff'>
                    <Box3 />
                </Center>
            </WrapItem>
        </Wrap>
    );
}

export default Mainupper;