import Brand from "./Brand";

const Footer = () => {
  return (
    <footer className="w-full min-h-[100px] bg-black p-5 flex flex-col justify-center items-center gap-4 dark:bg-slate-800">
      <Brand color="text-white" />
      <p className="text-slate-400">Created by Gianicola Jara</p>
    </footer>
  );
};

export default Footer;
