//fixes the error: "React is defined but never used" by importing React
// @ts-expect-error: Unused variable
import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { techStackData } from "../data/techStackData";

const TechStack = () => {
  return (
    <Box sx={{ py: 10, bgcolor: "primary.dark", color: "text.primary" }}>
      <Typography
        variant="h2"
        align="center"
        sx={{ fontWeight: "bold", mb: 3 }}
      >
        Tech Stack
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        gap={3}
        flexWrap="wrap"
        sx={{
          bgcolor: "primary.main",
          color: "text.secondary",
          p: 3,
          borderRadius: 0,
          boxShadow: 3,
        }}
      >
        {techStackData.map((tech, index) => (
          <Link
            key={index}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              "&:hover": { opacity: 0.8 },
              color: "text.secondary",
              bgcolor: "primary.main",
              width: 320,
            }}
          >
            <Box
              component="img"
              src={tech.icon}
              alt={`${tech.name} icon`}
              sx={{ width: 64, height: 64, mb: 1 }}
            />
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {tech.name}
            </Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default TechStack;
