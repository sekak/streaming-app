import { ModeToggle } from "@/components/toggle-button";

export default async function page() {
  return (
    <div>
      <h1>Home page - streaming app</h1>
      <ModeToggle />
    </div>
  );
}
