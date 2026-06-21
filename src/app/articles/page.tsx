import { TaskListPage } from "@/components/tasks/task-list-page";
import { buildTaskMetadata } from "@/lib/seo";
import { taskPageMetadata } from "@/config/site.content";
import { connection } from "next/server";

export const revalidate = 3;
export const dynamic = "force-dynamic";

export const generateMetadata = () =>
  buildTaskMetadata("article", {
    path: "/articles",
    title: taskPageMetadata.article.title,
    description: taskPageMetadata.article.description,
  });

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string; c?: string }>;
}) {
  await connection();
  const params = await searchParams;
  return <TaskListPage task="article" category={params?.category || params?.c} />;
}
