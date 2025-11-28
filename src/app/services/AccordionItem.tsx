import { ChevronDown } from "lucide-react";
import React from "react";

export const AccordionItem = ({
  title,
  content,
  icon,
  isOpen,
  onClick,
}: {
  title: string;
  content: string;
  icon: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`rounded-2xl overflow-hidden mb-4 transition-colors duration-300 ${
        isOpen
          ? "bg-gray-50"
          : "bg-white border border-gray-100 hover:bg-gray-50"
      }`}
    >
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <div
            className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
              isOpen ? "bg-[#594ad2]" : "bg-gray-200"
            }`}
          >
            {/* Clone icon to apply specific styles if needed, or just render */}
            <div className={isOpen ? "text-white" : "text-gray-600"}>
              {React.cloneElement(icon as React.ReactElement<any>, {
                className: "w-5 h-5",
              })}
            </div>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-gray-900">
            {title}
          </h3>
        </div>

        <div
          className={`flex-shrink-0 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown className="text-gray-400 w-6 h-6" strokeWidth={2.5} />
        </div>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-500 text-base leading-relaxed px-6 pb-6 pl-20">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};