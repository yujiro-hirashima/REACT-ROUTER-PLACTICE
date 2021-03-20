import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h2>ページ２です</h2>
      <Link to="/">Home</Link>
      <br />
      <Link to="/page2/200">Url Parameter</Link>
      <br />
      <Link to="/page2/200?name=hoge">Query Parameter</Link>
    </div>
  );
};
