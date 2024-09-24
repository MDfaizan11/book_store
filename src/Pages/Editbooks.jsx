import React, { useEffect, useState } from "react";
import "../Style/add.css";
import { Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import m1 from "../assets/Premium Photo _ Stack of old vintage books hand drawn color watercolor illustration Library and learning.jpg";
const apiUrl = "https://mern-book-store-backend.vercel.app/books";

function Editbooks() {
  const { id } = useParams(); // Get the book ID from the URL
  const navigate = useNavigate(); // Hook for navigation

  // Individual states for title, author, and publishYear
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");

  // Fetch the book data when the component mounts
  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await axios.get(`${apiUrl}/${id}`);
        const { title, author, publishYear } = response.data.data;
        setTitle(title);
        setAuthor(author);
        setPublishYear(publishYear);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    }
    if (id) {
      fetchBook();
    }
  }, [id]);

  // Handle form submission to update book data
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.put(`${apiUrl}/${id}`, { title, author, publishYear });
      console.log("Book updated successfully");
      navigate("/"); // Navigate to the books list page after update
    } catch (error) {
      console.error("Error updating book:", error);
    }
  }

  return (
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
                  onChange={(e) => setTitle(e.target.value)}
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
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
            </label>
            <label>
              Publish Year:
              <div>
                <input
                  type="number"
                  name="publishYear"
                  value={publishYear}
                  onChange={(e) => setPublishYear(e.target.value)}
                />
              </div>
            </label>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ marginTop: "10px", width: "250px" }}
            >
              Update
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Editbooks;
