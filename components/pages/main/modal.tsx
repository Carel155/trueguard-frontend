"use client";

import React, { forwardRef, useImperativeHandle } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import useGlobalState from "@/hooks/use-global-state";
import Input from "@/components/form/input";
import { Form } from "@/components/ui/form";
import Textarea from "@/components/form/textarea";
import { useMutation } from "@tanstack/react-query";
import { createAccessRequest } from "@/services/api/access-request";
import { ApiErrorResponse } from "@/services/api";
import { setFormErrorsFromApiResponse } from "@/utils/error";

type ChildHandle = {
  setDefaultEmail: (email: string) => void;
};

const GetAccessModal = forwardRef<ChildHandle>((props, ref) => {
  const { state, setState } = useGlobalState();

  useImperativeHandle(ref, () => ({
    setDefaultEmail(email: string) {
      setDefaultEmail(email);
    },
  }));

  const createAccessRequestMutation = useMutation({
    mutationFn: createAccessRequest,
    onSuccess: () => {
      toast.success("Access request created, we will contect you as soon as possible.");
      form.reset();
      setState({ ...state, accessDrawerOpen: false });
    },
    onError: ({ response: { data } }: ApiErrorResponse) => {
      toast.error(data.message ?? "Error creating access request");

      setFormErrorsFromApiResponse(form, data.paths);
    },
  });

  const form = useForm({
    defaultValues: {
      email: "",
      description: "",
    },
  });

  const createRequest = () => {
    createAccessRequestMutation.mutate({
      email: form.getValues("email"),
      description: form.getValues("description"),
    });
  };

  const setDefaultEmail = (email: string) => {
    form.setValue("email", email);
  };

  return (
    <Dialog open={state.accessDrawerOpen} onOpenChange={(open) => setState({ ...state, accessDrawerOpen: open })}>
      <DialogContent className="sm:max-w-[550px]" onOpenAutoFocus={(e) => e.preventDefault()}>
        <DialogHeader className="flex flex-col items-center pb-8">
          <picture className="pt-10">
            <img src="https://ik.imagekit.io/trueguard/static/modal-logo.png?updatedAt=1721332264491" alt="trueguard" className="max-w-36" />
          </picture>
          <DialogTitle className="pt-8">Trueguard early access</DialogTitle>
          <DialogDescription className="pt-8 text-center">
            Trueguard is currently in early access to collect real-world data and customer feedback. Each request is manually reviewed and followed up
            with a personal contact. Trueguard early access is free of charge.
          </DialogDescription>
        </DialogHeader>
        <FormProvider {...form}>
          <Input name="email" placeholder="Contact email" type="email" />
          <Textarea name="description" placeholder="Provide the name and a brief overview of your product, SaaS, or service." rows={6} />
          <Button loading={createAccessRequestMutation.isPending} onClick={createRequest}>
            Request access
          </Button>
        </FormProvider>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
});

GetAccessModal.displayName = "GetAccessModal";

export default GetAccessModal;
