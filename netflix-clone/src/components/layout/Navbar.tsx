import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/80 to-transparent px-4 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="h-8">
          <Image
            src="/netflix-logo.svg"
            alt="Netflix"
            width={92}
            height={25}
            className="object-contain"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-4 text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/tv-shows" className="hover:text-white transition">TV Shows</Link>
          <Link href="/movies" className="hover:text-white transition">Movies</Link>
          <Link href="/my-list" className="hover:text-white transition">My List</Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Link 
            href="/login"
            className="px-4 py-1 text-white hover:bg-red-700 transition bg-red-600 rounded"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;