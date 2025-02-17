"use client";

import { usePrivy } from "@privy-io/react-auth";

export default function PrivyPage() {
  const { ready, authenticated, user, login, logout } = usePrivy();

  return (
    <main className="flex gap-2">
      <div className="w-[60vw] h-screen overflow-y-auto border p-2">
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
      <div className="h-screen flex flex-col justify-center gap-2 items-center border p-2">
        <button
          className="bg-slate-500 rounded-md w-fit px-2 py-1 hover:bg-slate-600"
          onClick={login}
          disabled={!ready || authenticated}
        >
          Login
        </button>
        <button
          className="bg-slate-500 rounded-md w-fit px-2 py-1 hover:bg-slate-600"
          onClick={logout}
          disabled={!ready || !authenticated}
        >
          Logout
        </button>
      </div>
    </main>
  );
}
