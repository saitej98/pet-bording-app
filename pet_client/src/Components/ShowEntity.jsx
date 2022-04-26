import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Home.css"

export const ShowEntity = () => {
  const param = useParams();
  const details = useSelector((state) => state.details);

  const temp = details.data.filter((e) => e._id == param.id);
//   console.log(temp);

  return (
    <div id="entityDiv">
      <h1>Entity</h1>

      <div>Name : {temp[0].name}</div>
      <div>City : {temp[0].city}</div>
      <div>Address : {temp[0].address}</div>
      <div>Capacity : {temp[0].capacity}</div>
      <div>Cost Per Day : {temp[0].costPerDay}</div>
      <div>Is Verified : {temp[0].verified}</div>
      <div>Rating : {temp[0].rating}</div>

      <div>Type : 
        {temp[0].typeDog && temp[0].typeRabit && temp[0].typeCat
          ? "Dog , Cat , Rabit "
          : temp[0].typeDog && temp[0].typeRabit
          ? "Dog , Rabit"
          : temp[0].typeDog && temp[0].typeCat
          ? "Dog , Cat"
          : temp[0].typeCat && temp[0].typeRabit
          ? "Cat , Rabit"
          : temp[0].typeDog
          ? "Dog"
          : temp[0].typeCat
          ? "Cat"
          : temp[0].typeRabit
          ? "Rabit"
          : ""}
      </div>

      <div>Weight : {temp[0].weight}</div>
      <div>Roaming Place : {temp[0].roamingPlace}</div>
      <div>Sleeping Place : {temp[0].sleepingPlace}</div>

      <div>Potty Braks : {temp[0].pottyBreaks}</div>
      <div>Walks Per Day : {temp[0].walksPerDay}</div>
      <div>Type Of Home : {temp[0].homeType}</div>
      <div>Area Size : {temp[0].areaSize}</div>
      <div>Emergency Transport : {temp[0].emergencyTransport}</div>
    </div>
  );
};
