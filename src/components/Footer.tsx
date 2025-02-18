const Footer: React.FC = () => {
  return (
    <footer className="mt-10 w-full text-black py-4 text-center">
      <div className="max-w-[800px] mx-auto flex flex-col items-center">
        <p className="text-sm dark:text-white">
          © {new Date().getFullYear()} Snake Chain. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
