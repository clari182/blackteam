import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";

// Import SliceSimulator dynamically to avoid SSR issues
const SliceSimulatorWithNoSSR = dynamic(
  () => import('@slicemachine/adapter-next/simulator').then((mod) => {
    const { SliceSimulator } = mod;
    return ({ children }: { children: any }) => (
      <SliceSimulator>{children}</SliceSimulator>
    );
  }),
  { ssr: false }
);

// Import SliceZone dynamically too
const SliceZoneWithNoSSR = dynamic(
  () => import("@prismicio/react").then((mod) => {
    const { SliceZone } = mod;
    return ({ slices }: { slices: any[] }) => (
      <SliceZone slices={slices} components={require("../slices").components} />
    );
  }),
  { ssr: false }
);

export default function SliceSimulatorPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="p-10 text-center">
        <p>Loading Slice Simulator...</p>
      </div>
    );
  }

  return (
    <SliceSimulatorWithNoSSR>
      {(props: any) => <SliceZoneWithNoSSR slices={props.slices} />}
    </SliceSimulatorWithNoSSR>
  );
}
