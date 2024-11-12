import React, { useEffect, useState } from "react";
import {
  Box,
  CssBaseline,
  Toolbar,
  TextField,
  Button,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Navbar from "../../components/Navbar/Index.jsx";
import SideBar from "../../components/Sidebar/Index.jsx";
import "@fontsource/outfit";
import { assets } from "../../assets/assets.js";
import { Textarea } from "@mui/joy";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const drawerWidth = 240;

function Index() {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    const response = await axios.post(
      "http://localhost:8000/api/food/add",
      formData
    );
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <ToastContainer />
      <Navbar />
      <SideBar drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: "70px",
        }}
      >
        <Toolbar />
        <Box
          sx={{
            width: "40%",
            marginLeft: { xs: "10px", sm: "15px", md: "50px", lg: "50px" },
          }}
        >
          <form onSubmit={onSubmitHandler}>
            <Box>
              <InputLabel
                sx={{ marginBottom: "5px", fontFamily: "'Outfit', sans-serif" }}
              >
                Upload image
              </InputLabel>
              <label htmlFor="image">
                <img
                  src={image ? URL.createObjectURL(image) : assets.upload_area}
                  alt="uploadimg"
                  style={{
                    marginBottom: "10px",
                    width: { xs: "40px", sm: "40px", lg: "150px" },
                    height: "100px",
                  }}
                />
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                hidden
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </Box>

            <InputLabel
              sx={{ fontFamily: "'Outfit', sans-serif", marginBottom: "5px" }}
            >
              Product name
            </InputLabel>
            <TextField
              onChange={onChangeHandler}
              value={data.name}
              name="name"
              placeholder="Type name here"
              fullWidth
              type="text"
              size="small"
              sx={{ marginBottom: "10px" }}
            />

            <InputLabel
              sx={{ fontFamily: "'Outfit', sans-serif", marginBottom: "5px" }}
            >
              Product Description
            </InputLabel>
            <Textarea
              onChange={onChangeHandler}
              value={data.description}
              name="description"
              minRows={5}
              placeholder="Enter Description here"
              style={{ width: "100%", marginBottom: "10px" }}
            />

            <Box
              sx={{
                display: { sm: "block", xs: "block", md: "flex", lg: "flex" },
                gap: "50px",
                marginBottom: "20px",
              }}
            >
              <Box>
                <InputLabel
                  sx={{
                    fontFamily: "'Outfit', sans-serif",
                    marginBottom: "5px",
                  }}
                >
                  Product category
                </InputLabel>
                <Select
                  onChange={onChangeHandler}
                  value={data.category}
                  name="category"
                  sx={{ width: "150px", height: "40px" }}
                >
                  <MenuItem value="Salad">Salad</MenuItem>
                  <MenuItem value="Rolls">Rolls</MenuItem>
                  <MenuItem value="Deserts">Deserts</MenuItem>
                  <MenuItem value="Sandwich">Sandwich</MenuItem>
                  <MenuItem value="Cake">Cake</MenuItem>
                  <MenuItem value="Pure Veg">Pure Veg</MenuItem>
                  <MenuItem value="Pasta">Pasta</MenuItem>
                  <MenuItem value="Noodles">Noodles</MenuItem>
                </Select>
              </Box>

              <Box>
                <InputLabel
                  sx={{
                    fontFamily: "'Outfit', sans-serif",
                    marginBottom: "5px",
                  }}
                >
                  Product Price
                </InputLabel>
                <TextField
                  onChange={onChangeHandler}
                  value={data.price}
                  type="number"
                  name="price"
                  placeholder="$20"
                  size="small"
                  sx={{ width: "150px", height: "40px" }}
                />
              </Box>
            </Box>

            <Button
              type="submit"
              sx={{
                fontFamily: "'Outfit', sans-serif",
                backgroundColor: "black",
                color: "white",
                width: "150px",
              }}
            >
              Add
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Index;
