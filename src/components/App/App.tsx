import Header from "../Header";
import headerCategory from "../../data/headerCategory";

function App() {
  return (
    <div className="App">
      <>
        <Header headerCategory={headerCategory}/>
      </>
    </div>
  );
}

export default App;
