import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ArrowDownLeft, ArrowUpRight } from "lucide-react";
import { DashboardLayout } from "@/layout/DashboardLayout";

const paymentHistory = [
  { id: 1, to: "Shanghai Export Co.", amount: 45000, type: "Sent", date: "Mar 22, 2026" },
  { id: 2, from: "Tokyo Electronics", amount: 67800, type: "Received", date: "Mar 21, 2026" },
  { id: 3, to: "Hamburg Logistics", amount: 23400, type: "Sent", date: "Mar 20, 2026" },
  { id: 4, from: "Mumbai Textiles", amount: 89200, type: "Received", date: "Mar 19, 2026" },
];

const Payments = () => {
  const [tab, setTab] = useState<"send" | "receive">("send");

  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <h1 className="text-2xl font-bold text-white">Payments</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Send/Receive */}
          <div className="glass-panel rounded-2xl p-6">
            <div className="flex gap-1 bg-muted rounded-xl p-1 mb-6">
              {(["send", "receive"] as const).map((t) => (
                <button key={t} onClick={() => setTab(t)} className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${tab === t ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>
                  {t}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">{tab === "send" ? "Recipient" : "From"}</label>
                <input placeholder="Enter name or account" className="w-full bg-muted rounded-xl px-4 py-2.5 text-sm border border-border outline-none text-foreground focus:ring-2 focus:ring-primary/30" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Amount (USD)</label>
                <input placeholder="0.00" className="w-full bg-muted rounded-xl px-4 py-2.5 text-sm border border-border outline-none text-foreground focus:ring-2 focus:ring-primary/30" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Reference</label>
                <input placeholder="Payment reference" className="w-full bg-muted rounded-xl px-4 py-2.5 text-sm border border-border outline-none text-foreground focus:ring-2 focus:ring-primary/30" />
              </div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full gradient-card-blue text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> {tab === "send" ? "Send Payment" : "Request Payment"}
              </motion.button>
            </div>
          </div>

          {/* History */}
          <div className="glass-panel rounded-2xl p-6">
            <h3 className="font-semibold text-foreground mb-4">Payment History</h3>
            <div className="space-y-3">
              {paymentHistory.map((p) => (
                <div key={p.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${p.type === "Received" ? "bg-chase-green/10" : "bg-chase-red/10"}`}>
                      {p.type === "Received" ? <ArrowDownLeft className="w-4 h-4 text-chase-green" /> : <ArrowUpRight className="w-4 h-4 text-chase-red" />}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{p.type === "Sent" ? p.to : p.from}</p>
                      <p className="text-xs text-muted-foreground">{p.date}</p>
                    </div>
                  </div>
                  <span className={`text-sm font-bold ${p.type === "Received" ? "text-chase-green" : "text-chase-red"}`}>
                    {p.type === "Received" ? "+" : "-"}${p.amount.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Payments;
