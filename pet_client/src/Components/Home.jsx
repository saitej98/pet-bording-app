import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { petsData } from "../Redux/PetsReducer/action.js";

import "./Home.css";

export const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  // const details=useSelector((state)=>state.details)
  const dispatch = useDispatch();

  useEffect(() => {
    get();
    // console.log(details)
  }, []);

  function get() {
    axios.get("https://pet-boarding.herokuapp.com/pets/all").then((res) => {
      dispatch(petsData(res.data));

      setData(res.data);
      console.log(data);
    });
  }

  // get()

  return (
    <div>
      <h1>Home</h1>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>City</th>
            <th>Address</th>
            <th>Capacity</th>
            <th>Cost per Day</th>
            <th>Verified</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr
            key={data._id}
            onClick={() => {
              navigate(`/listing/${data._id}`);
            }}
          >
            <td>{data._id}</td>
            <td>{data.name}</td>
            <td>{data.city}</td>
            <td>{data.address}</td>
            <td>{data.capacity}</td>
            <td>{data.costPerDay}</td>
            <td>{data.verified}</td>
            <td>{data.rating}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
