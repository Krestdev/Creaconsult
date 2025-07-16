"use client";
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
import { Dictionary } from "@/lib/i18n";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  telephone: z.string().min(9).max(13),
  cv: z.instanceof(FileList).optional(),
  diplome: z.instanceof(FileList).optional(),
  cni: z
    .instanceof(FileList)
    .refine((file) => file?.length == 1, "CNI is required")
    .optional(),
  mail: z.string().email(),
  addresse: z.string(),
  poste: z.string(),
  lettre: z
    .instanceof(FileList)
    .refine((file) => file?.length == 1, "A letter is required")
    .optional(),
});

function Submit({
  JobData,
  dictionary,
}: {
  JobData: any;
  dictionary: Dictionary;
}) {
  const [Job, setJob] = useState<Record<string, any>>();
  const now = new Date();

  useEffect(() => {
    setJob(JobData);
  }, [JobData]);

  const [submitBtnDisabled, setSubmitBtnDisabled] = useState(false);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      telephone: "",
      mail: "",
      addresse: "",
      poste: Job ? Job.title : "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitBtnDisabled(true);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const formData = new FormData();
    formData.append("fullname", values.fullname);
    formData.append("telephone", values.telephone);
    formData.append("mail", values.mail);
    formData.append("addresse", values.addresse);
    formData.append("poste", Job?.title);
    if (values.cv?.[0]) formData.append("cv", values.cv[0]);
    if (values.diplome?.[0]) formData.append("diplome", values.diplome[0]);
    if (values.cni?.[0]) formData.append("cni", values.cni[0]);
    if (values.lettre?.[0]) formData.append("lettre", values.lettre[0]);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    console.log(result);
    // sendMail(values);
    alert(result.message);
    setSubmitBtnDisabled(false);
    router.push("/");
  }

  const cniRef = form.register("cni");
  const cvRef = form.register("cv");
  const diplomeRef = form.register("diplome");
  const letterRef = form.register("lettre");

  return (
    <div className=" container mx-auto my-20">
      <div className="containerBloc">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{dictionary.JobsDetail.JobSubmit.nom}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={dictionary.JobsDetail.JobSubmit.nom}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="telephone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{dictionary.JobsDetail.JobSubmit.tel}</FormLabel>
                  <FormControl>
                    <Input placeholder="+237 6..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cni"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{dictionary.JobsDetail.JobSubmit.cni}</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      {...cniRef}
                      onChange={(event) => {
                        field.onChange(event.target?.files?.[0] ?? undefined);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cv"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{dictionary.JobsDetail.JobSubmit.cv}</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      {...cvRef}
                      onChange={(event) => {
                        field.onChange(event.target?.files?.[0] ?? undefined);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="diplome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {dictionary.JobsDetail.JobSubmit.diplome}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      {...diplomeRef}
                      onChange={(event) => {
                        field.onChange(event.target?.files?.[0] ?? undefined);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lettre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {dictionary.JobsDetail.JobSubmit.lettre}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      {...letterRef}
                      onChange={(event) => {
                        field.onChange(event.target?.files?.[0] ?? undefined);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adresse mail</FormLabel>
                  <FormControl>
                    <Input placeholder="example@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="addresse"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {dictionary.JobsDetail.JobSubmit.addresse}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Douala, akwa" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="poste"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{dictionary.JobsDetail.JobSubmit.poste}</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" value={Job?.title} disabled />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="text-black border"
              type="submit"
              variant={submitBtnDisabled ? "ghost" : "default"}
              disabled={submitBtnDisabled}
            >
              {!submitBtnDisabled ? "Soumettre" : "Loading..."}
            </Button>
          </form>
        </Form>
      </div>
    </div>
    // <div>hello</div>
  );
}

export default Submit;
