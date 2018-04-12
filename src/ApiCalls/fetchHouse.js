export const fetchHouse = async () => {
  try {
    const root = 'https://www.anapioficeandfire.com/api/';
    const response = await fetch(`${root}houses`);
    const data = await response.json();
    console.log('data', data);
    return data
  } catch (error) {
    throw new Error ('error');
  }
};