"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "@/redux/services/authApi";
import { setCredentials } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const FormSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const result = await login(data).unwrap();
      dispatch(setCredentials({ token: result.token }));
      toast({
        title: result.message,
      });
      Cookies.set("token", result?.token, {
        path: "/",
        secure: true,
      });
      router.push("/");
    } catch (error) {
      console.log("Login failed:", error);
      toast({
        variant: "destructive",
        title: error.data?.message,
      });
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 md:w-1/2 mx-auto space-y-6 mt-10 min-h-[70vh]"
      >
        <h2 className="text-xl font-bold text-center md:text-2xl">
          Login to book room
        </h2>
        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password Field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Logging" : "Login"}
        </Button>
      </form>
    </Form>
  );
};

export default Login;
