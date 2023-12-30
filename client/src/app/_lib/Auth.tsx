import { useEffect, useState } from "react";

export function useUser() {
  const [user, setUser] = useState<null | false | true>(false);

  useEffect(() => {
    setUser(false);
    console.log("test use eff");
  }, []);

  return user;
}
