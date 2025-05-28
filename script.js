html2canvas(document.querySelector("#sign")).then(canvas => {
    let link = document.createElement('a');
    link.download = 'rambu-rambu.jpg';
    link.href = canvas.toDataURL("image/jpeg");
    document.body.appendChild(link);
    link.textContent = "Klik untuk mengunduh gambar";
});