"use client";

import { useRouter } from 'next/navigation'
import { useForm, SubmitHandler } from 'react-hook-form';

import Form from "@/components/Form/Form";
import Input from "@/components/Form/Input";
import Button from "@/components/Form/Button";

type FormValues = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data);
    // Handle login logic here
    router.push('/dashboard')
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input id="email" label="Your email" name="email" type="email" placeholder="name@email.com" register={register} required="Email is required" pattern={{
        value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Please enter a valid email"}} error={errors.email?.message} />
      <Input id="password" label="Your password" name="password" type="password" placeholder="Your password" register={register} required="Password is required" error={errors.password?.message} />
      <Button type="submit">Login</Button>
    </Form>
  )
}