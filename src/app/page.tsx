import Head from "next/head";
import Link from "next/link";
import Header from '@/app/components/header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Calmnest</title>
        <meta name="description" content="Calm your mind with Calmnest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Header />
      
      <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Bienvenue chez Calmnest
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Parce qu'on à tous besoin d'une pause.
          </p>
          <Link
            href="/product"
            className="inline-block px-6 py-3 text-white font-semibold rounded-lg hover:bg-[#2c676f] transition"
            style={{ backgroundColor: "#357C8A" }}
          >
            Obtenir l'application
          </Link>
        </div>
      </main>

      <footer className="bg-white text-center text-gray-500 text-sm py-4 border-t">
        © {new Date().getFullYear()} Calmnest. All rights reserved.
      </footer>
    </>
  );
}
