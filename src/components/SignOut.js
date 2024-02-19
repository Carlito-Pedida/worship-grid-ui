import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // corrected import

function SignOut() {
  const navigate = useNavigate(); // using useNavigate hook
  useEffect(() => {
    try {
      const jwt = localStorage.getItem("loggedUserToken"); // retrieve JWT token
      localStorage.removeItem("loggedUserToken"); // remove the token
      if (jwt) {
        const userToken = jwtDecode(jwt);
        // setUser(userToken); // no need to set user state here
        navigate("/"); // navigate to home page
        window.location.reload();
      }
    } catch (ex) {
      console.error("Error during sign out:", ex); // handle errors properly
    }
  }, []); // add navigate to the dependency array
}

export default SignOut;
