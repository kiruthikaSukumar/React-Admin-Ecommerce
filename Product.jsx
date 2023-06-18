import React from "react";
import {
  Box,
  Typography,
  Grid,
   Container,
  Dialog,
  DialogActions,
  DialogContent,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AddIcon from "@mui/icons-material/Add";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { DialogTitle } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useEffect } from "react";

function createData(
  id,
  Image,
  name,
  product,
  quantity,
  price,
  size,
  description,
  Action
) {
  return {
    id,
    Image,
    name,
    product,
    quantity,
    price,
    size,
    description,
    Action,
  };
}

const rows = [
  createData(
    1,
    "https://5.imimg.com/data5/SELLER/Default/2022/5/EN/LU/DI/75944561/victoria-silk-vol-rk-105-1-500x500.jpg",
    "djfhw",
    "Clothes",
    2,
    1000,
    "L",
    "fshdgqh"
  ),
  createData(
    2,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD2FpSAspJEqudp3PjgjSrVjjneetG7XxkzRfrAfybduuW7DheCngXM6Aj2SYw6IA7iyg&usqp=CAU",
    "djfhw",
    "Clothes",
    2,
    1000,
    "XL",
    "fshdgqh"
  ),
  createData(
    3,
    "https://images.unsplash.com/photo-1618901185975-d59f7091bcfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FyZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "djfhw",
    "Clothes",
    2,
    1000,
    "XXL",
    "fshdgqh"
  ),
  createData(
    4,
    "https://5.imimg.com/data5/SELLER/Default/2021/8/YY/IE/JK/113884685/2-500x500.jpeg",
    "djfhw",
    "Clothes",
    2,
    1000,
    "XXXL",
    "fshdgqh"
  ),
  createData(
    5,
    "https://i.pinimg.com/originals/2b/35/31/2b3531a2d17a68cb4f5f0b310e7c2d9e.jpg",
    "djfhw",
    "Clothes",
    2,
    1000,
    "S",
    "fshdgqh"
  ),
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

function Product() {
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState("");
  const [textFields, setTextFields] = useState([]);
  const [product, setProduct] = useState({
    Title: "saree",
    Productcode: "12345",
    InStock: "100",
    Description: "soo soft",
    Price: "3000",
    MaterialType: "linean",
    Discount: "5%",
    PosterUrl: "Image",
  });
  useEffect(() => {
    console.log(JSON.stringify(product, null, 2));
  }, [product]);

  const handleChange = (event) => {
    setSize(event.target.value);
  };
  const addTextField = () => {
    setTextFields([...textFields, { size: "", quantity: "" }]);
  };

  const handleTextFieldChange = (index, field, value) => {
    const updatedTextFields = [...textFields];
    updatedTextFields[index][field] = value;
    setTextFields(updatedTextFields);
  };

  const handleDelete = (index) => {
    const updatedTextFields = [...textFields];
    updatedTextFields.splice(index, 1);

    setTextFields(updatedTextFields);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

    const enteredValues = textFields.map((value) => ({
      size: value.size,
      quantity: value.quantity,
    }));

    console.log(JSON.stringify(enteredValues, null, 2));
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h4" gutterBottom component="div">
              Products
            </Typography>
            <Button variant="outlined" onClick={handleClickOpen}>
              <AddIcon />
              Add Product
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <TableContainer
            elevation={0}
            sx={{
              boxShadow: 7,
            }}
            component={Paper}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Id
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Image
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Name
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Product
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Quantity
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Price
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Size
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Description
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Action
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell alignItems="center">{row.id}</TableCell>
                    <TableCell alignItems="center">
                      <img
                        src={row.Image}
                        style={{ height: "70px", width: "70px" }}
                      />
                    </TableCell>

                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.product}</TableCell>
                    <TableCell alignItems="center">{row.quantity}</TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>{row.size}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>
                      <EditIcon></EditIcon>

                      <DeleteIcon></DeleteIcon>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{ height: "100%" }}
      >
        <DialogTitle>
          {" "}
          Add Products
          <Button
            autoFocus
            color="inherit"
            onClick={handleClose}
            sx={{
              float: "right",
            }}
          >
            <CloseIcon />
          </Button>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Box sx={{ width: "100%", p: 1 }} className="test">
                <Typography variant="subtitle1">Title</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  inputProps={{
                    style: {
                      padding: "10px",
                    },
                  }}
                />
              </Box>
              <Box sx={{ width: "100%", p: 1 }}>
                <Typography variant="subtitle1">ProductCode</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  size="small"
                  inputProps={{
                    style: {
                      padding: "10px",
                    },
                  }}
                />
              </Box>
              <Box sx={{ width: "100%", p: 1 }}>
                <Typography variant="subtitle1">Instock</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  size="small"
                  inputProps={{
                    style: {
                      padding: "10px",
                    },
                  }}
                />
              </Box>
              <Box sx={{ width: "100%", p: 1 }}>
                <Typography variant="subtitle1">Description</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  size="small"
                  inputProps={{
                    style: {
                      padding: "10px",
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ width: "100%", p: 1 }}>
                <Typography variant="subtitle1">Price</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  inputProps={{
                    style: {
                      padding: "10px",
                    },
                  }}
                />
              </Box>

              <Box sx={{ width: "100%", p: 1 }}>
                <Typography variant="subtitle1">MaterialType</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  size="small"
                  inputProps={{
                    style: {
                      padding: "10px",
                    },
                  }}
                />
              </Box>

              <Box sx={{ width: "100%", p: 1 }}>
                <Typography variant="subtitle1">Discount</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  size="small"
                  inputProps={{
                    style: {
                      padding: "10px",
                    },
                  }}
                />
              </Box>
              <Box sx={{ width: "100%", p: 1 }}>
                <Typography variant="subtitle1">PosterUrl</Typography>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  size="small"
                  inputProps={{
                    style: {
                      padding: "10px",
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ width: "100%", p: 1 }}>
                <FormControl fullWidth>
                  <Typography variant="subtitle1">Image</Typography>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={size}
                    style={{ minWidth: "90px", height: "40px" }}
                    onChange={handleChange}
                  ></Select>
                </FormControl>
              </Box>
              <Box sx={{ width: "100%", p: 1, display: "flex", gap: 2 }}>
                <Typography variant="subtitle1">Size</Typography>
                <Button variant="outlined" onClick={addTextField}>
                  <AddIcon />
                  Add
                </Button>
              </Box>

              {/* <Grid item xs={5}> */}
              {textFields.map((value, index) => (
                <Grid
                  container
                  spacing={2}
                  key={index}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Grid item xs={3}>
                    <label htmlFor={`size-${index}`}>Size</label>
                    <TextField
                      id={`size-${index}`}
                      value={value.size}
                      onChange={(event) =>
                        handleTextFieldChange(index, "size", event.target.value)
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <label htmlFor={`quantity-${index}`}>Qty</label>
                    <TextField
                      id={`quantity-${index}`}
                      value={value.quantity}
                      onChange={(event) =>
                        handleTextFieldChange(
                          index,
                          "quantity",
                          event.target.value
                        )
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ display: "flex" }}>
                    <DeleteIcon onClick={() => handleDelete(index)} />
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* </Grid> */}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Product;
