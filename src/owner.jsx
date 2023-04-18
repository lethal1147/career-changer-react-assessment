import { useState, useEffect } from "react"
import Layout from "./layout";
import styles from "./style/owner.module.css"

const kim = {
    name: 'Kim',
    group: 'Group E',
    number: 15,
    imageURL: 'https://cdn.discordapp.com/attachments/717397754715832411/1094828520145952768/195564007_5705610859480132_1815730202402286261_n.jpg',
    bio: "Now I am a learner in JSD4 bootcamp, My hobbies is playing video game 🎮 and watching movies 🍿. I love Momo paradise!"
}

export default function Owner() {
    const [data, setData] = useState({})
    // useEffect to fake fetch data
    useEffect(() => setData(kim),[]);

    return (
        <Layout>
            <div className={styles.owner}>
                <h1>{data.name} - {data.group} - {data.number}</h1>
                <img width={350} src={data.imageURL} alt={data.name} />
                <h3>Short Biography:</h3>
                <p>{data.bio}</p>
            </div>
        </Layout>
    )
}