// /src/app/customers/check/CheckPageClient.jsx
"use client";

import { useSearchParams } from "next/navigation";
import OneCustomerInfoCard from "@/app/components/one_customer_info_card.jsx";
import fetchCustomer from "../fetchCustomer";
import { useEffect, useState } from "react";

export default function CheckPageClient() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAndSetCustomer = async () => {
      if (id) {
        try {
          const data = await fetchCustomer(id);
          if (Array.isArray(data) && data.length > 0) {
            setCustomer(data[0]);
          } else {
            setError("顧客情報が見つかりませんでした。");
          }
        } catch (err) {
          console.error("顧客情報の取得に失敗しました:", err);
          setError("データ取得時にエラーが発生しました。");
        }
      } else {
        setError("IDが指定されていません。");
      }
    };
    fetchAndSetCustomer();
  }, [id]);

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  if (!customer) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-4">
      <div className="alert alert-success mb-4">更新しました</div>
      <div className="card bordered bg-white border-blue-200 border-2 max-w-sm m-4">
        <OneCustomerInfoCard {...customer} />
      </div>
      <a href="/customers">
        <button className="btn btn-outline btn-accent">一覧に戻る</button>
      </a>
    </div>
  );
}