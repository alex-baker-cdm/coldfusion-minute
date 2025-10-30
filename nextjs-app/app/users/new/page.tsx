import Layout from '../../components/Layout';
import UserForm from '../../components/UserForm';

export default function NewUserPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Create User</h1>
        <UserForm mode="create" />
      </div>
    </Layout>
  );
}
