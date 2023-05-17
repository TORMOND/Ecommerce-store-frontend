// import from 'analtics.css';
import Bar from './Bar';
import SparkLine from './SparkLine';

const Analytics = ()=> {
    const SparklineAreaData = [
        { x: 1, yval: 2 },
        { x: 2, yval: 6 },
        { x: 3, yval: 8 },
        { x: 4, yval: 5 },
        { x: 5, yval: 10 },
      
      ];
return(
    <div className="Analytics">
        <h1>Smth...</h1>
 <SparkLine currentColor="purple" id="column-sparkLine" height="100px"
  type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
  <Bar />
    </div>
)
}

export default Analytics;