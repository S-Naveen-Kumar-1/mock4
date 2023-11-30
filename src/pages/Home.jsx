import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getAllQuestions } from "../redux/Forum/action";
import { QuestionCard } from "../components/QuestionCard";
import styled from "styled-components";

export const Home = () => {
  const { allQuestions } = useSelector((store) => {
    console.log(store);
    return store.forumReducer;
  }, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllQuestions());
  }, []);
  return (
    <DIV>
      {allQuestions.length > 0 &&
        allQuestions.map((item) => <QuestionCard key={item.id} {...item} />)}
    </DIV>
  );
};
const DIV = styled.div`
  display: grid;
  width: 80%;
  margin: auto;
  
`;
