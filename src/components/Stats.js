export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentPacked = numItems ? Math.round((numPacked / numItems) * 100) : 0;

  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "You got everything!"
          : `🧳You have ${numItems} items on your list, and you already packed 
        ${numPacked} (${percentPacked}%)`}
      </em>
    </footer>
  );
}
