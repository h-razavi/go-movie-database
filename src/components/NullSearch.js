import {Alert} from '@mui/material';
import Search from './Search';

export default function NullSearch(){
    return(
    <>
    <Alert severity="error">Search Field Empty - Please Try Again</Alert>
    <Search />
    </>
    )

}