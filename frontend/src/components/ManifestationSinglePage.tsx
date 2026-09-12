import { useEffect } from 'react';
import ManifestationTraining from './ManifestationTraining';

export default function ManifestationSinglePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#eddcff] min-h-screen font-sans antialiased text-[#110A24] pt-16 md:pt-20 w-full max-w-full overflow-x-hidden">
      <main>
        <ManifestationTraining isStandalonePage={true} />
      </main>
    </div>
  );
}

