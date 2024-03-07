function FormatDate(date?: string) {
  if (!date) return "";
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = new Date(date).toLocaleDateString("en-US", options);
  const today = new Date();
  const diff = Math.abs(today.getTime() - new Date(date).getTime());
  const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
  const diffYears = Math.floor(diffDays / 365);
  return `${formattedDate} ${
    diffYears > 0
      ? `(about ${diffYears} year${diffYears > 1 ? "s" : ""})`
      : "(this year)"
  }`;
}

export default FormatDate;
