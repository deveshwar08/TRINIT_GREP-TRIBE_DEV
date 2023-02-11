import { Table } from "react-daisyui"
import { useEffect, useState } from "react";
import config from "../config/config";
import axios from "axios";
const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const temp = await axios.get(config.backend_url + '/ranks');
            setLeaderboard(temp.data);
        }
        fetchData();
    }, []);
    return (
        <Table>
            <Table.Head>
                <span />
                <span>Name</span>
                <span>Carbon Emission per request</span>
            </Table.Head>
            <Table.Body>
                {
                    leaderboard.map((value: any, index: number) => {
                        return (
                            <Table.Row>
                                <span>{index}</span>
                                <span>{value.url}</span>
                                <span>{value.carbon}</span>
                            </Table.Row>
                        )
                    })
                }
            </Table.Body>
        </Table>
    );
}

export default Leaderboard;