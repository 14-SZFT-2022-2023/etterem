import { useEffect, useState } from 'react';

const Home = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const letolt = async () => {
            try {
                const adat = await fetch('http://localhost:3500/food');
                const data = await adat.json();
                setFoods(data);
            } catch (error) {
                console.log(error);
            }
        };

        letolt();
    }, []);

    return (
        <div>
            {foods.map((elem, index) => (
                <ul key={index}>
                    <li>
                        <h2>{elem.name}</h2>
                    </li>
                    <li>
                        <p>{elem.description}</p>
                    </li>
                    <li>
                        <p>Price: {elem.price} Ft</p>
                    </li>
                    <li>
                        <img src={elem.image} alt="kep" />
                    </li>
                </ul>
            ))}
        </div>
    );
};

export default Home;
