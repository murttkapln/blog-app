import * as React from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Typography from "@mui/material/Typography";
import logo from "../assets/logo.png";
import { Box, Grid, Paper } from "@mui/material";
export default function ImgMediaCard() {
  return (
    <Grid container justifyContent="center" spacing={2} mt={2}>
      <Grid item>
        <Paper
          sx={{
            display: "flex",
            gap: 3,
            p: 2,
            textAlign:"center",
            alignItems: "center",
            justifyContent: "center",
            width: "280px",
            minHeight: "400px",
          }}
          elevation={5}
        >
          <Box>
            <img src={logo} alt="logo" style={{width:70}}  />
            <Typography variant="h3" mb={2} fontWeight={800}>
              Clarusway
            </Typography>
            <Typography variant="h5" mb={2}>
              Full Stack Team
            </Typography>
            <Box sx={{display:"flex", justifyContent:"space-evenly", backgroundColor:"yellow"}}>
            <LinkedInIcon/>
            <TwitterIcon/>
            <InstagramIcon/>
            <YouTubeIcon/>
            </Box>
            
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
