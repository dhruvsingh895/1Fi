import Link from "next/link";
import {
  ChevronRight,
  FileText,
  HelpCircle,
  LogOut,
  Package,
  PiggyBank,
  ShieldCheck,
  User,
  Users,
} from "lucide-react";

const quickActions = [
  { href: "/profile/profile-details", icon: User, title: "Profile details", subtitle: "Name, contact and KYC info" },
  { href: "/profile/purchases", icon: Package, title: "Purchases", subtitle: "Orders, invoices and loan status" },
  { href: "/profile/pledge-history", icon: PiggyBank, title: "Pledge history", subtitle: "Funds you pledged or released" },
  { href: "/profile/invite-friends", icon: Users, title: "Invite friends", subtitle: "Share the app, earn rewards", badge: "EARN ₹500" },
  { href: "/profile/support-faqs", icon: HelpCircle, title: "Support & FAQs", subtitle: "Find answers or contact us" },
  { href: "/profile/privacy-policy", icon: ShieldCheck, title: "Privacy policy", subtitle: "How we handle your data" },
  { href: "/profile/terms-and-conditions", icon: FileText, title: "Terms & conditions", subtitle: "Rules governing your use" },
];

export default function ProfilePage() {
  return (
    <main className="space-y-5 px-4 pb-36 pt-6">
      <div>
        <h1 className="text-[24px] font-bold text-text-primary">Profile</h1>
        <p className="mt-1 text-[13px] text-text-secondary">Manage your account settings and personal preferences.</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-light text-[20px] font-bold text-primary">U</div>
        <div>
          <div className="text-[16px] font-bold text-text-primary">User</div>
          <div className="text-[13px] text-text-secondary">+91 8742619053</div>
        </div>
      </div>

      <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-text-secondary">QUICK ACTIONS</div>

      <div className="space-y-3">
        {quickActions.map(({ href, icon: Icon, title, subtitle, badge }) => (
          <Link key={title} href={href} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-[0_2px_14px_rgba(17,24,39,0.06)]">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-light text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <div className="text-[14px] font-semibold text-text-primary">{title}</div>
                {badge && (
                  <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-white">{badge}</span>
                )}
              </div>
              <div className="text-[12px] text-text-secondary">{subtitle}</div>
            </div>
            <ChevronRight className="h-5 w-5 text-text-secondary" />
          </Link>
        ))}
      </div>

      <button type="button" className="flex w-full items-center justify-center gap-2 rounded-full border border-border-subtle bg-white px-4 py-3 text-[15px] font-semibold text-danger">
        <LogOut className="h-4 w-4" />
        Log out
      </button>

      <div className="pt-2 text-center text-[12px] text-text-secondary">
        Made with <span className="text-primary">♥</span> by 1Fi
      </div>
    </main>
  );
}
