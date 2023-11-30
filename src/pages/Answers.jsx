import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FormControl, FormLabel, Textarea, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { answerQuestions } from "../redux/Forum/action";
export const Answers = () => {
  const { id } = useParams();
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const handlePost = () => {
    const answersArray = [data];
    dispatch(answerQuestions(id, answersArray));
  };
  return (
    <div>
      <FormControl mt={4}>
        <FormLabel>Answers</FormLabel>
        <Textarea
          name="answer"
          placeholder="Enter Answer"
          onChange={(e) => setData(e.target.value)}
        />
        <Button onClick={handlePost} colorScheme="blue" mr={3}>
          Post Answer
        </Button>
      </FormControl>
    </div>
  );
};
