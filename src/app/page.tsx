"use client";
import React from "react";

import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyDollarSimple,
} from "@phosphor-icons/react";
import Cards from "@/components/Cards";
import Tabela from "@/components/Tabela";
import { CadastraTransacaoProvider } from "@/contexts/CadastraTransacao";

const SeuComponente = () => {
  return (
    <CadastraTransacaoProvider>
      <main>
        <div className="flex justify-center gap-20 mt-[-50px]">
          <Cards title={"Entrada"} Icon={ArrowCircleUp} />
          <Cards title={"Saídas"} Icon={ArrowCircleDown} />
          <Cards title={"Total"} Icon={CurrencyDollarSimple} />
        </div>
        <div>
          <Tabela />
        </div>
      </main>
    </CadastraTransacaoProvider>
  );
};

export default SeuComponente;
