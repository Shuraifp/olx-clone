import Navbar from "./Navbar.jsx";
import Menubar from "./Menubar.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";
import { useState } from "react";


const App = () => {

  const [menu, setMenu] = useState('')
  const [search, setSearch] = useState('')

  return (
    <>
      <Navbar setSearch={setSearch}/>
      <Menubar setMenu={setMenu}/>
      <Home search={search} menu={menu}/>
      <Footer />
      </>
  );
};

export default App;
