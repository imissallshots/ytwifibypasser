function loadnewpage(newsrc){
    var newloc = newsrc;
    document.getElementById('theiframe').setAttribute('src', newloc);
}

const getValueInput = () =>{
    let inputValue = document.getElementById("name").value; 
    var sample = document.getElementById("theiframe");
    sample.style.width = 1890;
    sample.style.height = 920;
    var filtered = inputValue.replace('https://www.youtube.com/watch?v=',"http://www.youtube.com/embed/");
    loadnewpage(filtered + "?enablejsapi=1&origin=http://example.com")
  }