import { Heading } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon, PlusSquareIcon } from '@chakra-ui/icons'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import "./Mainlow3.css";

const Mainlow3 = () => {
    return (
        <div className="main-low-3">
            <Heading color={'black'} className="main-low-3-head">New Deals</Heading>
            <Wrap spacing='0.2rem' align='center'>
                <WrapItem>
                    <Center fontSize={'x-small'} padding={'0.4rem'} bg='#FFF7E8' borderRadius={'0.4rem'}  color={"#734A00"}>
                        <PlusSquareIcon /> Fruit2Go
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center fontSize={'x-small'} bg='#FFF7E8' padding={'0.4rem'}  borderRadius={'0.4rem'}  color={"#734A00"}>
                        <PlusSquareIcon /> CCNT
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center fontSize={'x-small'} bg='#FFF7E8' padding={'0.4rem'}  borderRadius={'0.4rem'}  color={"#734A00"}>
                        <PlusSquareIcon /> Marshals MKT
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center fontSize={'x-small'} bg='#FFF7E8' padding={'0.4rem'} borderRadius={'0.4rem'}  color={"#734A00"}>
                        <PlusSquareIcon /> Little Brazil Vegan
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center fontSize={'x-small'} bg='#FFF7E8' padding={'0.4rem'}  borderRadius={'0.4rem'}  color={"#734A00"}>
                        <PlusSquareIcon /> Joana Mini-market
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center fontSize={'x-small'} bg='#FFF7E8' padding={'0.4rem'}  borderRadius={'0.4rem'}  color={"#734A00"}>
                        <PlusSquareIcon /> Little Brazil Vegan
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center fontSize={'x-small'} bg='#FFF7E8' padding={'0.4rem'}  borderRadius={'0.4rem'}  color={"#734A00"}>
                        <PlusSquareIcon /> Target
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center fontSize={'x-small'} bg='#FFF7E8' padding={'0.4rem'}  borderRadius={'0.4rem'}  color={"#734A00"}>
                        <PlusSquareIcon /> Organic Place
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center fontSize={'x-small'} bg='#FFF7E8' padding={'0.4rem'}  borderRadius={'0.4rem'}  color={"#734A00"}>
                        <PlusSquareIcon /> Morello's
                    </Center>
                </WrapItem>
            </Wrap>
        </div>
    );
}

export default Mainlow3;