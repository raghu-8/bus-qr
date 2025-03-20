import "./app.css";
import { useState } from "react";
import QRCode from "react-qr-code";
function App() {
  const [number, setNumber] = useState(0);
  const [qrCode, setQrCode] = useState(null);

  function formatString(str) {
    return str.toUpperCase().replace(/\s+/g, "");
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!number) {
      console.log("Please enter a number");
    }

    const qrcode = `http://rebrand.ly/tummoc?tummoc_qr=BMTC BUS ${formatString(
      number
    )}Bangalore&ref=tummoc_india`;
    console.log(formatString(number));
    console.log(qrcode);

    setQrCode(qrcode);
  }
  return (
    <section className="flex items-center justify-center min-h-[100vh]">
      <section className="width flex flex-col gap-10 ">
        <form
          className="w-[50%] mx-auto flex justify-between"
          onClick={handleSubmit}
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
            className="w-[20%] bg-amber-950 text-white"
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
