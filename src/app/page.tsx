import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaYoutube, FaGithub, FaArrowRight } from "react-icons/fa";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="w-full max-w-screen-md px-4">
        {" "}
        <Header />
      </div>

      <main className="flex-grow flex flex-col items-center  space-y-4 px-4 mt-8 ">
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
            <a
              href="/work"
              className="py-2 px-6 text-sm font-semibold text-white bg-[#319795] rounded-md shadow-md hover:bg-[#2C7A7B] hover:shadow-lg transition-all duration-300"
            >
              <span>Project &#8594;</span>
            </a>
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
              href="https://www.youtube.com/c/SnakeChain" // Thay đường dẫn này với URL kênh YouTube của bạn
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
              src="/images/snakechain.png" // Đường dẫn đến file hình ảnh trong thư mục public
              alt="Icon"
              width={24} // Kích thước của biểu tượng
              height={24} // Kích thước của biểu tượng
              className="text-gray-600 dark:text-gray-300"
            />
            <a
              href="https://www.snakechain.com" // Thay đường dẫn này với URL website của bạn
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-900 dark:text-gray-300 hover:text-blue-500"
            >
              Snake Chain (course, service for building mobile apps, websites,
              and blockchain solutions)
            </a>
          </div>
        </div>

        {/* social media */}
        <div className="flex flex-col items-start max-w-lg">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white underline decoration-2 decoration-gray-500 dark:decoration-gray-400">
            Social Media
          </h2>

          {/* Github */}
          <div className="flex items-center space-x-2 mt-4">
            <FaGithub className="text-gray-900 dark:text-white w-6 h-6" />
            <a
              href="https://github.com/SnakeChain" // Thay đường dẫn này với URL Github của bạn
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-900 dark:text-gray-300 hover:text-blue-500"
            >
              @vuutruongnhatthanhhh (Personal project, Snake Chain project, ...)
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
