import { DashboardLayout } from "@/layout/DashboardLayout";
import { FinancialSummary } from "@/components/cards/FinancialSummary";
import { CardCarousel } from "@/components/cards/CardCarousel";
import { CashFlowChart } from "@/components/charts/CashFlowChart";
import { ExpenseChart } from "@/components/charts/ExpenseChart";
import { RecentTransactions } from "@/components/cards/RecentTransactions";
import { TransferPanel } from "@/components/forms/TransferPanel";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <FinancialSummary />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <CardCarousel />
          </div>
          <TransferPanel />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <CashFlowChart />
          </div>
          <ExpenseChart />
        </div>

        <RecentTransactions />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
