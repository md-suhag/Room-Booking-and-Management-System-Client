import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <footer className="py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* About (larger column) */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-sm">
            We provide top-notch room booking services to ensure you stay in
            comfort and style. Whether for business or leisure, we’ve got you
            covered. Our platform offers a seamless booking experience and a
            range of options for all types of travelers.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/rooms" className="hover:underline">
                Rooms
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div className="md:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Policies</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/return-policy" className="hover:underline">
                Return Policy
              </Link>
            </li>
            <li>
              <Link href="/license" className="hover:underline">
                License
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="md:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Button variant="ghost" asChild>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInLogoIcon className="h-6 w-6 hover:text-white" />
              </a>
            </Button>
            <Button variant="ghost" asChild>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterLogoIcon className="h-6 w-6 hover:text-white" />
              </a>
            </Button>
            <Button variant="ghost" asChild>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramLogoIcon className="h-6 w-6 hover:text-white" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-center text-xs">
          © {new Date().getFullYear()} Room Booking and Management System. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
