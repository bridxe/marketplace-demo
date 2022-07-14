import React from "react";
import Account from "../components/Account/Account";
import LeftBar from "../components/Account/LeftBar";
import MyOrders from "../components/Account/MyOrders";
import ChangePassword from "../components/Account/ChangePassword";
import PaymentMethods from "../components/Account/PaymentMethods";

export default function AccountPage() {
  return (
    <div>
      <LeftBar />

      <Account />
      <ChangePassword />
      <PaymentMethods />
    </div>
  );
}
