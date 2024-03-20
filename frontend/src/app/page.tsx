"use client";
import HistoryCards from "@/components/HistoryCards";
import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyCircleDollar,
} from "@phosphor-icons/react";

export default function Home() {
  // const up = ;
  return (
    <div className="bg-slate-200 h-screen flex">
      {/* Seção à esquerda com 500px de largura */}
      {/* <section className="min-w-500 bg-green-200"></section> */}
      <section className="p-10 bg-green-200 flex flex-col justify-center items-center min-w-500 ">
        <HistoryCards
          title="Entradas:"
          value="500"
          icon={<ArrowCircleUp size={30} color="#33CC95" />}
        />
        <HistoryCards
          title="Saídas:"
          value="200"
          icon={<ArrowCircleDown size={30} color="#E52E4D" />}
        />
        <HistoryCards
          title="Total:"
          value="300"
          icon={<CurrencyCircleDollar size={30} color="#000" />}
        />
      </section>

      {/* Conteúdo principal */}
      <div className="flex-grow flex justify-center items-center">
        <h1 className="text-4xl font-bold text-center text-black">
          Opa meu querido
        </h1>
      </div>
    </div>
  );
}
