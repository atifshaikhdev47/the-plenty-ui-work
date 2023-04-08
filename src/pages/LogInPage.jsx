// import "./App.css"
import { withAuthenticator, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import toastr from "toastr";

function LogInPage({ user }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      toastr.options={
        "preventDuplicates":true,
        "preventOpenDuplicates": true,

      }
      toastr.success("logged in successfully",{
        timeOut: 5000,
                
      });
      navigate("/dashboard");
    }
  }, []);

  return (
    <div>
      <Heading level={1}>Hello {user.username}</Heading>
    </div>
  );
}

export default withAuthenticator(LogInPage);
