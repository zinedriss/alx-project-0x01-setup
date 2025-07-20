import Header from '@/components/layout/Header';
import React from 'react';

const UsersPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Users Page</h1>
        <p>Welcome to the users page. User information will be displayed here.</p>
      </main>
    </div>
  );
};

export default UsersPage;