import { Card, InfoRow, PlaceholderItem, SocialRow } from '../AccordeonItems/styled';
import { Placeholder, Spinner } from 'react-bootstrap';
import React from 'react';

export const PreloaderSalonCard = () => {
    return <div>
            <Card>
                <h2>
                    <PlaceholderItem>
                        <Placeholder size='sm' animation='wave' bg="secondary" xs={2}/>
                    </PlaceholderItem>
                </h2>
                <div className='pre-img'></div>
            </Card>

            <SocialRow>
                <div className='left'>
                    <a href='#!'>
                        <Placeholder.Button>
                            <Spinner animation="border" size="sm" />
                        </Placeholder.Button>
                    </a>
                    <a href='#!'>
                        <Placeholder.Button variant='success'>
                            <Spinner animation="border" size="sm" />
                        </Placeholder.Button>
                    </a>
                </div>
                    <Placeholder.Button variant='info'>
                            <Spinner animation="border" size="sm" />
                        </Placeholder.Button>
            </SocialRow>

            <InfoRow>
                <div className='chart'><PlaceholderItem>
                        <Placeholder size='sm' animation='wave' bg="secondary" xs={1}/>
                        <Placeholder size='sm' animation='wave' bg="secondary" xs={2}/>
                    </PlaceholderItem></div>
                <div>
                    <PlaceholderItem>
                        <Placeholder size='sm' animation='wave' bg="secondary" xs={2}/>
                        <Placeholder size='sm' animation='wave' bg="secondary" xs={1}/>
                    </PlaceholderItem>
                </div>
                <div><PlaceholderItem>
                        <Placeholder size='sm' animation='wave' bg="secondary" xs={1}/>
                        <Placeholder size='sm' animation='wave' bg="secondary" xs={2}/>
                    </PlaceholderItem></div>
            </InfoRow>
        </div>
}