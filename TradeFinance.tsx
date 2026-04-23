import { motion } from "framer-motion";
import { Ship, FileCheck, Landmark as LandmarkIcon, CreditCard } from "lucide-react";
import { DashboardLayout } from "@/layout/DashboardLayout";
import { tradeFinanceItems } from "@/data/mockData";

const stageIcons: Record<string, typeof Ship> = {
  Goods: FileCheck,
  Transit: Ship,
  Customs: LandmarkIcon,
  Payment: CreditCard,
};

const stages = ["Goods", "Transit", "Customs", "Payment"];

const TradeFinance = () => {
  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <h1 className="text-2xl font-bold text-white">Trade Finance</h1>

        <div className="grid grid-cols-1 gap-4">
          {tradeFinanceItems.map((item, i) => {
            const stageIndex = stages.indexOf(item.stage);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel rounded-2xl p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-primary">{item.id}</span>
                      <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">{item.type}</span>
                    </div>
                    <p className="text-foreground font-medium">{item.counterparty}</p>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-foreground">${item.amount.toLocaleString()}</p>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      item.status === "Active" ? "status-transit" : item.status === "Pending" ? "status-pending" : "status-completed"
                    }`}>{item.status}</span>
                  </div>
                </div>

                {/* Timeline */}
                <div className="flex items-center gap-0">
                  {stages.map((stage, si) => {
                    const Icon = stageIcons[stage];
                    const active = si <= stageIndex;
                    return (
                      <div key={stage} className="flex items-center flex-1">
                        <div className={`flex flex-col items-center gap-1 ${active ? "text-primary" : "text-muted-foreground/40"}`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${active ? "gradient-card-blue text-white" : "bg-muted"}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-medium">{stage}</span>
                        </div>
                        {si < stages.length - 1 && (
                          <div className={`flex-1 h-0.5 mx-1 rounded ${si < stageIndex ? "bg-primary" : "bg-border"}`} />
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default TradeFinance;
