"use client";
import React from "react";
import ContractsOverview from "../Tables/ContractsOverview";
import { useUser } from "@auth0/nextjs-auth0/client";
import SignIn from "../Auth0/SignIn";

const MainDashboard: React.FC = () => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (user) {
    return (
      <>
        <h1>My Dashboard</h1>

        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <div className="col-span-12 xl:col-span-12">
            <ContractsOverview />
          </div>
        </div>
      </>
    )
  }

  return <SignIn />;
};

export default MainDashboard;
