import React, { useState } from "react";
import "../Style/add.css";
import axios from "axios";
import m1 from "../assets/Premium Photo _ Stack of old vintage books hand drawn color watercolor illustration Library and learning.jpg";
import { Button } from "@mui/material";
function Addbooks() {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [publish, setpublish] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const obj = {
      title: title,
      author: author,
      publishYear: publish,
    };
    axios
      .post(`https://mern-book-store-backend.vercel.app/books`, obj)
      .then((response) => {
        console.log("Book added successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error adding the book!", error);
      });
    settitle("");
    setauthor("");
    setpublish("");
  }
  return (
    <>
      <div className="parent_wrapper">
        <div className="add_wrapper">
          <div className="image">
            <img src={m1} alt="" />
          </div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <label>
                Book Title:
                <div>
                  <input
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                  />
                </div>
              </label>
              <label>
                Author:
                <div>
                  <input
                    type="text"
                    name="author"
                    value={author}
                    onChange={(e) => setauthor(e.target.value)}
                  />
                </div>
              </label>
              <label>
                Publish Year:
                <div>
                  <input
                    type="number"
                    name="year"
                    value={publish}
                    onChange={(e) => setpublish(e.target.value)}
                  />
                </div>
              </label>
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: "10px", width: "250px" }}
                type="submit"
              >
                Add Book
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addbooks;
