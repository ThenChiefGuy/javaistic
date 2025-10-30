import React from "react";

export default function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 420 101"
      fill="none"
      {...props}
    >
      {/* Geometric polygon shape */}
      <path
        fill="#3884FF"
        d="m50.755 1.397 34.996 20.041a10.466 10.466 0 0 1 3.84 3.81A10.37 10.37 0 0 1 91 30.453v40.083c0 3.719-1.99 7.168-5.25 9.027L50.756 99.603a10.582 10.582 0 0 1-10.51 0L5.249 79.563a10.467 10.467 0 0 1-3.843-3.816A10.358 10.358 0 0 1 0 70.536V30.451a10.4 10.4 0 0 1 5.249-9.014L40.245 1.397a10.577 10.577 0 0 1 10.51 0Z"
      />
      <path
        fill="currentColor"
        d="M45.5 64C52.956 64 59 57.956 59 50.5S52.956 37 45.5 37 32 43.044 32 50.5 38.044 64 45.5 64Z"
      />

      {/* New text "HabibiJava" in the style of the old logo */}
      <text
        x="120"         // adjust horizontal position
        y="70"          // adjust vertical position
        fontFamily="Arial, sans-serif" // replace with original font if known
        fontSize="48"   // same size as old logo text
        fill="currentColor"
        fontWeight="bold"
      >
        HabibiJava
      </text>
    </svg>
  );
}
