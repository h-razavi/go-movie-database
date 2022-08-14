import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useFetch from "../utils/helpers/useFetch";
import { baseURL } from "../utils/constants/urls";
import { apiKey } from "../utils/constants/api-key";
import {CircularProgress,Alert} from '@mui/material';
import "../styles/Movies.css";

export default function GenreSelectorTV({handleGenre, value}) {
  let url = `${baseURL}/genre/tv/list?api_key=${apiKey}`
  const { data, loading, error } = useFetch(url);
  let isDataAvailable = !loading && !error && !!data;

  if (loading) return <CircularProgress />
  if (error) return <Alert severity="error">{error}</Alert>

console.log(value);

  return (
    <FormControl
      variant="standard"
      sx={{ m: 1, minWidth: 120, color: "#fff" }}
      classes={"selector"}
    >
      <InputLabel
        id="genre"
        sx={{
          color: "#fff",
        }}
      >
        Genre
      </InputLabel>
      <Select
        label="Genre"
        autoWidth
        sx={{
          color: "#fff",
          ".MuiSelect-icon": {
            fill: "#fff",
          },
          ".MuiSelect-standard": {
            borderBottom: "2px solid #fff",
          },
        }}
        onChange={(e, value) => {
        handleGenre(e)
        }}
        value={value}

      >
        <MenuItem value={''}>Select Genre</MenuItem>
        {isDataAvailable &&
          data.genres.map((genre) => {
            return (
            <MenuItem value={genre.id} label={genre.name} >{genre.name}</MenuItem>
            
            )
          })}
      </Select>
    </FormControl>
  );
}
