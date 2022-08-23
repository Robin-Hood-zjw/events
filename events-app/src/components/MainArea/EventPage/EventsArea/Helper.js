import React from "react";
import "antd/dist/antd.css";
import { Space } from "antd";

export const calcAverageRate = (data) =>
  data.map((info) => info.rating).reduce((total, rating) => total + rating, 0) /
  data.length;

export const iconInfo = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export const retrieveImg = (event) => {
  switch (event.type) {
    case "celebration":
      return (
        <img
          width={200}
          height={150}
          src="../../../public/images/celebration.jpeg"
          alt="celebration"
        />
      );
    case "movie":
      return (
        <img
          width={200}
          height={150}
          src="../../../public/images/movie.jpeg"
          alt="movie"
        />
      );
    case "ceremony":
      return (
        <img
          width={200}
          height={150}
          src="../../../public/images/ceremony.jpeg"
          alt="ceremony"
        />
      );
    case "landmark":
      return (
        <img
          width={200}
          height={150}
          src="../../../public/images/landmark.jpeg"
          alt="landmark"
        />
      );
    case "travel":
      return (
        <img
          width={200}
          height={150}
          src="../../../public/images/"
          alt="travel"
        />
      );
    default:
      return null;
  }
};
