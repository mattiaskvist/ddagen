import { useState } from "react";
import { useLocale } from "@/locales";
import { AdminLogin } from "./components/AdminLogin";
import { ExhibitorPanel } from "./components/ExhibitorPanel";

export default function Sales() {
  const t = useLocale();
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {!isLoggedIn ? (
        <AdminLogin
          t={t}
          password={password}
          setPassword={setPassword}
          setIsLoggedIn={setIsLoggedIn}
        />
      ) : (
        <ExhibitorPanel t={t} password={password} />
      )}
    </div>
  );
}
