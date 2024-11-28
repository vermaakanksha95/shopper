import React from "react";
import Heading from "../components/heading";
import { CartList } from "./_components/cartlist";

import User from "@/models/User";
import { auth } from "@/auth";

const page = async () => {
  let user = null;
  const session = await auth();
  if (session) {
    user = await User.findOne({ email: session.user.email });
  }
  return (
    <>
      <Heading
        color="bg-black"
        title="My Cart"
        subtitle="Manage yoyr Cart By Adding your same product"
      />
      <CartList user={user} />
    </>
  );
};

export default page;
