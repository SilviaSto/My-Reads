import React, {Component} from 'react';


class Book extends Component {

    render(){

        let {cover,
            book,
            shelf,
            selectOptions} = this.props;

        return(
            <div className="book">
                <div className="book-top">
                <div className="book-cover" 
                style={{ width: 128, height: 193, backgroundImage: `url(${cover})`}}>
                </div>

                <div className="book-shelf-changer">
                    <select
                    value = {shelf}
                    onChange = {(event) =>
                        {selectOptions(book, event.target.value)}
                        }>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    
                    </select>
                </div>

                </div>

                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.authors}</div>

            </div>
        );
    }
}

export default Book;