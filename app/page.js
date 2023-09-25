'use client';
import Image from 'next/image';

const App = () => {
  return (
    <main>
      <div>
        <div className="text-description">find art, prompts, styles</div>
      </div>
      <div>
        <div id="logo-container">
          <Image
            id="logo"
            src="/FindArt.pro.svg"
            alt="FindArt.pro Logo"
            width={400}
            height={100}
            sizes="100vw"
            priority
          />
          <div>
            <Image
              className="screen"
              src="/screens/Main.jpg"
              alt="FindArt.pro screen"
              width={400}
              height={100}
              sizes="100vw"
              priority
            />
          </div>

          {/* <div>
            <Image
              className="screen"
              src="/screens/View.jpg"
              alt="FindArt.pro screen"
              width={400}
              height={100}
              sizes="100vw"
              priority
            />
          </div> */}
        </div>
      </div>
      <span className="soon">søøn..</span>
    </main>
  );
};

export default App;
