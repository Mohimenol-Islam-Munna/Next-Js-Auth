import React from "react";
import { getSession } from "next-auth/react";
import axios from "axios";

const Blog = ({ posts }) => {
  console.log("posts data ::", posts);

  return (
    <div>
      {posts ? (
        <div>
          {posts.map((post) => (
            <div className="my-2 py-2 px-4 border w-75 border-info mx-auto rounded">
              <h4 className="text-capitalize">{post.title}</h4>
              <hp>{post.body}</hp>
            </div>
          ))}
        </div>
      ) : (
        <div className="my-2 py-2 px-4 border w-75 border-info mx-auto rounded">
          <h4 className="text-capitalize">Show Blog Post Must be a logged in user</h4>
        </div>
      )}
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  let res = null;

  if (session) {
    res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  }

  return { props: { posts: res ? res.data : res } };
};

export default Blog;
