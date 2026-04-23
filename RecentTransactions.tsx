import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { recentTransactions } from "@/data/mockData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.5,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export function RecentTransactions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="glass-panel rounded-xl p-4"
    >
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-white font-bold text-base">Recent Transactions</h3>
          <p className="text-xs text-muted-foreground mt-1">Latest activity across all accounts</p>
        </div>
        <button className="text-xs text-chase-cyan font-semibold hover:text-chase-bright transition-colors px-3 py-1.5 rounded-lg hover:bg-chase-cyan/5">
          View All →
        </button>
      </div>

      <motion.div
        className="space-y-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {recentTransactions.map((tx, i) => (
          <motion.div
            key={tx.id}
            variants={rowVariants}
            className="flex items-center justify-between py-2.5 px-2 border-b border-border/50 last:border-0 hover:bg-white/5 rounded-lg transition-colors group cursor-pointer"
          >
            <div className="flex items-center gap-3 flex-1">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold transition-all group-hover:scale-105 ${
                tx.positive 
                  ? "bg-gradient-to-br from-chase-green/20 to-chase-green/10 text-chase-green" 
                  : "bg-gradient-to-br from-chase-red/20 to-chase-red/10 text-chase-red"
              }`}>
                {tx.positive ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownLeft className="w-4 h-4" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">{tx.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {tx.flag} {tx.type} · {tx.date}
                </p>
              </div>
            </div>
            <span className={`text-sm font-bold whitespace-nowrap ml-4 ${
              tx.positive ? "text-chase-green" : "text-chase-red"
            }`}>
              {tx.positive ? "+" : ""}${Math.abs(tx.amount).toLocaleString()}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
