export const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data.body;
  } catch (e) {
    console.log({ url });
    console.log(e);
    return null;
  }
};
