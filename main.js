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


function calculateLovePercentage(ownName, loverName) {
    ownName = ownName
    loverName = loverName
    console.log(ownName)
    console.log(loverName)
    let lovePercentage = 0;
    
    for (let i = 0; i < Math.min(ownName.length, loverName.length); i++) {
        if (ownName[i] === loverName[i]) {
            lovePercentage += 10; // You can adjust this percentage as needed
        }
    }

    return Math.min(lovePercentage, 100); // Ensure the maximum percentage is 100
}




$("#subForm").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbzg2cd1cC-WuGAg59U-noCGym6-7mRFSA4j5wIYL0UJjlKdEBFj_IE9oodohcSY5UpRhw/exec",
        data:$("#subForm").serialize(),
        method:"post",
        success:function (response){
            const lovePercentage = calculateLovePercentage(ownName, loverName);
            alert(ownName + ", you love " + loverName + " " + lovePercentage + "%");
            window.location.reload()
                //window.location.href="http://127.0.0.1:5500/fake%20love%20test/sample.html"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})