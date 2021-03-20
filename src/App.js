import { BrowserRouter } from "react-router-dom";

import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>ルーティング練習</h1>
      </div>
      <Router />
    </BrowserRouter>
  );
}
