export const fetchApi = (url) => {
  if (!url) return null;
  const controller = new AbortController();
  let interval = null;

  const signal = controller.signal;

  interval = setInterval(() => {
    controller.abort();
    clearInterval(interval);
  }, 15000);

  return fetch(url, { signal })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      clearInterval(interval);
      if (data.error) {
        return {
          error: true,
          errorData: data.error,
        };
      } else {
        return {
          data,
          error: false,
        };
      }
    })
    .catch((err) => {
      clearInterval(interval);

      return {
        data: null,
        error: true,
        errorData: err,
      };
    });
};
