import StatsBox from '../StatsBox/StatsBox';

const Box2 = () => {
    const content = {
        top: "Lost deals",
        percentage: "4%",
        details: "You closed 96 out of 100 deals",
        link: "All deals ",
        arrow: false
    }
    return (
        <StatsBox content = {content}/>
    );
}

export default Box2;