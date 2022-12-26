function pageCount(n: number, p: number): number {
    // First page is always on the right when we open the book
    if (p == 1) {
        return 0;
    }
    
    // if it's last page or it's in the last opened position
    if (p == n || (p == n - 1 && n % 2 != 0)) {
        return 0;
    }
    
    // Since this are n = 1 math operations, we can afford to do both and get the min
    
    // Page turns from the start
    const pagesFromTheStart = Math.floor(p / 2);
    // Page turns from the end
    if (n % 2 == 0) {
        var pagesFromTheEnd = Math.ceil((n - p) / 2);
    } else {
        var pagesFromTheEnd = Math.floor((n - p) / 2);
    }
    
    return Math.min(pagesFromTheStart, pagesFromTheEnd);
}

export default pageCount;
