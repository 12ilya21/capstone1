import React, { Component } from 'react';
import {Wrapper, Status } from "@googlemaps/react-wrapper";
import './../styles/Map.css';
import Mapcustom from './Mapcustom';

const MapContainer = () => {
//   try{

//   }catch (error) {
//     console.error('>>> [구글] 🤬 ERROR >>>', error);

// }
const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return <>로딩중...</>;
    case Status.FAILURE:
      return <>에러 발생</>;
    case Status.SUCCESS:
      return <>로드 성공</>;
  }
};
  return (
    <Wrapper apiKey={"AIzaSyDUzFkPYEmC_-khUwbIA1HjXXhbobh7nZ0"} render={render} language='en'>
      <Mapcustom value={1}/>
    </Wrapper>
  );
};

export default MapContainer
