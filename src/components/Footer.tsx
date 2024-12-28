import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-8 md:pt-10">
      <footer className="bg-gray-800 text-gray-200 py-4">
        <div className="mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-wrap justify-between gap-8">
            <div className="w-full sm:w-auto flex-1 min-w-[250px]">
              <h4 className="text-lg md:text-xl font-semibold mb-4">
                About SoundVibe
              </h4>
              <p className="text-sm md:text-base text-gray-400">
                At SoundVibe, we&apos;re dedicated to delivering high-quality
                headphones that bring your music and audio experiences to life.
                Explore sound like never before with innovative designs and
                top-notch sound performance.
              </p>
            </div>

            <div className="w-full sm:w-auto flex-1 min-w-[250px]">
              <h4 className="text-lg md:text-xl font-semibold mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full sm:w-auto flex-1 min-w-[250px]">
              <h4 className="text-lg md:text-xl font-semibold mb-4">
                Contact Us
              </h4>
              <p className="text-gray-400">📍 456 Sound Avenue, AudioCity</p>
              <p className="text-gray-400">📞 +1 555 123 4567</p>
              <p className="text-gray-400">✉️ support@soundvibe.com</p>
            </div>

            <div className="w-full sm:w-auto flex-1 min-w-[250px]">
              <h4 className="text-lg md:text-xl font-semibold mb-4">
                Follow Us
              </h4>
              <div className="flex text-xl space-x-6">
                <Link href="#" className="hover:text-white">
                  <FaLinkedin />
                </Link>
                <a href="#" className="hover:text-white">
                  <FaGithub />
                </a>
                <a href="#" className="hover:text-white">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center my-4 text-gray-500 text-sm">
            © 2024 SoundVibe. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
