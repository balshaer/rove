import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TableComponent() {
  return (
    <Table>
      <TableCaption>test</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">test</TableHead>
          <TableHead>test</TableHead>
          <TableHead>test</TableHead>
          <TableHead className="text-right">test</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">test</TableCell>
          <TableCell>test</TableCell>
          <TableCell>test </TableCell>
          <TableCell className="text-right">test</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
