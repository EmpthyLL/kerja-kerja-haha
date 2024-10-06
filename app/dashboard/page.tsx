import { ComboboxDemo } from "@/components/combobox";
import { Input } from "@/components/ui/input";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <ComboboxDemo />
      <Input maxLength={10} placeholder="Enter up to 10 characters" />
    </>
  );
}
