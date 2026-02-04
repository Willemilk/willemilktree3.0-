export default function Checkerboard() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 opacity-5"
      style={{
        backgroundImage: `
          linear-gradient(45deg, #ff10f0 25%, transparent 25%),
          linear-gradient(-45deg, #ff10f0 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, #ff10f0 75%),
          linear-gradient(-45deg, transparent 75%, #ff10f0 75%)
        `,
        backgroundSize: '50px 50px',
        backgroundPosition: '0 0, 0 25px, 25px -25px, -25px 0px'
      }}
    />
  );
}
