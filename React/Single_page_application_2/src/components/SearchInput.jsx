import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchInput = () => {
  // eslint-disable-next-line no-unused-vars
  let { name } = useParams();
  // eslint-disable-next-line no-unused-vars
  let [searchData, setSearchData] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setSearchData(res.data))
      .catch((err) => console.log(err));
  }, []);



  return (
    <div className="container">
      
    </div>
  );
};

export default SearchInput;