import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Form } from "@remix-run/react";
import { PropsWithChildren, useState } from "react";
import { Button, Input, Label, Textarea } from "./";

type CreateStepFormProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  trailId: string;
};

export function CreateStepForm({
  isOpen,
  setIsOpen,
  trailId,
  ...props
}: PropsWithChildren<CreateStepFormProps>) {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleIdChange(event: any) {
    setId(event);
  }

  function handleTitleChange(event: any) {
    setTitle(event);
  }

  function handleContentChange(event: any) {
    setContent(event);
  }

  function handleFormSubmit() {
    setIsOpen(false);
    handleIdChange("");
    handleTitleChange("");
    handleContentChange("");
  }

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-gray_alpha-600/60" aria-hidden="true" />

      <Form
        action={`/explore/${trailId}`}
        method="post"
        navigate
        onSubmit={handleFormSubmit}
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center">
          <DialogPanel className="w-full max-w-[680px] border flex flex-col gap-10 bg-theme_light-surface_0 rounded-3xl p-12">
            <DialogTitle className="font-bold text-3xl">
              Adicionar Passo
            </DialogTitle>

            <div className="flex flex-col gap-4">
              <div>
                <Label htmlFor="id">id</Label>
                <Input name="id" value={id} onChange={handleIdChange} />
              </div>
              <div>
                <Label htmlFor="title">Título</Label>
                <Input
                  name="title"
                  value={title}
                  onChange={handleTitleChange}
                />
              </div>
              <div>
                <Label htmlFor="content">Conteúdo</Label>
                <Textarea
                  name="content"
                  value={content}
                  onChange={handleContentChange}
                />
              </div>
            </div>

            <div className="flex gap-6 justify-end">
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancelar
              </Button>
              <Button type="submit">Criar Passo</Button>
            </div>
          </DialogPanel>
        </div>
      </Form>
    </Dialog>
  );
}
