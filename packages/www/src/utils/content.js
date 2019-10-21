import keys from 'lodash.keys';

export function getTags(cities = []) {
  const map = cities.reduce((acc, item) => {
    if (!item.tags) {
      return acc;
    }
    const tags = item.tags || [];
    tags.forEach(tag => {
      if (acc[tag]) {
        acc[tag] = acc[tag] + 1;
      } else {
        acc[tag] = 1;
      }
    });
    return acc;
  }, {});
  return keys(map).map(key => {
    return { value: key, count: map[key] };
  });
}

export const citiesByTag = (cities = [], tag) => {
  return cities.filter(city => city.tags.indexOf(tag) !== -1);
};

export const citiesByCountry = (cities = [], country) => {
  return cities.filter(city => city.country.toLowerCase() === country.toLowerCase());
};

export const citiesByAuthor = (cities = [], author) => {
  return cities.filter(city => city.author.toLowerCase() === author.toLowerCase());
};
