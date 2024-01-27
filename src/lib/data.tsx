interface TrendData {
  name: string;
  value: number;
}

interface CardData {
  name: string;
  amount: string | number;
  icon: JSX.Element;
  data: TrendData[];
}

export const cards: CardData[] = [
  {
    name: "Total Order",
    amount: 350,
    icon: (
      <svg
        className="size-20 xl:size-12"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
      >
        <circle
          cx="20"
          cy="20"
          r="19.643"
          stroke="#E6E6E6"
          strokeWidth="0.714"
        ></circle>
        <path
          fill="#34CAA5"
          d="M27.35 13.66l-6.29-3.39c-.66-.36-1.46-.36-2.13 0l-6.29 3.39c-.46.25-.74.74-.74 1.28s.28 1.03.74 1.28l6.29 3.39c.33.18.7.27 1.06.27.36 0 .73-.09 1.06-.27l6.29-3.39c.46-.25.74-.74.74-1.28.02-.54-.27-1.03-.73-1.28zM17.9 20.79l-5.85-2.93c-.45-.23-.97-.2-1.4.06-.43.26-.68.72-.68 1.22v5.53c0 .96.53 1.82 1.39 2.25l5.85 2.92c.2.1.42.15.64.15.26 0 .52-.07.75-.22.43-.26.68-.72.68-1.22v-5.53c.01-.94-.52-1.8-1.38-2.23zM30.03 19.15v4.59c-.01-.01-.02-.03-.03-.04 0-.01-.01-.02-.02-.03-.04-.06-.09-.12-.14-.17-.01-.01-.02-.03-.03-.04-.81-.9-2-1.46-3.31-1.46-1.26 0-2.41.52-3.23 1.36a4.5 4.5 0 00-.01 6.25l-.47.24a1.432 1.432 0 01-1.4-.07c-.42-.26-.68-.72-.68-1.22v-5.52c0-.96.53-1.82 1.39-2.25l5.85-2.92c.45-.23.97-.21 1.4.06.42.26.68.72.68 1.22z"
          opacity="0.4"
        ></path>
        <path
          fill="#34CAA5"
          d="M29.98 23.67a4.46 4.46 0 00-3.48-1.65c-1.06 0-2.04.37-2.81.99A4.448 4.448 0 0022 26.52 4.5 4.5 0 0023.66 30h.01c.77.64 1.76 1.02 2.83 1.02 1.14 0 2.17-.42 2.96-1.12A4.5 4.5 0 0031 26.52c0-1.08-.38-2.08-1.02-2.85zm-1.22 2.29l-2.4 2.22c-.14.13-.33.2-.51.2-.19 0-.38-.07-.53-.22l-1.11-1.11a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l.6.6 1.87-1.73c.3-.28.78-.26 1.06.04.29.31.27.78-.04 1.06z"
        ></path>
      </svg>
    ),
    data: [
      { name: "A", value: 40 },
      { name: "B", value: 20 },
      { name: "C", value: 30 },
      { name: "D", value: 50 },
      { name: "E", value: 20 },
      { name: "F", value: 40 },
      { name: "G", value: 35 },
      { name: "H", value: 90 },
      { name: "I", value: 65 },
      { name: "J", value: 70 },
      { name: "K", value: 60 },
      { name: "L", value: 80 },
      { name: "M", value: 50 },
      { name: "N", value: 45 },
      { name: "O", value: 70 },
      { name: "P", value: 30 },
      { name: "Q", value: 90 },
      { name: "R", value: 60 },
      { name: "S", value: 80 },
      { name: "T", value: 30 },
      { name: "U", value: 90 },
      { name: "V", value: 70 },
      { name: "W", value: 75 },
      { name: "X", value: 55 },
    ],
  },
  {
    name: "Total Refund",
    amount: 270,
    icon: (
      <svg
        className="size-20 xl:size-12"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
      >
        <circle
          cx="20"
          cy="20"
          r="19.643"
          stroke="#E6E6E6"
          strokeWidth="0.714"
        ></circle>
        <path
          fill="#34CAA5"
          fillRule="evenodd"
          d="M15.578 10.912A6.246 6.246 0 0010.75 17a.75.75 0 01-1.5 0A7.745 7.745 0 0117 9.25a.75.75 0 01.643 1.136l-1.05 1.75a.75.75 0 11-1.286-.772l.271-.452zM30 22.25a.75.75 0 01.75.75A7.745 7.745 0 0123 30.75a.75.75 0 01-.643-1.136l1.05-1.75a.75.75 0 111.286.772l-.271.452A6.246 6.246 0 0029.25 23a.75.75 0 01.75-.75z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#34CAA5"
          d="M24.4 16.21l-3.76-2.03c-.4-.21-.87-.21-1.27 0l-3.76 2.03a.87.87 0 00-.44.77c0 .33.17.62.44.77l3.76 2.03c.2.11.42.16.64.16.22 0 .44-.05.64-.16l3.76-2.03a.87.87 0 00.44-.77.9.9 0 00-.45-.77z"
        ></path>
        <path
          fill="#34CAA5"
          d="M18.74 20.47l-3.5-1.75a.867.867 0 00-1.25.77v3.31c0 .57.32 1.09.83 1.34l3.5 1.75c.12.06.25.09.39.09.16 0 .31-.04.45-.13.26-.16.41-.43.41-.73v-3.31c0-.57-.31-1.08-.83-1.34zM25.59 18.76a.867.867 0 00-.84-.04l-3.5 1.75a1.5 1.5 0 00-.83 1.34v3.31c0 .3.15.57.41.73.14.09.29.13.45.13.13 0 .26-.03.39-.09l3.5-1.75c.51-.26.83-.77.83-1.34v-3.31c0-.3-.15-.57-.41-.73z"
          opacity="0.4"
        ></path>
      </svg>
    ),
    data: [
      { name: "A", value: 75 },
      { name: "B", value: 80 },
      { name: "C", value: 60 },
      { name: "D", value: 65 },
      { name: "E", value: 80 },
      { name: "F", value: 40 },
      { name: "G", value: 45 },
      { name: "H", value: 55 },
      { name: "I", value: 60 },
      { name: "J", value: 40 },
      { name: "K", value: 50 },
      { name: "L", value: 60 },
      { name: "M", value: 75 },
      { name: "N", value: 55 },
      { name: "O", value: 60 },
      { name: "P", value: 65 },
      { name: "Q", value: 50 },
      { name: "R", value: 45 },
      { name: "S", value: 35 },
      { name: "T", value: 50 },
      { name: "U", value: 60 },
      { name: "V", value: 40 },
      { name: "W", value: 35 },
      { name: "X", value: 50 },
    ],
  },
  {
    name: "Average Sales",
    amount: 1567,
    icon: (
      <svg
        className="size-20 xl:size-12"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
      >
        <circle
          cx="20"
          cy="20"
          r="19.643"
          stroke="#E6E6E6"
          strokeWidth="0.714"
        ></circle>
        <path
          fill="#34CAA5"
          d="M24.25 30.5a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zM16.25 30.5a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z"
        ></path>
        <path
          fill="#34CAA5"
          d="M12.84 11.94l-.2 2.45c-.04.47.33.86.8.86h15.31c.42 0 .77-.32.8-.74.13-1.77-1.22-3.21-2.99-3.21H14.29c-.1-.44-.3-.86-.61-1.21a2.62 2.62 0 00-1.91-.84H10c-.41 0-.75.34-.75.75s.34.75.75.75h1.74c.31 0 .6.13.81.35.21.23.31.53.29.84z"
          opacity="0.4"
        ></path>
        <path
          fill="#34CAA5"
          d="M28.51 16.75H13.17c-.42 0-.76.32-.8.73l-.36 4.35c-.14 1.7 1.2 3.17 2.91 3.17h11.12c1.5 0 2.82-1.23 2.93-2.73l.33-4.67a.782.782 0 00-.79-.85z"
        ></path>
      </svg>
    ),
    data: [
      { name: "A", value: 85 },
      { name: "B", value: 75 },
      { name: "C", value: 85 },
      { name: "D", value: 80 },
      { name: "E", value: 85 },
      { name: "F", value: 70 },
      { name: "G", value: 85 },
      { name: "H", value: 70 },
      { name: "I", value: 80 },
      { name: "J", value: 75 },
      { name: "K", value: 90 },
      { name: "L", value: 85 },
      { name: "M", value: 85 },
      { name: "N", value: 80 },
      { name: "O", value: 90 },
      { name: "P", value: 70 },
      { name: "Q", value: 60 },
      { name: "R", value: 50 },
      { name: "S", value: 80 },
      { name: "T", value: 75 },
      { name: "U", value: 60 },
      { name: "V", value: 50 },
      { name: "W", value: 55 },
      { name: "X", value: 70 },
    ],
  },
  {
    name: "Total Income",
    amount: "$350,000",
    icon: (
      <svg
        className="size-20 xl:size-12"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
      >
        <circle
          cx="20"
          cy="20"
          r="19.643"
          stroke="#E6E6E6"
          strokeWidth="0.714"
        ></circle>
        <path
          fill="#34CAA5"
          d="M17.99 25.98a7.99 7.99 0 100-15.98 7.99 7.99 0 000 15.98z"
          opacity="0.4"
        ></path>
        <path
          fill="#34CAA5"
          d="M29.97 23.99c0 3.3-2.68 5.98-5.98 5.98a5.97 5.97 0 01-4.91-2.57 9.458 9.458 0 008.32-8.32 5.97 5.97 0 012.57 4.91zM19.45 17.71l-2.4-.84c-.24-.08-.29-.1-.29-.45 0-.26.18-.47.41-.47h1.5c.32 0 .58.29.58.65 0 .41.34.75.75.75s.75-.34.75-.75c0-1.15-.89-2.09-2-2.14v-.05a.749.749 0 10-1.5 0v.05h-.09c-1.05 0-1.91.88-1.91 1.97 0 .95.42 1.56 1.29 1.86l2.41.84c.24.08.29.1.29.45 0 .26-.18.47-.41.47h-1.5c-.32 0-.58-.29-.58-.65 0-.41-.34-.75-.75-.75s-.75.34-.75.75c0 1.15.89 2.09 2 2.14v.06c0 .41.34.75.75.75s.75-.34.75-.75v-.05h.09c1.05 0 1.91-.88 1.91-1.97 0-.95-.43-1.56-1.3-1.87z"
        ></path>
      </svg>
    ),
    data: [
      { name: "A", value: 40 },
      { name: "B", value: 20 },
      { name: "C", value: 30 },
      { name: "D", value: 50 },
      { name: "E", value: 20 },
      { name: "F", value: 40 },
      { name: "G", value: 35 },
      { name: "H", value: 90 },
      { name: "I", value: 65 },
      { name: "J", value: 70 },
      { name: "K", value: 60 },
      { name: "L", value: 80 },
      { name: "M", value: 50 },
      { name: "N", value: 45 },
      { name: "O", value: 70 },
      { name: "P", value: 30 },
      { name: "Q", value: 90 },
      { name: "R", value: 60 },
      { name: "S", value: 80 },
      { name: "T", value: 30 },
      { name: "U", value: 90 },
      { name: "V", value: 70 },
      { name: "W", value: 75 },
      { name: "X", value: 65 },
    ],
  },
];
