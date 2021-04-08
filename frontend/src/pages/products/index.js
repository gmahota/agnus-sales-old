import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";

import { FiPlus } from "react-icons/fi";
import SectionTitle from "../../components/section-title";
import Datatable from "../../components/datatable";
import countries from "../../json/countries.json";
import Widget from "../../components/widget";
import { formatNumber } from "../../functions/numbers";

import { get_Products } from "../../services/base/productService";
import { Link } from "next/link";

const Simple = (data) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "#",
        accessor: "id",
      },
      {
        Header: "Code",
        accessor: "code",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Price",
        accessor: "price",
        Cell: (props) => <span>{formatNumber(props.value)}</span>,
      },
    ],
    []
  );

  return <Datatable columns={columns} data={data.allProducts} />;
};

export default function ProductList({ allProducts }) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Carregando...</p>;
  }

  if (!allProducts) {
    return <p>Carregando...</p>;
  }

  const handleNew = () => {
    router.push("/products/create");
  };
  return (
    <>
      <SectionTitle
        title="Tables"
        subtitle="Products"
        right={
          <div className="flex-shrink-0 space-x-2">
            <a
              href="/products/create"
              className="btn btn-default btn-rounded btn-icon bg-blue-500 hover:bg-blue-600 text-white space-x-1"
            >
              <FiPlus className="stroke-current text-white" size={16} />
              <span>Add</span>
            </a>
          </div>
        }
      />
      <Widget
        title="Product List's"
        description={
          <span>
            List of all<code>&lt;Product's /&gt;</code> on the database table
          </span>
        }
      >
        <Simple allProducts={allProducts} />
      </Widget>
    </>
  );
}

export async function getStaticProps() {
  const products = await get_Products();

  if (!products) {
    return {
      notFound: true,
    };
  }

  const allProducts = products;

  return {
    props: {
      allProducts,
    },
    revalidate: 10,
  };
}
