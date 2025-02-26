import { SVGProps } from "react";

export function BatSignal(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      {...props}
    >
      <path d="M12 2L5 12h14L12 2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6.92 4c.05.39.92 4 6.92 4s6.87-3.61 6.92-4H5.08z" />
    </svg>
  );
}