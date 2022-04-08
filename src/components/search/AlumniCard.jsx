import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from "react";

export default function AlumniCard({onClick}){
    return (
        <Card sx={{ width: '23%',margin: '10px' }}>
          <CardMedia
            component="img"
            height="200"
            image="https://cdn4.iconfinder.com/data/icons/for-your-interface-part-3/128/User-512.png"
            alt="User icon"
            onClick={onClick}
          />
          <CardContent sx={{display: 'flex', padding: '3px !important'}}>
            <div style={{display:'flex', flexDirection: 'column', flex: 1, alignItems:'left'}}>
                <Typography gutterBottom variant="h6" component="div">
                Alumni Name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Department
                </Typography>
            </div>
            <CardActions>
            <Button size="small">Connect</Button>
            </CardActions>
          </CardContent>
        </Card>
      );
}