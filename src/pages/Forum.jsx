import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  Input,
  FormLabel,
  Textarea,
  Select,
} from "@chakra-ui/react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { postQuestion } from "../redux/Forum/action";
const initialData = {
  questionTitle: "",
  language: "",

  votes: 0,
  answers: 0,
  description: "",
};
export const Forum = () => {
  const { user } = useSelector((store) => {
    console.log(store);
    return store.authReducer;
  }, shallowEqual);
  const dispatch = useDispatch();
  console.log(user);
  const [data, setData] = useState(initialData);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handlePost = () => {
    const question = {
      username: user.username || "",
      userAvatar: user.avatar || "",
      questionTitle: data.questionTitle,
      questionDescription: data.description,
      language: data.language,
      date: new Date(),
      questionTitle: data.questionTitle,
      upvotes: 0,
      answers: 0,
      answersArray: [],
    };
    console.log("data", data);
    dispatch(postQuestion(question));
    setData(initialData);
  };
  return (
    <>
      <Button onClick={onOpen}>Click to Post Question</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <h1>User Name:{user.username}</h1>
            <FormControl mt={4}>
              <FormLabel>Question Title</FormLabel>
              <Input
                name="questionTitle"
                value={data.questionTitle}
                placeholder="Enter Title"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Question Description</FormLabel>
              <Textarea
                name="description"
                value={data.description}
                placeholder="Enter Description"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <Select
                placeholder="Select Language"
                onChange={handleChange}
                name="language"
                value={data.language}
              >
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handlePost} colorScheme="blue" mr={3}>
              Post Question
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
