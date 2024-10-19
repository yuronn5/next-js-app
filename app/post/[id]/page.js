import Link from "next/link";

async function fetchData(id) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const result = await res.json();
  return result;
}

const Post = async ({ params }) => {
  const res = await fetchData(params.id);

  return (
    <div>
        <Link href="/">Back</Link><br/>
      <h2>{res.title}</h2>
      <p>{res.body}</p>
      <strong>Author id: {res.userId}</strong>
    </div>
  );
};

export default Post;
