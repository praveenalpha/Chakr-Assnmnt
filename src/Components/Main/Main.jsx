import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import "./Main.css";
import Mainlow from './Main-low/Main-low';
import Mainupper from './Main-upper/Main-upper';
import Mainmid from './Main-mid/Main-mid';

const Main = () => {
    return (
        <VStack
            className = "main-vstack"
            spacing={2}
            align='stretch'
        >
            <Mainupper />
            <Mainmid />
            <Mainlow />
        </VStack>
    );
}

export default Main;