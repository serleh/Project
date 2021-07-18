import React from 'react';
import {Grid} from '@material-ui/core';
import item from './Item/item';

const items = [
    {id:1, name: 'Shoes', price:500 },
    {id:1, name: 'Shoes', price:500 },
    {id:1, name: 'Shoes', price:500 },
    {id:1, name: 'Shoes', price:500 }
]

const Items = ()=>{
    return(
    <div>
        <Grid container justify='center' spacing = {4}>
            {items.map((item)=>(
                <Grid item key={item.id} lg={3} md={4} sm={6} xs={12}>
                    <Item item = {item} />
                </Grid>
            ))}

        </Grid>
    </div>)


}

export default items;