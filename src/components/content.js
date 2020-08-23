import React from 'react';
import CoffeeCard from './coffeeCard';
import { Grid } from '@material-ui/core';
 



const Content=()=>{
 return  (
     <Grid container spacing={4}>
        <Grid item xs={4}>
          <CoffeeCard  title="Hamilton Beach flexbrew"
          subheader="Golden st."
          avatarsrc="./public/avatars/avatar-1.png"
          imgSrc="./public/images/garaj.jpg"
          />
        </Grid> 
        <Grid item xs={4}>
          <CoffeeCard  title="Hamilton Beach flexbrew"
          subheader="Golden st."
          avatarsrc="/static/images/avatar/1.jpg"
          />
        </Grid> 
        <Grid item xs={4}>
          <CoffeeCard  title="Hamilton Beach flexbrew"
          subheader="Golden st."
          avatarsrc="./public/Avatar/avatar-1.png"
          />
        </Grid> 
        <Grid item xs={4}>
          <CoffeeCard  title="Hamilton Beach flexbrew"
          subheader="Golden st."
          avatarsrc="/static/images/avatar/1.jpg"
          />
        </Grid> 
    </Grid>
 )
};
export default Content;