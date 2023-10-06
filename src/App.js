import "./styles.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function App() {
  const notify = () => {
    toast.success("error", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: "7000"
    });
    // toast("New Message", { position: toast.POSITION.TOP_LEFT });
    // toast("New Message", { position: toast.POSITION.TOP_CENTER });
    // toast("New Message", { position: toast.POSITION.BOTTOM_CENTER });
  };

  return (
    <div className="App">
      <button onClick={notify}>click me for toast</button>
    </div>
  );
}
export default App;
