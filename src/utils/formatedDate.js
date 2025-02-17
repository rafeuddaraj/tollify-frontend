export default function formatDate(dateString) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", {
    ...options,
    minute: "numeric",
  }).format(new Date(dateString));
}
