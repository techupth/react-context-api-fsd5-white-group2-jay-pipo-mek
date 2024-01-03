import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { UserContext } from "./contexts/UserContext.jsx";

import HomePage from "./pages/HomePage.jsx";
import ViewProductPage from "./pages/ViewProductPage.jsx";

function App() {
  const userData = {
    username: "John",
    avatar: "https://placedog.net/100/100",
    level: "platinum",
  };

  return (
    <div className="App">
      <UserContext.Provider
        value={{
          username: userData.username,
          avatar: userData.avatar,
          level: userData.level,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/view/:id" element={<ViewProductPage />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
