export const dynamic = "force-dynamic"; // ← これが最上部に必要

import { Suspense } from "react";
import ConfirmPageClient from "./ConfirmPageClient";

export default function ConfirmPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConfirmPageClient />
    </Suspense>
  );
}