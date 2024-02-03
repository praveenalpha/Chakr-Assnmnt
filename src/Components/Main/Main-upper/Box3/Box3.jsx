import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons';
import "./Box3.css";

const Box3 = () => {
    return (
        <div className="box3">
            <h1>Quarter goal</h1>
            <CircularProgress size={"7rem"} value={84} color='orange'>
                <CircularProgressLabel>84%</CircularProgressLabel>
            </CircularProgress>
            <p>All goals <ArrowForwardIcon /></p> 
        </div>
    );
}

export default Box3;