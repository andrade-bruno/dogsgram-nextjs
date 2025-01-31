"use client";

import React from "react";
import { login } from "@/actions/api";
import { getCookie } from "@/actions/cookies";

export default function Cookies() {
  const [loginOutput, setLoginOutput] = React.useState<string | undefined>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [token, setToken] = React.useState<string | undefined>(undefined);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    setLoginOutput(undefined);
    e.preventDefault();
    const { currentTarget } = e;

    const username = currentTarget.username.value;
    const password = currentTarget.password.value;

    const output = await login({ username, password });
    setLoginOutput(output.message);
    setIsLoading(false);
    setToken(await getCookie("token"));
  }

  const LoginOutput = () => {
    if (loginOutput) return <h6>{loginOutput}</h6>;

    return undefined;
  };

  const Token = () => {
    return token ? (
      <>
        <p>Token</p>
        <p>{token}</p>
      </>
    ) : undefined;
  };

  const Form = () => {
    if (isLoading) return <em>Please wait...</em>;

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">User</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Login</button>
      </form>
    );
  };

  return (
    <main>
      <h2>Cookies</h2>
      <br />
      <p>This pages use Actions from server API</p>
      <p>
        A method is triggered to watch cookies with HTpp Only for server
        privacy.
      </p>
      <p>
        <i>Default username and password are dog, both.</i>
      </p>
      <br />

      <Form />
      <LoginOutput />
      <Token />
    </main>
  );
}
