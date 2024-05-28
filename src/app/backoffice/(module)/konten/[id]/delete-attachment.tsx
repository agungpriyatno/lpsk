"use client";

import { Button } from "@/components/ui/button";
import { deleteMedia } from "@/services/draft-service";
import { Trash2Icon } from "lucide-react";
import { useTransition } from "react";

type DeleteAttachmentProps = {
  contentId: string;
  mediaId: string;
};

const DeleteAttachment = ({ mediaId, contentId }: DeleteAttachmentProps) => {
  const [isLoading, startTransition] = useTransition();

  const onDelete = () =>
    startTransition(async () => {
      await deleteMedia(contentId, mediaId);
    });
  return (
    <Button
      size={"icon"}
      variant={"destructive"}
      onClick={onDelete}
      disabled={isLoading}
    >
      <Trash2Icon />
    </Button>
  );
};

export { DeleteAttachment };
