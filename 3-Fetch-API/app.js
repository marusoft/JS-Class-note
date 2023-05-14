const apiUrl = "https://jsonplaceholder.typicode.com/users";

const getUserData = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    // document.querySelector("#my-name").innerHTML = data[3].name

    let usersProfile = "";
    data.map((d) => {
      usersProfile += `<tr>
        <td>${d.id}</td>
        <td>${d.name}</td>
        <td>${d.username}</td>
        <td>${d.email}</td>
        <td>${d.address.city}</td>
    
     </tr>
    `;

      document.querySelector("#table-info").innerHTML = usersProfile;
    });
  } catch (error) {
    console.log(error);
  }
};

getUserData();
