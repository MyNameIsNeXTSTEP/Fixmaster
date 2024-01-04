import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, {useEffect, useState} from 'react';
import salonsData from "../../salonsData";
import styled from "styled-components";
import {Alert} from "react-bootstrap";
import {Link} from "react-router-dom";

const SearchSalon = styled.div`
    > * {
      text-decoration: none;
      color: black;
      &:hover {
        text-decoration: underline;
      }
    }
`

const SearchForm = (): JSX.Element => {

    const [search, setSearch] = useState('')

    const filteredSaloon = salonsData.filter((salon) => {
        return salon.info.title.toLowerCase().includes(search.toLowerCase())
    })

    filteredSaloon.map((salon) => {
        console.log(salon.info.title)
    })

    return (
        <Form className="d-flex" style={{position: "relative"}}>
            <Form.Control
                type="search"
                placeholder="Найти"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {search &&
                <Alert variant={'light'} style={{position: "absolute", top: '50px', left: '0', zIndex: '2', width: '210px'}}>
                    {filteredSaloon.map((salon) => {
                        return (
                            <SearchSalon>
                                <Link to={`/salon/${salon.info.id}`}>
                                    {salon.info.title}
                                </Link>
                            </SearchSalon>
                        )
                    })}
                </Alert>}
            {window.innerWidth > 787 ? <Button variant="outline-success">Search</Button> : <></>}
        </Form>
    )
}

export default SearchForm