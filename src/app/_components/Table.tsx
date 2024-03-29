"use client";
import { cn } from "@/lib/utils";
import { Problem } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Table = ({ data }: { data: Problem[] | undefined }) => {
  const router = useRouter();
  return (
    <div className="lg:w-3/4 md:w-4/5 sm:w-full overflow-x-auto shadow-md sm:rounded-lg p-2 mx-auto mt-10">
      <table className="w-full text-sm text-left rtl:text-right dark:text-gray-400">
        <thead>
          <tr>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Acceptance
            </th>
            <th scope="col" className="px-6 py-3">
              Difficulty
            </th>
            <th scope="col" className="px-6 py-3">
              Submissions
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row) => (
            <tr
              key={row.id}
              // onClick={() => router.push(`/problems/${row.slug}`)}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 font-medium"
            >
              <td className="px-6 py-4 hover:text-blue-900">
                <Link
                  href={{
                    pathname: `/problems/${row.slug}`,
                  }}
                >
                  {row.title}
                </Link>
              </td>
              <td className="px-6 py-4">{row.title}</td>
              <td className="px-6 py-4">{row.accepted}%</td>
              <td
                className={cn(
                  "px-6 py-4 ",
                  row.difficulty === "EASY" ? "text-green-600" : "",
                  row.difficulty === "MEDIUM" ? "text-yellow-600" : "",
                  row.difficulty === "HARD" ? "text-red-600" : ""
                )}
              >
                {row.difficulty}
              </td>
              <td className="px-6 py-4">{row.submissions}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal  dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing 1-10 of 1000
        </span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li className={pageNum}>Previous</li>
          <li className={pageNum}>1</li>
          <li className={pageNum}>2</li>
          <li className={pageNum}>•••</li>
          <li className={pageNum}>4</li>
          <li className={pageNum}>5</li>
          <li className={pageNum}>Next</li>
        </ul>
      </nav>
    </div>
  );
};

export default Table;
const pageNum =
  "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
