import { BsFillSlashCircleFill, BsGithub, BsLinkedin } from "react-icons/bs";

import { useWindow } from "@/hooks";
import { cn } from "@/utils";
import NavMenu from "./NavMenu";

const Navbar: React.FC = () => {
  const { scroll } = useWindow();

  return (
    <div
      className={cn(
        "navbar",
        "fixed left-0 top-0 z-40",
        "w-full",
        "transition-[background] duration-300 ease-in-out",
        scroll.y > 10 && "scrolled"
      )}
    >
      <div
        className={cn(
          "navbar-container",
          "p-4 md:p-6",
          "flex flex-row items-center justify-between gap-4"
        )}
      >
        <div className={cn("flex flex-row items-center gap-4")}>
          <a
            href="/"
            className={cn(
              "flex flex-row items-center gap-3",
              "font-bold",
              "border-r border-gray-800 pr-4"
            )}
          >
            <span
              className={cn(
                "rounded-lg",
                "p-1.5",
                "bg-white text-sm font-bold text-black"
              )}
            >
              <BsFillSlashCircleFill className="h-5 w-5" />
            </span>{" "}
            <span
              className={cn(
                "text-lg font-medium text-white",
                "hidden sm:block"
              )}
            >
              andrianfaa
            </span>
          </a>

          <NavMenu />
        </div>

        <div className="item flex flex-row gap-5">
          <a
            href="https://linkedin.com/in/andrianfa"
            title="LinkedIn"
            className={cn("hidden md:block")}
          >
            <BsLinkedin
              title="LinkedIn Logo"
              className={cn("h-5 w-5", "text-white")}
            />
          </a>

          <a href="https://github.com/andrianfaa" title="GitHub">
            <BsGithub
              title="GitHub Logo"
              className={cn("h-5 w-5", "text-white")}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
