export const userQuery = (userId) => {
  //*  "*" the asterisk AKA star means it is trying to get the following things from the database(sanity) ---

  const query = `*[_type == 'user' && _id == '${userId}'] `;

  return query;
};


//* this will fetch which URL is the user is currently on and then will return the data defined in the query ---
export const searchQuery = (searchTerm) => {
  const query = `*[_type == 'pin' && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*' ]{
    image{
      asset -> {
        url
      }
    },
    _id,
    destination,
    postedBy -> {
      _id,
      userName,
      image
    },
    save[] {
      _key,
      postedBy -> { 
        _id,
        userName,
        image
      },
    },

  }`;
  return query;
};
