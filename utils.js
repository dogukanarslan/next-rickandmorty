export const generateQuery = (filters) => {
  let query = '';
  filters.forEach((filter) => {
    if (filter.value) {
      query += `&${filter.label}=${filter.value}`;
    }
  });

  return query;
};
