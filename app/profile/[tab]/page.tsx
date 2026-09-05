export default function ProfileStubPage({ params }: { params: { tab: string } }) {
  const label = params.tab.replace(/-/g, " ");

  return (
    <main className="px-4 pb-36 pt-8">
      <div className="rounded-2xl bg-white p-6 text-center shadow-[0_2px_14px_rgba(17,24,39,0.06)]">
        <h1 className="text-[24px] font-bold capitalize text-text-primary">{label}</h1>
        <p className="mt-2 text-[13px] text-text-secondary">This is a stub route for the 1Fi profile flow.</p>
      </div>
    </main>
  );
}
