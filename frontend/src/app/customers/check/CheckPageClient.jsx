export default function CheckPageClient({ id, name, age, gender }) {
  return (
    <div className="p-4">
      <div className="alert alert-success mb-4">更新が完了しました</div>
      <div className="card ...">
        <div className="card-body">
          <p>ID: {id}</p>
          <p>名前: {name}</p>
          ...
        </div>
      </div>
    </div>
  );
}