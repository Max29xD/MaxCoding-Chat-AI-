import { SVGProps } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 830 830"
      fill="currentColor"
      {...props}
    >
      <path
        className="a"
        d="m732.6 182l-362.3 208.8v412.3l-75.9-43.1v-407.2l288.2-168.7-47.7-28.3-286.7 165.2v412.4l-75.9-43.2v-407.1l290.4-170.1-47.8-28.2-288.9 166.4v412.4l-75.8-43.1v-407.2l292.5-171.3 71.7-42 122 69.8h0.1l37.5 21.5 84.5 48.4 0.1-0.1z"
      />
      <path
        className="a"
        d="m492.4 460.6v239.7l286.3-165v82.4l-286.3 167.6-75.9 44.5v-407.2l362.2-212v85z"
      />
    </svg>
  );
};

export default Logo;
