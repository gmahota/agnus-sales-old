import React from "react";
import CreateProduct from "../../components/sample-forms/create-product";
import SectionTitle from "../../components/section-title";
import Widget from "../../components/widget";
export default function ProductCreate() {
  return (
    <>
      <SectionTitle title="Products" subtitle="Create New Product" />

      <Widget
        title="Contact us"
        description={<span>Sample contact us form</span>}
      >
        <div className="w-full flex">
          <div className="w-full lg:w-1/2">
            <CreateProduct />
          </div>
        </div>
      </Widget>
    </>
  );
}
