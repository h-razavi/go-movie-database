import "../styles/Search.css";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Search() {
  let [query, setQuery] = useState("");
  let handleChange = (e) => {
    setQuery(e.target.value);
  };


  return (
    <section className="search">
      <h2>Search for thousands of Movies, TV series and much more</h2>
      <SearchIcon
        sx={{ position: "relative", top: "16px", fontSize: "3rem" }}
      />
      {/* <select id='category' className='search-select'>
                <option value={'movies'}>Movies</option>
                <option value={'tv'}>TV</option>
            </select> */}
      <input
        type={"text"}
        placeholder="Find Your Next Watch"
        id="search"
        onChange={handleChange}
        value={query}
      ></input>
      <Link to={`/search/${query}`}> <Button
        variant="contained"
        sx={{
          fontSize: "1.5rem",
          margin: "1.5rem auto",
          position: "relative",
          bottom: "4px",
          borderRadius: "1.5rem",
          boxShadow: "none",
          display: "block",
          textAlign: "center",
          textTransform: "none",
        }}
      >
        Show Me!
      </Button></Link>
    </section>
  );
}
