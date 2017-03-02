var taglines = [
    'makes code'
];

$('.masthead .masthead-title small#tagline').text(
    taglines[Math.floor(Math.random() * taglines.length)]
);