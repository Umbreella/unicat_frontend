import React, {useState} from 'react';
import MediumNews from "./MediumNews";
import HorizontalLoader from "../loader/HorizontalLoader";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

const NewsSection = (props) => {
    const data = props.data;
    const fetchMoreNews = props.fetchMoreNews;

    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const loadMoreNews = async () => {
        setIsLoadingMore(true);
        await fetchMoreNews({
            variables: {
                firstNews: 6,
                afterNews: data.pageInfo.endCursor,
                firstEvent: 0,
                afterEvent: "",
            }
        });
        setIsLoadingMore(false);
    };

    return (
        <div>
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 767: 2, 991: 3}}
            >
                <Masonry>
                    {
                        data.edges.map(({node}) =>
                            <MediumNews key={node.id}
                                        data={node}/>
                        )
                    }
                </Masonry>
            </ResponsiveMasonry>
            {
                isLoadingMore ?
                    <div style={{marginTop: 70}}>
                        <HorizontalLoader/>
                    </div> :
                    <>
                        {
                            data.pageInfo.hasNextPage &&
                                <div className="load_more"
                                     onClick={() => loadMoreNews()}>
                                    Показать еще
                                </div>
                        }
                    </>
            }
        </div>
    );
};

export default NewsSection;