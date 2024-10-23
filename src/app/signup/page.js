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
import { useRouter } from "next/navigation";
import { useSignupMutation } from "@/redux/services/authApi";
import { setCredentials } from "@/redux/features/auth/authSlice";

// Updated schema with email and password validation
const FormSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

const Singup = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [signup, { isLoading }] = useSignupMutation();
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const result = await signup(data).unwrap();
      dispatch(setCredentials({ token: result.token }));
      toast({
        title: result.message,
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
          Sign up to create new account
        </h2>
        {/* name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your email" {...field} />
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
          {isLoading ? "signing up" : "Signup"}
        </Button>
      </form>
    </Form>
  );
};

export default Singup;
