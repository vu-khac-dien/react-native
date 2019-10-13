const searchProduct = (key) => {

const url = `http://venusnetwork.xyz/api/search.php?key=${key}`;
    return fetch(url)
    .then(res => res.json());
};

export default searchProduct;
