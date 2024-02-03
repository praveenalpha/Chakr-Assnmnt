import StatsBox from '../StatsBox/StatsBox';

const Box1 = () => {
    const content = {
        top: "Revenue",
        percentage: "15%",
        details: "Increase compared to last week",
        link: "Revenues report ",
        arrow: true
    }
    return (
        <StatsBox content = {content}/>
    );
}

export default Box1;