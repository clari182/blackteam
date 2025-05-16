import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Your Logo"
            width={150}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>
        <nav className="flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
            Home
          </Link>
          <Link href="/team" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
            Equipo
          </Link>
          <Link href="/horses" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
            Caballos
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
            Servicios
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 