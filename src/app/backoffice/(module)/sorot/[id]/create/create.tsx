"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { PubCategoryDto, pubCategoryDto } from "@/lib/validators/publication";
import {
  createManyPubHiglight,
  deleteHighlightPost,
  findAllHighlightPub,
} from "@/services/highlight-service";
import { findManyPublicationasdService } from "@/services/publication-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { Draft, HighlightPublication, Publication } from "@prisma/client";

import { PlusIcon, Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

type PublicationType = HighlightPublication & {
  publication: Publication & { selected: Draft | null };
};

export const CreateUser = ({ id }: { id: string }) => {
  const router = useRouter();
  const [current, setCurrent] = useState<PublicationType[]>([]);
  const [search, setSearch] = useState<string>("");
  const [publication, setPublication] = useState<{
    isLoading: boolean;
    data: (Publication & { selected: Draft | null })[];
  }>({ isLoading: false, data: [] });

  const form = useForm<PubCategoryDto>({
    resolver: zodResolver(pubCategoryDto),
    defaultValues: {
      name: id,
      subs: [
        {
          name: "",
        },
      ],
    },
  });

  const { toast } = useToast();
  const { append, fields, remove } = useFieldArray({
    name: "subs",
    control: form.control,
  });

  const findPublication = async () => {
    setPublication({ data: [], isLoading: false });
    const resp = await findManyPublicationasdService({
      query: { search, skip: 0, take: 10 },
      status: "PUBLISH",
    });
    setPublication({ data: resp, isLoading: false });
  };

  const handleKeyDown = (e: any) => {
    if (e.key === " ") {
      e.stopPropagation();
    }
  };

  const onDelete = async (idPost: string) => {
    try {
      await deleteHighlightPost(id, idPost);
      toast({
        title: "Berhasil Hapus Kategori",
        variant: "default",
      });
      form.reset();
      router.back();
    } catch (error) {
      toast({
        title: "Gagal Hapus Kategori",
        description: "",
        variant: "destructive",
      });
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const findAll = async () => {
    const res = await findAllHighlightPub(id);
    setCurrent(res ?? []);
  };

  const submitHandler = async (data: PubCategoryDto) => {
    try {
      await createManyPubHiglight(data);
      toast({
        title: "Berhasil Tambah Sorot",
        variant: "default",
      });
      form.reset();
      router.back();
    } catch (error) {
      toast({
        title: "Gagal Tambah Sorot",
        description: "",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    findAll();
  }, []);

  return (
    <Card className="wiff-full">
      <CardHeader>
        <CardTitle>Tambah Sorot Konten</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitHandler)}
            className="grid grid-cols-1 gap-4"
          >
            {/* <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nama</FormLabel>
                                <FormControl>
                                    <Input placeholder="Masukan Nama" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} /> */}
            {current.map((item, i) => (
              <div className="flex w-full gap-3" key={i}>
                <div className="px-3 py-2 rounded bg-muted flex-1">
                  {item.publication.selected?.title}
                </div>
                <Button
                  type="button"
                  onClick={() => onDelete(item.publicationId)}
                  size={"icon"}
                  variant={"destructive"}
                >
                  <Trash2Icon />
                </Button>
              </div>
            ))}
            {fields.map((item, i) => (
              <FormField
                control={form.control}
                name={`subs.${i}.name`}
                key={item.id}
                render={({ field }) => (
                  <div className="flex gap-3 w-full">
                    <FormItem className="flex-1">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        onOpenChange={() => findPublication()}
                      >
                        <FormControl className="w-full flex">
                          <SelectTrigger className="w-full flex-1">
                            <SelectValue placeholder="Cari Konten" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent onClick={(e) => e.stopPropagation()}>
                          <Input
                            className="mb-2"
                            placeholder="Cari"
                            defaultValue={search}
                            onChange={(e) => {
                              setSearch(e.target.value), findPublication();
                            }}
                          />
                          {!publication.isLoading &&
                            publication.data.map((item, i) => (
                              <SelectItem
                                key={i}
                                value={item.id}
                                onClick={(e) => {
                                  e.stopPropagation();
                                }}
                              >
                                {item.selected?.title}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                    <Button
                      type="button"
                      onClick={() => remove(fields.length - 1)}
                      size={"icon"}
                      variant={"destructive"}
                    >
                      <Trash2Icon />
                    </Button>
                  </div>
                )}
              />
            ))}
            <div className="flex w-full gap-3 place-items-center">
              <div className=" h-10 w-full bg-muted rounded"></div>
              <Button
                type="button"
                onClick={() => append({ name: "" })}
                size={"icon"}
                variant={"outline"}
              >
                <PlusIcon />
              </Button>
            </div>
            <div className="w-full flex gap-2 justify-end">
            <Button variant={"outline"} onClick={() => router.back()}>Kembali</Button>
            <Button
              className={cn("", {
                "bg-muted-foreground": form.formState.isSubmitting,
              })}
            >
              {form.formState.isSubmitting ? "Mengunggah..." : "TAMBAH"}
            </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
