import 'isomorphic-unfetch';

const projectId = process.env.FB_PROJECT_ID;
console.log('projectId', projectId);
const apiBase = `https://firestore.googleapis.com/v1beta1/projects/${projectId}/databases/(default)`;

function parseContent(json) {
  if (!json || !json.document) {
    return null;
  }

  const fields = json.document.fields;
  return {
    name: fields.name ? fields.name.stringValue : '',
    plate: fields.plate ? fields.plate.stringValue : '',
    author: fields.author ? fields.author.stringValue : '',
    date: fields.date ? fields.date.stringValue : '',
    published: fields.status ? fields.status.stringValue === 'published' : false,
    country: fields.country ? fields.country.stringValue : '',
    tags:
      fields.tags && fields.tags.arrayValue && fields.tags.arrayValue.values
        ? fields.tags.arrayValue.values.map(value => value.stringValue)
        : [],
    url: fields.url ? fields.url.stringValue : '',
  };
}

export async function fetchPublishedContent(url) {
  const apiURL = `${apiBase}/documents:runQuery?fields=document%2Ffields`;
  const res = await fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify({
      structuredQuery: {
        // select: {
        //   fields: [{ fieldPath: "published" }]
        // },
        from: [{ collectionId: 'cities' }],
        where: {
          fieldFilter: {
            field: { fieldPath: 'url' },
            op: 'EQUAL',
            value: { stringValue: url },
          },
        },
      },
    }),
  });
  const json = await res.json();
  return parseContent(json[0]);
}

export async function fetchDraftContent(id) {
  const res = await fetch(`${apiBase}/documents/cities/${id}`);
  const json = await res.json();
  return parseContent({
    document: json,
  });
}

export async function fetchAllPublishedContents(limit = null, offset = null) {
  const res = await fetch(`${apiBase}/documents:runQuery?fields=document%2Ffields`, {
    method: 'POST',
    body: JSON.stringify({
      structuredQuery: {
        select: {
          fields: [
            { fieldPath: 'name' },
            //{ fieldPath: "published.meta" }
          ],
        },
        from: [{ collectionId: 'cities' }],
        // where: {
        //   fieldFilter: {
        //     field: {
        //       fieldPath: "published.meta.language"
        //     },
        //     op: "EQUAL",
        //     value: {
        //       stringValue: lang
        //     }
        //   }
        // },
        limit: limit || undefined,
        offset: offset || undefined,
        orderBy: [
          {
            field: { fieldPath: 'date' },
            direction: 'DESCENDING',
          },
        ],
      },
    }),
  });
  const json = await res.json();
  return json.map(item => parseContent(item)).filter(_ => _);
}
