/* eslint-disable prefer-destructuring */
const HTMLToJSON = (html) => {
  const metaTags = [];
  const linkTags = [];

  html.map((item) => {
    if (item.includes("<meta")) {
      metaTags.push(item);
    }

    if (item.includes("<link")) {
      linkTags.push(item);
    }

    return item;
  });

  const parsedMetaTags = metaTags.map((meta) => {
    const obj = {};
    const removedSymbol = meta.replaceAll(/<|>|meta /gi, "");
    const values = removedSymbol.split(" ").map((item) => {
      return item.replaceAll(/content=|name=|"/gi, "");
    });

    for (let i = 0; i < values.length; i += 1) {
      obj.name = values[0];
      obj.content = values[1];
    }

    return obj;
  });

  const parsedLinkTags = linkTags.map((link) => {
    // linkTags.map((link) => {
    const obj = {};
    const removedSymbol = link.replaceAll(/<|>|link /gi, "");
    const values = removedSymbol.split(" ");

    for (let i = 0; i < values.length; i += 1) {
      const item = values[i].split("=");

      const key = item[0];
      // eslint-disable-next-line quotes
      const value = item[1].replaceAll('"', "");

      obj[key] = value;
    }

    return obj;
  });

  return {
    meta: parsedMetaTags,
    link: parsedLinkTags
  };
};

module.exports = HTMLToJSON;
