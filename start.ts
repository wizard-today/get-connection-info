import { serve } from "https://deno.land/std/http/mod.ts"

serve((_, conn) => Response.json(conn))
