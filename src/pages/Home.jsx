import css from "./Home.module.css";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase-config";
import {
  Container,
  Typography,
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  CssBaseline,
  Button,
  Avatar,
  List,
  ListItem,
} from "@mui/material";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Header from "../components/Header";
import ChatList from "../components/ChatList";
import PublicRoom from "../components/PublicRoom";

const Home = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div className={css.container} style={{ height: height }}>
      <Header />
      <ChatList />
      <PublicRoom />
    </div>
  );
};

export default Home;
