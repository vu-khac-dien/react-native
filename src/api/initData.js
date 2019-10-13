const initData = () => (
    fetch('http://venusnetwork.xyz/api/')// eslint-disable-line
    .then(res => res.json())
);

export default initData;
