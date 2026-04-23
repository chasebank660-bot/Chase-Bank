import { motion } from "framer-motion";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { DashboardLayout } from "@/layout/DashboardLayout";
import { analyticsData, expenseCategories } from "@/data/mockData";

const Analytics = () => {
  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
        <h1 className="text-2xl font-bold text-white">Analytics</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Trend */}
          <div className="glass-panel rounded-2xl p-6">
            <h3 className="font-semibold text-foreground mb-4">Revenue Trend</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={analyticsData.revenueTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,13%,91%)" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(215,16%,47%)" }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(215,16%,47%)" }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                <Tooltip contentStyle={{ background: "hsl(0 0% 100% / 0.9)", backdropFilter: "blur(8px)", border: "1px solid hsl(220,13%,91%)", borderRadius: "12px" }} formatter={(v: number) => [`$${v.toLocaleString()}`]} />
                <Line type="monotone" dataKey="revenue" stroke="hsl(218,100%,37%)" strokeWidth={3} dot={{ fill: "hsl(218,100%,37%)", r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Trade Volume */}
          <div className="glass-panel rounded-2xl p-6">
            <h3 className="font-semibold text-foreground mb-4">Trade Volume</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={analyticsData.tradeVolume} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,13%,91%)" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(215,16%,47%)" }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "hsl(215,16%,47%)" }} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                <Tooltip contentStyle={{ background: "hsl(0 0% 100% / 0.9)", backdropFilter: "blur(8px)", border: "1px solid hsl(220,13%,91%)", borderRadius: "12px" }} formatter={(v: number) => [`$${v.toLocaleString()}`]} />
                <Bar dataKey="imports" fill="hsl(258,90%,66%)" radius={[6, 6, 0, 0]} />
                <Bar dataKey="exports" fill="hsl(192,100%,50%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Expense Breakdown */}
          <div className="glass-panel rounded-2xl p-6 lg:col-span-2">
            <h3 className="font-semibold text-foreground mb-4">Expense Breakdown</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {expenseCategories.map((cat, i) => (
                <motion.div key={cat.name} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="w-16 h-16 rounded-2xl mx-auto mb-2 flex items-center justify-center" style={{ backgroundColor: cat.color + "20" }}>
                    <span className="text-2xl font-bold" style={{ color: cat.color }}>{cat.value}%</span>
                  </div>
                  <p className="text-sm font-medium text-foreground">{cat.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Analytics;
