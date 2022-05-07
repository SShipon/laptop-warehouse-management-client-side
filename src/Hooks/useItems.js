import { useEffect, useState } from "react";

const useItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://hidden-plateau-84306.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return [items, setItems];
};

export default useItems;
