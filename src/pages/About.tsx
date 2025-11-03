export default function About() {
  return (
    <div className="min-h-screen bg-[#0e1117] px-8 pb-8 font-sans leading-relaxed text-[#f0f0f0]">
      <div className="mx-auto flex max-w-150 flex-col gap-4 rounded-xl bg-[#161b22] p-8">
        <h1 className="text-3xl">About Crypt Dash</h1>
        <p>
          Crypto Dash is a simple React application that displays live
          cryptocurrency data using the CoinGecko API.
        </p>
        <p>
          You can explore the top cryptocurrencies by market cap, filter by name
          or symbol, and sort them by price, market cap, or 24-hour change.
        </p>
        <p>
          This project is built as part of a React tutorial to help you
          understand hooks, components, state management, and integrating with
          external APIs.
        </p>
        <p>
          🚀 Future features might include detailed coin views, favorites,
          pagination, and much more!
        </p>
      </div>
    </div>
  );
}
