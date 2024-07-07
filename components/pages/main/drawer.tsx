"use client";

import React, { forwardRef, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
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

const GetAccessDrawer = forwardRef<ChildHandle>((props, ref) => {
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
    <Form {...form}>
      <Drawer open={state.accessDrawerOpen} onOpenChange={(open) => setState({ ...state, accessDrawerOpen: open })}>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>TrueGuard early access</DrawerTitle>
              <DrawerDescription>
                TrueGuard is currently in early access to collect real-world data and customer feedback. Each request is manually reviewed and
                followed up with a personal contact.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Input name="email" placeholder="Contact email" type="email" />
              <Textarea name="description" placeholder="Provide the name and a brief overview of your product, SaaS, or service." rows={6} />
              <Button loading={createAccessRequestMutation.isPending} onClick={createRequest}>
                Request access
              </Button>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </Form>
  );
});

GetAccessDrawer.displayName = "GetAccessDrawer";

export default GetAccessDrawer;
