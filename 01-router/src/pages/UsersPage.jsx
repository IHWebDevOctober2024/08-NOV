import { Navigate } from "react-router-dom";
import { useState } from "react";

function UsersPage(props) {
 

  if (!props.isLoggedIn) return <Navigate to="/error" />;

  return (
    <>
      <h1>Users page</h1>
      <p>This page is only for logged in users</p>
    </>
  );
}

export default UsersPage;
