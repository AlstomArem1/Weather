import { useEffect, useState } from "react";
import axios from "axios";
export default function Api() {
    const [data, setData] = useState(null);
    const [text,setText] = useState();
    const getData = async () => {
        const apiKey = "e0ddc538b3415427caeb7901218a30dd";
        const cityname = "seoul";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}`

        axios
            .get(url)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={(e) => {
                if (e.key === "Enter" && text) {
                    getData();
                    setText("");
                }
            }}
            >
            </input>

            {data && data.weather[0].description}

            <img 
                src={`https://api.openweathermap.org/img/w/${data.weather[0].icon}.png`}
            />
        </div>
    )

}