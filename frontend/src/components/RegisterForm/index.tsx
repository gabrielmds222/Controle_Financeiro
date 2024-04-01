function RegisterForm() {
  return (
    <div className="text-black p-6 flex bg-red-200 justify-between">
      {" "}
      <div className="flex items-center">
        <div className="flex flex-col">
          <label htmlFor="titulo" className="text-gray-700 font-bold mb-2">
            Título:
          </label>
          <input type="text" id="titulo" className="mr-4 rounded" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex flex-col">
          <label htmlFor="valor" className="text-gray-700 font-bold mb-2">
            Valor:
          </label>
          <input type="text" id="valor" className="mr-4 rounded" />
        </div>
      </div>
      <div className="flex items-center">
        <label htmlFor="entrada" className="mr-2">
          Entrada:
        </label>
        <input type="radio" id="entrada" name="tipo" className="mr-4" />
      </div>
      <div className="flex items-center">
        <label htmlFor="saida" className="mr-2">
          Saída:
        </label>
        <input type="radio" id="saida" name="tipo" className="mr-4" />
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Adicionar
      </button>
    </div>
  );
}

export default RegisterForm;
