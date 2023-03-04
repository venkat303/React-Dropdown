import Dropdown from "./Dropdown";

function App() {
  //list we pass to dropdown component
  const list = ['Yes','Probably not'];
  return (
    <div className="App">
      <h1 className="app-header">Should you use a dropdown?</h1>
      {/*calling drropdown components by passsing list as props */}
      <Dropdown list={list}/>
    </div>
  );
}

export default App;
