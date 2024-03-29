import fetchData from "../lib/fetch-data.js";
import { transform } from "../lib/get-item.js";

import Story from "./story.js";

async function StoryWithData({ id }: { id: string }) {
  const data = await fetchData(`item/${id}`);
  const story = transform(data);

  return <Story {...story} />;
}

export default async function Stories({ storyIds }: { storyIds: [] }) {
  return (
    <div className="py-2 flex flex-col gap-2">
      {storyIds?.map((id, i) => (
        <div className="flex gap-2" key={id}>
          <span className="shrink-0 text-right text-gray-500 w-5">
            {i + 1}.
          </span>
          <StoryWithData id={id} key={id} />
        </div>
      ))}
    </div>
  );
}
