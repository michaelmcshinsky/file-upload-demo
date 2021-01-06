module.exports = {
  format_date: (date) => {
    return date.toLocaleString("en-US", {
      weekday: "long",
      month: "long",
      day: "2-digit",
      year: "numeric",
    });
  },
};
