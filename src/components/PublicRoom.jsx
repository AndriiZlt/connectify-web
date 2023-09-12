import React from "react";
import css from "./css/PublicRoom.module.css";
import { Typography } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import usersToGroups from "../helpers/usersToGroups";
import { nanoid } from "nanoid";

const PublicRoom = () => {
  const groups = usersToGroups();
  let width = "100%";
  return (
    <>
      <div className={css.roomHeader}>
        <Typography
          variant="h6"
          component="h6"
          sx={{ color: "white", fontSize: 17, width: "85%" }}
        >
          PEOPLE READY TO CHAT
        </Typography>
        <Typography
          variant="h6"
          component="h6"
          sx={{
            color: "white",
            fontSize: 17,
            width: "5%",
          }}
        >
          23
        </Typography>
        <TuneIcon sx={{ color: "white", width: "10%" }} />
      </div>
      <div className={css.publicRoom}>
        <div className={css.usersList}>
          {groups.map((group) =>
            groups.indexOf(group) % 2 === 0 ? (
              <div
                key={nanoid()}
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: width,
                  padding: 0,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {group.map(({ id, name, photo }) => (
                  <div className={css.friendCard} key={id}>
                    <img
                      className={css.friendAvatar}
                      src={photo}
                      alt="User avatar"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div
                key={nanoid()}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: width,
                  padding: 0,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {group.map(({ id, name, photo }) => (
                  <div
                    className={css.friendCard}
                    style={{ marginLeft: "3.2%", marginRight: "3.2%" }}
                  >
                    <img
                      className={css.friendAvatar}
                      src={photo}
                      alt="User avatar"
                    />
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default PublicRoom;
