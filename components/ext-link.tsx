import { cn } from "@/lib/cn";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function ExtLink({ href, className, children, ...rest }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(className)}
      {...rest}
    >
      {children}
    </a>
  );
}
