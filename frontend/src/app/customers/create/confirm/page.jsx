// /src/app/customers/create/confirm/page.jsx
"use client";

import { Suspense } from "react";
import ConfirmPageClient from "./ConfirmPageClient";

export default function ConfirmPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConfirmPageClient />
    </Suspense>
  );
}