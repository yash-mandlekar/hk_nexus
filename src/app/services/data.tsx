import {
  Headset,
  TrendingUp,
  Settings,
  RefreshCw,
  ShoppingCart,
  Phone,
  CreditCard,
  Calendar,
  MessageSquare,
  MessageCircle,
  CheckCircle,
  Database,
  Bot,
  Languages,
  Globe,
  Truck,
  Building2,
  GraduationCap,
  HeartPulse,
  Home,
  User
} from "lucide-react";
export const coreServices = [
  {
    title: "Inbound Customer Support",
    points: ["24/7 Availability", "Query Resolution", "Order Assistance"],
    icon: (
      <Headset
        className="w-10 h-10"
        style={{ stroke: "url(#icon-gradient)" }}
      />
    ),
  },
  {
    title: "Outbound Sales & Lead Gen",
    points: ["Lead Qualification", "Cold Calling", "Appointment Setting"],
    icon: (
      <TrendingUp
        className="w-10 h-10"
        style={{ stroke: "url(#icon-gradient)" }}
      />
    ),
  },
  {
    title: "Technical Support (L1/L2/L3)",
    points: ["Troubleshooting", "Software Help", "Hardware Support"],
    icon: (
      <Settings
        className="w-10 h-10"
        style={{ stroke: "url(#icon-gradient)" }}
      />
    ),
  },
  {
    title: "Customer Retention & Renewals",
    points: ["Churn Reduction", "Loyalty Programs", "Feedback Loop"],
    icon: (
      <RefreshCw
        className="w-10 h-10"
        style={{ stroke: "url(#icon-gradient)" }}
      />
    ),
  },
  {
    title: "Order Management & Tracking",
    points: ["Order Processing", "Shipment Updates", "Returns Management"],
    icon: (
      <ShoppingCart
        className="w-10 h-10"
        style={{ stroke: "url(#icon-gradient)" }}
      />
    ),
  },
  {
    title: "Telemarketing & Promotions",
    points: ["Campaign Management", "Product Launches", "Market Surveys"],
    icon: (
      <Phone className="w-10 h-10" style={{ stroke: "url(#icon-gradient)" }} />
    ),
  },
  {
    title: "Collections & Payment Follow-Up",
    points: ["Payment Reminders", "Debt Recovery", "Invoice Clarification"],
    icon: (
      <CreditCard
        className="w-10 h-10"
        style={{ stroke: "url(#icon-gradient)" }}
      />
    ),
  },
  {
    title: "Appointment Scheduling",
    points: ["Calendar Management", "Confirmation Calls", "Rescheduling"],
    icon: (
      <Calendar
        className="w-10 h-10"
        style={{ stroke: "url(#icon-gradient)" }}
      />
    ),
  },
  {
    title: "Helpdesk & Ticketing Support",
    points: ["Ticket Creation", "Priority Handling", "SLA Monitoring"],
    icon: (
      <MessageSquare
        className="w-10 h-10"
        style={{ stroke: "url(#icon-gradient)" }}
      />
    ),
  },
  {
    title: "WhatsApp / Email / Chat Support",
    points: ["Omnichannel Support", "Instant Replies", "Chatbot Integration"],
    icon: (
      <MessageCircle
        className="w-10 h-10"
        style={{ stroke: "url(#icon-gradient)" }}
      />
    ),
  },
  {
    title: "Quality Assurance (QA)",
    points: ["Call Monitoring", "Performance Audits", "Training Feedback"],
    icon: (
      <CheckCircle
        className="w-10 h-10"
        style={{ stroke: "url(#icon-gradient)" }}
      />
    ),
  },
  {
    title: "Back-Office & Data Processing",
    points: ["Data Entry", "Form Processing", "Document Verification"],
    icon: (
      <Database
        className="w-10 h-10"
        style={{ stroke: "url(#icon-gradient)" }}
      />
    ),
  },
  {
    title: "AI IVR & Voicebot Handling",
    points: ["Automated Routing", "Voice Recognition", "Self-Service Options"],
    icon: (
      <Bot className="w-10 h-10" style={{ stroke: "url(#icon-gradient)" }} />
    ),
  },
  {
    title: "Multilingual Support",
    points: ["30+ Languages", "Native Speakers", "Cultural Alignment"],
    icon: (
      <Languages
        className="w-10 h-10"
        style={{ stroke: "url(#icon-gradient)" }}
      />
    ),
  },
  {
    title: "Industry-Specific Solutions",
    points: ["Tailored Workflows", "Compliance Adherence", "Sector Expertise"],
    icon: (
      <Globe className="w-10 h-10" style={{ stroke: "url(#icon-gradient)" }} />
    ),
  },
];

export const industryDetails = [
  {
    id: "spice",
    title: "Spice / Masala Lead Generation",
    content:
      "Specialized campaigns for the spice industry, targeting distributors, retailers, and bulk buyers. We understand the nuances of the FMCG market and help you expand your reach regionally and nationally.",
    icon: <CheckCircle className="w-6 h-6 text-white" />,
  },
  {
    id: "logistics",
    title: "Shipping & Logistics Support",
    content:
      "End-to-end support for logistics companies including shipment tracking, delivery scheduling, driver coordination, and customer notifications. We ensure your supply chain communication is seamless.",
    icon: <Truck className="w-6 h-6 text-white" />,
  },
  {
    id: "campaigns",
    title: "National & International Campaigns",
    content:
      "Scalable calling campaigns tailored for diverse markets. Whether it's a local product launch or a global survey, our multilingual teams adapt to the target audience for maximum impact.",
    icon: <Globe className="w-6 h-6 text-white" />,
  },
  {
    id: "bfsi",
    title: "Finance / BFSI",
    content:
      "Secure and compliant support for banking, financial services, and insurance. Services include loan verification, insurance renewals, fraud detection alerts, and general customer inquiries.",
    icon: <Building2 className="w-6 h-6 text-white" />,
  },
  {
    id: "education",
    title: "Education",
    content:
      "Student counseling, course enrollment support, and administrative assistance for educational institutions. We help bridge the gap between institutions and prospective students.",
    icon: <GraduationCap className="w-6 h-6 text-white" />,
  },
  {
    id: "healthcare",
    title: "Healthcare",
    content:
      "HIPAA-compliant patient support, appointment scheduling, telemedicine coordination, and insurance verification. Compassionate care starts with clear communication.",
    icon: <HeartPulse className="w-6 h-6 text-white" />,
  },
  {
    id: "realestate",
    title: "Real Estate",
    content:
      "Lead qualification for property sales, tenant inquiries, maintenance scheduling, and open house coordination. We help real estate professionals close deals faster.",
    icon: <Home className="w-6 h-6 text-white" />,
  },
];

export const whyChooseUsCards = [
  {
    label: "EXPERTISE",
    title: "Domain Knowledge",
    description: "Deep understanding of diverse industries.",
    icon: <User className="w-6 h-6 text-gray-700" strokeWidth={1.5} />,
  },
  {
    label: "SCALABILITY",
    title: "Grow With Us",
    description: "Flexible staffing to match your seasonal peaks.",
    icon: <TrendingUp className="w-6 h-6 text-gray-700" strokeWidth={1.5} />,
  },
  {
    label: "QUALITY",
    title: "QA Monitoring",
    description: "Rigorous quality checks for every interaction.",
    icon: <CheckCircle className="w-6 h-6 text-gray-700" strokeWidth={1.5} />,
  },
];
