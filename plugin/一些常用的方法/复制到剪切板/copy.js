function copy(el) {
    var range = document.createRange();
    var end = el.childNodes.length;
    range.setStart(el,0);
    range.setEnd(el,end);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy",false,null);
    selection.removeRange(range);
}
