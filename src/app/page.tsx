
interface Quote {
  id: number;
  quote: string;
  author: string;
}

export default async function HomePage() {
  const res = await fetch('http://localhost:3000/api/random-quote', {
    cache: 'no-store',
  });

  const data = await res.json();
  const quotes: Quote[] = data.quotes;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotes.map((quoteObj) => (
          <div
            key={quoteObj.id}
            className="bg-white p-5 rounded shadow hover:shadow-md transition"
          >
            <p className="text-gray-800 text-lg mb-2">{quoteObj.quote}</p>
            <p className="text-right text-gray-500 italic"> {quoteObj.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

















