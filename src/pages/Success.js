import { Button } from "@mui/material";
import React from "react";
import successImage from "../images/success-icon.png";
function Success() {
  return (
    <div className="container p-5 mt-5" style={{ minHeight: "43vh" }}>
      <div
        className="text-center"
        style={
          {
            // position: "absolute",
            // top: "30%",
            // left: "50%",
            // transform: "translate(-50%,-50%)",
          }
        }
      >
        <img src={successImage} alt="" style={{ width: "100px" }} />
        <div className="mt-4">
          We received your booking details. will be in touch shortly
        </div>
        <div>You can track your ride details on your account section</div>
        <div className="text-center d-flex gap-2 mt-4 w-100 justify-content-center">
          <a href="/">
            <Button
              variant="outlined"
              style={{ border: "1px solid black", color: "black" }}
              type="primary"
            >
              Go Home
            </Button>
          </a>
          <a href="/Profile">
            <Button
              variant="contained"
              style={{ background: "black", color: "white" }}
              type="primary"
              onClick={() => sessionStorage.setItem("ordertabindex", 1)}
            >
              Go to Orders
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Success;
