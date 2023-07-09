import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useState
} from 'react';
import {Table} from "react-bootstrap";
import HorizontalLoader from "../loader/HorizontalLoader";
import {gql, useQuery} from "@apollo/client";
import {getMyAttempts} from "../../http/graphql/AttemptsGQL";

const TableAttempts = (props) => {
    const {loading, data, isLoading} = props.data;
    const {fetchMore} = props.func;

    if (data === undefined || loading) {
        return (
            <div className="m-5">
                <HorizontalLoader/>
            </div>
        )
    }

    return (
        <>
            <Table striped responsive className="table-attempts">
                <thead>
                <tr>
                    <th>№</th>
                    <th>Окончание</th>
                    <th>Длительность</th>
                    <th>Правильных ответов</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.myAttempts.edges.map(({node}, index) => {
                        const dateEnd = new Date(node.timeEnd);
                        const dateEndFormated = dateEnd.toLocaleDateString() + " (" + dateEnd.toLocaleTimeString() + ")";

                        return (
                            <tr key={node.id}>
                                <td>{index + 1}</td>
                                <td>{dateEndFormated}</td>
                                <td>{node.duration} с.</td>
                                <td>{node.countTrueAnswer}</td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </Table>
            {
                isLoading ?
                    <div className="m-5">
                        <HorizontalLoader/>
                    </div> :
                    <>
                        {
                            data.myAttempts.pageInfo.hasNextPage &&
                            <div className="courses_button mt-3"
                                 onClick={() => fetchMore()}>
                                <div>
                                    Загрузить еще
                                </div>
                            </div>
                        }
                    </>
            }
        </>
    );
};

export default TableAttempts;