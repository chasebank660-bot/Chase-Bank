export const financialSummary = {
  totalBalance: 2847563.42,
  availableCredit: 1250000.00,
  pendingTradeFinance: 456789.00,
};

export const creditCards = [
  { id: 1, balance: 125430.50, number: "4562", holder: "JAMES CHEN", expiry: "12/27", type: "visa" as const, gradient: "gradient-card-blue" },
  { id: 2, balance: 89200.00, number: "7891", holder: "JAMES CHEN", expiry: "03/28", type: "mastercard" as const, gradient: "gradient-card-purple" },
  { id: 3, balance: 342100.75, number: "2345", holder: "TRADEFLOW INC", expiry: "09/26", type: "visa" as const, gradient: "gradient-card-cyan" },
];

export const cashFlowData = {
  weekly: [
    { name: "Mon", income: 45000, expenses: 32000 },
    { name: "Tue", income: 52000, expenses: 28000 },
    { name: "Wed", income: 38000, expenses: 41000 },
    { name: "Thu", income: 67000, expenses: 35000 },
    { name: "Fri", income: 54000, expenses: 29000 },
    { name: "Sat", income: 21000, expenses: 15000 },
    { name: "Sun", income: 18000, expenses: 12000 },
  ],
  monthly: [
    { name: "Jan", income: 320000, expenses: 240000 },
    { name: "Feb", income: 280000, expenses: 210000 },
    { name: "Mar", income: 350000, expenses: 260000 },
    { name: "Apr", income: 410000, expenses: 290000 },
    { name: "May", income: 380000, expenses: 310000 },
    { name: "Jun", income: 420000, expenses: 280000 },
  ],
  yearly: [
    { name: "2020", income: 2800000, expenses: 2100000 },
    { name: "2021", income: 3200000, expenses: 2400000 },
    { name: "2022", income: 3800000, expenses: 2900000 },
    { name: "2023", income: 4200000, expenses: 3100000 },
    { name: "2024", income: 4800000, expenses: 3500000 },
  ],
};

export const expenseCategories = [
  { name: "Shipping", value: 35, color: "hsl(218, 100%, 37%)" },
  { name: "Customs", value: 22, color: "hsl(258, 90%, 66%)" },
  { name: "Inventory", value: 18, color: "hsl(192, 100%, 50%)" },
  { name: "Logistics", value: 15, color: "hsl(160, 84%, 39%)" },
  { name: "Misc", value: 10, color: "hsl(38, 92%, 50%)" },
];

export const recentTransactions = [
  { id: 1, name: "Shanghai Export Co.", type: "Export", country: "CN", flag: "🇨🇳", date: "Mar 22, 2026", amount: 125000, positive: true },
  { id: 2, name: "Hamburg Logistics GmbH", type: "Import", country: "DE", flag: "🇩🇪", date: "Mar 21, 2026", amount: -45600, positive: false },
  { id: 3, name: "Mumbai Textiles Ltd", type: "Export", country: "IN", flag: "🇮🇳", date: "Mar 20, 2026", amount: 89200, positive: true },
  { id: 4, name: "Rotterdam Port Auth.", type: "Import", country: "NL", flag: "🇳🇱", date: "Mar 19, 2026", amount: -23400, positive: false },
  { id: 5, name: "Tokyo Electronics Inc", type: "Export", country: "JP", flag: "🇯🇵", date: "Mar 18, 2026", amount: 67800, positive: true },
  { id: 6, name: "São Paulo Customs", type: "Import", country: "BR", flag: "🇧🇷", date: "Mar 17, 2026", amount: -12300, positive: false },
];

export const shipments = [
  { id: "ORD-2024-001", country: "China", flag: "🇨🇳", status: "Completed", value: 125000, date: "Mar 15, 2026" },
  { id: "ORD-2024-002", country: "Germany", flag: "🇩🇪", status: "In Transit", value: 89500, date: "Mar 18, 2026" },
  { id: "ORD-2024-003", country: "India", flag: "🇮🇳", status: "Pending", value: 67200, date: "Mar 20, 2026" },
  { id: "ORD-2024-004", country: "Japan", flag: "🇯🇵", status: "In Transit", value: 145000, date: "Mar 19, 2026" },
  { id: "ORD-2024-005", country: "Brazil", flag: "🇧🇷", status: "Completed", value: 56800, date: "Mar 14, 2026" },
  { id: "ORD-2024-006", country: "Netherlands", flag: "🇳🇱", status: "Pending", value: 92300, date: "Mar 22, 2026" },
  { id: "ORD-2024-007", country: "South Korea", flag: "🇰🇷", status: "Completed", value: 78400, date: "Mar 12, 2026" },
  { id: "ORD-2024-008", country: "UK", flag: "🇬🇧", status: "In Transit", value: 110000, date: "Mar 21, 2026" },
];

export const invoices = [
  { id: "INV-001", client: "Shanghai Export Co.", amount: 125000, status: "Paid", date: "Mar 15, 2026" },
  { id: "INV-002", client: "Hamburg Logistics", amount: 45600, status: "Pending", date: "Mar 18, 2026" },
  { id: "INV-003", client: "Mumbai Textiles", amount: 89200, status: "Overdue", date: "Mar 10, 2026" },
  { id: "INV-004", client: "Tokyo Electronics", amount: 67800, status: "Paid", date: "Mar 20, 2026" },
  { id: "INV-005", client: "Rotterdam Port Auth.", amount: 23400, status: "Pending", date: "Mar 22, 2026" },
];

export const accounts = [
  { id: 1, name: "Operating Account", type: "Checking", balance: 1245000, currency: "USD", number: "****4562" },
  { id: 2, name: "Trade Finance Reserve", type: "Savings", balance: 856000, currency: "USD", number: "****7891" },
  { id: 3, name: "EUR Account", type: "Foreign Currency", balance: 423000, currency: "EUR", number: "****2345" },
  { id: 4, name: "CNY Account", type: "Foreign Currency", balance: 1890000, currency: "CNY", number: "****6789" },
];

export const tradeFinanceItems = [
  { id: "LC-001", type: "Letter of Credit", counterparty: "Shanghai Export Co.", amount: 125000, status: "Active", stage: "Transit", date: "Mar 15, 2026" },
  { id: "LC-002", type: "Letter of Credit", counterparty: "Hamburg Logistics", amount: 89500, status: "Pending", stage: "Goods", date: "Mar 20, 2026" },
  { id: "BL-001", type: "Bill of Lading", counterparty: "Mumbai Textiles", amount: 67200, status: "Active", stage: "Customs", date: "Mar 18, 2026" },
  { id: "LC-003", type: "Letter of Credit", counterparty: "Tokyo Electronics", amount: 145000, status: "Completed", stage: "Payment", date: "Mar 12, 2026" },
];

export const analyticsData = {
  revenueTrend: [
    { month: "Oct", revenue: 320000 },
    { month: "Nov", revenue: 380000 },
    { month: "Dec", revenue: 290000 },
    { month: "Jan", revenue: 420000 },
    { month: "Feb", revenue: 480000 },
    { month: "Mar", revenue: 510000 },
  ],
  tradeVolume: [
    { month: "Oct", imports: 180000, exports: 250000 },
    { month: "Nov", imports: 220000, exports: 280000 },
    { month: "Dec", imports: 150000, exports: 210000 },
    { month: "Jan", imports: 260000, exports: 320000 },
    { month: "Feb", imports: 290000, exports: 350000 },
    { month: "Mar", imports: 310000, exports: 380000 },
  ],
};
