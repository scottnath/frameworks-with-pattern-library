var showRT = function () {
    return React.createElement('article', { 'className': show.class }, React.createElement('figure', { 'className': show.figure.class }, React.createElement('img', {
        'src': show.figure.img.src,
        'alt': show.figure.img.alt,
        'className': show.figure.img.class
    }), React.createElement('figcaption', { 'className': show.figure.caption.class }, show.figure.caption.text)), React.createElement('h1', { 'className': show.title.class }, show.title.text), React.createElement('section', { 'className': show.body.class }, '\n\t\t', show.body.text, '\n\t'));
};