import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../components/LoginButton";
import LogoutButton from "../../components/LogoutButton";

const LoginPage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div>
      {!isAuthenticated ? (
        <LoginButton />
      ) : (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <LogoutButton />
        </div>
      )}
    </div>
  );
};

export default LoginPage;
