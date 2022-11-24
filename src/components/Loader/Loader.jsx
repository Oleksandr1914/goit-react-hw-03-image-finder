import { ThreeCircles } from 'react-loader-spinner';
import '../styles.css';

const Loader = () => {
  return (
    <div className="loader">
      <ThreeCircles
        height="100"
        width="100"
        color="#303f9f"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};

export default Loader;
