import React from "react";
import Drawer from "@mui/material/Drawer";
import { Box, Typography, Grid, Container } from "@mui/material";
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

import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { useEffect } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import axios from "axios";
import TextareaAutosize from "@mui/base/TextareaAutosize";

const drawerWidth = 400;

function Category() {
  const [open, setOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [product, setProduct] = useState({
    Name: "",
    Images: [],
    Description: "",
  });
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);
  const [editDrawerOpen, setEditDrawerOpen] = useState(false);
  const [fetchData, setFetchData] = useState(false);

  const data = [
    {
      Image:
        "https://cdn.shopify.com/s/files/1/0049/3649/9315/products/koskii-rust-gotapatti-georgette-designer-saree-saus0020770_rust_1_1800x1800.jpg?v=1660893547",
      categoryname: "Designersaree",
      categoryDescription: "soft",
      productCount: 5,
      Action: "someAction",
    },
    {
      Image:
        "https://cdn.shopify.com/s/files/1/0049/3649/9315/products/light-grey-silver-stonework-semi-crepe-designer-saree-saus0015803_light_grey_1.jpg?v=1633859945",
      categoryname: "Designersaree",
      categoryDescription: "soft",
      productCount: 5,
      Action: "someAction",
    },
    {
      Image:
        "https://cdn.shopify.com/s/files/1/0049/3649/9315/products/koskii-bottle-green-swarovski-semi-crepe-designer-saree-saus0021891_bottle_green_1_1800x1800.jpg?v=1663335873",
      categoryname: "Designersaree",
      categoryDescription: "soft",
      productCount: 5,
      Action: "someAction",
    },
    {
      Image:
        "https://ik.imagekit.io/wb2spwtue/kreeva/tr:h-430,w-315,q-80,cm-pad_resize/media/catalog/product/s/a/saree_22508_1.jpg",
      categoryname: "Designersaree",
      categoryDescription: "soft",
      productCount: 5,
      Action: "someAction",
    },
    {
      Image:
        "https://ik.imagekit.io/wb2spwtue/kreeva/media/wysiwyg/CategoryBlock/Saree/feb23/8.jpg",
      categoryname: "Designersaree",
      categoryDescription: "soft",
      productCount: 5,
      Action: "someAction",
    },
  ];

  const handleEditCategory = (category) => {
    setSelectedCategory(category);
    setEditDrawerOpen(true);
  };

  const handleDeleteCategory = (category) => {
    setCategoryToDelete(category);
    setShowDeleteConfirmation(true);
  };

  const confirmDeleteCategory = () => {
    if (categoryToDelete) {
      const updatedData = data.filter(
        (item) => item.Image !== categoryToDelete.Image
      );
      setData(updatedData);
      setCategoryToDelete(null);
    }
    setShowDeleteConfirmation(false);
  };

  const cancelDeleteCategory = () => {
    setCategoryToDelete(null);
    setShowDeleteConfirmation(false);
  };

  const handleImageSelect = (event) => {
    const files = event.target.files;

    const imageUrls = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    setProduct((prevProduct) => ({
      ...prevProduct,
      Images: [...prevProduct.Images, ...imageUrls],
    }));
  };

  const handleSave = () => {
    const savedProduct = {
      Name: product.Name,
      Images: product.Images,
      Description: product.Description,
    };

    console.log(JSON.stringify(savedProduct, null, 2));
    handleDrawerToggle();
  };

  const fileInputRef = React.useRef(null);

  const handleDrawerToggle = () => {
    setOpen(false);
    setMobileOpen(false);
    setEditDrawerOpen(false);
  };
  const handleEditDrawerToggle = () => {
    setOpen(true);
    setMobileOpen(true);
    setEditDrawerOpen(false);
  };

  useEffect(() => {
    fetchedCategory();
  }, []);

  const fetchedCategory = async () => {
    try {
      const response = await axios.get("http://localhost:3000/fetchCategory");
      setFetchData(response.data);
      setOpen(true);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveEditCategory = () => {
    setEditDrawerOpen(false);
  };

  const handleClose = () => {
    handleDrawerToggle();
  };

  const drawer = (
    <Box sx={{ width: drawerWidth }}>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          p={2}
        >
          <Typography variant="h6" component="div">
            Add category
          </Typography>

          <CloseIcon onClick={handleDrawerToggle} sx={{ cursor: "pointer" }} />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} p={2}>
          <Box py={1}>
            <Typography variant="subtitle1">Name</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={product.Name}
              onChange={(e) =>
                setProduct((prevState) => ({
                  ...prevState,
                  Name: e.target.value,
                }))
              }
              inputProps={{
                style: {
                  padding: "10px",
                },
              }}
              fullWidth
            >
              {" "}
            </TextField>
          </Box>
          <Box py={1}>
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              style={{ display: "none" }}
              onChange={handleImageSelect}
              ref={fileInputRef}
            />

            <Button
              variant="contained"
              color="primary"
              onClick={() => fileInputRef.current.click()}
            >
              Upload Images
            </Button>
            <Typography variant="subtitle1">Images </Typography>
          </Box>
          <Box py={1}>
            <Typography variant="subtitle1">Description</Typography>
            <TextareaAutosize
              id="outlined-basic"
              variant="outlined"
              value={product.Description}
              onChange={(e) =>
                setProduct((prevState) => ({
                  ...prevState,
                  Description: e.target.value,
                }))
              }
              inputProps={{
                style: {
                  padding: "10px",
                },
              }}
              fullWidth
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );

  const editDrawer = (
    <Box sx={{ width: drawerWidth }}>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          p={2}
        >
          <Typography variant="h6" component="div">
            Edit category
          </Typography>
          <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} p={2}>
          <Box py={1}>
            <Typography variant="subtitle1">Name</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={selectedCategory?.categoryname || ""}
              onChange={(e) =>
                setSelectedCategory((prevState) => ({
                  ...prevState,
                  categoryname: e.target.value,
                }))
              }
              inputProps={{
                style: {
                  padding: "10px",
                },
              }}
              fullWidth
            />
          </Box>
          <Box py={1}>
            <Typography variant="subtitle1">Description</Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              value={selectedCategory?.categoryDescription || ""}
              onChange={(e) =>
                setSelectedCategory((prevState) => ({
                  ...prevState,
                  categoryDescription: e.target.value,
                }))
              }
              inputProps={{
                style: {
                  padding: "10px",
                },
              }}
              fullWidth
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );

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
              Categories
            </Typography>
            <Button variant="outlined" onClick={fetchedCategory}>
              <AddIcon />
              Add Category
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
                      Description
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Product Count
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {" "}
                      Action
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {fetchData &&
                  fetchData.map((category) => (
                    <TableRow key={category.name}>
                      <TableCell>
                        <img
                          src={category.image}
                          // alt={category.name}
                          style={{ height: "70px", width: "70px" }}
                        />
                      </TableCell>
                      <TableCell>{category.name}</TableCell>
                      <TableCell>{category.description}</TableCell>
                      <TableCell>0</TableCell>
                      <TableCell>
                        <EditIcon
                          onClick={() => handleEditCategory(category)}
                        />
                        <DeleteIcon
                          onClick={() => handleDeleteCategory(category)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      <Drawer
        variant="temporary"
        open={editDrawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        anchor="right"
        sx={{
          position: "relative",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {editDrawer}
        <Box
          p={2}
          gap={2}
          display={"flex"}
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
        >
          <Button variant="outlined" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="contained" onClick={fetchedCategory}>
            Save
          </Button>
        </Box>
      </Drawer>

      <Drawer
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        anchor="right"
        sx={{
          position: "relative",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
        <Box
          p={2}
          gap={2}
          display={"flex"}
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
        >
          <Button variant="outlined" onClick={handleSaveEditCategory}>
            cancel
          </Button>
          <Button variant="contained" onClick={handleSaveEditCategory}>
            Save
          </Button>
        </Box>
      </Drawer>
      <Dialog open={showDeleteConfirmation} onClose={cancelDeleteCategory}>
        <DialogTitle>Delete Category</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Are you sure you want to delete this category?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelDeleteCategory}>No</Button>
          <Button
            onClick={confirmDeleteCategory}
            variant="contained"
            color="error"
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Category;
