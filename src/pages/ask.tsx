import fetchData from "../lib/fetch-data.js";
import Stories from "../components/stories.js";

export default async function AskStories() {
  const storyIds = await fetchData("askstories");
  if (storyIds.length === 0) {
    return <div>Something went wrong!</div>;
  }
  return <Stories storyIds={storyIds} />;
}
