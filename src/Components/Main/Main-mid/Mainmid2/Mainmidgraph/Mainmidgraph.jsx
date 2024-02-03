import { Container } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
// import {Chart as ChartJS} from "react-chartjs-2";
import {Bar, Doughnut, Line} from "react-chartjs-2";
import "./Mainmidgraph.css";
import { ChartComponent } from './Graph';

const Mainmidgraph = () => {
    const initialData = [
        { time: '2016-12-29', value: 10 },
        { time: '2017-12-29', value: 12 },
        { time: '2018-12-29', value: 30 },
        { time: '2019-12-29', value: 50 },
        { time: '2020-12-29', value: 10 },
        { time: '2021-12-29', value: 15 },
        { time: '2022-12-29', value: 50 },
        { time: '2023-12-29', value: 80 },
    ];
    return (
        <Container className='main-mid-graph'>
            <div className="main-mid-graph-top">
                <Heading>Growth</Heading>
                <p>year <ChevronDownIcon /></p>
            </div>
            <div className="graph">
                <ChartComponent data={initialData}></ChartComponent>
                {/* // <Bar 
                //     data = {{
                //         labels: ["A", "B", "C"],
                //         datasets: [
                //             {
                //                 label:  "Revenue",
                //                 data: [200, 300, 400    ]
                //             }
                //         ]
                //     }}
                // /> */}
            </div>
        </Container>
    );
}

export default Mainmidgraph;