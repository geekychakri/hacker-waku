import fetchData from "./fetch-data.js";

export default async function getItem(id: any) {
  const val = await fetchData(`item/${id}`);
  if (val) {
    return transform(val);
  } else {
    return null;
  }
}

type ValType = {
  id: number;
  url: string;
  score: number;
  title: string;
  by: string;
  kids: [];
  descendants: number;
  time: number;
  type: string;
};

export function transform(val: ValType) {
  if (val) {
    return {
      id: val.id,
      url: val.url || "",
      user: val.by,
      // time is seconds since epoch, not ms
      date: new Date(val.time * 1000).getTime() || 0,
      // sometimes `kids` is `undefined`
      comments: val.kids || [],
      commentsCount: val.descendants || 0,
      score: val.score,
      title: val.title,
    };
  }
}
