/**
 * Leads & Inquiries Storage Manager
 * Handles client-side persistent storage and management of contact form submissions
 */

const LEADS_STORAGE_KEY = 'vbh_leads_inquiries_v1';

export const INITIAL_LEADS = [
  {
    id: "lead-17260011001",
    name: "Rohan Kapoor",
    email: "rohan.kapoor@example.com",
    phone: "+91 98112 34567",
    mode: "online",
    area: "Career & Purpose",
    message: "Standing at a crossroads between staying at my current VP role or launching an independent venture. Seeking clarity on the right timing.",
    status: "new",
    createdAt: new Date(Date.now() - 2 * 3600 * 1000).toISOString()
  },
  {
    id: "lead-17260011002",
    name: "Pooja Singhania",
    email: "pooja.s@example.com",
    phone: "+91 98765 99881",
    mode: "offline",
    area: "Love & Relationships",
    message: "Would like to schedule an in-person session at your Noida office regarding recurring misunderstanding patterns in marriage.",
    status: "contacted",
    createdAt: new Date(Date.now() - 24 * 3600 * 1000).toISOString()
  },
  {
    id: "lead-17260011003",
    name: "Vikram Mehra",
    email: "v.mehra@globalinvest.com",
    phone: "+91 99990 12345",
    mode: "online",
    area: "Business & Partnerships",
    message: "Navigating a complex partnership dispute with a co-founder. Need unclouded perspective on the core dynamics.",
    status: "resolved",
    createdAt: new Date(Date.now() - 48 * 3600 * 1000).toISOString()
  }
];

export const getLeads = () => {
  try {
    const raw = localStorage.getItem(LEADS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(INITIAL_LEADS));
      return INITIAL_LEADS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : INITIAL_LEADS;
  } catch (err) {
    console.error("Error reading leads from storage:", err);
    return INITIAL_LEADS;
  }
};

export const saveLead = (leadData) => {
  const leads = getLeads();
  const newLead = {
    id: `lead-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    name: leadData.name?.trim() || 'Anonymous Seeker',
    email: leadData.email?.trim() || '',
    phone: leadData.phone?.trim() || '',
    mode: leadData.mode || 'online',
    area: leadData.area || 'General Question',
    message: leadData.message?.trim() || '',
    status: 'new', // 'new' | 'contacted' | 'resolved'
    createdAt: new Date().toISOString()
  };

  const updated = [newLead, ...leads];
  try {
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error("Error saving lead:", err);
  }
  return newLead;
};

export const updateLeadStatus = (leadId, status) => {
  const leads = getLeads();
  const updated = leads.map(lead => lead.id === leadId ? { ...lead, status } : lead);
  try {
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error("Error updating lead status:", err);
  }
  return updated;
};

export const deleteLead = (leadId) => {
  const leads = getLeads();
  const updated = leads.filter(lead => lead.id !== leadId);
  try {
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error("Error deleting lead:", err);
  }
  return updated;
};

export const resetLeadsToDefault = () => {
  localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(INITIAL_LEADS));
  return INITIAL_LEADS;
};

export const exportLeadsToCsv = () => {
  const leads = getLeads();
  if (!leads.length) return;

  const headers = ['ID', 'Date', 'Name', 'Email', 'Phone', 'Mode', 'Area of Inquiry', 'Status', 'Message'];
  const rows = leads.map(l => [
    l.id,
    new Date(l.createdAt).toLocaleString(),
    `"${(l.name || '').replace(/"/g, '""')}"`,
    `"${(l.email || '').replace(/"/g, '""')}"`,
    `"${(l.phone || '').replace(/"/g, '""')}"`,
    l.mode,
    `"${(l.area || '').replace(/"/g, '""')}"`,
    l.status,
    `"${(l.message || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `VBH_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
