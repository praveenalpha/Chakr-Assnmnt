import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
  } from '@chakra-ui/react'
import "./Mainmidbottom1.css";

const Mainmidbottom1 = () => {
    return (
        <Stat height={'13vh'} bg={"#ffff"} className='main-mid-bottom-1'>
            <StatLabel className='main-mid-bottom-1-head' fontSize={"1.4rem"}>Top Month</StatLabel>
            <StatNumber color={"#734A00"}>November</StatNumber>
            <StatHelpText color={"#FFA500"}>2019</StatHelpText>
        </Stat>
    );
}

export default Mainmidbottom1;