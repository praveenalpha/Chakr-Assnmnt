import { Box } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import Mainmidcustomer from './Mainmidcustomer/MainMidCustomer';
import Mainmidgraph from './Mainmid2/Mainmidgraph/Mainmidgraph';
import Mainmidbottom from './Mainmid2/Mainmidbottom/Mainmidbottom';
import Mainmid2 from './Mainmid2/Mainmid2';


const Mainmid = () => {
    return (
        <Wrap>
            <WrapItem>
                <Center className="mainupper-box" w='38vw' h='55vh' bg='#FFFF'>
                    <Mainmidcustomer />
                </Center>
            </WrapItem>
            <WrapItem>
                <Center className="mainupper-box" w='38vw' h='55vh' bg='#F5F5F5'>
                    <Mainmid2 />
                </Center>
            </WrapItem>
        </Wrap>
    );
}

export default Mainmid;

