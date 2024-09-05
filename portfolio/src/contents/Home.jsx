import { ToastContainer } from "react-toastify";
import Name from "./Name";
function Home() {
  return (
    <div className="grid-background">
      <Name/>
      <ToastContainer/>
    </div>
  );
}

export default Home;
