import React from "react";

const palette = {
  ink: "#5b4658",
  pink: "#ff8fa3",
  mint: "#83dfc5",
  yellow: "#ffe36e",
  blue: "#79c9e8",
  cream: "#fff9e9",
};

export const PixelWeaponIcon = ({
  type,
  size = 58,
}: {
  type:
    | "sword"
    | "bow"
    | "hammer"
    | "wand"
    | "axe"
    | "staff"
    | "dagger"
    | "shield";
  size?: number;
}) => {
  const common = {
    stroke: palette.ink,
    strokeWidth: 2.5,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      aria-label={`${type} pixel item`}
      height={size}
      viewBox="0 0 64 64"
      width={size}
    >
      <path d="M12 52h40v6H12z" fill="#c9eaf2" opacity=".65" />
      {type === "sword" && (
        <>
          <path
            {...common}
            d="M16 48l8-13 23-23 5 5-23 23z"
            fill={palette.blue}
          />
          <path
            {...common}
            d="M20 38l7 7-5 5-7-7zM29 43l-9 9"
            fill={palette.yellow}
          />
        </>
      )}
      {type === "bow" && (
        <>
          <path
            {...common}
            d="M20 11c25 7 25 35 0 42 12-13 12-29 0-42z"
            fill={palette.mint}
          />
          <path d="M20 11v42M13 34h37M43 29l7 5-7 5" {...common} fill="none" />
        </>
      )}
      {type === "hammer" && (
        <>
          <path {...common} d="M16 15h31v17H16z" fill={palette.yellow} />
          <path {...common} d="M27 31h9v25h-9z" fill="#b87955" />
          <path d="M20 20h8M40 20h3" stroke="#fff9e9" strokeWidth="4" />
        </>
      )}
      {type === "wand" && (
        <>
          <path {...common} d="M17 52l27-29 5 5-27 29z" fill="#b87955" />
          <path
            {...common}
            d="M45 8l4 8 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1z"
            fill={palette.pink}
          />
          <circle cx="45" cy="20" fill={palette.yellow} r="3" />
        </>
      )}
      {type === "axe" && (
        <>
          <path {...common} d="M29 25h8v32h-8z" fill="#b87955" />
          <path
            {...common}
            d="M12 12c12-5 25 0 29 10-6 1-11 6-13 13-8-2-14-10-16-23z"
            fill={palette.mint}
          />
          <path d="M18 15l15 11" stroke="#fff9e9" strokeWidth="3" />
        </>
      )}
      {type === "staff" && (
        <>
          <path {...common} d="M24 55l16-39 7 3-16 39z" fill="#b87955" />
          <circle {...common} cx="43" cy="15" fill={palette.blue} r="10" />
          <path d="M43 8v14M36 15h14" stroke="#fff9e9" strokeWidth="3" />
        </>
      )}
      {type === "dagger" && (
        <>
          <path
            {...common}
            d="M18 47l9-11 22-24 4 4-22 24z"
            fill={palette.pink}
          />
          <path {...common} d="M22 38l8 8-5 5-8-8z" fill={palette.yellow} />
        </>
      )}
      {type === "shield" && (
        <>
          <path
            {...common}
            d="M14 13h36v23c0 12-10 19-18 23-8-4-18-11-18-23z"
            fill={palette.mint}
          />
          <path
            {...common}
            d="M32 20l5 8 9 2-7 7 2 10-9-5-9 5 2-10-7-7 9-2z"
            fill={palette.yellow}
          />
        </>
      )}
    </svg>
  );
};
