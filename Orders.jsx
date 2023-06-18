
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardHeader, Divider, Grid } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const customCard = (
  <Card
    sx={{
      boxShadow: 4,
    }}
  >
    <CardContent>
      <Box sx={{ display: "flex", p: 1 }}>
        <Typography
          sx={{ fontSize: 18 }}
          color="text.primary"
          gutterBottom
          component="div"
        >
          OrderId:
        </Typography>
        <Box sx={{ marginRight: 0, p: 1 }}>
          <MoreVertIcon sx={{ marginLeft: "40px" }} />
        </Box>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography
          sx={{ fontSize: 12 }}
          color="text.primary"
          gutterBottom
          component="div"
        >
          OrderedAt:13.6.2023
        </Typography>
        <Typography
          sx={{ fontSize: 12 }}
          color="text.primary"
          gutterBottom
          component="div"
        >
          Orderedby praveen
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default function Orders() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList
          onChange={handleChange}
          aria-label="lab API tabs example"
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab label="Pending" value="1" />
          <Tab label="Accepted" value="2" />
        </TabList>
      </Box>

      {value === "1" && (
        <>
          <TabPanel value="1">
            <Typography
              sx={{ fontSize: 30 }}
              color="text.primary"
              gutterBottom
              component="div"
            >
              Orders Pending
            </Typography>
          </TabPanel>
          <Grid container>
            <Grid item xs={2} sx={{ p: 2 }}>
              {customCard}
            </Grid>
            <Grid item xs={2} sx={{ p: 2 }}>
              {customCard}
            </Grid>
            <Grid item xs={2} sx={{ p: 2 }}>
              {customCard}
            </Grid>
            <Grid item xs={2} sx={{ p: 2 }}>
              {customCard}
            </Grid>
            <Grid item xs={2} sx={{ p: 2 }}>
              {customCard}
            </Grid>
            <Grid item xs={2} sx={{ p: 2 }}>
              {customCard}
            </Grid>
          </Grid>
          
        </>
      )}

      <TabPanel value="2">
        <Typography
          sx={{ fontSize: 30 }}
          color="text.primary"
          gutterBottom
          component="div"
        >
          Order success
        </Typography>
      </TabPanel>
    </TabContext>
  );
}

