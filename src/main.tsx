//fixes the error: "React is defined but never used" by importing React
// @ts-expect-error: Unused variable
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { theme } from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import "./index.css";

const queryClient = new QueryClient();
const router = createRouter({ routeTree });


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
