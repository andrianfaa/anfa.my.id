import clsx from "clsx";
import type { LinkProps } from "next/link";
import Link from "next/link";
import type { ReactNode } from "react";
import { memo } from "react";

import { FiExternalLink } from "react-icons/fi";

type ExternalLinkProps = LinkProps & {
  title: string;
  children: ReactNode;
  className?: string;
  itemProp?: string;
};

function ExternalLink({
  href,
  title,
  children,
  className,
  itemProp,
  ...props
}: ExternalLinkProps) {
  return (
    <Link
      href={href}
      itemProp={itemProp}
      target="_blank"
      title={title}
      className={clsx(className, "relative inline-block")}
      rel="noopener noreferrer"
      {...props}
    >
      {children}{" "}
      <FiExternalLink className={clsx("inline-block", "text-xs md:text-sm")} />
    </Link>
  );
}

export default memo(ExternalLink);
