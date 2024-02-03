import { ArrowForwardIcon, ArrowUpIcon } from '@chakra-ui/icons'
import "./StatsBox.css";

const StatsBox = (props) => {
    const {top, percentage, details, link, arrow} = props.content;
    return ( 
        <div className="stats-box">
            <h3>{top}</h3>
            <h1>{percentage} 
            {arrow ?  <ArrowUpIcon color='green.500'/> : <></>}
            </h1>
            <p>{details}</p>
            <p>{link} <ArrowForwardIcon/></p>
            
        </div>
     );
}
 
export default StatsBox;