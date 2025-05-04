export const isTokenExpired = (token) => {
  if (!token) return true;
  try {
    const payload = JSON.parse(atob(token.split('.')[1])); // base64 decode
    const currentTime = Date.now() / 1000; // saniye cinsinden
    return payload.exp < currentTime;
  } catch (e) {
    console.log(e);
    return true;
  }
};

export const decodeToken = (token) => {
  try {
    const payload = token.split('.')[1];
    const decoded = atob(payload);
    return JSON.parse(decoded); // örn: { email: "...", role: "...", exp: ... }
  } catch (e) {
    console.log(e);
    return null;
  }
};
