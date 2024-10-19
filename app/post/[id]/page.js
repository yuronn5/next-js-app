import Post from "@/app/components/Post";

// Dynamic metadata generation
export async function generateMetadata({ params, searchParams }) {
  try {
    const post = await fetchData(params.id);

    return {
      title: post.title || "Post",
      description: post.body || "No description available",
    };
  } catch (error) {
    console.error("Failed to generate metadata for post:", error);
    return {
      title: "Post Not Found",
      description: "Unable to load post details.",
    };
  }
}

async function fetchData(id) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);

  if (!res.ok) {
    throw new Error("Failed to fetch post data");
  }

  const result = await res.json();
  return result;
}

// Static generation of post ids
export async function generateStaticParams() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  return posts.map((post) => ({
    id: post.id.toString(), // Ensure the id is a string
  }));
}

const PagePost = async ({ params: { id } }) => {
  try {
    const post = await fetchData(id);

    return (
      <div className="post">
        <Post post={post} />
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch post:", error);
    return <p>Failed to load post details.</p>;
  }
};

export default PagePost;
