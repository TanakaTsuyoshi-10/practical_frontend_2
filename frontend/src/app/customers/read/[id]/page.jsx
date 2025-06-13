"use client";

// OneCustomerInfoCard を dynamic import で読み込み、SSR を無効にする
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import BackButton from "./back_button";
import fetchCustomer from "@/app/customers/fetchCustomer"

// SSR 無効でクライアント側だけで読み込むようにする（Hydration mismatch 対策）
const OneCustomerInfoCard = dynamic(
  () => import("@/app/components/one_customer_info_card.jsx"),
  { ssr: false }
);

export default function ReadPage({ params }) {
  const id = params.id;
  const [customerInfo, setCustomerInfo] = useState(null);

  useEffect(() => {
    const fetchAndSetCustomer = async () => {
      const customerData = await fetchCustomer(id);
      setCustomerInfo(customerData);
    };
    fetchAndSetCustomer();
  }, [id]);

  if (!customerInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card bordered bg-white border-blue-200 border-2 max-w-sm m-4">
      <OneCustomerInfoCard {...customerInfo} />
      <BackButton>戻る</BackButton>
    </div>
  );
}