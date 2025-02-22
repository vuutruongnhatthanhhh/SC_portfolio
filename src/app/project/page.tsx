import Image from "next/image";

export default function Project() {
  return (
    <main className="flex-grow flex flex-col items-center space-y-4 px-4 mt-8">
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
          Project
        </h2>

        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8 w-full mt-4 group hover:bg-gray-300 dark:hover:bg-gray-700 dark:text-white p-4 transition-all"
        >
          {/* Cột Hình ảnh */}
          <div className="flex-1">
            <Image
              src="/images/buisiness-ecosystem.png"
              alt="App Image"
              width={500}
              height={300}
              className="object-cover rounded-lg group-hover:opacity-80 transition-all"
            />
          </div>

          {/* Cột Thông tin App */}
          <div className="flex-1 flex flex-col items-start space-y-2">
            <span className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
              Snake Chain
            </span>
            <span className="text-sm dark:text-white  transition-colors">
              This is a website about courses, web and mobile app development,
              and blockchain solutions.
            </span>
          </div>
        </a>

        {/* 2 Cột: Hình ảnh mô tả app và thông tin app */}
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8 w-full mt-4 group hover:bg-gray-300 dark:hover:bg-gray-700 p-4 transition-all"
        >
          {/* Cột Hình ảnh */}
          <div className="flex-1">
            <Image
              src="/images/buisiness-ecosystem.png"
              alt="App Image"
              width={500}
              height={300}
              className="object-cover rounded-lg group-hover:opacity-80 transition-all"
            />
          </div>

          {/* Cột Thông tin App */}
          <div className="flex-1 flex flex-col items-start space-y-2">
            <span className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
              Business Ecosystem
            </span>
            <span className="text-sm dark:text-white transition-colors">
              This website allows us to manage documents similar to Google
              Drive, sign documents, manage employees, track overtime and leave,
              and handle deliveries and pickups.
            </span>
          </div>
        </a>

        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8 w-full mt-4 group hover:bg-gray-300 dark:hover:bg-gray-700 p-4 transition-all"
        >
          {/* Cột Hình ảnh */}
          <div className="flex-1">
            <Image
              src="/images/buisiness-ecosystem.png"
              alt="App Image"
              width={500}
              height={300}
              className="object-cover rounded-lg group-hover:opacity-80 transition-all"
            />
          </div>

          {/* Cột Thông tin App */}
          <div className="flex-1 flex flex-col items-start space-y-2">
            <span className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
              E-commerce
            </span>
            <span className="text-sm dark:text-white transition-colors">
              An e-commerce website that helps me with SEO optimization and has
              an attractive design.
            </span>
          </div>
        </a>
      </div>
    </main>
  );
}
