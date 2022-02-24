import React, { useEffect } from "react";
import { useSession, getSession, signIn } from "next-auth/react";

const Dashboard = () => {
  const { data: session, status } = useSession();

  const getSessionHandler = async () => {
    const session2 = await getSession();
    console.log("getSession in dashboard :::", session2);
  };

  console.log("session in dashboard :", session);
  console.log("status in dashboard :", status);

  if (!session && status === "unauthenticated") {
    return signIn();
  }

  if (!session && status === "loading") {
    return (
      <div className="w-75 mx-auto">
        <h4>Please wait...</h4>
      </div>
    );
  }

  return (
    <div className="w-75 mx-auto">
      <h2>Dashboard page</h2>
      <button className="btn btn-warning" onClick={getSessionHandler}>
        Get Session
      </button>
    </div>
  );
};

export default Dashboard;
