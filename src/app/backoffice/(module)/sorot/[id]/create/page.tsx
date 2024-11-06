import { DataTable } from "@/components/ui/data-table";
import db from "@/lib/db";
import { findManyPubCategory } from "@/services/publication-service";
import { findAllRole } from "@/services/role-service";
import { CreateUser } from "./create";

import { Input } from "@/components/ui/input";
import { findManyHighlight } from "@/services/highlight-service";

type CreateSorotPageProps = {
  params: { id: string };
};

const CreateSorotPage = async ({
  params: { id },
}: CreateSorotPageProps) => {

  return (
    <div className="space-y-3 py-3">
      <div className="flex flex-col xl:flex-row xl:justify-between gap-3">
        <h1 className="text-2xl font-bold">Tambah Sorot Konten</h1>
      </div>
      <CreateUser id={id} />
    </div>
  );
};

export default CreateSorotPage;
