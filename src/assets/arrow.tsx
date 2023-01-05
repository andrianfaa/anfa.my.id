import clsx from "clsx";
import { memo } from "react";

type ArrowProps = {
  className?: string;
};

function Arrow({ className }: ArrowProps) {
  return (
    <svg
      width="40"
      height="37"
      viewBox="0 0 40 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className || "h-10 w-10")}
    >
      <g clipPath="url(#clip0_2_40)">
        <path
          d="M27.916 31.4568C20.0191 25.1909 13.7896 18.0721 10.031 8.49523M10.031 8.49523C12.5436 8.84916 15.2028 8.99688 17.7457 8.92371M10.031 8.49523C8.84116 12.6182 8.41809 15.8177 8.49744 20.0916"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_40">
          <rect
            width="24"
            height="32"
            fill="white"
            transform="matrix(0.428577 -0.903505 -0.903505 -0.428577 28.9122 36.3566)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default memo(Arrow);
