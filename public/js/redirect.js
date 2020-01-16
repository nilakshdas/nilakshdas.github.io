const redirects = [
    {
        key: 'meetpolo',
        url: 'https://docs.google.com/document/d/1Lqe-wkploJmziTFzlEwgTR8WNW494R9LxOWbBck4myI/edit?usp=sharing'
    }
]

if (window.location.hash) {
    let hash = window.location.hash.substring(1);
    redirects.forEach(e => {
        if (hash == e.key) {
            window.location.replace(e.url);
        }
    });
}