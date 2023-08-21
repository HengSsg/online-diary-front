import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import ShareDiary from "./pages/diary/ShareDiary";
import Login from "./pages/member/Login";
import DiaryView from "./pages/diary/DiaryView";
import Header from "./components/Header";
import New from "./pages/diary/New";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/mydiary" element={<DiaryView />}></Route>
          <Route path="/new" element={<New />}></Route>
          {/* <Route path="/edit/:id" element={<Edit />}></Route> */}
          {/* <Route path="/diary/:id" element={<Diary />}></Route> */}
          <Route path="/sharediary" element={<ShareDiary />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
