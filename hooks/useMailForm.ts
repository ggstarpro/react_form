import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema } from '@/lib/formSchema'
import { useCallback } from 'react';
import z from "zod";

export const useMailForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      subject: "",
      content: "",
      file: undefined,
    }
  });

  const onSubmit = useCallback(async (values: z.infer<typeof formSchema>) => {
    const { username, email, subject, content, file } = values
    console.log("onSubmit >", username, email, subject, content, file)
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('content', content);
    formData.append('file', file[0]);

    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send`, {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json"
        // },
        body: formData
      })
    } catch (error) {
      console.error("onSubmit error", error)
    }
  }, [])

  return {
    form,
    onSubmit,
  }
};