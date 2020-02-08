let dragc = document.querySelector(".drag-content")
dragc.addEventListener("dragover", function(e){
    e.preventDefault()
dragc.classList.add("active")
dragc.style="background:yellowgreen; color:white;"
})
dragc.addEventListener("dragleave",function(){
    dragc.classList.remove("active")
})
dragc.addEventListener("drop",function(e){
    e.preventDefault()
    dragc.classList.remove("active")
    AddTabaleData(e.dataTransfer.files)

})

function AddTabaleData(img){
    for(var myimg of img){
        var reader= new FileReader();
        const tr=document.createElement("tr")

    if(myimg.type.match("image*")){
         reader.onload=function(read){
          const imgTd=document.createElement("td");
          const img=document.createElement("img");
          img.src=read.target.result;
          img.width=200;
          img.height=200;
          imgTd.appendChild(img);
          tr.insertBefore(imgTd,tr.firstChild)
       }
       reader.readAsDataURL(myimg)
       const nametd=document.createElement("td")
       nametd.innerText=myimg.name

       const sizetd=document.createElement("td")
       sizetd.innerText=(myimg.size/1024).toFixed(2)+"kb"
       var n=new Date()

       const lastdatetd=document.createElement("td")
       lastdatetd.innerText=n.getFullYear()+"-"+n.getMonth()+"-"+n.getDate()

       const typetd=document.createElement("td")
       typetd.innerText=myimg.type

       const removetd=document.createElement("td")
       const iremove=document.createElement("i")
       iremove.className="fas fa-times";
       removetd.appendChild(iremove)
       iremove.onclick=function(){
           this.parentNode.parentNode.remove()
       }


       tr.appendChild(nametd)
       tr.appendChild(sizetd)
       tr.appendChild(lastdatetd)
       tr.appendChild(typetd)
       tr.appendChild(removetd)

       document.querySelector(".dropTable tbody").appendChild(tr)
       document.querySelector(".dropTable table").classList.remove("d-none")
       
    }
 }
}