const formatTextBtn = document.getElementById('format-text-btn');
let str = "Product Backlog Item 162904: [Donations] Remove phone optional field from the fields group and add it conditioned to the marketing consent options"

let formatText = (str) => {
    str = str.replaceAll(' ', '-');
    str = str.toLowerCase();
    str = str.replace(/[\[\]{}.,:]/g, '');
    str = str.replace('product-backlog-item-', '');
    str = `feature/${str}`;
    return str;
}

formatTextBtn.addEventListener('click', () => {
    let str = "Product Backlog Item 162904: [Donations] Remove phone optional field from the fields group and add it conditioned to the marketing consent options"
    str = formatText(str);
    alert(str);
});