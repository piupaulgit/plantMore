import { getUserDetailWithToken } from "@/services/apis/user";
import { useEffect, useState } from "react";

export function useUser() {
  const [user, setUser] = useState<null | false | true>(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      getUserDetailWithToken({ token: token }).then((res: any) => {
        setUser(res.user);
      });
    }
  }, []);

  return user;
}
