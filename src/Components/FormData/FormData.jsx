import React, { useState, useEffect } from "react";
import "./FormData.css";
import ProductTable from "../ProductTable/ProductTable";
import getData from "../../Utils/localStorageData";

export default function FormData() {
  const [formData, setFormData] = useState(getData());

  // Set Datas in Local Storage
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = {};
    const inputElements = [...e.target.elements];
    inputElements.forEach((element) => {
      if (element.type == "radio" && !element.checked) {
        return;
      }
      if (element.tagName !== "BUTTON") {
        input[element.name] = element.value;
        element.value = "";
      }
    });
    setFormData([...formData, input]);
  };

  // Handle Delete
  const deleteElement = (id) => {
    const filteredData = formData.filter((data) => data.clothId !== id);
    setFormData(filteredData);
  };

  return (
    <>
      <div className="flex">
        <form className="form" autocomplete="on" onSubmit={handleSubmit}>
          <label>
            Cloth Name: <br />
            <input type="text" name="clothName" required />
          </label>
          <br />

          <label>
            Cloth Id: <br />
            <input type="number" min="0" name="clothId" required />
          </label>
          <br />

          <label>
            Price: <br />
            <input type="number" min="0" name="price" required />
          </label>
          <br />

          <label>
            Quantity: <br />
            <input type="number" min="0" name="quantity" required />
          </label>
          <br />

          <label>
            Description: <br />
            <textarea maxLength="50" name="description" required />
          </label>
          <br />
          <label>
            Manufacture date: <br />
            <input type="date" name="manufectureDate" required></input>
          </label>
          <br />
          <label>
            Color:
            <select required name="color">
              <option disabled selected>
                Select Color
              </option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </label>
          <br />

          <fieldset>
            <legend> Product Size: </legend>
            <div className="radioBtn">
              <label>
                <input required type="radio" name="size" value="M" />M
              </label>
              <label>
                <input required type="radio" name="size" value="L" />L
              </label>
              <label>
                <input required type="radio" name="size" value="XL" />
                XL
              </label>
            </div>
          </fieldset>

          <br />
          <label className="checkBox">
            <input required type="checkbox" name="terms" value={true} />
            Accept terms and condition
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        <ProductTable deleteElement={deleteElement} formData={formData} />
      </div>
    </>
  );
}
