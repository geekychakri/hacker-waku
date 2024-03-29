"use client";

import { Link } from "waku";
import { useRouter_UNSTABLE as useRouter } from "waku";

import { Spinner } from "./spinner.js";

export default function Navigation() {
  const router = useRouter();

  const { path } = router.value;
  return (
    <div className="flex items-center justify-between bg-[#ff6600] p-1 relative">
      <div className="flex gap-1 flex-wrap">
        <Link
          to="/"
          pending={<Spinner fill="#fff" />}
          className="flex gap-2 mr-2"
        >
          <img
            src="/images/favicon.png"
            width={20}
            height={10}
            alt="waku logo"
          />
          <span className={`font-semibold ${path === "/" ? "text-white" : ""}`}>
            Hacker Waku
          </span>
        </Link>

        <Link
          to="/newest"
          pending={<Spinner fill="#fff" />}
          className={path === "/newest" ? "text-white" : ""}
        >
          new
        </Link>
        <span>|</span>
        <Link
          to="/ask"
          pending={<Spinner />}
          className={path === "/ask" ? "text-white" : ""}
        >
          ask
        </Link>
        <span>|</span>
        <Link
          to="/show"
          pending={<Spinner />}
          className={path === "/show" ? "text-white" : ""}
        >
          show
        </Link>
        <span>|</span>
        <Link
          to="/jobs"
          pending={<Spinner />}
          className={path === "/jobs" ? "text-white" : ""}
        >
          jobs
        </Link>
      </div>
    </div>
  );
}
