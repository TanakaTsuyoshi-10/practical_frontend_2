export const dynamic = "force-dynamic";

import CheckPageClient from "./CheckPageClient";

// サーバーで顧客データを取得
async function fetchCustomer(id) {
  const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const res = await fetch(`${endpoint}/customers?customer_id=${id}`, {
    cache: "no-cache",
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data[0]; // 配列の1件目
}

export default async function CheckPage({ searchParams }) {
  const customer_id = searchParams?.id;
  const customerData = customer_id ? await fetchCustomer(customer_id) : null;

  if (!customerData) {
    return <div className="p-4 text-red-600">顧客データが取得できませんでした。</div>;
  }

  // 必ずキーを合わせる
  const {
    customer_id: id,
    customer_name: name,
    age,
    gender,
  } = customerData;

  return (
    <CheckPageClient id={id} name={name} age={age} gender={gender} />
  );
}