import React, { FunctionComponent, useEffect, useState } from "react";
import { useAuth, useSession } from "../services";

export const Dashboard: FunctionComponent = () => {
  const auth = useAuth();
  const session = useSession();
  const [user, setUser] = useState<unknown | null>(null);

  useEffect(() => {
    const user = session?.identity?.traits;
    console.log("Dashboard: auth.state: ", auth.state);
    console.log("Dashboard: user: ", user);

    if (!auth.state.isAuthenticated) auth.login(true);
    setUser(user);
  }, [session]);

  if (!user) return <div>No user</div>;

  return <div>{JSON.stringify(user)}</div>;
};
