import React, {useEffect, useRef, useState} from 'react';
import {CSSGrid, makeResponsive, measureItems, layout} from "react-stonecutter";
import LargeBlog from "./LargeBlog";

const BlogSection = () => {
    const [size, setSize] = useState(null);
    const ref = useRef();
    const news = [
        {
            image: 1,
            body: "1 Policy analysts generally agree on a need for reform, " +
                "but not on which path policymakers should take..."
        },
        {
            image: 1,
            body: "2 Policy analysts generally agree on a need for reform, " +
                "but not on which path policymakers should take... Policy" +
                " analysts generally agree on a need for reform, " +
                "but not on which path policymakers should take..."
        },
        {
            image: 1,
            body: "3 qwerqwerqwerqwer"
        },
        {
            image: 1,
            body: "4 Policy analysts generally agree on a need for reform, " +
                "but not on which path policymakers should take... Policy" +
                " analysts generally agree on a need for reform, " +
                "but not on which path policymakers should take..." +
                "Policy analysts generally agree on a need for reform, "
        },
        {
            image: 1,
            body: "5 Policy analysts generally agree on a need for reform, " +
                "but not on which path policymakers should take..."
        },
        {
            image: 1,
            body: "6 Policy analysts generally agree on a need for reform, " +
                "but not on which path policymakers should take..."
        },
        {
            image: 1,
            body: "7 Policy analysts generally agree on a need for reform, " +
                "but not on which path policymakers should take... Policy" +
                " analysts generally agree on a need for reform, " +
                "but not on which path policymakers should take..."
        },
        {
            image: 1,
            body: "8 qwerqwerqwerqwer"
        }
    ];

    const Grid = makeResponsive(measureItems(CSSGrid), {
        maxWidth: 1346,
    });

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        setSize(ref.current.clientWidth);
        return () => {
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    const updateDimensions = () => {
        if (ref.current) {
            setSize(ref.current.clientWidth);
        }
    };

    const getColumnWidth = () => {
        if (size >= 936)
            return size / 3 - 20;

        if (size >= 696)
            return size / 2 - 20;

        return size;
    }

    return (
        <div ref={ref}>
            <Grid
                component="div"
                columnWidth={getColumnWidth()}
                gutterWidth={30}
                gutterHeight={30}
                duration={0}
                layout={layout.pinterest}
                easing="ease-out"
            >
                {
                    news.map((value, index, array) =>
                        <div key={index}>
                            <LargeBlog columnWidth={getColumnWidth}
                                       news={value}/>
                        </div>
                    )
                }
            </Grid>
        </div>
    );
};

export default BlogSection;