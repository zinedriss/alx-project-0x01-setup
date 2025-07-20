import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";

// The component receives an object with a 'posts' property
const Posts: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow p-4 md:p-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
              Post Content
            </h1>
            <button className="bg-blue-700 px-5 py-2 rounded-full text-white font-semibold hover:bg-blue-800 transition-colors duration-300 shadow-md">
              Add Post
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              posts?.map(({ title, body, userId, id }) => (
                <PostCard title={title} body={body} userId={userId} id={id} key={id} />
              ))
            }
          </div>
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      // If the response is not ok, throw an error
      throw new Error(`Failed to fetch posts, status: ${response.status}`);
    }
    const posts: PostProps[] = await response.json();

    return {
      props: {
        posts,
      },
      // Optional: re-generate the page every 60 seconds
      revalidate: 60, 
    };
  } catch (error) {
    console.error(error);
    // In case of an error, return an empty array for posts
    return {
      props: {
        posts: [],
      },
    };
  }
}

export default Posts;
