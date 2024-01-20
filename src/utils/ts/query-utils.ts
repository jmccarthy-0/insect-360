export const getQueryParam = (query: string) => {
  const searchParams = new URLSearchParams(document.location.search);
  return searchParams.get(query);
};

export const setQueryParam = (query: string, value: string) => {
  const searchParams = new URLSearchParams(document.location.search);
  searchParams.set(query, value);
  setBrowserUrl(query, value);
};

const getUrlNoSearchParams = () =>
  window.location.origin + window.location.pathname;

const setBrowserUrl = (query: string, value: string) => {
  const url = getUrlNoSearchParams();

  window.history.pushState(null, "", `${url}?${query}=${value}`);
};
