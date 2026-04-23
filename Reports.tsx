import { motion } from "framer-motion";
import { Download, Filter, Calendar } from "lucide-react";
import { DashboardLayout } from "@/layout/DashboardLayout";

const reportTypes = ["Trade Summary", "Revenue Report", "Expense Report", "Tax Report", "Compliance Report"];

const Reports = () => {
  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        <h1 className="text-2xl font-bold text-white">Reports</h1>

        {/* Filters */}
        <div className="glass-panel rounded-xl p-3 flex flex-wrap gap-2.5 items-center">
          <div className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-lg px-3 py-2">
            <Calendar className="w-4 h-4 text-white/70" />
            <span className="text-sm text-white/80">Mar 1 – Mar 24, 2026</span>
          </div>
          <button className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-lg px-3 py-2 text-sm text-white/80 hover:text-white transition-colors">
            <Filter className="w-4 h-4" /> Filters
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reportTypes.map((report, i) => (
            <motion.div
              key={report}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel rounded-xl p-4 card-hover"
            >
              <h3 className="font-semibold text-black bg-white/90 inline-block px-2 py-0.5 rounded-md mb-1.5">{report}</h3>
              <p className="text-xs text-white/70 mb-3">Generated from your latest trade data</p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white/10 hover:bg-chase-blue hover:text-white text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2 text-sm transition-colors border border-white/15"
              >
                <Download className="w-4 h-4" /> Export PDF
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Reports;
