import Cookies from "js-cookie";

export const getCharacterInfo = () => {
  const cookie = Cookies.get("auth_token");

  if (!cookie) {
    return null;
  }

  return JSON.parse(cookie);
};
