import { Play } from "lucide-react";

const MobilisationVideo = () => {
  return (
    <section id="video-mobilisation" className="bg-white py-16 sm:py-20">
      <div className="container mx-auto max-w-6xl px-5">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-red-700">
            <Play className="h-4 w-4" /> À voir et à partager
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            La mobilisation en vidéo
          </h2>
          <p className="mt-3 text-slate-600">
            Découvrez la vidéo et partagez-la autour de vous.
          </p>
        </div>

        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-xl">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube-nocookie.com/embed/7WR6SEVFZmo"
              title="Vidéo de mobilisation du 5 novembre 2026"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-slate-500">
          La lecture est assurée par YouTube. <a className="font-semibold text-red-700 hover:underline" href="https://youtu.be/7WR6SEVFZmo" target="_blank" rel="noreferrer">Ouvrir la vidéo sur YouTube</a>
        </p>
      </div>
    </section>
  );
};

export default MobilisationVideo;
