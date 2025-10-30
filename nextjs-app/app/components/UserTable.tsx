import Link from 'next/link';
import { User } from '@/app/lib/types';

interface UserTableProps {
  users: User[];
}

export default function UserTable({ users }: UserTableProps) {
  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="px-4 py-2 border">ID</th>
          <th className="px-4 py-2 border">Login</th>
          <th className="px-4 py-2 border">Name</th>
          <th className="px-4 py-2 border">Description</th>
          <th className="px-4 py-2 border">Edit</th>
          <th className="px-4 py-2 border">Delete</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="hover:bg-gray-50">
            <td className="px-4 py-2 border">{user.id}</td>
            <td className="px-4 py-2 border">
              <Link href={`/users/${user.id}`} className="text-blue-600 hover:underline">
                {user.login}
              </Link>
            </td>
            <td className="px-4 py-2 border">
              {user.lastname}, {user.firstname}
            </td>
            <td className="px-4 py-2 border">{user.description}</td>
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
        ))}
      </tbody>
    </table>
  );
}
