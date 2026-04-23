import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, ArrowLeftRight, Wallet, Ship, Landmark, BarChart3,
  FileText, CreditCard, ClipboardList, Settings, ChevronLeft, ChevronRight
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: ArrowLeftRight, label: "Transactions", path: "/transactions" },
  { icon: Wallet, label: "Accounts", path: "/accounts" },
  { icon: Ship, label: "Shipments", path: "/orders" },
  { icon: Landmark, label: "Trade Finance", path: "/trade-finance" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: FileText, label: "Invoices", path: "/invoices" },
  { icon: CreditCard, label: "Payments", path: "/payments" },
  { icon: ClipboardList, label: "Reports", path: "/reports" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export function AppSidebar() {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 260 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed left-0 top-0 h-screen z-50 glass-panel-dark flex flex-col"
    >
      {/* Logo */}
      <div className="h-14 border-b border-white/10 flex items-center px-3">
        <Link
          to="/"
          aria-label="Go to dashboard"
          className={`w-full rounded-xl border border-white/20 bg-white/95 overflow-hidden transition-all duration-200 hover:border-chase-cyan/70 ${
            collapsed ? "h-9 px-1" : "h-10 px-2"
          }`}
        >
          <img
            src="/logo.jpeg"
            alt="Chase logo"
            className="w-full h-full object-contain"
          />
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-3 px-2.5 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all duration-200 group
                ${active ? "nav-active text-white" : "text-white/90 hover:text-white hover:bg-white/10"}`}
            >
              <item.icon className={`w-5 h-5 flex-shrink-0 ${active ? "text-chase-cyan" : "group-hover:text-white"}`} />
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="whitespace-nowrap font-medium"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          );
        })}
      </nav>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="mx-3 mb-4 p-2 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-center"
      >
        {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>
    </motion.aside>
  );
}
