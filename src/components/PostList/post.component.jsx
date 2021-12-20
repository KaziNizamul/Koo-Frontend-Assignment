import React from "react";
import Posts from "../Posts/posts.component";
import Pagination from "react-js-pagination";

class PostList extends React.Component {
  // URL = "https://gorest.co.in/public/v1/posts";

  constructor() {
    super();

    this.state = {
      fetchLink: "",
      data: [],
      activePage: 0,
      totalPages: 0,
      limit: 0
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    URL = "https://gorest.co.in/public/v1/posts";
    fetch(`${this.state.fetchLink ? this.state.fetchLink : URL}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          data: json.data,
          activePage: json?.meta?.pagination?.page,
          totalPages: json?.meta?.pagination?.total,
          limit: json?.meta?.pagination?.limit
        });
      });
  };

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState(
      {
        activePage: pageNumber,
        fetchLink: `${URL}?page=${pageNumber}`
      },
      function callback() {
        console.log(this.state.fetchLink);
        this.fetchData();
      }
    );
  }

  render() {
    return (
      <div className="p-5">
        {this.state.data.map(({ id, title, body }) => {
          return <Posts postBody={body} postID={id} postTitle={title} />;
        })}

        <div className="paginate d-flex justify-content-center">
          <Pagination
            itemClass="page-item"
            linkClass="page-link"
            activePage={this.state.activePage}
            itemsCountPerPage={this.state.limit}
            totalItemsCount={this.state.totalPages}
            pageRangeDisplayed={10}
            onChange={this.handlePageChange.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default PostList;
