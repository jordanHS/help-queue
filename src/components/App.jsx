import React from "react";
import Header from "./Header";

function App(){
  const name = "Thato";
  const name2 = "Haley";
  return (
    <ReactFragment>
      <Header />
      <h3>3a</h3>
      <h3>{name} and {name2}</h3>
      <p><em>Firebase entries not saving!</em></p>
      <hr/>
    </ReactFragment>
  );
}

export default App;