import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { iconStyle } from "../style/globalStyle";
import RegisterForm, { registerSchema } from "../components/RegisterForm";
import { Formik } from "formik";
import { Button } from "@mui/material";

const Register = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: iconStyle,
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              username: "",
              email: "",
              image: "",
              bio: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              // register({ ...values, password2: values.password })
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <RegisterForm {...props} />}
          ></Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography sx={{ display: "inline" }}>
              Do you have already an account?
            </Typography>
            <Button
              sx={{
                "&:hover": { backgroundColor: "black" },
                color: "red",
                marginLeft: 2,
                fontWeight: "700",
              }}
              s
            >
              Sign in
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
