import React from 'react';
import {Container, Row} from "react-bootstrap";
import SmallNews from "./SmallNews";
import LargeNews from "./LargeNews";
import TitleSection from "../others/TitleSection";
import {createQuery} from "../../http";
import {useQuery} from "@apollo/client";
import {getFirstNews} from "../../http/NewsApi";

const NewsSection = () => {
    const section= {
        title: "Последние новости",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing" +
            "elit. Donec vel gravida arcu. Vestibulum feugiat, sapien " +
            "ultrices fermentum congue, quam velit venenatis sem"
    }

    const newsQuery = getFirstNews(5, null);
    const query = createQuery([newsQuery]);
    const {data} = useQuery(query);

    if (data === undefined){
        return <></>;
    }

    const {node: firstNews} = data.allNews.edges[0];
    const allNews = data.allNews.edges.slice(1);

    console.log(allNews)

    return (
        <div className="news">
            <Container>
                <TitleSection section={section}/>
                <Row className="news_row">
                    <div className="col-lg-7 news_col">
                        {
                            <LargeNews data={firstNews}/>
                        }
                    </div>

                    <div className="col-lg-5 news_col">
                        <div className="news_posts_small">
                            {
                                allNews.map(({node}, index, array) =>
                                    <SmallNews key={node.id} data={node}/>
                                )
                            }
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default NewsSection;