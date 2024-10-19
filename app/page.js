import Link from "next/link";

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await res.json();
  return result;
}

export default async function Home() {

  const res = await fetchData();
  

  return (
    <div>
      <h1>Home page</h1>
      {res.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link href={`/post/${post.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}
