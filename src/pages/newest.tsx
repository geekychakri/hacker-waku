import fetchData from "../lib/fetch-data.js";
import Stories from "../components/stories.js";

export default async function NewStories() {
  const storyIds = await fetchData("newstories");
  if (storyIds.length === 0) {
    return <div>Something went wrong!</div>;
  }
  return <Stories storyIds={storyIds} />;
}
