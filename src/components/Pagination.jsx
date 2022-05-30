import React from "react";
import { Button, ButtonGroup, Select } from "@chakra-ui/react";

const Pagination = ({ setLimit, setPage }) => {
  // TODO: Remove below const and instead import them from chakra

  return (
    <ButtonGroup variant="outline" spacing="6">
      <Button></Button>
      <Button
        colorScheme="blue"
        data-cy="pagination-first-button"
        onClick={() => setPage(1)}
      >
        First
      </Button>
      <Button
        colorScheme="blue"
        data-cy="pagination-previous-button"
        onClick={() => setPage((prev) => prev - 1)}
      >
        Previous
      </Button>
      <Select
        onChange={(e) => setLimit(e.target.value)}
        data-cy="pagination-limit-select"
      >
        <option value={3} data-cy="pagination-limit-3">
          3
        </option>
        <option value={6} data-cy="pagination-limit-6">
          6
        </option>
        <option value={9} data-cy="pagination-limit-9">
          9
        </option>
      </Select>
      <Button
        colorScheme="blue"
        data-cy="pagination-next-button"
        onClick={() => setPage((page) => page + 1)}
      >
        Next
      </Button>
      <Button
        colorScheme="blue"
        data-cy="pagination-last-button"
        onClick={() => setPage(3)}
      >
        Last
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;
