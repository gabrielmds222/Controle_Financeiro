"use client";

import { Trash } from "@phosphor-icons/react";
import NovaTransacao from "../NovaTransacao";

const Tabela = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <NovaTransacao />
      <div className="bg-white px-12 py-6 rounded w-5/6 max-w-screen-xl mx-auto drop-shadow-lg overflow-x-auto mb-10">
        <div className="table-container">
          <table className="table-fixed min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                  Título
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                  Preço
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                  Categoria
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                  Data
                </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  OI
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  OI
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  OI
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  OI
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <button
                    type="button"
                    className="inline-block rounded bg-red-600 p-2 text-xs font-medium text-white hover:bg-red-700"
                  >
                    <Trash size={24} color="#fff" weight="bold" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tabela;
