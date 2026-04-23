import { motion } from "framer-motion";
import { User, Bell, Shield, Palette } from "lucide-react";
import { DashboardLayout } from "@/layout/DashboardLayout";

const SettingsPage = () => {
  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 max-w-2xl">
        <h1 className="text-2xl font-bold text-white">Settings</h1>

        {/* Profile */}
        <div className="glass-panel rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <User className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Profile</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Full Name</label>
              <input defaultValue="James Chen" className="w-full bg-muted rounded-xl px-4 py-2.5 text-sm border border-border outline-none text-foreground" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email</label>
              <input defaultValue="james@tradeflow.com" className="w-full bg-muted rounded-xl px-4 py-2.5 text-sm border border-border outline-none text-foreground" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Company</label>
              <input defaultValue="TradeFlow Inc." className="w-full bg-muted rounded-xl px-4 py-2.5 text-sm border border-border outline-none text-foreground" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Role</label>
              <input defaultValue="Admin" className="w-full bg-muted rounded-xl px-4 py-2.5 text-sm border border-border outline-none text-foreground" readOnly />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="glass-panel rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <Bell className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Notifications</h3>
          </div>
          {["Email notifications", "Push notifications", "Trade alerts", "Payment reminders"].map((item) => (
            <div key={item} className="flex items-center justify-between py-2">
              <span className="text-sm text-foreground">{item}</span>
              <div className="w-10 h-6 bg-primary rounded-full relative cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1 shadow" />
              </div>
            </div>
          ))}
        </div>

        {/* Security */}
        <div className="glass-panel rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Security</h3>
          </div>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="gradient-card-blue text-white font-medium py-2.5 px-6 rounded-xl text-sm">
            Change Password
          </motion.button>
        </div>

        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="gradient-card-blue text-white font-semibold py-3 px-8 rounded-xl">
          Save Changes
        </motion.button>
      </motion.div>
    </DashboardLayout>
  );
};

export default SettingsPage;
