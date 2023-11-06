import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React  from 'react';

const SearchForm = (): JSX.Element => {

    return (
        <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Найти"
                aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
        </Form>
    )
}

export default SearchForm