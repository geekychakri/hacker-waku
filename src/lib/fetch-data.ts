const fetchData = async (type: string) => {
  try {
    const res = await fetch(
      `https://hacker-news.firebaseio.com/v0/${type}.json?orderBy="$priority"&limitToFirst=30`
    );
    if (res.status !== 200) {
      throw new Error(`Status ${res.status}`);
    }
    return res.json();
  } catch (err) {
    return [];
  }
};

export default fetchData;
