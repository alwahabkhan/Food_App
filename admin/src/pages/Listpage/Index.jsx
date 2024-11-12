import React, { useEffect, useState } from "react";
import {
  Box,
  CssBaseline,
  Toolbar,
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import Navbar from "../../components/Navbar/Index.jsx";
import SideBar from "../../components/Sidebar/Index.jsx";
import "@fontsource/outfit";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { toast } from "react-toastify";
import "@fontsource/outfit";
import TablePagination from "@mui/material/TablePagination";
import Swal from "sweetalert2";
const drawerWidth = 240;

function Index() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const fetchList = async () => {
    const response = await axios.get("http://localhost:8000/api/food/list");
    console.log(response.data);
    if (response.data.success) {
      setData(response.data.data);
    } else {
      toast.error(response.data.message);
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8000/api/food/remove/${id}`)
          .then((res) => {
            setData((prevData) => prevData.filter((data) => data._id !== id));
            Swal.fire(
              "Deleted!",
              "Food Product deleted successfully",
              "success"
            );
          })
          .catch((err) => {
            console.error("Error deleting user and posts:", err);
            Swal.fire("Error", "Failed to delete the food product", "error");
          });
      }
    });
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar />
      <SideBar drawerWidth={drawerWidth} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: "80px",

          justifyItems: "center",
        }}
      >
        <Toolbar />
        <Box>
          <Paper
            sx={{
              width: "900px",
              overflow: "hidden",
              padding: "20px",
            }}
          >
            <TableContainer sx={{ maxHeight: 540 }}>
              <Typography
                sx={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "28px",
                }}
              >
                <strong>All Food List</strong>
              </Typography>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "outfit",
                        fontSize: "16px",
                      }}
                    >
                      <strong> Image </strong>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "outfit",
                        fontSize: "16px",
                      }}
                    >
                      <strong> Name </strong>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "outfit",
                        fontSize: "16px",
                      }}
                    >
                      <strong> Description </strong>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "outfit",
                        fontSize: "16px",
                      }}
                    >
                      <strong> Category </strong>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "outfit",
                        fontSize: "16px",
                      }}
                    >
                      <strong> Price </strong>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "outfit",
                        fontSize: "16px",
                      }}
                    >
                      <strong> Actions </strong>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center" component="th" scope="row">
                          <img
                            src={`http://localhost:8000/images/${row.image}`}
                            alt={row.name}
                            style={{ width: "50px" }}
                          />
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            fontFamily: "outfit",
                          }}
                        >
                          {row.name}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            fontFamily: "outfit",
                          }}
                        >
                          {row.description}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            fontFamily: "outfit",
                          }}
                        >
                          {row.category}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            fontFamily: "outfit",
                          }}
                        >
                          {row.price}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            fontFamily: "outfit",
                          }}
                        >
                          <Button
                            onClick={() => handleDelete(row._id)}
                            variant="contained"
                            color="error"
                          >
                            Remove
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[4, 8, 12]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}

export default Index;
