import { motion } from "framer-motion";
import { DashboardLayout } from "@/layout/DashboardLayout";
import { shipments } from "@/data/mockData";

const statusClass: Record<string, string> = {
  Pending: "status-pending",
  "In Transit": "status-transit",
  Completed: "status-completed",
};

const Orders = () => {
  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        <h1 className="text-2xl font-bold text-white">Import / Export Orders</h1>

        <div className="glass-panel rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-4 py-3 text-[11px] font-semibold text-white/70 uppercase tracking-wider">Order ID</th>
                <th className="text-left px-4 py-3 text-[11px] font-semibold text-white/70 uppercase tracking-wider">Country</th>
                <th className="text-left px-4 py-3 text-[11px] font-semibold text-white/70 uppercase tracking-wider">Status</th>
                <th className="text-left px-4 py-3 text-[11px] font-semibold text-white/70 uppercase tracking-wider">Date</th>
                <th className="text-right px-4 py-3 text-[11px] font-semibold text-white/70 uppercase tracking-wider">Value</th>
              </tr>
            </thead>
            <tbody>
              {shipments.map((s, i) => (
                <motion.tr
                  key={s.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  className="border-b border-border/60 last:border-0 hover:bg-white/5 transition-colors"
                >
                  <td className="px-4 py-3 text-sm font-medium text-black">
                    <span className="bg-white/90 px-2 py-0.5 rounded-md inline-block">{s.id}</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-white">{s.flag} {s.country}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusClass[s.status]}`}>{s.status}</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-white/70">{s.date}</td>
                  <td className="px-4 py-3 text-sm font-bold text-white text-right">${s.value.toLocaleString()}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Orders;
