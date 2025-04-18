export const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error({ url, error });
    
    return null;
  }
};
