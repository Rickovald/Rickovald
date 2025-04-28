import { FC, lazy, ReactElement, Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Drawer } from "drawer/Drawer";
import { Blog } from "blog/Blog";
import { Fallback } from "./Fallback";
const Main = lazy(async () => ({
  default: (await import('@/pages/Main')).Main,
}));
const Resume = lazy(async () => ({
  default: (await import('@/pages/Resume/Resume')).Resume,
}));
const Error404 = lazy(async () => ({
  default: (await import('@/pages/Error404/Error404')).Error404,
}));

// const Blog = lazy(async () => ({
//   default: (await import('@/pages/Blog')).Blog,
// }));
export const AppRouter: FC = (): ReactElement => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);

  return (
    <div
      className={transitionStage}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransitionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    ><Suspense fallback={<Fallback />}>
        <Routes location={displayLocation}>
          <Route path="/" element={<Main />} />
          <Route path="/resume" element={
            <div style={{ marginTop: '80rem' }}>
              <Resume />
            </div>
          } />
          <Route path="/drawer" element={
            <div style={{ marginTop: '80rem' }}>
              <Drawer />
            </div>

          } />
          <Route path="/blog" element={
            <div style={{ marginTop: '80rem' }}>
              <Blog />
            </div>

          } />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </div>
  );
};
