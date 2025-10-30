import Layout from '../../../components/Layout';
import UserForm from '../../../components/UserForm';
import { notFound } from 'next/navigation';

export default async function EditUserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(`http://localhost:3000/api/users/${id}`, { cache: 'no-store' });

  if (!response.ok) {
    notFound();
  }

  const result = await response.json();
  const user = result.data;

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Edit User</h1>
        <UserForm user={user} mode="edit" />
      </div>
    </Layout>
  );
}
