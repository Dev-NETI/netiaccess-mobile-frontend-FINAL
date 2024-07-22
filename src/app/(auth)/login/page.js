"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import InputError from "@/components/InputError";
import Label from "@/components/Label";
import Link from "next/link";
import { useAuth } from "@/hooks/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import H2 from "@/components/H2";
import Paragraph from "@/components/Paragraph";
import Back from "@/components/Back";

const Login = () => {
  const router = useRouter();
  const title = "Welcome Back!";
  const { login } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/verify-login",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shouldRemember, setShouldRemember] = useState(false);
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (router.reset?.length > 0 && errors.length === 0) {
      setStatus(atob(router.reset));
    } else {
      setStatus(null);
    }
  });

  const submitForm = async (event) => {
    event.preventDefault();

    login({
      email,
      password,
      remember: shouldRemember,
      setErrors,
      setStatus,
    });
  };

  return (
    <div className="flex flex-col gap-4 py-10 px-5">
      <div className="basis-4/12 px-7">
        <H2 value={title} className=" text-gray-800 " />
        <Paragraph
          styles="mt-10"
          value="Sign in with your email and password."
        />
      </div>
      <div className="basis-full">
        <form onSubmit={submitForm}>
          <div className="flex flex-col gap-4 mt-4 px-7">
            {/* Email Address */}
            <div className="w-full ">
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                type="email"
                value={email}
                className="block mt-1 w-full rounded-3xl"
                onChange={(event) => setEmail(event.target.value)}
                required
                autoFocus
              />

              <InputError messages={errors.email} className="mt-2" />
            </div>

            {/* Password */}
            <div className="mt-4">
              <Label htmlFor="password">Password</Label>

              <Input
                id="password"
                type="password"
                value={password}
                className="block mt-1 w-full rounded-3xl"
                onChange={(event) => setPassword(event.target.value)}
                required
                autoComplete="current-password"
              />

              <InputError messages={errors.password} className="mt-2" />
            </div>

            <div className="flex flex-col items-center justify-center gap-4 mt-4">
              <Button className="ml-3 w-full shadow-2xl rounded-3xl">
                Login
              </Button>

              <Link
                href="/forgot-password"
                className="underline text-sm text-gray-600 hover:text-gray-900"
              >
                Forgot your password?
              </Link>
            </div>
          </div>
        </form>
      </div>
      <div className="flex justify-center">
        <Back route="/" />
      </div>
    </div>
  );
};

export default Login;
