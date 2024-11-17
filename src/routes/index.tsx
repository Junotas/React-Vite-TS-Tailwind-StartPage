import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import TechStack from "../components/TechStack";
import GettingStarted from "../components/GettingStarted";
import Routing from "../components/routing";
import Tailwind from "../components/Tailwind";
import MUI from "../components/mui";
import FutureEnhancements from "../components/FutureEnhancements";
const WelcomePage = () => {
  return (
    <div className="font-sans min-h-screen flex flex-col">

      <div className="flex-grow p-6">
        <GettingStarted/>
        <Routing/>
        <TechStack/>
        <Tailwind/>
        <MUI/>
        <FutureEnhancements/>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: WelcomePage,
});

export default WelcomePage;
