export const projects = [
    {
        title: 'Grocery Recommendation (Apriori)',
        link: 'https://github.com/yrohit1295/recommendationSystem',
        institute: 'National College of Ireland',
        place: 'Dublin, Ireland',
        period: 'Jul 2021 – Aug 2021',
        description:
            'Implemented market basket analysis using the Apriori algorithm on a grocery dataset. Used Hadoop HDFS for distributed file storage and MRJob for MapReduce execution. Performed data cleaning via MapReduce to improve computation time. Found that increasing support confidence and iteration count improved performance. Explored Apriori algorithm trade-offs such as memory usage and scalability.',
        technologies: ['Python', 'Git', 'Hadoop', 'MRJob'],
    },
    {
        title: 'OTT Insights via MapReduce',
        link: 'https://github.com/yrohit1295/diaproject',
        institute: 'National College of Ireland',
        place: 'Dublin, Ireland',
        period: 'May 2021 - May 2021',
        description:
            'Analyzed streaming data from OTT platforms using MapReduce. Extracted insights like average ratings from IMDb and Rotten Tomatoes, platform exclusivity of content, and total content distribution across platforms. Designed for scalability and large dataset handling using MapReduce techniques.',
        technologies: ['Python', 'Git', 'MapReduce'],
    },
];
