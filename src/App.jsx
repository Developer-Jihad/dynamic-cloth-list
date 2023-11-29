import FormData from "./Components/FormData/FormData";
import ProductTable from "./Components/ProductTable/ProductTable";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="title">
        Dynamic Cloths list Application with CRUD Operations
      </h1><br />
      <hr />
      <br />
      <FormData />
      <ProductTable />
    </>
  );
}

export default App;
