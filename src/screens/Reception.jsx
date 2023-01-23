import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import { Input, InputAdornment, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },

  {
    id: 'contact',
    label: 'Contact',
    minWidth: 170,
    align: 'left',
  },
  { id: 'email', label: 'Email', minWidth: 170 },
  {
    id: 'details',
    label: 'Details',
    minWidth: 170,
    align: 'left',
  },
  {
    id: 'checkIn',
    label: 'Check In',
    minWidth: 170,
    align: 'right',
  },
];

const rows = [
  {
    name: 'Dzelal',
    contact: '023232',
    email: 'dzelal_d@live.com',
    details: 'any any',
    checkIn: '02.02.2022',
  },
  {
    name: 'Dzelal',
    contact: '023232',
    email: 'dzelal_d@live.com',
    details: 'any any',
    checkIn: '02.02.2022',
  },
  {
    name: 'Dzelal',
    contact: '023232',
    email: 'dzelal_d@live.com',
    details: 'any any',
    checkIn: '02.02.2022',
  },
  {
    name: 'Dzelal',
    contact: '023232',
    email: 'dzelal_d@live.com',
    details: 'any any',
    checkIn: '02.02.2022',
  },
  {
    name: 'Dzelal',
    contact: '023232',
    email: 'dzelal_d@live.com',
    details: 'any any',
    checkIn: '02.02.2022',
  },
  {
    name: 'Dzelal',
    contact: '023232',
    email: 'dzelal_d@live.com',
    details: 'any any',
    checkIn: '02.02.2022',
  },
  {
    name: 'Dzelal',
    contact: '023232',
    email: 'dzelal_d@live.com',
    details: 'any any',
    checkIn: '02.02.2022',
  },
  {
    name: 'Dzelal',
    contact: '023232',
    email: 'dzelal_d@live.com',
    details: 'any any',
    checkIn: '02.02.2022',
  },
  {
    name: 'Dzelal',
    contact: '023232',
    email: 'dzelal_d@live.com',
    details: 'any any',
    checkIn: '02.02.2022',
  },
  {
    name: 'Dzelal',
    contact: '023232',
    email: 'dzelal_d@live.com',
    details: 'any any',
    checkIn: '02.02.2022',
  },
  {
    name: 'Dzelal',
    contact: '023232',
    email: 'dzelal_d@live.com',
    details: 'any any',
    checkIn: '02.02.2022',
  },
  {
    name: 'Dzelal',
    contact: '023232',
    email: 'dzelal_d@live.com',
    details: 'any any',
    checkIn: '02.02.2022',
  },
  {
    name: 'Dzelal',
    contact: '023232',
    email: 'dzelal_d@live.com',
    details: 'any any',
    checkIn: '02.02.2022',
  },
  {
    name: 'Dzelal',
    contact: '023232',
    email: 'dzelal_d@live.com',
    details: 'any any',
    checkIn: '02.02.2022',
  },
  {
    name: 'Dzelal',
    contact: '023232',
    email: 'dzelal_d@live.com',
    details: 'any any',
    checkIn: '02.02.2022',
  },
  {
    name: 'Dzelal',
    contact: '023232',
    email: 'dzelal_d@live.com',
    details: 'any any',
    checkIn: '02.02.2022',
  },
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        background: 'grey',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          width: '90%',
          height: 50,
          backgroundColor: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
        }}
      >
        <Typography variant="h6">Reception</Typography>
      </Box>
      <Box
        sx={{
          width: '90%',
          height: 50,
          backgroundColor: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
          flexDirection: 'row',
        }}
      >
        <Input
          sx={{ width: '39%' }}
          size="medium"
          placeholder="Search"
          id="input-with-icon-  "
          endAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
        />
      </Box>
      <Paper sx={{ width: '90%', overflow: 'hidden' }}>
        <TableContainer sx={{ height: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, i) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.name + i}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
