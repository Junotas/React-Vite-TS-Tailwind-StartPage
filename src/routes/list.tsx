import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useUserList } from "../hooks/useUserList";
import { Button, IconButton, TextField, useTheme } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";

export const Route = createFileRoute("/list")({
  component: () => {
    const [newUserName, setNewUserName] = useState("");
    const {
      users,
      isLoading,
      error,
      toggleFetch,
      addUser,
      removeUser,
      isModified,
    } = useUserList();

    const theme = useTheme();

    const handleAddUser = () => {
      if (newUserName.trim()) {
        addUser(newUserName);
        setNewUserName("");
      }
    };

    const handleFormSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      handleAddUser();
    };

    return (
      <div
        className="flex flex-col justify-center items-center min-h-screen"
        style={{ backgroundColor: theme.palette.background.default }}
      >
        <div
          className="w-full max-w-md"
          style={{
            backgroundColor: theme.palette.background.paper,
            borderRadius: theme.shape.borderRadius,
            boxShadow: theme.shadows[3],
            padding: theme.spacing(3),
          }}
        >
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <div className="flex items-center space-x-2">
              <GroupIcon sx={{ color: theme.palette.primary.main }} />
              <h2
                className="text-2xl font-bold"
                style={{ color: theme.palette.primary.main }}
              >
                User List
              </h2>
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={toggleFetch}
              sx={{ fontWeight: "bold", marginBottom: 2 }}
              startIcon={<ReplayCircleFilledIcon />}
            >
              {isModified ? "Reset List" : "Fetch List"}
            </Button>
          </div>

          <div
            className="max-h-[250px] overflow-y-auto scrollbar-thin"
            style={{
              scrollbarColor: `${theme.palette.grey[400]} ${theme.palette.grey[200]}`,
            }}
          >
            {isLoading ? (
              <p>Loading users...</p>
            ) : error ? (
              <p style={{ color: theme.palette.error.main }}>
                Error loading users
              </p>
            ) : (
              <ul className="list-disc list-inside text-center space-y-2">
                {users.map((user) => (
                  <li
                    key={user.id}
                    className="flex justify-between items-center text-lg"
                  >
                    {user.name}
                    <IconButton
                      onClick={() => removeUser(user.id)}
                      sx={{ color: theme.palette.secondary.main }}
                      aria-label="delete user"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <form onSubmit={handleFormSubmit} className="flex items-center mt-4">
            <TextField
              variant="outlined"
              label="Add new user"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              fullWidth
              sx={{ mr: 2 }}
            />
            <IconButton type="submit" color="secondary" aria-label="add user">
              <AddCircleIcon />
            </IconButton>
          </form>
        </div>
      </div>
    );
  },
});
