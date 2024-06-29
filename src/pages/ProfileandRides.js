import React from "react";

import { Typography } from "antd";
import OrderComponent from "../components/orders/OrderComponent";

const { Title } = Typography;

function ProfileandRides() {
  return (
    <div>
      <h3>Trips</h3>
      <div className="container pt-1 pb-4">
        <Title level={3} style={{ color: "white", fontWeight: "700" }}>
          Ride Status
        </Title>
        <OrderComponent />
      </div>
    </div>
  );
}

export default ProfileandRides;
