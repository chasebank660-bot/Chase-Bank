import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { DashboardLayout } from "@/layout/DashboardLayout";
import { invoices } from "@/data/mockData";

const statusClass: Record<string, string> = {
  Paid: "status-completed",
  Pending: "status-pending",
  Overdue: "status-overdue",
};

const Invoices = () => {
  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        <h1 className="text-2xl font-bold text-white">Invoices</h1>

        <div className="glass-panel rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-4 py-3 text-[11px] font-semibold text-white/70 uppercase tracking-wider">Invoice</th>
                <th className="text-left px-4 py-3 text-[11px] font-semibold text-white/70 uppercase tracking-wider">Client</th>
                <th className="text-left px-4 py-3 text-[11px] font-semibold text-white/70 uppercase tracking-wider">Status</th>
                <th className="text-left px-4 py-3 text-[11px] font-semibold text-white/70 uppercase tracking-wider">Date</th>
                <th className="text-right px-4 py-3 text-[11px] font-semibold text-white/70 uppercase tracking-wider">Amount</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv, i) => (
                <motion.tr key={inv.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }} className="border-b border-border/60 last:border-0 hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="bg-white/90 rounded-md p-1">
                        <FileText className="w-4 h-4 text-black" />
                      </div>
                      <span className="text-sm font-medium text-black bg-white/90 px-2 py-0.5 rounded-md">{inv.id}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-white">{inv.client}</td>
                  <td className="px-4 py-3"><span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusClass[inv.status]}`}>{inv.status}</span></td>
                  <td className="px-4 py-3 text-sm text-white/70">{inv.date}</td>
                  <td className="px-4 py-3 text-sm font-bold text-white text-right">${inv.amount.toLocaleString()}</td>
                  <td className="px-4 py-3">
                    <button className="p-1.5 rounded-md hover:bg-white/10 transition-colors"><Download className="w-4 h-4 text-white/70" /></button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Invoices;
