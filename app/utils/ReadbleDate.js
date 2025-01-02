export function ConvertDate(isoDate) {
    const readableDate = new Date(isoDate).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
      });
      return readableDate;
}