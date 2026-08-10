import { FadingVideo } from './components/FadingVideo';
import { ComputerModelsScene } from './components/ComputerModels';

function App() {
  return (
    <div className="w-full bg-black text-white font-body">
      
      {/* Section 1: Hero */}
      <section className="relative h-screen w-full overflow-hidden bg-black flex flex-col">
        {/* Background Video */}
        <FadingVideo 
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"
          className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
          style={{ width: '120%', height: '120%' }}
        />
      </section>

      {/* Section 2: Capabilities */}
      <section className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col">
        {/* Background Video */}
        <FadingVideo 
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_093722_ccfc7ebf-182f-419f-8a62-2dc02db7dd9d.mp4"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Content */}
        <div className="relative z-10 w-full h-full min-h-screen pointer-events-auto">
          {/* 3D Models */}
          <ComputerModelsScene />
        </div>
      </section>

    </div>
  );
}

export default App;
