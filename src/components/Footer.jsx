import { Box, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{ backgroundColor: "#95C09A", textAlign: "center", color: "black", height:"15vh"}}
    >
      <Typography variant="h4" p={2}>
        Developed by FS Team
      </Typography>
      <Typography sx={{fontWeight:"600"}}>
        Copyright &copy; 
        <Link  color="secondary" target="_blank" href="https://clarusway.com">
          Clarusway
        </Link>
         {new Date().getFullYear()}{" "}
      </Typography>
    </Box>
  );
};

export default Footer;
