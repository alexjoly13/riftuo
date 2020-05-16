export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (user && user.accessToken) {
    return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
}
