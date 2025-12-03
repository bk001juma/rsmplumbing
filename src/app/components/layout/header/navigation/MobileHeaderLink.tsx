import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";

const MobileHeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <div className="relative w-full">
      <Link
        href={item.href}
        onClick={item.submenu ? handleToggle : undefined}
        className="flex items-center justify-between w-full 
                   py-1 md:py-1.5 lg:py-2 /* Responsive padding */
                   text-sm md:text-base /* Responsive text */
                   text-muted focus:outline-hidden"
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.25em"
            height="1.25em"
            className="md:w-1.5em md:h-1.5em" /* Responsive icon */
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>
      {submenuOpen && item.submenu && (
        <div className="bg-white p-1.5 md:p-2 w-full"> {/* Responsive padding */}
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className="block py-1 md:py-1.5 text-sm md:text-base text-gray-500 hover:bg-gray-200"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;