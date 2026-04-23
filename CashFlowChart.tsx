import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { cashFlowData } from "@/data/mockData";

const tabs = ["weekly", "monthly", "yearly"] as const;

export function CashFlowChart() {
  const [period, setPeriod] = useState<typeof tabs[number]>("monthly");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass-panel rounded-xl p-4"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-white font-bold text-base">Cash Flow</h3>
          <p className="text-xs text-muted-foreground mt-1">Income vs expenses analysis</p>
        </div>
        <div className="flex gap-2 bg-white/35 rounded-xl p-1.5 backdrop-blur border border-white/20">
          {tabs.map((t) => (
            <motion.button
              key={t}
              onClick={() => setPeriod(t)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all relative ${
                period === t
                  ? "text-black"
                  : "text-black/90 hover:text-white/70"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {period === t && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-chase-cyan to-chase-blue rounded-lg -z-10"
                  layoutId="active-tab"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
              {t}
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={period}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <ResponsiveContainer width="100%" height={230}>
            <BarChart data={cashFlowData[period]} barGap={6}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(0,0%,100%,0.05)" vertical={false} />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "hsl(0,0%,100%,0.95)" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "hsl(0,0%,100%,0.95)" }}
                tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
              />
              <Tooltip
                contentStyle={{
                  background: "hsl(213 76% 15% / 0.95)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid hsl(0,0%,100%,0.1)",
                  borderRadius: "12px",
                  boxShadow: "0 20px 40px -12px rgba(0,0,0,0.3)",
                  color: "white",
                }}
                cursor={{ fill: "hsl(0,0%,100%,0.05)" }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, undefined]}
              />
              <Bar dataKey="income" fill="hsl(160,84%,39%)" radius={[6, 6, 0, 0]} />
              <Bar dataKey="expenses" fill="hsl(0,84%,60%)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
