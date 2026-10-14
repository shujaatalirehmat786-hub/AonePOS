export const PHONE_DISPLAY = "+1 866-882-4292";
export const PHONE_HREF = "tel:+18668824292";
export const CONTACT_EMAIL = "info@aonepos.com";

// Single source of truth for plans so the homepage and /pricing always show the same entitlements, in the same order.
export const plans = [
  { name: "BASIC PLAN", price: 59, featured: false, features: ["Cloud-Based POS System", "Inventory Management", "Reports & Analytics", "Employee Management", "Support & Control"] },
  { name: "PREMIUM PLAN", price: 149, featured: true, features: ["Cloud-Based POS System", "Inventory & Stock Control", "Multi-Location Management", "Reports & Analytics", "Online Ordering", "Support & Control"] },
  { name: "ENTERPRISE PLAN", price: 199, featured: false, features: ["Cloud-Based POS System", "Inventory Management", "Multi-Location Management", "Reports & Analytics", "Employee Management", "Online Ordering", "Customer Display System & Support", "Kitchen Display System & Support", "Dedicated Enterprise Support"] },
];

export const pricingTerms = [
  "Each plan includes only the features listed on it.",
  "Prices are for the AOne POS software subscription. Whether your plan is billed per location or per register is stated in your written quote before you sign.",
  "Card processing fees are charged by your payment processor, not by AOne POS.",
  "Hardware, setup or implementation work, third-party service fees and applicable taxes, where they apply, are itemised in your written quote.",
];
