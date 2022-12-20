import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import LoginPage from "../LoginPage/LoginPage";

export const ApplyOrganizer = () => {
  return <div>ApplyOrganizer</div>;
};

export default withAuthenticationRequired(ApplyOrganizer, {
  onRedirecting: () => <LoginPage />,
});
