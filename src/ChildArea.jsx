import {memo} from "react";

export const ChildArea = memo((props) => {
  const {open,onClickClose} = props;


  return (
    <>
    {open ?
    (<div style={{backgroundColor:"lime",height:"200px"}}>
      <p>子コンポーネント</p>
      <button onClick={onClickClose}>閉じる</button>
    </div>):null}
    </>
  );
});
