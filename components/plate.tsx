import Image from "next/image";
import { cn } from "@/lib/cn";

export function Plate({
  src,
  alt,
  className,
  imageClassName,
  sizes,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "100vw"}
        priority={priority}
        className={cn("object-cover", imageClassName)}
      />
    </div>
  );
}
