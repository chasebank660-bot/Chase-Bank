import { motion } from "framer-motion";
import { creditCards } from "@/data/mockData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export function CardCarousel() {
  return (
    <motion.div 
      className="glass-panel rounded-xl p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-bold text-base">Payment Methods</h3>
        <button className="text-xs text-black font-semibold bg-white rounded-md px-2 py-1 hover:bg-white/90 transition-colors">
          Manage Cards →
        </button>
      </div>

      <motion.div
        className="flex gap-3 overflow-x-auto pb-1 snap-x scroll-smooth"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {creditCards.map((card, i) => (
          <motion.div
            key={card.id}
            variants={cardVariants}
            className={`${card.gradient} rounded-xl p-4 min-w-[260px] md:min-w-[280px] text-white card-hover card-glow relative overflow-hidden snap-start group`}
          >
            {/* Enhanced glass reflection effect */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/30 to-transparent" />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <p className="text-xs text-white/60 font-bold uppercase tracking-widest">
                  {card.type === "visa" ? "VISA" : "MASTERCARD"}
                </p>
                <div className="w-10 h-6 rounded bg-white/20 backdrop-blur border border-white/30" />
              </div>

              <p className="text-base font-bold tracking-[0.12em] mb-5">
                •••• •••• •••• <span className="font-mono">{card.number}</span>
              </p>

              <div className="flex justify-between items-end gap-2">
                <div>
                  <p className="text-[11px] text-white/50 uppercase mb-1 font-semibold">Card Holder</p>
                  <p className="text-sm font-bold">{card.holder}</p>
                </div>
                <div className="text-center">
                  <p className="text-[11px] text-white/50 uppercase mb-1 font-semibold">Expires</p>
                  <p className="text-sm font-bold">{card.expiry}</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-white/50 uppercase mb-1 font-semibold">Balance</p>
                  <p className="text-sm font-bold">${card.balance.toLocaleString()}</p>
                </div>
              </div>
            </div>

            {/* Hover border effect */}
            <div className="absolute inset-0 rounded-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
