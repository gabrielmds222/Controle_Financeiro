"use client";

import { useForm } from "react-hook-form";
import { ArrowCircleDown, ArrowCircleUp, Plus } from "@phosphor-icons/react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

interface TransacaoProps {
  nome: string;
  preco: string;
  tipo: string;
  categoria: string;
}

const NovaTransacao = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TransacaoProps>();
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = handleSubmit((data) => {
    if (data) {
      saveDataToLocalStorage(data);
      reset();
      closeModal();
    }
    console.log(data);
  });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const saveDataToLocalStorage = (data: TransacaoProps) => {
    const jsonData = JSON.stringify(data);
    localStorage.setItem("transacaoData", jsonData);
    console.log("Data saved to LocalStorage:", data);
  };
  return (
    <>
      <div className="flex justify-end w-5/6 max-w-screen-xl mx-auto mt-4">
        <button
          className="p-2 rounded mb-4 bg-indigo-400 hover:bg-indigo-700 focus:outline-none focus:shadow-outline"
          type="button"
          onClick={openModal}
        >
          <Plus size={24} color="#fff" weight="bold" />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <form
                    onSubmit={onSubmit}
                    className="bg-white px-8 py-6 rounded max-w-sm mx-auto"
                  >
                    <h2 className="text-2xl font-bold mb-4">
                      Cadastrar Transação
                    </h2>

                    <div className="mb-4">
                      <label
                        htmlFor="nome"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Nome
                      </label>
                      <input
                        type="text"
                        id="nome"
                        placeholder="Digite o nome"
                        {...register("nome", { required: true })}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="preco"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Preço
                      </label>
                      <input
                        type="text"
                        id="preco"
                        placeholder="Digite o preço"
                        {...register("preco", { required: true })}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <fieldset className="grid grid-cols-2 gap-4 mb-5">
                      <div>
                        <input
                          type="radio"
                          value="entrada"
                          id="entrada"
                          {...register("tipo", { required: true })}
                          // defaultChecked
                          className="peer hidden"
                        />

                        <label
                          htmlFor="entrada"
                          className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                        >
                          <div className="flex items-center justify-between">
                            <p className="text-gray-700">Entrada</p>

                            <ArrowCircleUp />
                          </div>
                        </label>
                      </div>

                      <div>
                        <input
                          type="radio"
                          value="saida"
                          id="saida"
                          {...register("tipo", { required: true })}
                          // defaultChecked
                          className="peer hidden"
                        />

                        <label
                          htmlFor="saida"
                          className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                        >
                          <div className="flex items-center justify-between">
                            <p className="text-gray-700">Saída</p>

                            <ArrowCircleDown />
                          </div>
                        </label>
                      </div>
                    </fieldset>

                    <div className="mb-4">
                      <label
                        htmlFor="categoria"
                        className="block text-gray-700 text-sm font-bold mb-2"
                      >
                        Categoria
                      </label>
                      <input
                        type="text"
                        id="categoria"
                        placeholder="Digite a categoria"
                        {...register("categoria", { required: true })}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="flex items-center justify-center pt-4">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
                      >
                        Adicionar
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default NovaTransacao;
