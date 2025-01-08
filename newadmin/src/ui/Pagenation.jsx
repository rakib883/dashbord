import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Pagenation() {
  return (
    <Stack spacing={2} className="md:text-[30px] xxs:text-xs">
      <Pagination count={10} color="primary" />
    </Stack>
  );
}
