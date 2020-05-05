import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import {
  Wrapper,
  InputGroup,
  InputField,
  InputLabel,
  FormButton,
} from "./index.style";
const NewPost = () => {
  const [postData, setPostData] = useState({
    title: "",
    price: "",
    desc: "",
    type: "",
    photo: "",
  });
  const [isDone, setIsDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", postData.title);
    formData.append("price", postData.price);
    formData.append("desc", postData.desc);
    formData.append("type", postData.type);
    formData.append("photo", postData.photo);
    setIsLoading(true);
    fetch("/create/", {
      mode: "no-cors",
      method: "POST",
      body: formData,
    }).then(
      function (res) {
        if (res.ok) {
          console.log("done");
          setIsDone(true);
          setIsLoading(false);
        } else if (res.status === 401) {
          console.log("something went wrong");
        }
      },
      function (e) {
        console.log("something went wrong", e);
      }
    );
  };

  return (
    <>
      {isDone && <Redirect to="/store" />}
      <Wrapper encType="multipart/form-data" action="">
        <InputGroup>
          <InputLabel>Title</InputLabel>
          <InputField
            type="text"
            onChange={(e) => {
              setPostData({
                ...postData,
                title: e.target.value,
              });
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputLabel>Price</InputLabel>
          <InputField
            type="text"
            onChange={(e) => {
              setPostData({
                ...postData,
                price: e.target.value,
              });
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputLabel>Type</InputLabel>
          <InputField
            type="text"
            onChange={(e) => {
              setPostData({
                ...postData,
                type: e.target.value,
              });
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputLabel>Image</InputLabel>
          <InputField
            type="file"
            onChange={(e) => {
              setPostData({
                ...postData,
                photo: e.target.files[0],
              });
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputLabel>Desc</InputLabel>
          <InputField
            type="text"
            onChange={(e) => {
              setPostData({
                ...postData,
                desc: e.target.value,
              });
            }}
          />
        </InputGroup>
        <FormButton onClick={handleSubmit}>Submit</FormButton>
        {isLoading && "Loading ..."}
      </Wrapper>
    </>
  );
};

export default NewPost;
