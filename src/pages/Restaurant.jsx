import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Card from '../components/Card';
import authHeader from '../services/auth.header';
import Loading from '../components/Loading';
import * as loadingData from '../Loading/Loading1.json';
import Swal from 'sweetalert2'

const URL = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;
const config = {
    auth: {
        username: USERNAME,
        password: PASSWORD,
    },
    headers: authHeader()
};

const Restaurant = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(
        () => {
        const fetcAllRestaurant = async () => {
            try {
                const res = await axios.get(`${URL}/restaurants`, config)
                setRestaurants(res.data);
                setLoading(false)
            } catch (error) {
                console.error(error);
            }
        }
        setLoading(true)
        fetcAllRestaurant();
    }, [])

    const handDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await api.delete(`/restaurants/${id}`);
                    await Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    window.location.reload();
                } catch (error) {
                    console.error(error);
                }
            }
        })

    }

    return (
        <div>


            <h1>Restaurant</h1>
            <div className="row">
                {
                    !loading ? (
                        <div className="restaurants">
                            {
                                restaurants.map(restaurant => {
                                    return (
                                        <Card restaurant={restaurant}
                                            key={restaurant.id} />
                                    );
                                })
                            }
                        </div>) : (<Loading animation={loadingData} />)
                }

            </div>
        </div>
    )
}

export default Restaurant