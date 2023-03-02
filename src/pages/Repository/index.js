import React from "react";
import { useParams } from "react-router-dom";

function Repository(props) {
  // function Repository({ match }) {
  // return <h1>Repository: {decodeURIComponent(match.params.repository)}</h1>;

  const { repository } = useParams();

  //console.log("1", repository);

  return <h1>Repository: {repository} </h1>;
}

export default Repository;
