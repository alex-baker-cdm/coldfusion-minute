'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@/app/lib/types';

interface UserFormProps {
  user?: User;
  mode: 'create' | 'edit';
}

export default function UserForm({ user, mode }: UserFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    login: user?.login || '',
    firstname: user?.firstname || '',
    lastname: user?.lastname || '',
    description: user?.description || '',
    level: user?.level || 0
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const url = mode === 'create' ? '/api/users' : `/api/users/${user?.id}`;
      const method = mode === 'create' ? 'POST' : 'PUT';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'An error occurred');
        setIsSubmitting(false);
        return;
      }

      const message = mode === 'create'
        ? `${formData.firstname} ${formData.lastname} has been added`
        : `${formData.firstname} ${formData.lastname} has been updated`;

      router.push(`/users?message=${encodeURIComponent(message)}`);
    } catch {
      setError('Failed to submit form');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {error && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="id" value={user?.id || 0} />
        
        <div className="flex items-center">
          <label htmlFor="login" className="w-32 font-medium">
            Login
          </label>
          <input
            id="login"
            name="login"
            type="text"
            value={formData.login}
            onChange={(e) => setFormData({ ...formData, login: e.target.value })}
            placeholder="Login"
            className="flex-1 px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        
        <div className="flex items-center">
          <label htmlFor="firstname" className="w-32 font-medium">
            First name
          </label>
          <input
            id="firstname"
            name="firstname"
            type="text"
            value={formData.firstname}
            onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
            placeholder="First name"
            className="flex-1 px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        
        <div className="flex items-center">
          <label htmlFor="lastname" className="w-32 font-medium">
            Last name
          </label>
          <input
            id="lastname"
            name="lastname"
            type="text"
            value={formData.lastname}
            onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
            placeholder="Last name"
            className="flex-1 px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        
        <div className="flex">
          <div className="w-32"></div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}
