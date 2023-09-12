import React from "react";
import css from "./css/ChatList.module.css";
import { List, ListItem } from "@mui/material";
import friends from "../friends";

const ChatList = () => {
  return (
    <div className={css.chatSection}>
      <List className={css.chatList}>
        {friends.map(({ id, name, photo }) => (
          <ListItem
            disablePadding
            key={id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className={css.friendCard}>
              <img className={css.friendAvatar} src={photo} alt="User avatar" />
            </div>
            <p className={css.friendName}>{name}</p>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ChatList;
