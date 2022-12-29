import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);
  const [count, setCount] = React.useState(100);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <Typography sx={{position:"relative", right:"400px", top:"20px"}}>Showing {page} from {count} data</Typography>
      <span><Pagination count={3} page={page} onChange={handleChange} color="primary"  sx={{position:"relative", right:"-800px",top:"5px"}}/></span>
    </div>
  );
}
