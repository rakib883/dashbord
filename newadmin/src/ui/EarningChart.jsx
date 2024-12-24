import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { BarChart } from '@mui/x-charts/BarChart';
export default function EarningChart() {
  const [itemData, setItemData] = React.useState(null);
  const [axisData, setAxisData] = React.useState(null);

  const barChartsParams = {
    series: [
      {
        id: 'series-1',
        data: [500, 600, 400, 700, 800, 300, 900, 650, 450, 550, 700, 800],
        highlightScope: {
          highlight: 'item',
        },
      },
      {
        id: 'series-2',
        data: [400, 550, 450, 600, 750, 350, 850, 700, 500, 600, 750, 900],
        highlightScope: {
          highlight: 'item',
        },
      },
    ],
    xAxis: [
      {
        data: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        scaleType: 'band',
        id: 'axis1',
      },
    ],
    height: 400,
  };

  return (
    <Stack
      direction="column"
      spacing={4}
      sx={{
        width: '100%',
        boxSizing: 'border-box',
        mb:4
      }}
    >
      {/* Bar Chart Section */}
      <Box
        sx={{
          width: '100%',
          flexGrow: 1,
        }}
      >
        <BarChart
          {...barChartsParams}
          onItemClick={(event, data) => {
            console.log('Item clicked:', data);
            setItemData(data);
          }}
          onAxisClick={(event, data) => {
            console.log('Axis clicked:', data);
            setAxisData(data);
          }}
        />
      </Box>

      {/* Details Section */}
      <Stack
        direction="column"
        sx={{
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
         
        </Box>
      </Stack>
    </Stack>
  );
}
