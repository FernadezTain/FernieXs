import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold text-white mb-10 animate-pulse">
        Выберите подписку
      </h1>

      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-4">Fernie+</h2>
        <p className="mb-4">Преимущества:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Обновленный стиль профиля</li>
          <li>Уменьшенное время ожидания КД</li>
          <li>Безограниченный доступ к /ai</li>
          <li>Множество доп. бонусов</li>
        </ul>

        <Link href="/subscribe?plan=Fernie+">
          <a className="mt-6 inline-block bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform">
            Выбрать
          </a>
        </Link>
      </div>
    </div>
  );
}
