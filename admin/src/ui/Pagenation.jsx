import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Pagenation() {
  return (
    <Stack spacing={2} className="text-[30px]">
      <Pagination count={10} color="primary" />
    </Stack>
  );
}
