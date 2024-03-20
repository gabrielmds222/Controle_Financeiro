"use client";

interface Props {
  title: string;
  icon: JSX.Element;
  value: string;
}

function HistoryCards({ title, icon, value }: Props) {
  return (
    <div className="bg-white w-full min-h-120 mb-5">
      <div className="flex m-5 justify-between">
        <p className="text-md text-black">{title}</p>
        {icon}
      </div>
      <h1 className="text-2xl font-bold text-black flex justify-center">
        R${value},00
      </h1>
    </div>
  );
}

export default HistoryCards;
