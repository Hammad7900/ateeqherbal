import { createContext, useContext, useState } from "react";

/*
  NOTE: Ye abhi sirf browser ke localStorage mein data rakhta hai (test/demo ke liye).
  Har user ka account sirf usi browser mein hota hai. Asli website ke liye
  backend chahiye (Firebase, Supabase ya apna server). Neeche signup() aur login()
  ko badalna kaafi hoga, baqi pages wese hi rahenge.
*/

const AuthContext = createContext(null);

const USERS_KEY = "ateeq_users";
const SESSION_KEY = "ateeq_session";

const readUsers = () => {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
};

const readSession = () => {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY));
  } catch {
    return null;
  }
};

// password seedha save nahi hota, pehle hash hota hai
async function hash(text) {
  const data = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(readSession);

  const signup = async ({ name, email, password }) => {
    const cleanEmail = email.trim().toLowerCase();
    const users = readUsers();

    if (users.some((u) => u.email === cleanEmail)) {
      return { ok: false, error: "An account with this email already exists." };
    }

    const newUser = {
      id: Date.now().toString(),
      name: name.trim(),
      email: cleanEmail,
      passwordHash: await hash(password),
    };

    localStorage.setItem(USERS_KEY, JSON.stringify([...users, newUser]));

    const session = { id: newUser.id, name: newUser.name, email: newUser.email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
    return { ok: true };
  };

  const login = async ({ email, password }) => {
    const cleanEmail = email.trim().toLowerCase();
    const found = readUsers().find((u) => u.email === cleanEmail);

    if (!found || found.passwordHash !== (await hash(password))) {
      return { ok: false, error: "Incorrect email or password." };
    }

    const session = { id: found.id, name: found.name, email: found.email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
    return { ok: true };
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);