const userQuery = (userId) => {
  //*  "*" the asterisk AKA star means it is trying to get the following things from the database(sanity) ---

  const query = `*[_type == 'user' && _id == '${userId}'] `;

  return query;
};

export default userQuery;
