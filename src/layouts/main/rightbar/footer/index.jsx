import { Link } from "react-router-dom";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export default function Footer() {
  return (
    <footer className="mb-4 px-4 flex flex-wrap gap-2 text-[13px]">
      <Link to="/" className="text-primary text-[13px] leading-4 hover:underline">
        Terms of Service
      </Link>
      <Link to="/" className="text-primary text-[13px]  leading-4 hover:underline">
        Privacy Policy
      </Link>
      <Link to="/" className="text-primary text-[13px] leading-4 hover:underline">
        Cookie Policy
      </Link>
      <Link to="/" className="text-primary  text-[13px] leading-4 hover:underline">
        Imprint
      </Link>
      <Link to="/" className="text-primary text-[13px] leading-4 hover:underline">
        Accessibility
      </Link>
      <Link to="/" className="text-primary text-[13px] leading-4 hover:underline">
        Ads Info
      </Link>
      <div className="inline-flex gap-2 flex-wrap">
        
		<Popover className="relative inline-flex leading-4">
          <PopoverButton className="text-primary outline-none leading-4 hover:underline inline-flex items-center">
            More
            <svg viewBox="0 0 24 24" className="h-[1em] px-0.5">
              <path
                fill="currentColor"
                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
              />
            </svg>
          </PopoverButton>
          <PopoverPanel className="w-[150px] max-w-[384px] bg-black shadow-box rounded-xl absolute bottom-0 right-0 grid overflow-hidden">
            <Link to="/" className="py-3 px-4 leading-5 font-bold hover:bg-primary transition-colors">
              About
            </Link>
            <Link to="/" className="py-3 px-4 leading-5 font-bold hover:bg-primary transition-colors">
              Status
            </Link>
            <Link to="/" className="py-3 px-4 leading-5 font-bold hover:bg-primary transition-colors">
              For businesses X
            </Link>
            <Link to="/" className="py-3 px-4 leading-5 font-bold hover:bg-primary transition-colors">
              Developers
            </Link>
          </PopoverPanel>
        </Popover>
        <p className="text-primary leading-4">&copy; 2024  Selim Can Sağdıç</p>
        <div>
          <p></p>
        </div>
      </div>
    </footer>
  );
}
