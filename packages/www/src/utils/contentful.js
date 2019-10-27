import { createClient } from 'contentful';

// create a contentful client
export const contentfulClient = () => {
  let contentfulConfig;

  try {
    contentfulConfig = require('../../.contentful');
  } catch (e) {
    contentfulConfig = {
      production: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
      development: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    };
  } finally {
    const { spaceId, accessToken } = contentfulConfig.production;
    if (!spaceId || !accessToken) {
      contentfulConfig = false;
      //throw new Error('Contentful space ID and access token needs to be provided.');
      console.log('Contentful space ID and access token needs to be provided.');
    }
  }

  const client = contentfulConfig
    ? createClient({
        space: contentfulConfig.production.spaceId,
        accessToken: contentfulConfig.production.accessToken,
      })
    : null;

  return client;
};

// Fetch contentful content types
export const fetchContentTypes = async () => {
  const client = contentfulClient();
  if (!client) {
    return null;
  }
  const types = await client.getContentTypes();
  if (types.items) return types.items;
  console.log('Error getting Content Types.');
};

// fetch contentful entries for specified content types
export const fetchEntriesForContentType = async contentType => {
  const client = contentfulClient();
  if (!client) {
    return null;
  }
  const entries = await client.getEntries({
    content_type: contentType.sys.id,
  });
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
};
