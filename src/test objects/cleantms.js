fetch('https://runescape.wiki/api.php?format=json&action=parse&prop=text&disablelimitreport=1&text={{Travelling%20Merchant/api}}')
    .then(res => res.json())
    .then(data => {
        // turn data into a string
        const tmsdata = JSON.parse(data.text["*"]);

        //extract data for each item
        tmsdata.


        
    })

