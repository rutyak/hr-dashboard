import { Outlet } from "react-router-dom";
import "./Main.css";
import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";

const Main = () => {
  // const [search, setSearch] = useState();
  const [title, setTitle] = useState("Candidates");
  // const [openMenu, setOpenMenu] = useState(false);

  // function handleToggleMenu() {
  //   setOpenMenu(!openMenu);
  // }

  return (
    <div className="main-container">
      <Sidebar setTitle={setTitle}/>
      <div className="main-body">
        <Header title={title}/>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
