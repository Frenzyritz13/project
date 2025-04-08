export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function capitalizeWords(str: string) {
  return str.split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}