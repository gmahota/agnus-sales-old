import React, { useState } from "react";
import Validation from "../forms/validation-product";
import Alert from "../alerts";

const CreateProduct = ({ message = null }) => {
  const [data, onSubmit] = useState(null);

  let items = [
    {
      label: "Code",
      error: { required: "Please enter the code" },
      name: "code",
      type: "text",
      placeholder: "Enter the code",
    },
    {
      label: "Description",
      error: { required: "Please enter the description" },
      name: "description",
      type: "textarea",
      placeholder: "Enter the description",
    },
    {
      label: "Price",
      error: { required: "Please enter the price" },
      name: "message",
      type: "number",
      placeholder: "Enter Price...",
    },
  ];
  return (
    <>
      <div className="flex flex-col">
        {data && message && (
          <div className="w-full mb-4">
            <Alert
              color="bg-transparent border-green-500 text-green-500"
              borderLeft
              raised
            >
              {message}
            </Alert>
          </div>
        )}
        <Validation items={items} onSubmit={onSubmit} />
      </div>
    </>
  );
};

export default CreateProduct;
