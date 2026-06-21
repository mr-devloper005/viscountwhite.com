import { TaskListPage } from "@/components/tasks/task-list-page";
import { buildTaskMetadata } from "@/lib/seo";

export const revalidate = 3;
export const generateMetadata = () => buildTaskMetadata("comment");

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string; c?: string }>;
}) {
  const params = await searchParams;
  return <TaskListPage task="comment" category={params?.category || params?.c} />;
}
