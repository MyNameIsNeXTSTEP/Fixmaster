import { styled } from "styled-components";

export const MyContainer = styled.div`
    margin: 10px 0;
`;

export const Card = styled.div`
    padding: 5px 15px 10px;
    border: 1px solid #c7c7c7;
    border-radius: 8px;

    margin-bottom: 15px;

    img {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }

    .pre-img {
        width: 100%;
        height: 300px;
        background-color: #89a6a6;
        border-radius: 10px;
    }
`;

export const SocialRow = styled.div`
    display: flex;
    margin-bottom: 30px;

    .left {
        display: flex;
        gap: 10px;
        margin-right: auto;
    }
`;

export const InfoRow = styled.div`
    margin-bottom: 30px;
    font-size: 20px;

    .adress {
        display: flex;
        gap: 10px;
        margin-bottom: 3px;
    }

    .chart {
        font-weight: 600;
    }
`;

export const AccordionPlaceholderItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
    border: 1px solid #d3d3d3;
    padding: 5px;
    margin-bottom: 5px;
`;
export const PlaceholderItem = styled.div`
    display: flex;
    gap: 5px;
    margin-bottom: 5px;
`;
