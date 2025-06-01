import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Calmnest</title>
        <meta name="description" content="Promote your app with Calmnest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="bg-gradient-to-r from-[#357C8A] via-[#1E3A8A] to-[#38BDF8] animate-gradient shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold text-yellow-400">Calmnest</div>
            <nav className="space-x-6">
              <Link href="/" className="text-yellow-300 hover:text-white transition">Home</Link>
              <Link href="/product" className="text-yellow-300 hover:text-white transition">Product</Link>
              <Link href="/contact" className="text-yellow-300 hover:text-white transition">Contact</Link>
              <Link href="/about" className="text-yellow-300 hover:text-white transition">About Us</Link>
            </nav>
          </div>
        </div>
      </header>



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
