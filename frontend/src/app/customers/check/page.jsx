export const dynamic = "force-dynamic";

import { Suspense } from "react";
import CheckPageClient from "./CheckPageClient";

// async 関数を使って customerData を取得している場合の例
async function fetchCustomer(id) {
  const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const res = await fetch(`${endpoint}/customers?customer_id=${id}`, {
    cache: "no-cache",
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data[0]; // 必ず配列から1件取り出す構造である場合
}

export default async function CheckPage({ searchParams }) {
  const customer_id = searchParams?.id;
  const customerData = customer_id ? await fetchCustomer(customer_id) : null;

  if (!customerData) {
    return <div className="p-4 text-red-600">顧客データが取得できませんでした。</div>;
  }

  const { id, name, age, gender } = customerData;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckPageClient
        id={id}
        name={name}
        age={age}
        gender={gender}
      />
    </Suspense>
  );
}