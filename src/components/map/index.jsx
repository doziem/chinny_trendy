const { default: dynamic } = require('next/dynamic');

const Map = dynamic(() => import('./Map'), {
  ssr: false,
});

export default Map;
