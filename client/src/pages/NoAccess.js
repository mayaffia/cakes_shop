import React from "react";
import { Context } from "../index";
import { useContext } from "react";

export default function NoAccess() {
  const { user } = useContext(Context);
  alert(user.isAuth);

  return <div>NO ACCESS</div>;
}
