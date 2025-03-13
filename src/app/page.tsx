import Image from "next/image";

import Link from "next/link";
import { FaYoutube, FaGithub, FaTiktok } from "react-icons/fa";
export default function Home() {
  return (
    <main className="flex-grow flex flex-col items-center space-y-4 px-4 mt-8 dark:bg-gray-900">
      <div className="flex items-center space-x-4">
        <Image
          src="/images/avatar.png"
          alt="Avatar"
          width={90}
          height={90}
          className="rounded-full border-2 border-gray-300 dark:border-gray-600"
        />
        <div className="flex flex-col items-start">
          <span className="text-xl font-semibold text-gray-900 dark:text-white">
            Vuu Truong Nhat Thanh
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Developer
          </span>
        </div>
      </div>

      {/* work */}
      <div className="flex flex-col items-start max-w-lg">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white underline decoration-2 decoration-gray-500 dark:decoration-gray-400">
          Work
        </h2>
        <p className="text-gray-900 dark:text-gray-300 mt-2">
          Hello, I am from Vietnam. I am a full-stack developer with expertise
          in websites, mobile apps, and blockchain.
        </p>
        <div className="flex justify-center w-full mt-4">
          <Link
            href="/project"
            className="py-2 px-6 text-sm font-semibold text-white bg-[#319795] rounded-md shadow-md hover:bg-[#2C7A7B] hover:shadow-lg transition-all duration-300"
          >
            <span>Project &#8594;</span>
          </Link>
        </div>
      </div>

      {/* bio */}
      <div className="flex flex-col items-start max-w-lg">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white underline decoration-2 decoration-gray-500 dark:decoration-gray-400">
          Bio
        </h2>

        <div className="flex items-center mt-4 space-x-4">
          <div className="text-sm font-semibold text-gray-900 dark:text-white">
            <span className="sm:hidden">2024</span>{" "}
            <span className="hidden sm:inline">July 2024 - October 2024</span>{" "}
          </div>

          <div className="flex-1 text-gray-900 dark:text-gray-300">
            <p>Intern Blockchain Developer at GlobalChain</p>
          </div>
        </div>

        <div className="flex items-center mt-2 space-x-4">
          <div className="text-sm font-semibold text-gray-900 dark:text-white">
            <span className="sm:hidden">2025</span>{" "}
            <span className="hidden sm:inline">November 2024 - Present</span>{" "}
          </div>

          <div className="flex-1 text-gray-900 dark:text-gray-300">
            <p>Full-stack Developer at Ngan Anh Phat Co., Ltd.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full mt-4">
        <a
          href="/pdf/cv.pdf"
          download="My_CV"
          className="py-2 px-6 text-sm font-semibold text-white bg-[#319795] rounded-md shadow-md hover:bg-[#2C7A7B] hover:shadow-lg transition-all duration-300"
        >
          My CV
        </a>
      </div>

      {/* on the web */}
      <div className="flex flex-col items-start max-w-lg">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white underline decoration-2 decoration-gray-500 dark:decoration-gray-400">
          On the web
        </h2>

        {/* YouTube Channel */}
        <div className="flex items-center space-x-2 mt-4">
          <FaYoutube className="text-red-500 w-6 h-6" />
          <a
            href="https://www.youtube.com/@SnakeChain2801"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-900 dark:text-gray-300 hover:text-blue-500"
          >
            Snake Chain YouTube Channel (course)
          </a>
        </div>

        {/* Website */}
        <div className="flex items-center space-x-2 mt-4">
          <Image
            src="/images/snakechain.png"
            alt="Icon"
            width={24}
            height={24}
            className="text-gray-600 dark:text-gray-300"
          />
          <a
            href="https://snakechain.io.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-900 dark:text-gray-300 hover:text-blue-500"
          >
            Snake Chain (course, service for building mobile apps, websites, and
            blockchain solutions)
          </a>
        </div>
      </div>

      {/* Contact */}
      <div className="flex flex-col items-start max-w-lg">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white underline decoration-2 decoration-gray-500 dark:decoration-gray-400">
          Contact
        </h2>

        {/* Email */}
        <div className="flex items-center space-x-2 mt-4">
          <Image
            src="/images/mail-icon.webp"
            alt="Icon"
            width={24}
            height={24}
            className="text-gray-600 dark:text-gray-300"
          />
          <a className="text-sm text-gray-900 dark:text-gray-300 hover:text-blue-500">
            vuutruongnhatthanh@gmail.com (Contact me for work, collaboration, or
            if you have an idea.)
          </a>
        </div>
      </div>

      <div className="flex flex-col items-start max-w-lg">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white underline decoration-2 decoration-gray-500 dark:decoration-gray-400">
          Social Media
        </h2>

        {/* Github */}
        <div className="flex items-center space-x-2 mt-4">
          <FaGithub className="text-gray-900 dark:text-white w-6 h-6" />
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-900 dark:text-gray-300 hover:text-blue-500"
          >
            @vuutruongnhatthanhhh
          </a>
        </div>

        <div className="flex items-center space-x-2 mt-4">
          <Image
            src="/images/insta-logo.webp"
            alt="Icon"
            width={24}
            height={24}
            className="text-gray-600 dark:text-gray-300"
          />
          <a className="text-sm text-gray-900 dark:text-gray-300 hover:text-blue-500 cursor-pointer">
            @snakechain.code (Coding motivation, share knowledge, courses,
            tutorials, programming tips)
          </a>
        </div>

        <div className="flex items-center space-x-2 mt-4">
          <FaTiktok className="text-gray-900 dark:text-white w-6 h-6" />
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-900 dark:text-gray-300 hover:text-blue-500"
          >
            @snakechain.code
          </a>
        </div>
      </div>
    </main>
  );
}
