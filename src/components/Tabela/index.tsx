"use client";

import React, { useEffect, useState } from "react";
import { Trash } from "@phosphor-icons/react";
import NovaTransacao from "../NovaTransacao";

export interface TransacaoProps {
  nome: string;
  preco: string;
  tipo: string;
  categoria: string;
}

const Tabela = () => {
  const [transacoes, setTransacoes] = useState<TransacaoProps[]>([]);

  const fetchDataFromLocalStorage = () => {
    try {
      const jsonData = localStorage.getItem("transacaoData");
      if (jsonData) {
        const transacoesData: TransacaoProps | TransacaoProps[] =
          JSON.parse(jsonData);

        // Certifique-se de que transacoesData seja sempre um array
        const transacoesArray: TransacaoProps[] = Array.isArray(transacoesData)
          ? transacoesData
          : [transacoesData];

        setTransacoes(transacoesArray);
      }
    } catch (error) {
      console.error("Error fetching data from LocalStorage:", error);
    }
  };

  const deleteTransacao = (index: number) => {
    try {
      const jsonData = localStorage.getItem("transacaoData");
      if (jsonData) {
        const transacoesData: TransacaoProps[] = JSON.parse(jsonData);
        // Remova a transação do array com base no índice fornecido
        transacoesData.splice(index, 1);
        // Salve os dados atualizados no LocalStorage novamente
        localStorage.setItem("transacaoData", JSON.stringify(transacoesData));
        // Atualize o estado para refletir as alterações
        setTransacoes(transacoesData);
        console.log("Data deleted from LocalStorage");
      }
    } catch (error) {
      console.error("Error deleting data from LocalStorage:", error);
    }
  };

  useEffect(() => {
    fetchDataFromLocalStorage();
  }, []);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <NovaTransacao />
      <div className="bg-white px-12 py-6 rounded w-5/6 max-w-screen-xl mx-auto drop-shadow-lg overflow-x-auto mb-10">
        <div className="table-container">
          <table className="table-fixed min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-left">
                  Nome
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
              {transacoes.map((transacao, index) => (
                <tr key={index}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {transacao.nome}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {transacao.preco}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {transacao.categoria}
                  </td>

                  <td className="whitespace-nowrap px-4 py-2">
                    <button
                      type="button"
                      onClick={() => deleteTransacao(index)}
                      className="inline-block rounded bg-red-600 p-2 text-xs font-medium text-white hover:bg-red-700"
                    >
                      <Trash size={24} color="#fff" weight="bold" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tabela;
