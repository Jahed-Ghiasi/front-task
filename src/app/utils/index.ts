export function dateString(d: number): string {
  const date = new Date(d);
  const dateString = `${date.toLocaleString("default", {
    month: "short",
    day: "numeric",
  })} at ${date.toLocaleString("default", { hour: "numeric" })}`;

  return dateString;
}
