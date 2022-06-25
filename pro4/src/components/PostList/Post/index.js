import React from 'react';
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
} from "@material-ui/core";
import MoreVertIcon  from '@material-ui/icons/MoreVert';
import FavoriteIcon  from '@material-ui/icons/Favorite';

export default function Post() {
    return <Card>
        <CardHeader
            avatar= {<Avatar> A </Avatar>}
            title = 'this is Title'
            subheader = 'Apr 30 ,2021 '
            action = {
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            }
        />
        <CardMedia image="" title="Title"/>

        <CardContent>
            <Typography variant= 'h5' color='red'>This is title post</Typography>
            <Typography variant= 'body2' component="p" color='red'>This is Content post</Typography>
        </CardContent>

        <CardActions>
            <IconButton>
                <FavoriteIcon />
                <Typography component="span" color="red" > 10k likes </Typography>
            </IconButton>
        </CardActions>
    </Card>;
}






