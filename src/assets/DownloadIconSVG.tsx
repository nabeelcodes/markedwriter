import { cn } from "../lib/classNameHelper";

type DownloadIconProps = {
  disabled?: boolean;
  className?: string;
};

export const DownloadIcon = ({ disabled, className }: DownloadIconProps) => {
  return (
    <svg
      width="25"
      height="33"
      viewBox="0 0 25 33"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 fill-black dark:fill-gray-300", className, {
        "fill-gray-400 dark:fill-gray-500": disabled,
      })}>
      <g clipPath="url(#clip0_211_201)">
        <mask
          id="mask0_211_201"
          maskUnits="userSpaceOnUse"
          x="0"
          y="1"
          width="24"
          height="32">
          <path
            d="M23.5239 1.07513H0.391602V32.2045H23.5239V1.07513Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_211_201)">
          <path d="M23.5239 18.1039C23.5239 17.7335 23.3993 17.4232 23.15 17.173C22.9009 16.9227 22.5881 16.7975 22.2115 16.7975C22.0286 16.7975 21.8531 16.8275 21.6851 16.8876C21.5173 16.9477 21.3725 17.0379 21.2503 17.1579L17.7712 20.5217L12.3087 26.4232L13.1632 26.7235L13.3158 22.2485V2.45667C13.3158 2.07625 13.1886 1.7609 12.9343 1.51062C12.68 1.26035 12.3545 1.13521 11.9578 1.13521C11.561 1.13521 11.2355 1.26035 10.9812 1.51062C10.7269 1.7609 10.5997 2.07625 10.5997 2.45667V22.2485L10.7523 26.7235L11.6221 26.4232L6.14417 20.5217L2.66517 17.1579C2.54309 17.0379 2.39813 16.9477 2.23029 16.8876C2.06243 16.8275 1.88696 16.7975 1.70385 16.7975C1.32748 16.7975 1.01467 16.9227 0.765442 17.173C0.516216 17.4232 0.391602 17.7335 0.391602 18.1039C0.391602 18.4644 0.534017 18.7898 0.818848 19.0801L10.9354 29.066C11.088 29.2163 11.2508 29.3288 11.4237 29.404C11.5966 29.4791 11.7747 29.5166 11.9578 29.5166C12.151 29.5166 12.3342 29.4791 12.5071 29.404C12.68 29.3288 12.8377 29.2163 12.9801 29.066L23.1118 19.0801C23.3867 18.7898 23.5239 18.4644 23.5239 18.1039ZM23.5239 30.853C23.5239 30.4626 23.4018 30.1423 23.1576 29.8919C22.9136 29.6418 22.5981 29.5166 22.2115 29.5166H1.73437C1.33765 29.5166 1.01467 29.6418 0.765442 29.8919C0.516216 30.1423 0.391602 30.4626 0.391602 30.853C0.391602 31.2434 0.516216 31.5663 0.765442 31.8216C1.01467 32.0769 1.33765 32.2045 1.73437 32.2045H22.2115C22.5981 32.2045 22.9136 32.0769 23.1576 31.8216C23.4018 31.5663 23.5239 31.2434 23.5239 30.853Z" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_211_201">
          <rect width="25" height="32.2917" />
        </clipPath>
      </defs>
    </svg>
  );
};
