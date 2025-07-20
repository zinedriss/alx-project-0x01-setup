import Header from '@/components/layout/Header';
import React from 'react';

const PostsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Posts Page</h1>
        <p>Welcome to the posts page. Content for posts will be displayed here.</p>
      </main>
    </div>
  );
};

export default PostsPage;