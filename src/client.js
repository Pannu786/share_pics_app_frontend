//* we are connecting with backend(sanity) using the client.js file ---

import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-03-26',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});


//* why are we using this?? well sanity docs have explained it ---
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
