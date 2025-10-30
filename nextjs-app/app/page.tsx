import Link from 'next/link';
import Layout from './components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <h1 className="text-5xl font-bold mb-4">Hello, world!</h1>
            <p className="text-lg text-gray-700 mb-6">
              This is a template for a simple marketing or informational website. 
              It includes a large callout called a jumbotron and three supporting pieces of content. 
              Use it as a starting point to create something more unique.
            </p>
            <Link
              href="/users"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600"
            >
              Proceed to user list
            </Link>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-3">Heading</h2>
            <p className="text-gray-700 mb-4">
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus, 
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum 
              massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. 
              Donec sed odio dui.
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              View details »
            </a>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-3">Heading</h2>
            <p className="text-gray-700 mb-4">
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus, 
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum 
              massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. 
              Donec sed odio dui.
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              View details »
            </a>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-3">Heading</h2>
            <p className="text-gray-700 mb-4">
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus, 
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum 
              massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. 
              Donec sed odio dui.
            </p>
            <a href="#" className="text-blue-600 hover:underline">
              View details »
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
