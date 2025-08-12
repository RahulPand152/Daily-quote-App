export const revalidate = 60; 

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto text-center bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">About Daily Quote App</h1>
      <p className="text-gray-600">
        The Daily Quote App fetches random inspirational quotes using Next.js 14,
        demonstrates Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR),
        and uses Tailwind CSS for a responsive design.
      </p>
    </div>
  );
}
