import Image from "next/image";
import Link from "next/link";
import './globals.css';
import OgForm from "./components/OgForm";



export default function Home() {
  return (
    <main>
      <section>
        <div>
          <h1>Welcome to Mind Palace 🧠 🏰</h1>
          <h2>Better learning for everyone</h2>
          <p>Get ready for a multi-media, spatially driven learning experience</p>
        </div>
      </section>
      <section className="offerings-container">
        <h2>Current offerings:</h2>
        <div>
          <h3>How I made a bos-web-component</h3>
          <p className="italic">Walk thru of how I used bos-web-component to add a React webcam package to NEAR components</p>
          <Link href="https://www.tldraw.com/ro/w0P0esGHuQ4mV3c9d6zZA?v=-144,-667,5064,3736&p=z3JX94s4dvotSQxptSBy3" target="_blank">
            <Image 
              src="https://bafybeibajlmtr2xehts3lxgnhrffxak3iy73kztid5oprkbvwcnbypijlu.ipfs.w3s.link/bos-web-cover.png"
              width={640}
              height={300}
              alt="bos-web-component canvas"
            ></Image>
          </Link>
        </div>
      </section>
        
    </main>
  );
}
