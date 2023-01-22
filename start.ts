import { serve } from "https://deno.land/std/http/mod.ts"

serve((_, conn) => (
  new Response(JSON.stringify(conn))
))
