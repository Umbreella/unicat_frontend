import React, {useState} from 'react';
import HorizontalLoader from "../loader/HorizontalLoader";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import LargeEvent from "./LargeEvent";

const EventsSection = (props) => {
    const data = props.data;
    const fetchMoreEvents = props.fetchMoreEvents;

    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const loadMoreNews = async () => {
        setIsLoadingMore(true);
        await fetchMoreEvents({
            variables: {
                firstNews: 0,
                afterNews: "",
                firstEvent: 6,
                afterEvent: data.pageInfo.endCursor,
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
                            <LargeEvent key={node.id}
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

export default EventsSection;