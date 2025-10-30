'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DeleteUserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();

  useEffect(() => {
    const deleteUser = async () => {
      const { id } = await params;
      const response = await fetch(`/api/users/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        router.push('/users');
      } else {
        alert('Failed to delete user');
        router.push('/users');
      }
    };

    deleteUser();
  }, [params, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-4">Deleting user...</p>
      </div>
    </div>
  );
}
