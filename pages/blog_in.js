import NavBar from "../components/NavBar";
import PostCard from "../components/PostCard";
import getPosts from "../helpers/getPosts";

export default function Home({ posts }) {
  return (
    
    <div className=" text-white">
      <div className="mt-20"></div>
      <NavBar/>
      <div className="mt-20"></div>
      <h1 className="mb-12 px-14 font-bold text-3xl">Latest Posts</h1>
      <div className="px-10">
      {posts.map((post) => (
        <PostCard 
          key={post.slug}
          title={post.data.title}
          date={post.data.date}
          description={post.data.description}
          slug={post.slug}
        />
      ))}
      </div>
    </div>
  );
}

export const getStaticProps = () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};