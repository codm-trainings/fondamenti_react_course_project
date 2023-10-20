import React, { useEffect, useState } from 'react';
import {
  DatatableWrapper,
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader,
} from 'react-bs-datatable';
import { Link } from 'react-router-dom';
import {
  Container, Row, Table, Col,
} from 'reactstrap';

// Create table headers consisting of 4 columns.
const headers = [
  { title: 'Name', prop: 'name' },
  { title: 'Description', prop: 'description' },
  { title: 'Food Pairing', prop: 'food_pairing' },
  { title: 'Detail', prop: 'detail', cell: (row) => (<Link to={`/beers/${row.id}`}>See beer</Link>) },
];

const sleep = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

function Home() {
  const [dataLoading, setDataLoading] = useState(false);
  const [dataError, setDataError] = useState(false);
  const [tableData, setTableData] = useState([]);

  const cleanData = (dataToClean) => dataToClean.map((b) => ({
    id: b.id,
    description: b.description,
    name: b.name,
    food_pairing: b.food_pairing.join('/'),
  }));

  // on mount
  useEffect(() => {
    setDataLoading(true);
    sleep(0)
      .then(() => fetch('https://api.punkapi.com/v2/beers')
        .then((r) => r.json())
        .then(
          (beerData) => {
            setTableData(cleanData(beerData));
            setDataLoading(false);
          },
        ))
      .catch(() => {
        setDataError(true);
        setDataLoading(false);
      });
  }, []);

  return (
    <>
      <h2> Home </h2>
      <Container>
        {dataLoading && <span> Loading </span>}
        {dataError && <span>Error loading data, try later</span>}
        {tableData.length !== 0 && (
        <DatatableWrapper
          paginationOptionsProps={{
            initialState: {
              rowsPerPage: 10,
              options: [10, 20],
            },
          }}
          body={tableData}
          headers={headers}
        >
          <Row>
            <Col>
              <Pagination />
            </Col>
            <Col>
              <PaginationOptions />
            </Col>
          </Row>
          <Table>
            <TableHeader />
            <TableBody />
          </Table>
        </DatatableWrapper>
        )}

      </Container>
    </>
  );
}

export default Home;
