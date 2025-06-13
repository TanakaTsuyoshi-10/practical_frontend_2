"use client";

export default function CheckPageClient({ id, name, age, gender }) {
  return (
    <div className="card bg-white border-2 border-blue-200 max-w-sm m-4 p-4">
      <h2 className="text-xl font-bold mb-2">顧客確認</h2>
      <p>ID: {id}</p>
      <p>名前: {name}</p>
      <p>年齢: {age}</p>
      <p>性別: {gender}</p>
    </div>
  );
}