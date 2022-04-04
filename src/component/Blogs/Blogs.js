import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2>Whit is Semantic Tag </h2>
            <p>Semsntic is a html5 tag system .Semantic means this shortcoming by defining specific tags to indicate directly what is play by the content those tag being. That explicit information helps robots like Google and Bing to better understanding which contents is important.By adding semantic HTML tags to your pages, you provide additional information that helps Google and Bing understand the roles and relative importance of the different parts of your page.And rank it properly. </p>
            <h2>What is context API?</h2>
            <p>Context api is a way to pass data throuth multiple component without passing props.For a more in-depth definition, it provides a way for you to make particlar data availabel to all component throughoute the component tree no matter how deeply nested that component may be.context API solves one major problem prop drilling. Even if you are not familiar with the term, if you have worked on a React.js-app, it has probably happened to you. Prop drillings is the processing of getting data from component A to component Z by passing it through multiple layers of intermediary React components. Components will receive props indirectly and yo.</p>
        </div>
    );
};

export default Blogs;