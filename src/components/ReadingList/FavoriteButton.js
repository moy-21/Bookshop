import {AppContext} from '../../context/AppContext';
import {useContext} from 'react'
import ButtonGroup from '@mui/material/ButtonGroup'
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';

export default function FavoriteButton ({book}){
    const {addFavorite, removeFavorite, removeAllFavorite} = useContext(AppContext)
 

    return (
        <ButtonGroup sx={{margin:"auto"}}>
            <IconButton key="favorite" onClick={()=>{addFavorite(book)}} >
                <FavoriteIcon />
            </IconButton>
            <IconButton key="unfavorite" onClick={()=>{removeFavorite(book)}} >
                <RemoveCircleTwoToneIcon />
            </IconButton>
            <IconButton key="removeFavorites" onClick={()=>{removeAllFavorite(book)}} >
                <DeleteForeverTwoToneIcon />
            </IconButton>

        </ButtonGroup>
    )

}

        