import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h2>ホームページです</h2>
      <Link to="/page1">Page1</Link>
      <br />
      <Link to="/page2">Page2</Link>
    </div>
  );
};
