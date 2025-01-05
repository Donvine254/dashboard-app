import Charts from "@/components/charts";
import RecentDeliveries from "@/components/recent-deliveries";
import StatCards from "@/components/stat-cards";

export default function Home() {
  return (
    <section>
      <StatCards />
      <Charts />
      <hr />
      <RecentDeliveries />
    </section>
  );
}
