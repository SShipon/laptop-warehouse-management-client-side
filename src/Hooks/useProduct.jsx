import { useEffect, useState } from "react";

const useProduct = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://dry-temple-28116.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return [items, setItems];
};

export default useProduct;
