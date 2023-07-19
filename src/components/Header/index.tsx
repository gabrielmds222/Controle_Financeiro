"use client";

import { User } from "@phosphor-icons/react";
import NovaTransacao from "../NovaTransacao";

const Header = () => {
  return (
    <header className="bg-indigo-600">
      <div className="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <div className="bg-slate-100 p-2 rounded-full">
              <User size={32} color="#000" weight="bold" />
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <NovaTransacao />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
