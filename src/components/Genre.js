import useFetch from "../utils/helpers/useFetch";
import { Genres } from '../utils/constants/urls';


function Genre(props){
    const { data, loading, error } = useFetch(Genres)
    let isDataAvailable = !loading && !error && !!data;

    if (loading) return console.log('loading');
    if (error) return console.log(error);

    function getName(arr, id) {
        arr.forEach((obj) => {
          if (id === obj.id) {
            return obj.name;
          }
        });
      }
    return (
        <>
      {isDataAvailable &&
        data.genres.map((genre) => {
            if (genre.id===props.id){
                return <a href="#">{genre.name}</a>
            }         
        })}

        </>
    )
}

export default Genre;