"use client";
import React from "react";
import Users from "./api/users";

export default function Page() {
  return (
    <main>
      <h1>Usuários!</h1>
      <Users />
    </main>
  );
}
