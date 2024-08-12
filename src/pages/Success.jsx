import { useLocation } from "react-router";

const Success = () => {
  const location = useLocation();
  console.log(location.state.stripeData);
  return <div>successful!</div>;
};

export default Success;