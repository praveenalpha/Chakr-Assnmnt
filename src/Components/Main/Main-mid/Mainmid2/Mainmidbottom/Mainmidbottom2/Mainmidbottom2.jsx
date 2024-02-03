import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
  } from '@chakra-ui/react'
import "./Mainmidbottom2.css"

const Mainmidbottom2 = () => {
    return (
        <Stat height={'13vh'} bg={"#ffff"} className='main-mid-bottom-2'>
            <StatLabel className='main-mid-bottom-2-head' fontSize={"1.4rem"}>Top Year</StatLabel>
            <StatNumber color={"#734A00"}>2023</StatNumber>
            <StatHelpText className='main-mid-bottom-2-bottom'  color={"gray"}>96K  sold so far</StatHelpText>
        </Stat>
    );
}

export default Mainmidbottom2;