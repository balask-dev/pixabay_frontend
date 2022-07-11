import React, { useEffect, useState } from "react";
import "./photo.css";
import axios from "axios";
import Photo from "./Photo";
const URL = "http://localhost:4000/photos";

async function fetchHandler (){
  return await axios.get(URL).then((res) => res.data);
};
function Photos (){
  const [pics, setpics] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setpics(data.pics));
  }, []);
  console.log(pics);
  return (
    <div>
       <img style={{objectFit:"cover"}} height="620px" width="100%" src="https://theculturetrip.com/wp-content/uploads/2017/01/the-eiffel-tower-with-crowds-at-the-trocadro--nuno_lopes-pixabay.jpg" ></img>
      <ul>
        <div style={{display:"flex"}} className="container">
        {pics &&
          pics.map((pic, i) => (
            <li key={i}>
              <Photo pic={pic} />
            </li>
          ))}
          </div>
      </ul>
    </div>
  );
};

export default Photos;
