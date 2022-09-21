import React, {useEffect, useRef, useState} from 'react';
import {WaterfallGrid} from 'react-waterfall-grid'
import LargeBlog from "./LargeBlog";

const BlogSection = () => {
    const [size, setSize] = useState(300);
    const ref = useRef();
    const news = [
        {
            image: 1,
            body: "1 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna."
        },
        {
            image: 2,
            body: "2 Policy analysts generally agree on a need for reform, " +
                "but not on which path policymakers should take... Policy" +
                " analysts generally agree on a need for reform, " +
                "but not on which path policymakers should take..."
        },
        {
            image: 3,
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

        return size < 50 ? size : size - 50;
    }

    return (
        <div ref={ref}>
            <WaterfallGrid
                children={
                    news.map((value, index, array) =>
                        <LargeBlog key={index} news={value} width={getColumnWidth()}/>
                    )
                }
                childWidth={getColumnWidth()}
                />
        </div>
    );
};

export default BlogSection;