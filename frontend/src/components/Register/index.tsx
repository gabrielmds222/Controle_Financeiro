"use client";

import RegisterForm from "../RegisterForm";
import RegisterDashboard from "../RegisterDashboard";

function Register() {
  return (
    <div className="bg-white w-full">
      <RegisterForm />

      <div className="overflow-x-auto">
        <table className="w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Descrição
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Valor
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Tipo
              </th>
              <th className="px-4 py-2"></th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <RegisterDashboard />
        </table>
      </div>
    </div>
  );
}

export default Register;
