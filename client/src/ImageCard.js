import React from 'react';

class ImageCard extends React.Component {
  render() {
    return (
      <div className="column is-3">
        <div className="card" >
          <div className="card-image">
            <figure className="image is-4by3">
              <img alt={this.props.alt} src={this.props.src} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{new Date(this.props.date).toLocaleDateString("en-GB", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCard;
