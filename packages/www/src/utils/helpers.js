export const slugify = (text, separator) =>
  text
    .replace(/[^a-zA-Z]/g, '')
    .split(' ')
    .join(separator || '-')
    .toLowerCase();

export const isBrowser = () => typeof window !== 'undefined';

export const isLargeView = () => {
  if (isBrowser()) {
    const mql = window.matchMedia('screen and (min-width: 1200px)');
    return mql.matches;
  }
  return true;
};

export const storageLocal = {
  get: (key, defaultValue) => {
    if (typeof Storage !== 'undefined') {
      const value = window.localStorage.getItem(key);
      if (value !== undefined) {
        return JSON.parse(value);
      }
    }
    return defaultValue;
  },
  set: (key, value) => {
    if (typeof Storage !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  },
  remove: key => {
    if (typeof Storage !== 'undefined') {
      window.localStorage.removeItem(key);
    }
  },
};

export const stripQs = (qArray = []) => urlString => {
  const { pathname, query } = Url.parse(urlString, true);
  if (!query) {
    return Url.format({ pathname });
  }
  const queriesToKeep = pick(qArray, query);
  if (has('page', queriesToKeep) && parseInt(queriesToKeep.page, 10) === 1) {
    delete queriesToKeep.page;
  }
  return Url.format({
    pathname,
    query: {
      ...queriesToKeep,
    },
  });
};

export const minimizeData = _content => {
  let content = _content.toString();
  content = content.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, '');
  // now all comments, newlines and tabs have been removed
  content = content.replace(/ {2,}/g, ' ');
  // now there are no more than single adjacent spaces left
  // now unnecessary: content = content.replace( /(\s)+\./g, ' .' );
  content = content.replace(/ ([{:}]) /g, '$1');
  content = content.replace(/([;,]) /g, '$1');
  content = content.replace(/ !/g, '!');
  return content;
};

export const miniGlobalCSS = style => minimizeData(style);
