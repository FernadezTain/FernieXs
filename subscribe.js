import { useState } from "react";
import { useRouter } from "next/router";
import { DURATIONS } from "../data";

export default function Subscribe() {
  const router = useRouter();
  const { plan } = router.query || {};
  const [duration, setDuration] = useState(null);
  const [payment, setPayment] = useState(null);

  const handlePayment = () => {
    alert(
      `Оплата: ${plan}\nСрок: ${DURATIONS[duration][0]}\nСпособ оплаты: ${payment}`
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="bg-white rounded-3xl shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-4">Оформление подписки</h1>
        <p className="mb-2">
          <strong>Подписка:</strong> {plan}
        </p>

        {!duration ? (
          <>
            <p className="mb-2">Выберите срок действия:</p>
            <div className="grid grid-cols-3 gap-3">
              {Object.keys(DURATIONS).map((key) => (
                <button
                  key={key}
                  className="bg-gradient-to-r from-purple-400 to-indigo-500 text-white font-bold px-4 py-2 rounded-lg hover:scale-105 transition"
                  onClick={() => setDuration(key)}
                >
                  {DURATIONS[key][0]}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <p className="mb-2">
              <strong>Срок:</strong> {DURATIONS[duration][0]}
            </p>

            {!payment ? (
              <>
                <p className="mb-2">Способ оплаты:</p>
                <div className="flex gap-4 flex-wrap">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
                    onClick={() => setPayment("Семена")}
                  >
                    Семена - {DURATIONS[duration][2]}
                  </button>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
                    onClick={() => setPayment("DigitalCoins")}
                  >
                    DigitalCoins - {DURATIONS[duration][3]}
                  </button>
                </div>
              </>
            ) : (
              <>
                <p>
                  <strong>Способ оплаты:</strong> {payment}
                </p>
                <p>
                  <strong>Итого к оплате:</strong>{" "}
                  {payment === "Семена"
                    ? DURATIONS[duration][2]
                    : DURATIONS[duration][3]}
                </p>
                <button
                  onClick={handlePayment}
                  className="mt-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:scale-105 transition"
                >
                  Оплатить в боте
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
