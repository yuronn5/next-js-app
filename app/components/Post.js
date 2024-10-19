import Link from "next/link";

const Post = ({post}) => {
  return (
    <div>
      <Link href="/">Back</Link>
      <br />
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <strong>Author id: {post.userId}</strong>
    </div>
  );
};

export default Post;
