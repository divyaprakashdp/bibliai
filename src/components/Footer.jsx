import { Link } from "react-router-dom";

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
              <Link to={"/terms"} className="text-white hover:text-gray-300">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
