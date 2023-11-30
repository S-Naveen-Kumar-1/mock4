import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const QuestionCard = ({
  username,
  questionTitle,
  language,
  id,
  date,
  upvotes,
  answers,
  answersArray,
  userAvatar,
}) => {
  return (
    <DIV>
      <DIV1>
        <img src={userAvatar} alt="" />
        <p>{username}</p>
      </DIV1>
      <DIV2>
        <div>
          <h1>{questionTitle}</h1>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <p>{language}</p>
          <p>{date}</p>
          <p>{answersArray?.length} ANSWERS</p>
        </div>
        <Link to={`/answers/${id}`}>
          <button id="view">View to Answer</button>
        </Link>
      </DIV2>
      <DIV3>
        <p>{upvotes}UPVOTES</p>
      </DIV3>
    </DIV>
  );
};
const DIV = styled.div`
  display: flex;
  border: 1px solid #ddd;
  margin: 10px;
  padding: 15px;

  #view {
    background-color: #0a93c0;
    border-radius: 4px;
    width: 130px;
  }
`;
const DIV1 = styled.div`
  display: grid;
  width: 20%;
`;
const DIV2 = styled.div`
  display: grid;
  width: 80%;
  margin: auto;
  padding: 4px;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  p {
    border: "1px solid #ddd";
    border-radius: 5px;
    background-color: #d8c9c9;
    padding: 4px;
    margin: 4px;
  }
`;
const DIV3 = styled.div`
  display: flex;
  align-items: center;
`;
