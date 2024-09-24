import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../Style/mybook.css";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
const url = "https://mern-book-store-backend.vercel.app/books";

function Mybooks() {
  const [mybooksdata, setMybooks] = useState([]);
  const [search, setsearch] = useState("");

  async function apiCalling() {
    try {
      const response = await axios.get(url);
      setMybooks(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    apiCalling();
  }, []);

  async function handleDelete(id) {
    try {
      await axios.delete(`${url}/${id}`);
      apiCalling();
    } catch (error) {
      console.log(error);
    }
  }
  function handleSearch(e) {
    setsearch(e.target.value);
  }
  const filteredBooks = mybooksdata.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div className="mybook_header">
        <div className="heading">
          <p>Mybooks</p>
        </div>
        <div className="search_baar">
          <input
            type="search"
            placeholder="Search here"
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>
      {filteredBooks.length > 0 ? (
        <TableContainer component={Paper} className="table_container">
          <Table
            sx={{ minWidth: 620 }}
            aria-label="simple table"
            className="table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Publish Year</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredBooks.map((book) => (
                <TableRow key={book._id}>
                  <TableCell component="th" scope="row">
                    {book.title}
                  </TableCell>
                  <TableCell>{book.author}</TableCell>
                  <TableCell>{book.publishYear}</TableCell>
                  <TableCell>
                    <Button variant="contained">
                      <NavLink to={`/edit/${book._id}`}> Edit </NavLink>
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(book._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>No books found</p>
      )}
    </>
  );
}

export default Mybooks;
