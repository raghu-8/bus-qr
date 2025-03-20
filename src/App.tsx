import "./app.css";
import { useState } from "react";
import QRCode from "react-qr-code";
function App() {
  const [number, setNumber] = useState<string>("");
  const [qrCode, setQrCode] = useState<string | null>(null);

  function formatString(str: string) {
    return str.toUpperCase().replace(/\s+/g, "");
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!number) {
      alert("Please enter bus number");
      return;
    }

    const qrcode = `http://rebrand.ly/tummoc?tummoc_qr=BMTC BUS ${formatString(
      number
    )}Bangalore&ref=tummoc_india`;

    setQrCode(qrcode);
  }
  return (
    <section className="flex items-center justify-center min-h-[100vh]">
      <section className="width flex flex-col gap-10 ">
        <h1 className="text-center text-2xl font-bold text-amber-950">
          Bus Number QR Code Generator for Tummoc App
        </h1>
        <form
          className="w-[100%] sm:w-[50%] mx-auto flex flex-col items-center justify-center  sm:justify-between sm:flex-row gap-10 sm:g-0 "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter BMTC Number"
            className="w-[70%] border-1 p-2"
            required
          />
          <input
            type="submit"
            value={"Submit"}
            className="py-3  w-[30%] bg-amber-950 text-white"
          />
        </form>

        <div className="w-fit mx-auto text-center">
          {qrCode && <QRCode value={qrCode} />}
        </div>
      </section>
    </section>
  );
}

export default App;
