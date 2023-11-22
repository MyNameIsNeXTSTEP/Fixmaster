import React from 'react';
import { Link } from 'react-router-dom';
import BaseHttpRequest from '../Interactors/doApiRequest';
import { EHttpRequestMethods } from '../Interactors/types';

const url = new URL(`http://${process.env.FIXMASTER_API_URL}`);
// @todo Delete after testing on prod
console.log(
    new BaseHttpRequest(url).send({
        uri: '/api/business',
        method: EHttpRequestMethods.GET,
        headers: {
            'Acces-Control-Allow-Origin': '*',
        }
    })
);

const MainPage = (): JSX.Element => {
	return (
        <ul>
            <Link to='/salon/1'>Салон 1</Link><br/>
            <Link to='/salon/2'>Салон 2</Link><br/>
            <Link to='/salon/3'>Салон 3</Link><br/>
            <Link to='/salon/4'>Салон 4</Link><br/>
            <Link to='/salon/5'>Салон 5</Link><br/>
        </ul>
    );
};

export default MainPage;