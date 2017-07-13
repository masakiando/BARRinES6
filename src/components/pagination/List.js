import React, { PropTypes, Component } from 'react';
import { Pagination } from 'react-bootstrap';

class List extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      blogPosts: [],
      currentPageNumber: 1,
      totalItems: 1,
       itemsPerPage: 10
    };
    this.onDelete = this.onDelete.bind(this);
    this.updatePageSelect = this.updatePageSelect.bind(this);
  }

  componentDidMount() {
    fetchBlogPosts()
        .then(apiResponse => {
            console.log('blog posts', apiResponse);
            this.setState({
                blogPosts: apiResponse.data,
                currentPageNumber: apiResponse.currentPageNumber,
                totalItems: apiResponse.totalItems,
                itemsPerPage: apiResponse.itemsPerPage
            });
        });
  }

  updatePageSelect(number) {
    console.log('handle select', number);
    this.setState({currentPageNumber: number});
  }

  onDelete() {
    console.log('onDelete');
  }

  render() {
    let totalPages = Math.ceil(
      this.state.totalItems / this.state.numItemsPerPage
    );
    return (
        <div>
            <Table blogPosts={this.state.blogPosts}
                   onDelete={this.onDelete} />

            <Pagination
                bsSize="medium"
                items={totalPages}
                activePage={this.state.currentPageNumber}
                onSelect={this.updatePageSelect}/>
        </div>
    );
  }
} //List end

export default List;
