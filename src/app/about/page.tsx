import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";

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
        </div>
        </main>


      <footer className="bg-white text-center text-gray-500 text-sm py-4 border-t">
        © {new Date().getFullYear()} Calmnest. All rights reserved.
      </footer>
    </>
  );
}
