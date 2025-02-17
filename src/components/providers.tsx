"use client";

import { PropsWithChildren } from "react";
import { PrivyProvider } from "@privy-io/react-auth";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <PrivyProvider appId="cm3sf7rpj003b12btluj2f1kx">{children}</PrivyProvider>
  );
}
