let ownName = document.getElementById("name")
let loverName = document.getElementById("lname")

function show(){
    if(ownName.value == ""){
        alert("please fill your name");
        document.form.name.focus()
        return false
    }
    if(loverName.value == ""){
        alert("please fill your lovers name");
        document.form.lname.focus()
        return false
    }
    if(ownName.value == loverName.value){
        alert("dont make me fool")
        document.form.lname.focus()
        return false
    }
    return true
}




$("#subForm").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbzg2cd1cC-WuGAg59U-noCGym6-7mRFSA4j5wIYL0UJjlKdEBFj_IE9oodohcSY5UpRhw/exec",
        data:$("#subForm").serialize(),
        method:"post",
        success:function (response){
            alert(ownName.value + " you loves him/her 75%")
            window.location.reload()
                //window.location.href="http://127.0.0.1:5500/fake%20love%20test/sample.html"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})