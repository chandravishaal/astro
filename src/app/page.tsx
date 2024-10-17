import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows items-center justify-items-center min-h-screen   my-4  text-black font-[family-name:var(--font-geist-sans)]">

      {/* Navbar */}
      <header className="w-full flex justify-between items-center px-8  ">
        <h1 className="text-3xl font-bold">Astrosapientes</h1>
        <nav className="flex gap-4">
          <a href="#articles" className="hover:text-gray-700">Articles</a>
          <a href="#about" className="hover:text-gray-700">About</a>
          <a href="#contact" className="hover:text-gray-700">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col my-14 gap-8 row-start-2 items-center text-center sm:items-start">
        <h2 className="text-4xl sm:text-6xl font-bold">
          Explore the Universe
        </h2>
        <p className="text-lg sm:text-xl max-w-lg">
          Discover the wonders of the cosmos, delve into the mysteries of space, and explore scientific articles on astronomy and astrophysics.
        </p>

        {/* Add a beautiful space image */}
        <div className="relative w-full max-w-3xl h-96 -my-28">
          <Image
          alt="space image"
            src="https://yt3.googleusercontent.com/6e1m74VPlW9GJs8_sP5quw6M2myjX3InGa7S0cqVZP7lIA7XXLf6XHdSZ-Zg8_Br4edlXNAW7Q=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
            layout="fill"
            objectFit="contain"
            className="rounded-lg shadow-lg "
          />
        </div>


        <div className="flex gap-4 mt-6">
          <a
            href="#articles"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-black rounded-lg"
          >
            View Articles
          </a>
          <a
            href="#about"
            className="px-6 py-3 border border-gray-700 hover:bg-gray-700 hover:text-black rounded-lg"
          >
            Learn More
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center w-full py-4">
        <a href="https://twitter.com/astrosapientes" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
          Twitter
        </a>
        <a href="https://instagram.com/astrosapientes" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
          Instagram
        </a>
        <a href="https://youtube.com/astrosapientes" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">
          YouTube
        </a>
        <p className="text-sm">© 2024 Astrosapientes. All rights reserved.</p>
      </footer>
    </div>
  );
}
