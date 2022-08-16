var App = React.createClass({ displayName: "App",
  getDefaultProps: function () {
    return {
      person: {
        name: 'Minji \'Lord Panda\' Joe',
        biography: 'Description / Designer' },

      image: 'http://static1.squarespace.com/static/55acc005e4b098e615cd80e2/t/57b057398419c2c454f09924/1471025851733/',
      quote: {
        content: 'Beautiful things don\'t ask for attention',
        source: 'The Secret Life of Walter Mitty' } };



  },
  render: function () {
    return /*#__PURE__*/(
      React.createElement("div", { className: "App" }, /*#__PURE__*/
      React.createElement(Image, { src: this.props.image }), /*#__PURE__*/
      React.createElement(Profile, { person: this.props.person, quote: this.props.quote })));


  } });


var Image = React.createClass({ displayName: "Image",
  render: function () {
    return /*#__PURE__*/(
      React.createElement("div", { className: "Image", style: { backgroundImage: 'url(' + this.props.src + ')' } }));

  } });


var Profile = React.createClass({ displayName: "Profile",
  render: function () {
    return /*#__PURE__*/(
      React.createElement("div", { className: "Profile" }, /*#__PURE__*/
      React.createElement("h1", { className: "Name" }, this.props.person.name), /*#__PURE__*/
      React.createElement("p", { className: "Bio" }, this.props.person.biography), /*#__PURE__*/
      React.createElement("div", { className: "Quote" }, /*#__PURE__*/
      React.createElement("blockquote", null, "\u201C ", this.props.quote.content, " \u201D"), /*#__PURE__*/
      React.createElement("div", { className: "byline" }, "\u2014 ", this.props.quote.source))));




  } });


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));