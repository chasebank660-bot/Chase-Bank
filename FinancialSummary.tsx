import { motion } from "framer-motion";
import { TrendingUp, CreditCard, Clock } from "lucide-react";
import { financialSummary } from "@/data/mockData";

const formatCurrency = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);

const cards = [
  { label: "Total Balance", value: financialSummary.totalBalance, icon: TrendingUp, gradient: "gradient-card-blue" },
  { label: "Available Credit", value: financialSummary.availableCredit, icon: CreditCard, gradient: "gradient-card-purple" },
  { label: "Pending Trade Finance", value: financialSummary.pendingTradeFinance, icon: Clock, gradient: "gradient-card-cyan" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function FinancialSummary() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {cards.map((card, i) => (
        <motion.div
          key={card.label}
          variants={cardVariants}
          className={`${card.gradient} rounded-xl p-5 min-h-[164px] text-white card-hover card-glow relative overflow-hidden group`}
        >
          {/* Enhanced overlay effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-black/[0.08] rounded-2xl" />
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl transition-all duration-300 group-hover:scale-110" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white/75 text-sm font-medium">{card.label}</span>
              <div className="w-9 h-9 rounded-md bg-white/15 backdrop-blur flex items-center justify-center">
                <card.icon className="w-4 h-4 text-white/70" />
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-2xl font-bold tracking-tight leading-tight">{formatCurrency(card.value)}</p>
              <p className="text-sm text-white/65 font-medium">Updated just now</p>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-white/40 via-white/20 to-transparent w-full transition-all duration-300 group-hover:h-1.5" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
