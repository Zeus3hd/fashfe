import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import {
  Wrapper,
  InputGroup,
  InputField,
  InputLabel,
  FormButton,
  SelectField,
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
    axios({
      method: "post",
      url: "https://shrouded-savannah-97463.herokuapp.com/create",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        setIsLoading(false);
        setIsDone(true);
        return;
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  return (
    <>
      {isDone && <Redirect to="/store" />}
      <Wrapper encType="multipart/form-data">
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
          <SelectField
            onChange={(e) => {
              setPostData({
                ...postData,
                type: e.target.value,
              });
            }}
          >
            <option value="dress">Dress</option>
            <option value="coat">Coat</option>
            <option value="abaya">Abaya</option>
          </SelectField>
          {/* <InputField
            type="text"
            onChange={(e) => {
              setPostData({
                ...postData,
                type: e.target.value,
              });
            }}
          /> */}
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
