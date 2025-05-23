import { BrandsActionDialog } from "@/pages/admin/brands/components/BrandsActionDialog"
import { useBrands } from "@/pages/admin/brands/context/brands-context"
import { BrandsDeleteDialog } from "@/pages/admin/brands/components/BrandsDeleteDialog"

interface BrandsDialogsProps {
  refetch: () => any
}

export function BrandsDialogs({ refetch }: BrandsDialogsProps) {
  const { open, setOpen, currentRow, setCurrentRow } = useBrands()

  return (
    <>
      <BrandsActionDialog
        key="brand-add"
        open={open === "add"}
        onOpenChange={() => setOpen("add")}
        refetch={refetch}
      />

      {currentRow && (
        <>
          <BrandsActionDialog
            key={`brand-edit-${currentRow.id}`}
            open={open === "edit"}
            onOpenChange={() => {
              setOpen("edit")
            }}
            currentRow={currentRow}
            refetch={() => {
              refetch()
              setCurrentRow(null)
            }}
          />

          <BrandsDeleteDialog
            key={`brand-delete-${currentRow.id}`}
            open={open === "delete"}
            onOpenChange={() => {
              setOpen("delete")
            }}
            currentRow={currentRow}
            refetch={() => {
              refetch()
              setCurrentRow(null)
            }}
          />
        </>
      )}
    </>
  )
}
