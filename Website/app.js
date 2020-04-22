const postData = async function(url='', data= {}) {
    console.log('Data '+data);
    const response = await fetch(url, {
        method : 'POST',
        credentials : 'same-origin',
        headers : {
            'Content-type':'application/json',
        },
        body : JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
}

postData('/add', {'answer':'good'});
