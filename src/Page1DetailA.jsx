import { Link, useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation();
  console.log(location);

  const histry = useHistory();

  const onClickBack = () => histry.goBack();
  return (
    <div>
      <h2>ページ１Aです</h2>
      <Link to="/page1">Page1</Link>
      <br />
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
