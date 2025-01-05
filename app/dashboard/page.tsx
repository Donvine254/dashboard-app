import StatCards from "@/app/dashboard/stat-cards";
import Charts from "@/app/dashboard/charts";
import RecentDeliveries from "./recent-deliveries";

export default function Page() {
  return (
    <section>
      <StatCards />
      <Charts />
      <hr />
      <RecentDeliveries />
    </section>
  );
}
