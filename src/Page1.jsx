import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];

  const histry = useHistory();

  const onClickDetailA = () => histry.push("/page1/detailA");
  return (
    <div>
      <h2>ページ１です</h2>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetrailA</Link>
      <br />
      <Link to="/page1/detailB">DetrailB</Link>
      <br />
      <Link to="/">Home</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
