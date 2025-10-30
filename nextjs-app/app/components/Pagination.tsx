'use client';

import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  lastPage: number;
  baseUrl: string;
  searchterm?: string;
}

export default function Pagination({ currentPage, lastPage, baseUrl, searchterm }: PaginationProps) {
  const buildUrl = (page: number) => {
    const url = new URL(baseUrl, window.location.origin);
    url.searchParams.set('page', page.toString());
    if (searchterm) {
      url.searchParams.set('searchterm', searchterm);
    }
    return url.pathname + url.search;
  };

  return (
    <nav className="flex justify-center mt-4">
      <ul className="flex space-x-2">
        <li>
          <Link
            href={buildUrl(currentPage - 1)}
            className={`px-3 py-2 rounded ${
              currentPage === 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
            onClick={(e) => currentPage === 1 && e.preventDefault()}
          >
            Previous
          </Link>
        </li>
        
        {Array.from({ length: lastPage }, (_, i) => i + 1).map((page) => (
          <li key={page}>
            <Link
              href={buildUrl(page)}
              className={`px-3 py-2 rounded ${
                page === currentPage
                  ? 'bg-blue-700 text-white'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              {page}
            </Link>
          </li>
        ))}
        
        <li>
          <Link
            href={buildUrl(currentPage + 1)}
            className={`px-3 py-2 rounded ${
              currentPage === lastPage
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
            onClick={(e) => currentPage === lastPage && e.preventDefault()}
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
}
