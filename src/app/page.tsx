import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
        <h1 className="text-5xl font-bold text-gray-800 mb-8">Home page CRM</h1>
        <p className="text-lg text-gray-600 mb-6">
          Please choose one of the following pages:
        </p>
        <Link
          href="/companies"
          className="text-2xl text-blue-600 hover:underline"
        >
          Companies
        </Link>
        <Link
          href="/dashboard"
          className="text-2xl text-blue-600 hover:underline"
        >
          Dashboard
        </Link>
      </div>
    </main>
  );
}
