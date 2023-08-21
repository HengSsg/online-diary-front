import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import DiaryList from "./pages/diary/DiaryList";
import ShareDiary from "./pages/diary/ShareDiary";
import Login from "./pages/member/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/mydiary" element={<DiaryList />}></Route>
          <Route path="/sharediary" element={<ShareDiary />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
