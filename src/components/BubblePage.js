//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.

import React, { useEffect, useState } from "react";
import axios from "axios";
import axiosWithAuth from "../helpers/axiosWithAuth"
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  const getColors = () => {
    axiosWithAuth().get(`http://localhost:5000/api/colors`)
                   .then((res) => {
                     setColorList(res.data)
                     console.table(res.data, 'CHOOSEN COLOR!')
                  })
                   .catch((err) => console.error('ERROR: ' + err))
  }

  useEffect(() => {
    getColors();
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} getColors={getColors}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;