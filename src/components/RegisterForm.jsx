import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
import { object, string } from "yup";
import { btnStyle } from "../style/globalStyle";

export const registerSchema = object({
  username: string()
    .max(20, "Max 20 characters")
    .required("username is mandatory"),
  email: string().email().required("email is mandatory"),
  bio: string().max(30, "Max 30 characters"),
  image: string(),
  password: string()
    .min(8, "password must have at least 8 characters")
    .max(20, "password must have max 20 characters")
    .required("Password is mandotory")
    .matches(/\d+/, "Password should have a number")
    .matches(/[a-z]/, "Password must have a lowercase character")
    .matches(/[A-Z]/, "Password must have a character")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password must have a speacial character "),
});

const RegisterForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
}) => {
  return (
    <div>
      <Form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="User Name"
            name="username"
            id="userName"
            type="text"
            variant="outlined"
            required
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.username && Boolean(errors.username)}
            helperText={errors.username}
          />
          <TextField
            label="Email Address"
            name="email"
            id="email"
            type="email"
            variant="outlined"
            required
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={errors.email}
          />
          <TextField
            label="Image"
            name="image"
            id="image"
            // type=""
            variant="outlined"
            value={values.image}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.image && Boolean(errors.image)}
            helperText={errors.image}
          />
          <TextField
            label="Bio"
            name="bio"
            id="bio"
            type="text"
            variant="outlined"
            value={values.bio}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.bio && Boolean(errors.bio)}
            helperText={errors.bio}
          />
          <TextField
            label="Password"
            name="password"
            id="password"
            type="password"
            variant="outlined"
            required
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={errors.password}
          />
          <Button type="submit" variant="contained" size="large" sx={btnStyle}>
            Sign up
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default RegisterForm;
