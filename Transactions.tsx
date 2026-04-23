import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { DashboardLayout } from "@/layout/DashboardLayout";
import { recentTransactions } from "@/data/mockData";

const allTransactions = [
  ...recentTransactions,
  { id: 7, name: "Dubai Port Services", type: "Import", country: "AE", flag: "🇦🇪", date: "Mar 16, 2026", amount: -34500, positive: false },
  { id: 8, name: "Sydney Exports Pty", type: "Export", country: "AU", flag: "🇦🇺", date: "Mar 15, 2026", amount: 98700, positive: true },
  { id: 9, name: "Singapore Trading Co", type: "Export", country: "SG", flag: "🇸🇬", date: "Mar 14, 2026", amount: 156000, positive: true },
  { id: 10, name: "Vancouver Shipping", type: "Import", country: "CA", flag: "🇨🇦", date: "Mar 13, 2026", amount: -28900, positive: false },
];

const Transactions = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") ?? "");
  const [typeFilter, setTypeFilter] = useState("All");

  useEffect(() => {
    setSearch(searchParams.get("q") ?? "");
  }, [searchParams]);

  const updateSearch = (value: string) => {
    setSearch(value);
    const next = new URLSearchParams(searchParams);

    if (value.trim()) {
      next.set("q", value.trim());
    } else {
      next.delete("q");
    }

    setSearchParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return allTransactions.filter((tx) => {
      const searchable = `${tx.name} ${tx.type} ${tx.country} ${tx.date}`.toLowerCase();
      const matchesSearch = !normalizedSearch || searchable.includes(normalizedSearch);
      const matchesType = typeFilter === "All" || tx.type === typeFilter;
      return matchesSearch && matchesType;
    });
  }, [search, typeFilter]);

  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
        <h1 className="text-2xl font-bold text-white">Transactions</h1>

        {/* Filters */}
        <div className="glass-panel rounded-xl p-3 flex flex-wrap gap-2.5 items-center">
          <div className="flex-1 min-w-[190px] flex items-center gap-2 bg-white/10 border border-white/15 rounded-lg px-3 py-2">
            <Search className="w-4 h-4 text-white/60" />
            <input
              value={search}
              onChange={(e) => updateSearch(e.target.value)}
              placeholder="Search transactions..."
              className="bg-transparent border-none outline-none text-sm w-full text-white placeholder:text-white/50"
            />
          </div>
          <div className="flex gap-2">
            {["All", "Import", "Export"].map((t) => (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  typeFilter === t ? "bg-chase-blue text-white" : "bg-white/10 border border-white/15 text-white/80 hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="glass-panel rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-4 py-3 text-[11px] font-semibold text-white uppercase tracking-wider">Transaction</th>
                <th className="text-left px-4 py-3 text-[11px] font-semibold text-white uppercase tracking-wider">Type</th>
                <th className="text-left px-4 py-3 text-[11px] font-semibold text-white uppercase tracking-wider">Country</th>
                <th className="text-left px-4 py-3 text-[11px] font-semibold text-white uppercase tracking-wider">Date</th>
                <th className="text-right px-4 py-3 text-[11px] font-semibold text-white uppercase tracking-wider">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((tx, i) => (
                <motion.tr
                  key={tx.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="border-b border-border/60 last:border-0 hover:bg-white/5 transition-colors"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${tx.positive ? "bg-chase-green/10" : "bg-chase-red/10"}`}>
                        {tx.positive ? <ArrowUpRight className="w-4 h-4 text-chase-green" /> : <ArrowDownLeft className="w-4 h-4 text-chase-red" />}
                      </div>
                      <span className="text-sm font-medium text-black bg-white/90 px-2 py-0.5 rounded-md">{tx.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-white">{tx.type}</td>
                  <td className="px-4 py-3 text-sm text-white">{tx.flag} {tx.country}</td>
                  <td className="px-4 py-3 text-sm text-white">{tx.date}</td>
                  <td className={`px-4 py-3 text-sm font-bold text-right ${tx.positive ? "text-chase-green" : "text-chase-red"}`}>
                    {tx.positive ? "+" : ""}${Math.abs(tx.amount).toLocaleString()}
                  </td>
                </motion.tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-sm text-white/70">
                    No transactions found for this search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default Transactions;
