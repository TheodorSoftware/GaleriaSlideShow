import React ,{useEffect, useState} from 'react';
import './mainPage.scss';
import Card from '../../components/Card/Card';
import axios from 'axios';
import { SuccesCode } from '../../contants/StatusCode';

const MainPage = (props) =>{

    const [cardsInfo,setCardsInfo] = useState([]);
    const [error, setError] = useState('');

    useEffect( () => {
        axios.get('http://localhost:3000/paintings')
            .then( (response) => {
                if(!response.status === SuccesCode){
                    throw new Error('Data not found!')
                } else {
                    setCardsInfo(response.data);
                }
            })
            .catch( (error) => {
                setError(error);
            })
            .finally( () => {
                console.log('Call finish to execute!');
            })
    }, [])

    return (
        <div className='content'>
            <div className='content__main'>
                {
                    cardsInfo && cardsInfo.map( (card) => {
                        return (
                            <Card
                                key= {card.id}
                                name= {card.name}
                                artist= {card.artist}
                                thumbnailImage= {card.images.thumbnailImage}
                            >
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MainPage;