
import React from "react";
import Game from "./Components/Game";
import Greeting from "./Components/Greeting";
import Person from "./Components/Person";
const App =()=> {
  return <React.Fragment>
    <Greeting />
    <Game />
    <Person />
  </React.Fragment>;
}

export default App;