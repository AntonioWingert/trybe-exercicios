const fetchAPIGOT = async (characterID) => {
  const URL = `https://anapioficeandfire.com/api/characters/${characterID}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error
  }
};

export default fetchAPIGOT;