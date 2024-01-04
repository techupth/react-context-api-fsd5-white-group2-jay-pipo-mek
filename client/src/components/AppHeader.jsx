import { useContext } from "react";
import UserData from "../context/Context";

function AppHeader() {
  const context = useContext(UserData);

  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {context.user.username}</h2>
    </div>
  );
}

export default AppHeader;
