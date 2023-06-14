import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'your-project-id',
  dataset: 'your-dataset',
  useCdn: true, // Use CDN to retrieve data (optional)
});

export default client;