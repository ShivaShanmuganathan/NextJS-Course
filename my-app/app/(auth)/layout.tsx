import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      <div>{children}</div>
      <div>Hello Again!</div>
    </main>
  );
}

export default Layout;
