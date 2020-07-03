import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function CatFacts({ id = 5 }) {
  const [data, setData] = useState();

  const [a, b, ...c] = [1, 2, 3, 4, 5];

  console.log(a, b, c);

  return <div></div>;
}
