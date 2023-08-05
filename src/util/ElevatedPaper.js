import React from "react";
import Paper from "@mui/material/Paper";

const Component = props => <Paper elevation={4} {...props}>{props.children}</Paper>

export default Component;
