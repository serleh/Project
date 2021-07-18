import React from 'react';
import {AddShoppingCart} from '@material-ui/icons'
import {CardMedia, Card, CardContent, Typography,CardActions, IconButton} from '@material-ui/core';

const item = ({item}) => {
    return (
       <Card className = {classes.root}>
           <CardMedia className={classes.media}image='' title ={item.name} />
           <CardContent>
               <div className={classses.cardContent}>
               <Typography variant='h5' guttterBottom>
                   {items.name}
               </Typography>
               <Typography variant='h5' >
                   {item.price}
               </Typography>
                   
               </div>
               
           </CardContent>
           <CardActions disableSpacin className={classes.cardActions}>
               <IconButton aria-label ='Add to cart'>
                   <AddShoppingCart />
               </IconButton>
           </CardActions>



       </Card>
    )
}

export default item
