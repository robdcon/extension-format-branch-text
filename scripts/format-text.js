export const formatText = (str) => {
    str = str.replaceAll(' ', '-');
    str = str.toLowerCase();
    str = str.replace(/[\[\]{}.,:]/g, '');
    str = str.replace('product-backlog-item-', '');
    str = `feature/${str}`;
    return str;
}