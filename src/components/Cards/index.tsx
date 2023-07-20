"use client";

import React from "react";
import {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyDollarSimple,
} from "@phosphor-icons/react";

interface CardProps {
  title: string;
  Icon: React.FC;
}

const Cards = ({ title, Icon }: CardProps) => {
  return (
    <div className="w-1/6 bg-white p-4 rounded-lg shadow-md">
      <header className="flex items-center justify-between mb-4">
        <p className="text-xl font-bold">Entradas</p>
        <Icon />
      </header>
      <span className="block text-3xl text-center">R$ 1000</span>
    </div>
  );
};

export default Cards;
