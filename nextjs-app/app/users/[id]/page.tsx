import Link from 'next/link';
import Layout from '../../components/Layout';
import { notFound } from 'next/navigation';

export default async function UserDetailPage({
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
        <h2 className="text-3xl font-bold mb-6">User details: {user.login}</h2>

        <table className="min-w-full bg-white border border-gray-300">
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border font-medium">ID</td>
              <td className="px-4 py-2 border">{user.id}</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border font-medium">Login</td>
              <td className="px-4 py-2 border">{user.login}</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border font-medium">First name</td>
              <td className="px-4 py-2 border">{user.firstname}</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border font-medium">Last name</td>
              <td className="px-4 py-2 border">{user.lastname}</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 border font-medium">Description</td>
              <td className="px-4 py-2 border">{user.description}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">
                <Link
                  href={`/users/${user.id}/edit`}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </Link>
              </td>
              <td className="px-4 py-2 border">
                <Link
                  href={`/users/${user.id}/delete`}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
