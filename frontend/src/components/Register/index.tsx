"use client";

import RegisterForm from "../RegisterForm";
import RegisterDashboard from "../RegisterDashboard";

function Register() {
  return (
    <div className="bg-white w-full">
      <RegisterForm />
      <div className="text-black p-6 flex bg-red-200 justify-between"></div>
    </div>
  );
}

export default Register;
