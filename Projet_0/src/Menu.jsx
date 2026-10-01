export default function Menu() {
  return (
    <aside className="w-full md:w-52 bg-slate-600 text-white p-5 flex flex-col shrink-0">
      <h3 className="text-xs font-bold uppercase mb-3 text-slate-300">Menu</h3>
      <nav className="flex flex-col gap-2">
        <a href="#" className="p-2 rounded hover:bg-slate-500 text-white font-medium">Accueil</a>
        <a href="#" className="p-2 rounded hover:bg-slate-500 text-white">Étudiants</a>
        <a href="#" className="p-2 rounded hover:bg-slate-500 text-white">Notes</a>
      </nav>
    </aside>
  );
}