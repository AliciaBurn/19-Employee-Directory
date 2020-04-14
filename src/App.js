import React, { Fragment } from 'react';
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <Fragment>
      <Header />

      <Table>
        <Search /> 
      </Table> 

      </Fragment>

    </div>
  );
}

export default App;
