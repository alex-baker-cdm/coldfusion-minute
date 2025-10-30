import Link from 'next/link';
import { Suspense } from 'react';
import SearchForm from './SearchForm';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-xl font-bold">
                FW/1 CRUD
              </Link>
              <div className="flex space-x-4">
                <Link href="/" className="hover:bg-gray-700 px-3 py-2 rounded">
                  Home
                </Link>
                <Link href="/users" className="hover:bg-gray-700 px-3 py-2 rounded">
                  List
                </Link>
                <Link href="/users/new" className="hover:bg-gray-700 px-3 py-2 rounded">
                  Add
                </Link>
              </div>
            </div>
            <Suspense fallback={<div className="px-3 py-1">Loading...</div>}>
              <SearchForm />
            </Suspense>
          </div>
        </div>
      </nav>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gray-600">&copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
