import "./App.css";
import { Country, Person } from "./Components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Pedro"
        email="pedro@gmail.com"
        age={21}
        isMarried={true}
        friends={["jessica", "jake", "josh", "jasmine"]}
        country={Country.Brazil}
      />
    </div>
  );
}

export default App;
