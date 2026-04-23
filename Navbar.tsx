import { Search, Bell, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (location.pathname === "/transactions") {
      setSearch(searchParams.get("q") ?? "");
      return;
    }

    setSearch("");
  }, [location.pathname, searchParams]);

  const onSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = search.trim();

    if (location.pathname === "/transactions") {
      const next = new URLSearchParams(searchParams);
      if (trimmed) {
        next.set("q", trimmed);
      } else {
        next.delete("q");
      }
      setSearchParams(next, { replace: true });
      return;
    }

    navigate(trimmed ? `/transactions?q=${encodeURIComponent(trimmed)}` : "/transactions");
  };

  const onSearchChange = (value: string) => {
    setSearch(value);

    if (location.pathname !== "/transactions") {
      return;
    }

    const next = new URLSearchParams(searchParams);
    if (value.trim()) {
      next.set("q", value.trim());
    } else {
      next.delete("q");
    }
    setSearchParams(next, { replace: true });
  };

  return (
    <header className="h-14 flex items-center justify-between px-4 md:px-5 gap-3 bg-white/5 backdrop-blur border-b border-white/10">
      {/* Search */}
      <motion.div
        className="flex-1 max-w-md"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <form onSubmit={onSearchSubmit} className="glass-input rounded-lg flex items-center gap-2.5 px-3 py-2 group">
          <Search className="w-4 h-4 text-white/40 group-focus-within:text-white/70 transition-colors" />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search transactions..."
            className="bg-transparent border-none outline-none text-sm w-full text-white placeholder:text-white/40"
          />
        </form>
      </motion.div>

      {/* Right Actions */}
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Notifications */}
        <motion.button
          className="rounded-lg p-2.5 relative hover:scale-105 transition-transform group bg-chase-blue border border-white/15"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Bell className="w-5 h-5 text-white transition-colors" />
          <motion.span
            className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-chase-red"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>

        {/* Profile Dropdown */}
        <div className="rounded-lg flex items-center gap-2.5 px-3 py-2 group cursor-pointer bg-chase-blue border border-white/15 transition-colors">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 flex items-center justify-center flex-shrink-0 bg-white/10">
            <img src="/logo.jpeg" alt="Chase logo" className="w-full h-full object-cover" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-white">James Chen</p>
            <p className="text-xs text-white">Administrator</p>
          </div>
          <motion.div
            className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 100 }}
          >
            <LogOut className="w-4 h-4 text-white/50" />
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
}
