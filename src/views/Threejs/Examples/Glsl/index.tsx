import useInitAll from '@/hooks/useInitAll';
import { useEffect } from 'react';
import glsl from '3DObjects/glsl';

const Glsl = () => {
  const { sceneRef, rendererRef } = useInitAll('threejs-examples');
  useEffect(() => {
    sceneRef.current?.add(glsl({ renderer: rendererRef.current! }));
    
  }, [rendererRef, sceneRef]);
  return (
    <>
      <div className="threejs-examples-main">
        <div id="threejs-examples"></div>
      </div>
    </>
  );
};

export default Glsl;
