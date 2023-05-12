import "./app.css";
import Feeds from "./components/feeds/Feeds";
import Sidebar from "./components/sidebar/Sidebar";
import Widgets from "./components/widgets/Widgets";

function App() {
  return (
    <div className="app">
      {/* sidebar */}
      <Sidebar />
      {/* feeds */}
      <Feeds />
      {/* widgets */}
      <Widgets />
    </div>
  );
}

export default App;
