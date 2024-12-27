import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function TotalSale({ sendItem }) {
  const chartContainerRef = React.useRef(null);
  const [dimensions, setDimensions] = React.useState({ width: 500, height: 150 });

  React.useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0]) {
        const { width, height } = entries[0].contentRect;
        setDimensions({
          width,
          height: height || 150, // Default height if container height is not dynamic
        });
      }
    });

    if (chartContainerRef.current) {
      resizeObserver.observe(chartContainerRef.current);
    }

    return () => {
      if (chartContainerRef.current) {
        resizeObserver.unobserve(chartContainerRef.current);
      }
    };
  }, []);

  // Ensure `totalSale` is a valid array.
  const xAxisData = Array.isArray(sendItem) ? sendItem : [];
  const seriesData = Array.isArray(sendItem) ? sendItem.map(() => Math.random() * 10) : [];

  return (
    <div ref={chartContainerRef} style={{ width: '100%', height: '150px' }} className="z-30 text-xs">
      <LineChart
        xAxis={[{ data: xAxisData }]}
        series={[
          {
            data: seriesData,
            color: 'green',
          },
        ]}
        width={dimensions.width}
        height={dimensions.height}
      />
    </div>
  );
}
