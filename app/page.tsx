import SignOut from "@/components/sign-out";
import { ModeToggle } from "@/components/toggle-button";
import { supabaseServer } from "./lib/supabase/server";

export default async function page() {

  const { data } = await supabaseServer.from("test").select("*");
  console.log(data)
  return (
    <div>
      <h1>Home page - streaming app</h1>
      <ModeToggle />
      <SignOut/>
    </div>
  );
}
