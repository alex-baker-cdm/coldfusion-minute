'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('searchterm') || '');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/users?searchterm=${encodeURIComponent(searchTerm)}`);
    } else {
      router.push('/users');
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
        className="px-3 py-1 rounded text-gray-900"
      />
      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 px-4 py-1 rounded"
      >
        Search
      </button>
    </form>
  );
}
