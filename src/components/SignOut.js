import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

function SignOut() {
  const [setUser] = useState();

  useEffect(() => {
    try {
      const jwt = localStorage.removeItem("loggedUserToken");
      const userToken = jwtDecode(jwt);
      setUser(userToken);
    } catch (ex) {}
    window.location = "/";
  });
}

export default SignOut;
