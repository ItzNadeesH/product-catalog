const truncateString = (text: string, size: number) => {
  return text.length > 30 ? text.substring(0, size) + "..." : text;
};

export default truncateString;
