import { redirect } from "next/navigation";
import { links } from "@/lib/copy";

export default function PrivacyPage() {
  redirect(links.privacy);
}
