import Link from 'next/link';
import Layout from '../components/Layout';
import UserTable from '../components/UserTable';
import Pagination from '../components/Pagination';

export default async function UsersPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; pagesize?: string; searchterm?: string; message?: string }>;
}) {
  const params = await searchParams;
  const page = parseInt(params.page || '1');
  const pagesize = parseInt(params.pagesize || '10');
  const searchterm = params.searchterm;
  const message = params.message;

  const url = new URL('http://localhost:3000/api/users');
  url.searchParams.set('page', page.toString());
  url.searchParams.set('pagesize', pagesize.toString());
  if (searchterm) {
    url.searchParams.set('searchterm', searchterm);
  }

  const response = await fetch(url.toString(), { cache: 'no-store' });
  const result = await response.json();

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          {message && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              {message}
            </div>
          )}
          <Link
            href="/users/new"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add New
          </Link>
        </div>

        <UserTable users={result.data} />

        {result.lastPage > 1 && (
          <Pagination
            currentPage={result.page}
            lastPage={result.lastPage}
            baseUrl="/users"
            searchterm={searchterm}
          />
        )}
      </div>
    </Layout>
  );
}
