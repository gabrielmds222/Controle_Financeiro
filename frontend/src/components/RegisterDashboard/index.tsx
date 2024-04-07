import { Pencil, Trash } from "@phosphor-icons/react";

function RegisterDashboard() {
  return (
    <tbody className="text-center divide-y divide-gray-200">
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Salário
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">3000,00</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Entrada</td>
        <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            <Pencil size={20} color="#f5f0f0" />
          </a>
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            <Trash size={20} color="#f5f0f0" />
          </a>
        </td>
      </tr>
    </tbody>
  );
}

export default RegisterDashboard;
