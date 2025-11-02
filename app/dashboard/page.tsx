'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import data from '../data/database.json';
import Header from '../home/components/header';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) router.push('/login');
    else setUser(JSON.parse(storedUser));
  }, [router]);

  if (!user) return null;

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className='flex justify-between'>
          <h1 className="text-3xl font-bold text-[#2E5A33] mb-4">
            Bem-vindo, {user.name}!
          </h1>

          <button
            onClick={() => {
              localStorage.removeItem('user');
              router.push('/');
            }}
            className="border-2 border-black text-black px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#2E5A33] transition"
          >
            Sair
          </button>
        </div>


        <p className="text-gray-700 mb-6">Seus vídeos disponíveis:</p>

        <div className="grid gap-6 md:grid-cols-2">
          {data.videos.map((video) => {
            const videoId = video.src.split('v=')[1];
            const embedUrl = `https://www.youtube.com/embed/${videoId}`;

            return (
              <div
                key={video.id}
                className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full rounded-2xl shadow-lg"
                    src={embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                  </iframe>
                </div>
                <p className="text-gray-600 mt-2">{video.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}
