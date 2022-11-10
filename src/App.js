import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Main></Main>
      <Rightbar></Rightbar>
      <Footer></Footer>
    </div>
  );
}

export default App;
