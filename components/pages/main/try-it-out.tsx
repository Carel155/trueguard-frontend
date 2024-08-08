import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark.css";

import Input from "@/components/form/input";
import { Button } from "@/components/ui/button";
import { createVerification, CreateVerificiationResponse } from "@/services/api/verification";
import { ApiErrorResponse } from "@/services/api";
import { setFormErrorsFromApiResponse } from "@/utils/error";
import useGlobalState from "@/hooks/use-global-state";

const TryItOut = () => {
  const [result, setResult] = useState<CreateVerificiationResponse | undefined>(undefined);

  const { state, setState } = useGlobalState();

  const verificationMutation = useMutation({
    mutationFn: createVerification,
    onSuccess: (response) => {
      setResult(response);
    },
    onError: ({ response: { data } }: ApiErrorResponse) => {
      toast.error(data.message ?? "Error creating verification");

      setFormErrorsFromApiResponse(form, data.paths);
    },
  });

  const form = useForm({
    defaultValues: {
      email: "",
      ip: undefined,
    },
  });

  const analyze = () => {
    const { email, ip } = form.getValues();

    verificationMutation.mutate({
      email,
      ip: ip || undefined,
    });
  };

  const clear = () => {
    setResult(undefined);

    form.reset({ email: "", ip: undefined });
  };

  return (
    <FormProvider {...form}>
      <div className="flex flex-col bg-[#1C341A] rounded-lg py-20 px-10">
        <h4 className="text-2xl font-bold text-white">Try it out!</h4>
        {!result && (
          <>
            <div className="mt-4">
              <Input name="email" label="User email" placeholder="" type="email" />
            </div>

            <div className="mt-4">
              <Input name="ip" label="User IP" placeholder="" type="text" optional />
            </div>
            <Button
              className="bg-accent hover:bg-[#65ad4b] mt-4 w-full text-black"
              loadingText="Analyzing"
              loading={verificationMutation.isPending}
              onClick={analyze}
            >
              Get result
            </Button>
          </>
        )}

        {result && (
          <>
            <div className="flex text-white pt-4 w-full try-highlight">
              {/* 
              // @ts-ignore */}
              <Highlight language="json">{JSON.stringify(result, null, 2)}</Highlight>
            </div>

            <Button className="bg-accent hover:bg-[#65ad4b] mt-6 w-full text-black" onClick={() => setState({ ...state, accessDrawerOpen: true })}>
              Request Access
            </Button>

            <Button className="bg-accent hover:bg-[#65ad4b] mt-4 w-full text-black" onClick={clear}>
              Try another
            </Button>
          </>
        )}
      </div>
    </FormProvider>
  );
};

export default TryItOut;
