import React, { useState } from "react";
import { Modal, Form, Button, Stack } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchModal = ({ show, handleClose }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Handle search logic here
    console.log("Searching for:", searchQuery);
    // You can perform any search-related actions here, e.g., fetching search results
    // For simplicity, let's just log the search query for now
    setSearchQuery("");
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header
        style={{ backgroundColor: "#366532", color: "white" }}
        className="divider d-flex align-items-center"
      >
        <Modal.Title className=" px-3">Search Query</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSearch}>
          <Stack
            style={{
              backgroundColor: "grey",
              color: "white",
              padding: "35px"
            }}
            className="py-4"
          >
            <Form.Group controlId="searchQuery" className="py-3">
              <Form.Control
                type="text"
                placeholder="Enter your search query"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Form.Group>
            <Button variant="success" type="submit" onClick={handleSearch}>
              <FontAwesomeIcon icon={faSearch} /> Search
            </Button>
          </Stack>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "#366532" }}>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SearchModal;
