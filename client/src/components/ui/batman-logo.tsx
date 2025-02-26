import { SVGProps } from "react";

export function BatmanLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 3C7.8 3 3.6 4.8 1.2 7.2c2.4-1.2 4.8-1.8 7.2-1.8 1.8 0 3.6 0.3 5.4 0.9C15.6 6.9 17.4 7.8 19.2 9c1.8 1.2 3 2.7 3.6 4.5 0.3 1.2 0.3 2.4 0 3.6-0.6 1.8-1.8 3.3-3.6 4.5-1.8 1.2-3.6 2.1-5.4 2.7-1.8 0.6-3.6 0.9-5.4 0.9-2.4 0-4.8-0.6-7.2-1.8C3.6 19.2 7.8 21 12 21c5.4 0 10.2-3 12.6-7.8C22.2 8.4 17.4 3 12 3z"/>
    </svg>
  );
}
