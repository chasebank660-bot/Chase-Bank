import { motion } from "framer-motion";
import { Plus, Wallet } from "lucide-react";
import { DashboardLayout } from "@/layout/DashboardLayout";
import { accounts } from "@/data/mockData";

const Accounts = () => {
  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Accounts & Wallets</h1>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="gradient-card-blue text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Account
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {accounts.map((acc, i) => (
            <motion.div
              key={acc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel rounded-xl p-4 card-hover"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-9 h-9 rounded-lg gradient-card-blue flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs bg-white/10 border border-white/15 text-white/80 px-2.5 py-1 rounded-full font-medium">{acc.type}</span>
              </div>
              <h3 className="font-semibold text-white mb-1">{acc.name}</h3>
              <p className="text-xs text-white/70 mb-3">{acc.number}</p>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs text-white/70">Balance</p>
                  <p className="text-lg font-bold text-white">
                    {acc.currency === "USD" ? "$" : acc.currency === "EUR" ? "€" : "¥"}{acc.balance.toLocaleString()}
                  </p>
                </div>
                <span className="text-xs font-medium text-black bg-white/90 px-2 py-0.5 rounded-md">{acc.currency}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Accounts;
