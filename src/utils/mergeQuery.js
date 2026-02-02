mergeQuery = (currentQuery, options) => {
  const newQuery = {
    ...currentQuery,
    ...options,
  };
  const queryString = new URLSearchParams(newQuery).toString();

  return `?${queryString}`;
};

module.exports = {
  mergeQuery,
};
