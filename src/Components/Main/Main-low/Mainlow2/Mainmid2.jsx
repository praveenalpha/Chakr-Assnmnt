import { Progress } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import "./Mainmid2.css";

const Mainlow2 = () => {
    return (
        <div className="main-mid-2">

            <Heading color={'black'} className="main-mid-2-head">Top States</Heading>
            <Stack spacing={5}>
                <Progress size='lg' value={86}
                    sx={{
                        '& > div': {
                            background: 'linear-gradient(90deg, hsla(39, 100%, 72%, 1) 0%, hsla(0, 0%, 100%, 1) 100%);',
                        },
                    }}
                />
                <Progress colorScheme='green' size='lg' value={80}
                    sx={{
                        '& > div': {
                            background: 'linear-gradient(90deg, hsla(39, 100%, 72%, 1) 0%, hsla(0, 0%, 100%, 1) 100%);',
                        },
                    }}
                />
                <Progress colorScheme='green' size='lg' value={70}
                    sx={{
                        '& > div': {
                            background: 'linear-gradient(90deg, hsla(39, 100%, 72%, 1) 0%, hsla(0, 0%, 100%, 1) 100%);',
                        },
                    }}
                />
                <Progress colorScheme='green' size='lg' value={75}
                    sx={{
                        '& > div': {
                            background: 'linear-gradient(90deg, hsla(39, 100%, 72%, 1) 0%, hsla(0, 0%, 100%, 1) 100%);',
                        },
                    }}
                />

            </Stack>
        </div>

    );
}

export default Mainlow2;