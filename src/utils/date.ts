export const formatDate = (date: Date) =>
  Intl.DateTimeFormat("nl-BE", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
