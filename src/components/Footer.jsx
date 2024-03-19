export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 w-full">
      <div className="container mx-auto text-center">
        <p className="text-lg">&copy; 2024 BIBLIAI. All rights reserved.</p>
        <nav className="mt-4">
          <ul className="flex justify-center">
            <li className="mr-4">
              <a href="#about" className="text-white hover:text-gray-300">
                About Us
              </a>
            </li>
            <li className="mr-4">
              <a href="#contact" className="text-white hover:text-gray-300">
                Contact
              </a>
            </li>
            <li>
              <a href="#privacy" className="text-white hover:text-gray-300">
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
