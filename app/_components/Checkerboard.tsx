export default function Checkerboard() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]"
      style={{
        backgroundImage: `
          linear-gradient(45deg, #ff10f0 25%, transparent 25%),
          linear-gradient(-45deg, #ff10f0 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #ff10f0 75%),
          linear-gradient(-45deg, transparent 75%, #ff10f0 75%)
        `,
        backgroundSize: '40px 40px',
        backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px',
        animation: 'bg-scroll 6s linear infinite',
      }}
    />
  );
}
