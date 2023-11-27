import { useState } from "react";
import { ChatsPage, UserProps } from "./app-components/ChatsPage";
import { AuthPage } from "./app-components/AuthPage";

export const App = () => {
  const [user, setUser] = useState<UserProps>();

  return !user ? (
    <AuthPage onAuth={(user) => setUser(user)} />
  ) : (
    <ChatsPage user={user} />
  );
};
