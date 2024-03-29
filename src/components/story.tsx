"use client";

import { useState } from "react";
import { useRouter_UNSTABLE as useRouter } from "waku";

import timeAgo from "../lib/time-ago.js";

const plural = (n: number, s: string) => s + (n === 0 || n > 1 ? "s" : "");

type StoryType = {
  id?: number;
  url?: string;
  user?: string;
  date?: number;
  comments?: [];
  commentsCount?: number;
  score?: number;
  title?: string;
};

export default function Story({
  id,
  title,
  date,
  url,
  user,
  score,
  commentsCount,
}: StoryType) {
  const { host } = url ? new URL(url) : { host: "#" };
  const [voted, setVoted] = useState(false);

  const router = useRouter();

  const { path } = router.value;

  return (
    <div>
      <div>
        {path !== "/jobs" && (
          <span
            className={`cursor-pointer ${voted ? "opacity-100" : "opacity-50"}`}
            onClick={() => setVoted(!voted)}
            title="upvote"
          >
            &#9650;
          </span>
        )}
        <a href={url} rel="noopener noreferrer nofollow" target="_blank">
          {title}
        </a>
        {url && (
          <span>
            {" ("}
            <a
              href={`http://${host}`}
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              {host.replace(/^www\./, "")}
            </a>
            {")"}
          </span>
        )}
      </div>
      <div className="text-gray-500 text-xs">
        {path !== "/jobs" && (
          <span>
            {score} {plural(score as number, "point")} by <span>{user}</span>
          </span>
        )}{" "}
        <span suppressHydrationWarning>{timeAgo(date as number)} ago</span>
        {path !== "/jobs" && (
          <span>
            | {commentsCount} {plural(commentsCount as number, "comment")}
          </span>
        )}
      </div>
    </div>
  );
}
