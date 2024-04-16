let my_Report = {
       programmingLanguage: "good",
       circuitDesign: "good"
    }
    let result = JSON.stringify(my_Report)
    console.log(result)
    console.log(typeof result)
    let sec_res = JSON.parse(result)
    console.log(sec_res)
    console.log(typeof sec_res)