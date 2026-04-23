import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { expenseCategories } from "@/data/mockData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

export function ExpenseChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="glass-panel rounded-xl p-4 flex flex-col"
    >
      <div className="mb-4">
        <h3 className="text-white font-bold text-base">Expenses Breakdown</h3>
        <p className="text-xs text-muted-foreground mt-1">Distribution across categories</p>
      </div>

      <div className="flex items-center gap-3 flex-1">
        <div className="flex-shrink-0">
          <ResponsiveContainer width={130} height={130}>
            <PieChart>
              <Pie
                data={expenseCategories}
                cx="50%"
                cy="50%"
                innerRadius={35}
                outerRadius={56}
                paddingAngle={4}
                dataKey="value"
                strokeWidth={0}
              >
                {expenseCategories.map((entry, i) => (
                  <Cell
                    key={i}
                    fill={entry.color}
                    style={{
                      filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.15))",
                    }}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: "hsl(213 76% 15% / 0.95)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid hsl(0,0%,100%,0.1)",
                  borderRadius: "12px",
                  boxShadow: "0 20px 40px -12px rgba(0,0,0,0.3)",
                  color: "white",
                }}
                formatter={(value: number) => [`${value}%`, undefined]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <motion.div
          className="flex-1 space-y-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {expenseCategories.map((cat) => (
            <motion.div
              key={cat.name}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full shadow-lg group-hover:scale-125 transition-transform"
                    style={{ backgroundColor: cat.color }}
                  />
                  <span className="text-sm text-white/70 group-hover:text-white transition-colors font-medium">{cat.name}</span>
                </div>
                <span className="font-bold text-white group-hover:text-chase-cyan transition-colors">{cat.value}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
