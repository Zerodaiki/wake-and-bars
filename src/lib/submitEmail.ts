import { supabase } from "./supabase";

export async function submitEmail(
  email: string,
  intent: "waitlist" | "lifetime_pass"
): Promise<{ success: boolean; error?: string }> {
  const trimmed = email.toLowerCase().trim();

  if (!trimmed || !trimmed.includes("@") || !trimmed.includes(".")) {
    return { success: false, error: "Please enter a valid email address." };
  }

  // Fallback to localStorage when Supabase is not configured
  if (!supabase) {
    const stored = JSON.parse(localStorage.getItem("wakeandbars_waitlist") || "[]");
    const exists = stored.some((e: { email: string }) => e.email === trimmed);
    if (!exists) {
      stored.push({ email: trimmed, intent, created_at: new Date().toISOString() });
      localStorage.setItem("wakeandbars_waitlist", JSON.stringify(stored));
    }
    return { success: true };
  }

  const { error } = await supabase
    .from("waitlist")
    .insert({ email: trimmed, intent });

  if (error) {
    if (error.code === "23505") {
      // Duplicate email — still show success (don't leak info)
      return { success: true };
    }
    return { success: false, error: "Something went wrong. Try again." };
  }

  return { success: true };
}

export async function getWaitlistCount(): Promise<number> {
  if (!supabase) return 0;

  const { count, error } = await supabase
    .from("waitlist")
    .select("*", { count: "exact", head: true });

  if (error || count === null) return 0;
  return count;
}
