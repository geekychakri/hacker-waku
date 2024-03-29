import fetchData from "../lib/fetch-data.js";
import Stories from "../components/stories.js";

export default async function TopStories() {
  const storyIds = await fetchData("topstories");
  if (storyIds.length === 0) {
    return <div>Something went wrong!</div>;
  }
  return <Stories storyIds={storyIds} />;
}
