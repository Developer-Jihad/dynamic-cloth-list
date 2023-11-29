import React from "react";
import "./ProductTable.css";
import { MdDeleteForever } from "react-icons/md";
import { RiDeleteBack2Fill } from "react-icons/ri";
export default function ProductTable({ formData, deleteElement }) {
  return (
    <>
      <div>
        {formData && (
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product ID</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Description</th>
                <th>Color</th>
                <th>Size</th>
                <th>Manufacture</th>
                <th>
                  <MdDeleteForever />
                </th>
              </tr>
            </thead>
            <tbody>
              {formData.map((data, index) => (
                <tr key={index}>
                  <td>{data.clothName}</td>
                  <td>{data.clothId}</td>
                  <td>{data.price}</td>
                  <td>{data.quantity}</td>
                  <td>{data.description}</td>
                  <td>{data.color}</td>
                  <td>{data.size}</td>
                  <td>{data.manufectureDate}</td>
                  <td>
                    <RiDeleteBack2Fill color="red"
                      onClick={() => deleteElement(data.productId)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
