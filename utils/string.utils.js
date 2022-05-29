export const deleteAccents = (string) => {
  return string
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

export const deleteComma = (string) => {
  return string.replace(/,/g, "");
};

export const normalizeSearch = (string) => {
  return `/search/${deleteComma(deleteAccents(string))}`;
};
