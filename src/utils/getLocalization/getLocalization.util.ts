export const getLocalization = async (locale: string = "en") => {
  const localize = (await import(`../../localization/${locale}.json`)).default;

  return localize;
};
