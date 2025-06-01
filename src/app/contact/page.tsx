import Head from "next/head";
import Link from "next/link";
import Header from '@/app/components/header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to the contacts page</title>
        <meta name="description" content="Promote your app with Calmnest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Header />

      <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
            Vous cherchez à nous contacter ?
            </h1>
            <form className="space-y-5">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nom complet
                </label>
                <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#357C8A] focus:border-[#357C8A]"
                placeholder="Jean Dupont"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Adresse email
                </label>
                <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#357C8A] focus:border-[#357C8A]"
                placeholder="jean.dupont@email.com"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
                </label>
                <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-[#357C8A] focus:border-[#357C8A]"
                placeholder="Votre message ici..."
                />
            </div>

            <button
                type="submit"
                className="w-full bg-[#357C8A] text-white py-3 px-4 rounded-md font-semibold hover:bg-[#285f69] transition"
            >
                Envoyer le message
            </button>
            </form>
        </div>
        </main>


      <footer className="bg-white text-center text-gray-500 text-sm py-4 border-t">
        © {new Date().getFullYear()} Calmnest. All rights reserved.
      </footer>
    </>
  );
}
