// BarcodeScanner.tsx
import React, { useEffect, useRef } from "react";
import Quagga from "quagga";

const BarcodeScanner: React.FC = () => {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      Quagga.init(
        {
          inputStream: {
            type: "LiveStream",
            target: videoRef.current,
            constraints: {
              width: 640,
              height: 480,
              facingMode: "environment", // or 'user' for front camera
            },
          },
          decoder: {
            readers: ["code_128_reader"], // specify the barcode types you want to read
          },
        },
        (err: any) => {
          if (err) {
            console.error(err);
            return;
          }
          Quagga.start();
        }
      );

      Quagga.onDetected((data: any) => {
        alert(`Barcode detected: ${data.codeResult.code}`);
        Quagga.stop();
      });

      return () => {
        Quagga.stop();
      };
    }
  }, []);

  return <div ref={videoRef} style={{ width: "100%", height: "auto" }} />;
};

export default BarcodeScanner;
