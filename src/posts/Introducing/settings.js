import Introducing from ".";
import small from "../../assets/posts/01small.jpg";
import large from "../../assets/posts/01large.jpg";

export default {
    title: "All ideas need a start",
    date: "25/10/2022",
    tag: null,
    description: "A quick introction to how this blog will work. 😊",
    smallImage: small,
    largeImage: large,
    renderContent: () => <Introducing />,
    relatedTopics: [2],
    readingTime: 1
};