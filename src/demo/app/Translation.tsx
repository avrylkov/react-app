import React, {useEffect, useState} from "react";
import {IamToken, Translations} from "./types";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

function Translation() {

    //const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState('');
    const [translate, setTranslate] = useState('');

    function getTranslate() {
        return fetch('https://functions.yandexcloud.net/d4e5pkdk5ido3qdrusd1', {
            method: "POST",
            // mode: "no-cors",
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            body: JSON.stringify(query)
        })
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((data) => {
                return data
            }).catch(error => console.warn(error))
    }

    useEffect(() => {
        const fetchData = async () => {
                if (query === '') {
                    return
                }
                getTranslate().then(data => {
                    let translations: Translations = data
                    console.log(translations)
                    setTranslate('')
                    switch (translations.code) {
                        case 3:
                            setTranslate('Введите фразу')
                            return;
                        case 16:
                            setTranslate(translations.message)
                            return;
                        default:
                            setTranslate(translations.translations[0].text)
                    }
                })

        };
        //
        fetchData();
    }, [query]);

    return (
        <div>
            <label htmlFor="query">Yandex translations </label>
            <input
                name="query"
                type="text"
                value={query}
                onChange={event => setQuery(event.target.value)}
            />
            <p>{translate}</p>
        </div>
    );

}

export default Translation;