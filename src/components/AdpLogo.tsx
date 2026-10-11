import React from 'react';

interface AdpLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const AdpLogo: React.FC<AdpLogoProps> = ({ className = '', size = 'md' }) => {
  const scale = size === 'sm' ? 0.8 : size === 'lg' ? 1.25 : 1;
  const width = 130 * scale;
  const height = 48 * scale;

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 130 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
        aria-label="ADP Toiture SA"
      >
        {/* Main "adp" lettering with red curved roof arch over 'd' and 'p' */}
        {/* Letter 'a' */}
        <path
          d="M14 28C10.7 28 8 25.3 8 22C8 18.7 10.7 16 14 16C16.2 16 18.1 17.2 19.1 19V16.5H23V27.5H19.1V25C18.1 26.8 16.2 28 14 28ZM15.5 24.2C17.7 24.2 19.3 22.4 19.3 22C19.3 21.6 17.7 19.8 15.5 19.8C13.5 19.8 12 21 12 22C12 23 13.5 24.2 15.5 24.2Z"
          fill="#111827"
        />

        {/* Letter 'd' */}
        <path
          d="M32 28C28.7 28 26 25.3 26 22C26 18.7 28.7 16 32 16C34.2 16 36.1 17.2 37.1 19V9H41V27.5H37.1V25C36.1 26.8 34.2 28 32 28ZM33.5 24.2C35.7 24.2 37.3 22.4 37.3 22C37.3 21.6 35.7 19.8 33.5 19.8C31.5 19.8 30 21 30 22C30 23 31.5 24.2 33.5 24.2Z"
          fill="#111827"
        />

        {/* Letter 'p' */}
        <path
          d="M50 28C47.8 28 45.9 26.8 44.9 25V35H41V16.5H44.9V19C45.9 17.2 47.8 16 50 16C53.3 16 56 18.7 56 22C56 25.3 53.3 28 50 28ZM48.5 24.2C50.5 24.2 52 23 52 22C52 21 50.5 19.8 48.5 19.8C46.3 19.8 44.7 21.6 44.7 22C44.7 22.4 46.3 24.2 48.5 24.2Z"
          fill="#111827"
        />

        {/* Signature Red Roof Peak over the "dp" */}
        <path
          d="M35 11.5L46 3.5L57 11.5"
          stroke="#E52E2E"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Subtitle: TOITURE SA and DrC mark */}
        <text
          x="7"
          y="38.5"
          fill="#111827"
          fontSize="6.8"
          fontWeight="800"
          letterSpacing="0.18em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          TOITURE SA
        </text>
        <text
          x="58"
          y="38.5"
          fill="#DC2626"
          fontSize="5"
          fontWeight="700"
          letterSpacing="0.05em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          DrC
        </text>
      </svg>
    </div>
  );
};
